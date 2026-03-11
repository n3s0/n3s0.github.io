---
title: "Adding A User On Linux With adduser(1)"
description: "Notes for installing and setting up swaylock-effects on Ubuntu."
date: 2026-02-19T10:30:01-06:00
lastmod: 2026-02-19
author: "Timothy Loftus (n3s0)"
draft: false
tags: ["sysadmin", "linux"]
---

## Summary

In this note I'm going to discuss adding a user to a Linux system using the
`adduser(1)` command. This provides a friendly front end for creating a new
user. Where with the `useradd(1)` command. I would need to type out a longer
command. The `adduser(1)` command creates a user with everything you would
expect to be created for a new user in a shorter command. This is useful for new
users that aren't running a service.

## Adding User



```sh
adduser <username>
```

```sh
info: Adding user `exampleuser' ...
info: Selecting UID/GID from range 1000 to 59999 ...
info: Adding new group `exampleuser' (1001) ...
info: Adding new user `exampleuser' (1001) with group `exampleuser (1001)' ...
info: Creating home directory `/home/exampleuser' ...
info: Copying files from `/etc/skel' ...
New password:
Retype new password:
passwd: password updated successfully
Changing the user information for exampleuser
Enter the new value, or press ENTER for the default
        Full Name []: Example User
        Room Number []:
        Work Phone []:
        Home Phone []:
        Other []:
Is the information correct? [Y/n]
info: Adding new user `exampleuser' to supplemental / extra groups `users' ...
info: Adding user `exampleuser' to group `users' ...
```


