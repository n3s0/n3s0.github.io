---
title: "Commands To Review User Activity On A Linux System"
description: "Note providing a list of commands intended for reviewing user activity on a Linux system."
date: 2026-02-20T07:25:01-06:00
lastmod: 2026-02-21
author: "Timothy Loftus (n3s0)"
draft: false
tags: ["sysadmin", "linux"]
---

## Summary

This is a living document of different methods for reviewing user activity on
Linux systems. There are many methods to review things like this. So, as I learn
more. This document will be updated if it proves useful. Hopefully it will be
useful to others as well.

## last(1)

One command to review user activity is the `last(1)` command. The `last(1)`
command shows a listing of the last logged in users. This can be useful to check
who, when, from where, and how a system is being logged in as. This will also
show you the duration the users were logged in. Along with those who are logged
in currently.

The `last(1)` command run by itself is pretty useful out of the box. This will
show reboots, currently logged in users, along with providing a history of the
user logins for these systems.

```sh
last
```

Here is the output provided by the `last(1)` command by itself.

```sh
exampleu pts/0        192.168.1.10     Tue Feb 24 06:11   still logged in
lab-user pts/0        192.168.10.148   Mon Feb 23 18:44 - 01:02  (06:18)
reboot   system boot  6.7.0-100-generi Mon Feb 23 07:13   still running
lab-admi pts/1        192.168.10.205   Wed Feb 18 20:21 - 21:44  (01:22)
lab-admi pts/1        192.168.10.205   Wed Feb 18 20:07 - 20:09  (00:02)
lab-admi pts/1        192.168.10.205   Wed Feb 18 20:06 - 20:07  (00:00)
lab-admi pts/0        192.168.10.12    Wed Feb 18 19:25 - 21:12  (01:46)
lab-admi pts/0        192.168.10.12    Wed Feb 18 19:24 - 19:25  (00:01)
reboot   system boot  6.7.0-100-generi Wed Feb 18 19:18 - 07:13 (4+11:54)
reboot   system boot  6.7.0-100-generi Wed Feb 18 17:39 - 19:18  (01:39)
reboot   system boot  6.7.0-100-generi Wed Feb 18 17:04 - 17:39  (00:34)
reboot   system boot  6.7.0-100-generi Wed Feb 11 17:16 - 17:17  (00:00)
lab-admi pts/0        192.168.10.12    Wed Feb 11 17:13 - 17:16  (00:02)
reboot   system boot  6.7.0-100-generi Wed Feb 11 17:12 - 17:16  (00:03)
lab-admi pts/0        192.168.10.12    Wed Feb 11 17:07 - 17:12  (00:05)
reboot   system boot  6.7.0-100-generi Wed Feb 11 17:05 - 17:12  (00:07)

wtmp begins Wed Feb 11 17:05:17 2026
```

## Conclusion

This is a living document of different techniques I've found useful for auditing
Linxu user activity. If there is anything you see on here that you feel may
useful. By all means, use it. Please let me know if there is anything you would
like added to this note as well.
