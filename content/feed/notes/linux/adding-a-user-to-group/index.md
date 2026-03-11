---
title: "Adding A User To A Group On Linux"
description: "Notes on methods used to add users to groups on Linux systems."
date: 2026-02-19T10:25:01-06:00
lastmod: 2026-02-19
author: "Timothy Loftus (n3s0)"
draft: false
tags: ["sysadmin", "linux"]
---

## Summary


## Using usermod(1)

One command I use the most is the `usermod(1)` command. I generally just append
group membership; using the `-a` flag, to give the user another group as opposed
to making it their primary group.

```sh
usermod -aG <group> <username>
```

## Verify Group Membership

It's good to verify group membership after adding a user to a group. This can be
done using the `id(1)` command. This will show effective user and group IDs
assigned to the user.

```sh
id
```

Below is the output from this command. Say I added the group `sshuser`. It would
seem that command was successful based on the output.

In this output we'll see the `uid` of the user with the username. I'll see the
`gid` or primary group of the user. Along with the `gid` and group names of any
groups appended to the user.

```sh
uid=1000(exampleuser) gid=1000(exampleuser) groups=1000(exampleuser),998(wheel),1001(sshuser)
```
