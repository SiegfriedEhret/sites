---
date: "2016-11-27T00:00:00.000Z"
updatedAt: "2021-05-23T20:09:00.955Z"
title: Hype considered harmful
description: "Yep, another «XX considered harmful» clickbait title."
tags: []
---

Yep, another «XX considered harmful» clickbait title.

So. [This thing](https://twitter.com/rauchg/status/802328362341384192) happened:

<blockquote class="twitter-tweet" data-lang="fr"><p lang="en" dir="ltr">A big advantage of CSS in JS(X): One language (JS), not three (JS, HTML, CSS).<br>One linter. One code style. One type system. One test system.</p>&mdash; Guillermo Rauch (@rauchg) <a href="https://twitter.com/rauchg/status/802328362341384192">26 novembre 2016</a></blockquote>

[I quoted the things](https://twitter.com/SiegfriedEhret/status/802462317539573761) saying:

> MAKE FRONTEND GREAT AGAIN #WebmasterGate #CSSFTW

Then, [Freddy replied](https://twitter.com/HarrisFreddy/status/802477542087258112):

> Maybe you should stop complaining about the hype, the js fatigue and at the same time the proposed solutions, no ?

TL;DR No.

## About hype and JavaScript fatigue

It is exciting and exhausting at the same time.

Exciting because the JavaScript world is moving really fast, and is experimenting a lot.
Things are not as stable as in the Java world and it is a good time to try and push things further.

Exhausting because you will always spend too much time on the tooling and trying to impose the latest framework or library.
Since it is moving so fast, it is not the time to do everything one way thinking it is the only way.
You have to think before choosing a stack for your team, your project, and think even more before pushing your shit into production.

A communication from a not so far future:

```
- Full bloated frameworks sucks !
- Yep, we're so much better with half a dozen libraries
- Sure, but I'm not always sure how to connect things up.
- Don't worry, use this boilerplate.
(later)
- Full bloated boilerplates sucks !
```

Le sigh...

The hype is dangerous, use it with care. I will never stop saying that.

I wrote an article before ES7 was out about the [ES7 fatigue](https://ehret.me/es7-fatigue.html). Guess what: async/await are still not finished. U mad ?

Experiments are sweet, pushing to production unspecified code and relying on tools to convert to a specific version of JavaScript is.

## About the solutions

JavaScript for everything ? RIGHT.

- Every language has a purpose. Replacing all the things with JavaScript is and will not be the answer (because the answer is 42).
- If you write everything in JavaScript, you will have to compile things, and this by definition bring some overload and uncontrolled things to your code.
- One linter: have you tried playing with JSX and jshint ? Not everybody uses ESLint, and that is a good thing.
- One type system: yeah, the type system of JavaScript is really something you can rely on...

Also, CSS has a [type system for values](https://www.w3.org/TR/CSS22/syndata.html#values):

Then, how do you manage the learning curve ?

I am sure you encountered [this article](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f), newbies will surely feel the same.
When you impose the stack Guillermo suggests, you close the door to a lot of people because there is too much to handle.

With all these things you have to learn, you will end up mastering nothing.

## Conclusion

- Am I complaining about the hype ? **Yes**, because I think it will hurt many teams and projects.
- Am I feeling the JS fatigue ? **Yes**, I am fucking close to rage quit the JavaScript world where we can't say what we think.
- Am I complaining about the solutions ? **Yes**, because I think they are not viable solutions on the long term.

So **no**, I will not stop. Sorry.

I'll add some more:

- Should I stay with a legacy stack forever ? **No**.
- Should I stop learning new things ? **No**.
- Should I stop sharing them ? **No**.
- Should I follow all the things I read on Medium ? **No**.
- Should I think before choosing a stack for my project ? **Yes**.
