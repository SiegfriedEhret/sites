---
date: "2023-05-04T00:00:00.000Z"
updatedAt: "2023-05-04T15:10:52.613Z"
title: Using different package repositories with Alpine Linux
description: >-
  I needed a way to install something from the "testing" repository in Alpine
  Linux.
tags: []
---

As described in the [Alpine Linux wiki](https://wiki.alpinelinux.org/wiki/Repositories), there are 3 package repositories: main, community and testing.

Looking for the [`kubectl` package](https://pkgs.alpinelinux.org/packages?name=kubectl&branch=edge&repo=&arch=&maintainer=), we see that it is part of the "testing" repository.

This means that using the following results in an error (cleaned up for readability):

```
 > [stage-1 2/6] RUN apk --no-cache add ca-certificates kubectl helm:
#0 2.454 fetch https://dl-cdn.alpinelinux.org/alpine/v3.17/main/x86_64/APKINDEX.tar.gz
#0 2.968 fetch https://dl-cdn.alpinelinux.org/alpine/v3.17/community/x86_64/APKINDEX.tar.gz
#0 5.994 ERROR: unable to select packages:
#0 6.065   kubectl (no such package):
#0 6.065     required by: world[kubectl]
```

Looking at the wiki page linked before, I thought I would have to add the "testing" repository to the list of repositories, which is not super convenient.

There is another way, we can install the package like this, passing the repository as a parameter:

```
apk add --no-cache -X http://dl-cdn.alpinelinux.org/alpine/edge/testing kubectl
```

Adding the repository to the mirrors list would be better for multiple packages, but in my case it is good enough.

xoxo
