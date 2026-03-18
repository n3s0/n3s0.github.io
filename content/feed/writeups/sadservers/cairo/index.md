---
title: "Cario: Time for a Timer"
date: 2026-03-17T18:40:47-06:00
lastmod: 2025-10-18
description: "One of those challenges where you need to close a pesky file that a process keeps opening."
author: "Timothy Loftus (n3s0)"
draft: false
tags: ["SadServers", "Linux"]
---

## Summary
---

Another SadServers scenario in the books! This one was run because not everyone
within Enterprise environments touch the host firwalls for servers. I configure
the firwall on servers. But, not with `iptables`. This was a good challenge
thaat could potentially help people see why it's important to not make mistakes
configuring your host firewall rules. Apart from that. I enjoyed reviewing
the configurations to see how things worked under the hood as well.

## Senario
---

**Scenario:** "Cairo": Time for a Timer

**Level:** Easy

**Type:** Fix

**Access:** Email

**Description:**

A critical health check script at /opt/scripts/health.sh is supposed to run 
every 10 seconds. This check is triggered by a systemd timer.

The script's job is to check the local Nginx server and write its status (e.g., 
"STATUS: OK") to the log file at /var/log/health.log.

The log file is not being updated, and it appears the health check is failing.

Find out why the health check system is broken and fix it. The check will pass 
once the /var/log/health.log file is being correctly updated by the timer with 
a STATUS: OK message.

**Root (sudo) Access:** True

**Test:** The /opt/scripts/health.sh script writes STATUS: OK to /var/log/health.log 
every 10 seconds.

## Solution
---

For the solution here I need to get the health check script to work as expected.
This script is located in `/opt/scripts/` and is named `health.sh`. Reading
through the script it looks like it tests the availability of the default Nginx
web root and returns `0` on success and `1` on failure. Simple enough.

```sh
#!/bin/bash
# This script logs status and exits with 0 on success, 1 on failure
if curl -s --max-time 2 http://localhost | grep -q "Welcome to nginx"; then
  echo "$(date): STATUS: OK" >> /var/log/health.log
  exit 0
else
  echo "$(date): STATUS: FAILED" >> /var/log/health.log
  exit 1
fi
```

I checked the services to find out they weren't running. But, once it's fixed.
I'll get them running.

Based on the `health.service` file. It will run the `health.sh` script once and
let it do its thing. Nothing jumped out at me as misconfigured.

```sh
[Unit]
Description=Health Check Service

[Service]
Type=oneshot
ExecStart=/opt/scripts/health.sh

[Install]
WantedBy=multi-user.target
```

The `health.timer` will run the `health.service` script every 10 seconds. For
this nothing seemed to be misconfigured either. So, I moved on and noted that I
would need to start them later.

```sh
[Unit]
Description=Run health check every 10 seconds

[Timer]
OnBootSec=10
OnUnitActiveSec=10
Unit=health.service

[Install]
WantedBy=timers.target
```

I did want to see the Nginx port that Nginx was listening on. But, I also wanted
to check to make sure the configuration for Nginx was good. Given that no errors
outputted for `sudo nginx -t`. It must be configured correctly to at least run.

I double-checked the port using two commands `lsof` and `ss`. Using `lsof` I
checked for processes listening on port 80.

```sh
sudo lsof -i TCP:80 -s TCP:LISTEN
```

Here is the output for this. Based on this there are four unique processes
listenting on this port.

```sh
COMMAND PID     USER FD   TYPE DEVICE SIZE/OFF NODE NAME
nginx   849     root 5u  IPv4   7212      0t0  TCP *:http (LISTEN)
nginx   849     root 6u  IPv6   7213      0t0  TCP *:http (LISTEN)
nginx   851 www-data 5u  IPv4   7212      0t0  TCP *:http (LISTEN)
nginx   851 www-data 6u  IPv6   7213      0t0  TCP *:http (LISTEN)
nginx   852 www-data 5u  IPv4   7212      0t0  TCP *:http (LISTEN)
nginx   852 www-data 6u  IPv6   7213      0t0  TCP *:http (LISTEN)
```

Next I checked it with the `ss` command. This will check for processes that are
listening on the server.

```sh
sudo ss -ltnp
```

Based on the output Nginx is listening on port 80 and there are no other web
servers already listening on that port.

```sh
State  Recv-Q Send-Q   Local Address:Port   Peer Address:Port Process                                                                       
LISTEN 0      4096           0.0.0.0:5355        0.0.0.0:*     users:(("systemd-resolve",pid=315,fd=12))                                    
LISTEN 0      4096        127.0.0.54:53          0.0.0.0:*     users:(("systemd-resolve",pid=315,fd=21))                                    
LISTEN 0      511            0.0.0.0:80          0.0.0.0:*     users:(("nginx",pid=852,fd=5),("nginx",pid=851,fd=5),("nginx",pid=849,fd=5)) 
LISTEN 0      4096     127.0.0.53%lo:53          0.0.0.0:*     users:(("systemd-resolve",pid=315,fd=19))                                    
LISTEN 0      128            0.0.0.0:22          0.0.0.0:*     users:(("sshd",pid=820,fd=6))                                                
LISTEN 0      4096              [::]:5355           [::]:*     users:(("systemd-resolve",pid=315,fd=14))                                    
LISTEN 0      4096                 *:8080              *:*     users:(("gotty",pid=771,fd=6))                                               
LISTEN 0      4096                 *:6767              *:*     users:(("sadagent",pid=772,fd=7))                                            
LISTEN 0      511               [::]:80             [::]:*     users:(("nginx",pid=852,fd=6),("nginx",pid=851,fd=6),("nginx",pid=849,fd=6)) 
LISTEN 0      128               [::]:22             [::]:*     users:(("sshd",pid=820,fd=7))     
```

