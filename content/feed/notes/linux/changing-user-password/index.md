---
title: "Changing A Linux User Password Using passwd(1)"
description: "Brief note on how to change the password of a Linux user."
date: 2026-02-20T10:25:01-06:00
lastmod: 2026-02-21
author: "Timothy Loftus (n3s0)"
draft: false
tags: ["sysadmin", "linux"]
---

## Summary

This is a brief note on how to change a user password on Linux systems. This is
one of those basic administrator tasks done on most systems.

## Change User Password

To change a users password the `passwd(1)` command using the username of the
user being updated. This will require elevated privileges to do successfully.

Below is the command used to change the user password. Replace `<username>` with
the target username.

```sh
passwd <username>
```

Below is the output. Once successful. The output will show that the password was
updated successfully. To update to a new password. Enter the new password and
confirm it by entering it a second time.

```sh
New password:
Retype new password:
passwd: password updated successfully
``` 

## Conclusion

This was a short note on how to change a Linux users password. Hopefully it was
helpful. If there are any questions regarding this. Send me a message.
