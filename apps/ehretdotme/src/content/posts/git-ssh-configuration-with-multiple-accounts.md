---
date: 2019-08-04T00:00:00.000Z
updatedAt: 2021-05-24T06:59:47.381Z
title: git ssh configuration with multiple accounts
description: This is how I use git with multiple account.
tags:
  - tips
---

Just a quick thing to configure git with ssh when you have multiple accounts.

First, read how to create an SSH key on [GitHub](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and [Gitlab](https://docs.gitlab.com/ee/gitlab-basics/create-your-ssh-keys.html).

Let's say we have 2 keys:

- One for home: `~/.ssh/home` and `~/.ssh/home.pub`
- One for work: `~/.ssh/work` and `~/.ssh/work.pub`

Update the ssh configuration at `~/.ssh/config`:

```
Host github.com
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/home

Host github-work.com
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/work
```

Then, to clone [beulogue](https://github.com/SiegfriedEhret/beulogue/) with (notice the hostname change !):

The _home_ key, use:

`git clone git@github.com:SiegfriedEhret/beulogue.git`.

The _work_ key, use:

`git clone git@github-work.com:SiegfriedEhret/beulogue.git`

See you !
