---
date: "2016-09-06T00:00:00.000Z"
updatedAt: "2021-05-23T20:02:50.406Z"
title: Webpack considered harmful
description: I hope you enjoy this clickbait title.
tags: []
---

I hope you enjoyed this clickbait title.

Edit: 2016-09-08

- add reference to Webpack: The Missing Tutorial ™ in the _My problem with webpack_

## What is webpack

[webpack](https://webpack.github.io/) is a module bundler. Bundling files is its goal.

![what is webpack](/contentful/1zYfudDplLiPRz2awDUcEA/5bfbb74a07ef9ba3db323b0e6a377e0a/what-is-webpack.png)

In most cases you will be able to replace your build toolchain (with _legacy_ things like [grunt](http://gruntjs.com/) or [gulp](http://gulpjs.com/)) with webpack, but keep in mind that their goals are different.

## My story with webpack

As far as I remember, I think that when I first checked the webpack website there was almost nothing that can be considered documentation. It is a well known problem for the webpack team, and they have already improved it a lot.

I tried to play with it three times, and I lost twice ^^.

Trying to understand existing code to adapt it on a existing project is not easy.

I was working on an Angular 1.5 project written in ES5, that had been generated using some Yeoman generator. We had a shitload of tooling files for gulp and we barely used all that we had.

It was a good time to start something fresh !

We wanted to move to ES6 and webpack.

I used these resources a lot at first:

- [Using Angular 1.x With ES6 and Webpack](http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/)
- [Proper unit testing of Angular JS applications with ES6 modules](https://blog.ngconsultant.io/proper-testing-of-angular-js-applications-with-es6-modules-8cf31113873f)

Then, I rewrote the whole thing from scratch. You will not find my config because you should learn how to configure the damn thing.

I now have some nice configurations for bundling and testing and I am very happy with the result, but...

## My problem with webpack

Let's get back to the tutorial.

As of today, here is what you should do:

- Create an `entry.js` file and write some code
- Create a basic HTML file with a `<script type="text/javascript" src="bundle.js" charset="utf-8"></script>`.
- Run `webpack ./entry.js bundle.js`
- Open the page and voilà ! It works.

The tutorial goes on with requiring another file from the first one, and (that is where I am starting to feel weird): add a css loader by updating the `entry.js` file to:

```javascript
require("!style!css!./style.css");
document.write(require("./content.js"));
```

Wow !

So now, my entry point `entry.js` that should be my application contains some weird require code and a require to a css file.

In short: I have to code my entry point in webpack.

This is not good.

Tools are what they are: tools. They will evolve and be replaced some day, and they should not guide or interfere with the way your are organizing your files or code.

[Webpack: The Missing Tutorial ™](https://github.com/shekhargulati/52-technologies-in-2016/blob/master/36-webpack/README.md) also code the profile.js in webpack by including the css in the `profile.js` file.

## The solution

It is very simple: do not consider `entry.js` as your main application file. It is a webpack file that lives next to webpack.config.js

`entry.js` have to require your `app.js` or `main.js` (which is the real entry point for your application) and all the not JS things that will be handled by webpack.

## Conclusion

Repeat after me:

- Webpack is a tool.
- Webpack is a module bundler.
- Keep your tools and your app independant.

![One doesn't simply do webpack](/contentful/1QXYIhnZE1gCGQabEVs04w/ad57f8ee795594de7e1ff9ac866314bc/67462178.jpg)
