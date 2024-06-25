---
date: 2019-05-24T00:00:00.000Z
updatedAt: 2021-05-24T06:56:05.705Z
title: beulogue features
description: Let's dive into the features for beulogue.
tags:
  - beulogue
  - blog
---

I had a [question](https://twitter.com/oduquesne/status/1131718926386323456) about `beulogue` features, and how it can be compared with Hugo and Pelican.

## Content

Content, like many static site generators, are in Markdown, which is pretty limited.

The [front-matter](https://github.com/SiegfriedEhret/beulogue#front-matter) expect only a few things. Maybe more to come (`author`, `template` maybe ?).

`beulogue` handles multilingual websites, puting every language in its own folder à la Hugo.

## Templating

2 HTML files (`templates/list.html` and `templates/page.html`) and that's it. It uses [mustache](https://mustache.github.io/).

Templating is very limited and that's what I want.

It is the user responsibility to manage the templating and styling workflow and provide these 2 templates. I will blog about that soon to show how I do it.

## Fast

With Hugo my website was built in ~200ms.

`beulogue` builds about the same amount of pages in ~230ms. Compared to its limited features it is surely slower that Hugo but it is good enough.

## Documentation

There is none ! Well, `beulogue` has a [README](https://github.com/SiegfriedEhret/beulogue) which should be enough.

[Hugo's documentation](https://gohugo.io/documentation/) is huge and I found it hard to digest sometimes.

## Final notes

I think the power of `beulogue` is to be «feature-limited», with a few conventions to apply. And that's on purpose.

Keep in mind that `beulogue` is an experiment to discover the [Crystal](https://crystal-lang.org/) programming language, 2 years after playing with [the same concept with Node.js](https://www.npmjs.com/package/beulogue).

It is a side project, so expect dirty code, and no test. It will get better soon !
