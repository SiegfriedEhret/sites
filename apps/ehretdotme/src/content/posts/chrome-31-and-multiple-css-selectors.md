---
date: '2013-11-20T00:00:00.000Z'
updatedAt: '2021-05-24T12:55:38.281Z'
title: Chrome 31 and multiple '+' CSS selectors
description: A weird thing happend on Chrome 31.
tags: []
---
Hey there, Chrome has a bug. I think.

I have the last standard version: 31.0.1650.57 m.

The html:

```html
<label for="leInput">mon label</label>
<div class="truc">>></div>
<input type="text" id="leInput">
```

And the css

```css
label, div, input {
    display: inline-block;
}
label:hover + div + input {
    border: 1px solid #f39;
}
```

The demo page is [here](http://jsfiddle.net/GQBTW/).

On Chrome, when you hover on the label, the border of the input does not change.

![Rendering on Chrome 31](/contentful/1K9jTvF7gI5ZhfU7kusWru/acdac32503152ef2add2715d41997442/chrome_bug_ko.jpg)

On other browsers, it is displayed with a nice pink border.

![Rendering on Firefox Aurora](/contentful/4vVN7vw6Wz1NA7OQ8gsXwT/e43861afe0ee66f69f05fd213c5f554d/chrome_bug_ok.jpg)

Tested with Windows 7 & 8 64 bits.

Chrome Canary 33.0.1713.0 has the correct behaviour !
