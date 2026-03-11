---
title: "Setup & Use acct(1) Service On Debian/Ubuntu"
description: "Note that walks through setting up and using the acct(1) service on Ubuntu/Debian."
date: 2026-02-20T07:25:01-06:00
lastmod: 2026-02-21
author: "Timothy Loftus (n3s0)"
draft: false
tags: ["sysadmin", "linux"]
---

## Summary

Wanted to make a note on a gem within the Linux space that some Linux
administrators may not know about. The acct package; psacct package on RHEL,
provides tools for monitoring user activity and process resource usage on Linux
systems. Just enable the accounting service and use the commands within the
toolset to check on account activity.

This is useful for autiting user activity for exmployees and processes for
various reasons. Some for the purpose of monitoring for malicious activity.
Which is helpful when a security audit needs to be performed. Some for just 
reviewing what actually gets used on the system. It can be helpful during the
troubleshooting process to see if the user did anything to cause the problem
that was reported. 

Reports can be generated using shell scripts and sent via email for monthly 
audits of activity on a system for the purpose of just having it for future 
review. (I might make an article for this down the road.)

There is another command called last(1) that isn't discussed in this note. But,
should have one shortly.

## Install & Setup acct

The `acct` service isn't installed by default on Debian or Ubuntu systems. So it
will need to be installed first. The `acct` package can be done to accomplish
this.

Here is the `apt info` for the `acct` package if anyone would like to see it.

```sh
Package: acct
Version: 6.6.4-5ubuntu0.24.04.1
Priority: optional
Section: admin
Origin: Ubuntu
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Original-Maintainer: Debian Security Tools <team+pkg-security@tracker.debian.org>
Bugs: https://bugs.launchpad.net/ubuntu/+filebug
Installed-Size: 304 kB
Pre-Depends: init-system-helpers (>= 1.54~)
Depends: libc6 (>= 2.38), lsb-base
Homepage: https://www.gnu.org/software/acct/
Download-Size: 86.5 kB
APT-Manual-Installed: yes
APT-Sources: http://us.archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages
Description: GNU Accounting utilities for process and login accounting
 GNU Accounting Utilities is a set of utilities which reports and summarizes
 data about user connect times and process execution statistics.
 .
 "Login accounting" provides summaries of system resource usage based on connect
 time, and "process accounting" provides summaries based on the commands
 executed on the system.
 .
 The 'last' command is provided by the util-linux package and not included here.

N: There is 1 additional record. Please use the '-a' switch to see it
```

To install the `acct` package. The following command can be used.

```sh
apt install -y acct
```

Once `acct` install is complete. We can enable and start the service. This can
be best accomplished using the `--now` flag with the `enable` sub-command. This
will enable and start the service using one command.

```sh
systemctl enable --now acct
```

Below is the output from the command. Looks like it was run successfully.

```sh
Synchronizing state of acct.service with SysV service script with /usr/lib/systemd/systemd-sysv-install.
Executing: /usr/lib/systemd/systemd-sysv-install enable acct
```

To check the status of the service. The `status` sub-command can be used.

```sh
systemctl status acct
```

Based on the output from the command. It looks like the service was started
successfully. So, the installation portion of this is complete.

```sh
● acct.service - Kernel process accounting
     Loaded: loaded (/usr/lib/systemd/system/acct.service; enabled; preset: enabled)
     Active: active (exited) since Sun 2026-02-22 06:25:01 UTC; 5min ago
       Docs: man:accton(8)
    Process: 143066 ExecStart=/usr/sbin/accton /var/log/account/pacct (code=exited, status=0/SUCCESS)
   Main PID: 143066 (code=exited, status=0/SUCCESS)
        CPU: 3ms

Feb 22 06:25:01 til-adm-01 systemd[1]: Starting acct.service - Kernel process accounting...
Feb 22 06:25:01 til-adm-01 accton[143066]: Turning on process accounting, file set to '/var/log/ac>
Feb 22 06:25:01 til-adm-01 systemd[1]: Finished acct.service - Kernel process accounting.
```

## Confirm logrotate Is Enabled

It's recommanded that logs are rotated so they don't fill up the system. The
`acct` process accounts for user activity and process activity. So, confirming
the process is running is a best practice for it so those logs don't fill up
disk space.

```sh
systemctl status logrotate
```

Based on the output. It looks like logrotate is enabled. It just isn't active at
the moment because it hasn't been triggered.

