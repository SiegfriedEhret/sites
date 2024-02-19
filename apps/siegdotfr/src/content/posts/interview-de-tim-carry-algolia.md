---
title: Interview de Tim Carry (Algolia)
description: >-
  J'étais présent à dotCSS et en ai profité pour échanger avec Tim Carry. Il
  nous partage ses expériences de speaker à dotCSS et de Developer Advocate chez
  Algolia....
date: 2024-02-23T08:02:42.437Z
updatedAt: 2024-02-23T08:02:42.437Z
image: /assets/ITW-Tim-Carry-520x245.jpg
tags:
  - interviews
---

📢 Cet article a été publié pour la première fois le 8 février 2018, sur le blog de [Sfeir](https://www.sfeir.com/en/), qui a disparu depuis.

## Bonjour Tim ! Peux-tu te présenter ?

Je m'appelle officiellement Timothée Carry-Caignon mais tout le monde m'appelle Tim Carry. Je suis Developer Advocate chez [Algolia](https://www.algolia.com/), et aujourd'hui j'étais speaker à [dotCSS](https://www.dotcss.io/).

## Raconte moi ton histoire avec dotCSS...

Je crois que je suis venu à toutes les éditions de dotCSS, j'allais aux conférences [dotJS](https://www.dotjs.io/) et une année ils ont annoncé qu'ils allaient faire la conférence «petite soeur» dotCSS, et je me suis dit «c'est génial, il faut absolument que j'y aille». Je n'ai pas du tout été déçu, même si c'est une conférence qui est uniquement sur une après-midi j'ai trouvé que la qualité des talks condensés était de très bonne qualité. J'ai beaucoup aimé, il y avait un mélange de ce qui allait se passer dans CSS dans le futur, de «regardez j'ai fait un hack de ouf en 3D en CSS», et ce côté où tu sors de là en te disant «c'est génial, CSS est vraiment un langage qui évolue, il y a plein de choses à faire, et on en est vraiment juste au début».

Je suis devenu Developer Advocate chez Algolia après, et les conférences [dot](https://www.dotconferences.com/) sont pour moi un très gros gage de qualité. Et je me disais si un jour on a quelqu'un de chez nous qui parle lors d'une conférence dot, on aura atteint un certain point de maturité. Et j'avais essayé de voir si on n'avait pas des sujets qui pouvaient coller pour [dotScale](https://www.dotscale.io/) ou [dotJS](https://www.dotjs.io/), et il n'y avait jamais rien. Donc l'année dernière j'ai proposé un lightning talk pour dotCSS qui a été accepté, où je refaisais le logo dotCSS avec un seul div, en utilisant pas mal de petites techniques:

<iframe width="560" height="315" src="https://www.youtube.com/embed/3z6JhjoG7nA?rel=0" frameborder="0" allowfullscreen></iframe>

Ça avait pas mal plu ! Et cette année ils ont ouvert le CFP pour les talks officiels, j'ai proposé quelque chose, et [Sylvain](https://twitter.com/sylvinus) m'a contacté il y a 3 semaines pour me dire que c'était bon, mon talk était accepté. Ce qui a été un peu court pour préparer les slides. Mais ok, je vais parler à dotCSS, il faut que je fasse un truc vraiment bien ! J'ai donc retravaillé les slides d'un talk qui durait 35 minutes en 18 minutes. J'ai reçu de l'aide d'un collègue Designer pour les retravailler et que ça rende bien. Et j'ai passé un excellent moment là pendant 18 minutes à le présenter, je me suis vraiment bien amusé à le faire et apparemment les gens ont apprécié, donc c'est pour moi un «achievement completed» !

Je parle vraiment de hacks en CSS, pourquoi c'est intéressant de faire un truc qui a l'air de ne servir à rien et qui parait complètement impossible.

## Tu peux nous parler d'Algolia ?

Effectivement, puisque c'est un peu mon métier ! Nous faisons de la recherche sous forme d'API. Si tu connais [Stripe](https://stripe.com/fr), ils font du paiement sous forme d'API. [Twillio](https://www.twilio.com/) font de l'envoi de message sous forme d'API. Chacune de ces boîtes fait un truc et le fait bien, et nous c'est la recherche. C'est à dire que tu as tes données, initialement sous un format JSON, tu les envoies sur notre API, du coup on va l'indexer d'une certaine manière, on a plein de clients d'API dans tous les langages pour faire ça, et avec le même client tu peux faire des requêtes pour interroger ces données, faire des recherches avec des mots-clés ou des parties de mots-clés, et les serveurs donc trouver ce qui correspond à ça, et te les renvoyer.

Un de nos gros avantages c'est qu'on est extrêmement rapides, dans le sens où entre le moment où tu appuies sur ta touche dans ta search bar, la requête qui va vers le serveur, que ça recherche dans tous tes objets et que ça revienne, ça prend en général 20 millisecondes. Ce qui est instantané pour l'oeil humain et qui permet donc d'afficher des résultats en temps réel au fur et à mesure que les gens sont en train de taper.

## [Lucas](https://twitter.com/LukyVJ) me disait qu'il y a 2-3 ans vous étiez 30, et aujourd'hui près de 200.

Oui ! On a des bureaux à Paris, San Francisco, Atlanta, New York et on va ouvrir à Londres. Tout l'équipe tech est à Paris. Les personnes qui vont travailler sur le coeur du moteur, les clients d'API, les librairies frontend, tout est ici.

Dans les autres bureaux, on a des rôles qui sont un peu hybrides. Des rôles techniques comme moi, Developer Advocate, on en a à Londres ou à San Francisco, mais ils ne font pas que du dev. Mon travail de tous les jours ça ne va pas être de vraiment commiter sur les clients d'API principaux. Si je vois un bug et si je sais le régler je peux soumettre une pull-request, ça je peux le faire tous les jours mais ce n'est pas la première chose qu'on attend de moi.

On a un rôle qui s'appelle Solutions Engineer, qui est pour schématiser à moitié Dev et à moitié Sales. Une fois que tu es client Algolia, que tu es un gros site et que tu as besoin d'aider pour l'implémentation, on a quelqu'un de l'équipe qui te sera dédié pour ça. Cette personne viendra dans tes locaux, former ton équipe, faire que tu aies la meilleure implémentation possible pour répondre à ton besoin. Moi je suis technique et je parle aux communautés, eux sont techniques et parlent aux clients.

Donc on recrute sur tous ces profils là évidemment, et on a envie de rendre la vie des développeurs plus facile quel que soit le langage qu'ils utilisent. Comme ça évolue très rapidement et qu'il va y avoir un nouveau framework JavaScript dans 3 mois, si tout le monde est dessus et qu'il est vraiment bien il faudrait qu'on aie une implémentation pour.

## Chaque fois qu'un site sort, on vous voit débarquer pour la recherche. C'est vous qui aller vers eux ou est-ce que c'est vous qui les contactez pour bosser avec eux ?

Qu'est-ce que tu appelles un nouveau site ?

## Je pense à [Yarn](https://yarnpkg.com/), ou les docs de [Hugo](https://gohugo.io/).

Yarn est un très bon exemple. Alors en fait Algolia c'est une boîte très tech initialement, les 2 fondateurs sont très tech eux-mêmes. Ce sont 2 anciens d'[Exalead](http://www.exalead.fr/search/), une boite qui fait des moteurs de recherche orienté plus «entreprise», à chercher dans des pdf, des documents word etc. Ils savent faire et ont décidé de monter leur entreprise dans la recherche, mais orientée utilisateurs. Quand tu recherches, tu tapes et tu t'attends à avoir des résultats, et il n'y avait pas de solution qui adresse ce problème simplement.

On fait une API, les gens qui vont nous utiliser sont des développeurs, donc on peut vraiment parler tech avec ces gens là. Et la tech est vraiment fondée sur l'open-source, auquel on essaie de contribuer un maximum. Le coeur de notre moteur est closed-source (même si on est transparent sur [comment il fonctionne](https://blog.algolia.com/inside-the-algolia-engine-part-1-indexing-vs-search/)), mais tous nos clients d'API et tout ce qu'on fait autour, on essaie de le faire en open-source. Donc on essaie de contribuer à ça soit en aidant financièrement les projets open-source, soit... Alors on a une espèce de tradition qui est que tous les ans, à Noël, on fait un cadeau à la communauté:

* Le premier cadeau était une extension Chrome et Firefox pour rechercher instantanément dans tous les repositories Github.
* L'année d'après on a fait [DocSearch](https://community.algolia.com/docsearch/), qui est un outil utile si tu as une librairie open-source avec un site de documentation, et on fournit un crawler qui va parcourir les pages de ton site toutes les 24 heures et te proposer un outil de recherche de ta documentation. On le fait pour tous les sites open-source, c'est juste une demande, 2-3 trucs à configurer chez nous, et après tu peux utiliser ça, quel que soit ton volume, et c'est complètement gratuit !
* L'année dernière, le site de Yarn était sorti, et npm existait et la recherche de ce dernier laissait vraiment à désirer. On les a contacté pour essayer, peut être, de travailler ensemble, et ils n'ont pas vraiment répondu. On a contacté Yarn et ils étaient super emballés. Du coup on a commencé à travailler sur «c'est quoi la recherche de package dont nous, en tant que développeurs, on rêverait». On a commencé à agréger des informations depuis plein de sources différentes: depuis npm lui-même, en répondant au hook à chaque fois qu'un nouveau paquet est ajouté ou autre, en regardant le nombre d'issues, pull requests, stars sur Github, et plein d'autres sites pour avoir le nombre de téléchargements etc, et prendre tout ça en compte dans la manière donc les résultats sont filtrés. Donc quand tu cherches quelque chose sur Yarn aujourd'hui ça nous utilise, et maintenant tu cherches des packages et ils sont vraiment rankés comme toi tu les aurais rankés, en enlevant tout le côté manuel où tu es obligé d'aller voir les repos Github etc.

Pour la documentation de Hugo, ils utilisent DocSearch. Ils n'avaient pas de recherche, ils nous ont contacté et le lendemain on leur a transmis un snippet qu'ils pouvaient intégrer et avoir directement la recherche.

TODO: mettre le cadeau de cette année ! (annonce le 7 décembre)

## Peux-tu me décrire ton rôle de Developer Advocate ?

C'est une question très compliquée, il y a autant de manières de faire ce job que de Developer Advocate. La manière donc j'aime bien l'expliquer c'est qu'en tant que développeurs on est des gens qui avons un détecteur de bullshit hyper élevé et on est globalement imperméables au marketing traditionnel. On a des adblocks qui font qu'on ne voit pas les pubs, quand on nous demande notre adresse email on ne la donne jamais parce qu'on sait qu'on va se faire spammer, donc toutes les techniques traditionnelles que les gens apprennent en école de marketing ne marchent pas sur les développeurs. Et vu que notre audience, ce sont les développeurs, et qu'on a quand même envie que de plus en plus de personnes sachent ce qu'on fait et aient envie d'essayer notre produit, il faut qu'on trouve d'autres techniques. Et le travail du Developer Advocate c'est un développeur qui sait comment parler à d'autres développeurs.

Globalement mon rôle c'est de faire en sorte qu'il y aie de plus en plus de personnes qui sachent qu'on existe, qui aient envie de nous utiliser, qui aiment ce qu'on fait et qui en parlent autour d'eux. Et ces personnes là sont des développeurs. Comment tu fais ça ? Et bien tu es un développeur toi même, et tu as une certaine crédibilité et on va t'écouter. Quand tu dois choisir un nouveau framework ou une nouvelle technologie, ce n'est pas parce que tu as vu une nouvelle annonce dans un journal que tu vas dire «ah, ça a l'air vachement bien»; tu vas demander à tes collègues développeurs ce qu'ils utilisent, quel est leur retour etc. Donc c'est ce qu'on fait: on essaie d'être transparents au maximum sur ce fait bien Algolia, ce que ne fait moins bien Algolia, dans quel cas c'est pertinent ou pas. Parce qu'on utilise notre produit tous les jours, on sait vraiment les avantages et inconvénients, on peut mettre ça en avant et expliquer aux personnes comment ça fonctionne. Et ça nécessite d'être un développeur soi-même, de baigner dans un univers de développeurs et de faire partie de cette boucle de feedback où les gens en ont entendu parler, s'ils l'ont utilisé, où ils ont été bloqués si c'est le cas, pour qu'on améliore nos features et notre documentation.

## Donc tu codes toujours ?

Je code toujours !

## Comment tu organises ton temps ?

C'est assez difficile, et je m'améliore. Quand je code, je ne peux pas être vraiment focus sur un sujet pendant une heure entre deux meetings. J'ai besoin d'être sur le sujet pendant 4 heures ou une journée pour vraiment comprendre toute l'abstraction du problème que je suis en train de résoudre, coder, rentrer dans le truc, et vraiment réussir à avancer.

Par exemple, quand Algolia sort une nouvelle feature, c'est chouette mais si personne ne le sait c'est un peu raté. Je vais donc essayer de faire une démo qui l'utilise au maximum. Je vais donc coder un vrai produit qui l'utilise. C'est la première partie, celle du code, où je mets la feature en application. Après, il faut faire en sorte que les gens la connaissent, donc ce que j'essaie de faire c'est d'écrire un article de blog qui a du sens du point de vue du développeur. Pas «On a sorti une nouvelle feature c'est génial !» mais «Comment ça marche, comment on peut l'utiliser». Faire des talks pour en parler, en parler autour de moi, et inciter d'autres personnes à l'utiliser et à avoir leurs retours. Et idéalement, avoir ces personnes là qui en parlent à leur tour !

Il n'y a pas vraiment de journée ou de semaine type, ça dépend de plein de choses ! Il faut jongler entre le «j'ai besoin de me focus pour faire un vrai projet» et les événements du calendrier que tu ne peux pas déplacer. dotCSS c'est aujourd'hui, donc mon talk doit être prêt. Globalement, ce que j'essaies de faire, c'est quelque chose que je faisais déjà avant: participer à des meetups et à des conférences, juste dans l'audience, rencontrer les gens et discuter sans vendre le produit mais pour voir ce que les gens font et quand ils me demandent ce que je fais je leur présente, en espérant que ça puisse les intéresser. Tu vois quelles sont les technos qui marchent ou ne marchent pas, on a besoin de constamment apprendre !

## On t'a vu tourner avec [les drapeaux en CSS](https://vimeo.com/216848472), et aujourd'hui avec le moteur de recherche en CSS. Ça fait deux chefs-d'œuvre pour toi...

Avec les drapeaux c'était vraiment ça. Celui là c'est un peu la continuité du premier, j'avais une formule qui marchait, je savais que ce n'est pas parce que ça avait l'air impossible et complètement idiot que ce n'était pas réalisable.

Dans mon talk sur les drapeaux j'utilise des tricks en CSS hyper avancés et obscurs, ça a fait rire les gens qui découvraient à quel point j'avais poussé CSS dans ses retranchements, et des conférences m'ont contacté pour que j'aille y faire le talk. C'était une surprise pour moi car quand je propose des talks pour parler d'une nouvelle feature d'Algolia les gens me disent non, parce que c'est trop commercial, ou qu'ils n'ont pas envie d'avoir de la pub dans une conférence. Ce que je comprends parfaitement, mais néanmoins si je suis intimement persuadé que la feature est intéressante il faut trouver un moyen de la présenter, en enlevant la façade «j'essaie de vous vendre quelque chose». Et j'avais vu que les tricks CSS ça marchait bien, donc je me suis dit que de présenter un moteur de recherche en CSS me permettrait de joindre les 2 côtés.

Donc là je ne parle pas d'Algolia mais de bonnes pratiques pour faire un moteur de recherche: ça doit être pertinent, rapide, facile à utiliser... Il n'y a rien de plus frustrant qu'un moteur de recherche qui te dit «Vous avez tapé ça, êtes-vous sûr que vous ne vouliez pas avoir cela à la place ?», et bien si, donc pourquoi me poser la question si tu sais que c'est ça que je voulais ? Il y a pas mal de frustration que tu peux enlever dans un moteur de recherche, et on a fait plein d'implémentations et nous avons donc agrégé plein de bonnes pratiques qu'on met dans nos librairies et features, et c'est ce que je veux essayer de transmettre dans un talk comme ça, tout en faisant rire les gens.

## Des idées de ce que sera le prochain ?

Je n'en ai pas encore. CSS n'est pas vraiment le truc que je fais dans ma vie de tous les jours, c'est vraiment pour les side-projects. Et ce sont ceux que je présente. Je vois CSS un peu comme jouer aux legos, t'as des tas de briques, et tu peux les emboîter les unes dans les autres avec des sélecteurs, des propriétés, et parfois tu fais des trucs qui marchent mieux que ce que tu imaginais !

Pour le moment je n'ai pas encore d'idée de truc à pousser un peu dans ses retranchements comme je l'ai déjà fait, mais ça fait longtemps que je n'ai pas participé à un hackathon et j'aimerai bien en faire un. Je fais du software mais je suis tout pourri en hardware, dès qu'il faut souder un truc ou brancher deux machins ensemble, je suis complètement perdu. J'aimerai participer à un hackathon où il y a des gens compétents là dedans, qu'ils puissent m'apprendre, et je pense que ça me donnerait des idées d'IOT, de trucs que je pourrais réellement construire.

## Vous faites beaucoup d'open-source chez Algolia. Comment on fait pour vous aider ?

Toutes nos librairies sont open-sources et sont sur [github](https://github.com/algolia/). Les développeurs les utilisent dans des conditions bien différentes de nos conditions de tests, il y a des trucs qu'on a pu rater. Donc faire des issues, idéalement en mettant une capture d'écran de ce qui ne fonctionne pas et du résultat attendu, ou un lien vers le site dans lequel ça ne marche pas, et nous on va essayer d'améliorer.

Les features request aussi, en nous expliquant le use case de pourquoi vous avez besoin de cela. Pas forcément essayer de dire «ah je voudrais que l'API fasse exactement ça» avec les critères à passer, mais plutôt quel est l'objectif que tu essais d'atteindre. Nous, en agrégeant toutes ces requêtes, on peut faire la meilleure implémentation dans notre API pour pouvoir régler ce problème.

Participer avec des pull-requests c'est encore mieux, mais si ça vous plait en parler autour de vous c'est super ! Et bien sûr, nous rejoindre pour le faire et en était payé pour ça.

## As-tu une citation favorite ?

J'aime bien celle que j'ai en tête et que j'avais à la fin de mon talk, même si c'est de moi:

> Impossible, ça veut seulement dire qu'on n'a pas encore trouvé la solution.

L'idée est qu'il ne faut pas se dire que c'est complètement impossible et qu'on ne va jamais y arriver tant qu'on n'a pas essayé, et le jour où on trouvera la solution ça ne deviendra par définition plus impossible. Et donc ça vaut quand même le coup d'essayer des trucs qui paraissent absurdes pour voir jusqu'où on peut aller. Même si tu n'arrives pas exactement là où tu voulais aller, tu peux trouver un nouvel aboutissement, un nouveau développement terminal qui est quand même hyper intéressant. Toi personnellement tu apprends énormément de choses le long de ce voyage et ça permet de voir beaucoup plus clair.

Pour reprendre l'exemple de CSS, en essayant de le pousser au maximum tu vois vraiment ses forces et faiblesses et tu sais beaucoup mieux quand les utiliser. Tu acquiers de l'expérience en faisant des trucs complètements absurdes.

## Quelle est ta propriété CSS préférée ?

Je pense que c'est les pseudo éléments avec `content`, avec les `::before` et `::after`. Avec ça tu peux avoir un div et en avoir deux supplémentaires en quelque sorte, sur lesquels tu peux faire plein de choses. Ça te permet de garder un markup super simple et de multiplier par 3 tous les divs que tu peux avoir. Ça permet vraiment plein de possibilités.

## Super ! Merci !

De rien, c'était spontané et très chouette !
