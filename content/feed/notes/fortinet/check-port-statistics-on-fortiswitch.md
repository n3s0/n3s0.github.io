---
title: "Fortinet: Check Port Statistics On FortiSwitch"
date: 2025-01-07T01:41:27-06:00
summary: "Notes for checking port statistics on FortiSwitch ports."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: [ "netadmin"  ]
---

## Summary
---

I have found myself checking port statistics a lot so I decided to notate the
commands for doing this from a FortiGate.

This can be useful for confirming port errors, port discards, and for checking
the traffic load on the port.

## Command
---

The following command will obtain the port statistics for a port on the
appropriate switch. Replace the switch-id section with the ID of the switch and
the port number with the appropriate port number. (i.g. port24)

```sh
diagnose switch-controller switch-info port-stats <switch-id> port<port-number>
```

Similar output will be provided as shown below. It may differ for many reasons.

```sh
Vdom: root

<switch-id>:
Port(port24) is HW Admin up, SW Admin up, line protocol is up
Interface Type is Serial Gigabit Media Independent Interface(SGMII/SerDes)
Address is <switch-mac-address>, None loopback
MTU 9216 bytes, Encapsulation IEEE 802.3/Ethernet-II
full-duplex, 1000 Mb/s, link type is auto
input  : 6489789458 bytes, 5751948 packets, 0 errors, 111 drops, 0 oversizes
         5749451 unicasts, 0 multicasts, 2497 broadcasts, 0 unknowns
output : 739024286 bytes, 3024233 packets, 0 errors, 0 drops, 0 oversizes
         2943743 unicasts, 79800 multicasts, 690 broadcasts
0 fragments, 0 undersizes, 0 collisions, 0 jabbers

```

Provided in the output is the following information related to the port. This is
just a brief overview for what the items mean.

- VDOM
- Port
- Hardware status (up/down)
- Software status (up/down)
- Line status (up/down)
- Interface type
- MAC address for the port
- MTU bytes, encapsulation protocol
- Negotiated speed (10/100/1000 Mb/s) with the link type.
- Input/Output
    - Bytes: Bytes in/out of the interface.
    - Packets: Number of packets in/out of the interface.
    - Errors: In/Out errors on the interface.
    - Drops
    - Oversizes
    - Unicasts
    - Multicasts
    - Broadcasts
    - Unknown
- Fragments
- Undersizes
- Collisions
- Jabbers