```sh
○ logrotate.service - Rotate log files
     Loaded: loaded (/usr/lib/systemd/system/logrotate.service; static)
     Active: inactive (dead) since Sun 2026-02-22 00:00:00 UTC; 6h ago
TriggeredBy: ● logrotate.timer
       Docs: man:logrotate(8)
             man:logrotate.conf(5)
    Process: 134486 ExecStart=/usr/sbin/logrotate /etc/logrotate.conf (code=exited, status=0/SUCCESS)
   Main PID: 134486 (code=exited, status=0/SUCCESS)
        CPU: 61ms

Feb 22 00:00:00 til-adm-01 systemd[1]: Starting logrotate.service - Rotate log files...
Feb 22 00:00:00 til-adm-01 systemd[1]: logrotate.service: Deactivated successfully.
Feb 22 00:00:00 til-adm-01 systemd[1]: Finished logrotate.service - Rotate log files.
```

## Exploring acct(1) Capabilities

There are multiple tools available from the acct package that can be used for
monitoring user acctivity and processes. One thing to bare in mind is these
commands may need to be run with elevated privileges if you're not apart of the
various groups. The `adm` group is assigned read access for the
`/var/log/account/pacct` log file. Otherwise, use `sudo` if you're not apart of
this group membership.

This includes the following commands.

- lastcomm(1)
- sa(1)
- ac(1)

I will be making a separate note on the RHEL package. As the setup is different
and it has similar but also different commands to use.

### Exploring The lastcomm(1) Command

The first command I'm exploring is the `lastcomm(1)` command. This command is
used to print information about previously executed commands on the system. The
command is pretty smart to where you don't always need to specify the desired
flag of which resource you're looking into. Which is useful when I see something
I feel the need to look into.

To show the version of the `lastcomm(1)` command. The following command can be
run.

```sh
lastcomm -V
```

First command is just the `lastcomm(1)` command itself. Using it by itself will
print all of the commands in the acct record file.

```sh
lastcomm
```

Here is a snippet of the output provided for this. It shows various commands
used and the users that ran them. Depending on weather they're local or not.
We'll see a pseudo-terminal number or a `--` in the next column. There is a
flags column before the user colmn that provides how the process was ran. 

Wanted to provide a little more context for the flags colmn. I pulled this from
the `lastcomm(1)` man page.

- S: command executed by super-user
- F: command executed after a fork but without a following exec
- C: command run in PDP-11 compatibility mode (VAX only)
- D: command terminated with the generation of a core file
- X: command was terminated with the signal SIGTERM

Then of course The time the processes were ran are in the last column.

```sh
...
chmod                  _apt     __         0.00 secs Thu Feb 19 15:32
mktemp                 _apt     __         0.00 secs Thu Feb 19 15:32
apt-key           F    _apt     __         0.00 secs Thu Feb 19 15:32
gpgv                   _apt     __         0.00 secs Thu Feb 19 15:32
apt-config             _apt     __         0.00 secs Thu Feb 19 15:32
dpkg                   _apt     __         0.00 secs Thu Feb 19 15:32
apt-key           F    _apt     __         0.00 secs Thu Feb 19 15:32
apt-config             _apt     __         0.00 secs Thu Feb 19 15:32
dpkg                   _apt     __         0.00 secs Thu Feb 19 15:32
apt-config             _apt     __         0.00 secs Thu Feb 19 15:32
dpkg                   _apt     __         0.00 secs Thu Feb 19 15:32
apt-config             _apt     __         0.00 secs Thu Feb 19 15:32
dpkg                   _apt     __         0.00 secs Thu Feb 19 15:32
apt-config             _apt     __         0.00 secs Thu Feb 19 15:32
dpkg                   _apt     __         0.00 secs Thu Feb 19 15:32
apt-key           F    _apt     __         0.00 secs Thu Feb 19 15:32
https                X root     __         0.00 secs Thu Feb 19 15:32
gpgv                 X root     __         0.00 secs Thu Feb 19 15:32
dpkg                   root     __         0.00 secs Thu Feb 19 15:32
dpkg                   root     __         0.00 secs Thu Feb 19 15:32
(sd-rmrf)        SF    root     __         0.00 secs Thu Feb 19 15:32
(sd-rmrf)        SF    root     __         0.00 secs Thu Feb 19 15:32
ubuntu-distro-i        root     __         0.00 secs Thu Feb 19 15:32
(sd-close)        F    root     __         0.00 secs Thu Feb 19 15:32
python3          S     root     __         0.09 secs Thu Feb 19 15:32
ubuntu-distro-i        root     __         0.00 secs Thu Feb 19 15:32
apt-get           F    root     __         0.00 secs Thu Feb 19 15:32
sh                     root     __         0.00 secs Thu Feb 19 15:32
systemctl        S     root     __         0.00 secs Thu Feb 19 15:32
id                     root     __         0.00 secs Thu Feb 19 15:32
http                 X root     __         0.00 secs Thu Feb 19 15:32
https                X root     __         0.00 secs Thu Feb 19 15:32
dpkg                   root     __         0.00 secs Thu Feb 19 15:32
dpkg                   root     __         0.00 secs Thu Feb 19 15:32
dpkg                   root     __         0.00 secs Thu Feb 19 15:32
dpkg                   root     __         0.00 secs Thu Feb 19 15:32
dpkg                   root     __         0.00 secs Thu Feb 19 15:32
...
```

