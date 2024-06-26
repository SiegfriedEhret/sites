---
date: 2020-05-20T00:00:00.000Z
updatedAt: 2022-04-01T09:06:45.666Z
title: "Coder avec Crystal pour ne pas perdre la boule, première partie"
description: Découvrons le langage Crystal ensemble !
tags:
  - crystal
---

«Coder avec Crystal pour ne pas perdre la boule» est le titre d'une conférence que j'aurais eu l'honneur de présenter au [BreizhCamp](https://www.breizhcamp.org/) ainsi qu'à [Devoxx France](https://www.devoxx.fr/). Ces conférences ont malheureusement été annulées suite à la situation liée au Covid-19.

Voici donc la première partie d'une petite série sur ce que je souhaitais aborder.

## Avant de démarrer...

Les choses comme `ceci` ou

```text
cela
```

sont des morceaux de code ou des commandes.

Quand vous voyez `❯ ` dans un bloc, c'est que la suite sur la même ligne est une commande à exécuter. Les lignes qui suivent sont le résultat.

## Crystal ?

[![Le logo de Crystal](/assets/contentful/ChK308uj9HCJfv3IGHxEd/4045723f4d95a5612c501cc15166f2fa/logo.png)](https://crystal-lang.org/media/)

Crystal est un langage généraliste inspiré de Ruby et qui cible des performances proches du C. Il est bien placé dans les étoiles sur GitHub (14.8k) entre Scala (12.7k) et Elixir (16.9k) et est accompagné d'une petite communauté bien productive.

La première version officielle, 0.1.0, est [sortie en juin 2014](https://crystal-lang.org/2014/06/19/crystal-0.1.0-released.html).

Nous en sommes actuellement à la version [0.34.0](https://crystal-lang.org/2020/04/06/crystal-0.34.0-released.html), sortie le 6 avril 2020. Nous nous rapprochons de la [version 1.0](https://crystal-lang.org/2020/03/03/towards-crystal-1.0.html).

## Installation

Le [site officiel](https://crystal-lang.org/install/) contient tout ce qu'il faut pour installer Crystal sur plusieurs types de distributions Linux, sur MacOS, ainsi que Windows Subsystem for Linux.

J'utilise Crystal sur [Archlinux](https://wiki.archlinux.org/index.php/Crystal) et sur MacOS, sans problème.

Une fois installé, vous aurez accès à 2 commandes: `crystal` et `shards`.

Le [wiki](https://github.com/crystal-lang/crystal/wiki#editor-support) contient une partie sur le support des éditeurs. Des modules additionnels existent pour certains, regroupés dans l'organisation GitHub [crystal-lang-tools](https://github.com/crystal-lang-tools).

J'utilise [Sublime Text](https://www.sublimetext.com/) avec le [module adéquat](https://github.com/crystal-lang-tools/sublime-crystal).

## Les commandes

### crystal

Voici quelques commandes disponibles avec `crystal`:

- `crystal init TYPE (DIR | NAME DIR)` permet de démarrer un projet (on voit ça un tout petit peu plus loin).
- `crystal spec` permet de lancer les tests.
- `crystal docs` permet de générer la documentation.

Essayez `crystal help` pour découvrir les autres possibilités.

### shards

`shards` permet d'aller un peu plus loin. On utilise `shards` pour gérer les dépendances et d'autres choses.

Voici quelques commandes disponibles avec `shards`:

- `shards build` permet de construire le projet en cours.
- `shards install` permet d'installer les dépendances définies dans le fichier "shard.yml" du projet (on y vient).
- `shards update` permet de mettre à jour les dépendances.

Essayez `shards help` pour découvrir les autres possibilités.

## Bonjour le monde

Aller, on code (un peu) ! C'est le moment du classique [Hello, world!](https://fr.wikipedia.org/wiki/Hello_world)

Créez un fichier "hello.cr" et ajoutez-y le contenu suivant:

```crystal
puts "Hello, world!"
```

Ensuite, un coup de `crystal run hello.cr` et le tour est joué.

Félicitations, vous avez fait votre premier programme en Crystal !

## Démarrer un vrai projet

Nous allons utiliser `crystal init`. Cette commande permet de démarrer une application ou une librairie.

Voici un exemple pour démarrer une application: `crystal init app myapp`. Le résultat est le suivant:

```shell
❯ crystal init app myapp
    create  /home/sweethome/myapp/.gitignore
    create  /home/sweethome/myapp/.editorconfig
    create  /home/sweethome/myapp/LICENSE
    create  /home/sweethome/myapp/README.md
    create  /home/sweethome/myapp/.travis.yml
    create  /home/sweethome/myapp/shard.yml
    create  /home/sweethome/myapp/src/myapp.cr
    create  /home/sweethome/myapp/spec/spec_helper.cr
    create  /home/sweethome/myapp/spec/myapp_spec.cr
Initialized empty Git repository in /home/sweethome/myapp/.git/
```

Crystal a créé pour nous un répertoire "myapp" avec tous les fichiers pour bien démarrer. Cerise sur le gâteau, c'est un dépôt git.

Jetons un œil au fichier "shard.yml", qui contient les métadonnées liées à l'application:

```yaml
name: myapp
version: 0.1.0

authors:
  - Your Name <email@example.com>

targets:
  myapp:
    main: src/myapp.cr

crystal: 0.34.0

license: MIT
```

Nous pouvons construire notre application avec `shards build` dans le répertoire du projet, pour produire notre binaire `myapp` dans le répertoire bin/.

Nous pouvons exécuter ce fichier

```shell
# Dans ~/myapp
❯ cd bin
❯ ./myapp

```

Il ne se passe rien... Pour le moment !

## Les mains dans le camboui

### Point d'entrée de l'application

Le code de l'application se trouve dans le dossier "src/", avec un unique fichier "myapp.cr":

```crystal
# TODO: Write documentation for `Myapp`
module Myapp
  VERSION = "0.1.0"

  # TODO: Put your code here
end
```

C'est le point d'entrée de notre programme. Ce fichier reste souvent assez minimal.

Nous remarquons `module Myapp` dans . Un [module](https://crystal-lang.org/reference/syntax_and_semantics/modules.html) permet de regrouper un ensemble d'objets, fonctions... Un module peut contenir d'autres modules, des [classes](https://crystal-lang.org/reference/syntax_and_semantics/classes_and_methods.html), des [structures](https://crystal-lang.org/reference/syntax_and_semantics/structs.html)...

Un programme contient presque toujours une sous-commande pour afficher l'aide et la version. Commençons par ça!

Nous allons regrouper nos commandes dans un sous-module "Commands".

### Afficher l'aide

Ainsi qu'une première commande pour l'aide, dans le fichier "src/commands/help.cr", avec le contenu suivant:

```crystal
module Myapp
  module Commands
    class Help
      def self.run
        puts <<-HELP
      myapp <command> [<options>]

      TODO
     HELP

        exit
      end
    end
  end
end
```

Nous créons sont une classe "Help" dans le module "Commands" dans le module "Myapp".

Cette classe contient une unique méthode `run`. La déclaration d'une méthode dans une classe se fait avec le mot clé `def`. Ici nous utilisons `def self.run` et non `def run` pour créer [une méthode de classe](https://crystal-lang.org/reference/syntax_and_semantics/class_methods.html) et non d'instance.

Le contenu de l'aide est une [chaine de caractères](https://crystal-lang.org/reference/syntax_and_semantics/literals/string.html). Ici, on remarque des choses bizarres `<<-HELP` et `HELP`. C'est un [type de chaîne spécial](https://crystal-lang.org/reference/syntax_and_semantics/literals/string.html#heredoc), pratique pour délimiter une chaîne sur plusieurs lignes et identifier le début et la fin facilement. Voici ce que ça donne dans mon éditeur:

![Un peu de Crystal dans Sublime Text](/assets/contentful/1B7MYEKG5g8gYQz1x18yLz/b2c42d58161255ba7430352793d43eee/subl.png)

### Afficher la version

La suivante, pour afficher la version, dans le fichier "src/commands/version.cr", avec le contenu suivant:

```crystal
module Myapp
  module Commands
    class Version
      def self.run
        puts "myapp v#{VERSION}"

        exit
      end
    end
  end
end
```

Nous avons ici de l'interpolation dans la chaîne de caractère avec l'utilisation de `#{...}`.

`VERSION` vient du module `Myapp` englobant.

Nous ne connaissons pas [`exit`](<https://crystal-lang.org/api/0.34.0/toplevel.html#exit(status=0):NoReturn-class-method>), qui permet de terminer l'exécution du programme.

### Brancher le tout

Les fichiers que nous venons de créer sont bien jolis, mais ils ne servent à rien. Il faut les relier à notre programme.

Nous allons créer le fichier "src/cli.cr", avec le contenu suivant:

```crystal
require "option_parser"
require "./commands/*"

module Myapp
  DEFAULT_COMMAND = "help"

  def self.run
    OptionParser.parse(ARGV) do |opts|
      opts.unknown_args do |args, options|
        command = args[0]? || DEFAULT_COMMAND

        case command
        when "help"
          Commands::Help.run
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

Ici, pas de nouvelle classe ! On peut découper notre module en plusieurs fichiers et les inclure ([`require`](https://crystal-lang.org/api/0.34.0/Crystal/Macros/Require.html)) dans le module principal.

Nous utilisons donc `require "./commands/*"` afin de charger toutes nos commandes.

Et nous utilisons notre premier module venant de la librairie standard Crystal [`option_parse`](https://crystal-lang.org/api/0.34.0/OptionParser.html). Ce module permet de répondre aux arguments et options passées à notre programme. Rien de très spécial ici, [shards](https://github.com/crystal-lang/shards/blob/master/src/cli.cr#L28) utilise la même technique.

Nous voyons ici comment utiliser les classes du module Commands. Dans ce module, les classes `Help` et `Version` sont accessibles via `Commands::Help` et `Commands::Version`. Comme les méthodes `run` sont des méthodes de classe et non d'instance, on peut les appeler directement. Pas besoin de parenthèse car pas d'arguments.

Enfin, nous devons modifier "src/myapp.cr", notre point d'entrée:

```crystal
require "./cli"

# TODO: Write documentation for `Myapp`
module Myapp
  VERSION = "0.1.0"

  self.run
end
```

On remarque `require "./cli"` qui permet d'inclure le fichier que nous avons créé juste avant et qui définissait une méthode `run` au niveau du module `Myapp`. Avec `self.run`, nous exécutons notre programme !

## On vérifie que ça fonctionne

Exécutez `shards build` à la racine du projet. Ensuite, `cd bin/` puis lançons notre application:

Affichons l'aide:

```shell
❯ ./myapp help
 myapp <command> [<options>]

 TODO
```

Affichons la version:

```shell
❯ ./myapp version
myapp v0.1.0
```

Avec la commande par défaut:

```shell
❯ ./myapp
 myapp <command> [<options>]

 TODO
```

Et avec une commande inconnue:

```shell
~/myapp/bin
❯ ./myapp pouet
Unknown command: pouet
```

## À bientôt pour la suite

Nous avons fait nos premiers pas avec Crystal.

Rendez-vous bientôt pour la suite et démarrer réellement notre application !

Le code est disponible [à cette adresse](https://git.sr.ht/~siegfriedehret/crystal-tuto), au tag [partie-01](https://git.sr.ht/~siegfriedehret/crystal-tuto/refs/partie-01).

## Références

- Le [site officiel: crystal-lang.org](https://crystal-lang.org/).
- La [référence pour démarrer](https://crystal-lang.org/reference/) ainsi que la [documentation pour les API et la librairie standard](https://crystal-lang.org/api/).
- [Shards](https://github.com/crystal-lang/shards) (gestionnaire de dépendances) et une [base de données de Shards](https://shardbox.org/).
- [crystal-lang-tools](https://github.com/crystal-lang-tools) avec des outils et support pour les éditeurs.
- Une ["awesome list"](https://github.com/veelenga/awesome-crystal) de la communauté Crystal.
- [Crystal sur Wikipedia](<https://fr.wikipedia.org/wiki/Crystal_(langage_de_programmation)>)
- [Crystal sur "Apprendre X en Y minutes"](https://learnxinyminutes.com/docs/fr-fr/crystal-fr/).
- Une [vidéo de 2015](https://www.youtube.com/watch?v=xbdVs4FhZac) par 2 des créateurs de Crystal.

A bientôt pour de nouvelles aventures !
