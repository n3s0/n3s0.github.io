---
title: "Hosting A Local DNS Server On A Raspberry Pi 3 B+ MK-I"
date: 2026-10-27T17:08:37-06:00
lastmod: 2026-10-27
author: "Timothy Loftus (n3s0)"
description: "Documenting how I'm hosting my eBook library on a computer in my Basement."
draft: true
tags: ["unbound","nsd", "dns", "Self-Hosted"]
---

## Summary
---

This project will discuss setting up a local DNS server for my home on a
Raspberry Pi 3 B+. Just so I can use a few local services like my Media server
and eBook library hosted on my local network. I will work through some of the
build process and explain why I decided to do things the way I do. I will also
include how I intend to improve design down the road.

The Raspberry Pi is going to act as a DNS server for my internal network. It
might provide other infrastructure services like DHCP as well. But, that is for
another article.

The Raspberry Pi will not be hosting DNS entries for the clients. But, the
infrastructure, services, and their hosts. This will prevent a administrative 
nightmare. But, in the future. If I implement DHCP I'll see if I can utilize it
to enter names of the clients.

## Networking
---

Thought the best place to start is networking. At the moment the setup is just
one subnet that hosts everything. With a few wireless networks that can and
can't see each other. Due to the fact that a lot of this is being rented and the
placement of the router. There aren't a whole lot of options for a more robust
setup.

There is one RFC1918 subnet that provides private addresses over wirless and
wired connections to the router. This is really all I need at the moment.

- *Subnet:* `192.168.12.0/24`

The Raspberry Pi 3 B+ is connected via a wired connection directly to my ISP
router. This will provide a stable connection for DNS requests.

A topology of this setup can be found in the image below.

> IMAGE

However, this is in an area that could be considered hostile. Toddlers, 
jokingly, are considered an insider threat. I personally admire the curiosity 
despite the fact that it technically brings the network down. Let's just say 
the door to that room remains closed and monitored.

The Raspberry Pi will be set to a static address within a DHCP network. So, on
my home router I shaved some space in the DHCP pool to allow a few devices to 
have static addresses.

- *DHCP Pool:* `192.168.12.0/24`
- *Start Address:* `192.168.12.20`
- *End Address:* `192.168.12.250`
- *Subnet (CIDR):* `255.255.255.0 (24)`

On the nework the DNS server hosted on the Raspberry Pi will have the following
IP address.

- *IP Address (CIDR):* `192.168.12.10/24`

## Hardware
---

Apart from existing infrastructure. There is a small list of hardware needed for
this project. I have listed the specs of the Raspberry Pi. Along with a hardware
listing of what's needed to complete this project.

### Hardware Listing
---

Below is the hardware listing of what was used to complete this project.

## Raspberry Pi 3 B+ Setup
---

Needed to start with the initial setup of the Raspberry Pi B+. Considering this
is a much older model. I decided to install Raspberry Pi OS Lite on an SD card
and boot to the OS. I also used this because I never intend to use the Raspberry
Pi Desktop. So that will conserve resources for the primary applications.

Wireless will not be configured on the Raspberry Pi.

Configure a static IP for the Raspberry Pi.

> commands and config here.

Perform updates on the Raspberry Pi.

```sh
sudo apt update
sudo apt full-upgrade
```

The command used for installing applications used in this build can be found
below.

```sh
sudo apt install -y nsd unbound
```

Configure and enable SSH.

```sh
sudo systemctl enable --now ssh
```

Configure the Raspberry Pi using `raspi-config`.

```sh
sudo raspi-config
```

Firewall configuration is an important part to this as well. Adding another
layer to prevent future mistakes. Plus it's just good practice put into
practice.

> UFW commands for setting up firewall.

## NSD Setup
---

Name Server Daemon (NSD) is an open-source authorative only DNS server developed
by NLnet Labs. It was build to be utilized as a companion to Unbound. But, this
application in a nutshell was built for performance, stability, reliability, and
security in mind. The zone file format is also similar to BIND. So, there isn't
much of a learning curve there.

It's possible that I wont even implement a majority of the features that NSD
provides. But, I will take many of them into consideration after the basic setup
and add more features later.

I worked through installing the needed software for this in the Raspberry Pi
setup. So, now I'm going to move to the configuration and testing of the NSD
service.

## Unbound Setup
---

## DHCP Updates
---



## Conclusion
---
