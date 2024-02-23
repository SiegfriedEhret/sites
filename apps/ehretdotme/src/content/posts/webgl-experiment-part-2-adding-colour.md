---
date: "2013-09-29T00:00:00.000Z"
updatedAt: "2021-05-24T21:08:07.814Z"
title: WebGL experiment part 2
description: Adding colour.
tags:
  - webgl
---

Part 2 ! OMG !

## Intro

This is a very small update, and we are going to draw this:

![Polygons with colour](/contentful/62g5dRKJWnhDkjxHoQPAxU/9eb34b8877e8bfeca299a55e4dd0cf83/lesson03.jpg)
(image from [NeHe website](http://nehe.gamedev.net/tutorial/lessons_01__05/22004/))

The demo page is [here](https://dev.ehret.me/webgl-experiments/experiment02.html) and the code is [here](https://github.com/SiegfriedEhret/webgl-experiments).

We are using the code from [experiment01](/webgl-experiment-part-1-your-first-polygons/).

### Function: drawTriangle

We are just adding the colors in our `drawTriangle` function:

```javascript
var colors = [1, 0, 0, 0, 1, 0, 0, 0, 1];
```

Then, we load them into the mesh:

```javascript
triangle.setVerticesData(colors, BABYLON.VertexBuffer.ColorKind);
```

That's it !

### Function: drawSquare

Same thing here. Adding:

```javascript
var colors = [0.5, 0.5, 1, 0.5, 0.5, 1, 0.5, 0.5, 1, 0.5, 0.5, 1];
```

And loading:

```javascript
square.setVerticesData(colors, BABYLON.VertexBuffer.ColorKind);
```

## The end

I don't know yet how to not repeat the color for the square... Do you have an idea ?

See you on [part 3](/webgl-experiment-part-3-rotation/) !
