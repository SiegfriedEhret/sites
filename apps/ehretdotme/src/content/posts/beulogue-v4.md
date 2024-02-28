---
date: "2023-05-21T00:00:00.000Z"
updatedAt: "2023-05-21T16:03:24.320Z"
title: beulogue v4
description: An update on the stack used for my website.
tags: []
image: >-
  /contentful//4ZGKt8LKA7v8RynaccxQ32/f525b12344e73044ae714a1d792a1b54/beulogue-logo.png
imageDescription: beulogue logo
---

The previous post like this happened [on my French website](https://sieg.fr/ied/le-stack), where I explained the move to [SvelteKit](https://kit.svelte.dev/) and other details.

## beulogue... ?

`beulogue` is the name dead side projects to explore different languages while building a static site generator. First in Node.js, then in Crystal, then (not really static but voilà) using SvelteKit.

## ... beulogue!

The main motivation behind the migration was the unnecessary stack when I needed a static website.

I have been looking at [Astro](https://astro.build/) for a while, I tried before (pre 1.0) and it failed hard to match my needs. Trying it again now, I am very happy with the result and you are looking at the website built with beulogue v4 (using Astro).

And I broke the RSS feed because the date format is different, sorry!

For the curious minds out there, [the code is here](https://git.sr.ht/~siegfriedehret/sites/tree/main/item/apps/ehretdotme).

Now, I need to find a way to configure a webhook between Contentful and Sourcehut. See you!
