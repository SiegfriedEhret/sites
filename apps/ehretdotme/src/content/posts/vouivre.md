---
title: "\U0001F409 Vouivre, a small web ring"
description: Retrospective of a ~2 hours project to experiment with Astro DB
date: 2024-06-08T00:00:00.000Z
updatedAt: 2024-06-08T00:00:00.000Z
image: ../../../public/assets/Wyvern_Liber_Floridus.jpg
imageDescription: "Vouivre. Liber Floridus, 1448."
tags:
  - project
---

## I don't want to read, give me the short version

I finally found some time to try [Astro DB](https://docs.astro.build/en/guides/astro-db/), the result is [Vouivre](https://vouivre.ehret.me/).

## The idea

I gave a talk at [Devoxx France](https://www.devoxx.fr/) about [Gopher and Gemini](https://www.youtube.com/watch?v=wg_Zv-T1FGw). I also talked briefly about the web and mentioned web rings, which were quite popular around the Y2K bug time, and are making a small comeback.

I decided to try to make one to explore Astro DB!

## Hour 0 ➡️ Hour 1

I started an [Astro project](https://astro.build/) and installed the Astro DB integration.

I spent some time reading the docs. The DB [config and seed files](https://github.com/SiegfriedEhret/vouivre/tree/main/db) were quite straightforward, same for building the [home page](https://vouivre.ehret.me/) ([code](https://github.com/SiegfriedEhret/vouivre/blob/main/src/pages/index.astro)). I spent some time to do some styles etc.

Then I tried to deploy, I was a bit unsure on how to do that, between the Astro Studio that connects to the GitHub repository, the `ASTRO_STUDIO_APP_TOKEN` to configure in the Vercel project's environment variables, and the commands to push the schema and the data... But everything went well!

## Hour 1 ➡️ Hour 2

Ok time to add the real web ring functionality, to handle the next / previous / random when called with a domain given in the url.

I went with [Server Endpoints](https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes) to create urls like these:

- [vouivre.ehret.me/previous/ehret.me](https://vouivre.ehret.me/previous/ehret.me)
- [vouivre.ehret.me/random](https://vouivre.ehret.me/random)
- [vouivre.ehret.me/next/ehret.me](https://vouivre.ehret.me/next/ehret.me)

I did not spend time to look into improving the queries, but [Drizzle](https://orm.drizzle.team/docs/overview) seems interesting and closer to SQL than many other ORMs, which is a good thing!

## Next hour?

- Maybe something to register yourself?
- Buttons and banner with animated gifs from the 90s!

## Success!

Astro DB was fun and quite simple to use. The only downside currently is that a GitHub account is needed to access Astro Studio. I hope they will add more choices in the future.

Hey, I already have 1 user and 2 websites... Yes, just me haha!

If you want to join, don't hesitate to contact me or click the button in [vouivre](https://vouivre.ehret.me/).
