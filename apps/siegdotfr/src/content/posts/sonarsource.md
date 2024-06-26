---
date: 2022-01-23T00:00:00.000Z
updatedAt: 2022-01-24T06:23:57.654Z
title: >-
  Candidat·e à SonarSource ? Voici quelques questions à poser qui peuvent t'être
  utiles.
description: >-
  Il y a un peu plus d'un an, je quittais SonarSource après y avoir passé 18
  mois. J'y ai vécu plein de belles choses, et comme partout il y a des bons
  côtés et des choses à améliorer. Voici donc quelques questions que vous
  pourrez poser lors des différents entretiens pour savoir où c'en est,
  accompagnées de mes observations.
tags: []
---

Il y a un peu plus d'un an, je quittais [SonarSource](https://www.sonarsource.com/) après y avoir passé 18 mois.

J'y ai vécu plein de belles choses, et comme partout il y a des bons côtés et des points à améliorer. Voici donc quelques questions que vous pourrez poser lors des différents entretiens pour savoir où c'en est, accompagnées de mes observations.

## Quel est le processus de recrutement ?

J'ai été mis en relation avec une personne en interne, je n'ai pas eu le premier vrai entretien avec une personne du recrutement. Voici quelques notes sur les entretiens que j'ai passés pour un poste de développeur:

- Un test technique sur une plateforme en ligne: rien de très surprenant, même si c'est toujours un peu stressant...
- Un entretien avec un dev, en visio, très généraliste et sympa, mais avec quelques questions pièges comme « où tu te vois dans 5 ans ? » (impossible de répondre).
- Un entretien avec un autre dev, en visio, potentiel futur collègue. Avec un peu plus de côté pratique que celui sur la plateforme en ligne. C'était chouette !
- Une journée sur place:
  - Entretien technique d'une demie journée. L'exercice était sympa - une mini app à refaire - pour causer technique (JavaScript / React), CSS, tests et API. Avec un déjeuner pour rencontrer quelques membres de l'équipe. Suivi de:
  - Entretien avec une personne de l'équipe « People & Culture ». C'était une discussion intéressante, mais après l'exercice du matin j'étais un peu épuisé. SonarSource affichait un côté « venez comme vous êtes » mais cet entretien le tordait en « mais pas trop car il faut être comme nous » et peut avoir un effet pervers sur la diversité.
- Un entretien avec le grand chef, où l'on parle évidemment salaire. C'est un entretien que je trouve important - même si à l'échelle c'est compliqué à organiser.

À l'époque ça ne m'avait pas choqué, et même si c'est un enchaînement assez normal aujourd'hui je me rends compte que ça fait peut être beaucoup, surtout dans notre domaine.

## Comment est constituée l'équipe que je vais rejoindre ?

Je suis arrivé dans une équipe toute fraîche, créée plus ou moins à mon arrivée lors du découpage de l'unique équipe produit(s) en plusieurs équipes distinctes pour [SonarCloud](https://sonarcloud.io/), [SonarQube](https://www.sonarqube.org/) et [SonarLint](https://www.sonarlint.org/) (il me semble que cette dernière est arrivée un poil plus tard mais j'ai un doute).

L'équipe SonarCloud a évolué avec le temps en taille mais c'était une grosse équipe avec plein de métiers dedans: développeurs et développeuses (back, front), UX, SRE, documentation, release, data... Au départ le product manager (PM) faisait partie de l'équipe, puis en est officiellement sorti (ça m'a choqué) pour faire partie d'une équipe PM. Au final ça n'a pas changé grand chose de mon point de vue, heureusement !

Une belle équipe avec plein de gens chouettes, mais malheureusement un peu silotée. On retrouvait souvent les devs d'un côté, les SRE de l'autre, le chouchou qui gère le build dans son coin etc. Le côté DevOps manquait un peu mais on était conscient de tout ça et on essayait d'améliorer au fur et à mesure.