If we wanted to look at the processes for a specified username. We would filter
by the username using the command shown below.

```sh
lastcomm <username>
```

Here is the output from the command for the `exampleuser` user. 

```sh
sudo             S     exampleu pts/0      0.00 secs Thu Feb 19 15:44
sudo              F    exampleu pts/1      0.00 secs Thu Feb 19 15:44
sudo             S     exampleu pts/0      0.06 secs Thu Feb 19 15:43
sudo              F    exampleu pts/1      0.00 secs Thu Feb 19 15:43
bash              F    exampleu pts/0      0.00 secs Thu Feb 19 15:43
command-not-fou        exampleu pts/0      0.05 secs Thu Feb 19 15:43
snap                 X exampleu pts/0      0.03 secs Thu Feb 19 15:43
bash              F    exampleu pts/0      0.00 secs Thu Feb 19 15:33
dircolors              exampleu pts/0      0.00 secs Thu Feb 19 15:33
lesspipe               exampleu pts/0      0.00 secs Thu Feb 19 15:33
lesspipe          F    exampleu pts/0      0.00 secs Thu Feb 19 15:33
dirname                exampleu pts/0      0.00 secs Thu Feb 19 15:33
basename               exampleu pts/0      0.00 secs Thu Feb 19 15:33
bash              F    exampleu pts/0      0.00 secs Thu Feb 19 15:33
locale                 exampleu pts/0      0.00 secs Thu Feb 19 15:33
bash              F    exampleu pts/0      0.00 secs Thu Feb 19 15:33
locale-check           exampleu pts/0      0.00 secs Thu Feb 19 15:33
systemctl              exampleu __         0.00 secs Thu Feb 19 15:33
systemctl              exampleu __         0.00 secs Thu Feb 19 15:33
systemctl              exampleu __         0.00 secs Thu Feb 19 15:33
(sd-exec-strv)    F    exampleu __         0.00 secs Thu Feb 19 15:33
systemd-xdg-aut        exampleu __         0.00 secs Thu Feb 19 15:33
(sd-exec-strv)    F    exampleu __         0.00 secs Thu Feb 19 15:33
30-systemd-envi        exampleu __         0.00 secs Thu Feb 19 15:33
```

If we would like to looks at the accounting for a specific command. We can
either type in the command or use the `--command` flag for this.

```sh
lastcomm --command <command>
```

This will output the use of this command. In this case I checked when the last
time the `usermod(1)` command was used to modify users. In this case it looks
like the `exampleuser` may have logged into the system using SSH to modify one
of the users using this command.

```sh
usermod                exampleu pts/0      0.00 secs Thu Feb 19 16:27
```

If we wanted to investigate this further. We can type in the pseudo-terminal
interface into the command. This should normally look something like `pts/0`.
There is no need to use the `--tty` flag because `lastcomm` is pretty smart and
doesn't need to be told what to look for.

```sh
lastcomm <pseudo-terminal interface e.g pts/0>
```

As expected. The `exampleuser` output is shown with the other commands it has
for this particular SSH session.


