---
date: '2021-04-11T00:00:00.000Z'
updatedAt: '2021-05-24T07:49:00.620Z'
title: Brrr... The end!
description: 'Some thoughts on the life of brrr, and what''s next.'
tags:
  - tools
---
[The Doors - The End](https://www.youtube.com/watch?v=BXqPNlng6uI)

I am happy (and a bit sad) to announce the end of [brrr](https://github.com/nyrst/brrr), and the related projects:

* [Freezer](https://github.com/nyrst/freezer), the official package definitions repository
* [Búri](https://github.com/nyrst/buri), the Brrr User ReposItory

The repositories are now archived and read-only. All releases and files remain available. The website [nyrst.tools](https://nyrst.tools/) will remain up.

## Some history

I wanted a simple and quick way to install packages, and [brew](https://brew.sh/) is spending to much time upgrading itself or its package catalog.

So I started my own package manager, and the first released happened on Apr 27, 2020. In the end, 32 releases happened, it reached version `0.46368.144` thanks to FibVer, which doesn't exist but it basically SemVer, using only Fibonacci numbers and without bumping minor and patches between major versions to have a better idea of what happened in a version.

Firstly available for Linux, `brrr` quickly became available for MacOS (from [v0.13.1](https://github.com/nyrst/brrr/releases/tag/v0.13.1)), also building a few static build for Linux (from [0.2584.89](https://github.com/nyrst/brrr/releases/tag/0.2584.89)).

This project also allowed me to play with GitHub Actions with [brrr-action](https://github.com/nyrst/brrr-action), which is mostly useless for the world but was used to update the website using the [freezer related command](https://github.com/nyrst/freezer/blob/main/.github/workflows/main.yml#L29-L32).

So, why is it the end of `brrr`?

A friend previously talked to me about [asdf-vm](https://asdf-vm.com/), and someone (I don't remember who but you are awesome!) mentioned it as well in an online meetup.

`asdf` allows to "Manage multiple runtime versions with a single CLI tool".

I finally found the time to play with it and... It is great! I have finally found the brew replacement I was looking for. Time to move the packages!

## Packages

In the packages list available through `brrr`, some were already available through `asdf`. For them you can run `asdf plugin add <name>` then `asdf install <name>`.

* [bat](https://gitlab.com/wt0f/asdf-bat)
* [caddy](https://github.com/salasrod/asdf-caddy)
* [crystal](https://github.com/asdf-community/asdf-crystal)
* [dasel](https://github.com/asdf-community/asdf-dasel)
* [deno](https://github.com/asdf-community/asdf-deno)
* [fzf](https://github.com/kompiro/asdf-fzf)
* [gitui](https://github.com/looztra/asdf-gitui)
* [go](https://github.com/kennyp/asdf-golang)
* [hugo](https://bitbucket.org/mgladdish/asdf-gohugo)
* [jq](https://github.com/focused-labs/asdf-jq)
* [k3d](https://github.com/spencergilbert/asdf-k3d)
* [neovim](https://github.com/richin13/asdf-neovim)
* [nim](https://github.com/asdf-community/asdf-nim)
* [nodejs](https://github.com/asdf-vm/asdf-nodejs)
* [ripgrep](https://gitlab.com/wt0f/asdf-ripgrep)
* [scala](https://github.com/mtatheonly/asdf-scala)
* [semgrep](https://github.com/Brentjanderson/asdf-semgrep)
* [zig](https://github.com/cheetah/asdf-zig)

After checking that they are not listed in the official list, I created these packages under the [nyrst organization](https://github.com/nyrst/). For now you can `asdf plugin add <name> https://github.com/nyrst/asdf-<name>.git` then `asdf install <name>`:

* [atom](https://github.com/nyrst/asdf-atom)
* [bandwhich](https://github.com/nyrst/asdf-bandwhich)
* [broot](https://github.com/nyrst/asdf-broot)
* [delta](https://github.com/nyrst/asdf-delta)
* [dog](https://github.com/nyrst/asdf-dog)
* [espanso](https://github.com/nyrst/asdf-espanso)
* [exa](https://github.com/nyrst/asdf-exa)
* [firefox](https://github.com/nyrst/asdf-firefox)
* [glow](https://github.com/nyrst/asdf-glow)
* [godot](https://github.com/nyrst/asdf-godot)
* [gron](https://github.com/nyrst/asdf-gron)
* [hexyl](https://github.com/nyrst/asdf-hexyl)
* [hyperfine](https://github.com/nyrst/asdf-hyperfine)
* [lf](https://github.com/nyrst/asdf-lf)
* [micro](https://github.com/nyrst/asdf-micro)
* [nnn](https://github.com/nyrst/asdf-nnn)
* [vscodium](https://github.com/nyrst/asdf-vscodium)
* [watchexec](https://github.com/nyrst/asdf-watchexec)
* [xsv](https://github.com/nyrst/asdf-xsv)
* [youtube-dl](https://github.com/nyrst/asdf-youtube-dl)
* [zoxide](https://github.com/nyrst/asdf-zoxide)

I won't move the following packages (yet):

* asciidoctor-revealjs
* asciidoctor
* ffmpeg
* mint

## What's next?

I made sure that things work on my computer :tm:!

The scripts are only tested on my own computer (using Arch Linux), most CI build for the new packages are green using the Ubuntu runner, some are not because of missing dependencies etc. I'll fix that! I also need to work on architecture detection to make things work also on MacOS (and more?) before submitting my contribution to the asdf community.

If you want to help, check the repos for this tag: [nyrst-asdf](https://github.com/topics/nyrst-asdf)

Some links:

* [asdf-vm.com](https://asdf-vm.com/): the official website
* [asdf-plugins](https://github.com/asdf-vm/asdf-plugins): Central plugin repository for asdf
* [asdf-plugin-template](https://github.com/asdf-vm/asdf-plugin-template): :package: package asdf-vm plugin template with GitHub Actions and more!