Given that Nginx seems to be working as expected through checking the
configuration and confirming the listen port is correct for the health check
script. It's time to look at host firewall rules to see if there are any bad
entries.

This host seems to be using `iptables` as the firewall so I run the command with
the `-L` option to list the iptables.

```sh
sudo iptables -L
```

Nothing seems to jump out with the exception of the `OUTPUT` policies. One of
which drops access to port 80 from anywhere to destination localhost. There is
also a comment that states "hidden problem". So, the best bet. Is we're looking
at a firewall misconfiguration here.

```sh
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain FORWARD (policy DROP)
target     prot opt source               destination         
DOCKER-USER  all  --  anywhere             anywhere            
DOCKER-FORWARD  all  --  anywhere             anywhere            

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         
DROP       tcp  --  anywhere             localhost            tcp dpt:http /* The hidden problem (IPv4) */

Chain DOCKER (1 references)
target     prot opt source               destination         
DROP       all  --  anywhere             anywhere            

Chain DOCKER-BRIDGE (1 references)
target     prot opt source               destination         
DOCKER     all  --  anywhere             anywhere            

Chain DOCKER-CT (1 references)
target     prot opt source               destination         
ACCEPT     all  --  anywhere             anywhere             ctstate RELATED,ESTABLISHED

Chain DOCKER-FORWARD (1 references)
target     prot opt source               destination         
DOCKER-CT  all  --  anywhere             anywhere            
DOCKER-ISOLATION-STAGE-1  all  --  anywhere             anywhere            
DOCKER-BRIDGE  all  --  anywhere             anywhere            
ACCEPT     all  --  anywhere             anywhere            

Chain DOCKER-ISOLATION-STAGE-1 (1 references)
target     prot opt source               destination         
DOCKER-ISOLATION-STAGE-2  all  --  anywhere             anywhere            

Chain DOCKER-ISOLATION-STAGE-2 (1 references)
target     prot opt source               destination         
DROP       all  --  anywhere             anywhere            

Chain DOCKER-USER (1 references)
target     prot opt source               destination      
```

There may be better ways to delete policies. But, this is the method I chose. I
deleted by line number within the `OUTPUT` chain. Before doing this though. I
needed the line-numbers for this.

The following command was used to list the available line-numbers within the
`OUTPUT` chain.

```sh
sudo iptables -nL OUTPUT --line-numbers
```

Based on the output below. The policy number I'm deleting is number `1`.

```sh
Chain OUTPUT (policy ACCEPT)
num  target     prot opt source               destination         
1    DROP       tcp  --  0.0.0.0/0            127.0.0.1            tcp dpt:80 /* The hidden problem (IPv4) */
```

I use the following command to delete policy number 1.

```sh
sudo iptables -D OUTPUT 1
```

Once that is deleted. I list to see if it's still around using the same command
as last time.

```sh
sudo iptables -nL OUTPUT --line-numbers
```

Based on the output. The policy is no longer listed in the `OUTPUT` chain.

```sh
Chain OUTPUT (policy ACCEPT)
num  target     prot opt source               destination         
```

Next step is to confirm connectivity to the site. I did that using the curl
command. Which is expected by the health check script.

```sh
curl localhost:80
```

Looks like I'm golden on that one! It outputted the full webpage with the
"Welcome to nginx!" title. So there should be no issues with the grep command
the output is piped to.

```html
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
```

I ran the health check script using bash. Just to see if it would log an OK.

```sh
sudo bash /opt/scripts/health.sh 
```

Read through the `/var/log/health.log` file and it looks like it posted its
first `OK` message.

```sh
Wed Mar 18 17:42:47 UTC 2026: STATUS: OK
```

Now it's time to enable and start the `health.service` and `health.timer`
services so it will check the web service every 10 seconds.

```sh
sudo systemctl enable --now health.service health.timer
```

This will output that it created a `symlink` for each and if there are no errors
during startup. There will be no output. In this instance there weren't any
errors. So things are looking promising.

```sh
Created symlink '/etc/systemd/system/multi-user.target.wants/health.service' → '/etc/systemd/system/health.service'.
Created symlink '/etc/systemd/system/timers.target.wants/health.timer' → '/etc/systemd/system/health.timer'.
```

I used the tail command on the `/var/log/health.log` file with the `-f` flag to
keep the file open and allow me to view updates to the file.

```sh
tail -f /var/log/health.log
```

Based on the otuput below. It updates ever 10ish or so seconds. All of which
provide an OK status. So, I am definately golden on this challenge.

```sh
Wed Mar 18 17:42:47 UTC 2026: STATUS: OK
Wed Mar 18 17:43:03 UTC 2026: STATUS: OK
Wed Mar 18 17:47:12 UTC 2026: STATUS: OK
Wed Mar 18 17:47:24 UTC 2026: STATUS: OK
Wed Mar 18 17:47:34 UTC 2026: STATUS: OK
Wed Mar 18 17:47:58 UTC 2026: STATUS: OK
Wed Mar 18 17:48:09 UTC 2026: STATUS: OK
Wed Mar 18 17:48:24 UTC 2026: STATUS: OK
Wed Mar 18 17:48:25 UTC 2026: STATUS: OK
Wed Mar 18 17:48:54 UTC 2026: STATUS: OK
```

## Conclusion
---

I clicked the "Check Solution" button and there were party streamers and
flashing lights. Another challenge down. Time to move to the next one(s).

This challenge taught me how to test and poke around if anything. The solution
to this challenge is to correct a misconfigured firewall rule on the server.
Once that's corrected. I started the services and let them do their thing.

