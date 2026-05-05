---
title: 'Installing Go'
date: 2026-02-18T00:00:00-06:00
lastmod: 2026-05-01
summary: "Notes on installing the Go programming language on multiple operating systems."
draft: false
tags: ["Go", "Programming"]
---

## Summary
---

I have been programming in Go for three years now and I think I'm ready to share
a thing or two I know about it. Although I will never tell anyone to listen to my
advice solely on my own experience. But, how well you ingest the information
provided. I am open to correcting the information provided if it is incorrect.
Just need to reach out to me at the [Contact](/contact) page.

> I've decided to start sharing what I know about coding now. May not be a lot.
> But, I intend to provide more information on the topic with what I know. From
> simple tutorials to articles discussing what has helped me overcome different
> obsticles.

To get to the point of this note. This will work though the different ways Go
can be installed on a workstation based on the OS/distro someone plans on being
their development environment. 

> I will have a note available in the future that explains what Go is in the
> future.

Discussion related to deployment of Go applications will be discussed in a later
note.

## Windows
---

I will be discussing installing Go on Windows operating systems for devleopment
environments in differnet versions of Windows.

As they are added. I will add a new tab for this. But, at this time. I mostly
work in `WSL` or my daily driver for `Linux`. But, if anyone is having issues
with their operating system of choice. I am happy to provide assistance. 

### Windows Subsystem Linux (WSL)
---

Installing Go on WSL. It is dependent on operating system. Choose whatever
operating system (within avaialability) Go is being installed on from the
`Linux` section of this note. If the operating system isn't available. Hound me
using the information provided in the [Contact](/contact) page.

## Linux
---

I will be discussing the Linux portion of this note in these sections. There are
multiple Linux distros that can have their own flavor of package managment. Here
I will be providing methods that have worked for me.

### Arch Linux
---

Go can be installed on Arch Linux using the `pacman(1)` command. I generally
install this using the `-S` (to synchronize packages) and `-y` (to refresh the 
package file database) flags. Normally I work through the prompts that are
available by either pressing enter or putting a `y` to say yes to the
installation.

> The `sudo(1)` command may be required.

```sh
pacman -Sy go
```

If certain that Go needs to be installed. The `--noconfirm` flag can be used to
bypass having to confirm during the installation of Go. It will assume we are
OK with installing it. (Not recomended depending on scenario -- e.g. uncertain 
of what is being installed)

```sh
pacman -Sy --noconfirm go
```
