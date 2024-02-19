---
title: 'Interview: Taichi Nakashima from Mercari'
description: >-
  I was in Japan and took the time to meet Taichi Nakashima from Mercari. Let’s
  talk architecture with Kubernetes, Go, and microservices !
date: 2024-02-23T08:02:42.437Z
updatedAt: 2024-02-23T08:02:42.437Z
image: /assets/Interview-Taichi-Nakashima-from-Mercari-720x340.jpg
tags:
  - interviews
---

📢 This article was first published on 12th of July 2018, on [Sfeir](https://www.sfeir.com/en/)'s blog, which has disappeared since.

## Who are you ?

I am Taichi Nakashima. My twitter account is [deeeet](https://twitter.com/deeeet) and you can call me deeeet!

I am working at [Mercari](http://www.mercari.com), a C2C marketplace, we let users buy and sell anything, from anywhere, in seconds from their smartphone. We are running our service in Japan, the United Stated and United Kingdom.

Currently I am working in the SRE team, and mainly I am leading the microservices migration project.

## What does SRE mean ?

It means «Site Reliability Engineering». Originally it was created at Google, the SRE team main goal was to make Google's sites run smoothly, efficiently, and more reliably by software engineering. You can learn more about Google SRE from [their book](https://landing.google.com/sre/book.html).

Previously, our team was named infra team but we changed it to SRE and we started to follow Google's SRE principles to make our service more reliable.

## Can you describe your team ?

Currently Mercari is running by a monolithic API but now we are trying to migrate to a microservices architecture. [Our team](https://open.talentio.com/1/c/mercari/requisitions/detail/7877) role is building a platform that helps developers easily and reliably running their services on it.

## Why this migration to microservices ?

We are growing fast and are hiring many engineers. Currently we have about 150 engineers and we hope to go more than 1000 ! But our monolithic API codebase is getting huge and complex. It's difficult to understand and deploy new features safely and faster. And we need to communicate with a lot of people to find our way within a monolithic codebase.

If we can separate things in microservices we can create a team that focus on a specific part of the codebase. By creating small teams around microservices, we have better channels of communications and better efficiancy. Also, we can independently deploy services and provide new features and fix things faster.

## And you should try to not break everything

Yeah, this is also a motivation.

## What are the products you have ?

There is Mercari. And we also have a subsidiary company named [Souzoh](https://www.souzoh.com/jp/) with multiple products:

* [Kauru](https://mercarikauru.com/) focused on books, cd, dvd...
* [Maisonz](https://www.mercarimaisonz.com/) for high brand clothes.

We have also started a new company named [Merpay](https://www.merpay.com/jp/) which is a payment service.

## Are you all on the same architecture ?

Mmmm no. In Mercari we have the SRE team which is taking care of the infrastructure. In Souzoh there is no SRE member, only application developers. They use [Google App Engine](https://cloud.google.com/appengine/) so that they don't need to care much about infrastrucure.

## I saw the Google Cloud Platform logo on your slides, how are you organized ?

For microservices platform, we use GKE, [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine/), managed [Kubernetes](https://kubernetes.io/) service.

## Where is the «old» Mercari ?

It is deployed on a japanese provider.

## What is your roadmap for the migration ?

Currently I am working on creating an API gateway, I'll show you:

[Slides](https://speakerdeck.com/tcnksm/microservices-on-gke-at-mercari?slide=52)

Basically the current Mercari architecture is a really simple one. At the top there is a [nginx](http://nginx.org/en/) then the application API in php and the Mysql database. We are trying to separate this.

Previously all requests directly went to the monolith Mercari API. We created the gateway API in front of it. So all requests reach to the gateway first and then proxied to the Mercari API. This is not changing anything. When we create a new microservices, we can change its route from gateway to the new microservice. You don't need to touch monolith API codebase for new microservices. In case of the existing services, for example the search service, if we want to migrate it we'll create the new one and when it is ready we change its path in the gateway to the new one. This is our strategy to migrate services to new ones.

This gateway and the architecture around it are very interesting. Communications from mobile app to the gateway are made using protocol buffer over HTTP requests. But between gateway and microservices it uses [gRPC](https://grpc.io/). It is very performant.

The API gateway and new microservices is deployed on GKE.

Currently it is kind of difficult to deploy new microservices to GKE because it only provides container orchestration and applications engineers don't know much about Kubernetes. We're building the useful tools to make things easy for them.

Another task is to migrate everything to small services, we need to think about the strategy because the monolith uses only one database. In microservices parts, each microservice should have its own database so we need to think a lot about how to split the database. I think this will take a lot a time.

## About the book, can you tell me its story ?

We are working in different companies. I think that one person was asked from a publisher «please write some Go book» and he tried to find some famous Gophers in Japan. We have a slack channel and we talked about which topic we should write and everyone have their own expert part.

I was good at writing command line tools at that time, so I wrote about that. Someone is very good at testing and this guy wrote the testing part.

## Ok ! Are you planning to write a new book some day ?

Currently I have no plan about that. This gateway and the new microservices are written in Go. I'm not sure but, maybe in the future, if I can, I'll write a book about that !

## About your project, is it specific to Mercari or will it be publicly available ?

As of today, it is specific to our needs. I think we can abstract some thing and make it open source in the future.

## You know Go pretty well, what is your favorite thing about Go ?

My favorite thing are simplicity and explicitness.

Go's language spec is really simple and we need to write a lot of things explicitly. For example, in Ruby or another languages, a lot of things are abstracted and it makes difficult to read and understand what is really happening.

So even if a newcomer join the team, it is easy to understand what is happening: the developer just have to read. Go is really good for developing things with team.

## Is there something confusing in Go ?

I don't know\... I have never been confused using Go until now.

## What are you waiting for Go in the future ? For Go 2 ?

Currently the best practive is using the [context](https://golang.org/pkg/context/). You should use it in some way when you create a goroutine to cancel it. It makes code a bit complicated and it may be kind of difficult for newcomers to follow things. I hope context will be easier to use.

Actually a lot of people want [generics](https://en.wikipedia.org/wiki/Generic_programming) in Go 2 but I have never thought I would need that. I have never been blocked by the absence of generics. I think the introduction of generics will make code more complicated or difficult when you enter a new codebase.

## Why the choice of Go at Mercari ?

Because we need performance and simplicity.

People at Mercari already started to use Go before I joined. The main API is written in PHP but it was sometimes not performant enough so we created some Go middleware to do some tasks that needed performance.

## Why the choice of Kubernetes ?

When we started microservices, we decided that a deployment unit should be a container. In microservices, it is easy to be polyglot and we want to allow each team to choose the right thing for their task. If we pack the deployment as a container, from the infrastructure view, it's easy to control and utilize computer resources. That's why containers are good.

Then, if we want to deploy the containers to production, a good orchestrator is only Kubernetes. Kubernetes has been chosen by famous companies, like Github, and they started creating an ecosystem around Kubernetes. I think we should run on that ecosystem and use the best tools available to solve our problems. And in future we can also contribute its ecosystem.

## There are a lot of tools around k8s, what are you using ?

Everybody has heard about [Istio](https://istio.io/) but it is very young but we are thinking about using it in the future.

One is [kube-lego](https://github.com/jetstack/kube-lego): it is a [Let's Encrypt](https://letsencrypt.org/) controller. If you create a new [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/), it automatically gets the start certificate for that endpoint.

Another good tool is [external-dns](https://github.com/kubernetes-incubator/external-dns), it is another controller. When you create a new Ingress, it will automatically register the domain to a DNS server like [Route 53](https://aws.amazon.com/route53/) or [Cloud DNS](https://cloud.google.com/dns/).

There is also [Heptio Ark](https://github.com/heptio/ark), a disaster recovery tool. It continuously makes backup of the Kubernetes manifest to [Google Cloud Storage](https://cloud.google.com/storage/) or [AWS S3](https://aws.amazon.com/s3/) and can rebuild everything when something bad happens.

## How do you manage your databases ?

We use managed databases, we don't operate database on Kubernetes, only stateless applications and services.

## How to learn some good Go ?

When I started writing Go, I studied from the [CoreOS repositories](https://github.com/coreos). Their code is really good and I learned a lot.

There is also [HashiCorp](https://github.com/hashicorp) which has a lot a very good code.

## Do you have a favorite quote ?

I like the quote by Rob Pike, "Readable means reliable". This is the most important when you writing code.

## Anything to add to finish ?

We are hiring in Japan, US and UK ! If you have interest, [please contact us !](https://careers.mercari.com/).

## Thanks a lot !

Thank you very much !
