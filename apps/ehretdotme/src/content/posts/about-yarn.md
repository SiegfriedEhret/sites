---
date: '2016-10-12T00:00:00.000Z'
updatedAt: '2021-05-23T20:04:40.507Z'
title: About yarn
description: >-
  Yarn came out yesterday, and raises a few questions, Imma just leave this
  here.
tags: []
---
Yarn came out yesterday, and raises a few questions, Imma just leave this here.

I haven't tried everything so I'll separate my questions/remarks in 2 parts:

## "another" package manager LOL

Yup. And *that's good*. The thing that is not good is that almost nobody cared about the other ones. The [npm blog](http://blog.npmjs.org/post/151660845210/hello-yarn) mentions a few. 

## You will force your team / admins to use yarn

Ok you switched to yarn, because it's so fresh and so cool and so fast. So you want yarn everywhere and I understand. What happens when your code is deployed ?

If you're on docker and you manage your dockerfile and deps, it's ok.

But sometimes, you don't manage it. So your stack have an impact on other teams. Use with care !

## Usable programmatically ?

Nope.

## How about shrinkwrap ?

It's not the good old `npm-shrinkwrap.json`, but [`yarn.lock`](https://yarnpkg.com/en/docs/version-control) "stores the exact versions of each dependency for your package."

## How about deps: dev / optional / peer / global ?

Supported !

- normal: `yarn add <package...>`
- dev / peer / optional: `yarn add <package...> --<dev / peer / optional>`
- global: use `yarn global *` (`*` = whatever command)

## Debug mode ?

npm is pretty crazy when you enable debug mode.

yarn also has a `--debug` flag that display some stuff, but less than npm (I just gave it a quick glance).

## How about my .npmrc ?

Supported !

`yarn config list` shows the yarn config and the npm config.

When setting values, they don't go to the .npmrc (I don't know where they go...)

## And my private registry ?

Haven't tried it, seems unclear...

## How about github ?

It works (`npm install <user>/<module>` === `yarn add <user>/<module>`).

## Adding to an existing project ?

You have to run `yarn init` which tries to get some values from your package.json, but it'll ask questions and complete the file.

For example, we have no author or license, yarn added them.

## Can I run things ?

I use [npm-run-all](https://www.npmjs.com/package/npm-run-all) to run a bunch of tests on my project. It runs fine with `npm test` but:

```shell
~/d/e/Projet (develop ↩=) yarn run test                                                  

yarn run v0.15.1
$ "npm-run-all test:*" 
sh: npm-run-all test:*: command not found
error Command failed with exit code 127.
info Visit http://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Le sad face.

## Does most of it swag comes from the fact that it's from facebook ?

Surely. Also, everybody is tweeting about yarn's perf so it's something important, right ?
