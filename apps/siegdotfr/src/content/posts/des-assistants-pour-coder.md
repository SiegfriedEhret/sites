---
date: '2023-04-27T00:00:00.000Z'
updatedAt: '2023-04-27T18:04:23.491Z'
title: Des assistants pour coder
description: 'Copilot et ChatGPT, c''est mieux que ce que j''espérais.'
tags: []
---
## GitHub Copilot

Très curieux - et dubitatif - des outils tels que [Tabnine](https://www.tabnine.com/) ou [GitHub Copilot](https://github.com/features/copilot/), il fallait quand même que j'essaie un peu.

L'année dernière j'ai obtenu le titre de Chief Guillaume Officer au boulot en gagnant un stagiaire. Il utilisait VSCode et avait accès à GitHub Copilot et lors de sessions de « pépère programming » (comme du pair programming sauf que c'est lui qui bosse), je l'ai vu utiliser Copilot pour générer des bouts de code... Et tout corriger après. Je l'ai donc rapidement invité à ne pas l'utiliser.

Quelques mois plus tard, je décide d'essayer pour de vrai et j'utilise Copilot depuis quelques semaines. J'avoue être agréablement surpris.

Par exemple, quand j'ai cette `struct` en Go:

![Exemple Copilot 1a: on part d'une struct en Go](/contentful/2au3I6A9rwVVRydq95rLjF/0376d05f6a8f97d3149320b87894535c/copilot-1a.png)

Copilot est capable de me sortir ça:

![Exemple Copilot 1b: il génère une fonction utilitaire](/contentful/1lmPFFIbM66FAlu3XvlQQJ/e4805d49b5ec9f32f2408acf21931bef/copilot-1b.png)

Ce qui est très utile car mon grand âge et mon expérience n'ont aucune valeur à apporter sur ce genre de code.

Parfois il fait des bêtises, comme tout le monde. Ivre, il essaie de me faire faire du Angular dans un projet Svelte:

![Exemple 2: il se trompe de framework !](/contentful/zACvb8WRbhrgbdmNUayTU/109b6122481f3204b5ca9f52d66e4eb6/copilot-fail.png)

## ChatGPT

De même pour ChatGPT, à qui j'ai demandé d'écrire une définition de table SQL (BigQuery) pour correspondre à la `struct` mentionnée plus haut. Ça fonctionne presque. J'ai essayé ChatGPT 3.5 et 4, le résultat était sensiblement identique, avec la même erreur sur la définition de la PRIMARY KEY. ChatGPT 4 était meilleur pour remplacer le nom de la table par exemple, un petit plus qui aide bien.

J'ai aussi utilisé ChatGPT pour écrire un paragraphe en réponse à un message du grand chef, ça a bien marché (mais je ne peux pas vous montrer le résultat).

Aujourd'hui (désolé pas de capture non plus) je lui ai demandé de m'écrire du code Go en utilisant [Helm](https://github.com/helm/helm) pour installer un [Chart](https://helm.sh/docs/topics/charts/) de façon programmatique. Ce n'était pas génial et j'ai préféré refaire une bonne partie du code plutôt que d'essayer d'adapter ce qui ne collait pas.

## En bref

Je suis plutôt convaincu de l'utilité de ces outils en tant qu'assistants.

Ces outils sont-ils prêts à me remplacer ? Non. Ils sont là pour m'aider. Ils font des erreurs (moi aussi !) et je trouve le travail de relecture est plus intéressant que de devoir écrire des méthodes ou des scripts où je considère ma valeur ajoutée comme faible.
