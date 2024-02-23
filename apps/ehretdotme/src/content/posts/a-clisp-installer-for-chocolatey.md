---
date: '2013-08-07T00:00:00.000Z'
updatedAt: '2021-05-23T13:40:48.456Z'
title: A CLisp installer for Chocolatey
description: >-
  I made a little chocolatey package for you, to install clisp on your nice
  windows computer !
tags: []
---
Hey ! Long time no see !

I made a little chocolatey package for you, to install clisp on your nice windows computer ! You can find it :

* [http://chocolatey.org/packages/clisp](http://chocolatey.org/packages/clisp) (chocolatey website ! Yoohoo !)
* [https://github.com/SiegfriedEhret/chocolatey-clisp](https://github.com/SiegfriedEhret/chocolatey-clisp) (Github ! Party on !)

## intro

[Chocolatey](http://chocolatey.org/) is THE package manager for Windows. I made a package for [CLISP](http://www.clisp.org/).

## the files

* tools/chocolateyInstall.ps1 : the Windows Powershell installation script.
* tools/install.ps1 : found this in other packages, so I added it too.
* clisp.nuspec : the package description.
* clisp.2.49.nupkg : the package packed !

## how to install ?

Just install Chocolatey and run "cinst clisp".
You can also download the package (clisp.2.49.nupkg) somewhere, go in that folder and test locally using csint clisp -source %cd%).

## how ?
See the following files :

* [Chocolatey Wiki](https://github.com/chocolatey/chocolatey/wiki/CreatePackages)
* [An inspiring article](http://dev.hong.me/blog/2012/07/02/a-simple-tutorial-create-and-publish-chocolatey-packages/)

## licence ?

Don't know, don't care.
See the licence for Chocolatey and / or CLISP maybe...
