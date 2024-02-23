---
date: '2022-05-26T00:00:00.000Z'
updatedAt: '2022-05-26T12:07:34.091Z'
title: Interview de Romain Maton - Node.js pour les grands !
description: >-
  Romain Maton est un développeur freelance qui aime plus que tout raviver la
  curiosité de ses pairs. Avec Florian Orpelière, nous avons pu échanger avec
  lui lors du dernier DevoxxFR suite à son talk Node.js pour les grands. Si vous
  aspirez à une longue carrière en tant que développeur, et que vous avez une
  certaine affinité avec le Javascript, ce témoignage devrait grandement vous
  intéresser ! Découvrez son approche des talks dans cette interview.
tags:
  - interview
---
📢 Cet article a initialement été publié le 19 juin 2017 sur le blog de [Sfeir](https://www.sfeir.com/fr/), qui a disparu depuis.

Romain Maton est un développeur freelance qui aime plus que tout raviver la curiosité de ses pairs. Avec [Florian Orpelière](https://twitter.com/florpeliere), nous avons pu échanger avec lui lors du dernier DevoxxFR suite à son talk [Node.js pour les grands](https://www.youtube.com/watch?v=RIRB2AFrPV8). Si vous aspirez à une longue carrière en tant que développeur, et que vous avez une certaine affinité avec le Javascript, ce témoignage devrait grandement vous intéresser ! Découvrez son approche des talks dans cette interview.

## Peux-tu te présenter en deux mots à nos lecteurs ?

Je suis [Romain Maton](https://twitter.com/rmat0n), développeur avec 12 ans d’expérience, passé par diverses SSII avant d’aller chez Improve puis Xebia, et maintenant freelance depuis 6 ans.

## 12 ans d’expérience en tant que développeur ?

Oui, toutes !

## Tu n’as pas l’impression d’avoir raté ta vie ?

Non, du tout, d’ailleurs j’aimerais rester développeur encore très longtemps, et j’y travaille dans chaque mission !

L’expertise, la qualité de code et le craftmanship ont leur place en entreprise. Les développeurs de 30, 40 ans et plus ont des compétences / expériences à apporter et il faut le montrer tous les jours.

## C’est un but honorable ! Avec cette expérience, tu as dû voir une pléthore de technologies et de langages. Il me semble que tu es plus sur Node en ce moment, mais qu’est-ce que tu as préféré et pratiqué le plus dans ta carrière ?

Dans l’ordre, j’ai surtout fait beaucoup de Java (pendant 10 ans !), notamment au moment d’Eclipse RCP #LOL. Puis rapidement tout l’écosystème Java plutôt orienté Spring avec la clique Hibernate, Hibernate Search, Spring Security, Guava, Logback et compagnie. C’est à ce moment-là que j’ai commencé à être plus curieux et investi : creuser les outils que j’utilisais, fouiller dans le code source… Je souhaitais savoir comment cela fonctionnait et évidemment on apprend énormément en faisant cela (architecture du produit, revue de code, tests, documentation, etc.) Puis une petite période Scala, avec plusieurs meetups Scala sur Paris et une formation avec Monsieur [Martin Odersky](https://fr.wikipedia.org/wiki/Martin_Odersky). Je n’ai toutefois pas continué avec ce langage.

Au bout d’un moment, je suis tombé sur [Node](https://nodejs.org/), je ne sais plus trop comment (certainement à partir d’articles de blogs, powered by veille techno). Et évidemment, encore des meetups avec en cadeau : pouvoir rencontrer Ryan Dahl en personne (avec en prime un petit selfie de fan) ! Je me souviens que c’était les débuts du [meetup Paris.js](https://www.meetup.com/fr-FR/Paris-js/) et nous n’étions qu’une dizaine dans un petit resto, cela a bien changé !

En revanche, il était très difficile de trouver des missions sur Paris (vers fin 2009). Mais depuis 4 ans, beaucoup d’entreprises ont parié sur Node et j’ai ainsi pu revenir sur cette tech.

## Est-ce que tu vas avoir ce penchant pour Node encore longtemps ? On entend parler de [Go](https://golang.org/), un peu moins de [Rust](https://www.rust-lang.org), ou d’autres langages, mais du coup, comment vois-tu la suite de ton “exploration” ?

Depuis 2 ans, c’est vrai que l’on voit passer pas mal de Go, [Clojure](https://clojure.org/) ou [Elixir](http://elixir-lang.org/). Des langages liés à d’autres types de projets, d’autres architectures et donc d’autres manières de développer. Bien sûr, cela m’intéresse, mais pour l’instant je regarde ça de loin, je code avec le soir et le week-end. Je suis encore prudent, car aucun n’a réellement pris en entreprise (contrairement à Java ou Node) et je préfère choisir un langage / une techno avec un socle pour avoir un maximum de missions disponibles. Chaque freelance gère sa carrière différemment. Moi, je suis un pragmatique ! Le but étant d’éviter de rester coincé sur une techno qui pourrait mourir un peu trop rapidement, sans pour autant partir sur une solution sans avenir. À mon avis, Go pourrait bien être massivement adopté en entreprise dans les années à venir, mais cela ne reste qu’un pari pour l’instant.

## J’ai eu la chance de voir ta présentation, c’était top ! Quel était le but : montrer ce que Node a dans le ventre ? Faire passer un message ?

Le but était de faire un état de l’art de Node en 2017, avec un peu toutes les bonnes pratiques dans l’installation, dans la configuration et dans la production pour la première partie de la présentation. Ensuite, parler de la performance, de la sécurité et des tests. Ce sont des choses qu’on fait moins souvent en entreprise (par manque de temps), mais je voulais amener un peu d’ouverture d’esprit en disant “_si vous connaissez, approfondissez et si vous ne connaissez pas, regardez et soyez curieux !_”. Ce ne sont pas forcément des choses qu’on utilise au quotidien, mais c’est intéressant de savoir comment cela fonctionne. Donc soyez curieux !

## C’est vrai que c’était différent de celle que tu avais faite avec Siegfried l’année dernière. C’était très sérieux, mais il y avait quand même le même feeling, le côté “levez le nez du code, pensez qu’il y a d’autres choses, et ayez une pensée un peu plus critique et constructive.” C’est toujours ton mot d’ordre ?

Toujours ! Et je vais te donner un exemple que j’ai vécu il n’y a pas longtemps : des développeurs qui ne comprenaient pas qu’on puisse faire du [React](https://reactjs.org/) sans [Redux](http://redux.js.org/) ! Je leur demande un des avantages de React (par rapport à [Angular](https://angular.io/), [Vue](https://vuejs.org/) ou autres), ils me répondaient tout de suite “le store”. Or le store n’est pas dans React, il vient de Redux, qui est une librairie à part. On peut tout à fait faire du React sans. Selon le type de projet, Redux sera évidemment une librairie à utiliser immédiatement, mais on peut parfaitement coder une application sans Redux si celle-ci n’a pas besoin d’avoir un store centralisé. Et cela se passera très bien aussi ! De nombreux choix sont ainsi faits en entreprise sans réelle réflexion autre que “tout le monde fait ça donc on fait pareil” et c’est dommage.

## C’est très dur d’avoir dans une équipe des esprits critiques permettant de faire des choix utiles.

> Ça, je n’en ai pas besoin tout de suite donc on remet à plus tard, peut-être même que l’on décidera de ne pas le faire du tout !

On ne voit pas le scénario de cette citation assez souvent. Je comprends qu’il faille remplir son CV. En revanche, faire des choix uniquement basés sur la hype et ainsi mettre 10 000 librairies dans un projet n’est pas sérieux. D’ailleurs, tu ne vas pas choisir un développeur juste parce qu’il y a Redux sur son CV…

L’année dernière nous voulions faire passer le message que régulièrement, nous (développeurs) prenions des frameworks juste pour suivre la hype, ce qui peut se comprendre d’un point de vue CV, mais nous devons être pragmatique et choisir la meilleure solution, celle qui répondra parfaitement au besoin du client, et peut-être même faire du pur Vanilla JavaScript !

## On est bien d’accord ! On ne retrouve malheureusement pas souvent dans les orateurs cette envie d’élargir la réflexion.

Cela fait 8 ans que j’ai la chance de pouvoir faire des talks partout en France et en Europe et c’est sûr qu’au début c’était très “listes à puces”, “regardez les fonctionnalités de tel framework”, et je me suis dit que ce genre de talk, certes intéressant, pouvait se faire avec un quickstart ou un tutoriel à la maison.

Du coup, cela fait quelques années que plusieurs orateurs essaient d’amener ce petit bonus aux talks, de rendre les développeurs plus curieux, leur donner envie de creuser des sujets, d’avoir un esprit critique. C’est forcément un plus.

## On peut dire qu’il y a plusieurs types de talks : les talks “liste à puces” où l’on n’apprend pas grand-chose, les “évangélistes” qui viennent vendre ou monétiser un produit, et les cas “rares” comme les tiens, ceux de Quentin Adam, de Philippe Charrière et quelques autres.

Être speaker et faire de bons talks, ce n’est pas facile ! C’est vrai que dès mes premiers Devoxx (notamment en Belgique), j’ai toujours préféré les talks de personnes indépendantes, mais c’est un choix personnel. Je sens qu’ils ne sont pas là pour me vendre un outil, c’est souvent très objectif et il y a un vrai retour d’expérience qui, pour le coup, a une très grande valeur ajoutée !

Dans [la quête du Graal](https://www.youtube.com/watch?v=Q7_aHqn-F-4) par exemple, on a tapé sur un peu tous les frameworks. Je pensais qu’on allait se prendre des Scuds de partout, mais finalement on a eu plusieurs bons retours. Le but était d’être le plus objectifs possible et forcément le discours est complètement différent d’un commercial qui fait la pub de son framework.

## Peut-être que les gens qui viennent à tes talks sont déjà dans cette voie de l’exploration justement ?

Tant qu’ils y trouvent un intérêt, c’est top ! Leurs retours sont d’ailleurs importants : les positifs genre “j’ai appris beaucoup de choses”, mais aussi les plus critiques, par exemple les avis de développeurs qui font de l’Angular, que l’on trash dans tel ou tel cas d’utilisation. Eux-mêmes reconnaissent que “c’est vrai”, et que ce n’est pas juste un tacle gratuit.

## Ce n’est pas comme dans certains projets open source ou ça passe parfois très vite à l’attaque dans les Pull Requests et autres “discussions” Github. Genre ce [PR de bootstrap](https://github.com/twbs/bootstrap/issues/3057) où [@fat](https://twitter.com/fat) invoque [Douglas Crockford](http://crockford.com/), et se fait recevoir…

![Fat VS Crockford](/contentful/3RECs5SNkOeq4Kj3RY8BaZ/aeaa7d9540b9be3270065dc645057c38/Romain-Maton-fat-crockford.png)

Effectivement, j’ai bien ri ! Mais c’est dommage d’en arriver là…

## Une dernière question ouverte: que prévois-tu pour ton prochain talk ? Quels sont les sujets que tu aimerais aborder ? Est-ce que tu veux aller encore plus loin, avec une Université par exemple ?

Je n’ai pas encore réfléchi à ce que je voulais faire ensuite. Clairement, regarder le coeur de [V8](https://developers.google.com/v8/) m’a amené dans des endroits obscurs d’Internet. J’ai découvert des problèmes très différents de ce que je vois habituellement, des discussions dans des Google Docs entre développeurs core, j’ai potassé des articles qui me dépassent, car ce n’est pas mon quotidien de développeur. Bref, ça m’a donné envie d’aller plus loin ! Comme je le disais dans le talk, on bascule dans un autre monde et c’est passionnant.

Ce n’est plus l’API en JS toute mignonne, on est dans du “badass”, dans le coeur du barbu… et j’avoue j’aime ça !

Je vais peut-être préparer un talk 100% “au coeur de V8” l’année prochaine, éventuellement une université, je ne sais pas encore. J’ai vu plusieurs talks d’optimisation de la VM, comment elle fonctionne, les différents heaps et garbage collectors… et comme je retrouve beaucoup de choses du genre dans V8, je me dis que cela pourrait intéresser.

## Ce serait top. C’est vrai qu’on a beaucoup de talks novice ou intermédiaire, mais pas forcément grand-chose de destiné à un public avancé.

C’est vrai, par exemple il y avait mercredi la présentation [TensorFlow](https://www.tensorflow.org/) de [Martin Gorner](https://twitter.com/martin_gorner): [https://www.youtube.com/watch?v=BtAVBeLuigI](https://www.youtube.com/watch?v=BtAVBeLuigI)

C’était une très bonne université, clairement dans la catégorie intermédiaire. C’est rare d’avoir des talks où il faut s’accrocher, et là il fallait allumer le cerveau ! Mais cela demande beaucoup de travail de préparation et de restitution. On en trouve, mais il en faudrait plus !

## C’est vrai que les notions de l’université de Martin, ça nous change de background-color: yellow; ou api.getMachin().

Oh oui ! *_rires_*

## Merci Romain !

Merci à vous !
