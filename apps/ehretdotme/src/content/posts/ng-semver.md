---
date: "2016-12-15T00:00:00.000Z"
updatedAt: "2021-05-23T20:54:14.950Z"
title: ng-semver
description: "A story about angular, semver, npm, and fails."
tags:
  - angular
  - javascript
---

## A small story

I work on a pretty cool project (Node.js + Angular.js 1.5.8). I even use Webpack !

I use npm to manage my dependencies, for the back and for the front.

I use Jenkins, which is pretty cool, with the following steps:

- get the app (back + front).
- install the deps.
- run the unit tests.
- launch the release script (merging develop in master, create the shrinkwrap, create a tag).
- launch the creation of a docker image, ready to be used.

This week, our latest image was used and the app was not working at all.

MRW I launch the app...

![cry](/contentful/4OMh606Nh4UnwMBFshSchJ/fce512bc338d1322d312eaefe05b2ac4/cry.gif)

## What happened

[Angular.js 1.6.0](https://github.com/angular/angular.js/blob/master/CHANGELOG.md#160-rainbow-tsunami-2016-12-08) was released. And it contains breaking changes.

## But alors... Angular follows semver, right ?

Yes and no.

Angular.js (v1) does not follow semver, [Angular (v2+) does](http://angularjs.blogspot.fr/2016/10/versioning-and-releasing-angular.html).

## But alors... Semver ?

Semver may or may not be perfect, it is what is used on [npm](https://npmjs.com/).

Here is what [semver](http://semver.org/) defines versioning:

> Given a version number MAJOR.MINOR.PATCH, increment the:<br>
> MAJOR version when you make incompatible API changes,<br>
> MINOR version when you add functionality in a backwards-compatible manner, and<br>
> PATCH version when you make backwards-compatible bug fixes.

That is basically it.

## But alors... Npm ?

The classic thing with npm is a [`package.json` file](https://docs.npmjs.com/getting-started/using-a-package.json).

> Requirements<br>
> <br>
> As a bare minimum, a package.json must have:<br>
> <br>
> "name"<br>
> all lowercase<br>
> one word, no spaces<br>
> dashes and underscores allowed<br>
> <br>
> "version"<br>
> in the form of x.x.x<br>
> follows [semver spec](https://docs.npmjs.com/getting-started/semantic-versioning)<br>

Let's check some other stuff from [npm package.json docs](https://docs.npmjs.com/files/package.json)

> version<br>
> <br>
> The most important things in your package.json are the name and version fields. Those are actually required, and your package won't install without them. The name and version together form an identifier that is assumed to be completely unique. Changes to the package should come along with changes to the version.<br>
> <br>
> Version must be parseable by node-semver, which is bundled with npm as a dependency. (npm install semver to use it yourself.)<br>
> <br>
> More on version numbers and ranges at semver.<br>

So, if you put your libs on npm, it is recommended to follow semver.

When you install things from npm and check your package.json, the version are prefixed:

- Patch releases: 1.0 or 1.0.x or ~1.0.4
- Minor releases: 1 or 1.x or ^1.0.4
- Major releases: \* or x

The prefix can be [configured](https://docs.npmjs.com/misc/config#save-prefix), and the default is `^`.

This mean that if you do not follow semver, running `npm install` will get you the last **minor** version.

That is the case of Angular.js v1: we were expecting "^1.5.8" and got a brand new breaking 1.6.0.

## Conclusion

- Follow the rules of your hosting service (npm uses semver intensively !)
- Don't trust your libs (should I talk again about Angular versioning ?)
- Pay attention to changelogs (they mean a lot)
- Read [this article "SemVer Shouldn’t Mean More Breaking Changes"](https://medium.com/@tomdale/semver-shouldnt-mean-more-breaking-changes-abfb7990dbab)

Last point: it is freaking crazy how much energy and time the Angular marketing/dev team put into a shitload of fails:

- The announcement of Angular 2
- 2 freaking years to release something.
- Announcing they follow semver
- Not really following semver, skipping v3, announcing v4, with **scheduled major versions**. Wow.

To finish this article/rant, a fun little piece of advice to the Angular team:

> About versioning, @angularjs should use:<br>

- odd major numbers for Angular.js<br>
- even major numbers for Angular<br>
