---
title: 'Juniper: Boot To Single-User Mode'
date: 2024-10-14T12:30:01-06:00
summary: "Notes for booting to Single User Mode to enter recovery mode."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["netadmin"]
---

## Summary
---

These are notes for booting into Single-User mode on a Juniper firewall.

## Booting To Single-User Mode
---

First step is to wait until we see the prompt below and press the spacebar.

```sh
Hit [Enter] to boot immediately, or space bar for command prompt.
```

Below is the prompt we should see to boot to this.

```sh
loader>
```

Entered the -s flag for boot and it did something. Goes through the boot process
and all of that fun stuff.

```sh
boot -s
```

Looks like I now have the options to enter recovery mode!

```sh
***** FILE SYSTEM WAS MODIFIED *****
System watchdog timer disabled
Enter full pathname of shell or 'recovery' for root password recovery or RETURN for /bin/sh:
```

Entered the recovery command.

```sh
recovery
```

We are now at the cli prompt for the device! Time to reset the root password so
we can finally use it.

```sh
root@lab-srx220-r01>
```

Now we should be able to proceed to do whatever we neeed to do on the system.


## Reference
---

This is a list for reference I used while writting this.

- [Juniper.net - Recovering Root Password](https://www.juniper.net/documentation/us/en/software/junos/user-access/topics/topic-map/recovering-root-password.html)
- [Community Juniper Networks - Single-user mode to reset the password](https://community.juniper.net/discussion/single-user-mode-to-reset-the-password)
