---
date: "2022-05-26T00:00:00.000Z"
updatedAt: "2022-05-26T12:06:40.770Z"
title: "Interview de Raphaël Goetter : les avantages de Flexbox"
description: >
  Raphaël Goetter et Rodolphe Rimelé étaient présents pour l’édition 2016 de
  Best of Web. Avec Cyril Balit, en avons profité pour prendre un peu de temps à
  Raphaël, avant qu’il ne retourne dans sa contrée, pour lui poser quelques
  questions, notamment sur Flexbox !
tags:
  - interview
image: >-
  /contentful/VAdy9BjVtZ6VBJQqpfZzB/b4da14a040cac6dfa316c1148df1f750/IMG_3362.JPG
imageDescription: Avec Raphaêl Goetter et Cyril Balit
---

📢 Cet article a initialement été publié le 15 juin 2016 sur le blog de [Sfeir](https://www.sfeir.com/fr/), qui a disparu depuis.

Raphaël Goetter et Rodolphe Rimelé étaient présents pour l’édition 2016 de Best of Web. Avec [Cyril Balit](https://twitter.com/cbalit), en avons profité pour prendre un peu de temps à Raphaël, avant qu’il ne retourne dans sa contrée, pour lui poser quelques questions, notamment sur Flexbox !

## Bonjour Raphaël, peux-tu te présenter rapidement ?

Je suis Raphaël et je suis intégrateur. Amoureux de CSS, j’ai créé [Alsacréations](http://www.alsacreations.com/) il y a une petite dizaine d’années. C&rsquo;est une communauté d’entraide sur tout ce qui est HTML, standards, CSS, l’accessibilité&#8230; C&rsquo; est devenue une petite agence Web en Alsace. Nous faisons aussi des formations.

## On te voit beaucoup évangéliser sur un certain nombre de technos. D'ailleurs, tu parles de pas mal de choses en CSS et tu as écrit des livres sur CSS. La techno du moment, pour toi, c’est quoi ?

C’est pas juste parce que j’ai écrit [un bouquin](https://goetter.fr/livres/flexbox/) spécifiquement là dessus, mais ce serait Flexbox.

Flexbox en CSS qui est un nouveau (entre guillemets) module de positionnement qui révolutionne un peu ce qui se faisait avant à grands coups de float, de hacks, de bidouilles, de clearfix et tout ça.

## Pour les gens qui ne connaissent pas, Flexbox va permettre de faire quoi ?

C’est conçu avec la volonté très explicite de revenir en arrière sur toutes les bidouilles existantes de CSS, tous les mauvais usages qu’on fait encore aujourd’hui de float, d’inline-block, de tableau CSS, de sortie de flux, de rentrée de flux, etc.

L’idée c’est vraiment de revenir sur “Pourquoi est-ce que c’est chiant ? Pourquoi on ne peut pas centrer verticalement ? Pourquoi ça ne rentre jamais là où l’on veut ?” Flexbox est entièrement fait pour être la solution à toutes ces problématiques et revenir à quelque chose de plus simple.

## Du coup, il y a plein de choses dans Flexbox. Est-ce qu’il y a une killer feature ou un cas d’usage vraiment adapté ?

Pour moi, le truc le plus objectif c’est vraiment le centrage vertical, mais tous les alignements en règle général, de pouvoir dire que tous les éléments ont la même taille, la même hauteur, la même largeur, ou de pouvoir rentrer systématiquement dans leur parent.

Le truc significatif reste quand même de pouvoir centrer verticalement dans n’importe quel élément avec une propriété. On a quand même mis 15 ans pour avoir ça…

## Tu as des frameworks comme [Polymer](https://www.polymer-project.org/) qui utilisent le système de Flexbox pour proposer l’alignement. L’astuce consiste à simplifier la gestion des attributs en proposant des noms de classes spécifiques : par exemple, layout-vertical… Est-ce que tu penses que c’est une bonne pratique, ou est-ce donner de la confiture à des cochons ?

C’est un vaste débat, si on avait 2–3 heures devant nous on pourrait en parler. On entend de plus en plus parler de ce genre de nommage, de convention de classes utilitaires, voire atomiques, où chaque classe correspond à une seule propriété. Finalement, on récupère propriété par propriété donc on ajoute 18 classes sur chaque élément.

Honnêtement, c’est vraiment un vaste débat, car sur certains projets avec une certaine envergure, avec un certain contexte, une certaine équipe, avec certaines personnes, ça a tout à fait du sens. Pour d’autres projets, c’est complètement idiot.

Donc… “ça dépend” !

## J’aurais dit que c’est une réponse d’Alsacien, puisque tu n’es pas Normand… Est-ce que tu peux te positionner ?

Je me positionnerai bien de manière **_flex_**ible là dessus.

## Tu parlais de l’agence du futur ce matin, qui datait de 1996. Pour l’agence «du futur» de 2016, tu attends quoi de CSS dans 3, 4 ou 5 ans ? Est-ce que c’est un truc qui existe déjà et qui n’est pas encore utilisé ou un truc que tu aurais envie de voir exister ?

CSS va forcément évoluer. On va peut être éventuellement un jour arriver à massivement utiliser des modules CSS, c’est-à-dire carrément générer son CSS à partir d’HTML ou de JavaScript. Je ne sais pas si ça prend cette voie.

En tous cas, certaines spécifications CSS dont ma préférée du moment qui est [grid layout](https://www.w3.org/TR/css3-grid-layout/), vont vraiment changer énormément de choses dans notre façon de gérer la mise en forme et la mise en page avec CSS.

## Grid layout, c’est complémentaire ou concurrent à Flexbox ?

Très bonne question !

Grid layout et Flexbox layout sont deux spécifications différentes dont les objectifs et les buts sont normalement différents:

- grid layout a pour but de s’occuper de tout ce qui est architecture, gabarit/template de la page, responsive bien sûr
- Flexbox doit s’occuper de l’intérieur : des composants (navigation, slider, etc.)

C’est donc compatible et complémentaire. La seule “petite” complication aujourd’hui c’est que grid layout est supporté à peu près par aucun navigateur, même si ça va bouger très vite, car le premier à l’avoir implémenté c’est Internet Explorer. En général c’est lui qu’on attend, et là ce sera l’inverse et ça bouge.

## Super, merci Raphaël !

Je vous en prie !

## Quelques liens

- [Le site de Raphaël](http://goetter.fr/)
- [Alsacréations](http://www.alsacreations.com/)
- [Grid layout](https://www.w3.org/TR/css3-grid-layout/)
