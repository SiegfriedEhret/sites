---
date: "2012-01-12T00:00:00.000Z"
updatedAt: "2021-05-23T13:23:07.601Z"
title: imgzr
description: A jQuery responsive image plugin
tags: []
---

imgzr, a jQuery responsive image plugin

- Update: february 24, 2012 : changing the img source only when needed.
- Update: january 17, 2012 : now with REAL screen orientation detection and browser resize.
- Update: january 13, 2012 : now with screen orientation detection.

## how to use

Include :

- jquery.
- Include jquery [smartresize](https://github.com/louisremi/jquery-smartresize/)
- Include the imgzr.js file.

And call:

```javascript
$(function () {
  $("body").imgzr();
});
```

It will look into the given element (here "body") for image and change the src if needed. Check the [demo (broken link)](http://dev.federalbureauofinhumanity.org/imgzr/) (last version is v0.3.1)It has been tested under :

- Chrome 16
- Firefox 9
- IE9
- Ipad
- Iphone

There's a weird thing happening on my Android 2.3.5 (strange behaviour about screen orientation), but I hope to make it work soon !

## configuration

Prepare your images ! Your image should have the small image in src to prevent bandwith overcharging. Add data- with the well sized image. Example :

- src="./img/small.jpg" alt=""
- data-small="./img/small.jpg"
- data-medium="./img/medium.jpg"
- data-large="./img/large.jpg"

The default configuration is the following :

```js
resolutions:{
  small:{min:0, max:480},
  medium:{min:480, max:768},
  large:{min:768, max:10000}
}
```

You can change this passing a new configuration to the function call :

```js
$(function () {
  var config = {
    resolutions: {
      small: { min: 0, max: 1000 },
      medium: { min: 1000, max: 10000 },
      large: { min: 10000, max: 100000 },
    },
  };
  $("body").imgzr(config);
});
```

## license

This script is licensed under the terms of the WTF Public License (see here and here) :

```plain
                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                        Version 2, December 2004

     Copyright (C) 2004 Sam Hocevar

     Everyone is permitted to copy and distribute verbatim or modified
     copies of this license document, and changing it is allowed as long
     as the name is changed.

                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
       TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

      0. You just DO WHAT THE FUCK YOU WANT TO.
```
