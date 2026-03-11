---
title: "Ways To Lock And Unlock Linux User Accounts"
description: "Notes on ways to lock and unlock Linux user accounts."
date: 2026-02-19T08:25:01-06:00
lastmod: 2026-02-19
author: "Timothy Loftus (n3s0)"
draft: false
tags: ["sysadmin", "linux"]
---

## Summary

In this note I will be going through a few ways to lock and unlock Linux user
accounts. This is useful for the sake of making sure accounts can be put in time
out of they misbehave.

## passwd(1)

One method is to use the `passwd(1)` command. Using the `-l` option will lock
the password of the named account. It disables the password by changing it to a
password that matches no encrypted value. It will add a `!` to the beginning of
the password. But, it doesn't add that to the original password. I tested this
out and it wouldn't log me in.

When the password is locked. A `!` will be visable in the `/etc/shadow` file
where hashed passwords are stored.

```sh
passwd -l <username>
```

Below is the output that can be seen in the `/etc/shadow` file after the account
has been locked. Providing this so one can observe the change in the `shadow`
file where the `!` or lock indication is visable.

```sh
exampleuser:!$y$j9T$[REDACTED]/$/[REDACTED]:20503:0:99999:7:::
```

To unlock the account. Just simply use the `-u` or `--unlock` flags on the
desired account and the `!` will be removed and the user can login.

```sh
passwd -u <username>
```

There are some pitfalls to this if different authentication tokens are available
to to the user. But, it does disable the ability to change or login using the
password set by the user.

## usermod(1)

The `usermod(1)` command can also be used to lock a user account. It actually
provides a few more options that combats the use of other authentication
methods.

```sh
usermod -L -e 1 <username>
```

Here is the output from the `/etc/shadow` file with what should be seen after
the command is run.

```sh
exampleuser:!$y$j9T$[REDACTED]/$/[REDACTED]:20503:0:99999:7::1:
```

This will do the reverse of the command above. It will unlock and remove the
expiry from the account in the `/etc/shadow` file.

```sh
usermod -U -e '' <username>
```

## Conclusion

More will be added to this list. These are just some that I have used in the
past to disable accounts.
