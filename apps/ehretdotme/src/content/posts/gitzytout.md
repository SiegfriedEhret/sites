---
date: "2016-02-20T00:00:00.000Z"
updatedAt: "2021-05-23T19:50:29.260Z"
title: gitzytout
description: gitzytout allows to easily maintain a list of repositories in sync.
tags: []
---

Hello you !

I made a (really) small [golang](https://golang.org/) project: [gitzytout](https://gitlab.com/SiegfriedEhret/gitzytout) !

**gitzytout** allows to easily maintain a list of (previously created) repositories in sync.

## Why go ?

![golang](../../../public/assets/contentful/3qVjtvRO0AS6ezERw6pnvr/9a2ec247e79f6279ec745295f6a380cf/Cbcx15qUcAUChGH.jpg)

It is made in [go](https://golang.org) because [Vincent](https://github.com/vbehar) thinks this language is awesome.

I started to play with the [gotour](https://tour.golang.org) and decided to play with it on a few projects, starting with gitzytout.

(Yes, gitzytout is basically 2 commands in your shell).

## how to

Install using `go get -u gitlab.com/SiegfriedEhret/gitzytout`.

First, create a `gitzytout.yaml` file in your project.

This is the example from gitzytout (dogfooding FTW):

```yaml
main: git@gitlab.com:SiegfriedEhret/gitzytout.git
mirrors:
  - git@github.com:SiegfriedEhret/gitzytout.git
```

Then, run `gitzytout` it will automagically configure your `.git/config` to allow you to push to multiple repositories.

## licence

```
Copyright (c) 2016 Siegfried Ehret <siegfried@ehret.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

## things

- the image is from [here](https://twitter.com/golang/status/700083070414643201)
