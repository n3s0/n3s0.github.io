---
title: "Saskatoon: Counting IPs"
date: 2026-03-19T18:40:47-06:00
lastmod: 2025-10-19
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

Scenario: "Saskatoon": Counting IPs.

Level: Easy

Type: Do

Tags: bash  

Access: Email

Description: 

There's a web server access log file at /home/admin/access.log. The file 
consists of one line per HTTP request, with the requester's IP address at the 
beginning of each line (first column).

Find what's the IP address that has the most requests in this file (there's no 
tie; the IP is unique). Write the solution into a file 
/home/admin/highestip.txt. For example, if your solution is "1.2.3.4", you can 
do echo "1.2.3.4" > /home/admin/highestip.txt

NOTE: The solution IP shows 482 times, 
ie grep -c -F -f highestip.txt access.log returns 482, if your solution has a 
different (lower) number you got the wrong most common IP.

Root (sudo) Access: True

Test: The SHA1 checksum of the IP address sha1sum /home/admin/highestip.txt is 
6ef426c40652babc0d081d438b9f353709008e93 (just a way to verify the solution 
without giving it away, we also accept the right IP with no ending newline in 
the file.)

## Solution
---


## Conclusion
---


