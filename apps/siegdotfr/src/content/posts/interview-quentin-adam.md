---
date: '2018-07-10T00:00:00.000Z'
updatedAt: '2021-05-24T07:57:09.504Z'
title: Interview de Quentin Adam
description: >-
  J'étais à Devoxx en 2017 avec mon très cher Florian et nous avons rencontré
  Quentin Adam, CEO de Clever Cloud.
tags:
  - interview
---
J'étais à [Devoxx](http://devoxx.fr/) en 2017 avec mon très cher [Florian Orpelière](https://twitter.com/florpeliere) et nous avons rencontré [Quentin Adam](https://twitter.com/waxzce), CEO de [Clever Cloud](https://www.clever-cloud.com/).

La relecture ayant traîné côté Quentin comme du mien, voici enfin l'interview. Mieux vaut tard que jamais.

![Siegfried, Quentin, Florian](/contentful/4ZXqLmmmB4UfgJRisH3Qsf/c0b79f5d1764f9f48073fe9ae5623c40/DSC_5243.jpg)

## Bonjour Quentin, comment ça va en cette fin de Devoxx ?

Ça va, c'est une fin de Devoxx du coup tout le monde est un peu fatigué.

## Pour commencer, peux-tu nous parler un peu de toi et de ton parcours ?

Je m'appelle Quentin Adam, je dirige une boîte qui s'appelle Clever Cloud qui fait de l'IT Automation.
Pour faire rapide, je suis développeur, je l'ai toujours été. J'ai créé ma première boîte, qui faisait des jeux vidéos, à 18 ou 19 ans, et depuis je crée des boîtes, mais essentiellement Clever Cloud.

## Et maintenant tu as quel âge si ce n'est pas indiscret ?

J'en ai 28 je crois.

## «Tu crois» ?

Ouais, on est en fin de Devoxx...

## Surtout que l'apéro fonctionnel hier était dûr ?

C'est à dire qu'au début je pensais qu'on allait faire du théâtre sur cette histoire d'apéro fonctionnel. Après ils m'ont dit «si si, on va boire un coup» donc j'avais pensé qu'on boirait un coup de vin rouge. Non non, les mecs ont été acheter de l'eau de vie de poire. C'est pas du tout le même délire.

## Ok, on reparlera de tout ça juste après. Pour revenir à Clever Cloud, en gros c'est quoi et comment ça se positionne par rapport à d'autres solutions cloud ?

En fait, on fait de l'IT automation. En tant que développeur, on tape du code et on l'envoie. Donc nous, on prend en charge les plateformes standards: le Node, le Java, tu peux faire du vieux JEE parce que souvent les gens nous disent ouais mais on peut pas faire du cloud. Non, tu peux faire du vieux JEE qui tourne dans un WebSphere... On en a...

Donc tu tapes ton code, nous on le déploie. On va le monitorer, le relancer s'il se crash, on va sortir toutes les métriques dont on a besoin pour qu'il vive, on a des features d'auto-scalabilité où l'on va mettre des machines plus grosses ou plus de machines et les réduire en fonction de la charge. On met à jour tout l'OS qui est en dessous, donc tu n'as pas de problème de sécurité etc puisque c'est notre problème.

Toi en fait, tu codes, tu git push et c'est tout. Et à côté tu peux utiliser des database as a service, tu peux même si t'as envie pousser un docker mais en général t'as pas besoin.

Et le tout tourne après dans des machines et tout, des machines virtuelles et pas des containers, ce qui fait qu'on s'entend bien avec les mecs de la sécurité, parce que du coup de loin ça fait presque leur infra. C'est assez traditionnel.

## Quelle est l'origine de la boîte, et comment tu en viens à monter une plateforme comme ça ? C'était quoi le besoin au départ, un truc perso ?

C'est exactement ça. En fait moi à la base ça m'emmerdait de gérer les serveurs du coup j'ai commencé à automatiser la gestion des serveurs. Bon après je me suis retrouvé à gérer plusieurs milliers de serveurs, mais en fait on s'en occupe pas beaucoup. Il y en a beaucoup, avec des milliers d'applications dessus, mais ils sont gérés par des robots donc on fait pas grand chose en fait dessus. Il y a une astreinte etc mais le téléphone d'astreinte, il ne nous réveille pas une fois par mois. C'est vraiment très automatisé.

## Et vous êtes combien chez Clever maintenant ?

Maintenant on est 12, avec l'arrivée de Laurent Doguin et Philippe Charrière cette semaine.

