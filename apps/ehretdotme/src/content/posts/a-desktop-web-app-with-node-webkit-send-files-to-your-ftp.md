---
date: '2014-03-21T00:00:00.000Z'
updatedAt: '2021-05-24T12:56:41.673Z'
title: 'A desktop web-app with node-webkit, send files to your ftp !'
description: 'Let''s play with node-webkit, to make a desktop web-app (part 3).'
tags: []
---
## Hello you !

I just added a new thing to my node-webkit experiment.

This time, I use [node-ftp](https://github.com/mscdex/node-ftp) to send files to my ftp and code from [HTML5 File API from MDN](https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications) to enable drag'n drop files in the app.

The release v0.3.0 is [here](https://github.com/SiegfriedEhret/node-webkit-app/releases/tag/v0.3.0).

## The new page

It looks like a good old form:

![An experiment with node-webkit: the page !](/contentful/4lqpHbUpwWq67KDo3QKoHv/e3070f48c2e1dcbdc817e94ba9794382/node_webkit_file.jpg)

You will be asked to provide your ftp details, and drop a file on the nice pink (#f39 FTW) on the right.

Then, click on 'Send'.

## Le code

The drag'n'drop code comes from [HTML5 File API from MDN](https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications).
If you want to read more about this, [have fun](http://www.w3.org/TR/file-upload/).

```javascript
var files;
var listing = document.getElementById('listing');
var dropbox = document.getElementById('dropbox');
dropbox.addEventListener('dragenter', dragenter, false);
dropbox.addEventListener('dragover', dragover, false);
dropbox.addEventListener('drop', drop, false);

function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}

function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
}

function drop(e) {
    e.stopPropagation();
    e.preventDefault();

    var dt = e.dataTransfer;
    files = dt.files;

    document.querySelector('.pure-button-disabled').classList.remove('pure-button-disabled');

    dropbox.style.display = 'none';

    var buttonForm = document.getElementById('submitFile');
    buttonForm.addEventListener('click', sendToFtp);
}
```

The following function creates a node-ftp client instance with the given options.
When the connection is established, it will send each file to the ftp.
Please note that there is absolutely no check for permissions.

```javascript
function sendToFtp() {
    var Client = require('ftp');
    var c = new Client();

    var port = document.getElementById('port').value;

    var options = {
        host: document.getElementById('server').value,
        port: port,
        user: document.getElementById('login').value,
        password: document.getElementById('password').value,
        secure: port == 22
    };

    console.log(options);

    c.on('ready', function() {

        var folder = document.getElementById('folder').value;

        for (var i=0; i<files.length; i++) {
            var file = files[i];
            sendFile(c, file.path, folder, file.name);
        }

    });

    c.connect(options);

}
```

The following function send an individual file using the node-ftp client:

```javascript
function sendFile(c, path, folder, name) {

    c.put(path, folder + '/' + name, function(err) {
        if (err) {
            logFile('upload ' + name + ' ko: ' + err + '<br/>');
        } else {
            logFile('upload ' + name + ' ok !<br/>');
        }
        c.end();
    });

    function logFile(msg) {
        var li = document.createElement('li');
        li.innerHTML = msg;
        listing.appendChild(li);
    }
}
```

## Finally
I told you I have a secret project to take over the world.
It will use HTML5 super powers and nodejs.

I plan to use ftp stuff to manage my update, but I had to ~~copy/paste stuff~~ look into the file api.

And that's all folks !
