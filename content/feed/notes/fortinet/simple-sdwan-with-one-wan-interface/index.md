---
title: "Simple SD-WAN Setup With One WAN Interface"
date: 2026-02-12T08:30:27-06:00
lastmod: 2026-02-12
description: "Simple SD-WAN setup with one WAN interface on Fortigate."
draft: true
tags: ["fortinet"]
---

## Summary

I'm going to walk through setting up a simple single WAN interface SD-WAN setup.
This is going to use the defaults already available. I will go over some of the
default rules and performance SLAs for this as well.

Some other benefits is the ability to move WAN links around easily without
running into many roadblocks.

In this note I'll stick to the default `Source IP` load balancing alorithm.
Which is where traffic is divided equally between SD-WAN members. Sessions that
start at the same source address will use the same route.

In this scenario. The ISP gave us the following IP address and gateway to setup.

- IP Address: 93.184.216.0/24
- Subnet Mask: 255.255.255.0
- Gateway: 93.184.216.1

Note that these are just examples. They do not represent any production
environment.

## CLI Configuration

Generally; unless needed otherwise, I'll stick with the default SD-WAN
configuration on Fortigate firewalls. With the exception of adding interfaces as
members. It's important to remember that before proceeding the interface(s)
intended to act as a zone member(s) cannot be apart of any existing rules. So
it's not prudent to configure this outside of a maintenance window.

SD-WAN is enabled by default on Fortigates. But, for whatever reason if it
doesn't show up in the GUI at `Network > SD-WAN`. It can be enabled by going to
`System > Feature Visibility` and turning on `SD-WAN Interface`.

I'll be showing the configuration for the commandline. But, down the road I may
provide one for GUI configuration.

Another good thing to check is to see if SD-WAN is actually enabled in the CLI.
This can be done by showing it with the following command.

```sh
get system sdwan
```

The output should look something like this. Which really just shows the default
configuration for SD-WAN.

```sh
status              : enable 
load-balance-mode   : source-ip-based 
speedtest-bypass-routing: disable 
duplication-max-num : 2
neighbor-hold-down  : disable 
neighbor-hold-down-time: 0
app-perf-log-period : 0
neighbor-hold-boot-time: 0
fail-detect         : disable 
zone:
    == [ virtual-wan-link ]
    name:     virtual-wan-link   
members:
health-check:
    == [ Default_DNS ]
    name:     Default_DNS   
    == [ Default_Office_365 ]
    name:     Default_Office_365   
    == [ Default_Gmail ]
    name:     Default_Gmail   
    == [ Default_Google Search ]
    name:     Default_Google Search   
    == [ Default_FortiGuard ]
    name:     Default_FortiGuard   
service:
neighbor:
duplication:
```

### Setup WAN Interfaces

Starting with the interface configuration of the WAN interfaces. Below is an
example of how to setup the WAN interface.

Using the IP address information shown in the summary. I set the IP address and
subnet for the interface. I also provide an alias for the interface. This makes
identifying the interface more user friendly for firewall policy.

Naming scheme for this is usually `[ISP]-[CIRCUIT TYPE]-[CIRCUIT COUNT]`. So I
know exactly what circuit I'm touching at the time.

Sometimes. If I'm troubleshooting I'll enable lldp-reception on the interface so
I can get some data on what I'm plugged into. If provided.

```sh
config system interface
    edit "wan1"
        set vdom "root"
        set ip 93.184.216.55 255.255.255.0
        set type physical
        set alias "[ISP]-[CIRCUIT TYPE]-[CIRCUIT NUMBER]"
        set role wan
        set snmp-index 1
    next
end
```

### Configure SD-WAN Member

There is already a default SD-WAN zone named `virtual-wan-link` available. So,
that is what I will use. But, the WAN2 interface needs to be added to the SD-WAN
configuration as an SD-WAN member.

As long as there are no other members `edit 1` can be used. If a new one is
being created. It's recommended to use `edit 0` so it will increment SD-WAN
members to the members config.

With member 1 being created I did the following.

- Set the interfaces as wan1
- Set the zone to `virtual-wan-link` (This is not visable without using `show
  full-configuration`)
- Set the gateway to my ISPs gateway.
- Set the command to the alias of the wan1 interface.

With all that being said. Here is the CLI configuration for this.

```sh
config system sdwan
    config members
        edit 1
            set interfaces "wan1"
            set zone "virtual-wan-link"
            set gateway 93.184.216.1
            set comment "[ISP]-[CIRCUIT TYPE]-[CIRCUIT NUMBER]"
        next
    end
end
```

### Configure Static Route

A default static route is required for this. This can be done by entering the
following configuration. This is a little different then your typical static
route on a Fortigate. This will focus primarily on allowing the SD-WAN zone to
govern what the default gateway for traffic is used.

```sh
config router static
    edit 1
        set distance 1
        set sdwan-zone "virtual-wan-link"
    next
end
```

### Configure Firewall Policy

Firewall policy will use the `virtual-wan-link` interface as the outgoing
interface for traffic on the network. This is generally the bare minimum we can
enable for this.

```sh
config firewall policy
    edit 2
        set srcintf "trusted"
        set dstintf "virtual-wan-link"
        set srcaddr "trusted subnets"
        set dstaddr "all"
        set schedule "always"
        set service "Web Access"
        set logtraffic all
        set comments "Permit trusted subnets to Internet"
    next
end
```

### Troubleshooting

Thought I would provide a few troubleshooting steps to confirm this is
configured properly.

The following diagnose command will confirm the SD-WAN members.

```sh
diagnose sys sdwan member
```

Below is the output from the command. It shows the SD-WAN member with it's IP
address and the gateway.

```sh
Member(1): transport-group: 0, interface: wan1, flags=0x0 , gateway: 93.184.216.1, source 93.184.216.55, priority: 1 1024, weight: 0
```

