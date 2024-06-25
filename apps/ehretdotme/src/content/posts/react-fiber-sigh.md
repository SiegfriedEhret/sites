---
date: 2017-04-19T00:00:00.000Z
updatedAt: 2021-05-23T21:01:44.946Z
title: React Fiber... *sigh*
description: >-
  React was mainly sold using the VirtualDOM previously, and now everything is
  about Fiber.
tags:
  - javascript
  - react
---

Hello you, how are you ?

I just bumped into the following TechCrunch post: [Facebook announces React Fiber, a rewrite of its React framework](https://techcrunch.com/2017/04/18/facebook-announces-react-fiber-a-rewrite-of-its-react-framework)

Sigh...

## React

So React is the open source «hot framework right now». It is developed by Facebook.

`<troll>`If you do not know React (and its ecosystem, react-router, redux...) you are sooo 2 years ago in web development.`</troll>`

## Wrong selling points

React was mainly sold using the VirtualDOM previously, and now everything is about Fiber. And this is sad.

Would you sell a keyboard showing people what is under the keys ?

Answer:

- For most people, no. Most people want a keyboard to have a decent set of keys to type something.
- For [r/MechanicalKeyboards](https://www.reddit.com/r/MechanicalKeyboards/), goddamn yes

Because most people do not care, they want to use the product. Framework internals are for experienced developers that want to go further.

Moreover, seriously, you can read it in the TechCrunch article:

> an updated framework that is still fully backwards compatible with existing React-based applications.

Why would most user care ?

## Want to dive into react internals ?

You can follow the evolution of progress for the implementation of Fiber in react at [isfiberreadyyet.com](http://isfiberreadyyet.com/).

The main «umbrella» issue for the transition to Fiber is [here](https://github.com/facebook/react/issues/8854)

## Final note

React solves problems Facebook encountered, and Fiber solves some other problems. Problems most of us do not have.
