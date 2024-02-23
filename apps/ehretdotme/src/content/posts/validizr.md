---
date: '2012-03-15T00:00:00.000Z'
updatedAt: '2021-05-23T13:26:48.069Z'
title: validizr
description: A plugin for form validation.
tags: []
---
A plugin for form validation.

## intro

ANOTHERPROJECTENDINGWITHANEFFINGR.

## whaaaat
A jquery plugin for form validation.

Demo here : [v0.1](http://dev.federalbureauofinhumanity.org/validizr/v0.1/demo/) (broken link)

On github here : [https://github.com/SiegfriedEhret/validizr](https://github.com/SiegfriedEhret/validizr)

## how ?
Include jquery.
Include validizr.js.
Add some js code :

```javascript
$(function () {
  $('#myForm').validizr({
    submit:'#submitButton',
    parentContainer:'dd',
    notValidClass:'not-valid'
  });
});
```

## not working
Normal. You have to add stuff to your form elements :

* data-validate="notEmpty" : will check if your element has a value.
* data-validate="notEmpty isEmail" : will check if your element has a value, and if it's a valid email (basic regex).
* data-validate="notEmpty onlyNumbers" : will check if your element has a value, and if it's filled with numbers.

## options

* submit : the identifier for the submit button. Default is :submit. It will search under the form where validizr is called.
* parentContainer : the parent container for the input etc. It will be used to add a "not-valid" class.
* notValidClass : the "not-valid" class to add.

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
