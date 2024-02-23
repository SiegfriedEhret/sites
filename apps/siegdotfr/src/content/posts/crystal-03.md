---
date: "2020-10-12T00:00:00.000Z"
updatedAt: "2022-04-01T09:10:25.918Z"
title: "Coder avec Crystal pour ne pas perdre la boule, troisième partie"
description: Découvrons le langage Crystal ensemble !
tags:
  - crystal
---

## Résumé de l'épisode précédent

C'est ici: [deuxième partie](https://sieg.fr/ied/crystal-02)

Nous avons ajouté quelques commandes à notre application pour pouvoir (enfin !) faire quelque chose d'utile avec. Elle nous permet de saisir des contacts et de les rechercher.

Le code correspondant à la fin de la deuxième partie est disponible [à cette adresse](https://git.sr.ht/~siegfriedehret/crystal-tuto), au tag [partie-02](https://git.sr.ht/~siegfriedehret/crystal-tuto/refs/partie-02).

## Avant de reprendre

[Crystal 0.35.1](https://crystal-lang.org/2020/06/19/crystal-0.35.1-released.html) est sorti !

Dirigez-vous vers [la page d'installation](https://crystal-lang.org/install/) pour installer cette nouvelle version.

## Une petite bidouille avant de commencer les tests

Notre magnifique application écrit dans un fichier: `~/myapp.yaml`.

Quand nous lancerons nos tests, nous ne devons bien entendu utiliser un fichier temporaire.

Nous allons utiliser une variable d'environnement pour faire ça, à laquelle nous donnerons le doux nom de `MYAPP_PATH`.

Nous pouvons donc modifier le fichier "src/lib/config.cr" et changer:

```crystal
@@config_path : Path = Path.home / "myapp.yaml"
```

en

```crystal
@@config_path : Path = Path[ENV.fetch("MYAPP_PATH", Path.home.to_s)] / "myapp.yaml"
```

L'API [ENV](https://crystal-lang.org/api/0.35.1/ENV.html) permet d'accéder aux variables d'environnement, et nous utilisons [ENV.fetch](<https://crystal-lang.org/api/0.35.1/ENV.html#fetch(key,default)-class-method>) pour extraire la valeur de la variable "MYAPP_PATH". Le second argument est la valeur par défaut.

## Testons notre application

Nous n'en n'avons pas encore parlé, mais lors de la génération de notre projet, les fichiers suivants ont été créés:

### /spec/myapp_spec.cr

Ce fichier est un fichier de test, avec le contenu suivant:

```crystal
require "./spec_helper"

describe Myapp do
  # TODO: Write tests

  it "works" do
    false.should eq(true)
  end
end
```

Nous allons supprimer ce fichier. Pas d'inquiétude, nous allons créer d'autres tests un peu plus loin.

### /spec/spec_helper.cr

C'est un fichier d'aide dans lequel nous pourrons ajouter des fonctions utilitaires aux tests.

Par défaut, ce fichier inclut le module ["spec"](https://crystal-lang.org/api/0.35.1/Spec.html) ainsi que le point d'entrée de l'application:

```crystal
require "spec"
require "../src/myapp"
```

Nous allons remplacer ce contenu par le suivant:

```crystal
require "file_utils"
require "spec"

ENV["MYAPP_PATH"] = File.join(Dir.tempdir, "myapp-spec-#{Random.new.hex(4)}")
FileUtils.mkdir_p(ENV["MYAPP_PATH"])
```

Ceci va nous permettre de créer un dossier temporaire pour le fichier `myapp.yaml` et d'injecter son chemin dans la variable d'environnement `MYAPP_PATH`.

### Notre premier test !

Nous allons tester le fichier "src/lib/config.cr" qui permet de gérer notre liste de contacts.

Créons donc le fichier "spec/lib/config_spec.cr" avec le contenu suivant:

```crystal
require "../spec_helper"
require "../../src/lib/config"

describe Myapp::Config do
  config = Myapp::Config.new

  describe "#add_contact" do
    it "should work" do
      config.contacts.size.should eq 0

      contact = Myapp::Contact.new("Jane doe", ["janedoe@example.com"])
      config.add_contact(contact)

      config.contacts.size.should eq 1
    end
  end
end
```

Nous retrouvons les inclusions des fichiers "spec_helper" et "config", rien de surprenant jusque là.

Ensuite, pas de surprises avec les `describe` et `it` qui sont des mots clés très courants dans les frameworks de tests.

Dans le test en question, nous allons:

- Vérifier que la liste est vide au départ.
- Ajouter un contact.
- Vérifier que la liste contient un contact.

Ce qui est un peu curieux est l'apparition de `.should` à la suite de [size](https://crystal-lang.org/api/0.35.1/Array.html#size:Int32-instance-method). Ceci vient du module "spec" qui augmente les objets !

### Lancer les tests

On va utiliser la commande `crystal spec`:

```shell
❯ crystal spec
.

Finished in 360 microseconds
1 examples, 0 failures, 0 errors, 0 pending

```

Le `.` correspond à notre test qui fonctionne !

Il peut y avoir d'autres choses que des points:

- `F` quand le test ne passe pas.
- `E` quand il y a une erreur.
- `*` quand le test est en attente.

### Cycle de vie

Comme pour la plupart des outils de tests, il y a un cycle de vie pour les tests ([before_each](<https://crystal-lang.org/api/0.35.1/Spec/Methods.html#before_each(&block)-instance-method>), [after_each](<https://crystal-lang.org/api/0.35.1/Spec/Methods.html#after_each(&block)-instance-method>)) et les suites de tests ([before_all](<https://crystal-lang.org/api/0.35.1/Spec/Methods.html#before_all(&block)-instance-method>), [after_all](<https://crystal-lang.org/api/0.35.1/Spec/Methods.html#after_all(&block)-instance-method>)) au niveau des fichiers de tests, ainsi que [before_suite](<https://crystal-lang.org/api/0.35.1/Spec.html#before_suite(&block)-class-method>) et [after_suite](<https://crystal-lang.org/api/0.35.1/Spec.html#after_suite(&block)-class-method>) au niveau de la suite (l'ensemble des tests).

Par exemple, modifions `/spec/spec_helper.cr` pour ajouter les lignes suivantes:

```crystal
Spec.after_suite do
  FileUtils.rm_rf ENV["MYAPP_PATH"]
end
```

Maintenant, plus de pollution de /tmp avec nos fichiers de tests !

## Une dépendance !

Nous avons déjà croisé la commande `shards` ainsi que le fichier "shard.yml", qui contient un descriptif du projet et de ses dépendances.

Notre application mérite d'être un peu plus engageante, quoi de mieux pour ça d'y ajouter quelques émojis ?

### Installation

Nous allons donc installer la dépendance [emoji.cr](https://github.com/veelenga/emoji.cr) en éditant le fichier "shard.yml":

```yaml
dependencies:
  emoji:
    github: veelenga/emoji.cr
    branch: master
```

Et un coup de `shards` ou `shards install` pour installer la dépendance.

Vous découvrirez un nouveau fichier "shard.lock" avec un contenu tel que celui-ci:

```yaml
version: 2.0
shards:
  emoji:
    git: https://github.com/veelenga/emoji.cr.git
    version: 0.4.0+git.commit.4642bd8ef64839b4639ba0be521e8c85113cb8d5
```

Si vous fouillez dans le dossier "lib", vous découvrirez le code de la dépendance qui vient d'être installée.

### Utilisation

Nous allons modifier le fichier "src/commands/add.cr" pour ajouter la dépendance que nous allons utiliser. Il faut ajouter la ligne suivante en haut du fichier:

```crystal
require "emoji"
```

Et nous modifions le message quand un nom n'a pas été donné.

Nous avons donc:

```crystal
puts "We need a name!"
```

Qui devient

```crystal
puts Emoji.emojize(":warning: We need a name!")
```

### On vérifie que ça fonctionne

Nous allons construire l'application en utilisant `shards build` à la racine du projet. Ensuite, `cd bin/` et on lance notre application pour rentrer dans le cas que nous venons de modifier:

```shell
❯ ./myapp add email="pouet@example.com"
⚠️ We need a name!
```

Et voilà ! On a un émoji dans la console !

## Et voilà !

Nous avons fait de tous petits pas avec Crystal, comment s'organise un petit projet, comment faire un test etc. C'est la fin de cette petite série. Amusez-vous bien avec Crystal !

Le code est disponible [à cette adresse](https://git.sr.ht/~siegfriedehret/crystal-tuto), au tag [partie-03](https://git.sr.ht/~siegfriedehret/crystal-tuto/refs/partie-03).

## Références

- [Le guide "testing"](https://crystal-lang.org/reference/guides/testing.html)
- [La documentation du module "spec"](https://crystal-lang.org/api/0.35.1/Spec.html)
- [Quelques librairies dans "awesome-crystal"](https://github.com/veelenga/awesome-crystal#testing)
- [La commande shards](https://crystal-lang.org/reference/the_shards_command/)
