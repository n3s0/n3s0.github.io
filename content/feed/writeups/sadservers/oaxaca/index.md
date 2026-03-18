---
title: "Oaxaca: Close an Open File"
date: 2026-03-17T18:40:47-06:00
lastmod: 2025-10-18
description: "One of those challenges where you need to close a pesky file that a process keeps opening."
author: "Timothy Loftus (n3s0)"
draft: false
tags: ["SadServers", "Linux"]
---

## Summary
---

I may have killed process before I closed the file. Mostly due to not reading.
But, with this challenge I definately learned a better way of handling files
that processes refuse to close. So this was a win for me.

This challenge from SadServes expects the solver to close the file without
terminating the process. It even punishes us if we terminate the process instead
of following directions. So, remember to read the directions. There are other
things to be learned from this. But, read on and we'll get there.

I loved this challenge and SadServers did a great job at exposing me to
something new. Greate thanks to them for providing an environment where I can
learn different methods for troubleshooting things like this before a Sr. Linux
Administrator has to yell at me about the right way to do this!

## Scenario
---

**Scenario:** "Oaxaca": Close an Open File

**Level:** Medium

**Type:** Fix

**Access:** Email

**Description:** 

The file `/home/admin/somefile` is open for writing by some process. Close this 
file without killing the process.

**Root (sudo) Access:** False

**Test:** lsof /home/admin/somefile returns nothing.

**Time to Solve:** 15 minutes.

## Solution
---

So, the solution to this is to close the file without killing the process. I
started all of this by checking on the process using the `lsof` command provided
for the test.

```sh
lsof /home/admin/somefile
```

This output for this command can be seen below. The file is open under PID `814`
under the user `admin`.

With the consideration of needing to close the file without terminating the
process. I was curious to know why. In the `A Little Rabbit Hole` section I
explain how I followed the process heiarchy to see why I couldn't close it.
Turns out the parent process will disconnect the user from the instance this is
run on. Killing the `814` process will result in the parent process just opening
the file again.

Given that I need to close the file without terminating the process. I needed to
do a little research. This is where I learned about file descriptors (fd / FD).

File descriptors are non-negative integers that handle files or resources in
Unix or Linux operating systems. In this case this is indicated by `77w` in the
`FD` column of the `lsof` output. The purpose of this is to serve as a
communications channel between user-space and kernel-space system calls for I/O
operations. In our case the file `somefile` is given a file descriptor of `77`.
With the `w` added at the end of it. This indicates indicate the access mode for
this file. In this case `FD 77` is given access mode `write` (`w`). Where `77`
is the integer picked for the file within the order it was opened. This does not
necessarly change; to my knowledge, when the process it terminated either.

```sh
COMMAND PID  USER   FD   TYPE DEVICE SIZE/OFF   NODE NAME
bash    814 admin   77w   REG  259,1        0 272875 /home/admin/somefile
```

To come back to the initial task at hand. I did a little research on how to
close files using the file descriptor ID. In this case it was `77`. The
redirection operator `>&-` closes standard output. The hiphen `-` in this case
signifies closing the file descriptor specified.

```sh
exec 77>&-
```

Used the test command provided to determine if the output described initially
still exists. In this case there is no output. So, I should be good to go.

```sh
lsof /home/admin/somefile
```

### A Little Rabbit Hole

I went down a small rabbit hole to determine why the challenge author didn't
want the user to terminate the process. Given that is what a lot of us are used
to.

I decided to go through the process heiarchy to review this. So I decided to
first look at PID `814`. Which is the process that opened the `somefile` file.

```sh
lsof -p 814
```

This showed some useful data. But, not all of it. It definately provided more
context as to which files were being run in memory. But, I think I needed a
little more.

