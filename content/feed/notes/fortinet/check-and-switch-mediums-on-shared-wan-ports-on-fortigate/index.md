---
title: "Check & Switch The Medium Of Shared WAN Ports On Fortigate"
date: 2026-02-12T08:30:27-06:00
lastmod: 2026-02-12
description: "Some commands to check and set the shared WAN port medium on a Fortigate."
draft: false
tags: ["fortinet"]
---

## Summary

I'm jotting down this note after experiencing an issue after upgrading to
FortiOS v7.4.8. The shared ports wouldn't detect the active port; which in this
case was the fiber medium. After troublshooting it. It seems as though it's a
bug where the active link isn't properly detected.

There are features provided within the FortiGate 80F & 90G linups that provide
shared ports on the WAN connections. This is to allow more options to be used
for certain service providers.

You could use a switch for this. Which would allow you more flexibility as to
how you configure your site. Basically, you would just get a switch and
configure a few VLANs on it for layer 2 between the firewall and your ISP
equiptment. But, we aren't talking about that right now. This discusses setup
between a FortiGate and the gear provided by the ISP.

## Affected Hardware & Software

Affected hardware to note for this are the following. These are the models that
I've tested with so far. I will update the list for this FortiOS version as I
find more.

### Hardware

- Fortinet FortiGate 80F-POE

### Firmware

- FortiOS v7.4.8

## Get Current Configuration For WAN Ports

Before attempting to change configuration manually. It's always good to check on
it first. Provided are some examples intended to check the currently
configuration. If they aren't correct. It would be prudent to use the next
section to switch it over to the intended medium on the correct port.

Here is a syntax for obtaining the configuration for any given shared-port. The
interface portion of this would be where one would put the interface name. (e.g.
wan1 or wan2)

```sh
diagnose hardware shared-port [INTERFACE]
```

The example below would get the shared-port configuration for the wan1
interface.

```sh
diagnose hardware shared-port wan1
```

Below is the output of the command. In this case wan1 is set to the Copper
medium.

```sh
Get nic name: wan1 medium type 1, Copper
```

This example shows how to get the shared-port configuration for wan2 interface.

```sh
diagnose hardware shared-port wan2
```

The output shows that in this particular case the medium type is set to Fiber.

```sh
Get nic name: wan2 medium type 1, Fiber
```

## Switching Mediums On Shared WAN Ports

To resolve the issue where the mediums don't switch over. There is a diagnostic
command available allowing a manual change that doesn't persist across reboots.
I have a workaround for this in another note so that it does. But, I would like
to post the command used to perform the manual switch so if anyone else runs
into this issue. They have a command available to get things back up and
running.

Here is a template of the command that can be used. This can be used on the WAN
port that's shared with an SFP module. The only other options are copper and
fiber.

```sh
diagnose hardware shared-ports [INTERFACE] [MEDIUM]
```

This example will set the shared-port configuration for wan1 to fiber.

```sh
diagnose hardware shared-port wan1 copper
```

Below is the output from the command. It is setting the wan1 interface to
Copper in this example.

```sh
Set nic name: wan1 medium type 2, Copper
```

The following command will set the shared-port wan2 to fiber.

```sh
diagnose hardware shared-port wan2 fiber
```

Below is the output that will normally show when this has been set.

```sh
Set nic name: wan2 medium type 1, Fiber
```

## Closing Notes

In this note I discuss a recent issue I've come accross on FortiGate 80F-POE
after upgrading to FortiOS v7.4.8. Provided are the dianostic commands to check
what medium is configured on shared ports. Provided are also commands that
manually set those mediums to copper or fiber.
