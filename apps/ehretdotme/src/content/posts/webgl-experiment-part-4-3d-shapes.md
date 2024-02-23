---
date: '2013-10-04T00:00:00.000Z'
updatedAt: '2021-05-24T08:32:06.184Z'
title: WebGL experiment part 4
description: 3D shapes.
tags:
  - webgl
---
So I heard you liked webgl...

## Intro

We are going to draw this:

![3D shapes](/contentful/6qtsN2kqo9JLEuNpW9qJ1f/01609330aef4ea462ab26037c2625d48/lesson05.jpg)
(image from [NeHe website](http://nehe.gamedev.net/tutorial/lessons_01__05/22004/))

The demo page is [here](https://dev.ehret.me/webgl-experiments/experiment04.html) and the code is [here](https://github.com/SiegfriedEhret/webgl-experiments).

## Drawing stuff

This function has changed:

* Light type: we now have a better light with a nice reflection sometime (^o^)/
* No more triangle or square, now we have a pyramid and a cube !

```javascript
function drawStuff(engine) {
  var scene = new BABYLON.Scene(engine);
  scene.ambientColor = new BABYLON.Color3(0, 0, 0);

  var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 0, -10), scene);
  camera.target = new BABYLON.Vector3(0, 0, 0);
  var light0 = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(0, -1, 0), scene);

  var pyramid = drawPyramid(scene);
  var cube = drawCube(scene);

```
[Let's add an HEAVY ROTATION](https://www.youtube.com/watch?v=lkHlnWFnA0c)
```javascript
  var degree = 0;

  setInterval(function() {
    var value = Math.PI * degree++/180;
    pyramid.rotation = new BABYLON.Vector3(0, -value, 0);
    cube.rotation = new BABYLON.Vector3(-Math.PI/12, value, 0);
    if (degree === 360) {
      degree = 0;
    }
  }, 10);

```
Finally, let's move our shapes
```javascript
  pyramid.position.x = -2;
  cube.position.x = 2;

  return scene;
}
```

### Function: drawPyramid

Our `drawPyramid` fonction will build a nice pyramid, with a base face (square) and four triangles from the base borders to the top ([and beyond !](https://www.youtube.com/watch?v=ejwrxGs_Y_I))
```javascript
function drawPyramid(scene) {
  var pyramid = new BABYLON.Mesh('pyramid', scene);
```
We start with the faces. Please note that they are triangles (3 points each) except the last one, which is a square:
```javascript
  var positions = [
    // Front face
    0,  1,  0,
    -1, -1,  1,
    1, -1,  1,

    // Right face
    0,  1,  0,
    1, -1,  1,
    1, -1, -1,

    // Back face
    0,  1,  0,
    1, -1, -1,
    -1, -1, -1,

    // Left face
    0,  1,  0,
    -1, -1, -1,
    -1, -1,  1,

    // Bottom face
    -1, -1, -1,
    1, -1, -1,
    1, -1, 1,
    -1, -1, 1
  ];
```
The normals for our faces:
```javascript
  var normals = [
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1
  ];
```
Nice colors:
```javascript
  var colors = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1,

    1, 0, 0,
    0, 0, 1,
    0, 1, 0,

    1, 0, 0,
    0, 1, 0,
    0, 0, 1,

    1, 0, 0,
    0, 0, 1,
    0, 1, 0,

    0, 0, 1,
    0, 1, 0,
    0, 0, 1,
    0, 1, 0
  ];
```
A loop to generate the indice for our faces:
```javascript
  var indices = [];

  var i = 0;
  while (i < 12) {
    indices.push(i+0);
    indices.push(i+1);
    indices.push(i+2);

    i = i+3;
  }
```
Except for the base, displayed by 2 triangles:
```javascript
  indices.push(12);
  indices.push(13);
  indices.push(14);

  indices.push(12);
  indices.push(14);
  indices.push(15);
```
Finally, we load everything into the mesh:
```javascript
  pyramid.setVerticesData(positions, BABYLON.VertexBuffer.PositionKind);
  pyramid.setVerticesData(normals, BABYLON.VertexBuffer.NormalKind);
  pyramid.setVerticesData(colors, BABYLON.VertexBuffer.ColorKind);
  pyramid.setIndices(indices);

  return pyramid;
}
```

### Function drawCube

This function looks like what we saw before, but every face has 4 points
```javascript
function drawCube(scene) {
  var cube = new BABYLON.Mesh('cube', scene);
```
We start with the faces.
```javascript
  var positions = [
    // Front face
    -1, -1, -1,
    1, -1, -1,
    1, 1, -1,
    -1, 1, -1,

    // Right face
    1, -1, 1,
    1, 1, 1,
    1, 1, -1,
    1, -1, -1,

    // Back face
    -1,  1,  1,
    1,  1,  1,
    1, -1,  1,
    -1, -1,  1,

    // Left face
    -1, 1, 1,
    -1, -1, 1,
    -1, -1, -1,
    -1, 1, -1,

    // Top face
    1, 1, -1,
    1, 1, 1,
    -1, 1, 1,
    -1, 1, -1,

    // Bottom face
    -1, -1, 1,
    1, -1, 1,
    1, -1, -1,
    -1, -1, -1
  ];
```
The normals for our faces:
```javascript
  var normals = [
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1
  ];
```
A loop to generate the indice for our faces:
```javascript
  var indices = [];

  var i = 0;
  while (i < 24) {
    indices.push(i+0);
    indices.push(i+1);
    indices.push(i+2);

    indices.push(i+0);
    indices.push(i+2);
    indices.push(i+3);

    i = i+4;
  }
```
Nice colors:
```javascript
  var colors = [
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,

    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    1, 1, 0,
    1, 1, 0,
    1, 1, 0,
    1, 1, 0,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    1, .2, .6,
    1, .2, .6,
    1, .2, .6,
    1, .2, .6
  ];
```
Finally, we load everything into the mesh:
```javascript
  cube.setVerticesData(positions, BABYLON.VertexBuffer.PositionKind);
  cube.setVerticesData(normals, BABYLON.VertexBuffer.NormalKind);
  cube.setVerticesData(colors, BABYLON.VertexBuffer.ColorKind);
  cube.setIndices(indices);

  return cube;
}
```

## The end

Please refer to the [BabylonJS Basic elements](https://github.com/BabylonJS/Babylon.js/wiki/02-Basic-elements) page to learn how to easily create some elements. I wanted to do my cube by myself, but it's as simple as:

```javascript
var box = BABYLON.Mesh.CreateBox("Box", 6.0, scene);
```

Are you lost ? Do you have a question or a comment ?
I'm sure I made a lot of mistakes, don't be mad.

Let's texture things and try more stuff in the [next experiment](https://ehret.me/en/webgl-experiment-part-5-texture-mapping/) !
