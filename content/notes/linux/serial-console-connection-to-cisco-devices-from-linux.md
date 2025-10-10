---
title: "Console Serial Connections To Cisco Devices On Nix"
date: 2022-12-09T19:57:04-06:00
lastmod: 2025-10-10
author: "Timtohy Loftus (n3s0)"
description: "Notes for connecting to Cisco console/serial ports on Linux."
draft: false
tags: [ "Cisco", "Linux", "Console" ]
---

## Summary

This is just some notes for connecting to the console port on Linux.
This is a running post where I will be adding new methods for connecting
to the console port on Cisco devices or any device that supports a
serial console.

## Finding The Console Port

Finding the console port is pretty easy. But, I'm going to list it here
just for reference.

```sh
sudo dmesg | grep -i tty
```

The output should look something like this.

```sh
[    0.168530] printk: console [tty0] enabled
[    0.790340] 0000:00:16.3: ttyS4 at I/O 0x3060 (irq = 19, base_baud = 115200) is a 16550A
[   14.803912] usb 1-2: pl2303 converter now attached to ttyUSB0
[   34.143924] Bluetooth: RFCOMM TTY layer initialized
```

## Connecting With screen(1)

Going to go through some methods for connecting, disconnecting, and
detaching while using the screen(1) command.

Connect just using the TTY device.

```sh
sudo screen <tty device>
```

In this example. It would be the following command based on the output
from dmesg(1). This will connect the screen console to ttyUSB0.

```sh
sudo screen /dev/ttyUSB0
```

Terminate the session while connected.

- ```Ctrl + A``` and then ```K```.

Detach from a session so it can be restored later.

- ```Ctrl + A``` and then ```D```.

To look for detached sessions. The following command can be used.

```sh
sudo screen -ls
```

Below is the ouput for this command. It shows that there is a screen(1)
session that's detached.

```sh
There is a screen on:
	6600.pts-2.rubik	(12/09/2022 07:59:27 PM)	(Detached)
1 Socket in /run/screen/S-root.
```

To attach back to the screen name. The following command can be used.
One thing to think about. If there are multiple sessions open. The
```-x``` flag needs to have a unique value.

```sh
sudo screen -x 6600
```

These are just some notes for using screen(1) to connect to serial
interfaces.