J'aime bien bosser dans une équipe qui englobe plein de disciplines, et même si l'équipe était grosse on travaillait plutôt en petits groupes.

## Quelle est la stack technique de mon projet ?

Je suis développeur donc la technique joue un rôle important dans le choix du boulot - même si je favorise le projet et l'équipe plutôt que les choix techniques.

Pour SonarCloud:

- Côté front: React, un peu de Redux (mais pas trop, ouf), TypeScript, quelques libs. Il y a une grosse application mais j'ai trouvé que c'était assez bien rangé et j'arrivais bien à m'y retrouver. TypeScript m'a mis une petite baffe mais j'ai appris beaucoup.
- Côté back, j'ai vraiment eu du mal à m'y retrouver. On sentait bien le poids des années avec du Java un peu poussiéreux. Il y avait aussi un peu de Python dans les coins pour quelques services, et beaucoup d'efforts sur la capacité à monter en charge et le découpage du monolithe en services (pas forcément micro, et c'est bien).
- Côté déploiement: c'est sur AWS, donc il y avait des yaml engineers pour faire tout ça :).

On déployait quasiment une fois par jour, donc les mises à jour des analyseurs de langages arrivaient rapidement pour l'ensemble des utilisateurs et utilisatrices. Pas besoin d'attendre la prochaine version comme avec SonarQube. Ça veut aussi dire qu'un bug sur un analyseur donnait des résultats bizarres chez tout le monde. Et il fallait au moins deux heures le temps du build sur la Pull-Request (le code était sur GitHub) puis sur la branche principale pour sortir le correctif. J'espère que ce temps s'est réduit depuis !

Chose surprenante, la page vitrine était séparée de la partie produit et était gérée par l'équipe Marketing. Gatsby a été mis en place pour réunir le tout. Quand ça a été mis en place, ça a mis une jolie claque sur les fesses des devs côté marketing qui ont du faire des tests pour de vrai afin de respecter les règles de couverture de code ! J'espère que depuis iels ont appris à en faire sur leurs projets aussi. Et à lire les logs pour savoir ce qui explose.

## Vous développez en Agile ?

