---
date: 2013-09-29T00:00:00.000Z
updatedAt: 2021-05-24T08:31:44.969Z
title: WebGL experiment part 3
description: Let's rotate that thing !
tags:
  - webgl
---

## Intro

A very small update from [part 2](/en/webgl-experiment-part-2-adding-colour/).

We will only rotate our elements.

![Polygons and rotation](../../../public/assets/contentful/13NtKTSTFmYKBT7e7S8d8I/063438d478931698e7f32747518a4339/lesson04.jpg)
(image from [NeHe website](http://nehe.gamedev.net/tutorial/lessons_01__05/22004/))

The demo page is [here](https://dev.ehret.me/webgl-experiments/experiment03.html) and the code is [here](https://github.com/SiegfriedEhret/webgl-experiments).

## Function drawStuff

We will create our elements as usual, and then apply rotation on them

### Triangle rotation

Square rotation, along y axis:

```javascript
var triangle = drawTriangle(scene);
triangle.rotation = new BABYLON.Vector3(0, -Math.PI / 4, 0);
```

Square rotation, along x axis:

```javascript
var square = drawSquare(scene);
square.rotation = new BABYLON.Vector3(Math.PI / 4, 0, 0);
```

## The end

You will find more information about rotation and scaling on this [BabylonJS tutorial](https://github.com/BabylonJS/Babylon.js/wiki/03-Rotation-&-Scaling).

Next lesson will be about creating 3d objects. OH YEAH.
