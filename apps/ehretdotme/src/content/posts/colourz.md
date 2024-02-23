---
date: "2012-03-16T00:00:00.000Z"
updatedAt: "2021-05-23T13:28:18.695Z"
title: colourz
description: "Colourz, a jquery plugin for color conversion."
tags: []
---

Colourz, a jquery plugin for color conversion.

## intro

colourz. A jQuery plugin for image conversion. I'm tired of looking in drawing software or in google to get RGB value from hex value etc.

Demo : [v0.1](http://dev.federalbureauofinhumanity.org/colourz/v0.1/demo) (broken link)

Github : [https://github.com/SiegfriedEhret/colourz](https://github.com/SiegfriedEhret/colourz)

## how ?

Include jquery.
Include colourz.js.
Add some js code :

```javascript
$(function () {
  $("#hex-to-rgb").colourz({
    from: "#hex",
    to: "#rgb",
    mode: "hex-to-rgb",
    opacity: 0.2,
    elementToPimp: "body",
    cssProperty: "background-color",
  });
});
```

## options

- from: the selector for the input element (to read)
- to: the selector for the output element (to write)
- mode: 'hex-to-rgb' or 'rgb-to-hex', to select the conversion mode
- opacity: opacity (if needed, like 0.2) (not used in rgb-to-hex mode)
- elementToPimp: the element to apply the converted colour (debug with 'body')
- cssProperty: the css property to apply the converted colour (like 'background-color')

## license

This plugin is licensed under the terms of the WTF Public License (see [http://en.wikipedia.org/wiki/WTFPL](http://en.wikipedia.org/wiki/WTFPL) and [http://sam.zoy.org/wtfpl/](http://sam.zoy.org/wtfpl/)) :

```text
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
Version 2, December 2004

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.
```
