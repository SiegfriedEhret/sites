---
date: "2022-05-27T00:00:00.000Z"
updatedAt: "2022-05-27T21:03:30.089Z"
title: "Interview: Eiji Kitamura"
description: >-
  I took advantage of a trip to Japan in 2016 to meet Eiji Kitamura, developer
  advocate at Google, working on the open web.
tags: []
---

📢 This article was first published on 10th of June 2016, on [Sfeir](https://www.sfeir.com/en/)'s blog, which has disappeared since.

I took advantage of a trip to Japan in 2016 to meet Eiji Kitamura, developer advocate at Google, working on the open web.

## Who are you ?

My name is Eiji and I am a developer advocate at Google, working on the open web. Currently I am focusing on identity and payment.

## How did you join Google ?

After a while of working as a musician composing music, playing guitars in like 2002, I found a job as a software developer as a part time at a startup. There were only 2 people working full time at the company but somehow it exited and things got gradually more exciting.

One of the products that company had was to be able to group messaging between multiple people in real time using mobile phones. It was quite innovative at that time given email based push messaging wasn't that common. Hinted by that with the idea of "Social Networks" which were at its early days back then, I came up with an idea of creating open social networks across the internet.

I wanted to realize that in some way and had that dream for a long time but never had a chance. The time has come when I joined a company that provides one of the biggest portal website in Japan. Inside the portal they have multiple services and websites. Though users have the same identities across all services, their profiles were different per usage. So what I tried there was to unify all the identities in a single profile and a friend list and let people reuse their connection in all services inside the portal site. It took me a while to realize that what I was doing was basically building a social platform. We launched the service in 2007.

At the time, Facebook was already running Facebook Connect, there was OpenID, OAuth was about to become a thing. Things were getting ready to be more open. After Facebook launched its app platform, Google came up with a similar idea called [Open Social](https://en.wikipedia.org/wiki/OpenSocial), so I just jumped onto it, starting to look into it and what we can do with it.

As I do my research, blogging, giving talks and organizing events, I was invited to become a "[Google Developer Expert](https://developers.google.com/experts/)" (which was initiated in Japan and was called "Google API Expert" back then). That's how I had a chance to engage with Google and eventually joined Google.

## How is your day at Google ? Do you code or do research ?

My position is a "Developer Advocate", which means my goal is to make developers successful, whatever they are working on. My focus is "the web" so I provide information about the latest, greatest web stuff to people and get feedback from them as well so that we can simultaneously improve things that we are developing inside Google.

Of course "the Web" is not owned by Google so I try to behave like so which I love. Basically we work with open communities to make it better. So yeah my job is to spread the word, collect feedback, and make the platform better.

## How do you manage to work with the W3C and the different actors of the web ?

It is quite open actually. The discussion boards used to be on a closed mailing list or were not open to everybody. Recently the discussion moved to Github so anyone can comment on the issues and you can provide your opinion to the Github repository.

Things that are happening for Chrome are also mostly open. Google is well known for being confidential, but for Chrome, we do not have many secrets.

My job is not necessarily talking about specifications or about how it should be, and proposing any features and so on but since the discussion is happening on Github so I can just pick in that and what people are discussing about, and keep people up to date about what is happening.

Creating demos, samples and libraries are also an important job. I created some sample code for the Credential Management API, and also a library for the Payment Request API to become compatible with [Apple Pay](https://www.apple.com/apple-pay/). Good news is that Safari officially started implementing the Payment Request API.

I write code, of course! Although I spend a lot of time talking to people and writing documents, speaking about changes...however, I still consider myself as an engineer, and I hope that I could code more!

## I understand how you feel. When you have some experience, you can not have a real career if you do not become a manager and stop coding.

Yeah it is pretty common in Japan as well. Some people say that 35 years old is the age where you stop coding and become a manager. But it is becoming a legend and some people do not follow the stats.

The good thing about working at Google is that there are a lot of older people that are engineers as well. I see people older than 60 years old still working here and coding.

## You mentioned the Credential Management API, can you tell me more about it?

It is an API that allows you to handle credential information on behalf of the user.

Browsers have this feature that automatically detects which field in a form is an id and which is a password and it will automatically offers you to store them in the password manager. The credential management allows that to be handled manually so that the developer can explicitly declare which one is the id and password and use that to store them to the password manager.

Also, it allows you to handle federation, which is like you can login to a website using a third party identity (Google, Facebook, Microsoft, Yahoo, Github and so on). There are a lot of cases where you have multiple choices for federations but you forget which one you use for this website to login. You can also remember that.

It also provides a consistent native UI for a user to choose an account to sign in.

### On which platforms and browsers does it work ?

It is currently implemented on Chrome, Firefox is interested in it too.

Safari also expressed an interest in the feature, but there is an ongoing discussion about the specification.

### And about IE/Edge ?

I am not sure about Edge, but there is a little story here.

There is another feature called [Web Authentication](https://www.w3.org/TR/webauthn/). It is brought from a standard called FIDO (Fast IDentity Online), a specification that allows various authentication methods using devices (biometrics...), so you can use it as a second factor or as a primary way (fingerprint, facial detection, security key...) to sign in. It allows various ways to prove yourself. The good news is that Microsoft has already implemented it to Edge.

A recent change is to merge the Web Authentication API with the Credential Management API. It's handled with `navigator.credentials.get`, `navigator.credentials.store` etc. Having said that, I'm assuming that there is a good chance that Edge will implement the Credential Management API as well.

We are also working on a thing called the Sign-up API which is in the early stages so I can not say too much about it, but my teammates and I gave a talk at Google I/O about this topic: [https://www.youtube.com/watch?v=DBBFK7bvEQo](https://www.youtube.com/watch?v=DBBFK7bvEQo)

Learn more about the Credential Management API:

- [https://w3c.github.io/webappsec-credential-management/](https://w3c.github.io/webappsec-credential-management/)
- [https://developers.google.com/web/fundamentals/security/credential-management/](https://developers.google.com/web/fundamentals/security/credential-management/)
- [https://credential-management-sample.appspot.com/](https://credential-management-sample.appspot.com/)

Also, we've released a JavaScript library that provides one-tap sign-up and auto sign-in which is called "[one-tap sign-up and auto sign-in](https://developers.google.com/identity/one-tap/web/)". This wraps the Credential Management API and uses Google federation mainly, but enables one tap sign up.

## Let's talk about the Payment Request API.

This is another exciting feature. Making payments on the web used to be... You know, it is a big pain. At least on mobile. On a desktop, it is easier because of the physical keyboard. On mobile, typing on a small keyboard is difficult and forms are hard to handle.

The Payment Request has 3 benefits:

1. A consistent native UI so you are never lost.
2. A structure for information. For example, a form address can be very flexible so different websites have different form structures so it is difficult for the browser to have structured data that represents your address. It will be easier for merchants too to understand data. It also handles credit card information. The good news is that browsers already have a feature to auto fill those address and credit card information. You can use that in the Payment Request API as well. If you have this information already stored in the browser you can just tap to determine which address you want to ship to or you can tap to choose which payment method you want to use.
3. It provides various options for the payment method. I said that you can bring autofill information from the browser storage, as for credit card information. But in that case, the credit card information will be passed to the website in clear text, which is a challenge for the merchant to handle. By using the Payment Request API, it will allow payment apps to provide payment information. So users can choose various payment methods including credit cards in a more secure manner.

### Great, and where does it work?

It is already implemented in Chrome since 53 on Android and in Chrome 61 on desktop. iOS Chrome is also supported.

The good news is that Microsoft Edge and Samsung Internet Browser (based on Chrome) already support it. Firefox is working on it.

The most important thing is that Safari started working on it. They provide [Apple Pay JS](https://developer.apple.com/documentation/applepayjs) which is their proprietary interface to use Apple Pay. While the API design is quite similar to the Payment Request API, they somehow did not implement it. Good news is that they are now implementing it, so I am really happy!

Learn more about the Payment Request API

- [https://www.w3.org/TR/payment-request/](https://www.w3.org/TR/payment-request/)
- [https://developers.google.com/web/fundamentals/payments/](https://developers.google.com/web/fundamentals/payments/)
- [https://medium.com/dev-channel/how-payment-methods-work-in-the-payment-request-api-54b8f2ee03c5](https://medium.com/dev-channel/how-payment-methods-work-in-the-payment-request-api-54b8f2ee03c5)
- [https://polykart.store/](https://polykart.store/)

## How often do you meet other teammates?

Most of my teammates - people I work with - are outside of Japan and scattered across the world. West coast, east coast and Europe. Meetings tend to be in the morning or in the evening which is a tough part of my work.

## What is the next API you will be working on ?

Payment and Identity are areas that need expertise so I think I will stick with them for some time. However, I am also a big fan of web apps in general so I would love to work on "Progressive Web Apps".

There are more features that excite me, and I would be happy to work on, but I am not sure when I will make a move.

## You told me that you will keep working on the APIs we talked about for some time, but what are you waiting for in the Web Platform for the next years?

One short term expectation is to have a solidder Progressive Web Apps definition. We are still chasing what PWAs are right now. We have made very good progress, so in the coming 1 or 2 years we will have a more sophisticated feature set that will allow Progressive Web Apps to become the first class apps. I think it could happen.

In the long term, I am more excited about not technical things but more philosophical things about the Web Platform. The Web is a very special place that nobody owns and anyone can join to build new things, which is, I think, in human history, never happened in the past. A random crowd, getting together, to build something new, and evolves without any money injection from large institutions. The Web Platform itself is like a creature of ecosystem and it is a very interesting thing and I am seeing that it keeps on evolving and I am really excited about what will come next. Maybe we will come up with totally different concepts or technical sets to build things. Having people naturally working on it without any limits, like open source, is very unique. What is going to happen in the long term, like 10 years later? We can not predict.

## Last thing: do you have a favorite quote?

Well... I have one but it's in japanese and I made it up:

> 仕組みを作る仕組みを、作る仕組みを作る。

It is like Inception but if I would translate it into English it would be:

> Create a mechanism that makes a mechanism, that makes a mechanism.

Something like that. This is the concept I have been thinking about for about a year.

As I said, no one owns the web. Everyone involved is building the web. Web is built upon open specifications. Anyone can contribute to the specifications. There are bugs. They need new features. Anyone can just contribute. The web ecosystem allows people to make things better. That's how the existing web is built upon. And we are moving forward.

As an open web citizen, I provide talks, documents, demos, samples, codelabs, videos, feedback, questions to contribute to the ecosystem. I also help developers build communities, study groups or online activities. If people find bugs, requests for new features, contribute translations, learn together, tell other people new ideas, I guide them finding a path to achieve that. My job in a sense is to build a mechanism to make the web a better place.

## Great! Thank you very much!

Likewise ! Thanks !

## Links

Find Eiji on :

- Twitter: [@agektmr](https://twitter.com/agektmr)
- Mastodon: [@agektmr@toot.cafe](https://toot.cafe/@agektmr)
- Medium: [https://medium.com/@agektmr](https://medium.com/@agektmr)

![View from the Google office in Tokyo](/contentful/LzbRHlvTtTkmYkIgclpJy/47e9f852640ebb0575ef574a1ae4939a/IMG_2388.jpg)
