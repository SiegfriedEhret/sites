---
date: 2022-05-26T00:00:00.000Z
updatedAt: 2022-05-26T13:11:01.773Z
title: >-
  Interview de Philippe Charrière: JavaScript, programmation fonctionnelle et
  Golo
description: >-
  J'ai rencontré Philippe Charrière pour la première fois au JUG Summer Camp en
  2016. Il nous explique sa vision de la programmation fonctionnelle en
  JavaScript et ce qu’est Golo.
tags: []
image: >-
  ../../../public/assets/contentful/445YyjfsvvLGisWlYvBREz/87c895f943e5dea6f9969b7ef1c0fdd1/Philippe-Charriere-1024x537.jpg
imageDescription: Avec Philippe Charrière
---

📢 Cet article a initialement été publié le 6 octobre 2016 sur le blog de [Sfeir](https://www.sfeir.com/fr/), qui a disparu depuis.

J'ai rencontré Philippe Charrière pour la première fois au JUG Summer Camp en 2016. Il nous explique sa vision de la programmation fonctionnelle en JavaScript et ce qu’est Golo.

## La première question est un grand classique pour faire les présentations. Qui est Philippe Charrière ?

Bonne question… Je suis quelqu’un qui ne sait toujours pas ce qu’il veut faire quand il sera grand ! Plus sérieusement, je suis curieux de tout, ce qui m’a donné un cursus totalement atypique, qui va d’une Terminale scientifique à un master d’informatique en passant par une prépa vétérinaire et une école de commerce. J’adore apprendre, tout le temps. Et si on doit me qualifier aujourd’hui, disons que suis un dev qui fait de l’avant-vente, chez GitHub.

## Et quel est ton rôle exact chez eux ?

Je vais voir les prospects / clients avec les commerciaux de GitHub, pour répondre à leurs questions sur la faisabilité de leurs projets. C’est important, car je travaille pour la partie GitHub Enterprise (la version sur site, ndlr), pas de la version qui s’utilise en mode SaaS. Ça implique toujours un lot d’interrogations sur l’intégration du produit avec l’infrastructure existante. Je vais aussi les aider à monter une version de test, pour vérifier que ça correspond bien à leurs attentes et exigences. J’agis aussi en après-vente, pour vérifier que tout se passe bien, échanger avec eux sur l’utilisation du produit, ce qui du reste me permet de récupérer beaucoup d’informations pour nous donner de nouvelles idées de features. En interne, on contribue tous aussi à la documentation, à donner des idées, faire des scripts, des outils, etc.

## Ta présentation concernait la [programmation fonctionnelle](https://fr.wikipedia.org/wiki/Programmation_fonctionnelle) en JavaScript : peux-tu nous expliquer ce que c’est et nous dire si ça résout tous les problèmes.

Je vais commencer par la fin. Est-ce que ça résout tous les problèmes ? J’en sais rien ! Je me suis limité à la gestion des erreurs, ce qui améliore mon problème personnel à ce niveau. J’ai vraiment l’impression que je les gère mieux maintenant.

Quant à ma définition de la programmation fonctionnelle, qui n’engage que moi, c’est tout d’abord un état d’esprit qui t’apprend à coder différemment, sans forcément changer toutes tes habitudes. Le but est d’améliorer son code, de le rendre plus “safe”. Pour anticiper les erreurs et ne pas passer des heures à déboguer son boulot quand on a “terminé”. Depuis que je fais ça, tout ce que je produis marche bien plus souvent du premier coup ! Mais attention, mon périmètre sur ce domaine est très restreint, j’insiste sur le fait qu’il se cantonne à la gestion des erreurs. J’ai trouvé le cas d’utilisation qui me parlait, j’ai compris comment cette partie fonctionnait, donc je l’utilise. Le reste, j’ai encore du boulot pour le maitriser et pour l’instant je n’y touche pas.

## Que penses-tu de la communauté JS, qui s’intéresse énormément à la programmation fonctionnelle, en particulier côté [React](https://reactjs.org/) par exemple ?

C’est bien, mais ça manque d’évangélisation, d’explications sur ce que c’est vraiment. Du coup, ça implique une courbe d’apprentissage bien trop fatigante pour le développeur moyen, dont je fais partie, qui sera vite découragé et restera sur sa techno plus ancienne, qu’il connait par coeur. Moi par exemple, ça ne fait pas très longtemps que j’ai lâché [Backbone](http://backbonejs.org) dont j’étais fan. Bref, ça manque d’accompagnement.

L’avantage de React, c’est que c’est très cadré, bien plus propre que d’autres projets. Regarde Angular 1, c’était un super outil, mais ça partait dans tous les sens. Il faut bien voir que la communauté JS est loin d’être disciplinée, c’est peut-être lié au langage ou au fait que ses utilisateurs sont souvent beaucoup plus jeunes et un peu plus “foufous”… Si on prend le cas de [Yeoman](https://yeoman.io/), c’est encore une fois un super outil mais ça te récupère la terre entière quand tu le déploies, les équipes sont contentes parce que tu as tout le scaffold du projet mais au final personne ne sait comment ça marche et les équipes sont étonnées quand le code JS ne fonctionne plus, parce qu’elles ont eu le malheur de déclencher une mise à jour ! Tout ça parce que les gars ne savent pas faire les trucs de base.

Je suis partisan de faire du JS plus “roots” au départ, pour apprendre la mécanique qui se cache derrière, même si ce n’est évidemment pas tout le temps possible, pour des raisons de productivité. Ça a été ma démarche pour le fonctionnel et le JavaScript. Plutôt que d’utiliser des librairies fonctionnelles que je ne comprenais pas complètement, j’ai commencé par tout coder moi-même, pas forcément jusqu’au bout, mais assez pour comprendre les concepts.

## Dans les librairies abordées pendant ta présentation, est-ce que tu en recommandes une en particulier pour aborder la programmation JS fonctionnelle ?

[Monet.js](http://cwmyers.github.io/monet.js/) ! La documentation est super claire et le dev super gentil et ouvert. Quand j’ai eu quelques résultats pas cohérents, j’ai ouvert une issue en lui disant “je ne suis pas certain d’avoir compris comment tu ferais ça”, il a tout de suite répondu en disant que c’était une erreur et en me faisant essayer une version corrigée. Alors que sur [Ramda](http://ramdajs.com) par exemple, on va plutôt te répondre qu’on ne comprend pas pourquoi tu veux faire ça, que ça ne se fait pas ! Ramda est très bien hein ! Mais plus pour les puristes… Monet, c’est simple, pas très lourd, mais largement suffisant pour avoir un code JS qui est propre et qui reste lisible. On n’obtient pas un truc que seul le dev d’origine comprend.

## Est-ce que tu as regardé des choses comme [PureScript](https://www.purescript.org/), [ClojureScript](https://github.com/clojure/clojurescript), [Elm](<https://fr.wikipedia.org/wiki/Elm_(langage)>), etc. qui vont générer du JavaScript ?

Le problème c’est que j’aime beaucoup JavaScript, donc je n’ai pas besoin de [transpiler](https://fr.wikipedia.org/wiki/Compilateur_source_%C3%A0_source). J’ai quand même beaucoup aimé [CoffeeScript](https://coffeescript.org/) parce que la notion de classe m’a longtemps manqué en JavaScript. Mais disons que je me méfie beaucoup de ce genre d’outils pour faire du JS, tu ne sais jamais vraiment ce qu’ils font derrière. Le jour où ça plante, tu ne sais pas comment t’en sortir. Et c’est du JS, pas du Java ! À mon sens on n’a pas besoin de ces outils, surtout avec des librairies un peu fonctionnelles qui peuvent aider à faire du code propre, sans obligatoirement utiliser un langage typé. Il faut juste arrêter d’être un &laquo;&nbsp;goret&nbsp;&raquo;, avoir une bonne hygiène de code pour obtenir un résultat correct.

En plus, essaye d’utiliser ce genre d’outils exotiques sur un projet en SSII. Personne n’acceptera, sans parler de la maintenance qui sera “compliquée” (pour être poli), si jamais le projet passe quand même… Non, vraiment, je pense que JS se suffit à lui-même. CoffeeScript a eu l’avantage de secouer le monde JS, [Brendan Eich](https://fr.wikipedia.org/wiki/Brendan_Eich) s’est inspiré de l’implémentation des classes de [Jeremy Ashkenas](https://fr.wikipedia.org/wiki/Jeremy_Ashkenas) parce que son code était nickel et c’est une très bonne chose.

Pour l’anecdote, il faut savoir que chez GitHub, ils sont très CoffeeScript, à cause de leur culture Ruby, même encore maintenant. Bon courage pour trouver des packages en JS dans [Atom](https://atom.io) par exemple, il n’y en a vraiment pas beaucoup mais c&rsquo;est en train de changer. Idem pour [Hubot](https://hubot.github.com), même si maintenant il est possible de tout faire en JS sans bricoler.

## Tu n’as pas parlé de Golo dans ta présentation cette année mais peux-tu nous expliquer ce que c’est ?

C’est un langage qui résulte des travaux d’un chercheur de l’INSA-Lyon, Julien Ponge. Il travaille sur tout ce qui est middleware dynamique, au sein d’un centre de recherche. Un cas d’usage de cette tech pourrait être d’avoir un robot capable de s’adapter seul à son environnement, alors que le code dont il aurait besoin n’existe pas encore.

Étant enseignant-chercheur, Julien avait besoin d’un langage simple et rapide à maitriser pour ses étudiants, pour qu’ils puissent être efficaces rapidement. Accessoirement, il voulait aussi montrer au monde qu’il est possible de faire un langage qui tient la route, tout seul dans sa cuisine, sans avoir forcément besoin de 200 personnes.

On s’est rencontré via un ami commun, au début du projet. Je voulais simplement tester ça, et je l’ai prévenu que je n’étais pas chercheur ! Moi, implémenter un langage, je ne sais pas faire. Je ne savais même pas compiler le code Java qu’il m’envoyait. J’ai été obligé de lui demander directement les .jar pour lancer ça facilement ! En revanche, j’avais des idées de cas d’usage totalement différentes des siennes. Comment faire un service web, ce genre de choses, très éloignées de ses préoccupations. Ça m’a aussi permis d’aider à déboguer le projet. J’ai eu l’occasion de faire une lightning talk sur Golo pendant un Mix-IT à Lyon, et ça a déclenché pas mal d’invitations pour d’autres talks.

Parallèlement à tout ça, je fais remarquer à Julien qu’il manque une fonction dans Golo &#8211; je ne sais même plus ce que c’était &#8211; et il me dit “bha rajoute-la” ! Sur le coup, j’ai cru qu’il se moquait de moi… Et puis j’ai ouvert le projet, et en lisant son code, dont je ne comprendrais clairement jamais certaines parties, j’ai découvert qu’il y avait justement une classe Java qui servait, dès qu’on rajoute une méthode, à ajouter un verbe dans le projet. En creusant, j’ai compris qu’on pouvait augmenter le langage directement en Golo. Après, tu peux aussi modifier l’arbre syntaxique, mais ça, je n’y touche pas ! En fait, Golo te permet de faire ton propre langage et c’est très facile à utiliser. Autre avantage, ça utilise la JVM, donc pour prototyper quelque chose, c’est super pratique. On peut aller vraiment loin avec cet outil. Et c’est “à cause” de Golo et de Julien que je me retrouve speaker !

## Merci beaucoup pour toutes ces explications Philippe !

Merci à vous !

Pour compléter l'interview de Philippe, n’hésitez pas à jeter un oeil [aux slides](https://speakerdeck.com/k33g/programmation-fonctionnelle-jug-summercamp) et [au code](https://github.com/k33g/stools) de sa présentation.
