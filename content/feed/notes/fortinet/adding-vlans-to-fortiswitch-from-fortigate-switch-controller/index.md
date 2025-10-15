---
title: "Configuring VLANs On FortiSwitch Port From FortiGate"
author: "Timothy Loftus (n3s0)"
date: 2025-10-15T00:25:27-06:00
lastmod: 2025-10-15
description: "Notes on configuring VLANs on FortiSwitch ports from FortiGate using cli."
cover: "gnarly-switch-rack.png"
draft: false
tags: ["fortinet"]
---

## Overview

This is one of those things I have to do every day that I wanted to add to this
site. There is the quick and easy way; through the GUI, and cli way. Both of
which are pretty easy. 

In this post I'm going to focus on configuring VLANs on a FortiSwitch port from 
a FortiGate firewall. With the Fortinet networking stack you can FortiCombine
firewalls, switches, APs, etc. under the FortiGate. Over a Fortilink "LAG"
interface you trunk your VLANs to that interface and set *Native* and *Allowed*
VLANs to each individual port.

*Native VLANs* in Fortiland are a default VLAN for untagged incoming frames. On
Native VLANs we're limited to one per port. I use this VLAN option fist for 
things like mgmt and data traffic.

*Allowed VLANs* in Fortiland are a list of VLAN tag values of which the port can
rx/tx frames. I generally use this for voice, guest, wireless, etc. networks
when needed. But, if I don't need them. I don't use them. I'll stick with the
Native VLAN and go about my day.

Only annoying part of this is when the quarentine VLAN starts populating in your
list and have to remove it. In some cases it means nothing. In other instances;
its even more annoying. (Little rant... Sorry...)

## Configuring Native & Allowed VLAN

To configure both VLANs you need to go into managed-switch config in the
switch controller of the FortiGate. Then select your port and in the ports
config. Then set the *vlan* and *allowed-vlans* options to your desired VLANs.

This particular example is intended for a desk port with a desk phone.

I would also like to note that in FortiLand the name of the VLAN is used. Unlike
Cisco a name is required for the VLAN. 

```sh
config switch-controller managed-switch
    edit LAB01-CSW-01
        config ports
            edit "port4"
                set vlan "Data"
                set allowed-vlans "Voice"
            next
        end
    next
end
```

This configuration is for a wireless access points. This provides a great
example of configuring multiple *Allowed VLANs* on a FortiSwitch. This will pass
traffic however the Wireless and the Untrsted VLANs are configured.

One little tidbit I would like to note is the LLDP profile on the FortiSwitch.
This will create an Inter-Switch Link (ISL) or trunk between the access point
and the FortiSwitch because the auto-isl option is enabled on this profile.
Along with a few other things.

The default LLDP profile however will have this disabled. Which is useful if
your configuring ports that don't require ISL. Like a printer, UPS, or gaming
console.

```sh
config switch-controller managed-switch
    edit LAB01-CSW-01
        config ports
            edit "port24"
                set vlan "net-mgmt"
                set allowed-vlans "Wireless" "Untrusted"
                set lldp-profile "default-auto-isl"
            next
        end
    next
end
```

## Conclusion

Those are some tidbits on how to configure *Native VLANs* and *Allowed VLANs* on
FortiSwitches tied to a FortiGate. Along with some tidbits on how they're
supposed to work. I hope this was helpful to you and if you have any questions.
Feel free to reach out.

Have a wonderful day/night and don't forget to put meaningful comments on your
firewall rules.

