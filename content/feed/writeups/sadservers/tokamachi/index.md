---
title: "Tokamachi: Troubleshooting a Named Pipe"
date: 2026-03-20T08:40:47-06:00
lastmod: 2025-10-20
description: "One of those challenges where you need to close a pesky file that a process keeps opening."
author: "Timothy Loftus (n3s0)"
cover: "/feed/writeups/sadservers/img/sadservers.jpg"
draft: true
tags: ["SadServers", "Linux"]
---

## Summary
---


## Scenario
---

Scenario: "Tokamachi": Troubleshooting a Named Pipe

Level: Easy

Type: Fix

Tags: bash  

Access: Email

Description: 

There's a process reading from the named pipe `/home/admin/namedpipe`.

If you run this command that writes to that pipe:

```sh
/bin/bash -c 'while true; do echo "this is a test message being sent to the pipe" > /home/admin/namedpipe; done' &
```

And check the reader log with `tail -f reader.log`

You'll see that after a minute or so it works for a while (the reader receives 
some messages) and then it stops working (no more received messages are printed 
to the reader log or it takes a long time to process one). Troubleshoot and fix 
(for example changing the writer command) so that the writer keeps sending the 
messages and the reader is able to read all of them.

Root (sudo) Access: False

Test: There should be a process running where a message is being sent to the 
pipe and that while that is running, another message can be sent to the pipe 
and read back.

## Solution
---

```txt
Instructions:

There's a process reading from the named pipe "/home/admin/namedpipe".

If you run this command that writes to that pipe:

/bin/bash -c 'while true; do
  echo "this is a test message being sent to the pipe" > /home/admin/namedpipe
done' &

And check the reader log:
tail -f reader.log

You'll see that it works for a bit (the reader receives some messages) and then it stops working. Troubleshoot and fix (for example changing the writer command) so that the writer keeps sending the messages and the reader is able to read all of them. 

The check.sh will test that there's a process running where a message is being sent to the pipe and that while that is running, another message can be sent to the pipe and read back.
```

```sh
nohup /bin/bash -c 'while true; do
  if read line < /home/admin/namedpipe; then
    echo "$(date) Received: $line" >> /home/admin/reader.log
  fi
  sleep 2
done' &>/dev/null &
```

```sh
admin@i-03979c191db062e76:~$ ps aux | grep test
admin       1062 10.9  0.6   5708  2892 pts/0    D<   19:48   0:45 /bin/bash -c while true; do echo "this is a test message being sent to the pipe" > /home/admin/namedpipe; done
admin       1391  0.0  0.1   5264   704 pts/0    S<+  19:54   0:00 grep test
admin@i-03979c191db062e76:~$ kill 1062
admin@i-03979c191db062e76:~$ /bin/bash -c 'while true; do echo "this is a test message being sent to the pipe" > /home/admin/namedpipe; sleep 2; done' &
[2] 1405
[1]   Terminated              /bin/bash -c 'while true; do echo "this is a test message being sent to the pipe" > /home/admin/namedpipe; done'
admin@i-03979c191db062e76:~$ agent/check.sh 
NOadmin@i-03979c191db062e76:~$ agent/check.sh 
NOadmin@i-03979c191db062e76:~$ kill 1405
admin@i-03979c191db062e76:~$ kill 1062
bash: kill: (1062) - No such process
[2]+  Terminated              /bin/bash -c 'while true; do echo "this is a test message being sent to the pipe" > /home/admin/namedpipe; sleep 2; done'
admin@i-03979c191db062e76:~$ ps aux | grep test
admin       1569  0.0  0.1   5264   704 pts/0    S<+  19:57   0:00 grep test
admin@i-03979c191db062e76:~$ /bin/bash -c 'while true; do echo "this is a test message being sent to the pipe" > /home/admin/namedpipe; sleep 2; done' &
[1] 1613
```

```sh
 tail -f namedpipe 
this is a test message being sent to the pipe
tail: namedpipe: file truncated
this is a test message being sent to the pipe
tail: namedpipe: file truncated
this is a test message being sent to the pipe
tail: namedpipe: file truncated
this is a test message being sent to the pipe
tail: namedpipe: file truncated
this is a test message being sent to the pipe
tail: namedpipe: file truncated
this is a test message being sent to the pipe
^C
admin@i-03979c191db062e76:~$ cat namedpipe 
this is a test message being sent to the pipe
admin@i-03979c191db062e76:~$ cat namedpipe 
this is a test message being sent to the pipe
admin@i-03979c191db062e76:~$ agent/check.sh 
OKadmin@i-03979c191db062e76:~$ 
```

## Conclusion
---
