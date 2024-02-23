---
date: "2014-01-21T00:00:00.000Z"
updatedAt: "2021-05-24T12:56:28.200Z"
title: "A desktop web-app with node-webkit, database with nedb !"
description: "Let's play with node-webkit, to make a desktop web-app (part 2)."
tags: []
---

## Why ?

In my secret project to conquer the world, I want to store stuff.

This is an update after [this article](https://ehret.me/a-desktop-web-app-with-node-webkit/)

The release is available [here](https://github.com/SiegfriedEhret/node-webkit-app/releases/tag/v0.2.0).

## The database

I am using [NeDB](https://github.com/louischatriot/nedb/), a NoSQL database for [nodeJS](http://nodejs.org/).

To install it, just use `npm install nedb`.

## The test page

We're adding a page with a form to add dudes

![The dude](/contentful/6uV0HotqpIEoK45TvHJCUC/002baf7788b65102af461d95f2249a55/node_webkit_app_the_dude.jpg)

(image from [imdb](http://www.imdb.com/media/rm452582656/ch0003518/))

The new page looks like this:

![DB test app](/contentful/5dkF0nd6VItUP9T53ZzSpO/8811af3562434a6f8de69ac2441e795a/node_webkit_02.jpg)

The page contains:

- a form
- a list of dudes

## Le code

### The database: creating or loading

Very hard:

```javascript
var Datastore = require("nedb");
var db = new Datastore({
  filename: getUserDataPath() + "/dudes.db",
  autoload: true,
});
```

The getUserDataPath() function returns the .exe directory:

```javascript
function getUserDataPath() {
  var path = require("path");
  return path.dirname(process.execPath);
}
```

### Saving user

Very hard again: db.insert, with the data to insert, and a callback:

```javascript
function saveUser(firstName, lastName) {
  db.insert(
    {
      firstName: firstName,
      lastName: lastName,
    },
    function (err, newDoc) {
      if (err) {
        console.log(err);
      } else {
        showUser(newDoc);
      }
    },
  );
}
```

### Retrieving all the users

A db.find, with an empty object `{}` retrieves all the users. We can add things to filter the results (see [here](https://github.com/louischatriot/nedb/#finding-documents)):

```javascript
function getAllTheThings() {
  db.find({}, function (err, docs) {
    for (var i = 0; i < docs.length; i++) {
      showUser(docs[i]);
    }
  });
}
```

Other functions in the script.js are here for displaying stuff and are not the subject of this post.

## Conclusion

Epic win ! We can use a Node.js database to save stuff !

Just one thing: node-webkit actually executes the html in a temporary directory (calling `process.cwd()` shows the folder).
