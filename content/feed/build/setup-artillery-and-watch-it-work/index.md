---
title: "Install & Watch Binary Defense's Artillery Work In A Azure Ubuntu VM"
date: 2019-04-18T04:16:17-06:00
summary: "Notes for installing and configuring Binary Defense's Honeypot Artillery on an Azure Ubuntu VM. I also review how it works a little at the end of the post."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["infosec"]
---

## Summary
---

This tutorial shows how to setup Artillery on Ubuntu Server 18.04 LTS. 
Installation can be achieved on most Linux/Unix distributions though. Binary 
Defense has also developed support for Windows systems. Which is awesome! 
Artillery was created by David Kennedy and is maintained by his company Binary 
Defense.

Below is a link to Binary Defense’s Artillery repository.

- [Binary Defense - Artillery](https://github.com/BinaryDefense/artillery)

Artillery has a couple of great features. For those who don’t understand the 
gist of what what Artillery is, it is a honeypot. Which does the following.

- It can monitor the integrity of files on your file system.
- Spawns a cluster of open ports. Any connection to these ports will be logged.
- Will alert you via email should incidents occur.
- Monitor SSH and FTP ports for brute force attacks.
- Anti DOS support. Artillery will throttle connections when DOS attacks are 
  detected.
- Check web server’s root permissions.
- It will log to the local syslog file in /var/log/syslog. Remote logging can 
  be configured as well.
- When it detects attacks, it will ban IP addresses with automatic ban enabled. 
  Should it detect an attack on a port that isn’t in the exclusion list, it 
  will put that IP in the banlist.

So, how can this help me? Well, it can definitely make an attacker’s life 
harder. That is a plus. Which is a pretty big plus. Seems to be a reoccurring 
thing in Information Security. The job is to keep them out sure. But, in 
reality this is can be translated to making their lives harder and respond to 
intrusions as they occur. From my perspective, Artillery is a great way to 
achieve this.

Now that introductions are finished its time to go through the installation. 
The scope of this article will explain downloading, installing, and verifying 
that Artillery is working as expected. Configuration will be handled in another 
article.

## Obtaining Artillery
---

Artillery can be obtained by cloning the Git repository on Binary Defense’s 
GitHub. This can be achieved by cloning the repository. If you don’t have Git, 
you will need to install it on your system. Below you can see how to clone the 
repository into the current directory.

```sh
git clone https://github.com/BinaryDefense/artillery.git
```

This is the output from Git cloning the repository.

```sh
Cloning into 'artillery'...
remote: Enumerating objects: 35, done.
remote: Counting objects: 100% (35/35), done.
remote: Compressing objects: 100% (35/35), done.
remote: Total 1632 (delta 17), reused 3 (delta 0), pack-reused 1597
Receiving objects: 100% (1632/1632), 1.91 MiB | 14.17 MiB/s, done.
Resolving deltas: 100% (760/760), done.
```

Should you prefer to clone using SSH, you can do so with the SSH link.

Below I list the contents of the artillery directory. I will not expalain 
everything about the directory structure. Binary Defense has provided an 
explaination for it in the README.md file.

```sh
ls
```

Below is the output from the command.

```sh
README.md  artillery.py  artillery_start.bat  config  readme  remove_ban.py  restart_server.py  setup.py  src
```

## Installing Artillery
---

Installing Artillery is simple. All you need to do is run the setup.py 
file. If you choose to install artillery unattended, you can do this by 
running setup.py -y. This will make all of the decisions for you.

```sh
sudo ./setup.py
```

In this case I go through the process of installing it manually. Yes, 
just for you. You can begin by running sudo ./setup.py in the terminal. 
This will start the installer and provide the initial banner.

The first option asks the user if they’d like allow Artillery to start 
automatically when the system starts. It does this by creating an init 
script.

```sh
Welcome to the Artillery installer. Artillery is a honeypot, file 
monitoring, and overall security tool used to protect your nix systems.

Written by: Dave Kennedy (ReL1K)

Do you want to install Artillery and have it automatically run when you restart [y/n]: y
[*] Beginning installation. This should only take a moment.
[*] Adding artillery into startup through init scripts..
[*] Triggering update-rc.d on artillery to automatic start...

Next the setup script asks if you would like to allow Artillery to update automatically. It will checkout Artillery to the /var/artillery directory. As you can see in the command output, you will also be able to update manually by using the git pull command in the directory.

[*] Do you want to keep Artillery updated? (requires internet) [y/n]: y
[*] Checking out Artillery through github to /var/artillery
Cloning into '/var/artillery'...
remote: Enumerating objects: 35, done.
remote: Counting objects: 100% (35/35), done.
remote: Compressing objects: 100% (35/35), done.
remote: Total 1632 (delta 17), reused 3 (delta 0), pack-reused 1597
Receiving objects: 100% (1632/1632), 1.91 MiB | 12.87 MiB/s, done.
Resolving deltas: 100% (760/760), done.
[*] Finished. If you want to update Artillery go to /var/artillery and type 'git pull'

Once finished, it will ask if you’d like to start Artillery and tell you that it’s been installed successfully. With it finished installing, the setup script includes the path to Artillery’s config file. Which is /var/artillery/config.

[*] Would you like to start Artillery now? [y/n]: y
Starting Artillery...                             Ok
[*] Installation complete. Edit /var/artillery/config in order to config artillery to your liking
```

## Artillery Overview
---

In this section I will provide a small look into where Artillery is configured, nmap output of a system that has Artillery running, and were to view attempts to connect to honeypot ports.

Configuration can be achieved by editing the /var/artillery/config file. I haven’t provided the full configuration file. But, if you’re finished installing you’re more than welcome to run vim /var/artillery/config to view and edit the config.

With the output we have available it wouldn’t hurt to provide a brief explaination on the output you have available here. But the comments are pretty self expainatory.

- MONITOR determines whether or not the monitoring service runs. OFF or ON are the values to use.
- MONITOR_FOLDER specifies folders that the monitoring service performs integrity on. You can add more folders if you wish.
- MONITOR_FREQUENCY specifies the monioring frequency. This is specified in seconds. The default frequency is 60 seconds, or one minute.
- SSH_DEFAULT_PORT_CHECK will check if the default SSH port is being used on the system. Artillery will recommend that you reconfigure this to a different port to help prevent SSH attacks.

Now you have a bit of overview on Artillery configuration. Please read it on your own in the meantime. I will be working on more articles on configuring the different features in Artillery in the future.

```sh
cat config
```

Below is the output from the commnad.

```sh
#############################################################################################
#
# This is the Artillery configuration file. Change these variables and flags to change how
# this behaves.
#
# Artillery written by: Dave Kennedy (ReL1K)
# Website: https://www.binarydefense.com
# Email: info [at] binarydefense.com
# Download: git clone https://github.com/binarydefense/artillery artillery/
# Install: python setup.py
#
#############################################################################################
#
# DETERMINE IF YOU WANT TO MONITOR OR NOT
MONITOR="ON"
#
# THESE ARE THE FOLDERS TO MONITOR, TO ADD MORE, JUST DO "/root","/var/", etc.
MONITOR_FOLDERS="/var/www","/etc/"
#
# BASED ON SECONDS, 2 = 2 seconds.
MONITOR_FREQUENCY="60"
#
# PORT 22 CHECK
SSH_DEFAULT_PORT_CHECK="ON"
```

Artillery will open up a slew of enticing ports that will just send data back that cannot be interpretted. Using nmap you can check for all the ports that are open. In the configuration file you can add more, but in this case the current list of ports work rather nicely.

```sh
nmap 40.113.246.212 -Pn
```

```sh
Starting Nmap 7.70 ( https://nmap.org ) at 2019-11-17 22:26 Central Standard Time
Nmap scan report for 40.113.246.212
Host is up (0.023s latency).
Not shown: 986 closed ports
PORT      STATE SERVICE
21/tcp    open  ftp
22/tcp    open  ssh
25/tcp    open  smtp
110/tcp   open  pop3
1433/tcp  open  ms-sql-s
1723/tcp  open  pptp
5060/tcp  open  sip
5061/tcp  open  sip-tls
5800/tcp  open  vnc-http
5900/tcp  open  vnc
8080/tcp  open  http-proxy
10000/tcp open  snet-sensor-mgmt
16993/tcp open  amt-soap-https
44443/tcp open  coldfusion-auth

Nmap done: 1 IP address (1 host up) scanned in 28.72 seconds
```

Lastly, Artillery sends logs to the /var/log/syslog file by default. You can view this by using cat, tail, etc. Artillery was installed on an Azure virtual machine. I did this and allowed all connections through Azure’s application firewall to allow any connections through. As soon as I am done with it, the VM will be deleted.

In the config file, you can configure a syslog server to send the logs to. So, should you have centralized logging server. It might be a good idea to configure this. Might even include it in another article.

In the current log, you can see that Artillery has detected the following.

    SSH is using password authentication on the server enabled.
    That it was unable to bind to port 22. Mostly because I haven’t reconfigured the OpenSSH server to listen on a different port. If I did, Artillery would be listening to that port and it would log attempts to attack with it’s IP address.
    Logs for IP addresses that are located in China and Bangladesh attacking the honeypot. Should the automatic block feature were enabled, it would add the IP to the blacklist.

```sh
Nov 18 04:19:56 UbuntuLearn [!] 2019-11-18 04:19:56: Artillery was unable to bind to TCP port: 22. This could be to an active port in use.
Nov 18 04:19:56 UbuntuLearn [!] message repeated 2 times: [ 2019-11-18 04:19:56: Artillery was unable to bind to TCP port: 22. This could be to an active port in use.]
Nov 18 04:19:56 UbuntuLearn [!] Issue identified: Password authentication enabled. An attacker may be able to brute force weak passwords.
Nov 18 04:19:56 UbuntuLearn [!] Issue identified: Password authentication enabled. An attacker may be able to brute force weak passwords.
Nov 18 04:19:56 UbuntuLearn [!] 2019-11-18 04:19:56: Artillery was unable to bind to TCP port: 22. This could be to an active port in use.
Nov 18 04:19:56 UbuntuLearn [!] Issue identified: Password authentication enabled. An attacker may be able to brute force weak passwords.
Nov 18 04:19:56 UbuntuLearn [!] Issue identified: Password authentication enabled. An attacker may be able to brute force weak passwords.
Nov 18 04:19:56 UbuntuLearn
Nov 18 04:19:56 UbuntuLearn  message repeated 7 times: []
Nov 18 04:30:24 UbuntuLearn 2019-11-18 04:30:24.555030 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433
Nov 18 04:30:24 UbuntuLearn 2019-11-18 message repeated 4 times: [ 04:30:24.555030 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433]
Nov 18 04:30:25 UbuntuLearn 2019-11-18 04:30:25.129717 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433
Nov 18 04:30:25 UbuntuLearn 2019-11-18 message repeated 5 times: [ 04:30:25.129717 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433]
Nov 18 04:30:25 UbuntuLearn 2019-11-18 04:30:25.791359 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433
Nov 18 04:30:25 UbuntuLearn 2019-11-18 message repeated 6 times: [ 04:30:25.791359 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433]
Nov 18 04:30:26 UbuntuLearn 2019-11-18 04:30:26.651141 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433
Nov 18 04:30:26 UbuntuLearn 2019-11-18 message repeated 7 times: [ 04:30:26.651141 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433]
Nov 18 04:30:27 UbuntuLearn 2019-11-18 04:30:27.922193 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433
Nov 18 04:30:27 UbuntuLearn 2019-11-18 message repeated 8 times: [ 04:30:27.922193 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433]
Nov 18 04:30:29 UbuntuLearn 2019-11-18 04:30:29.386492 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433
Nov 18 04:30:29 UbuntuLearn 2019-11-18 message repeated 9 times: [ 04:30:29.386492 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433]
Nov 18 04:30:30 UbuntuLearn 2019-11-18 04:30:30.846810 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433
Nov 18 04:30:30 UbuntuLearn 2019-11-18 message repeated 10 times: [ 04:30:30.846810 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433]
Nov 18 04:30:32 UbuntuLearn 2019-11-18 04:30:32.319369 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433
Nov 18 04:30:32 UbuntuLearn 2019-11-18 message repeated 11 times: [ 04:30:32.319369 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433]
Nov 18 04:30:33 UbuntuLearn 2019-11-18 04:30:33.785350 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433
Nov 18 04:30:33 UbuntuLearn 2019-11-18 message repeated 12 times: [ 04:30:33.785350 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433]
Nov 18 04:30:35 UbuntuLearn 2019-11-18 04:30:35.246512 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433
Nov 18 04:30:35 UbuntuLearn 2019-11-18 message repeated 13 times: [ 04:30:35.246512 [!] Artillery has detected an attack from IP address: 218.61.58.118 for a connection on a honeypot port: 1433]
```

## Conclusion
---

So, there it is. This was just a brief explaination on how to install 
and use Artillery on Linux. Artillery is a honeypot that gives System 
Administrators and Security Professionals the ability to make attacker’s 
lives harder.

In this article I went over some of the features that Artillery provides. I also showed you how to obtain the installer from the repository and install it from the repository.

I briefely went over the configuration file for Artillery and what it looks like when you scan a machine that has Artillery installed. Lastly, I went over the logs in an Artillery installation.

This is an older post that I'll be working through and updating with a 
later version of Artillery. This will be provided in a future post.
