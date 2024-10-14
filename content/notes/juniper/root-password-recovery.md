---
title: 'Juniper: Root Password Recovery In Recovery Mode'
date: 2024-10-14T12:20:01-06:00
summary: ""
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

Needed to reset the root password on this Juniper SRX220 so we could start using
it in a lab. These are the steps I used to do that.

Boot to single user mode first. There is a note for this found below.

- [Juniper: Boot To Single-User Mode](/notes/juniper/boot-to-single-user-mode/)

## Root Password Recovery
---

When we enter the recovery mode. We should enter cli mode on the device as root.
The prompt we get should look like this.


```sh
root@lab-srx220-r01>
```

Went into the configuration mode.

```sh
configure
```

Output below is the output displayed when entering configuration mode.

```sh
Entering configuration mode

[edit]
root@lab-srx220-r01#
```

Reset the root password usign the following command.


```sh
set system root-authentication plain-text-password
```

This will require you to enter in the password twice.

```sh
New password:
Retype new password:
```

Then we can commit our changes.

```sh
commit
```

Reboot the system. Using the following command.

```sh
request system reboot
```

It should request that we confirm that we want to reboot. Once we enter yes. It
should start the process. Note that the default is no. So, we are good on that.

```sh
Reboot the system ? [yes,no] (no) yes

Shutdown NOW!
[pid 1654]
```

After doing all of that. I could login to the device as root using the password
we set.

## Reference
---

This is a list for reference I used while writting this.

- [Juniper.net - Recovering Root Password](https://www.juniper.net/documentation/us/en/software/junos/user-access/topics/topic-map/recovering-root-password.html)
- [Community Juniper Networks - Single-user mode to reset the password](https://community.juniper.net/discussion/single-user-mode-to-reset-the-password)
