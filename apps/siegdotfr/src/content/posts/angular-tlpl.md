---
date: "2018-10-22T00:00:00.000Z"
updatedAt: "2021-05-24T06:44:57.366Z"
title: "Angular, TL;PL"
description: >-
  Ça fait plusieurs fois que je parle d'Angular sur mon blog. Après avoir enfin
  avoir travaillé avec professionnellement, voici quelques pensées sur ce
  framework et ce qui l'entoure.
tags:
  - angular
  - tldr
---

Ça fait plusieurs fois que je parle d'[Angular](https://angular.io/) sur mon blog. Après avoir enfin avoir travaillé avec professionnellement, voici quelques pensées sur ce framework et ce qui l'entoure.

Au final, travailler avec Angular était intéressant, et je trouve qu'Angular est un framework contradictoire.

Il a tout pour être accessible (CLI, TypeScript...) mais mélange tout ça avec des concepts avancés qui peuvent perdre les développeurs débutants; concepts parfois excessifs pour pas grand chose (observables).

:warning: je dis plein de bêtises.

## Formation

J'avais suivi la [SFEIR School](https://sfeir.com/formation/school/) il y a quasiment 3 ans et c'était bien.

Avant de démarrer le projet je m'y suis remis avec [Become a ninja with Angular](https://books.ninja-squad.com/angular), c'est une magnifique ressource.

## TypeScript

On peut coder avec Angular en ES5 et ES2015, même si ce n'est pas pratique. La recommandation est évidemment [TypeScript](http://www.typescriptlang.org/).

J'ai écrit précédemment que je ne comprenais pas TypeScript. J'ai évolué un peu et j'ai trouvé que c'est plutôt chouette à l'utilisation. Je reste convaincu qu'il y a de meilleurs outils pour répondre au besoin qu'il tente de solutionner, par exemple [Flow](https://flow.org/), qui conviendra mieux aux amoureux de JavaScript à mon avis.

## Modules et composants

Aujourd'hui, on ne peut pas faire autrement qu'avec des composants. Tous les frameworks fonctionnent de cette façon. Angular permet de définir des [modules](https://angular.io/guide/ngmodules) afin de bien découper son application.

Pouvoir découper l'application en modules, c'est bien. Devoir lier tous les composants à la racine du module, c'est moins bien (même si la CLI le fait pour nous).

J'adore l'idée des [Angular Elements](https://angular.io/guide/elements) bien que je n'ai pas eu à les utiliser.

## CLI

Le CLI ne laisse pas le choix de réfléchir à l’architecture.

Un petit tweet de Dan Abramov ne fait jamais de mal. À propos d'une discussion sur comment organiser ses fichiers, il a sorti [ceci](http://react-file-structure.surge.sh/) et voici son conseil:

<blockquote class="twitter-tweet" data-conversation="none" data-dnt="true"><p lang="en" dir="ltr">It is a guideline though. It means literally “start by putting everything in one file; when it feels like it’s annoying, start splitting them up; what THAT gets annoying, maybe add some folders”.</p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/1027248875072114689?ref_src=twsrc%5Etfw">August 8, 2018</a></blockquote>

_C'est une ligne directrice. Cela signifie littéralement «commencez par tout mettre dans un seul fichier; quand cela vous semble agaçant, commencez à les séparer; que CELA devient agaçant, ajoutez peut-être des dossiers ”._

Le CLI d'Angular est intéressant pour répondre au point sur les composants qu'il faut forcément indiquer dans les modules mais... Pour les habitués de react / vue, où un composant est importé directement dans le composant parent sans avoir à le déclarer tout en haut de la chaîne, ce n'est pas naturel.

J'aime bien le principe des [schematics](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2) cependant.

## NGXS

Suite à une recommandation de quelques collègues, nous avons utilisé [NGXS](https://ngxs.gitbook.io/ngxs) pour gérer nos données dans l'application.

Ayant travaillé avec d'autres frameworks &mdash; React avec Redux[^1] et Vue avec Vuex &mdash; j'ai trouvé la librairie NGXS très inconfortable. Très compliqué de faire fonctionner le tout avec uniquement la documentation.

Une action équivaut à instancier une classe... Pourquoi faire simple quand on peut faire compliqué ?

[^1]: j'aime l'idée du pattern amené avec Redux, mais je ne suis pas fan de la mise en place. J'en parlerai peut être une autre fois.

## Tests

Je n'avais pas eu de souci avec [Angular.js](https://angularjs.org/) quand j'étais jeune, même si certains de mes collègues trouvaient ça «lourd».

En Angular, c'est encore pire. La mise en place des tests est insupportable pour continuer de respecter le Saint Graal qu’est l’injection de dépendances. Les tests sont beaucoup plus agréables à écrire en [react](https://reactjs.org/) ou [vue](https://vuejs.org/).

## Observables

Les observables répondent à quelque chose de précis, et Angular a fait le choix de les utiliser pour tout.

Je parle souvent de devoir utiliser quelque chose qui répond à un besoin, et utiliser les Observables pour tout, non merci.

## Formulaires

Pour les formulaires c’est bien, parce que ça rend les choses faciles. C’est peut-petre dommage de ne pas être plus « difficile » et de laisser plus de choses à gérer à la main.

Les validateurs sont bien pratiques à utiliser. J'avais déjà bien joué avec Angular.js grâce à [cet article](https://www.yearofmoo.com/2014/09/taming-forms-in-angularjs-1-3.html), et j'ai retrouvé le même plaisir à faire des trucs bizarres avec les [validateurs dans Angular](https://angular.io/guide/form-validation#custom-validators).