```sh
COMMAND PID  USER   FD   TYPE DEVICE SIZE/OFF   NODE NAME
bash    814 admin  cwd    DIR  259,1     4096      2 /
bash    814 admin  rtd    DIR  259,1     4096      2 /
bash    814 admin  txt    REG  259,1  1234376    335 /usr/bin/bash
bash    814 admin  mem    REG  259,1    51696   1603 /usr/lib/x86_64-linux-gnu/libnss_files-2.31.so
bash    814 admin  mem    REG  259,1   346132   1406 /usr/lib/locale/C.UTF-8/LC_CTYPE
bash    814 admin  mem    REG  259,1       50   1412 /usr/lib/locale/C.UTF-8/LC_NUMERIC
bash    814 admin  mem    REG  259,1     3360   1577 /usr/lib/locale/C.UTF-8/LC_TIME
bash    814 admin  mem    REG  259,1  1519554   1405 /usr/lib/locale/C.UTF-8/LC_COLLATE
bash    814 admin  mem    REG  259,1      270   1410 /usr/lib/locale/C.UTF-8/LC_MONETARY
bash    814 admin  mem    REG  259,1       48   1409 /usr/lib/locale/C.UTF-8/LC_MESSAGES/SYS_LC_MESSAGES
bash    814 admin  mem    REG  259,1       34   1413 /usr/lib/locale/C.UTF-8/LC_PAPER
bash    814 admin  mem    REG  259,1    27002   3458 /usr/lib/x86_64-linux-gnu/gconv/gconv-modules.cache
bash    814 admin  mem    REG  259,1  1839792   1594 /usr/lib/x86_64-linux-gnu/libc-2.31.so
bash    814 admin  mem    REG  259,1    18688   1595 /usr/lib/x86_64-linux-gnu/libdl-2.31.so
bash    814 admin  mem    REG  259,1   187792   2300 /usr/lib/x86_64-linux-gnu/libtinfo.so.6.2
bash    814 admin  mem    REG  259,1       62   1411 /usr/lib/locale/C.UTF-8/LC_NAME
bash    814 admin  mem    REG  259,1      131   1404 /usr/lib/locale/C.UTF-8/LC_ADDRESS
bash    814 admin  mem    REG  259,1       47   1414 /usr/lib/locale/C.UTF-8/LC_TELEPHONE
bash    814 admin  mem    REG  259,1       23   1408 /usr/lib/locale/C.UTF-8/LC_MEASUREMENT
bash    814 admin  mem    REG  259,1   177928   1590 /usr/lib/x86_64-linux-gnu/ld-2.31.so
bash    814 admin  mem    REG  259,1      252   1407 /usr/lib/locale/C.UTF-8/LC_IDENTIFICATION
bash    814 admin    0u   CHR  136,0      0t0      3 /dev/pts/0
bash    814 admin    1u   CHR  136,0      0t0      3 /dev/pts/0
bash    814 admin    2u   CHR  136,0      0t0      3 /dev/pts/0
bash    814 admin   77w   REG  259,1        0 272875 /home/admin/somefile
bash    814 admin  255u   CHR  136,0      0t0      3 /dev/pts/0
```

There is the `-R` flag for `lsof`. Which directs it to list the Parent Process
(PPID) for the process being listed as well.

```sh
lsof -p 814 -R 
```

Looking at this shows the PPID for the `somefile` PID to be `589`.

```sh
COMMAND PID PPID  USER   FD   TYPE DEVICE SIZE/OFF   NODE NAME
bash    814  589 admin  cwd    DIR  259,1     4096      2 /
bash    814  589 admin  rtd    DIR  259,1     4096      2 /
bash    814  589 admin  txt    REG  259,1  1234376    335 /usr/bin/bash
bash    814  589 admin  mem    REG  259,1    51696   1603 /usr/lib/x86_64-linux-gnu/libnss_files-2.31.so
bash    814  589 admin  mem    REG  259,1   346132   1406 /usr/lib/locale/C.UTF-8/LC_CTYPE
bash    814  589 admin  mem    REG  259,1       50   1412 /usr/lib/locale/C.UTF-8/LC_NUMERIC
bash    814  589 admin  mem    REG  259,1     3360   1577 /usr/lib/locale/C.UTF-8/LC_TIME
bash    814  589 admin  mem    REG  259,1  1519554   1405 /usr/lib/locale/C.UTF-8/LC_COLLATE
bash    814  589 admin  mem    REG  259,1      270   1410 /usr/lib/locale/C.UTF-8/LC_MONETARY
bash    814  589 admin  mem    REG  259,1       48   1409 /usr/lib/locale/C.UTF-8/LC_MESSAGES/SYS_LC_MESSAGES
bash    814  589 admin  mem    REG  259,1       34   1413 /usr/lib/locale/C.UTF-8/LC_PAPER
bash    814  589 admin  mem    REG  259,1    27002   3458 /usr/lib/x86_64-linux-gnu/gconv/gconv-modules.cache
bash    814  589 admin  mem    REG  259,1  1839792   1594 /usr/lib/x86_64-linux-gnu/libc-2.31.so
bash    814  589 admin  mem    REG  259,1    18688   1595 /usr/lib/x86_64-linux-gnu/libdl-2.31.so
bash    814  589 admin  mem    REG  259,1   187792   2300 /usr/lib/x86_64-linux-gnu/libtinfo.so.6.2
bash    814  589 admin  mem    REG  259,1       62   1411 /usr/lib/locale/C.UTF-8/LC_NAME
bash    814  589 admin  mem    REG  259,1      131   1404 /usr/lib/locale/C.UTF-8/LC_ADDRESS
bash    814  589 admin  mem    REG  259,1       47   1414 /usr/lib/locale/C.UTF-8/LC_TELEPHONE
bash    814  589 admin  mem    REG  259,1       23   1408 /usr/lib/locale/C.UTF-8/LC_MEASUREMENT
bash    814  589 admin  mem    REG  259,1   177928   1590 /usr/lib/x86_64-linux-gnu/ld-2.31.so
bash    814  589 admin  mem    REG  259,1      252   1407 /usr/lib/locale/C.UTF-8/LC_IDENTIFICATION
bash    814  589 admin    0u   CHR  136,0      0t0      3 /dev/pts/0
bash    814  589 admin    1u   CHR  136,0      0t0      3 /dev/pts/0
bash    814  589 admin    2u   CHR  136,0      0t0      3 /dev/pts/0
bash    814  589 admin   77w   REG  259,1        0 272875 /home/admin/somefile
bash    814  589 admin  255u   CHR  136,0      0t0      3 /dev/pts/0
```

