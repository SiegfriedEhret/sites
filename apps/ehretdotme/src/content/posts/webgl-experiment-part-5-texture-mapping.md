---
date: "2013-10-06T00:00:00.000Z"
updatedAt: "2021-05-24T08:32:21.634Z"
title: WebGL experiment part 5
description: Texture mapping.
tags:
  - webgl
---

## Intro

In this experiment, we will create this:

![Texture mapping](/contentful/21vFkn0JjOhZv0cvjcohij/cabe2f37c81098da42c489f6320225bc/lesson06.jpg)
(image from [NeHe website](http://nehe.gamedev.net/tutorial/lessons_06__10/17010/))

We will learn how to use BabylonJS basic elements and how to move them.

The demo page is [here](https://dev.ehret.me/webgl-experiments/experiment05.html) and the code is [here](https://github.com/SiegfriedEhret/webgl-experiments).

### Function: drawStuff

We are using a classic scene initialization:

```javascript
function drawStuff(engine) {
  var scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(0, 0, 0);

  var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(50, 100, 0), scene);
  var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, new BABYLON.Vector3.Zero(), scene);
```

And a nice cube created easily with BabylonJS (see further for more details):

```javascript
var cube = BABYLON.Mesh.CreateBox("cube", 30, scene);
```

Then, we add a texture to our cube:

```javascript
var cubeMaterial = new BABYLON.StandardMaterial("texture1", scene);
cubeMaterial.diffuseTexture = new BABYLON.Texture("data/05/NeHe.bmp", scene);
cube.material = cubeMaterial;
```

And some fancy rotation:

```javascript
  rotate(cube);

  return scene;
}

```

## About BabylonJS elements

[BabylonJS](http://www.babylonjs.com/) allows your to easily create a few elements (from [here](https://github.com/BabylonJS/Babylon.js/wiki/02-Basic-elements)):

- Create a box

```javascript
var box = BABYLON.Mesh.CreateBox("Box", 6.0, scene);
```

Parameters are: name, size of the box, the scene to attach the mesh.

- Create a sphere

```javascript
var sphere = BABYLON.Mesh.CreateSphere("Sphere", 10.0, 3.0, scene);
```

Parameters are: name, number of segments (highly detailed or not), size, scene to attach the mesh. Beware to adapt the number of segments to the size of your mesh ;)

- Create a plane

```javascript
var plan = BABYLON.Mesh.CreatePlane("Plane", 50.0, scene);
```

Parameters are: name, size, and scene to attach the mesh.

- Create a cylinder

```javascript
var cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 6, scene, false);
```

Parameters are: name, height, diameter, tessellation (highly detailed or not), scene, updatable.

- Create a torus

```javascript
var torus = BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, scene, false);
```

Parameters are: name, diameter, thickness, tessellation (highly detailed or not), scene, updatable.

## Rotation function

Just a little function which takes an element and rotates it around y axis:

```javascript
function rotate(element) {
  var degree = 0;

  setInterval(function () {
    var value = (Math.PI * degree++) / 180;
    element.rotation = new BABYLON.Vector3(0, -value, 0);
    if (degree === 360) {
      degree = 0;
    }
  }, 10);
}
```

## About position, rotation, and scaling

All credits, as usual, to [BabylonJS](https://github.com/BabylonJS/Babylon.js/wiki/02-Basic-elements) [tutorials](https://github.com/BabylonJS/Babylon.js/wiki/03-Rotation-&-Scaling).

### Position

We actually used positioning since our [first](https://ehret.me/webgl-experiment-part-1-your-first-polygons/) [experiment](https://dev.ehret.me/webgl-experiments/experiment01.html).

The position for each axis can be setup individually like:

```javascript
box.position.x = 10;
box.position.y = 20;
box.position.z = 30;
```

Or using a babylon vector:

```javascript
box.position = new BABYLON.Vector3(10, 20, 30);
```

And you can create a relation between your forms to set relative positioning:

```javascript
//Positioning the box3 relative to the box1
box3.parent = box1;
box3.position.z = -10;
```

### Rotation

Same thing with rotation:

```javascript
box.rotation.x = Math.PI / 4;
box.rotation.y = Math.PI / 6;
box.rotation.z = Math.PI / 12;
```

Or

```javascript
box.rotation = new BABYLON.Vector3(Math.PI / 4, Math.PI / 6, Math.PI / 12);
```

### Scaling

You can scale your element along the 3 axis. Scaling value multiples the length of the object on the selected axis:

```javascript
box.scaling.x = 2;
box.scaling.y = 1.5;
box.scaling.z = 0.5;
```

## The end

Now, we can easily create forms, map stuff on them, and move them ! Yeah !

Let's dive (a little) into BabylonJS for the [next lesson](https://ehret.me/en/webgl-experiment-part-6-babylonjs-pyramid-builder/).
