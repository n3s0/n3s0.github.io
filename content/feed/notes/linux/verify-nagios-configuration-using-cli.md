---
title: "Verify Nagios Configuration Using CLI"
date: 2023-09-20T13:34:29+06:00
lastmod: 2025-10-11
author: "Timothy Loftus (n3s0)"
summary: "Quick note for verifying Nagios Core configuration via commandline."
draft: false
tags: ["sysadmin"]
---

Quick note for verfying the Nagios Core configuration using commandline.
This is is useful for verifying changes to the configuration before
restarting the service.

One thing to keep in mind is to NOT check the conf.dish configuration
files. This command needs to be run on the main configuration file. This
will change depending the operating system.

OpenBSD may have it in ```/etc/```. FreeBSD may have it in
```/usr/local/etc/```. Other Linux distributions may have it in
```/etc/```.

```sh
nagios -v <configuration file path>/nagios.cfg
```

For example on Linux:

```sh
nagios -v /etc/nagios/nagios.cfg
```

This should output what errors there are with the configuration file.
It's just another thing to think about when you're changing
configuration. Check the syntax and make sure the application thinks
it's sane. It never hurts to double check configuration before
restarting it. Comments are a good choice too. Along with well thought
out descriptions of services within said configuration file. Clear and
concise communication.