Now it's time to review the PID `589` to see what files associated with this
process as well.

```sh
lsof -p 589
```

Turns out this was the `gotty` command. Which I think handles the connectivity
to the challenge. I made the mistake of terminating this process and I lost
connection to the challenge. Which was a big "uh oh..." for me.

This is sending TCP connections to a compute instance in us-east-2. So this may
be either sending data or provding connectivity to the challenge console we get
to run commands on.

```sh
COMMAND PID  USER   FD      TYPE             DEVICE SIZE/OFF NODE NAME
gotty   589 admin  cwd       DIR              259,1     4096    2 /
gotty   589 admin  rtd       DIR              259,1     4096    2 /
gotty   589 admin  txt       REG              259,1 13118554   13 /usr/local/gotty
gotty   589 admin  mem       REG              259,1  1839792 1594 /usr/lib/x86_64-linux-gnu/libc-2.31.so
gotty   589 admin  mem       REG              259,1   149520 1607 /usr/lib/x86_64-linux-gnu/libpthread-2.31.so
gotty   589 admin  mem       REG              259,1   177928 1590 /usr/lib/x86_64-linux-gnu/ld-2.31.so
gotty   589 admin    0r      CHR                1,3      0t0    4 /dev/null
gotty   589 admin    1u     unix 0x0000000055d53620      0t0  744 type=STREAM
gotty   589 admin    2u     unix 0x0000000055d53620      0t0  744 type=STREAM
gotty   589 admin    3u  a_inode               0,12        0 9450 [eventpoll]
gotty   589 admin    4r     FIFO               0,11      0t0  819 pipe
gotty   589 admin    5w     FIFO               0,11      0t0  819 pipe
gotty   589 admin    6u     IPv6                823      0t0  TCP *:http-alt (LISTEN)
gotty   589 admin    7u     IPv6              11620      0t0  TCP ip-10-1-11-234.us-east-2.compute.internal:http-alt->ip-10-1-0-123.us-east-2.compute.internal:37538 (ESTABLISHED)
gotty   589 admin    8u      CHR                5,2      0t0   83 /dev/ptmx
```

## Conclusion

Used the `check.sh` script to confirm the solution was correct.

```sh
bash /home/admin/agent/check.sh
```

Should be good on this one. The check script provided the `OK` and when I
clicked `Check Solution` it also said it's completed.

```sh
OK
```

I learned a little more about file descriptors (fd) in this challenge. Providing
a less destructive method for closing files so I'm not terminating processes.

I went off on a little rabbit hole with this one. But, I wanted to see why they
didn't want us to terminate the process. The parent process is what keeps the
connection to the compute instance is tied to this file and I got kicked out
when I killed it. Luckily these instances are generated. If anyone does this.
Just `Destroy` the server and start again.

