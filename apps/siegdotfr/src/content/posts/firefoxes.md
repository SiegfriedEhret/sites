---
title: On n'a pas assez de Firefoxes.
description: Il y a trop de Chromes.
date: 2024-06-06T00:00:00.000Z
updatedAt: 2024-06-06T00:00:00.000Z
image: ../../../public/assets/IMG_2685.JPG
imageDescription: Marcel Broodthaers - Le Corbeau et le Renard (1967).
---

Il y a quelques jours, je découvrais [whattrainisitnow.com](https://whattrainisitnow.com/) et [whattrainisitnow.com/calendar](https://whattrainisitnow.com/calendar/), bien utiles pour savoir où on en est dans les versions de Firefox.

En particulier pour les versions ESR qui sont parfois utilisées pour des dérivations du navigateur comme [Floorp](https://floorp.app/en), que je teste en ce moment.

Et donc attention, prise de position :

> On n'a pas assez de Firefoxes.

Hormis Firefox et ses différentes versions (normal, beta, developer edition, nightly, ESR), les alternatives basées dessus sont très (trop) « Firefox ». Je pense à [Waterfox](https://www.waterfox.net/), [LibreWolf](https://librewolf.net/) etc. J'ai aussi essayé [Pale Moon](https://www.palemoon.org/) et [SeaMonkey](https://www.seamonkey-project.org/).

Pour quelqu'un qui traîne sur le web depuis la fin des années 90 comme moi, Pale Moon et SeaMonkey m'ont rappelé de bons souvenirs avec leur aspect rétro.

Revenons à « On n'a pas assez de Firefoxes ». Quand on compare avec les navigateurs qui sont des dérivés de Chrome (je raccourcis, c'est Blink) ou WebKit, il y a une variété de pistes explorées pour des interfaces nouvelles. Un [Vivaldi](https://vivaldi.com/fr/) est très personnalisable, un [Arc](https://arc.net/) je ne sais pas car pas utilisé mais l'interface est inhabituelle, un [qutebrowser](https://qutebrowser.org/) est incroyable. Et pour les dérivés de Firefox, on se retrouve avec des Firefox sans la télémétrie (c'est un peu réducteur mais ce sont eux qui ont commencé !).

J'ai l'habitude d'utiliser l'édition [développeur](https://www.mozilla.org/fr/firefox/developer/) de Firefox, et j'avais envie d'avoir quelque chose de plus personnalisable. Je me suis donc arrêté dernièrement sur Floorp, que je trouve chouette à utiliser (peut être en attendant que les [onglets verticaux arrivent dans Firefox](https://blog.mozilla.org/en/mozilla/heres-what-were-working-on-in-firefox/) pour de vrai ?).

Et là, je découvre que des bouts de mon site explosent, car Floorp est basé sur [Firefox ESR](https://www.mozilla.org/fr/firefox/enterprise/) et n'est donc pas aussi à jour côté tech, par exemple le [CSS Nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting) n'est pas encore supporté. Firefox ESR est aujourd'hui basé sur Firefox 115, ça va passer à Firefox 128 [début juillet](https://whattrainisitnow.com/release/?version=esr).

Et j'avoue que je trouve ça très bien d'être passé sur un navigateur avec des fonctionnalités moins récentes pour s'assurer que ce que je bidouille sur le web soit utilisable un peu partout.

Une petite note à propos de [Servo](https://servo.org/), le projet de moteur de rendu de Mozilla qui n'est plus chez Mozilla. J'ai vraiment hâte que le projet progresse assez (côté support des [fonctionnalités web](https://wpt.servo.org/)) pour voir ce qu'on peut construire comme navigateurs dessus. On a besoin de plus de diversité. Des Firefoxes, mais pas que.

Bisous !
