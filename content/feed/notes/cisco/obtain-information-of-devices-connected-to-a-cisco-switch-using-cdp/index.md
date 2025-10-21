---
title: 'Obtain Information Of Devices Connected To A Cisco Switch Using CDP'
author: "Timothy Loftus (n3s0)"
date: 2025-10-21T08:50:01+06:00
cover: '/img/network/managed-switch.png'
lastmod: 2025-10-21
summary: "Notes on obtaining a list of connected devices using CDP neighbors on a Cisco Switch."
draft: false
tags: ["cisco"]
---

## Summary

Cisco Discovery Protocol (CDP) is one of those propriatary protocols developed
by Cisco to make finding devices easier. Think of it as LLDP but with a Cisco
bow. With more features and the like. It definately provides more data;
especially if you're in mixed environments. 

As much as I don't like propriatary protocols. In reletively mixed environments.
You cannot deny how valuable CDP is on a Cisco devices. It provides a wealth of
information from the hostname, local port, report port, platform, etc. As far as
finding something on the network is concerned. CDP does a good job at spoiling
you.
 
CDP can be useful when you're attempting to narrow down what device is
connected to what port on your switch or switch stack. Taking away a lot of the
guess work about where things are.

Here I'm going to discuss a little about <abbr title="Cisco Discovery Protocol">
CDP</abbr> and the commands on Cisco switches available to account for the devices 
connected to them.

> Note: The show command for querying the data CDP provides has more options
> available. In this note I'm just going over connected devices. But, there are
> a number of ways someone troubleshooting can query the data CDP discovers.

## What is CDP?

<abbr title="Cisco Discovery Protocol">CDP</abbr> is a propriatary Layer 2
protocol developed by Cisco that can be used to discover and exchange
information about connected Cisco devices and devices from other vendors. It
discovers a lot of useful information about the devices connected to Cisco
devices and is a useful troubleshooting command in a pinch.

I will go through Cisco Discovery Protocol in more detail in another article. 
This is just here to provide the gist.

## Obtain CDP Neighbors Summary

Cisco provides a couple ways to obtain the information being advertised from
CDP on the various devices on your network.

The following command will display a list/summary of the devices. This is one
I'll use the most when I don't know where something is. Whether that be when I'm
provided the wrong port or the like. When you find the device connected. You can
continue with what you're doing. (Troubleshooting, configuring, etc.)

```sh
show cdp neighbors
```

This command outputs information like the device ID/hostname, local interface,
hold time, device capability, remote device platform, and the remote device
port.

In this case there is another Cisco switch and a FortiAP.

```sh
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
LAB01-WAP-01     Gig 1/0/30        107              S H   FortiAP-U eth2
LAB01-CSW-01     Ten 1/1/50        135              S I   C9300     Ten 1/1/50

Total cdp entries displayed : 2

```

## Neighbors On Specified Ports

Checking a specified port is also possible using the following command. This
will just give you a summary of the device ID, switch interface, etc.

```sh
show cdp neighbors GigabitEthernet 1/0/30
```

You can also append ```detail``` at the end of the command and obtain the
neighbor details of a specific port. Output looks the same as the output in
[Getting More Detail](#getting-more-detail).

Here is an example of what the command looks like.

```sh
show cdp neighbors GigabitEthernet 1/0/30 detail
```

Now back to the command we're currently on.

This will show a general overview of the generalized but useful information
needed to find LAB01-WAP-01. If you needed to find more information about what
it's supposed to be advertising. The ```detail``` option can be appended at the
end of the command as shown above.

In this case it shows you everything explained in 
[Obtain Neighbors CDP Summary](#obtain-cdp-neighbors-summary). It's just
showing the information from a specified port. This will show you the device ID,
local switch interface, capability, remote device platform, and remote device
port id.

```sh
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
LAB01-WAP-01     Gig 1/0/30        94                H    Linux     eth0

Total cdp entries displayed : 1
```

## Getting More Detail

More detailed information can be obtained by adding ```detail``` at the end of
the command. This is intended to provide information about the port description,
system name, system capabilities, local switch interface, etc.

This will provide a list of all the neighbor details.

```sh
show cdp neighbors detail
```

This provides a more detailed view of the listed devices. This will provide the
device id, IP address, platform, capabilities, local switch port, remote switch
port, hold time, and platform OS version.

> Note: I have redacted some of the information provided for OpSec purposes. I
> don't intend on having a bunch of information provided of my lab.

```sh
-------------------------
Device ID: LAB01-WAP-01
Entry address(es):
  IP address: 172.16.100.68
Platform: FortiAP-UXXXX,  Capabilities: Switch Host
Interface: GigabitEthernet1/0/30,  Port ID (outgoing port): eth2
Holdtime : 99 sec

Version : REDACTED

advertisement version: 2

...
```

## Conclusion

The <abbr title="Cisco Discovery Protocol">CDP</abbr> has helped me more times
then I can count. With ever changing environments. To documentation slipages.
This can make a world of difference while troubleshooting different issues.

In this article I discuss ways you can list the information CDP discovers for
the sake of troubleshooting. Although this is not an extensive list of all of
it's capabilities. This is a good start for what it's used for.

