---
date: "2017-07-26T00:00:00.000Z"
updatedAt: "2021-05-23T21:03:25.347Z"
title: Hodor with React
description: hodor.jsx !
tags:
  - javascript
  - react
---

## react-hodor

![Hodor !](/contentful/38log8us31S0ROXlnqJn9b/839584563121d043f69dcee812c88aae/oatmeal_hodor.jpg)

- The demo is [here](https://dev.ehret.me/react-hodor/demo/).
- The repo is [here](https://github.com/SiegfriedEhret/react-hodor)

Install using `npm install react-hodor` !

Include some stuff !

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Hodor from "react-hodor";
```

### hodor

The default `<Hodor/>` directive replace the $element content with "hodor".

```javascript
ReactDOM.render(<Hodor />, document.getElementById("hodor"));
```

will be displayed as:

```text
hodor
```

### Hodor

Give it some hodoring:

```javascript
ReactDOM.render(
  <Hodor hodorhodor="10" />,
  document.getElementById("hodorhodor")
);
```

and it will

```text
hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor
```

### HODOR

Make it hodor speak with:

```javascript
ReactDOM.render(
  <Hodor hodor="hodor" hodorhodor="100" />,
  document.getElementById("hodorhodorhodor")
);
```

Aaaaand here it comes !

```text
HODOR!!! Hodor. Hodor, HODOR!!! Hodor, hodor. Hodor, hodor hodor, hodor, hodor hodor, hodor, hodor hodor. Hodor, HODOR!!! Hodor. HODOR!!! HODOR!!! Hodor, hodor hodor, hodor hodor, hodor, hodor, hodor, hodor, hodor HODOR!!! Hodor. Hodor, hodor. Hodor, hodor, HODOR!!! Hodor hodor, HODOR!!! HODOR!!! Hodor. Hodor. Hodor. Hodor, hodor hodor, hodor, hodor, hodor, HODOR!!! Hodor, hodor, hodor. Hodor. Hodor, hodor. Hodor, hodor, hodor, hodor, hodor hodor hodor, hodor, hodor. Hodor, hodor. Hodor hodor. Hodor. HODOR!!! Hodor. Hodor. HODOR!!! Hodor hodor hodor. HODOR!!! HODOR!!! Hodor, hodor HODOR!!! Hodor, hodor, hodor, hodor. Hodor, hodor. Hodor, hodor. Hodor. HODOR!!! Hodor, hodor. Hodor, HODOR!!! Hodor, hodor, HODOR!!!
```

### hodor

- Image from [The Oatmeal](http://theoatmeal.com/quiz/got_character)
