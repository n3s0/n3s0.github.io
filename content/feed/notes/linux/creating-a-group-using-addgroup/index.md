---
title: "Create A User Group On Linux Using addgroup(1)"
description: "Notes for creating groups on Linux using addgroup."
date: 2026-02-19T10:25:01-06:00
lastmod: 2026-02-19
author: "Timothy Loftus (n3s0)"
draft: false
tags: ["sysadmin", "linux"]
---

## Summary

This note discusses using the `addgroup(1)` command to add groups to Linux
systems. Which is coupled with the `adduser(1)` command as a friendly front end
for adding users and groups to Linux systems. Groups are useful when you have
multi-user systems and don't want to have to worry about adding users to things
like OpenSSH configuration manually. You can just append the group(s) to a user
and they'll be able to perform the operations they need to.

## Creating A Group

Groups can be created in Ubuntu using the `addgroup(1)` command. As said in the
summary. This is a friendly front end to the `groupadd(1)` program. It can be
useful for standardization coupled with `adduser(1)` so a lengthy command isn't 

```sh
addgroup <group_name>
```

Here is the output for the command. Important to note that it will output the
group name and group ID out if the command is successful.

```sh
info: Selecting GID from range 1000 to 59999 ...
info: Adding group `examplegroup' (GID 1003) ...
```

## Adding Users To Group

I have an article for this already. But, here is a quick command to add the
users to the group. If it's successful. There will be nothing in stdout.

```sh
usermod -aG <group> <username>
```

Here is a link to the note if anyone would like to read up on that as well.

- [Adding User(s) To A Group](/feed/notes/linux/adding-a-user-to-group/)

## Conclusion

In this note I discussed how to create a group on Linux systems using the
`addgroup(1)` command.

If there are any questions related to any errors or if anyone would just like to
chat. Feel free to reach out.
