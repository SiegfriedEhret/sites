---
date: '2016-04-29T00:00:00.000Z'
updatedAt: '2021-05-24T08:39:36.687Z'
title: I don't understand TypeScript
description: A few personal thoughts about my interactions with the TypeScript world.
tags:
  - angular
---
A few days ago I gave a [talk](http://cfp.devoxx.fr/2016/talk/YXM-4879/la-quete-du-graal.js) with [Romain](https://twitter.com/rmat0n) at [Devoxx France](http://devoxx.fr/), about frontend JavaScript and the hype of frameworks. I was able to listen to 2 talks where [TypeScript](http://www.typescriptlang.org/) was mentioned.

![typescript](/contentful/r8d34JqRZr1mEfMJBdlHZ/461c16ad5fde99118fafe5f8eca55fbf/typescript.jpg)

Here are a few personal thoughts about my interactions with the TypeScript world.

## The representation we have of TypeScript is wrong

There are a lot of [articles](https://medium.com/@basarat/typescript-won-a4e0dfde4b08) or [presentations](https://speakerdeck.com/vberetti/devoxx-fr-2016-typescript) depicting TypeScript as a superset of ES5/ES6 (and more). Something like:

![typescript is wrong](/contentful/5LGgXA9Iqq5dDyhoT1BLpT/09f94fa4464d993cc23a5541db7d1d8b/wrong.png)

TypeScript is actually compatible with [60% of ES6](https://kangax.github.io/compat-table/es6/#typescript):

![kangax stats on compilers and polyfills](/contentful/XcyEJat7NJ7hbYY8JhAbm/d106000101869c57519b452924ef0de9/kangax.png)

Even the current page of the [french wikipedia](https://fr.wikipedia.org/wiki/TypeScript) is misleading about the reality of TypeScript:

> Is supports the ECMAScript 6 specification.

![Wikipedia article about TypeScript](/contentful/5UY3b4USNsh4RypJV40B5p/7629c76cd7a1760bed7a33647d9e6a22/wikipedia.png)

## TypeScript is not a standard

At [Devoxx](http://devoxx.fr/), I heard that «TypeScript also embeds features from the future ECMAScript specs, add types, and it will become the standard».

Maybe, but not for now and the next few years.

The evolution of the ECMAScript specifications is a process that takes time, with multiple people involved ([TC39](https://github.com/tc39)). The evolution of the specification is not handled by a single authority (like Microsoft with TypeScript) to define the next versions.

## IDE oriented

The output file is plain JS, matching a version (ES5, ES6) that you will define.

So, all this extra-typed-sugar for nothing ? Yep.

Using TypeScript is currently only sugar in your IDE, and I am not found of the idea of choosing a specific language for that.

## Is it for me ?

I don't think so.

*Maybe* TypeScript can make onboarding of junior developers understand how things are structured in a big project.

This was a punchline from [this talk](https://speakerdeck.com/vberetti/devoxx-fr-2016-typescript):

> People coming from C# or Java won't be lost !

Look at this example from Angular 2:

![An example with angular and TypeScript](/contentful/5zrNqgmxK93jJAmXkX1Ub6/f8afe5df2266224d54b5de565e64980b/angular2-code.png)

It's like... Java.

## But, how can you code without types ?

JavaScript has types. They are dynamically inferred.

You can [beat the averages](http://www.paulgraham.com/avg.html) with a dynamically typed language...

Since the typing is optional in TypeScript, the debate about types is another story :p

## Tooling, tooling...

Since TypeScript compiles to JavaScript, you have to add a build step to your project for this.

You also surely need the [typings](https://www.npmjs.com/package/typings) package to manage TypeScript definitions files (see the [DefinitelyTyped registry](http://definitelytyped.org/)).

## The end

Well... I am a JavaScript developer (even if I made some Java before), and I like the language. People working with JavaScript should stick with JavaScript.

Will TypeScript really win? And why [Dart](https://en.wikipedia.org/wiki/Dart_(programming_language)) wasn't able to win ? Only the future will tell us.

Note: I am not a fan of [CoffeeScript](http://coffeescript.org/) or [Babel](https://babeljs.io/) either, we have to much tooling to do before really coding, but that's another story about fatigue...
