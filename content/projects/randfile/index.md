---
title: "randfile"
date: 2025-10-14T10:05:15-06:00
lastmod: 2025-10-15
description: "Small random file path fetcher written for the command line in Go."
draft: false
tags: ["randfile"]
---

## What is Randfile?

Randfile is a Go commandline application that ingests a directory path and picks
a random file. This is a small project. But, it has its place in my setup.

For my purposes this is for learning and randomly picking a wallpaper PNG or
JPEG and outputting its full path for Sway or i3wm.

## Build from Source

Clone the randfile repository.

```sh
git clone https://github.com/n3s0/randfile.git
```

Build the application.

```sh
go build 
```

Move the application to wherever you wish. I'll work on making installation a
little easier at some point. Just need to learn how.

I generally put it in the /usr/local/bin using the following command.

```sh
sudo cp ./randfile /usr/local/bin/randfile
```

## Future Deployment Options

In the future I intend on either putting this into package repos for different
operating systems. This includes Debian/Ubuntu, CentOS/Fedora, Arch Linux, etc.
Although I don't think this would be entirely useful to everyone. Nor is it
popular enough to just deploy. I would like to learn how to package and deploy
open-source software. So, I thought this would be a good start to learning how
to do that. Considering how these different distros have their own flavor of
packaging and deploying software.

The following list contains a list of distrobutions I would like to attempt to
package this application for. This will also be done in various ARM and x86_64
architectures.

- [ ] Arch Linux
- [ ] Debian
- [ ] Ubuntu
- [ ] Fedora

I learn by doing.

## Usage

Running the application is pretty straight forward. Run randfile with either the
-p or --path flags and it will provide a random file from that path.

```sh
randfile -p /path/to/directory
```

OR (if it's not in the file path)

```sh
./randfile -p /path/to/directory
```

Provided is the output of the command.

```sh
/path/to/directory/file.png
```

If anyone would like to follow the progress of this project. For updates and
submitting issues. Here are some links.

<a href="https://github.com/n3s0/randfile"><button style="border-radius: 8px;">Github</button></a>
<a href="https://github.com/n3s0/randfile/issues"><button style="border-radius: 8px;">Issues</button></a>
<a href="/tags/randfile"><button style="border-radius: 8px;">Updates</button></a>