Le seul moment vraiment agile pour moi était sur la partie onboarding de SonarCloud, où on a commencé [à bosser sur papier avec la ChoUX (Chief of UX)](https://twitter.com/Laoraw/status/1134452601662128128)), puis développement avec une démo plus ou moins à chaque daily standup pour voir où on en est, donc une boucle de retours rapide. C'était trop bien !

L'agile SonarSource c'est plutôt ce qui est représenté en figure 5:

![agilol](/assets/contentful/2fPMwFMUiscHAfBOTaJe59/8b575880b785715165d446714ad3ba64/agile.png)
([source](https://twitter.com/DT_comic/status/1324278112813764608))

On essayait de cibler des «sprints» de 2 semaines, qui débordaient quasiment tout le temps.

## Quels sont les objectifs pour l'équipe / le produit ?

Les objectifs étaient fixés en début d'année, avec une petite réévalutation au milieu. Ils sont annoncés lors de 2 cérémonies (le grand raout en janvier et le petit raout en été). Il y a des objectifs produits et des objectifs d'équipe.

Il est intéressant de noter que pour SonarCloud nous avions aussi des objectifs d'adoption et de croissance, donc ça va plus loin que l'équipe et concerne aussi le marketing - qui est une autre équipe. Malheureusement en un an et demi je n'ai vu que très peu d'efforts du marketing sur SonarCloud. Grosse déception.

Il peut aussi être intéressant de demander quels sont les objectifs au niveau de l'entreprise.

## Comment ça se passe à mon arrivée ?

Pour le premier jour j'ai évidemment fait le tour des locaux pour rencontrer plein de gens, j'ai reçu mon matériel et découvert ma place. J'avais aussi une petite fiche avec le programme à suivre, c'était bien.

Chaque nouvelle recrue est liée à un ou une mentor; pour moi c'était un des fondateurs de la boîte - qui faisait partie de l'équipe SonarCloud - et c'était top. On faisait des petits points de temps en temps pour voir comment tout se passe, quelle direction je pouvais prendre dans l'équipe etc. Secrètement j'avais aussi un mentor technique qui m'a expliqué la vie sur le projet.

Ça a changé avec le temps par la formalisation du rôle par l'équipe People & Culture et le mentor ne devait plus faire partie de l'équipe (je trouve ça bien) et l'ajout d'un point de contact dans l'équipe pour faire le lien. Je n'ai malheureusement pas pû être mentor; c'est un rôle que j'aurais bien aimé avoir.

## Quel est le salaire ?

La question pour titiller un peu, car il n'y avait aucune indication sur le salaire jusqu'au dernier entretien. Le processus étant long, il fallait être motivé pour aller jusqu'à la fin aveuglément.

J'ai été embauché à 126k CHF (les locaux principaux sont à Genève) sans négocier pour un poste de dev senior frontend (et un peu plus que ça).

Pendant que nous sommes sur le salaire: SonarSource est passé par Mercer pour définir des niveaux par métier et ranger les salariés en différents niveaux (P1 à P6). Chaque niveau correspond à un palier de salaire en suivant l'estimation du marché selon Mercer + 8% (parce que c'est SonarSource) + 1% par an d'ancienneté.

La mise en place de cette grille des salaires a aussi sonné la fin des primes individuelles (hors exception) et des entretiens annuels. Il reste quand même un bonus d'entreprise, identique pour tout le monde. Il a quand même fallu déterminer quel niveau correspond à chaque personne, en prenant en compte:

- Un niveau à l'arrivée.
- Un niveau par le/les champions (j'en reparle un peu plus loin) et/ou l head of de l'équipe (il n'y avait pas de head of pour SonarCloud)
- Un niveau auto-évalué (comme tout était très flou je m'étais mis P6 en espérant une discussion qui n'a jamais vu le jour) selon la grille Mercer.

Au final j'ai été classé P3, ce qui correspondait à un salaire d'environ 115k CHF. Comme j'étais arrivé à un salaire plus haut, mon salaire n'a pas bougé.

Donc: si on ne change pas de niveau et donc de responsabilités, on a 1% d'augmentation par an, ce qui est inférieur à l'inflation. Le salaire à SonarSource est attractif quand on arrive sur Genève, pas si généreux quand on est sur place.

J'ai trouvé la mise en place de cette grille peu représentative des valeurs que SonarSource met en avant: manque d'agilité et de réaction aux retours qui ont été faits. À part les niveaux Mercer qui ont été adaptés en niveaux SonarSource.

## Niveau logistique ?

### Les bureaux

Quand je suis arrivé les bureaux étaient vers l'aéroport de Genève, ce qui permettait d'aller se faire une fondue de temps en temps dans un des boui-bouis du terminal principal. Dur pour le régime.

Les bureaux étant bien pleins, on a bougé au dessus d'Ikea. Les bureaux étaient donc bien vides ! Et on a perdu la fondue dans l'affaire mais on a gagné des boulettes Ikea. Les bureaux étaient constitués de (trop) gros open spaces - compliqué quand il y a des pipelettes dans les coins ou qui s'en cogne du savoir vivre dans un tel environnement - et de salles de réunions toujours prises donc il fallait galoper à l'autre bout pour accéder à celles que personne ne veut.

### L'équipement

J'avais le choix entre Linux ou Mac, et j'ai reçu un iMac à mon arrivée, avec un disque dur aux fesses pour pouvoir le brancher sur une autre machine quand je voulais bouger de place / bosser depuis chez moi. Quelle idée saugrenue: je ne souhaite pas brancher un disque du boulot sur ma machine perso.

J'ai obtenu un MacBook Pro parce que j'allais squatter en conf de temps en temps. C'était quand même mieux.

## Quelles sont les possibilités d'évolution ?

La boîte ayant une structure assez plate, que faire ?

On peut par exemple:

- Prendre part à des initiatives. J'aime bien ça, il y a plein de possibilités pour s'investir sur d'autres choses que son poste (le code dans mon cas), que ce soit au niveau de l'équipe ou de l'organisation.
- Devenir mentor.
- Changer de niveau SonarSource (P3 => P4 par exemple).
- Demander le badge champion. C'était une reconnaissance des pratiques SonarSource pour délivrer. Et ça permettait d'avoir des droits sur GitHub (privilège !). Malheureusement je n'ai jamais eu d'échange avec quelqu'un de SonarSource qui m'a dit «là je mets ma casquette de champion·ne, et voilà il faudrait améliorer ça ou ça...» et je doutais de l'utilité réelle du titre dans les faits (pour le reste) ainsi que pour celles et ceux qui le sont (car le titre n'apportait aucun bonus / prime).
- Changer de poste en rejoingnant une autre équipe ou en devenant Head Of.

À part demander un changement de poste, les possibilités demandaient surtout un effort de l'employé·e vers l'entreprise, mais pas dans l'autre sens (rappel: pas de prime hors exception). La reconnaissance était difficile à avoir, à part un « kudos » dans un canal slack, ce qui est rigolo mais n'a aucun impact.

J'avais ça en tête en arrivant: [Travailler sans hiérarchie ? Expérience chez SonarSource](https://www.youtube.com/watch?v=vkvi6wfih58), qui enjolivait un peu la réalité. Oui l'organisation était globalement horizontale, sauf quand elle ne l'était pas. De mon point de vue, SonarSource était plutôt une organisation trifonctionnelle avec la noblesse (le patron et la management team), le clergé (l'équipe People & Culture et les champions dans une certaine mesure) qui répandent la bonne parole, et le tiers-état (le reste). Je suis très curieux de voir si SonarSource évoluera comme les sociétés trifonctionnelles l'ont fait dans l'Histoire (ça vous parle la Révolution ?).

## Quel est le rôle de People & Culture ?

C'est une équipe que j'ai déjà mentionnée à plusieurs reprises pour leur engagement dans les entretiens ou le sujet du mentor. J'étais très curieux de voir comment elle pouvait aider à conserver une mentalité tech dans une boîte avec une grosse croissance. Cette équipe était aussi chargée de l'entretien de sortie, pour ne rien faire avec les potentiels retours.

Finalement, cette équipe m'a surtout permis de mettre un mot sur ce que je ne veux plus voir dans mon entourage en entreprise: les emplois fictifs - sauf pour une personne de l'équipe qui a délivré des choses de valeur et qui, comme le nom de l'équipe l'indique, fait attention aux gens.

L'équipe People & Culture est aussi celle qui prône le plus la «co-responsabilité», ce qui leur permet de se désengager de la résolution de la plupart des problèmes en laissant les gens se débrouiller.

Vous connaissez certainement le ridicule du baby-foot dans une entreprise pour dire qu'on œuvre pour le bien être des gens ? Quand c'est remplacé par du yoga, ça reste ridicule.

## Conclusion

Les produits SonarSource sont chouettes et je continuerai de les utiliser dans la mesure du possible. Beaucoup de collègues étaient absolument adorables, et ce dans toutes les équipes.

À SonarSource il y a beaucoup de choses intéressantes qui en font une boîte unique - comme beaucoup d'autres en fait. Mais sur Genève, c'est certainement une des rares boîtes qui mérite qu'on s'y intéresse. Pour ça, c'est [par ici](https://www.sonarsource.com/company/jobs/).

Ah oui un petit jeu pour terminer: chez SonarSource il y a un [excellent produit](https://www.youtube.com/watch?v=-NzxJGvZzeQ). Trouverez-vous qui c'est ?

Bisous.
