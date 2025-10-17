---
title: "Salta: Docker Container Won't Start"
author: "Timothy Loftus (n3s0)"
date: 2025-10-16T13:40:06-05:00
lastmod: 2025-10-16
summary: "My writeup for SadServers Salta challenge. Where you bring a Docker container back from the dead."
draft: true
tags: ["sadservers", "docker"]
---

## Summary

The Salta challenge is where you get to put your Docker troubleshooting skills
to the test. I wasn't too difficult. But, it wasn't easy. Recently I've had to
troubleshoot a few containers. So that aided in my proficiency with this
challenge.

## Scenario

Some general information about the challenge can be found below.

- Level: Medium
- Type: Fix
- Tags: docker realistic-interviews  
- Access: Email

Description: 

There's a "dockerized" Node.js web application in the /home/admin/app directory. 
Create a Docker container so you get a web app on port :8888 and can curl to it. 
For the solution to be valid, there should be only one running Docker container.

Some more information related to available access and testing.

- Root (sudo) Access: False

Test: 

```sh
curl localhost:8888
```

curl localhost:8888 returns Hello World! from a running container.

Time to Solve: 15 minutes.

## Solution
