---
date: '2018-10-22T00:00:00.000Z'
updatedAt: '2021-05-24T06:45:06.858Z'
title: 'Angular, TL;DR'
description: >-
  I have written a few things about Angular in the past here. I have finally
  been able to work with it professionnaly, so here are a few thoughts about the
  framework and what is around it.
tags:
  - angular
  - tldr
---
I have written a few things about [Angular](https://angular.io/) in the past here. I have finally been able to work with it professionnaly, so here are a few thoughts about the framework and what is around it.

In the end, working with Angular was interesting, and I think Angular is a contradictory framework.

Angular has everything to be accessible (CLI, TypeScript...) but mixes it with advanced concepts that may make junior devs lose their minds; concepts that are sometimes overkill for nothing (like observables).

⚠️ I write a lot of stupid things.

## Training

I followed the [SFEIR School](https://sfeir.com/formation/school/) training 3 years ago and it was sweet.

Before starting the projet, I read the ebook [Become a ninja with Angular](https://books.ninja-squad.com/angular), it is an amazing resource.

## TypeScript

We can code in Angular using ES5 or ES2015, but it is not easy. The inevitable tool is [TypeScript](http://www.typescriptlang.org/).

I wrote before that I do not understand TypeScript. I changed my mind a little bit and I found that it was nice to use. I am still convinced that there are better tools to answer the problem it is trying to solve, for example [Flow](https://flow.org/), which is in my opinion a way better match for JavaScript lovers.

## Modules and components

Today, we can not live without components. All frameworks work like that. Angular allows to create [modules](https://angular.io/guide/ngmodules) to split the application.

Splitting the application is nice. Having to link all components at the root of the module, it is not (even if the CLI does it for us).

I love the idea of [Angular Elements](https://angular.io/guide/elements), but I have not used them.

## CLI

The CLI does not leave the choic of the architecture to the developer.

A nice tweet from Dan Abramov is always welcomed. About a discussion about file organization, he released [this](http://react-file-structure.surge.sh/) and here is his advice:

<blockquote class="twitter-tweet" data-conversation="none" data-dnt="true"><p lang="en" dir="ltr">It is a guideline though. It means literally “start by putting everything in one file; when it feels like it’s annoying, start splitting them up; what THAT gets annoying, maybe add some folders”.</p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/1027248875072114689?ref_src=twsrc%5Etfw">August 8, 2018</a></blockquote>

The Angular CLI is interesting to help creating files and linking components in the modules but... For users of [react](https://reactjs.org/) or [vue](https://vuejs.org/), where a component is imported directly by its parent component without having to declare it at the root of the components tree, it is not natural.

I like [schematics](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2) though.

## NGXS

Following a tip from some co-workers, we used [NGXS](https://ngxs.gitbook.io/ngxs) to handle our application data.

I have been working with other frameworks &mdash; React with Redux[^1] and Vue with Vuex &mdash; and I found NGXS being incomfortable. It was complicated to make everything work with the documentation only.

An action corresponds to a class instanciation... Why make things simple when they can be complicated ?

[^1]: I like the idea and pattern Redux leverage, but I am not a fan of the way to use it. I may talk about it later.

## Tests

I had no problem with that using [Angular.js](https://angularjs.org/) when I was young, even if some co-workers thought is was too « heavy ».

In Angular, it is even worse. Setting up tests is unbearable to keep on respecting the Holy Grail of Dependency Injection. Tests are easier to write when using react or vue.

## Observables

Observables exist for a specific usage, and Angular uses them for everything.

I often speak about using the right tool for a specific usage, and the Observables for everything is an obligatory « no thanks ».

## Forms

Forms are nice to do, because Angular makes things easy. Maybe it would have been useful to make things a little more «difficult» and leave more things to be handled by the developer.

Validators are very handy. I used to work with them with Angular.js thanks to [this article](https://www.yearofmoo.com/2014/09/taming-forms-in-angularjs-1-3.html), and I found the same joy to make weird things with Angular form [validators](https://angular.io/guide/form-validation#custom-validators).
