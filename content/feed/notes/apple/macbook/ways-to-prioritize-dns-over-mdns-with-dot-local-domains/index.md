---
title: "Ways To Prioritize DNS Over mDNS On Macbooks With .local Domains"
date: 2026-05-06T01:00:00-06:00
lastmod: 2026-05-06
summary: "Notes on how mDNS is prioritized on the .local top-level domain."
draft: false
author: "Timothy Loftus (n3s0)"
tags: ["Apple", "Macbook", "DNS", "mDNS"]
---

## Summary
---

This note was inspired by a scenario I came accross recently that forced me to
look into how Macbooks handle both DNS and mDNS. This was one of those scenarios
that was fixed solely because the client provided a PCAP of the network traffic
going out to a specific `.local` domain. [Yes, it's not recommended to utilize
`.local` domains](/feed/notes/dns/dont-use-dot-local/). Primarily due to the 
problems it can have when Apple products are introduced into the environment.

Basically the Macbook was attempting to use mDNS to find `host.example.local`.
So, it used mDNS to look for it instead of traditional DNS. There are a few ways
to fix Macbooks so they don't do this for specific domains.

- Don't use `.local` as a top-level domain for your network.
- Update the `/etc/hosts` file of the Macbook.
- Add a file to `/etc/resolver`.
- Set search domain on the interface.

Based on what I could see from the PCAP that was provided me. The Macbook was
attempting to resolve the hostname `hostname.local` using `mdns.mcast.net`.

```pcap
57	3.572994100	0.000733500	fe80::b234:133a:674c:1183	ff02::fb	    MDNS	94	Standard query 0x0000 A hostname.local, "QM" question
58	3.581650700	0.008656600	10.189.6.5	                mdns.mcast.net	MDNS	74	Standard query 0x0000 A hostname.local, "QM" question
59	3.582527700	0.000877000	fe99::b234:133a:674c:1183	ff02::fb    	MDNS	94	Standard query 0x0000 A hostname.local, "QM" question
```

## Don't Use .local As A Top-Level Domain
---

I have spoken on this in a [previous article](/feed/notes/dns/dont-use-dot-local/). 
But, I wanted to touch on it in brief. The `.local` top-level domain should not 
be used because it may cause conflicts with `mDNS`. The `.local` domain is in 
fact used by Apple devices to resolve configuration information for other Apple 
devices.

## Update The /etc/hosts File
---

This can be accomplished by opening the `/etc/hosts` file and adding a line with
the IP address on the network. The `/etc/hosts` file is checked before querying
`mDNS`. So, this will fix that.

Here is the line you can add to the `/etc/hosts` file.

```sh
172.16.0.14 hostname.domain.local hostname
```

## Add A File To /etc/resolver

This method tells the Macbook to use specified `nameservers` for querying
certain `.local` domains.

First a directory named `resolver` will need to be created in the `/etc`
directory if it doens't already exist.

```sh
mkdir -p /etc/resolver
```

Then we'll need to create a file named after the domain. In the example. I chose
`example.local` which will have the full path `/etc/resolver/example.local`.
For those following along. Name yours after your domain.

```sh
touch /etc/resolver/example.local
```

That file will need to be modified with the `nameservers` for this particular
domain.

```
nameserver: 172.16.10.10
nameserver: 172.16.10.11
```

It's my understanding that this will resolve the issue where the Macbook will
attempt to resolve using mDNS and will use DNS instead.

## Set Search Domain On Interface
---

The searchdomain can also be set on the interface(s) specified. This can help
with name resolution for specific names where you just need to use the name of
the server first.

```sh
networksetup -searchdomains <interface name> example.local
```

## Conclusion
---

In this note I discussed some of the pitfalls of using the `.local` top-level
domain and recommended against its use. But, in the event that you're locked
into that domain 
