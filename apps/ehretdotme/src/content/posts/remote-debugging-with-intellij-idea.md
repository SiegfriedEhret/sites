---
date: '2013-04-03T00:00:00.000Z'
updatedAt: '2022-03-30T23:50:09.170Z'
title: Remote debugging with IntelliJ IDEA
description: How to debug a vagrant running app with IntelliJ.
tags: []
---
## Tools

### Vagrant

[Vagrant](http://www.vagrantup.com/) is a virtual development environment tool.
It uses VirtualBox to create easy to use virtual server. A sweet goodbye to the "But it works on my computer !" when co workers can't run the project...
The vagrant box IP should be added to the hosts :

```text
192.168.33.10 mysite.local
```

### IntelliJ Idea

[IntelliJ Idea](https://www.jetbrains.com/idea/) is a very nice IDE. I tried it [last christmas](https://www.youtube.com/watch?v=E8gmARGvPlI) because it was 75% off... And I can't look back (I see you in the corner, Eclipse; stay there).

## Setup

- Follow the tutorials from [Vagrant website](http://www.vagrantup.com/) to setup your java environment. (I actually began with a vagrant default box (Ubuntu Lucid), and I updated it to Quantal). My vagrant file is [here](/files/2013-03-28-remote-debugging-with-intellij-idea/Vagrantfile).
- Install Tomcat on the vagrant box.
- I am actually working on an [OpenCms](http://www.opencms.org/) project, so deploy this sweet sweet cms somewhere.

## Debug configuration

### Enable JVM debug

Edit /etc/default/tomcat7 (on Ubuntu) and uncomment the following line:

```text
JAVA_OPTS="${JAVA_OPTS} -Xdebug -Xrunjdwp:transport=dt_socket,address=8000,server=y,suspend=n"
```

### Enable Java debug in the jar

We use an [ant task](https://github.com/Eurelis/eurelis-opencms-ant-task) to generate our OpenCms modules.
To enable debug, I have the following property :

```xml
<property name="java.opts.debug" value="on" /> <!-- "on" or "off" -->
```

And the javac task:

```xml
<javac srcdir="${folder.src}" destdir="${folder.build.jar.classes}" classpathref="compil.classpath" debug="${java.opts.debug}" debuglevel="lines,vars,source" source="1.5" target="1.5" />
```

### IntelliJ IDEA

In the edit configuration :

![intellij-remote](https:/contentful/3ztEeHuXG1tb6awJQJMt2/e1362f8a76294572bbe5da0792a2638a/intellij-remote.png)

## Debug session

Start tomcat with the debug options, then, in IntelliJ IDEA:

![Run debug tools in IntelliJ IDEA](https:/contentful/5N61k8YH2ojywooGbwbjO/f4fcdf8d7733ef6dcce4e2a50028f537/intellij-debug.png)

This load the debugging tools from Intellij, and you can add breakpoints to your code and follow stuff...

## Bi-Winning ?

Not yet. You can't hot-deploy modified classes (or I haven't found it yet) as you can do locally.

## Word of the end ?

The end.
