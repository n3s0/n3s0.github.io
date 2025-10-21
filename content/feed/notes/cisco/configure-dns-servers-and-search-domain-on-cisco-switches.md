---
title: "Configure DNS Server(s) & Search Domains For Name Resolution on Cisco Switches"
author: "Timothy Loftus (n3s0)"
date: "2022-07-06T14:37:18-05:00"
lastmod: 2025-10-10
description: "Notes for configuring DNS servers and search domains for name resolution on Cisco switches."
tags: [ "cisco" ]
draft: false
---

## Summary

Notes for configuring DNS servers and search domains for name resolution
on Cisco switches.

## Configure Search Domain

Connect to the console or login remotely to the switch using SSH. Go
into the configuration prompt using the following command.

```sh
configure terminal
```

Configure the domain name or search domain that will assist the switch
with resolving hosts in the domain it resides in. This is useful if full
name resolution is needed without having to type out the fully qualified
domain name for the device every time.

```sh
ip domain-name lab.example.org
```

## Configure DNS Server

Next I need to add the new name/DNS servers IP address to the switches
configuration. This is points to the server or device that hosts the DNS
services locally within the lab network so the switch can resolve names
to IP addresses.

```sh
ip name-server 192.168.1.51
```

Show the running configuration to confirm. Should be able to see the 
following. This provides the search domain and the DNS server.

```sh
!
ip domain-name lab.example.org
ip name-server 192.168.1.51
```

## Testing

Testing is always a good option. To test fully qualified domain name
resolution I decided to use the pint command and the full name of the
internal DNS server.

```sh
ping lab-inf-01.lab.example.org
```

Based on the output below. It looks like it resolves the name of the
server to the correct IP address. Then returns a successful pong.

```sh
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.0.100, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 1/4/11 ms
```

To test the configuration related to the search domain configuration I
just used the host name for the internal DNS server using ping.

```sh
ping lab-inf-01
```

Looks like this also resolved the correct name to it's respective IP
address and was able to reach it with no issue.

```sh
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.0.100, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 1/4/11 ms
```

Based on the test from the results above. Looks like everything is
working as expected.

## Saving Configuration

When that's configured, tested, and working. Copy the running 
configuration of the switch to the startup-config. If no one knows how 
to do this. There's a link for that.

- [Cisco Devices: Saving Running Config to Startup Config](https://info.n3s0.tech/2022/07/06/20220706143715)
