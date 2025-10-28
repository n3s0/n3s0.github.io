---
title: "Configure A Static IP Address On FortiGate Interface"
author: "Timothy Loftus (n3s0)"
date: 2025-10-27T00:25:27-06:00
lastmod: 2025-10-27
description: "Notes for configuring a static IP address on a Fortigate interface."
draft: false
tags: ["fortinet"]
---

## Overview

I will provide the configuration necessary to configure a static IP address on a
FortiGate interface. Part of this entails the discussion of interface roles and
what you can use them for.

## Discussion On Interface Roles

Fortinet uses interface roles to categorize the usecase for an interface and
determines how it handles security policy and traffic based on that.

- **LAN:** Used to connect to a local/private network of endpoints. (Default
  role for new interfaces.)
- **WAN:** Used to connect to the Internet. In FortiOS 7.4.8, when **WAN** is
  selected. The *Estimated Bandwidth* setting is available. But, the following are
  not:
    - DHCP server
    - Create address object matching subnet.
    - Device detection.
    - Security mode.
    - One-arm sniffer
    - Dedicate to extension/fortiap modes
    - Admission Control
- **DMZ:** This is used to connect to the DMZ. When selected the following are
  not available:
    - DHCP Server
    - Security Mode
- **Undefined:** Interface has no role. The following are not available when
  this option is selected:
    - Create address object matching subnet.

## Configuring WAN Interfaces

Configuring WAN interfaces with a static IP on FortiOS is pretty seamless. 
Generally when you sign up for Internet service categorized for business you 
can request a static IP address for extra cost.

The code block below will update the public IP and subnet provided by an example
vendor. The IP address needs to be configured with the `wan` role with the `set
ip` command containing the pulic IP and the subnet mask. CIDR notatation can
also be used `203.0.113.1/31`.

```yaml
config system interface
    edit wan1
        set ip 203.0.113.1 255.255.255.254
        set role wan
    next
end
```

This should be the output from the show command ran from that interface. This
will provide all of the brief information for the interface. But, for a more
detailed list of configuration on the interface. Use the `show
full-configuration` command.

```yaml
config system interface
    edit "wan1"
        set vdom "root"
        set ip 203.0.113.1 255.255.255.254
        set type physical
        set role wan
        set snmp-index 1
    next
end
```

This interface will not; probably should not, have the same features as a 
[LAN interface](##discussion-on-interface-roles). It will probably be NATed as
well.

> Note: With static IP addresses it's good to set the <cite>static route[^1]</cite> 
> or default route. For WAN interfaces the default gateway for that network 
> is/should be provided by the ISP the public IP was purchased from.

[^1]: A note was written on configuring static routes; dedicated to FortiOS,
    [somewhere](/feed/notes/fortinet/create-static-routes-using-cli-on-fortios/) 
    in the archives of this site. Hopefully it provides more context on this
    topic.

You can even configure private IP addresses on interfaces with the WAN role
assigned to them.

## Configuring LAN Interfaces

LAN interfaces are generally isolated to private traffic housed behind a NAT.
Depending on your use case, you can also use LAN interfaces between firewalls as
well. 

Since I'm not going into depth on interface types in FortiOS. I will only
provide a brief explaination.

There a few LAN interface types associated to the LAN role that I use.
*Physical* interface and *VLAN*. Although, *VLAN* can be used for WAN roles if you're
working with different requirements.

I won't be discussing the *physical* interface type in this post. Only *VLAN*.
Although, I do intend to write a note providing the different interface types
down the road.

Below we're updating a *VLAN* named lab-inf with the IP address and subnet. The
role LAN has been assigned to it. We are tying this to a few DHCP relays within
the lab network so the `dhcp-relay-ip` values are listed as well. Just because I
trust this network a little more. Device detection and ping is allowed on this
interface.

```yaml
config system interface
    edit "lab-inf"
        set dhcp-relay-service enable
        set ip 10.11.0.1 255.255.255.0
        set allowaccess ping
        set device-identification enable
        set role lan
        set dhcp-relay-ip "10.11.0.11 10.11.0.12"
        set interface "fortilink"
        set vlanid 100
    next
end
```

Below would be the output for the show command after configuring the interface.

```yaml
config system interface
    edit "lab-inf"
        set vdom "root"
        set dhcp-relay-service enable
        set ip 10.11.0.0 255.255.255.0
        set allowaccess ping
        set device-identification enable
        set role lan
        set snmp-index 18
        set switch-controller-access-vlan enable
        set switch-controller-dhcp-snooping enable
        set color 18
        set dhcp-relay-ip "10.11.0.11 10.11.0.12"
        set interface "fortilink"
        set vlanid 100
    next
end
```

Depending on your routing. Either configure a static route to send the network
traffic out or you can setup BGP or OSPF to handle your internal routing
dynamically. These are strong choices because you don't have to go to multiple
sites and add a route manually in every location.

## Conclusion 

This note; although lengthy, discusses some ways to set a static IP on
interfaces that are either private or public. Not all settings are required and
scenarios are limited to your use case.

If there is a usecase you would like to see. Please reach out using the
information on the [contact](/contact) page.
