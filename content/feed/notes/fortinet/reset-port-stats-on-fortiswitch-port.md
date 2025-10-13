---
title: "Fortinet: Reset & Restore Port Statistics On FortiSwitch"
date: 2025-01-07T02:41:27-06:00
summary: "Notes for resetting and restoring port statistics on FortiSwitch ports."
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

Sometimes there may be a need to reset the port statistics on a specific port
just to set the counters back to zero. This can be useful for devices that have
a high uptime. So you're not troubleshooting something you've already
troubleshooted and to establish baselines for monitoring traffic.

Note that these notes aren't for standalone FortiSwitches. But, for
FortiSwitches attached to a FortiGate as the switch controller.

As shown in the output from the command below. Looks like there are input drops
on the port. But, we don't know if that has been resolved since we looked at it.
So, to get a baseline. We reset the port stats for the port. Just to see how
much it increases in the coming days to weeks.

```sh
<switch-id>:
Port(port8) is HW Admin up, SW Admin up, line protocol is up
Interface Type is Serial Gigabit Media Independent Interface(SGMII/SerDes)
Address is <MAC address>, None loopback
MTU 9216 bytes, Encapsulation IEEE 802.3/Ethernet-II
full-duplex, 1000 Mb/s, link type is auto
input  : 1652402008595 bytes, 1499257542 packets, 0 errors, 223 drops, 0 oversizes
         1480439467 unicasts, 10027752 multicasts, 8790323 broadcasts, 0 unknowns
output : 176932779990 bytes, 503655067 packets, 0 errors, 0 drops, 0 oversizes
         494345011 unicasts, 1818382 multicasts, 7491674 broadcasts
0 fragments, 0 undersizes, 0 collisions, 0 jabbers
```

## Reset Port Statistics
---

To reset this using the commandline. The following command can be entered on the
FortiGate.

```sh
diagnose switch-controller trigger reset-hardware-counters <switch-id> port<port-number>
```

With that being run. It should bring all of the errors, drops, etc. down to
zero.

```sh
<switch-id>:
Port(port8) is HW Admin up, SW Admin up, line protocol is up
Interface Type is Serial Gigabit Media Independent Interface(SGMII/SerDes)
Address is <MAC Address>, None loopback
MTU 9216 bytes, Encapsulation IEEE 802.3/Ethernet-II
full-duplex, 1000 Mb/s, link type is auto
input  : 46404834 bytes, 35582 packets, 0 errors, 0 drops, 0 oversizes
         35540 unicasts, 22 multicasts, 20 broadcasts, 0 unknowns
output : 1395708 bytes, 5937 packets, 0 errors, 0 drops, 0 oversizes
         5551 unicasts, 6 multicasts, 380 broadcasts
0 fragments, 0 undersizes, 0 collisions, 0 jabbers
```

## Restore Port Statistics
---

Below is the command that can be used to restore the hardware counters to the
switch.

```sh
diagnose switch-controller trigger restore-hardware-counters <switch-id> port<port-number>
```

As shown below. The output has been restored to the old statistics.

```sh
<switch-id>:
Port(port8) is HW Admin up, SW Admin up, line protocol is up
Interface Type is Serial Gigabit Media Independent Interface(SGMII/SerDes)
Address is <MAC Address>, None loopback
MTU 9216 bytes, Encapsulation IEEE 802.3/Ethernet-II
full-duplex, 1000 Mb/s, link type is auto
input  : 1652402008595 bytes, 1499257542 packets, 0 errors, 223 drops, 0 oversizes
         1480439467 unicasts, 10027752 multicasts, 8790323 broadcasts, 0 unknowns
output : 176932779990 bytes, 503655067 packets, 0 errors, 0 drops, 0 oversizes
         494345011 unicasts, 1818382 multicasts, 7491674 broadcasts
0 fragments, 0 undersizes, 0 collisions, 0 jabbers
```
