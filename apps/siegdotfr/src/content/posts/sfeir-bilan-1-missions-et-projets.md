---
date: "2019-01-17T00:00:00.000Z"
updatedAt: "2021-05-24T08:03:21.598Z"
title: Le bilan de mon aventure SFEIR (1/3)
description: Les missions et projets.
tags:
  - sfeir
---

Je suis arrivé chez [SFEIR](https://SFEIR.com/) début avril 2014.

À l'époque je jouais avec AngularJS (#ItsJustAngularJS) et j'y arrivais pour être développeur front.

J'ai quitté SFEIR fin novembre 2018, après 4 années et demie passées ensemble, pour partir vers d'autres aventures. Le moment de faire un petit bilan sur cette période.

Ça commence avec cette première partie, autour des missions et des projets !

## Intercontrat

Je suis resté une semaine en intercontrat, temps passé entre les révisions d'AngularJS et mon premier projet chez SFEIR: [Moodr](http://www.moodr.io/). Nous étions 2 développeurs, un designer/front et marketing (mon jumeau de SFEIR, nous étions arrivés le même jour). Je me souviens que c'était une semaine un peu stressante, je ne voulais pas faire de bêtise puisque je venais d'arriver.

J'ai ensuite démarré ma première mission.

## Axa Group Solutions

### Belisarius (1 an)

Il me semble qu'on doit taire le nom quand on parle à des gens d'Axa ^^.

![Belisarius](/assets/contentful/3nHg4EUQ42IhBT157PbktQ/1451711c61b8e14a9dca189a6fa426aa/IMG_7405.JPG)

[Belisarius](https://fr.wikipedia.org/wiki/B%C3%A9lisaire) est le nom d'un général Byzantin et c'était le nom de notre produit. C'était un [CMS](https://en.wikipedia.org/wiki/Content_management_system) développé en interne. Il y avait la partie gestion de contenu, avec les API et le front, ainsi que la partie création de page et templating. C'était chouette !

Pour la technique, il y avait du [Scala](https://scala-lang.org/), du [AngularJS](https://angularjs.org/), du [git](https://git-scm.com/).

J'étais là pour travailler sur la partie AngularJS destinée aux contributeurs donc la base d'utilisateurs n'était pas grande.

J'ai démarré là bas avec un collègue de SFEIR plus expérimenté que moi, qui m'a appris plein de choses pendant cette mission (et par la suite). L'équipe était incroyable, avec plein de gens bien humainement et techniquement, que ce soit chez les devs ou chez les ops.

Pour des raisons diverses et variées, le projet est mort mais avant de passer à la mission suivante, voici quelques choses que j'ai retenues:

- J'ai bien aimé AngularJS, surtout pour tout ce qu'on pouvait faire au niveau des formulaires avec les validateurs.
- J'aurai bien voulu avoir une bonne expérience «agile», mais les coachs que j'ai rencontré n'ont pas permis cela. C'était dur.
- Les numéros de releases qui finissent par 5 sont bug-free.

### mobile-middleware (1 an)

Avant la mort de Belisarius, un autre projet commençait à se monter et une équipe par la même occasion.

Il portait le doux nom de mobile-middleware. En gros, Axa est présent dans plein de pays mais les applications mobiles étaient développées à Barcelone. Il fallait une brique qui expose une API standard côté applications qui tape sur les API du pays et qui transforme les données.

Le projet était déjà en route quand je suis arrivé, c'était du [Node.js](https://nodejs.org/en/) avec un [Loopback](https://loopback.io/) instrumenté qui permet de créer une API à partir d'une configuration. C'était chouette

On a démarré à 3, avec 2 autres de l'ancien projet. On a été rejoint par 2 «jeunes» (ce n'est pas péjoratif, ils sont vraiment plus jeunes que moi) absolument incroyables: un qui venait comme moi de SFEIR, et un que je connaissais depuis longtemps (c'était trop bizarre de lui faire passer un entretien). Ils n'ont pas toujours eu la vie facile dans l'équipe.

Nous avons fait le dev, la doc, les tests, les supports de formation, les formations ! C'était un projet complet et c'était dingue de voir les «jeunes» appréhender le projet dans son ensemble, de penser «prod» !

Quelques points:

- Il faut prendre soin de tout le monde dans l'équipe.
- On aurait dû faire un monorepo pour gérer toutes les briques du produit.

## Projet secret ! (6 mois)

C'était une petite équipe, on a fait plein de trucs sympas et j'ai bossé avec un petit jeune qui était super bien !

Le projet était réalisé en Node.js avec du Angular.js pour la partie front: nous étions un peu frileux de partir sur les versions suivantes d'Angular. On a dû faire quelques trucs rigolos pour le SEO, le rate limit (qui n'a jamais servi), et c'était pas loin du déploiement continu car après la PR revue et le merge, ça faisait une image docker. Il fallait quand même la mettre en ligne à la main. On a aussi utilisé Mailjet, c'était sympa (et on a eu quelques bugs de notre côté donc on a envoyé un peu trop de mails parfois ^^).

On a aussi eu à toucher à leur vieux Wordpress (genre un samedi pour ajouter un Captcha car ils se faisaisent spammer).

Bilan:

- Merci Pascalou pour ton aide sur le Wordpress !
- Les stories étaient réduites à un titre dans les issues Github. Nous avons réussi à avancer plutôt pas mal donc nous avions compris le sujet.
- Le projet ne s'est pas bien terminé, mais c'était bien quand même.

Ce projet m'a permis de pondre un tweet qui a eu un certain succès:

<blockquote class="twitter-tweet" data-lang="fr"><p lang="fr" dir="ltr">Si t&#39;es pas sur wikileaks à ~33 ans c&#39;est que t&#39;as raté ta vie. <a href="https://t.co/woQAVJB8b8">https://t.co/woQAVJB8b8</a></p>&mdash; Siegfried Ehret ［☰］ (@SiegfriedEhret) <a href="https://twitter.com/SiegfriedEhret/status/892290709478416384?ref_src=twsrc%5Etfw">1 août 2017</a></blockquote>

## Les heures sombres ou pas

À la suite de ça j'ai démarré plusieurs choses en parallèle, et c'était difficile.

### Franfinance (6 mois, 1/2-temps)

Une filiale obscure de la Société Générale. C'était un environnement très sympa même si j'ai fait un bon de 30 ans en arrière car il y avait des poids lourds en Cobol dans le bureau d'à côté.

Il y avait plusieurs projets dans des technos différentes: AngularJS, React, Polymer, Backbone. C'était cool ! Il y avait aussi du vieux Java qui traîne.

Quelques points:

- J'étais administrateur sur mon poste et c'est rare dans ce genre de boîte, ça faisait plaisir.
- Au dessus il y avait de la politique et ce n'est jamais marrant, mais l'équipe était chouette et j'ai appris plein de choses.

### PerfectStay (quelques mois, 1/4-temps ?)

Mon expérience «start-up», c'était super sympa !

On jouait avec du Node.js sur AWS Lambda, ce qui m'a permis de découvrir la plateforme.

Bilan:

- Allez les voir sur [Perfectstay.com](https://www.perfectstay.com/) ou [La Collection Air France](https://lacollection.airfrance.fr/), c'est super ! Je suis parti à Vienne avec leurs offres et c'était magnifique.
- Avoir des gens techniques au dessus, c'est un vrai plaisir. Pour la direction à prendre ou pour challenger les choses, c'est très instructif.

### Kiloutou (par intermittence)

J'ai suivi sur Coursera un cours de [Paléobiologie](https://www.coursera.org/learn/dino101) dont je suis très fier même si j'ai tout oublié, je n'imaginais pas que ça me servirait dans une mission.

Le but du projet était sympa, ce qu'on a découvert plus tard c'est qu'en réalité il fallait transformer des milliers de lignes de DSL en Delphi vers Node.JS. Génial...

Le SI était très complexe, avec une DB qui contient 300 à 400 tables qui avait des codes et non des noms, et pareil pour les colonnes. Nous n'avions évidemment pas accès aux connaissances qui nous permettaient de nous en sortir.

J'ai travaillé là bas avec un développeur de SFEIR Lille, avec qui j'ai passé de très bons moments, même si le projet était voué à l'échec (et c'est ce qui s'est passé).

### Et autres...

Je pensais que j'arriverai à gérer un emploi du temps partagé entre plusieurs clients, et il m'a fallu du temps pour le comprendre.

C'est à ce moment où j'ai failli quitter SFEIR pour aller chez Dailymotion. Je suis finalement resté (désolé mon Vincent !).

## Veolia et la SFEIR Factory (1 an)

SFEIR m'a proposé de rester chez SFEIR pour travailler sur un gros projet. Comme de la régie mais chez nous. Ce qui me permettait aussi de voir ce qui se passe sur d'autres projets et de pouvoir filer un coup de main.

C'était un projet qui s'annonçait très intéressant, et le périmètre s'est réduit au fur et à mesure. Nous nous sommes accrochés aux technos qui rendaient le truc sympa mais qui ne suffisent pas sur le long terme. Nous avons donc mis en place du Go sur Google App Engine et du Vue.js pour la partie front.

Au début, le Go sur App Engine, il fallait coder un peu à la sauce App Engine. Je n'aime pas ça. Les versions ont changé et au final nous avons eu du Go «à la Go». Ouf !

Côté front, Vue c'est le bien. Le navigateur cible étant Chrome (ils ont des ChromeBook), nous nous sommes fait plaisir avec du Flex et du Grid un peu partout, c'était top !

Bilan:

- Encore une Dream Team 💖
- La release 1 ne présentait pas le sens du produit, ça nous a fait un choc.
- Le workflow pour la première release c'était dans l'ordre: le client définit son besoin, nous le met en stories, on développe, on livre, ils vérifient. Rien de choquant, mais en parallèle, il y avait les ateliers UX / UI et on revenait à «le client définit son besoin»... Ça a évolué par la suite mais nous avons perdu beaucoup de temps à cause d'allers-retours.
- Un bon produit > de bonnes technos. Peut être pas à tous les âges, mais c'est le cas pour moi.

J'ai aussi participé à un projet pour [Le Cèdre](https://www.lecedre.fr/) avec une nouvelle fois des gens super. C'était mon premier vrai projet avec Angular et Ngxs donc c'était très intéressant, même si je n'adhère pas au framework.

## Projet secret ! (1.5 mois)

J'ai terminé mon aventure chez SFEIR avec un client du luxe sur un projet secret.

On était sur Microsoft Azure et ce n'était pas évident.

Sur les autres fournisseurs de services Cloud, en gros on fait du Express et on pousse. Sur Azure, il faut coder en Azure. C'est vraiment un problème pour moi de se bloquer comme ça.

Bilan:

- Faire passer un projet d'un mois à un projet de 6 mois à cause de la plateforme, c'est moche (je n'exagère presque pas).
- Le «Directeur de Projets» est un externe qui est chez Microsoft et qui impose sa vision du développement logiciel et agile qui n'a pas bougé depuis 20 ans. Dur.
- Toute l'équipe: <3.

Question lol:

> **Combien faut-il d'«architectes Azure» pour aider une équipe qui ne connait pas bien la plateforme ?**<br>
> Réponse: 2 de plus toutes les 2 semaines.

## La fin

En fait j'ai vraiment eu de la chance dans mes missions et mes clients.

Dans mes différentes missions j'ai pu croiser les 3 grandes plateformes Cloud (AWS, GCP et Azure) et c'était très intéressant.

Les équipes dans lesquelles j'ai travaillé étaient vraiment chouettes, c'est un vrai plus pour apprendre plein de choses.

À bientôt pour la deuxième partie 😉.
