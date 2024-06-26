---
date: 2019-05-24T00:00:00.000Z
updatedAt: 2021-05-24T06:55:50.530Z
title: Les fonctionnalités de beulogue
description: Plongeons un peu dans ce que beulogue sait faire.
tags:
  - beulogue
  - blog
---

On m'a posé une [question](https://twitter.com/oduquesne/status/1131718926386323456) sur Twitter à propos des fonctionnalités de `beulogue`, et comment il se place par rapport à Hugo et Pelican.

## Contenu

Les contenus, comme pour beaucoup de générateurs de sites statiques, sont en Markdown, ce qui est très limité.

L'utilisation de [front-matter](https://github.com/SiegfriedEhret/beulogue#front-matter) ne permet que peu de possibilités. Quelques autres viendront, tel que `author`, et peut être `template` ?

`beulogue` permet de créer des sites multi-langues, avec chaque langue dans son propre répertoire à la Hugo.

## Gabarits de pages

Il y a seulement 2 fichiers HTML (`templates/list.html` et `templates/page.html`) et c'est tout. Ça fonctionne avec [mustache](https://mustache.github.io/).

Les possibilités offertes sont très limitées et c'est ce que je souhaite.

Il relève de la responsabilité de l'utilisateur ou utilisatrice de gérer son flux de travail pour fournir les 2 gabarits. Je ferai d'ici peu un billet expliquant ma technique.

## Rapide

Avec Hugo, mon site était construit en environ 200ms.

`beulogue` construit plus ou moins la même quantité de pages en environ 230ms. Les fonctionnalités sont bien entendu plus limitée donc c'est effectivement plus lent que Hugo mais c'est bien suffisant.

## Documentation

Il n'y en a pas ! Enfin si, `beulogue` a un [README](https://github.com/SiegfriedEhret/beulogue) (en anglais) qui devrait être suffisant.

[La documentation de Hugo](https://gohugo.io/documentation/) est gigantesque et j'ai parfois trouvé qu'il n'était pas évident de s'y retrouver.

## Au final

Je pense que le pouvoir de `beulogue` est d'être limité en fonctionnalités, en se basant sur quelques conventions. Et c'est son but.

Gardez en tête que `beulogue` est une expérimentation pour découvrir le langage de programmation [Crystal](https://crystal-lang.org/), 2 ans après avoir joué avec le [même concept en Node.js](https://www.npmjs.com/package/beulogue).

C'est un projet perso, donc il faut s'attendre à du code sale, et sans test. Ça s'arrangera bientôt !
