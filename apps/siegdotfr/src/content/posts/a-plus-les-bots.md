---
date: "2023-08-09T00:00:00.000Z"
updatedAt: "2023-08-09T18:54:56.246Z"
title: À plus les bots !
description: >-
  Comment s'échapper (un peu) de la bulle de l'intelligence artificielle qui
  veut utiliser nos contenus.
tags: []
image: >-
  ../../../public/assets/contentful/6BHy76XDxnRvOREsQscRfa/ca7a453fee14495445074e388ddf0716/53610_A_farewell_to_bots__in_the_style_of_the_ending_of__xl-1024-v1-0.png
imageDescription: >-
  Image générée avec SDXL 1.0, avec le texte « A farewell to bots, in the style
  of the ending of a tv show. »
---

Pour suivre la voie prise part [Tracy Durnell](https://tracydurnell.com/2023/07/11/pulling-my-site-from-google-over-ai-training/) ou [Vasilis van Gemert](https://vasilis.nl/nerd/how-to-disagree-with-googles-privacy-policy/), j'ai décidé de réduire les possibilités de certains robots à utiliser mon site à des fins que je ne souhaite pas imaginer, avec par exemple Google qui annonce pouvoir utiliser tout ce qui est posté pour amuser ses projets d'intelligence artificielle ([en savoir plus](https://gizmodo.com/google-says-itll-scrape-everything-you-post-online-for-1850601486)) ou OpenAI avec ChatGPT qui peut faire de même.

## Empêcher ChatGPT

Comme indiqué dans [leur documentation](https://platform.openai.com/docs/gptbot) et [celle des plugins](https://platform.openai.com/docs/plugins/bot), on peut stopper le robot de ChatGPT en modifiant le fichier [`robots.txt`](https://www.robotstxt.org/):

```
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /
```

## Empêcher GoogleBot

De façon identique, on peut ajouter les lignes suivantes dans le fichier `robots.txt`:

```
User-agent: Googlebot
Disallow: /
```

Il faut aussi ajouter le tag suivant pour indiquer à GoogleBot de ne plus indexer les pages qu'il connait:

```html
<meta name="googlebot" content="noindex" />
```

## Et pour le reste ?

Je crois bien que pour l'instant c'est tout, il y a quelques idées telles que le respect d'un fichier [license.txt](https://werd.io/2023/licensing-site-content-using-a-text-file) mais ça reste de la théorie pour le moment.
