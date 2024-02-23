---
date: "2020-06-17T00:00:00.000Z"
updatedAt: "2022-04-01T09:09:38.679Z"
title: "Coder avec Crystal pour ne pas perdre la boule, deuxième partie"
description: Découvrons le langage Crystal ensemble !
tags:
  - crystal
---

## Résumé de l'épisode précédent

C'est ici: [première partie](https://sieg.fr/ied/crystal-01)

Nous avons installé Crystal, découvert quelques possibilités de `crystal` et `shards`. Nous avons fait un bon vieux «Hello World!», et initié le squelette de notre application, dans lequel nous avons ajouté une sous commande pour afficher l'aide, et une pour la version.

Le code correspondant à la fin de la première partie est disponible [à cette adresse](https://git.sr.ht/~siegfriedehret/crystal-tuto), au tag [partie-01](https://git.sr.ht/~siegfriedehret/crystal-tuto/refs/partie-01).

Aujourd'hui, nous allons poser les premières briques de notre application.

Le but de cette petite application est de faire un semblant de [abook](http://abook.sourceforge.net/), une application pour gérer ses données de contacts que j'aime beaucoup.

## Avant de reprendre

[Crystal 0.35.0](https://crystal-lang.org/2020/06/09/crystal-0.35.0-released.html) est sorti !

Dirigez-vous vers [la page d'installation](https://crystal-lang.org/install/) pour installer cette nouvelle version.

## Des contacts ?

Commençons par définir ce qu'est un contact. Nous allons faire simple, avec:

- un ensemble prénom(s) et nom.
- un ou plusieurs emails.

Nous avons aperçu les «class» dans l'épisode précédent. Ici nous allons utiliser une «[struct](https://crystal-lang.org/reference/syntax_and_semantics/structs.html)».

Une différence importante entre classes et structs est que ces dernières sont passées par valeur et non par référence.

Nous pouvons donc créer le fichier "src/structs/contact.cr", avec le contenu suivant:

```crystal
require "yaml"

module Myapp
  struct Contact
    include YAML::Serializable
    property name : String
    property emails : Array(String)?

    def initialize(@name : String, @emails : Array(String)?)
    end
  end
end
```

Nous remarquons `include YAML::Serializable`, qui permet d'ajouter des méthodes à nos structs pour permettre de les sérialiser. Pour plus de détails, c'est [par ici](https://crystal-lang.org/api/0.35.0/YAML/Serializable.html). Ceci est arrivé avec Crystal 0.35 et remplace l'ancien ([YAML.mapping](<https://crystal-lang.org/api/0.35.0/YAML.html#mapping(_properties_,strict=false)-macro>) qui est déprécié, mais toujours disponible en dépendance: [yaml_mapping.cr](https://github.com/crystal-lang/yaml_mapping.cr)).

Le nom `name` est de type `String` et est obligatoire.
Pour les adresses emails `emails`, le type est `Array(String)` et la présence de `?` à la fin indique que cette propriété est optionnelle (elle peut être égale à [`Nil`](https://crystal-lang.org/api/0.35.0/Nil.html) si non remplie).

Autre chose importante: `property`. Crystal contient plusieurs mots-clés définissant les accès aux propriétés que je vous laisse découvrir sur l'API car les exemples sont simples: [Object#getter](https://crystal-lang.org/api/0.35.0/Object.html#getter%28%2Anames%2C%26block%29-macro), [Object#setter](https://crystal-lang.org/api/0.35.0/Object.html#setter%28%2Anames%29-macro), [Object#property](https://crystal-lang.org/api/0.35.0/Object.html#property%28%2Anames%2C%26block%29-macro).

Nous allons gérer une liste de contact, il faut donc créer une autre struct dans "src/structs/list.cr":

```crystal
require "yaml"
require "./contact"

module Myapp
  struct List
    include YAML::Serializable
    property contacts : Array(Contact)

    def initialize
      @contacts = Array(Contact).new
    end
  end
end
```

Les 2 structs contiennent une méthode [`initialize`](https://crystal-lang.org/reference/syntax_and_semantics/new,_initialize_and_allocate.html), qui sert de constructeur et permettra d'initialiser nos objets.

Ne vous inquiétez pas pour le caractère "@" qui traîne, nous en reparlerons dans quelques lignes.

## Stockage de nos contacts

Avant de pouvoir en ajouter, il faut savoir où les mettre. Nous allons les stocker dans un fichier nimmé "myapp.yaml" qui se trouvera dans le répertoire de votre utilisateur.

Nous allons créer une classe "Config" dans le fichier "src/lib/config.cr":

```crystal
require "yaml"
require "../structs/list"

module Myapp
  class Config
    @@config_path : Path = Path.home / "myapp.yaml"
    property list : List

    def initialize
      if File.exists? @@config_path
        @list = List.from_yaml(File.read(@@config_path))
      else
        @list = List.new

        save
      end
    end

    def contacts
      @list.contacts
    end

    def add_contact(contact : Contact)
      @list.contacts << contact
      save
    end

    private def save
      File.open(@@config_path, "w") { |f| @list.to_yaml(f) }
    end
  end
end
```

Nous commençons par "require" les dépendances nécessaires au bon déroulement de ce fichier.

Nous avons donc des variables préfixées par `@` (comme vu un peu plus haut) ou `@@`. Ce sont des variables d'[instance](https://crystal-lang.org/reference/syntax_and_semantics/new,_initialize_and_allocate.html) (`@`) ou de [classe](https://crystal-lang.org/reference/syntax_and_semantics/class_variables.html) (`@@`).

La ligne `@@config_path : Path = Path.home / "myapp.yaml` est intéressante. Elle fait appel à l'API [Path](https://crystal-lang.org/api/0.35.0/Path.html) qui représente un chemin vers un fichier et qui contient plein de méthodes liées aux possibles opérations sur celui-ci. Ici nous utilisons [`/`](<https://crystal-lang.org/api/0.35.0/Path.html#/(part:Path%7CString):Path-instance-method>) pour joindre des `Path` comme [`Path.home`](https://crystal-lang.org/api/0.35.0/Path.html#home:Path-class-method) ou une chaîne de caractères.

Notre classe contient 4 méthodes: "initialize" que nous connaissons déjà, "contacts", "add_contact" et "save".

- "initialize" va vérifier que le fichier de configuration existe pour le charger, ou va utiliser une structure vide. Notons le point d'interrogation à la fin de [`File.exists?`](<https://crystal-lang.org/api/0.35.0/File.html#exists?(path:Path%7CString):Bool-class-method>) qui indique que cette méthode retourne vrai (`true`) ou faux (`false`).
- "contacts" retourne les contacts. Nous n'avons pas de mot clé "return" rencontré dans bon nombre de langages. La dernière expression est retournée automatiquement !
- "add_contact" permet... D'ajouter un contact. [`<<`](<https://crystal-lang.org/api/0.35.0/Array.html#%3C%3C(value:T)-instance-method>) est un alias de la classique méthode [`push`](<https://crystal-lang.org/api/0.35.0/Array.html#push(value:T)-instance-method>) pour ajouter un élément à un tableau.
- "save" permet d'enregistrer la configuration. `from_yaml` est injectée par le `include YAML::Serializable`. Cette fonction est préfixée par le mot clé `private` qui permet de limiter la [visibilité](https://crystal-lang.org/reference/syntax_and_semantics/visibility.html) de cette méthode.

Dans la fonction "load", nous utilisons la struct `List`, avec une méthode `from_yaml` qui est ajoutée par le `include YAML::Serializable` mentionné précédemment, qui va permettre de remplir notre struct à partir de ce qui est passé.

## De nouvelles commandes

Nous allons ajouter les commandes suivantes à notre application:

- "add" pour ajouter un contact.
- "show" pour afficher un contact.

### Ajouter un contact

Nous voulons pouvoir ajouter un contact de la façon suivante:

```shell
❯ myapp add name="Jane Doe" email="jane.doe@example.com"
```

Sans surprise, nous allons créer un fichier "src/commands/add.cr" avec le contenu suivant:

```crystal
require "../lib/config"
require "../structs/*"

module Myapp
  module Commands
    class Add
      def initialize(@config : Config, args : Array(String))
        name = args.find { |el| el.starts_with? "name=" }

        emails = args
          .select { |el| el.starts_with? "email=" }
          .map { |el| el.split("=")[1] }

        add(name, emails)
      end

      def add(name : String | Nil, emails : Array(String))
        if name.nil?
          puts "We need a name!"
        else
          @config.add_contact Contact.new(name.split("=")[1], emails)
        end
      end
    end
  end
end
```

Ici, notre constructeur "initialize" va lire le nom `name` et les emails `emails` à partir des arguments `args` que nous allons passer.

`args` est un [Array](https://crystal-lang.org/api/0.35.0/Array.html), et la méthode [find](<https://crystal-lang.org/api/0.35.0/Enumerable.html#find(if_none=nil,&)-instance-method>) est héritée de [Enumerable](https://crystal-lang.org/api/0.35.0/Enumerable.html), tout comme [select](<https://crystal-lang.org/api/0.35.0/Enumerable.html#select(pattern)-instance-method>) mais pas [map](<https://crystal-lang.org/api/0.35.0/Array.html#map(&block:T-%3EU)forallU-instance-method>), qui existe aussi sur Enumerable mais est réimplémentée dans Array de façon optimisée.

La fonction `add` va vérifier que nous avons bien un nom pour notre contact et l'ajouter à notre configuration. Autrement, nous utilisons [puts](<https://crystal-lang.org/api/0.35.0/toplevel.html#puts(*objects):Nil-class-method>) pour afficher un message dans la console.

Notons que `name` a pour type `String | Nil`, et l'utilisation de `.nil?` pour vérifier la présence ou nom d'une valeur.

### Afficher un contact

Nous voulons pouvoir ajouter un contact de la façon suivante:

```shell
❯ myapp search jane
```

Nous allons créer un fichier "src/commands/show.cr" avec le contenu suivant:

```crystal
require "../lib/config"

module Myapp
  module Commands
    class Show
      def initialize(@config : Config, args : Array(String))
        args.each do |contact_name|
          show contact_name
        end
      end

      private def show(contact_name : String)
        @config.contacts
          .select { |e| e.name.downcase.includes? contact_name.downcase }
          .each do |contact|
            contact.print
          end
      end
    end
  end
end
```

Cette fois, "initialize" est utile et reçoit 2 arguments:

- `config : Config` qui contient notre configuration, avec nos données (si présentes) et des méthodes pour nous aider à gérer nos contacts.
- `args : Array(String)` qui contient des arguments à passer qui nous servirons à définir notre contact.

La méthode `show` va parcourir la liste de contacts pour trouver les noms correspondants.

Il nous faut de plus créer la fonction `print` dans notre struct pour le contact (src/structs/contact.cr):

```crystal
    def print
      puts "#{@name}: #{if @emails.nil?
                          "no email found"
                        else
                          @emails.join(", ")
                        end}"
    end
```

Là il se passe quelque chose de curieux: le compilateur n'est pas content et nous dit la chose suivante:

```shell
❯ shards build
Dependencies are satisfied
Building: myapp
Error target myapp failed to compile:
Showing last frame. Use --error-trace for full trace.

In src/structs/contact.cr:18:35

 18 | @emails.join(", ")
              ^---
Error: undefined method 'join' for Nil (compile-time type is (Array(String) | Nil))
```

Même si nous gérons bien le cas où `@emails` serait `Nil`... Effectivement, `@emails` est une variable d'instance donc le compilateur ne peut pas s'assurer que la valeur sera toujours correcte entre la condition et l'utilisation. Nous devons donc utiliser:

```crystal
    def print
      emails = @emails

      puts "#{@name}: #{if emails.nil?
                          "no email found"
                        else
                          emails.join(", ")
                        end}"
    end
```

Ne vous inquiétez pas pour les indentations, le formatage devrait se faire normalement lorsque vous sauvez le fichier.

## Brancher le tout

Nous allons éditer le fichier "src/cli.cr" pour qu'il devienne:

```crystal
require "option_parser"
require "./commands/*"
require "./lib/config"

module Myapp
  DEFAULT_COMMAND = "help"

  def self.run
    config = Config.new

    OptionParser.parse(ARGV) do |opts|
      opts.unknown_args do |args, options|
        command = args[0]? || DEFAULT_COMMAND

        case command
        when "add"
          Commands::Add.new(config, args[1..-1])
        when "help"
          Commands::Help.run
        when "show"
          Commands::Show.new(config, args[1..-1])
        when "version"
          Commands::Version.run
        else
          puts "Unknown command: #{command}"
        end
      end
    end
  end
end
```

Nous ajoutons donc l'import de notre configuration `require "./lib/config"` et son initialisation `config = Config.new`, et les 2 commandes avec les instances de classes que nous créons pour `Commands::Add` et `Commands::Show` en lui passant la configuration et les arguments intéressants.

## Mettre à jour l'aide

Éditons le fichier `src/commands/help.cr`:

```crystal
module Myapp
  module Commands
    class Help
      def self.run
        puts <<-HELP
      myapp <command> [<options>]

      Available commands:

        add name=<name> email=<email>   To add a contact
        show <partial name>             To list matching contacts
     HELP

        exit
      end
    end
  end
end
```

## On vérifie que ça fonctionne

Exécutez `shards build` à la racine du projet. Ensuite, `cd bin/` puis lançons notre application:

```shell
❯ ./myapp add name="Jane Doe" email="jane.doe@example.com"
```

Si on affiche le fichier de config, on trouve bien nos informations:

```shell
❯ cat ~/myapp.yaml
---
contacts:
- name: Jane Doe
  emails:
  - jane.doe@example.com
```

Utilisons notre application pour chercher nos informations de contact:

```shell
❯ ./myapp show jane
Jane Doe: jane.doe@example.com
```

Et voilà!

## À bientôt pour la suite

Notre application est toute simple et nous avons fait nos premiers pas dans le monde objet de Crystal. Nous sommes aussi allés un peu plus loin dans l'utilisation de la librairie standard qui est bien fournie.

Le code est disponible [à cette adresse](https://git.sr.ht/~siegfriedehret/crystal-tuto), au tag [partie-02](https://git.sr.ht/~siegfriedehret/crystal-tuto/refs/partie-02).

Lors de la prochaine sessions, nous améliorerons un tout petit peu notre application d'exemple et nous parlerons test !

## Références

- [new, initialize and allocate](https://crystal-lang.org/reference/syntax_and_semantics/new,_initialize_and_allocate.html)
- [Classes and methods](https://crystal-lang.org/reference/syntax_and_semantics/classes_and_methods.html)
- [Class variables](https://crystal-lang.org/reference/syntax_and_semantics/class_variables.html)
