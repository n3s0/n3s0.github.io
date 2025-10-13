---
title: "Install And Setup swaylock-effects On Ubuntu"
description: "Notes for installing and setting up swaylock-effects on Ubuntu."
date: 2024-11-04T10:25:01-06:00
lastmod: 2025-10-10
author: "Timothy Loftus (n3s0)"
draft: false
tags: ["sysadmin"]
---

## Summary
---

To make my setup a little more enjoyable I like to make it look more pleasing to
the eye. With this comes trying different methods to install software that
accomplishes this.

With that being said I like to install software that adds more effects that
aren't necessarily the defaults. I found something called swaylock-effects.
Which is a fork of the swaywm/swaylock Github repository.

- [mortie/swaylock-effects](https://github.com/mortie/swaylock-effects)

It took a little while to install this because there is no Ubuntu package. But,
with a little dependancy hell I was able to compile it and it works really well
for not being updated for 4 years.

## Dependencies
---

Needed to install the following build tools because they weren't already
installed.

- meson
- cmake

Needed to install the following packages for setup.

- libwayland-dev
- wayland-protocols
- libxkbcommon-dev
- scdoc
- libcairo2-dev
- libgdk-pixbug2.0-dev

On Ubuntu these dependencies can be installed using the following command.
Please let me know if there is anything missing from the command.

```sh
sudo apt install -y libwayland-dev wayland-protocols \
    libxkbcommon-dev scdoc libcairo2-dev libgdk-pixbug2.0-dev
```

## Install
---

Need to build it now that the dependencies are installed. This is done using 
the meson command. 

```sh
meson build
```
Below is the output from the command.

```sh
The Meson build system
Version: 1.3.2
Source dir: /home/tloftus/Documents/thirdparty/swaylock-effects
Build dir: /home/tloftus/Documents/thirdparty/swaylock-effects/build
Build type: native build
Project name: swaylock
Project version: 1.6-4
C compiler for the host machine: cc (gcc 13.2.0 "cc (Ubuntu 13.2.0-23ubuntu4) 13.2.0")
C linker for the host machine: cc ld.bfd 2.42
Host machine cpu family: x86_64
Host machine cpu: x86_64
Compiler for C supports arguments -mtune=native: YES 
Found pkg-config: YES (/usr/bin/pkg-config) 1.8.1
Run-time dependency wayland-client found: YES 1.22.0
Run-time dependency wayland-protocols found: YES 1.34
Run-time dependency xkbcommon found: YES 1.6.0
Run-time dependency cairo found: YES 1.18.0
Run-time dependency gdk-pixbuf-2.0 found: YES 2.42.10
Run-time dependency bash-completion found: YES 2.11
Found CMake: /usr/bin/cmake (3.28.3)
Run-time dependency fish found: NO (tried pkgconfig and cmake)
Library pam found: NO
Library crypt found: YES
Library m found: YES
Library rt found: YES
Library dl found: YES
Program git found: YES (/usr/bin/git)
Program scdoc found: YES (/usr/bin/scdoc)
Program wayland-scanner found: YES (/usr/bin/wayland-scanner)
WARNING: You should add the boolean check kwarg to the run_command call.
         It currently defaults to false,
         but it will default to true in future releases of meson.
         See also: https://github.com/mesonbuild/meson/issues/9300
Configuring config.h using configuration
meson.build:170: WARNING: The swaylock binary must be setuid when compiled without libpam
meson.build:171: WARNING: You must do this manually post-install: chmod a+s /path/to/swaylock
Program sh found: YES (/usr/bin/sh)
Build targets in project: 3
NOTICE: Future-deprecated features used:
 * 0.55.0: {'ExternalProgram.path'}
 * 0.56.0: {'dependency.get_pkgconfig_variable'}

Found ninja-1.11.1 at /usr/bin/ninja
WARNING: Running the setup command as `meson [options]` instead of `meson setup [options]` is ambiguous and deprecated.
```

The following command will build and link the libraries.

```sh
ninja -C build
```

Below is the output from the command.

```sh
ninja: Entering directory `build'
[37/37] Linking target swaylock
```

Time to install the application. This is done using the ninja command.

```sh
sudo ninja -C build install
```

The build command takes the updated swaylock binary and puts it into the
/usr/local/bin directory and installs the man page.

```sh
ninja: Entering directory `build'
[0/1] Installing files.
Installing swaylock to /usr/local/bin
Installing swaylock.1 to /usr/local/share/man/man1
Installing /home/tloftus/Documents/thirdparty/swaylock-effects/pam/swaylock to /usr/local/etc/pam.d
Installing /home/tloftus/Documents/thirdparty/swaylock-effects/completions/zsh/_swaylock to /usr/local/share/zsh/site-functions
Installing /home/tloftus/Documents/thirdparty/swaylock-effects/completions/bash/swaylock to /usr/share/bash-completion/completions
Installing /home/tloftus/Documents/thirdparty/swaylock-effects/completions/fish/swaylock.fish to /usr/local/share/fish/vendor_completions.d
```

Ubuntu doesn't use PAM. So, a SUID needs to be set on swaylock for it to work
properly.

```sh
sudo chmod a+s /usr/local/bin/swaylock
```

## Configuration
---

Needed to set the lock variable with the new swaylock configuration. I'm using a
lot of the defaults here to add the screenshot, clock, blur effect, and the colors.
I updated the ring-color and the key-hl-color for some customization.

```sh
set $lock swaylock \
	--screenshots \
	--clock \
	--indicator \
	--indicator-radius 100 \
	--indicator-thickness 7 \
	--effect-blur 7x5 \
	--effect-vignette 0.5:0.5 \
	--ring-color 00aa00 \
	--key-hl-color 00d500 \
	--line-color 008000 \
	--inside-color 00000088 \
	--separator-color 00000000 \
	--grace 2 \
	--fade-in 0.2
```

Then I reload the Sway configuration and we're good to go. Issued the lock
command and it works. Though, it does take it a little time to register fully.
If you lock it. You have to let it sit for a little while before it fully takes.
