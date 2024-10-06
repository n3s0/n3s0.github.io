---
title: 'Show Current JunOS Version'
date: 2024-10-05T17:23:01-06:00
summary: "Show the current JunOS version and other information. This was done on a Juniper SRX220."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["netadmin"]
---

## Summary
---

These are notes for showing the current JunOS version on a Juniper SRX220.

## Showing JunOS Version
---

Login to the Juniper and enter the following command to enter operational mode.

```sh
cli
```

The prompt should look similar to this. Operational mode is indicated by the ">" in the prompt.

```sh
root@lab-jsrx220-r01> 
```

The help for the version command can be displayed using the command below.

```sh
show version ?
```

Below is the output for the command.

```sh
  <[Enter]>            Execute this command
  brief                Display brief output
  detail               Display detailed output
  |                    Pipe through a command
```

With no options other then just "version". The version command will show the output for the brief subcommand.

```sh
show version
```

This is for running the brief output. It will output the same as version becuase it's the default.

```sh
show version brief
```

The output for this and the brief command will show the hostname, model, and the JunOS version.

```sh
Hostname: lab-jsrx220-r01
Model: srx220h-poe
JUNOS Software Release [12.1X46-D66.1]
```

This is the version detailed command. This will output a lot more information to the terminal.

```sh
show version detailed
```

Below is the output.

```sh
Hostname: lab-jsrx220-r01
Model: srx220h-poe
JUNOS Software Release [12.1X46-D66.1]
KERNEL 12.1X46-D66.1 #0 built by builder on 2017-04-26 03:31:59 UTC
MGD release 12.1X46.1 built by builder on 2017-04-26 05:05:52 UTC
CLI release 12.1X46-D66.1 built by builder on 2017-04-26 04:01:30 UTC
RPD release 12.1X46.1 built by builder on 2017-04-26 05:14:45 UTC
CHASSISD release 12.1X46.1 built by builder on 2017-04-26 05:15:20 UTC
IKED release 12.1X46.1 built by builder on 2017-04-26 05:02:03 UTC
GKSD release 12.1X46.1 built by builder on 2017-04-26 05:03:40 UTC
GKMD release 12.1X46.1 built by builder on 2017-04-26 05:03:28 UTC
PKID release 12.1X46.1 built by builder on 2017-04-26 04:50:58 UTC
SENDD release 12.1X46.1 built by builder on 2017-04-26 04:44:41 UTC
DFWD release 12.1X46.1 built by builder on 2017-04-26 04:54:25 UTC
DCD release 12.1X46.1 built by builder on 2017-04-26 04:47:51 UTC
SNMPD release 12.1X46.1 built by builder on 2017-04-26 04:55:01 UTC
MIB2D release 12.1X46.1 built by builder on 2017-04-26 05:02:32 UTC
VRRPD release 12.1X46.1 built by builder on 2017-04-26 04:56:05 UTC
ALARMD release 12.1X46.1 built by builder on 2017-04-26 04:51:38 UTC
PFED release 12.1X46.1 built by builder on 2017-04-26 04:54:16 UTC
CRAFTD release 12.1X46.1 built by builder on 2017-04-26 04:52:13 UTC
SAMPLED release 12.1X46.1 built by builder on 2017-04-26 04:48:38 UTC
RMOPD release 12.1X46.1 built by builder on 2017-04-26 04:51:17 UTC
...
```
