---
title: "Saint John: what is writing to this log file?"
author: "Timothy Loftus (n3s0)"
date: 2023-11-13T18:40:47-06:00
lastmod: 2025-10-15
summary: "Notes from running through the Saint John scenario from SadServers. Where you troubleshoot why a rouge program made by a developer is filling up disk space and terminating it."
draft: false
tags: ["sadserver", "linux"]
---

## Scenario
---

Should anyone want to do this challenge. You can do so at the following 
link.

- [Saint John: what is writing to this log file?](https://sadservers.com/scenario/saint-john)

Level: Easy

Type: Fix

Description: A developer created a testing program that is continuously writing 
to a log file /var/log/bad.log and filling up disk. You can check for example 
with tail -f /var/log/bad.log. This program is no longer needed. Find it and 
terminate it.

Test: The log file size doesn’t change (within a time interval bigger than the 
rate of change of the log file).

The “Check My Solution” button runs the script /home/admin/agent/check.sh, 
which you can see and execute.

Time to Solve: 10 minutes.

## Solution
---

Time to check the home directory for anything useful. Looks like there is a Python script named badlog.py. Maybe this is the script that’s been causing the trouble?

```sh
admin@i-095f81604bf034021:~$ ls -l
total 8
drwxr-xr-x 2 admin root  4096 Nov 10 23:23 agent
-rwxr-xr-x 1 admin admin  298 Nov 10 23:26 badlog.py
```

Opening the script for viewing and it shows a few things. This script opens the /var/log/bad.log file and writes a random number within the range of 2147483647. Adding it to a string with the date and time. After flushing the file buffer sleeping for three milliseconds and it will continue to do it again.

```python
#! /usr/bin/python3
# test logging

import random
import time
from datetime import datetime

with open('/var/log/bad.log', 'w') as f:
    while True:
        r = random.randrange(2147483647)
        print(str(datetime.now()) + ' token: ' + str(r), file=f)
        f.flush()
        time.sleep(0.3)
```

Opened the /var/log/bad.log file to show that the badlog.py file is just writing to the bad.log file endlessly. Down the road this could pose as a problem because no log rotation is set in place to conserve space and fills up the disk.

```sh
admin@i-095f81604bf034021:~$ tail -f /var/log/bad.log
2023-11-14 02:52:32.865432 token: 866497053
2023-11-14 02:52:33.165897 token: 1077301212
2023-11-14 02:52:33.466333 token: 863476074
2023-11-14 02:52:33.766779 token: 1877924248
2023-11-14 02:52:34.067246 token: 701493416
```

As a test to indicate that this is solved. I’m going to just check the size of the file with the ls command. There are other methods for testing. But, this one should do.

```sh
admin@i-026e175d7c7e192d7:~$ ls -lah /var/log/bad.log 
-rw-r--r-- 1 admin admin 1.7K Nov 16 05:07 /var/log/bad.log
admin@i-026e175d7c7e192d7:~$ ls -lah /var/log/bad.log 
-rw-r--r-- 1 admin admin 2.3K Nov 16 05:07 /var/log/bad.log
```

Used the lsof command to check for any commands that have files with the path /var/log/bad.log open. Looks like it’s the badlog.py script on process ID 572. The process will probably need to be killed to solve the challenge.

```sh
admin@i-026e175d7c7e192d7:~$ lsof | grep /var/log/bad.log
COMMAND   PID TID TASKCMD         USER   FD      TYPE             DEVICE SIZE/OFF   NODE NAME
badlog.py 572                    admin    3w      REG              259,1    64779 265802 /var/log/bad.log
```

Killed the process ID for the badlog.py script.

```sh
admin@i-026e175d7c7e192d7:~$ sudo kill 572
```

Looks like the “bad.log” file is no longer growing now. Looks like this challenge is in the books!

```sh
admin@i-026e175d7c7e192d7:~$ ls -lah /var/log/bad.log 
-rw-r--r-- 1 admin admin 13K Nov 16 05:10 /var/log/bad.log
admin@i-026e175d7c7e192d7:~$ ls -lah /var/log/bad.log 
-rw-r--r-- 1 admin admin 13K Nov 16 05:10 /var/log/bad.log
```

Clicked the Check Solution button in the challenge and it shows that it’s solved. Time for the next one.
