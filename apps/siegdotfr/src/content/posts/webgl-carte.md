---
title: C'est l'histoire d'un mec qui voulait une carte
description: >-
  J'ai joué avec quelques outils (gpt-4o, Gemini, Claude, Mistral, Jetbrains AI)
  pour avoir une carte en WebGL.
date: 2024-05-30T00:00:00.000Z
updatedAt: 2024-05-30T00:00:00.000Z
image: ../../../public/assets/webgl-map.jpg
imageDescription: La carte faite avec l'aide de gpt-4o.
tags:
  - ai
  - threejs
  - webgl
---

Pour changer un peu des cartes « classique » à la OpenStreetMap, j'avais envie d'essayer un peu de voir ce qui est possible de faire avec [three.js](https://threejs.org/).

Comme je n'y connais rien, j'ai demandé à quelques outils à la mode de m'aider. C'était rigolo.

La requête de base est « make a webgl map of the world, then highlight France, Switzerland and Japan sequencially ».

## gpt-4o

Ça a presque fonctionné. J'ai modifié l'import de three que j'ai installé via npm au lieu de la tirer depuis un CDN et le chemin du fichier de texture qui allait vers un lien mort. Aussi, il manquait la mise en valeur des pays. Mais c'est déjà pas mal, et le code était assez compréhensible.

J'ai ensuite demandé d'ajouter la gestion de la souris pour faire gigoter la sphère avec la requête « add mouse events to move the map ». Là, j'ai eu une erreur `Uncaught TypeError: THREE.OrbitControls is not a constructor`. Effectivement, il avait généré un `new THREE.OrbitControls(...)` alors qu'un `new OrbitControls(...)` suffisait. Je suis toujours content du résultat, jusqu'à ce que je remarque que les pays étaient en fait bien mis en valeur, et qu'avec la rotation ça ne fonctionnait super pas. Avec la gestion de la souris en plus, c'est la catastrophe. Bref, j'enlève la rotation.

Le résultat est plutôt bien pour un truc que j'arrive à relire et à comprendre.

Essayons avec d'autres.

## Claude 3 Opus

Il m'a en gros sorti des bouts de [https://github.com/vasturiano/three-globe](https://github.com/vasturiano/three-globe) mais ça n'a pas fonctionné. J'ai changé les imports comme dans l'exercice précédent, j'ai changé le chemin vers la définition des pays, et le chemin vers la texture (qui n'a rien changé).

Je me suis arrêté là car j'avais plus envie de voir d'autres options plutôt que de debugger un résultat déjà moins utile que sur gpt-4o.

## Gemini 1.5 Pro

J'avoue, celui-ci m'a fait rire.

Il m'a dit qu'il ne peut pas, mais que les étapes sont :

- Faire un canvas WebGL
- Charger la géométrie du monde
- Appliquer les Textures
- Gérer la mise en valeur des pays

Il y avait un peu plus de détails que ça mais juste des explications. Et que tout ça nécessite du code. SU-PER.

Je lui ai donc demandé du code. J'ai eu du code. Et une belle sphère toute bleue. Pas de texture, pas de mise en valeur des pays, pas de rotation (qui n'était pas dans la demande initiale mais j'avais bien aimé dans le premier cas).

Au suivant.

## Mistral Large

Il m'a sorti un bout de code qui charge un modèle 3D d'un monde - fichier que je n'ai pas. Je lui ai donc demandé « I don't want a pre-made 3d model. » et il m'a expliqué les étapes pour obtenir une géographie du monde et que j'ai besoin de faire ceci et celà pour convertir au bon format etc. Le seul bout de code décrivait comment ajouter la donnée au format GeoJSON dans une scène three.js

J'ai arrêté là.

## Jetbrains AI Assistant

Il m'a sorti des bouts de code à recoller dans une page. Ça n'a pas fonctionné du tout (page blanche). Dommage, c'était bien expliqué.

Il m'a proposé un mélange de three.js et de d3.js, curieux par rapport aux autres, sans finir son travail pour la partie géométrie avec d3 (et j'ai toujours un blocage avec d3 donc je ne continuerais pas).

Il m'a donné des pistes pour continuer, par exemple comment faire la mise en valeur des pays etc. Mais sans une base fonctionnelle, dur dur.

## C'est la fin

Dans ce cas, et je vais le répéter, DANS CE CAS, c'est gpt-4o qui m'a été utile.

Il y a quelques mois, gpt4 était loin derrière Claude et Mistral sur une question d'accord en langue française, et j'avais du préciser plusieurs fois pour obtenir une réponse, tandis que les autres avaient répondu du premier coup.
