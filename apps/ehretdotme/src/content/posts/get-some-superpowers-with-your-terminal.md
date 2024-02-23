---
date: "2019-12-31T00:00:00.000Z"
updatedAt: "2021-05-24T07:11:05.479Z"
title: Get some superpowers with your terminal
description: >-
  A few notes about the apps I use from my terminal to be the only one who can
  use my computer
tags:
  - commandLine
  - talks
  - tools
---

This article is the written version of a small talk I gave in multiple conferences ([Devoxx France](https://www.youtube.com/watch?v=mxRpBHar_BQ), [Voxxed Days Luxembourg](https://www.youtube.com/watch?v=fXYnrNr0yug), [Jug Summer Camp](https://www.youtube.com/watch?v=DZcvLvKL-g0), [Voxxed Days Ticino](https://www.youtube.com/watch?v=ZVv4klOho2M)).

## Linux

At home I use Linux. I used to play with Ubuntu but I switched to [Arch Linux](https://www.archlinux.org/) about 5 years ago. It is a rolling-release model (no huge migration to upgrade, always up-to-date). I like to live dangerously :smile:.

It works well and I have never broke my system. I also used the same at work previously.

Arch Linux comes with a default package manager: [pacman](https://wiki.archlinux.org/index.php/Pacman). I also use [yay](https://github.com/Jguer/yay) to reach AUR (the Arch User Repository) with tons of community packages.

## Window manager

I use [i3](https://i3wm.org/), a tiling window manager.

It is pretty cool to move windows around and organize them in workspaces.

I am using a friend's [configuration file](https://github.com/YannMoisan/dotfiles/blob/master/i3/config).

About the status bar, "it depends". I often use the standard i3 bar, and I also playing with [polybar](https://polybar.github.io/), even if I did not make the switch yet.

I use [rofi](https://github.com/DaveDavenport/rofi) as an application launcher.

## Terminal

I spent some years with [urxvt](http://software.schmorp.de/pkg/rxvt-unicode.html), but I am now using [kitty](https://sw.kovidgoyal.net/kitty/index.html).

## Shell

I spent a lot of time with the good old [bash](https://www.gnu.org/software/bash/), then switched to [zsh](https://www.zsh.org/), and was quite unhappy with it. I needed to add plugins and stuff, and it was slow.

I found happiness with [fish](https://fishshell.com/), which is not compatible with bash but has tons of default things that just work. If needed, there is a package manager: [fisher](https://github.com/jorgebucaran/fisher).

## Directories & files

[ranger](https://ranger.github.io/) is great! It allows to browse my system, copy/move files around, preview them. I use a lot the shortcut `S`, to open a shell in the folder I am currently viewing.

I also use [`z`](https://github.com/rupa/z/) a lot to [jump around](https://www.youtube.com/watch?v=XhzpxjuwZy0).

## Images

[feh](https://feh.finalrewind.org/) is what you want!

It is very lightweight and super effective to display static images (no gif!).

I also use feh to setup my wallpaper, with `feh --bg-fill ~/wallpaper.jpg`

## Documents

[zathura](https://pwmt.org/projects/zathura/) is a simple and effective document viewer.

You can browse your docs with the holy keys: j, k for scrolling; J, K for page jumps, and h, l for left/right.

The theme can be customized.

## Music

[ALSA](https://wiki.archlinux.org/index.php/Advanced_Linux_Sound_Architecture) and the `alsamixer` tool for sound and volume management.

I use [mpd](https://www.musicpd.org/), a daemon to play music, with the [ncmpcpp](https://rybczak.net/ncmpcpp/) frontend.

Other nice tools: [cmus](https://cmus.github.io/), [moc (music on console)](https://moc.daper.net/).

## Development

When working with git, I love [tig](https://jonas.github.io/tig/) and I also use some extra functions from [git-extras](https://github.com/tj/git-extras).

Other nice tools:

- [jq](https://stedolan.github.io/jq/), a json processor.
- [httpie](https://httpie.org/), curl made easy!

## Videos and animated images

[mpv](https://mpv.io/) is my favorite video player! It can play everything, and has a `--loop` to display animated gifs :smile:.

[ffmpeg](https://ffmpeg.org/) is also a great tool to work with videos.

## Mails and contacts

[abook](http://abook.sourceforge.net/) is a contact manager app. Its file format is plain text and it would be easy to write tools to generate is to import all your contacts.

I use [neomutt](https://www.neomutt.org/) and I configured everything with [mutt-wizard](https://github.com/LukeSmithxyz/mutt-wizard)

## Passwords

I stopped using LastPass when they were bought by another company.

I use [pass](https://www.passwordstore.org/) and the [Arch Linux wiki page](https://wiki.archlinux.org/index.php/Pass) about it is great.

## (neo)vim or emacs?

None! [kakoune](http://kakoune.org/) FTW!

## Exception: not in the terminal

My browser is [qutebrowser](https://qutebrowser.org/), a browser using QtWebEngine inspired by vim.

## The best thing for the end

[thefuck](https://github.com/nvbn/thefuck), to fix our typos when we type a command.
