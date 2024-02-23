---
date: "2015-02-10T00:00:00.000Z"
updatedAt: "2021-05-24T12:52:56.515Z"
title: Neovim weird thing with syntax on
description: A quick tip for an error I encountered.
tags: []
---

If you ever encounter this message when loading [Neovim](http://neovim.org) with `syntax on`:

```text
".vimrc" 41L, 989C
No neovim module found for Python 2.7.8. Try installing it with 'pip install neovim' or see ':help nvim-python'.
```

You need to:

```shell
sudo apt-get install python-pip python-dev
sudo pip install neovim
```

![That's all Folks!](/contentful/1DktW2XUbZKaYxK1lkSvP6/f5a92ac49bab8e5c31984287e2b54407/3082315.jpg)