## On a vu il y a quelques temps [un article](https://medium.com/@waxzce/joue-la-comme-clever-cloud-comment-nous-avons-surv%C3%A9cu-%C3%A0-un-redressement-judiciaire-68a4b79c902) sur la santé de Clever Cloud, suite à un redressement judiciaire. Déjà, félicitations car c'est top de vous en être bien sortis, et du coup est-ce que ça va bien ?

Ça va vraiment bien maintenant en fait. La boîte s'est vraiment bien déployée; ça a été très dûr à un moment, et il y a beaucoup d'emmerdes qui nous sont tombées sur le coin de la gueule en même temps, et en fait à ce moment là. Il y a 2 façons: il y a des startups qui vont faire un mauvais deal en levée et essayer de financer en haut de bilan des choses qu'on ne pourrait pas financer comme ça. Nous, quand on a vu que c'était le bordel, notre position a été de dire «bon, notre position est assez rude, on va faire un redressement judiciaire», qui est une méthode pour remettre la boîte debout. Ça a mauvaise réputation pour différentes raisons, mais on était dans la rudesse donc on a vu le truc jusqu'au bout. On en est sorti, ça s'est très bien passé, et c'est vrai qu'on a signé des clients assez corporate. On a une offre cloud public mais on a aussi une offre [on-premises](https://www.clever-cloud.com/on-premises) (cloud privé), ça intéresse certains corporate principalement banque et assurance.

Du coup, ça marche bien, on bosse avec ces gens là, ils sont heureux et nous aussi ! La croissance est bonne et comme je veux que la boîte se structure pour grossir, je me suis posé la question de qui va nous rejoindre pour structurer les équipes, qui pourrait travailler sur certains sujets.

Le sujet de la vente chez Clever Cloud a toujours été un sujet compliqué parce qu'on a une façon de penser et de vendre un peu particulière; on est des techs, on fait un produit tech pour des techs. C'est un produit qui est assez touchy à vendre si tu comprends pas ce que tu vends. On a usé beaucoup de commerciaux: des gens qui sont venus chez nous, qui ont essayé et qui sont partis en disant «franchement je comprends rien, je sers à rien en rendez-vous, ça me déprime», et donc on est arrivé à un modèle très sales faites par les techs. Et j'en ai beaucoup parlé avec Philippe, et du coup Philippe nous rejoint pour diriger la vente en fait. Donc ça reste un développeur qui sera à la tête des ventes, mais en fait Philippe arrive pour m'enlever beaucoup de travail. Déjà c'est une bonne chose.

Le deuxième sujet sur lequel on était au taquet et sur lequel j'étais excessivement pris aussi en tant que CEO c'était l'évangélisme, le «developer relation», la création de ce lien en face du développeur qu'on veut faire, et en fait j'en ai beaucoup parlé avec Laurent, et du coup Laurent nous a rejoint pour prendre la direction de ce pôle là pour qu'on puisse grossir sereinement en fait.

Aujourd'hui c'est bien, la techno est gérée par Clément, le marketing est géré par un autre Clément, les sales chez Philippe et le devrel chez Laurent. Nous avons annoncé Philippe et Laurent cette semaine.

## Il y a beaucoup de barbus chez Clever, est-ce que c'est un prérequis pour rentrer ?

Alors c'est pas un prérequis pour rentrer, on a même des gens qui ne sont pas barbus !
C'est vrai qu'on en a beaucoup, mais la barbe en général a vachement pris de galon ces dernières années. Y'a quand même vachement plus de barbus maintenant qu'avant. C'est juste que chez nous on ne dit pas aux gens «arrête toi à 3 jours» !

## Tu es «tout jeune», par rapport à certains, mais on dirait que tu as touché à tout. C'est quoi ton secret ? Est-ce que tu dors ?

Je ne dors pas beaucoup. J'essaie de changer ça, parce que je vieillis comme tout le monde. Ça énerve beaucoup Philippe quand je dis ça, il me dit à chaque fois «t'es vraiment qu'un branleur».

Mais du coup non je ne dors pas beaucoup, et j'ai fait beaucoup à une époque, et j'essaie de toujours faire beaucoup, et de suivre toutes les technos.

Je pense qu'un des secrets c'est aussi qu'à un moment l'équipe technique m'a expliqué que j'étais tout à fait sympathique, que c'était bien que je continue à faire de la techno, par contre que j'arrête de pousser des trucs en prod, et ne plus prendre les sujets critiques mais prendre que des sujets prospectifs. C'est ce qui m'a permis de continuer à être productif, sans les emmerder. Sinon il y a quand même des semaines où je fais autre chose.

Ce qui s'est passé c'est que j'ai souvent aidé beaucoup dans le boulot, et j'ai commencé très jeune aussi. En fait quand j'étais au collège mes parents m'ont laissé faire, je ne sais pas comment ils ont pû ne pas se rendre compte de ça, ils m'ont laissé avoir mon propre ordinateur à côté de mon pieu. J'avoue que j'ai commencé les nuits blanches assez tôt sur le code. Tu sais c'est Windows 95 tout ça, assez rapidement fallait itérer tu sais, c'était le moment où tu faisais une erreur de mémoire vive tu coredumpais pas tu vois, c'était pas l'OS qui shutdownait ton programme, c'était ton ordinateur qui passait écran bleu quoi. Ah merde... Et après fallait rebooter le bordel, c'était chiant.

## On va parler un peu de ta prez Apéro fonctionnel. On était là, c'était rigolo. Ça va les cheveux ce matin ?

[Apéro fonctionnel (P. Charrière - N. Leroux - E. Issartial - Q. Adam - T. Guenoux)](https://www.youtube.com/watch?v=d-h0rsLKc9c)

Nickel. En fait faut savoir que c'était bien évidemment complètement joué et que nous n'avions que de l'eau, hein.

## Absolument ^^. Alors: est-ce qu'il faut un doctorat pour faire du fonctionnel, ou est-ce que c'est juste «map» et «reduce» sur un tableau ?

Alors je sais que personne ne me croit, parce que j'ai souvent parlé fonctionnel, que j'ai parlé à des LambdaCon, à des ScalaDays, on me voit souvent manipuler des trucs en Scala, mais avant de préparer l'apéro fonctionnel avec Philippe, je ne savais pas ce qu'était une monade. C'est vrai.

## Mais tu en faisais quand même, maintenant tu sais ce que c'est ?

C'est juste qu'en fonctionnelle, tu te sers de concept mathématique, soit. Y'a souvent dans l'univers fonctionnel, un vocabulaire soutenu. C'est pas que les mecs veulent se la péter, c'est juste qu'en général ils viennent d'un endroit où ils ont fait vraiment des maths et du coup ils connaissent le mot qui à une définition. Par exemple, on dit que ça c'est une table, parce qu'on sait tous que ça veut dire, on dit pas le machin qui a quatre pieds et un tréteau, on dit c'est une table. En fait, pour ces mecs ça paraît naturel parce que quand tu as fais une prépa avec des maths, ça parait logique de dire Endofunctor à un moment. Je pense que ça leur parait naturel. Moi c'est vrai que j'ai pas eu cette chance là.

## Pourtant tu l'as placé quelquefois hier ?

Du coup on m'a expliqué ce que c'était. 

Parce que je trouve que :

> Mais non une monade c'est simple, c'est un monoïde dans la catégorie des endofunctor.

C'est l'une des phrase les plus drôle possible. De base, quand tu as envie de dire au mec “c'est simple une monade  c'est un monoïde dans la catégorie des endofunctor”, le mec est là “oh non putain  ...”.
En fait y'a un magma associatif, parce que le monoïde en lui même se définit autrement. Mais bref. Tu es pas obligé de connaître tout le vocabulaire par coeur. C'est utile après, quand tu veux avoir des échanges de haut niveau avec les gens et t'assurer que tu comprends quand tu veux travailler sur certains concepts. Surtout que c'est un endroit ou y'a encore beaucoup de recherche, tu as tout les concepts de free monade, où les mecs se font encore un peu chier à définir comment on va pouvoir modéliser les effets de bords pour plus qu'ils t'emmerdent, donc c'est assez intéressant d'avoir le vocabulaire. Mais en vrai, pour faire du pure fonctionnel tout simple, tu as pas besoin d'apprendre ce vocabulaire là, tu as pas besoin de lancer des stacks techno très compliquées. C'est plus un changement dans la façon de réfléchir, donc le changement des fois tu le payes un peu cher au début parce que ça fait mal à la tête.

## Plus que la poire ?

Oh ouais franchement. Moi la première fois, c'est une des rares fois où j'ai bien merdé sur une vente où j'avais dit “ça on le fera en Scala et bidule et machin”.
J'avais des mecs dans ma team qui faisait du Scala et ils galéraient et on pas réussi et du coup on c'est retrouver à livrer le client deux jours plus tard sur un truc important et qui était événementiel, donc pas de deadline possible à décaler et je me suis retrouvé dans le code ce bordel là deux nuits blanches d'affilées. C'était du temps où j'étais jeune et que je pouvais faire deux nuits blanches d'affilées. J'avoue que je pense que j'ai pas été efficace pendant un bon 32h, franchement je regardais le code, j'essayais de comprendre, je copiais collais des trucs, je rajoutais des lettres, ça pétait je sais pas trop. Et en fait à la fin de la nuit ça marchait. Mais c'est vrai que ça a été d'une douleur intense. 
Pour la petite histoire, au bout de deux nuit blanche, du coup on c'est regardé avec Bastien, en disant : “Ben du coup on fait quoi ? On rentre se coucher ? Ouais, à ce niveau là on peut lancer Starcraft 2.”
Et là a débarqué un des mecs qui rentrait de vacances dans les pays de l'est. Le mec à débarqué à 8h du matin avec des croissants et des bières et on était sur Starcraft 2. Royal !

## Nous on avait discuté avec Philippe au Jug Summer Camp et il avait fait une présentation sur quelques concepts fonctionnels. Et il racontait qu'il aimait bien adapter ça à certains trucs, par exemple la gestion d'erreurs. Et du coup, quel est ton avis ? Tu penses qu'il faut tout faire en fonctionnel , c'est la réponse à tout ? Ou est ce que cela s'applique seulement à des problèmes particuliers ?

De toute façon, on peut pas tout faire en fonctionnel. A la fin, ton processeur, il prend des instructions les unes à la suite des autres et il est procédural. Le concept du fonctionnel, c'est comme quand on explique nous qu'on ne va pas faire de changement dynamique de conf en fait c'est pas vrai. Du coup on fait tous les changements dynamiques de conf au sein du reverse-proxy. Mais en fait, une idée du fonctionnel, c'est de dire, on va mettre tout ce qui pose problème dans un tout petite endroit très sûr dans lequel on aura relu 25 fois le code et on aura aucun problème avec ce truc là et tout le reste sera différent.
En fait dans le fonctionnel, la gestion d'erreur est mieux construite parce que le système de type t'oblige à gérer les erreurs. C'est pas tant que c'est fait pour gérer les erreurs, mais du coup tu te retrouves obligé de traiter les erreurs. C'est du coup très utile pour tout le code métier un peu compliqué, qui doit avoir des chemins de branchement... Où, au lieu d'avoir des bugs bizarre qui sont liés à un contexte, tu vas avoir un schéma de décision très carré et tu auras pas de surprise. Après il faut être clair, le fonctionnel est plus lent sur certains sujets. C'est juste que l'on va regagner de la performance à d'autres endroits parce que le parallélisme va être plus calme. Mais y'a pleins de sujet que l'on va pas faire en fonctionnel mais tu peux quand même les modéliser en fonctionnel. Après des trucs comme [Optional](https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html) c'est simple, c'est agréable, je le trouve pas très compliqué et ça te supprime tellement de problèmes, c'est un vrai bonheur.

## Tu peux nous parler du reverse-proxy que vous allez bientôt sortir en open-source ?

Alors ça c'est très simple. C'est un projet qui sera complètement Open Source sous la licence [AGPL](https://fr.wikipedia.org/wiki/GNU_Affero_General_Public_License). Avec des exceptions de licence pour que l'on puisse en créer des produits propriétaires sur certains sujets. Parce que c'est quelque chose qui est fait pour des gros systèmes, et de toute façon, les gens qui mettrons leur prod dessus seront tout à fait heureux de pouvoir filer un coup de téléphone à ceux qui l'ont fait, et ça, ça se monétise, faut être clair on doit manger.

C'est un projet dont nous avons besoin donc on l'abandonnera jamais. Il est évident que les contributions seront les bienvenues. C'est du Rust, c'est marrant, c'est le langage en ce moment dans lequel il se passe pleins de choses, y'a plein de nouveautés. Rust c'est un langage qui s'attaque comme rarement on en voit au low-level. C'est le premier langage low-level qui sort depuis C++. Il permet par exemple d'écrire des drivers. Ca existe pour remplacer C++. Les mecs de Mozilla font ça pour répondre à des problèmes de concurrence. Je pense que n'importe qui ayant fait un sémaphore en C++ dans ces années d'études voit à quoi je fais référence. C'est quand même super chiant. C'est comment tu vas gérer du traitement multiple massivement parallèle mais en natif. Donc c'est quand même très excitant et il se passe plein de trucs dans ces systèmes là.

Et nous, on a commencé par écrire un truc qui s'appelle [Nom](https://github.com/Geal/nom), enfin, quand je dis nous, moi j'ai rien foutu. Y'a un mec qui a essentiellement bossé dessus qui s'appelle Geoffroy Couprie, qui est dans mon équipe. Il est leader sur tous ces sujets là. Geoffroy peut éventuellement avoir des discussions architecturales avec nous, mais  en général c'est lui qui tape le code aujourd'hui. Et du coup il a contaminé tout le monde au Rust. Geoffroy a écrit Nom qui est un parser combinator qui permet de faire du safe parsing. En fait le gros problème quand tu fais du parsing, c'est que tu dois gérer des buffers et là l'idée c'est comment est ce que l'on peut garantir que personne ne pourra sortir du parser pour aller faire du buffer overflow et te pourrir ton environnement de code. Donc c'est un truc pour la sécurité à la base, il se trouve qu'en optimisant bien, ce que tu fais, fait des instructions du processeur hyper con, c'est donc procédural et llvm te donne un code très optimisé en sortie. Nom est sorti y'a un an et demie, il a été présenté à LangSec, à StrangeLoop et tout le monde c'est mis à l'utiliser, ils ont mêmes commencé à l'utiliser dans Rust lui même. Et pour nous, Nom existe pour deux raisons: un, régler un problème de parsing dans VLC, ça c'était le côté lol du gars qui est contributeur VLC depuis toujours et deux, réécrire le reverse-proxy qui est un projet que l'on a depuis deux ans et demi ou trois ans. C'est un projet qui a commencé parce que j'ai toujours dit que l'on aurait des problèmes avec le reverse-proxy. On a commencé à réfléchir et on avait fait un POC en NodeJS avec aucune intention de le mettre en production, mais on voulait vérifier le niveau de fonctionnalité que l'on attendait. J'avais écrit un POC en NodeJS en une nuit et c'est pour ça qu'on allait pas le mettre en prod le machin. On a cherché la technologie pour le réécrire sérieusement, et on avait deux candidats, on avait Erlang et Rust. Erlang était génial sur la concurrence et sur la distribution mais à chaque fois que l'on voulait optimiser des choses low-levels sur le réseau, et je pense que le talk de [Geal](https://twitter.com/gcouprie) t'expliquait bien ça, parce que en Erlang tu as une VM, on aurait dû optimiser la VM et pour être honnête le code de l'Erlang VM on a rien compris.
On partait pas dans le bon sens, on voulait avoir la main sur le binaire généré, sur les instructions du processeur, pouvoir compiler avec certaines instructions du processeur précises qui font tel truc, faire de l'affinité de core sur l'exécution sinon on aura un problème etc. Donc on savait que l'on avait des problèmes relativement compliqué très low-level. Rust était donc tout indiqué car c'est massivement parallèle et massivement checké. Donc on a choisi Rust, enfin c'est essentiellement Geoffroy, faut pas bullshiter.

Donc ce produit là sort, c'est un reverse proxy construit pour la prod rapide, extrêmement safe, qui a des choses intéressantes dont on a discutées en design: par exemple, tu définis le nombre de connexions concurrentes qu'il peut traiter, au delà de ça il n'en prendra plus; c'est à dire qu'il sera prédictif au niveau de la performance, mais il ne dégradera pas l'ensemble du comportement pour prendre une connexion de plus. Ce sont des visions comme ça qui apporte des nouveautés dans le monde de l'ops, et les autres reverse proxies n'ont pas du tout été pensés autour de ce truc là. Il est capable de se mettre à jour réellement. A la différence d'autres systèmes, il ne se génère pas une conf qu'il sérialise dans un TOML, qu'il envoie en string à une autre fonction qui va bricoler des machins, non. C'est une réelle mise à jour de la configuration et derrière on a des runners capables de prendre la configuration d'autres systèmes: le système Clever Cloud où on a notre propre protocole de mise à jour, mais il est également capable de choper de l'information dans du consul, du etcd, du Ingress pour Kubernetes, ça doit bosser avec Swarm mais je n'ai jamais fait le test, et ça peut marcher avec [Marathon](https://mesosphere.github.io/marathon/) aussi. Le truc supporte tout ce qui est «immutable infrastructure».

## Vous êtes bien à fond sur Rust en ce moment... Est-ce qu'il y a un langage pour les gouverner tous ?

Oui enfin on fait plein de trucs en ce moment, mais sur la partie low-level effectivement c'est Rust.

Donc non, il n'y a pas de langage pour les gouverner tous. Nous, comme je l'ai expliqué, on est polyglotte depuis le début. La raison pour laquelle on fait beaucoup de Rust en ce moment et que ça se voit, c'est parce qu'en fait peu de gens font des trucs low-level et nous on en fait, et l'histoire c'est que les trucs low-level avant on les faisait en C et on évitait de le montrer parce qu'on était pas trop sûrs de notre coup (on pensait que c'était un peu de la merde). Et donc, là on réécrit massivement en Rust parce qu'on remplace ces trucs là qu'on faisait en C par du Rust. Et c'est le rôle qu'on lui a dévolu. Alors il se trouve que pour le lol on fait aussi des APIs HTTP avec [rocket.rs](https://rocket.rs/) en disant «voilà on peut le faire» mais c'est plus pour se marrer qu'autre chose; on ne fait pas réellement des sites webs en Rust. Ce qui déverrouille la porte d'entrée de l'immeuble est en Rust: tu peux lui demander sur Slack «tu peux ouvrir la porte» et le machin ouvre la porte.

## Mais sorti de ça, il n'y a pas de langage pour les gouverner tous. 

Le coeur de Clever est toujours sur le JEE initial. Il y a pas mal de trucs qui sont du streaming d'API au dessus d'HTTP et tout, c'est beaucoup de Scala parce qu'on en a fait beaucoup, ça marche très bien et on n'a pas de problème avec ça, c'est cool. Il y a du scripting Ruby un peu partout, là on est en train de réécrire notre intégration avec Github pour faire un truc vraiment neat, on l'écrit en Ruby, parce que la meilleur intégration qu'il y a eu avec Github c'est vraiment la Ruby, et qu'on préfère se faire chier à écrire notre librairie d'intégration dans un autre langage plutôt que de refaire la lib nous mêmes dans un langage qu'on maîtrise mieux. Chez nous il y a beaucoup de Java, y'a pas trop de Python. Il y a du Go sur certains cas d'usage où c'est pratique d'avoir un fat binaire qui à la fin inclus son runtime, son garbage collector tout seul comme un grand garçon. Après dans Go, j'aime pas trop le côté «tu vas devoir gérer tes propres boucles à la mano», j'ai un peu l'impression de faire du Java 1.3 et ça me les casse un peu... Mais ça c'est personnel, y'a d'autres mecs chez Clever qui font plein de Go. Et j'ai pas les generics, et la dernière fois que j'ai fait un langage dans lequel y'avait pas les generics c'était ActionScript 3... 

## Ah ouais toi t'as souffert pendant ton enfance...

Ah ouais non mais c'était rude ! J'aime pas quand dans l'API ça te dit «là on prend un Array». Ok, mais un Array de quoi ? Et là t'es obligé de lire la doc, et moi je veux que mon ide me dise «c'est un Array de bidule». J'avais trouvé ça brillant les generics quand j'avais découvert ça. Et j'aime pas le système de build aussi. Ceci dit, on en fait, le système de backup est essentiellement réécrit en Go si je ne dis pas de connerie, parce qu'en fait des fois il y a des trucs qui sont changés et comme je ne suis plus le CTO, des fois je ne suis pas nécessairement hyper au courant. Enfin... Les trucs qui marchent, je ne suis pas au courant en fait.

Qu'est-ce qu'on peut avoir d'autre chez nous... Ah y'a pas mal de Node aussi, donc en JavaScript, et tout le frontal donc en JavaScript pur.

## On a oublié des questions ?

Si tu me lances autour d'une question ouverte on va en avoir pour un moment ^^

## Tu nous as dit au début que tu es toujours développeur, comment tu t'organises avec toutes tes activités ?

Alors je ne suis plus CTO de la boîte et toutes les décisions techniques sont prises par Clément. Des fois, Clément échange avec moi parce qu'il se trouve que nous sommes beaucoup alignés. Il se trouve qu'on en parle relativement peu souvent parce que je sais déjà ce que pense Clément la plupart du temps, et il sait ce que je pense.

## Il y a un «je ne sais quoi» entre vous ?

Non mais c'est vrai ! La rencontre technologique entre Clément et moi a été foudroyante, ça a été incroyable. Et c'est un vrai plaisir de tous les instants.

Mais du coup on n'en parle pas souvent, donc je ne prends plus de décisions techniques, je fais des hacks mais j'essaie de ne plus intervenir sur des trucs core/système. Il reste quelques briques où je garde un peu de maintenance mais je ne suis jamais le principal mainteneur sur une brique, c'est toujours quelqu'un d'autre qui est owner et je fais une pull request. Il se trouve que parfois je débarque et je fais une pull request, mais je ne fais jamais genre «il faut que ce soit prêt pour demain. Le mec pourra la relire et la réécrire intégralement parce que je suis teubé si ça lui fait plaisir, ce qui arrive assez régulièrement quand même, faut pas déconner.

Là dessus, il y a des projets qui me font marrer, sur lesquels je code des machins, et ça m'amuse et c'est cool. Par exemple on a fait une grosse verrue à un moment dans rabbitMQ, je suis en train d'essayer de le réécrire propre en Erlang. Alors en vrai je ne suis pas un bon développeur Erlang, et j'ai pas forcément le temps, mais j'essaie de faire un truc propre pour qu'on puisse l'open-sourcer. Donc en fait ça emmerde personne chez Clever. Tout continuer à tourner et quand ça marche Marc Antoine pourra décider si ça part en prod ou pas. Moi j'aurai fait mon gros bordel en open-source et il fera ce qu'il veut.

Après, je continue à beaucoup m'informer, à beaucoup tester de trucs, parce que je considère que je dois rester un développeur. Et je considère que je dois continuer à faire de l'ops. J'ai des serveurs sous management, sur lesquels on lance des trucs qui ne sont pas Clever. C'est à dire que j'ai des stacks, par exemple toutes les stacks d'orchestration, sur des serveurs sur lesquels on lance des trucs et tout. Donc je continue à en faire, par contre ce n'est pas sur des trucs critiques quoi. En vrai, mon métier aujourd'hui est de faire des ventes, de l'administratif, de la représentation, du marketing, de dire oui ou non à des gens, de répondre à mes mails, ce qui désespère complètement les mecs qui attendent des réponses... Et de faire du recrutement, ce qui était dernièrement une grosse occupation chez moi, parce que vous ne le savez pas mais on a aussi recruté un mec hyper cool qui s'appelle Yoann au marketing. Toutes ces nouvelles arrivées, ça m'a pris beaucoup de temps. Donc des fois je vais pouvoir faire de la techno dans la journée, ou pas, mais j'essaie de rester développeur.

Par exemple, les diodes qui clignotaient sur le stand c'était moi ! «Voilà, Quentin a joué» quoi. 
Mais quand il a fallu rajouter le plugin MQTT, les mecs ont dit «Ouais... C'est Alexandre qui va le faire, tu risques de faire une merde, tu seras pressé, ça va être sur le chemin critique et ça va emmerder tout le monde». Ok, bah Alexandre le fera, et Alexandre l'a fait. Mais c'est moi qui ai fait les diodes, qui m'amusait tout ça. C'est à cause d'[Emmanuel Feller](https://twitter.com/moyowi), il m'a filé des paquets de diodes et j'ai commencé à jouer avec. 
Non mais en vrai, il a débarqué au bureau avec des caisses et tout, et j'ai commencé à jouer avec, en me disant «bon, il faudrait que je pense à commander un truc à bouffer», puis «faudrait que je pense à appeler ma copine pour lui dire que je vais pas rentrer dîner parce que je suis en train de jouer», puis «bon aller j'y vais» et quand je lève les yeux il est 5 heures du matin. Donc non seulement je vais me faire engueuler, en plus j'ai pas mangé, et il faut que je rentre me coucher.

Et j'essaie toujours de faire un peu d'évangélisme, un peu de conf, et ça va passer sous la responsabilité de Laurent et c'est donc lui qui décidera si j'y vais ou pas. Sachant que Laurent a une idée très conservatrice sur le fait que j'y aille ou pas parce qu'en fait Laurent lui-même attendant des réponses à mes mails, je pense qu'il va faire des trucs du genre «non, t'y vas pas, ou alors tu réponds à tes mails».

## L'orga interne est très claire, tu prends bien ton rôle et le changement

C'est ça qui m'amuse. En fait en temps que CEO je suis le dernier responsable après Dieu du truc. En clair, il faut que je fasse le boulot. Si personne ne fait le boulot, c'est dans ma corbeille. C'est pour ça que je suis toujours over-work. Parce qu'en fait j'essaie de protéger ma team, donc moi je prend tout, par définition, et je m'assure que eux aient des pipelines de boulot stables et qui leur permettent d'avancer. Donc moi je sais très bien qu'il y a plein de trucs que j'avais dit que je ferai, et que je ne ferai pas. Et tout le monde en est conscient, et c'est pas grave. J'essaie de faire ce qui est réellement important. Bon y'a des fois je me loupe hein, je dis pas que j'ai raison à chaque fois.

Il y a des métiers qu'on a besoin de faire. A une époque il fallait qu'on soit des bons ops, il fallait qu'on soit des bons devs, donc là à chaque fois j'y étais. 
Par exemple le rôle de CTO était très compliqué à définir donc j'étais de facto le CTO. Puis j'ai compris ce qu'il fallait comme rôle donc j'ai cherché et j'ai trouvé quelqu'un qui est CTO. Et il est donc CTO et je le ne suis plus. 
En marketing, pendant longtemps y'avait jamais trop personne et c'était compliqué et tout, et il se trouve que dans la team il y avait toujours un mec qui donnait toujours les bonnes réponses, et donc il est patron du marketing.
En sales, j'étais d'abord le seul sales puis le chef des sales. Donc dans les faits je dirigeais les ventes. Mais pourquoi je l'ai fait: parce que je pensais que c'était bien, parce qu'il fallait que je comprenne ce que ça veut dire de faire des ventes dans notre métier, pourquoi, dans quel sens etc. Donc j'apprends le métier, je ne dis pas que je le fais bien mais je l'apprends, je comprends sa culture, ses aboutissants, et je cherche quelqu'un de meilleur que moi pour le faire à qui je file le poste en lui disant «bah maintenant y'a assez de boulot et je comprends», et en plus du coup quand on en parlera on pourra échanger. Et donc là j'ai filé le bébé à Philippe.
Evangéliste, la même chose, à Laurent. Laurent et moi on est alignés, on a une vision, et je sais exactement ce que ça veut dire que la devrel, c'est carré, et quand je lui file le poste, c'est carré.
Reste que ces gens là ont parfois besoin de moi, donc à ce moment là je deviens une de leur ressource. C'est juste que je ne suis pas une ressource full-time donc il faut me demander s'ils ont besoin de moi. Là, faut que je fasse de l'administratif, du financier, du juridique. Là déjà on a retapé tous nos contrats par exemple. Mais incessamment sous peu je devrais pouvoir recruter dans ce domaine là parce que j'aurai compris ce qu'il nous faut.
C'est à peu près comme ça que je fonctionne, et je suis à disposition des mecs quand ils ont besoin de moi. Si après personne n'a besoin de moi à un instant T c'est parfait, je vais aller committer sur mes trucs en open-source tranquille.
Mon objectif c'est ça: mon boulot change en fonction des besoins de la boîte, de façon au fur et à mesure à pouvoir fournir les bonnes personnes pour que tout le monde puisse bosser et arrêter d'être un goulot d'étranglement. Petit à petit je supprime des parties de mon boulot et normalement à la fin je n'ai plus rien à faire. C'est très théorique, je ne sais pas si ça va marcher, mais normalement à la fin je suis juste là pour répondre aux questions. Après je suis là aussi pour leur renvoyer la balle. On va aller déjeuner ensemble, ça va durer 3 heures, on va en discuter longuement, c'est pas une vraie réunion mais une discussion informelle entre lui et moi, et on décide ce qu'on fait.

## C'est très honorable parce que je pense que c'est dûr et c'est une super bonne méthode. Est-ce que tu as une petite citation pour finir ?

Une citation... De quelqu'un d'autre ?

## Ou de toi !

Je pense que ce que j'ai dit... Tiens oui, ça va être mon dernier leitmotiv. Je pense que orienter son architecture de code et son architecture globale quand on fait de la techno sur la «developer happiness» c'est pas mal, parce qu'en fait des gens qui sont heureux, ce sont des gens qui sont motivés, des gens motivés sont des gens productifs, et puis en plus ils ne font pas la gueule quand tu vas les voir et c'est déjà vachement cool. C'est quand même beaucoup plus agréable pour la relation que tu entretiens avec les gens.

> Et donc du coup, faire du «developer happiness oriented» c'est un bon modèle.

J'espère que à la fois la boîte qu'on porte pour les gens qui vont être en interne et qui normalement va continuer à grossir aussi, ça va être ça, et surtout qu'on va être l'outil qui permet ça aux gens pour leur faire gagner des points de productivité et de bonheur dans leur vie professionnelle.

## Et bien c'est super, merci beaucoup, et bonne continuation !

Merci !