```sh
usermod                exampleu pts/0      0.00 secs Thu Feb 19 16:34
who                    exampleu pts/0      0.00 secs Thu Feb 19 16:33
man                    exampleu pts/0      0.00 secs Thu Feb 19 16:32
pager                  exampleu pts/0      0.00 secs Thu Feb 19 16:32
man               F    exampleu pts/0      0.00 secs Thu Feb 19 16:32
nroff                  exampleu pts/0      0.00 secs Thu Feb 19 16:32
groff                  exampleu pts/0      0.00 secs Thu Feb 19 16:32
grotty                 exampleu pts/0      0.00 secs Thu Feb 19 16:32
troff                  exampleu pts/0      0.00 secs Thu Feb 19 16:32
tbl                    exampleu pts/0      0.00 secs Thu Feb 19 16:32
preconv                exampleu pts/0      0.00 secs Thu Feb 19 16:32
man               F    exampleu pts/0      0.00 secs Thu Feb 19 16:32
man               F    exampleu pts/0      0.00 secs Thu Feb 19 16:32
man               F    exampleu pts/0      0.00 secs Thu Feb 19 16:32
man               F    exampleu pts/0      0.00 secs Thu Feb 19 16:32
man               F    exampleu pts/0      0.00 secs Thu Feb 19 16:32
```

### Exploring The sa(1) Command

Moving on to the `sa(1)` command. Sometimes we just need some 

```sh
sa -V
```

```sh
sa -m
```

```sh
                                    16611   27737.81re       1.42cp         0avio     39841k
root                                 9307   27731.59re       1.31cp         0avio     69245k
_apt                                 5796       1.66re       0.10cp         0avio      1562k
exampleuser                           115       4.40re       0.01cp         0avio     13726k
fwupd-refresh                          10       0.06re       0.00cp         0avio     96797k
himds                                1382       0.00re       0.00cp         0avio      4149k
sshd                                    1       0.10re       0.00cp         0avio      3038k
```

```sh
sa -c
```

```sh
   16631  100.00%   27787.82re  100.00%       1.42cp  100.00%         0avio     39795k
      54    0.32%       1.25re    0.00%       0.53cp   37.54%         0avio      5535k   apt-get
       6    0.04%       3.16re    0.01%       0.17cp   11.94%         0avio  68550656k   .NET SigHandler
      79    0.48%       2.45re    0.01%       0.11cp    7.59%         0avio   2606972k   ***other*
       8    0.05%       0.10re    0.00%       0.09cp    6.16%         0avio      5184k   store
      55    0.33%       0.96re    0.00%       0.09cp    6.02%         0avio     10447k   python3
      12    0.07%       4.42re    0.02%       0.06cp    4.30%         0avio     15619k   python3.12
       3    0.02%       0.07re    0.00%       0.06cp    4.29%         0avio     16444k   apt-check
      25    0.15%       0.06re    0.00%       0.06cp    3.96%         0avio      7922k   cnf-update-db
      10    0.06%       0.06re    0.00%       0.06cp    3.95%         0avio     11957k   pro
      10    0.06%       3.64re    0.01%       0.05cp    3.67%         0avio     55312k   gc_worker
      47    0.28%   16543.44re   59.53%       0.04cp    3.10%         0avio     51661k   gmain
      20    0.12%      35.12re    0.13%       0.03cp    2.22%         0avio     95101k   gdbus
     295    1.77%   11118.37re   40.01%       0.02cp    1.23%         0avio         0k   kworker/dying*
     182    1.09%       0.62re    0.00%       0.01cp    0.87%         0avio      1440k   sysctl
       2    0.01%       0.01re    0.00%       0.01cp    0.52%         0avio      6427k   systemd-hwdb
      11    0.07%      25.19re    0.09%       0.01cp    0.48%         0avio     80383k   pool-spawner
       2    0.01%       0.01re    0.00%       0.01cp    0.36%         0avio      4066k   apt
      98    0.59%       0.51re    0.00%       0.00cp    0.29%         0avio      6169k   https
      28    0.17%       2.38re    0.01%       0.00cp    0.29%         0avio      7184k   (udev-worker)*
      80    0.48%       0.56re    0.00%       0.00cp    0.27%         0avio      5695k   http
       3    0.02%       0.00re    0.00%       0.00cp    0.16%         0avio      8330k   command-not-fou
       4    0.02%       0.01re    0.00%       0.00cp    0.14%         0avio    418304k   snap
      77    0.46%       1.41re    0.01%       0.00cp    0.13%         0avio      3982k   sudo
       5    0.03%       0.00re    0.00%       0.00cp    0.12%         0avio       772k   lastcomm
       2    0.01%       0.00re    0.00%       0.00cp    0.11%         0avio      6201k   apport
```



### Exploring The ac(1) Command

```sh
ac -V
```


```sh
ac
```

```sh
        total       16.21
```

```sh
sudo ac -d
```

```sh
Feb 11  total        1.02
Feb 12  total        0.01
Feb 18  total        0.92
Feb 19  total       11.58
Feb 22  total        2.46
Today   total        0.22
```

