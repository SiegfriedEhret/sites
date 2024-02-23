---
date: '2015-04-03T00:00:00.000Z'
updatedAt: '2021-05-23T19:07:25.597Z'
title: TodoMVC As A Service
description: Choose a random thing for your next project !
tags: []
---
## Intro

I had this idea when I woke up on April 1st.

The thing is that nowadays, you can choose a frontend framework by making a [Todo MVC app](http://todomvc.com), like you can choose a backend one by doing a blog engine.

This is a good starting point but won't help you if you have to build a big application.

## How

### Fetch

I use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch) to call the [Github API](https://developer.github.com/v3/) to retrieve the list of framework and libraries used by the TodoMVC demos.

```javascript
fetch('https://api.github.com/repos/tastejs/todomvc/git/trees/6d71146f56e9ad51ddf3b6776e8871d33e02f4bd').then(function(response) {
    if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
    }

    response.json().then(function(data) {
        var types = data.tree.map(function(element) {
            return element.path;
        });
        DOSTUFF(types[Math.floor(Math.random() * types.length)]);
    });
});
```

### Web components

> "A tiny little heart for the Web"<br>
&mdash; from [Carmen Popoviciu](https://carmenpopoviciu.github.io/ascii-heart/)

Web components are a set of 4 specifications:

- [Custom Elements](https://w3c.github.io/webcomponents/spec/custom/)
- [Shadow DOM](http://www.w3.org/TR/shadow-dom/)
- [HTML Imports](https://w3c.github.io/webcomponents/spec/imports/)
- [HTML Templates](http://www.w3.org/TR/html5/scripting-1.html#the-template-element)

A longer introduction:

<iframe src="//www.slideshare.net/slideshow/embed_code/42305472" width="425" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//fr.slideshare.net/cyril-balit/devoxx-2014webcomponents" title="Devoxx 2014-webComponents" target="_blank">Devoxx 2014-webComponents</a> </strong> from <strong><a href="//www.slideshare.net/cyril-balit" target="_blank">Cyril Balit</a></strong> </div>

The code for my web component is:

```html
<link rel="stylesheet" href="todo.css">
<template id="todo-template"></template>
<script>
    var thisDoc = document.currentScript.ownerDocument;
    var mainDoc = document;

    var proto = Object.create(HTMLElement.prototype);
    proto.createdCallback = function() {
        var shadowRoot = this.createShadowRoot();
        fetch('https://api.github.com/repos/tastejs/todomvc/git/trees/6d71146f56e9ad51ddf3b6776e8871d33e02f4bd').then(function(response) {
            'see the previous part about fetch';
        });

        function DOSTUFF(truc) {
            var template = thisDoc.querySelector('#todo-template');
            var iframe = document.createElement('iframe');
            iframe.frameBorder = 0;
            iframe.setAttribute('id', 'todo-iframe');
            iframe.setAttribute('src', 'http://todomvc.com/examples/' + truc);

            var clone = thisDoc.importNode(template.content, true);
            clone.appendChild(iframe);
            shadowRoot.appendChild(clone);
        }
    };

    mainDoc.registerElement('todo-js', {
        prototype: proto
    });
</script>
```

## Code and demo

The code is on [Github](https://github.com/SiegfriedEhret/todomvcaas).
[Enjoy the demo !](https://dev.ehret.me/todomvcaas/).

## IT DOESN'T WORK

![it works on my machine](/contentful/6BF0DBsfVGZnsJmq3WBNOn/b28b74ade359819510ee9da1f6725a65/works.png)

(I haven't tried it outside of Opera/Chrome though...)

## How to make it better

I added the [webcomponents.js polyfill](https://github.com/WebComponents/webcomponentsjs) in the html... Some browsers still don't render the component)
=> Use [Polymer](https://www.polymer-project.org/) to make it available "everywhere".

If you can make Mozilla add all Web Components standards, I won't be sad anymore.

> Mozilla will not ship an implementation of HTML Imports.<br>
&mdash; https://hacks.mozilla.org/2014/12/mozilla-and-web-components/

## License

Licensed under the [wtfpl](http://wtfpl.org/)

```text
               DO WHATEVER THE FUCK YOU WANT, PUBLIC LICENSE
        TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

                0. You just DO WHATEVER THE FUCK YOU WANT.
```
