---
title: "Ubuntu Linux Crisis & General Troubleshooting Tools"
author: "Timothy Loftus (n3s0)"
date: 2024-03-28T12:20:02-05:00
lastmod: 2025-10-12
summary: "List of tools used for troubleshooting."
draft: false
tags: ["netadmin", "code"]
---

## Summary
---

Thought I'd put together a list of Linux tools based on different
criterias. The idea for this came from Brendan Gregg who just published
a post; which is in the Reference, related to installing certain tools
preferably before an outage occurs. I will utilize much of that list for
this one.

This post is specifically geared toward Ubuntu Server and will be
updated regularly as time goes on. Included will be the command used to
install the packages listed in this.

## Crisis
---

| Package | Provides | Notes |
|--------|----------|--------|
| procps | ps(1), vmstat(8), uptime(1), top(1) | basic stats |
| util-linux | dmesg(1), lsblk(1), lscpu(1) | system log, device info |
| sysstat | iostat(1), mpstat(1), pidstat(1), sar(1) | device stats |
| tcpdump | tcpdump(8) | network sniffing |
| nicstat | nicstat(1) | net device stats |
| ethtool | ethtool(8) | net device info |
| iproute2 | ip(8), ss(8), nstat(8), tc(8) | net tools |
| cpuid | cpuid(1) | CPU details |
| mtr | mtr(8) | net diagnostics |

## General
---

| Package | Provides | Notes |
|---------|----------|-------|
| curl | curl(1) | data transfer |

## Install
---

Command for installing these packages on Ubuntu. Some come with Ubuntu
Server by default and some dont. This just makes sure they are and takes
away any guess work there may be related to how Ubuntu handles their
default packages.

```bash
apt-get -y install procps util-linux sysstat tcpdump \
nicstat ethtool iproute2 curl cpuid
```

## Reference
---

- [Linux Crisis Tools](https://www.brendangregg.com/blog/2024-03-24/linux-crisis-tools.html)
