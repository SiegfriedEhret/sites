---
date: '2022-05-26T00:00:00.000Z'
updatedAt: '2022-05-26T13:17:38.314Z'
title: 'Interview: Matt Holt'
description: >-
  I interviewed Matt Holt at dotGo 2016. We talked about open source, Caddy, Go,
  Let’s Encrypt and the life of a programmer who is still studying!
tags:
  - interview
---
📢 This article was first published on 2nd of November 2016, on [Sfeir](https://www.sfeir.com/en/)'s blog, which has disappeared since.

I interviewed Matt Holt at dotGo 2016. We talked about open source, Caddy, Go, Let’s Encrypt and the life of a programmer who is still studying!

## Can you tell us more about you and Caddy?

Sure! I started working on [Caddy](https://caddyserver.com/) after I finished my last job, as an undergraduate in college, and I was scratching my own itch. I wanted a web server that I could just use without having to think about it, for a lot of tests and development projects. I published it and people started using it, contributing to it… I was really impressed because the contributions they made were turning Caddy into something really awesome. So I realized that “wow, this is actually kind of powerful”. Now I am trying to catch up, make it support plugins and automation and other things people want.

What about Sourcegraph? Do you work there?

No, I almost did. I decided to go to graduate school. Sourcegraph is an amazing company though.

## What about [checkup](https://sourcegraph.github.io/checkup/)?

They did hire me to work on that. I put that together and when I have time I try to maintain it. It is a really fun project too.

## How do you manage your open source and personal / graduation life?

Hmm… with great difficulty! Graduate school is busy and it is fun, with a lot of research. Thankfully, because of sponsorships for the Caddy project, I am able to work on that during grad school, instead of taking a job outside of school. I try to constrain my graduate studies to the day time and then try to work on Caddy in the evening.

## Do you have time to sleep?

Yes, sleep is important!

## On your Twitter description, you are saying that you are an “open source advocate”. Can you tell us more about this?

I advocate for open source because I think that the sense of community is good. Not everything has to be free, I am not against commercial enterprise. I think there is real value in the principles that you learn and apply when you do open source. You have to really learn how to work together, the collaboration is really valuable. I think that sharing knowledge that way is going help the world in many ways.

## How did you get into the Go programming language?

The last company I worked at was looking into using it. They were going to switch from .NET. They were using that and some PHP, that I threw in there. So they had me and another guy look at some Go stuff and we liked it and they moved everything to Go. I found it awesome and I think I’m not going to touch PHP again!

## What is your best advice for someone who is starting to use Go?

I would say, if you are brand new to it:

  * Read the documentation on the Go website
  * Play with the [Go Tour](https://tour.golang.org/)
  * Read [Effective Go](https://golang.org/doc/effective_go.html)
  * Read the language spec (it’s not actually that bad for a language spec!)

Try hacking out little programs in Go. There are a lot of great blog posts and great projects to contribute to. Find issues on projects that you like, maybe some projects will tag things as “easy” or “good for beginners”, jump into those, get involved in the [Go Slack Community](https://blog.gopheracademy.com/gophers-slack-community/), they have a channel for people who are new to Go.

## What is your workflow, what are the tools you are using to program in Go?

I use [Sublime](https://www.sublimetext.com/) on a Mac, with all the Go integration, like goimports and stuff like that. I use Sourcetree for my version control and I frankly hate Git on the command line and I don’t get a lot done that way, but I get how it works.

I don’t use an IDE per se.

For tests, I use the Go standard library, although I use the [GoConvey UI](https://github.com/smartystreets/goconvey). It has a web UI to show test results in real time. I don’t use its DSL, but the web UI makes it really nice when you do really hardcore testing development.

Honestly, most of my time is probably spent thinking about the problem and speaking out loud about it, and that looks strange to my roommates who see me doing that!

## Are your roommates also in programming?

No, they have no idea about what I’m doing! It just looks funny to them. But you got to think about your problems, you got to think them through and figure out the solution.

## With [Let’s Encrypt](https://letsencrypt.org/), which is really easy to setup with Caddy, we are in a new way of bringing security to everyone. Is it now a must have for everybody?

Yeah, for most people. [Let’s Encrypt](https://letsencrypt.org/) is great because we can now do things that were not possible before. This tool overcome the business, financial and technical hurdles for us. Thank goodness.

I think everyone should take advantage of it, because if we are writing software that serves users, we have the responsibility to protect their communications, their data and doing that easily is really important. And it also makes your Go programs more reliable because you get that integrity check with their guarantee and security.

Use Let’s Encrypt or any ACME-enabled Certificate Authority!

## The ACME enabled CA can be anything?

ACME can be any certificate authority. I mean, you can download [boulder](https://github.com/letsencrypt/boulder), which is Let’s Encrypt ACME software, run it locally and use it. So you can run your own certificate authority. No one will trust it, but you can do that. ACME is agnostic to any certificate authority and I know at least 2 that will probably use ACME.

## Thank you very much for your time!

It was my pleasure!
