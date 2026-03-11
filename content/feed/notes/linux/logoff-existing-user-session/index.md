---
title: "Logoff Existing User Sessions In Linux"
description: "Notes on logging off existing users sessions on Linux systems."
date: 2026-02-21T10:25:01-06:00
lastmod: 2026-02-21
author: "Timothy Loftus (n3s0)"
draft: false
tags: ["sysadmin", "linux"]
---

## Summary

One aspect of user administration on Linux servers is logging out user sessions
if needed. Either stale user processes or people that no longer need to be
logged in. Knowing how to do this is not always imperitive. But, it's useful for
a few one off scenerios.

## Logoff User

I'll get into logging off a user in a minute. But, for now I should probably
discuss how to check who is logged into the system. 

The `w` command will show us who is logged into the system. This will not provide 
the pseudo-terminal the user is using for SSH sessions though. But, it's useful
for some data. From it I can at least determine how to find the session.

```sh
 w
```

The `w` command shows output similar to this. Based on the information provided.
It looks like the exampleuser is logged in via SSH. But, `w` doesn't provide
pseudo-terminals in its output.

```sh
 16:56:39 up 7 days, 20:58,  2 users,  load average: 0.00, 0.00, 0.00
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU  WHAT
exampleu          192.168.10.43    16:56   17:09m  0.00s  0.03s sshd: exampleuser [priv]
lab-admin         192.168.10.43    15:48   17:09m  0.00s  0.03s sshd: n3s0 [priv]
```

The next best option to obtain all of the information really needed is the `who`
command. This is what I use if `w` doesn't provide all of the information I
need.

```sh
who
```

In the output we have the the username, psudo-terminal, login timestamps, and IP
address of the user logged in.

```sh
lab-admin   pts/0        2026-02-19 15:48 (192.168.10.43)
exampleuser pts/2        2026-02-19 16:56 (192.168.10.43)
```

There are ways to see what a user is doing before disconnecting them also. I
would recommend something like the acct or psacct service to audit user
activity. Along with a few commands to monitor what the user is up to before
killing their session. (Not all disconnects are due to employment termination.)

- [Setup acct(1) Service On Debian/Ubuntu](/feed/notes/linux/setup-acct-service-on-debian-ubuntu/)
- [Commands To Review User Activity On A Linux System](/feed/notes/linux/commands-to-review-user-activity-on-a-linux-system/)

The following command will send a Signal Hangup to the user account and logoff
the user.

```sh
pkill -SIGHUP -u <username>
```

This command will do the same. But, it will do that with the user
pseudo-terminal. This is where the `who(1)` command comes in handy. It will tell
us who is login

```sh
pkill -SIGHUP -t <pts/num>
```

Another option; if reasonable, is to just send a SIGKILL to the session. This
will send a forced termination. The kernal will "kill it with fire" and it wont
appologize. Say it's not worthy and the user or session will no longer be
running.

This can also be done to the user session. But, in some cases it's just best to
do it by username unless you start seeing the same sessions or other suspicious
sessions sitting around still. 

```sh
pkill -SIGKILL -u <username>
```

If this needs to be done to the terminal session. The following command can be
used.

```sh
pkill -SIGKILL -t <pts/num>
```

If this is a case where you're attempting to disconnect a user that shouldn't be
connected to the system. We can [lock the user account](/feed/notes/linux/lock-and-unlock-user-accounts/) 
before logging them off to prevent future login. It's just good to get these
commands run querying for logged in users so you know who and what the user is
doing beforehand. 

## Closing Notes

This note discussed how to logoff users on Linux systems. Though it's probably
not an extensive list of methods. It gets the job done. I also mention other
articles that discuss locking a Linux user out of their account in the event
that it's needed. Along with some additional notes on setting up process
accounting and a link with notes on how to review user activity on Linux
systems. 

There was a lot covered in this article. So if there are any errors or if
someone wants to have a discussion related to the content. Feel free to reach
out.

