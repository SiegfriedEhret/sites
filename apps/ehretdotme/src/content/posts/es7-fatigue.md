---
date: '2016-03-01T00:00:00.000Z'
updatedAt: '2021-05-23T19:51:49.673Z'
title: ES7 fatigue
description: Betting on unfinished specs is dangerous.
tags: []
---
(I was about to name this thing *ES7 considered harmful*, but first I have to write a *«considered harmful» considered harmful* post ^^)

<blockquote class="twitter-tweet" data-lang="fr"><p lang="en" dir="ltr">You, working with async/await or whatever ES7 unfinished specs, hoping it&#39;ll work in production. <a href="https://t.co/vy5cO96GoI">pic.twitter.com/vy5cO96GoI</a></p>&mdash; Siegfried Ehret ［Ξ］ (@SiegfriedEhret) <a href="https://twitter.com/SiegfriedEhret/status/704407160474771456">29 février 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Seriously.

I see a lot of project relying on [async/await](https://github.com/tc39/ecmascript-asyncawait) even if it is [still a draft](https://tc39.github.io/ecmascript-asyncawait/) !

The [TC39's github page](https://github.com/tc39/ecmascript-asyncawait) shows that `async`/`await` also have the following syntax proposal:

- `function^`/`await`
- `function!`/`yield`
- `function!`/`await`
- `function^`/`yield`

I just can't wait for the syntax to be changed.

People will either have to:

- update the code to fit the final syntax and wait for a babel thingie to compile the good to some good old ES5.
- keep their code and continue to use a unsupported syntax using a soon-to-be deprecated babel thing.
- (╯°□°）╯︵ ┻━┻

Another example: [Object.observe](https://esdiscuss.org/topic/an-update-on-object-observe) was removed from ES7 in november 2015.

In the end, by widely using unreleased features or specs you live in another world that can crumble at any time. And people are pushing a spec in a direction that may not be the optimal one.

> Betting on unfinished specs is dangerous.<br>
&mdash; Siegfried Ehret

About `async` / `await`, I would like to propose the following syntax: `stophammertime` / `heyholetsgo`.
