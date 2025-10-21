---
title: 'Obtain Information Of Devices Connected To A Cisco Switch Using LLDP'
author: "Timothy Loftus (n3s0)"
date: 2025-10-21T08:49:01+06:00
cover: '/img/network/switch-rack-cables.png'
lastmod: 2025-10-21
summary: "Notes on obtaining a list of connected devices using LLDP on a Cisco Switch."
draft: false
tags: ["cisco"]
---

## Summary

If you are using Link Layer Discovery Protocol (LLDP) on your network. Cisco has
a few useful commands available to show you what devices are connected to your
switches.

This can be useful when you're attempting to narrow down what device is
connected to what port on your switch or switch stack. Taking away a lot of the
guess work about where things are.

Here I'm going to discuss a little about <abbr title="Link Layer Discovery Protocol">
LLDP</abbr> and the commands on Cisco switches available to account for the devices 
connected to them. I will not be discussing <abbr title="Cisco Discovery Protocol">
CDP</abbr>. That will be in another article separate from this.

## What is LLDP?

<abbr title="Link Layer Discovery Protocol">LLDP</abbr> is a vendor-neutral link
layer protocol network devices use to advertise their identity, purpose, and
neighbors on a LAN network. Think of it as a communiative team mate that lets
you know who they are and where they are most of the time.

I will go through Link Layer Discovery Protocol in more detail in another
article. This is just here to provide the gist.

## Obtain LLDP Neighbors Summary

Cisco provides a couple ways to obtain the information being advertised from
LLDP on the various devices on your network.

The following command will display a list/summary of the devices. This is one
I'll use the most when I don't know where something is. Whether that be when I'm
provided the wrong port or the like. When you find the device connected. You can
continue with what you're doing. (Troubleshooting, configuring, etc.)

```sh
show lldp neighbors
```

This will display a list of devices with their device ID, switch/local
interface, hold time, the capability of those devices and the port ID.

In this case there is a desk phone, switch, access point, and a VM server.

Port ID has been redacted with random information.

```sh
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
LAB01-VM-02         Gi1/0/15       3601                       001A.2B3C.4D5E
LAB01-PHONE-01      Gi1/0/30       3601       T               001A.2B3C.4D6E
LAB01-ASW-01        Gi1/0/10       120        S               001A.2B3C.4D7E
LAB01-WAP-01        Gi1/0/23       120        B,W             001A.2B3C.4D8E

Total entries displayed: 4

```

## Neighbors On Specified Ports

Checking a specified port is also possible using the following command. This
will just give you a summary of the device ID, switch interface, etc.

```sh
show lldp neighbors GigabitEthernet 1/0/30
```

You can also append ```detail``` at the end of the command and obtain the
neighbor details of a specific port. Output looks the same as the output in
[Getting More Detail](#getting-more-detail).

Here is an example of what the command looks like.

```sh
show lldp neighbors GigabitEthernet 1/0/30 detail
```

Now back to the command we're currently on.

This will show a general overview of the generalized but useful information
needed to find LAB01-PHONE-01. If you needed to find more information about what
it's supposed to be advertising. The ```detail``` option can be appended at the
end of the command as shown above.

In this case it shows you everything explained in 
[Obtain Neighbors LLDP Summary](#obtain-lldp-neighbors-summary). It's just
showing the information from a specified port. This will show you the device ID,
local switch interface, capability, and port ID.

```sh
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
LAB01-PHONE-01      Gi1/0/30       3601       T               001A.2B3C.4D6E

Total entries displayed: 1

```

## Getting More Detail

More detailed information can be obtained by adding ```detail``` at the end of
the command. This is intended to provide information about the port description,
system name, system capabilities, local switch interface, etc.

This will provide a list of all the neighbor details.

```sh
show lldp neighbors detail
```

This I can see would be useful if you needed to perform an audit of the MED
(Media Endpoint Devices) information. Which can be very useful for things like
inventory management and informing local police, EMT, or fire departments of the
desk ID something is located at.

Another thing this would be useful of is putting the patch panel ID; which I
honestly just thought of and might actually implement. Normally the user just
sees the patch panel ID of the cable run and nothing else. So, looking this up
would be an awesome way of managing this. Only pitfall to this is managing it
would have a lot of administrator overhead. Not to mention. In the wrong hands.
This information could pose a security risk. So good OpSec would need to be
employed to protect the identity of the individual connected to that port.

```sh
------------------------------------------------
Local Intf: Gi1/0/15
Chassis id: LAB01-VM-02
Port id: 001A.2B3C.4D5E
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3579 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities:
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised
...
```

## Conclusion

With all that being said. That concludes this article for now. This article
discussed the use of LLDP to make tracking down devices connected to a Cisco
Switch easier. Along with all of the information provided by LLDP related to the
ports found and what those devices are.

I also coined at the idea of making this a little more verbose with LLDP-MED.
So, expect some more articles on that.

