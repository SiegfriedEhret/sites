---
date: '2013-11-06T00:00:00.000Z'
updatedAt: '2021-05-24T12:54:35.362Z'
title: How to change IntelliJ expansion options
description: A small tip for custom live templates.
tags: []
---
I use [intelliJ](http://www.jetbrains.com/idea/) for... Everything.

When I create a `test.css` file with:

```css
#plop {
}
```

If I start typing something, like `wid`, intelliJ displays a panel for easy completion:

![intellij expansion panel](/contentful/7o64rv2qMoAZoLt3ImB5rk/e86fbf8fafdbd844abcd59824e580281/intellij_widows_width_01.jpg)

And I hit the tab key, intellij expands `wid` to `widows` instead of `width`. That's **normal** because widows precedes width alphabetically. But I use `width` a **lot** more.

How to change this ?

Hit the `down` key to select `wid (widows: ...;)` and mouse over the end of the line:

![intellij expansion panel](/contentful/5hOwq6zVOz6j9blTvkSbCX/4a1817b0ab94ad6da9ec07bf95a99cae/intellij_widows_width_02-1.jpg)

And click the lightbulb:

![intellij expansion panel](/contentful/4WTRl98J778cEoxyklgvrU/a990d5e165f0e265060df1189b9c67a4/intellij_widows_width_03.jpg)

Choose the `Edit live template settings` option.

![intellij live templates options](/contentful/6UGwdWXO9gDfdVgyTHcboo/bf688a6d470c73762b83c39d32882790/intellij_widows_width_04.jpg)

Change the `Description` and `Template text` values to what you want:

![intellij live templates options updated !](/contentful/5BOKabFSCBg4yLk8BSVdR4/44165e8e3694f4362fe88ed15ecf4e6e/intellij_widows_width_05.jpg)

Save, and enjoy your customized expansion from wid to width !
