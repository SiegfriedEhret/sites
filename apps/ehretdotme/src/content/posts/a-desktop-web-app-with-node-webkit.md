---
date: "2013-12-27T00:00:00.000Z"
updatedAt: "2021-05-24T12:56:14.199Z"
title: A desktop web-app with node-webkit
description: "Let's play with node-webkit, to make a desktop web-app (part 1)."
tags: []
---

## Why ?

A few days ago, Intel released a cross platform development kit (XDK) for HTML5 developement.

During the installation, I realised it was made using [node-webkit](https://github.com/rogerwang/node-webkit).

> node-webkit is an app runtime based on Chromium and node.js. You can write native apps in HTML and Javascript with node-webkit. It also lets you call Node.js modules directly from the DOM and enables a new way of writing native applications with all Web technologies. &mdash; [from node-webkit github page](https://github.com/rogerwang/node-webkit)

Let's give node-webkit a try !

Check/clone/fork/update the [code repository](https://github.com/SiegfriedEhret/node-webkit-app).

Update: created [release v0.1.0](https://github.com/SiegfriedEhret/node-webkit-app/releases/tag/v0.1.0) for windows & linux.

## Workflow

You need [nodejs](http://nodejs.org/) and
[gruntjs](http://gruntjs.com/).

I use the following technologies for my demo app:

- [Jade](http://jade-lang.com/) for templates
- [Stylus](http://learnboost.github.io/stylus/) for styles

Run `npm install` to retrieve npm dependencies.

Build with `grunt`.

Grunt executes the following tasks:

- [copy](https://github.com/gruntjs/grunt-contrib-copy) elements from `app/assets` to `dist`
- [stylus](https://github.com/gruntjs/grunt-contrib-stylus) to compile the css from `app/css/` to `dist/my-app.css`
- [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) to minify the css from `dist/my-app.css` to `dist/my-app.min.css`
- [jade](https://github.com/gruntjs/grunt-contrib-jade) to compile the templates from `app/index.jade` to `dist/index.html`
- [jshint](https://github.com/gruntjs/grunt-contrib-jshint) to validate javascript code
- [concat](https://github.com/gruntjs/grunt-contrib-concat) to join javascript files from `app/js` to `dist/my-app.js`
- [uglisfy](https://github.com/gruntjs/grunt-contrib-uglify) to minify the javascript from `dist/my-app.js` to `dist/my-app.min.js`
- [node-webkit-builder](https://github.com/mllrsohn/grunt-node-webkit-builder) to create our application package.

[node-webkit-builder](https://github.com/mllrsohn/grunt-node-webkit-builder) will download a node-webkit package for the defined target platforms (see Gruntfile.js for details).

The final app will be built as an executable in the folder `dist-pkg/releases/my-app/<platform-name>/my-app/` .

## The app

A node-webkit app is basically a zip file containing the web app.

It is described using a `package.json` file (like everything based on nodeJS).

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "main": "index.html",
  "window": {
    "toolbar": false,
    "width": 800,
    "height": 600
  }
}
```

The next example is an extract from Intel XDK `package.json` file, which shows more options:

```json
{
  "name": "XDK",
  "main": "public/index-node-webkit.html",
  "window": {
    "width": 1280,
    "height": 768,
    "min_width": 960,
    "min_height": 500,
    "icon": "public/images/xdk_icon.png",
    "toolbar": false
  },
  "engine": "node >= 0.10.0",
  "dependencies": {
    "underscore": "~1.4.4",
    "backbone": "~1.0.0",
    "less": "https://github.com/cperkinsintel/less.js/tarball/master"
  },
  "devDependencies": {
    "jsdoc": "3.2.1"
  },
  "scripts": {
    "prestart": "node scripts/make-public.js --mode=cloud",
    "start": "node aws-launcher",
    "test": "node scripts/run-tests.js",
    "jshint": "node scripts/run-jshint.js",
    "start-nw": "node scripts/make-public.js && nw .",
    "start-node-webkit": "node scripts/make-public.js && node-webkit ."
  },
  "chromium-args": "--disable-threaded-animation --enable-threaded-compositing",
  "node-remote": "localhost"
}
```

You can specify a minimum size for the window, its icon, the node version and the project dependencies, scripts to run on events (prestart...), options for the chromium engine and the hostname for serving remote files to node...

To run the app, just run node-webkit with the path to your app as an argument `nw my-app.nw`.

The `node-webkit-builder` grunt task creates a package (a nice 52mb application \o/) which is directly executable.

## Demo time !

![node-webkit demo app](/contentful/4NZxelKwaboTHhePuNB6fn/22a1ed15042bc6a26a78b824a80bb9d1/node_webkit_01.jpg)

[Download the release file if you don't want to build it yourself](https://github.com/SiegfriedEhret/node-webkit-app/releases/tag/v0.1.0)

The demo app shows some stuff:

- A "pages" demo, to show that navigation between pages works
- A "node" demo, using a node module (fs) to list the content of the current directory.
- More to come !

## Conclusion

This is a pretty cool way of creating desktop web apps.

Packaged apps are quite big, but can be efficiently compressed (my 52mb app can be packed in a 22mb zip file).

Next steps:

- play with node-webkit's `package.json` options
- addind a database
- toolbar
