---
title: "SadServers: Tokyo: can't serve web file"
date: 2023-11-05T18:40:47-06:00
summary: "Notes from running through the Tokyo scenario from SadServers."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
invertPagination: true
showToC: true
openToC: false
showComments: false
showHeadingAnchors: true
---

## Scenario
---

Should anyone want to do this challenge. You can do so at the following 
link.

- [Tokyo: can't serve web file](https://sadservers.com/scenario/tokyo)

Level: Medium

Type: Fix

Description: There’s a web server serving a file /var/www/html/index.html with content “hello sadserver” but when we try to check it locally with an HTTP client like curl 127.0.0.1:80, nothing is returned. This scenario is not about the particular web server configuration and you only need to have general knowledge about how web servers work.

Test: curl 127.0.0.1:80 should return: hello sadserver

This was a fun one! It touches on some very simple web server troubleshooting that many know with the exception to people who are just getting their start. I’ll walk through it a little and provide the thought process behind solving this.

Time to Solve: 10 minutes.

## Solution
---

So, we cannot access the the web server even from the machine the web application is hosted on. When we run the curl(1) command to view the applciation from the command line. It just hangs and doesn’t do anything.

```sh
root@ip-172-31-21-14:/# curl 127.0.0.1:80
```

This could be a couple of things. This machine isn’t Red Hat Linux based. So, it takes SELinux out of the equation. So my first thought is perhaps the firewall is the firewall is blocking it because there is no timeout.

Checking the status of UFW with the following command shows it as inactive. Indicates that the system is using the default firewall. Which is iptables(1).

```sh
root@ip-172-31-21-14:/# ufw status
Status: inactive
```

Checking the systems iptables entries shows that there is a drop rule; numbered 1, for input from and to anywhere on port 80. This will need to be removed before anything can reach the web application.

```sh
root@ip-172-31-21-14:/# iptables -L --line-numbers
Chain INPUT (policy ACCEPT)
num  target     prot opt source               destination
1    DROP       tcp  --  anywhere             anywhere             tcp dpt:http

Chain FORWARD (policy ACCEPT)
num  target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
num  target     prot opt source               destination
```

To remove the rule. I entered the following command to delete the first INPUT rule.

```sh
root@ip-172-31-21-14:/# iptables -D INPUT 1
```

Listed the rules again to verify it’s gone and it’s no longer there. So now it’s time to test.

```sh
root@ip-172-31-21-14:/# iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination        
```

Ran the same command as last time. Now a new error comes up. The 403 Forbidden error can indicate a few things. But, in this case it’s probably file permissions for the file that’s being hosted. Generally it means the web server couldn’t access something. A best practice is to run these servers as a separate user account. Not root. So, if that user account cannot access the file. It wont be able to serve it.

```sh
root@ip-172-31-21-14:/# curl 127.0.0.1:80
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>403 Forbidden</title>
</head><body>
<h1>Forbidden</h1>
<p>You don't have permission to access this resource.</p>
<hr>
<address>Apache/2.4.52 (Ubuntu) Server at 127.0.0.1 Port 80</address>
</body></html>
```

Checking the file permissions of the index.html file. Looks like root 
owns the file and his the only user that can read and write to the file.

```sh
root@ip-172-31-21-14:/# ls -lah /var/www/html/index.html 
-rw------- 1 root root 16 Aug  1  2022 /var/www/html/index.html
```

The web server is Apache. Checking the configuration file should give us some insight into which user or group the server is running as. In this case we need to look at the envvars file to see what that is.

```sh
# These need to be set in /etc/apache2/envvars
User ${APACHE_RUN_USER}
Group ${APACHE_RUN_GROUP}
```

After checking the envvars file. It looks like in this case it’s the www-data user and group the Apache web server is running as. Going to need to change the permissions of the index.html file to fix this.

```sh
# Since there is no sane way to get the parsed apache2 config in scripts, some
# settings are defined via environment variables and then used in apache2ctl,
# /etc/init.d/apache2, /etc/logrotate.d/apache2, etc.
export APACHE_RUN_USER=www-data
export APACHE_RUN_GROUP=www-data
```

Changed the file permissions on index.html so they were owned by the www-data user and group. Going to test it again and see if it works.

```sh
root@ip-172-31-21-14:/# chown www-data:www-data /var/www/html/index.html
```

Looks like that works. We get the hello sadserver message back from the web server. This didn’t require a restart to the web server.

```sh
root@ip-172-31-21-14:/# curl 127.0.0.1:80
hello sadserver
```

Some key take aways from this. It’s not always server configuration that causes these things to break. Sometimes it’s the file system or the firewall - kind of hurt to say that. If you don’t pay attention to little things. It can impact the services you’re providing.

In this solution. You need to look for the firewall rules and the file permissions for the index.html file to solve it.