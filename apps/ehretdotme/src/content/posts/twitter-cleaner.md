---
date: "2016-10-12T00:00:00.000Z"
updatedAt: "2021-05-24T08:41:15.512Z"
title: Twitter Cleaner
description: A Go(lang) tool to clean some mess from my Twitter.
tags: []
---

You may have heard of [JS Fatigue](https://encrypted.google.com/search?q=JS%20Fatigue). I am currently in a Twitter Fatigue mood.

I use each social network differently:

- G+ was for my mum (Hi!)
- Facebook for buddies and following some musicians or groups.
- Twitter for tech, where I spend a loooot of time.

And I got too many people, and too many tweets...

It was too much.

Also, freaking ads. Each eighth tweet is a sponsored one. Damn.

I also want to clear my timeline from inactive people that I don't care about.

So, I wrote twitter-cleaner (on [gitlab](https://gitlab.com/SiegfriedEhret/twitter-cleaner) or [github](https://github.com/SiegfriedEhret/twitter-cleaner) thanks to [gitzytout](https://gitlab.com/SiegfriedEhret/gitzytout)).

## What

`twitter-cleaner` is made in [golang](https://golang.org/) and uses the following dependencies:

- [github.com/ChimeraCoder/anaconda](https://github.com/ChimeraCoder/anaconda) to interact with twitter
- [github.com/Sirupsen/logrus](https://github.com/Sirupsen/logrus) for logs, because it is awesome !

## Result

I was following ~1120 accounts and I am back at 709... And it won't stop here, I need to cleanup active people now, but that is another story :)

Also, I want to check links in my old tweets and remove the ones with links that doesn't work anymore.
