---
title: "FortiGate Troubleshooting Cheetsheet"
author: "Timothy Loftus (n3s0)"
date: 2023-11-14T00:25:27-06:00
lastmod: 2025-11-14
description: "My personal FortiGate troubleshooting cheetsheet."
draft: false
tags: ["fortinet"]
---

## Overview

Why build a cheetsheet?

Cheetsheets are good to come back to when you're in the thick of
troubleshooting. Here I will be providing commands that have helped me
throughout the years of working with FortiGate firewalls and where these
commands can be useful.

This is document is meant to be updated frequently as the need arises.

## Memory Conserve Mode

I go over some troubleshooting tid-bits that are still relevant today related to
Conserve Mode. Link can be found below.

- [Fortinet: Some System Troubleshooting Tid-bits](/feed/notes/fortinet/system-troubleshooting-tidbits-fortigate/)

Memory Conserve Mode is a feature on FortiGate firewalls where if memory hits a
certain threshold. Through this it gives us some breathing room to assess what
processes that could be taking up so much memory. If caught within the first
stage of this. It might put a cap on network traffic. But, it will allow access
to the management GUI.

## General Look

Some of the commands that can be used to get a brief review of the state of the
system.

Show system information.

```sh
get system status
```

Show the current system time.

```sh
execute time
```

Show CPU and memory utilization.

```sh
get system performance status
```

## List of Processes On FortiGates

Here is a list of processes on FortiGates and what they do.

- [FortiGate Processes & Services List](#)

## Getting CPU Usage

These commands are useful for aquiring CPU usage on FortiGate firewalls.

Get an overview of the CPU usage on a FortiGate in real time.

```sh
diagnose sys top
```

## Getting Memory Usage

These commands are useful for aquiring memory usage on FortiGate firewalls.

Get a detailed memory breakdown of memory usage.

```sh
diagnose hardware sysinfo memory
```

Get the processes using memory in realtime. (Press `SHIFT`+`M` to look at
memory.)

```sh
diagnose sys top
```

Get the top 10 processes consuming memory on the FortiGate.

```sh
diagnose sys top-mem 10
```

## For Fortinet Support Cases

Generate a TAC report used to open a ticket with Fortinet Support.

```sh
execute tac report
```

Show system and application crashes.

```sh
diagnose debug crashlog read
```

## Restarting A Service

In the event that you need to restart a service on a FortiGate. Here are some
useful commands.

Restarting the wireless controller daemon.

```sh
execute wireless-controller restart-acd
```

Restarting the IPS Engine Service.

```sh
diagnose test application ipsmonitor 99
```

## Rebooting 

Sometimes the only option is to reboot the FortiGate. After saying `[y]es` to
the prompt. The firewall will reboot.

```sh
execute reboot
```


