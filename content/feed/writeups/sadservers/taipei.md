---
title: "Taipei: Come a-knocking"
author: "Timothy Loftus (n3s0)"
date: 2024-10-12T12:56:01-06:00
lastmod: 2025-10-15
summary: "Write up for the Taipei challenge. A scenario that goes through how to port knock on a firewall."
draft: false
tags: ["sadservers", "infosec"]
---

## Summary
---

This is my write up for the Taipei port knocking challenge.

## Scenario
---

Below is the scenario provided by SadServers.

Level: Easy

Description

There is a web server on port :80 protected with Port Knocking. Find the one 
"knock" needed (sending a SYN to a single port, not a sequence) so you can curl 
localhost.

Test: 

Executing curl localhost returns a message with md5sum 
fe474f8e1c29e9f412ed3b726369ab65. (Note: the resulting md5sum includes the new 
line terminator: echo $(curl localhost))

Time to Solve: 15 minutes.

OS: Debian 11

Root (sudo) Access: No

## Solution
---

Attempted to connect to port 80/tcp using curl just to check the port.

```sh
curl localhost
```

Connection failed from the looks of it. Firewall is blocking the connection like
they said it was going to.

```sh
curl: (7) Failed to connect to localhost port 80: Connection refused
```

Decided to scan localhost using nmap.

```sh
nmap localhost
```

The Nmap scan outputted 8080/tcp so that may be the port we need to knock.

```sh
Starting Nmap 7.80 ( https://nmap.org ) at 2024-10-12 22:15 UTC
Nmap scan report for localhost (127.0.0.1)
Host is up (0.000099s latency).
Not shown: 998 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
8080/tcp open  http-proxy

Nmap done: 1 IP address (1 host up) scanned in 0.07 seconds
```

Used the knock command to send a connection to port 8080/tcp.

```sh
knock localhost 8080
```

Checked the ports again by scanning localhost with Nmap.

```sh
nmap localhost
```

Based on th output from Nmap it looks like port 80 is open now.

```sh
Starting Nmap 7.80 ( https://nmap.org ) at 2024-10-12 22:15 UTC
Nmap scan report for localhost (127.0.0.1)
Host is up (0.000084s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
8080/tcp open  http-proxy

Nmap done: 1 IP address (1 host up) scanned in 0.06 seconds
```

Checked the port again using curl.

```sh
curl localhost
```

Looks like the output is the following from that port this time.

```sh
Who is there?
```

Checked the MD5 hash using the following command.

```sh
echo "Who is there?" | md5sum
```

Looks like it matches the hash provided in the test of this challenge.

```sh
fe474f8e1c29e9f412ed3b726369ab65  -
```

Ran the check and it looks like everything is good to go.

