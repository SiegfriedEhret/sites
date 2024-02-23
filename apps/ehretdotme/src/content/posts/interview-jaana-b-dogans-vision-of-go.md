---
title: "Interview: Jaana B. Dogan’s vision of Go"
description: "The conference dotGo\_was the perfect occasion to interview Jaana B. Dogan, Software Engineer at Google. Siegfried Ehret seized the opportunity to learn more about her role in developing tools like\_pprof\_and..."
date: 2024-02-23T08:02:42.437Z
updatedAt: 2024-02-23T08:02:42.437Z
image: /assets/JAANA-GOLANG-520x245.jpg
tags:
  - interview
---

📢 This article was first published on 23rd of november 2017, on [Sfeir](https://www.sfeir.com/en/)'s blog, which has disappeared since.

You can read more about JBD's talk on the [sourcegraph article](https://about.sourcegraph.com/go/gos-work-stealing-scheduler/).

## How was your day ?

Good and very busy ! In the morning I was trying to get prepared, I was very anxious and my slides were not ready. I had tow versions of the talk, one was 10 minutes and the other one was 30 minutes and there was no way that I was going to end up with something that is going to last 18 minutes so it was a little frustrating.

## Who are you ?

I am JDB, I am a software engineer at Google. I currently work on our instrumentation framework. Internally, it is the central framework where we do stat collection, tracing and so one. It is this common context propagation layer also for all languages.

## What is your typical day ?

So I am kind of like leading the project and it is a good mix of negociating with people, writing code and experimenting a little bit... Doing design docs, reviews... It is a lot of different things. I enjoy it so much because I have freedom and flexibility to do things. Some of these things are coming in cycles you know. It totally depends right.

## Where are we today in the tooling ?

In go 1.10 there will be a new web UI coming to [pprof](https://golang.org/pkg/net/http/pprof/), so you will be able to see pprof on http when you set the `-http` flag and it will basically work like the pprof tool but in a web page. We have the flame graphs, which is contributed by Netflix which is awesome ! Lots of people use flame graphs as their entry point for profiling, and it will be such a good contribution because we will provide this out of the box and people will know about their dependencies and run it so easily without extra stuff. It lowers the entry barrier.

<blockquote class="twitter-tweet" data-lang="fr"><p lang="en" dir="ltr">Wrote about the new pprof UI, all these will likely to be in <a href="https://twitter.com/hashtag/golang?src=hash&amp;ref_src=twsrc%5Etfw">#golang</a> 1.10 but you can try them right now. <a href="https://t.co/uE3QXDG2xC">https://t.co/uE3QXDG2xC</a> <a href="https://t.co/LqqFu7aTnc">pic.twitter.com/LqqFu7aTnc</a></p>&mdash; JBD (@rakyll) <a href="https://twitter.com/rakyll/status/929504504352878592?ref_src=twsrc%5Etfw">12 novembre 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## About Go, what is your favorite feature ?

I think all the concurrency features, even though sometimes the internals are confusing. There are tons of optimizations that I learned and you know, when I was learning more about the scheduler, there are tons of hooks that optimize things because the scheduler knows a lot about what is currently running, and the concurrency, restrictions and so on. So most of the concurrency features are the reasons why I actually ended up writing go code in the beginning.

## What are you waiting for about Go 2 ?

Oh yes ! Error handling, we need something about that. Generally speaking, we are not doing a great job about it. Lots of users just bubble up the errors and we are not giving them the primitives to understand the current calls and what the error could be and like how they can handle it. We are also not providing all the diagnostics information on it, you know, like the stacktrace, frame pointers and so on... So you have 2 options: either to handle an error or to report it and we are bad in both, so I really wish that we will have better error handling.

I also really want to see generics in some sort of form that looks good within the type system, but it will be a significant rewrite of everything, probably. This is concerning all people because of the possibility of fragmentation.

## How do you end up in the lower parts of Go, like the scheduler ?

I am not working on the scheduler but on diagnostic tools, jsut to clarify, but sometimes I have to dig to understand how things make sense and what we need to instrument. So I used to work on platform teams all through my life. At some point, when the Go project was becoming more of a successful thing, there was a possibility that I can actually join the Go project. I was initially thinking that my stronger skills are API design and tooling because of my background in platforms. But I became passionned about diagnostics very recently and it contributed a lot, I mean I just wanted to get out of my comfort zone and learn.

## To you have a favorite quote ?

The quote from [Sam Boyer](https://twitter.com/sdboyer) ! Design... Constraints... Something !

> Design depends largely on constraints — Charles Eames

That is my new favorite quote ! It was very good ! The whole idea about constraints that drive the design is something that is so essential but I think we just underestimate it a lot. Especially as programmers we like to abstract things and just like create these different boundaries than reality.

## To bring someone to Go, what would you tell this person ?

I would first try to understand what type of problems they are solving and see what they need and what parts of Go align with their problems. I think it is also frustrating and unrealistic to suggest someone Go if the problem they are trying to solve is not really aligned with our ecosystem or the solutions we provide and so one.

Once we can agree it is just becoming more of like "these are the things I wanna do, and how can I learn ?" and the person usually go through the typical learning cycle of Go: existing docs, the [Go Tour](https://tour.golang.org/), [Effective Go](https://golang.org/doc/effective_go.html), and all the written material, and good API design. I think we are lucky in terms of API design, readability, and there are still material out there that I suggest people to go through. For me, what was really useful was actually getting my code being reviewed, and I was so lucky because [Brad Fitzpatrick](https://twitter.com/bradfitz) was reviewing my code ! So I ended up learning Go so well because I was lucky. Contributing to a Go author's personal project would be also awesome because you can learn a lot by learning style and it is a way of thinking.

## Great, thank you !

Thank you so much !
