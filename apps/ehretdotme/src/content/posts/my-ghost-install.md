---
date: "2013-09-21T00:00:00.000Z"
updatedAt: "2021-05-23T13:43:19.538Z"
title: My ghost install
description: What I use for my server to setup Ghost.
tags: []
---

## Ghost ?

Yep, [Ghost](http://ghost.org/).

## The server

I have a debian jessie server.

## What do I need ?

You'll find useful information [here](http://docs.ghost.org/installation/).

They are a few things I want to share.

First, you need [nodeJS](http://nodejs.org/).
You just have to

```shell
sudo apt-get update
sudo apt-get install nodejs
```

and [npm](http://npmjs.org/). To install npm, there is a [nice script](https://npmjs.org/install.sh), but it's looking for a `node` executable, and debian provides a `nodejs` executable.

So you need to create a `/usr/bin/node` symbolic link to `/usr/bin/nodejs` to not replace everything in npm files.

## I can has ghost nao ?

It's just now available for kickstarter backers. [OH YEAH MY NAME IS IN THIS PAGE](http://blog.ghost.org/launch).

On my server, it is in `/home/username/blog`, so `cd blog` and `npm install --production` to retrieve the libraries from npm.

When it is done, you can `npm start` to launch the server and it will be available at http://yourdomain.com:2368.

## Nginx configuration

I am using nginx and here is an example :

```text
server {
  listen 80;
  server_name yourdomain.com;
  return 301 https://$host$request_uri;
}

server {
  listen 443 ssl;
  listen 80;
  server_name yourdomain.com;

  ssl_certificate /home/path/to/the/certificate/certificate.pem;
  ssl_certificate_key /home/path/to/the/certificate/myserver.key;

  # optional: tell browsers to require SSL
  add_header Strict-Transport-Security max-age=31536000;
  root /home/path/to/ghost/folder/;
  # if a file does not exist in the specified root and nothing else is defined, we want to serve the request via node.js
  try_files $uri @nodejs;

  location @nodejs {
    # say node.js is listening on port 2368, same host
    proxy_pass http://localhost:2368;
    break;
  }
}
```

I am using SSL so I redirect everything going to port 80 to tport 443. Then, I redirect stuff to nodejs.

Then you can go to http://yourdomain.com/ghost/signup/ to register your first account.

After registration, I added these lines to the config to prevent other registrations:

```text
location /ghost/signup/ {
  return 301 $scheme://ehret.me;
}
```

## Ghost runs, but I can't quit the terminal without killing it

Yep. What about some [nohup](https://en.wikipedia.org/wiki/Nohup) or [forever](https://github.com/nodejitsu/forever) ?

```shell
nohup npm start  > output.log &
```

It will run the ghost start command, output stuff in the log file, and you can quit your terminal and get a coffee.

## What now ?

- http://yourdomain.com/ to see your blog (it should redirect to https if you have it).
- http://yourdomain.com/ghost/signin to log yourself in Ghost.
