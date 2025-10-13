---
title: 'Announcements, Writters block, and Some Accomplishments'
date: 2024-10-20T16:49:01+06:00
summary: "Just a little announcement, writters block, and an accomplishment for the day."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["journal"]
---

## 02:22
---

Good to know that my [OpenBSD wirguard server setup](/notes/20221203170137/) 
article is working as expected still. I did a speed run of it and I didn't run 
into any hiccups for it. So, that's a plus. I dicided to move some stuff around. 
It seems more efficient to generate he keys first and then complete the setup.

## 13:06
---

Writers block is something else...

## 23:34
---

One notable thing I accomplished; apart from some family stuff, is I played around
with Terraform a little today. Created something that would allow me to tinker 
around with Vultr easier. Application of the config will push a new cloud instance
to play with and make me less likely to make a mistake during configuration.

One thing that I'll note is that I need to put together an application that will
provide the information I need. Just in case I need to deploy in other regions.

I will post about it later. Currently have been focusing primarily on OpenBSD
deployments.

## 23:38
---

Some more fun with Ansible today. I wrote a playbook that will help setup 
Wireguard on an OpenBSD server. Which can be useful. Should there be any
need to build new ones or add more peers quickly.

The process the Ansible script follows is very similar to the following article
I wrote a few years ago. 

I'm happy to know that it's still valid. I did a manual walk through and it
needed little modification.

## 23:48
---

I think with some of my next project I'm going to start building tor nodes using
terraform and an Ansible playbook. But, generally my requirement is. I need 
to have a working note on the process. These generally halp with troubleshooting.
Especially in the event that automation fails. Which it usually has a tendancy of
doing from time to time...

## 23:54
---

Next big project is to work through building Wireguard site-to-site tunnels between
a Raspberry Pi and another VPC with a little networking involved.

- [Personal VPN Setup Using Wireguard, OpenBSD, and Vultr VPS](/notes/20221203170137/)

If I had the money, I would explore configuring 4G or 5G cellular within that same
spectrum. For disaster recovery purposes.

