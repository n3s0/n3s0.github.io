---
title: "Using .local As A Top Level Domain"
date: 2026-05-05T15:00:00-06:00
lastmod: 2026-05-05
summary: "Notes on .local as a top level domain and why it's a bad idea."
draft: false
author: "Timothy Loftus (n3s0)"
tags: ["DNS"]
---

## Summary
---

This note discusses some opinions and best practices related to using `.local`
as a top-level domain.

To save yourself from reading this article. Unless you really want to. `.local`
is a reserved top-level domain for `mDNS` standardized by [RFC 6762](https://datatracker.ietf.org/doc/html/rfc6762). 
Apple uses it heavily for Bonjour for zero-configuration networking. So you may 
have issues down the road if you were to utilize it. There are ways to fix it if
adding Apple products to a pre-established environment. But, that is one of the
primary reasons apart from there are multiple options available for private DNS.
Just use those.

## Why Not?
---

Short answer is because `.local` is reserved for `mDNS` and it may cause
compatability issues, certificate issues, complications with network troubleshooting,
etc. on your network. I'll go into more detail below. But, I would recommend not
using the top-level domain because there are plenty of options available for
hosting internal services available spread across RFCs and the like.

> First of all. Do whatever you like. Your networks aren't my networks. I'm 
> merely providing a recomendation based on some experiences that could have 
> been avoided.

If you never plan on having Apple devices on your home or corporate networks.
You're probably golden. Though keep in mind that Chromebooks also use mDNS. Your
systems administrators will probably thank you if you never do. But,
realistically I don't think I've ever worked for a company that truely didn't
use Macbooks or didn't catch the Apple bug in some form. That one sales rep.
that thinks they're a special snowflake is going to want a Macbook. They'll
mention it the CEO of the company. CEO of the company will agree to it and tell
them that they get one and to have IT contact them if there are any issues with
this request. (Yes, it happens)

### Standards Compliance & Compatability Issues
---

The `.local` domain is a reserved top-level domain for `mDNS` from [RFC 6762](https://datatracker.ietf.org/doc/html/rfc6762).
So, any device on the network that utilizes Apple's Bonjour or other form of
mDNS interpretation/implementation will be using this on the network.
Essentially if say a Macbook is attempting to resolve your applications DNS
entry. It will default to using mDNS. Not to mention mDNS is prioritized for the
`.local` top-level domain. So it will attempt to resolve it over mDNS before it
attempt to resolve using DNS.

Short answer for this is not using `.local` for internal domains prevents naming
conflicts with DNS.

So, to prevent this. There are recomendations referenced in [RFC 2606](https://datatracker.ietf.org/doc/html/rfc2606).
Better yet, if a public domain is already owned. Also register a subdomain under
that and use it. Basically, if you own `example.com`. Just register
`internal.example.com` or `int.example.com` for internal use.

### Service Discovery Issues
---

The use of mDNS can be used for service discovery on LANs. Using it with
traditional DNS may conflict with how mDNS operates or cause a service to become
unavailable because mDNS was used instead of DNS to resolve the hostname.

### Network Troubleshooting Difficulty
---

Troubleshooting this isn't very fun. There is way to differintiate between the
two depending on the platform using it. But, as a network administrator myself.
I have seen first hand a Macbook attempt to resolve a `.local` domain and
choose mDNS services over traditional DNS services.

## How Can I Avoid This?
---

Either choose a different top-level domain or use a sub-domain for
infrastructure you already have. A sub-domain makes it easier to differintiate
between public and private. But, also choosing a top-level domain like
`.invalid` ensures that it is. You may even see things like `.home` or
`.private` already on local networks when a new home router is installed. One
can follow [RFC 2606](https://datatracker.ietf.org/doc/html/rfc2606) to see 
reserved domains for internal (LAN) networks.

> One thing to note is this is information is it was written in 1999. So, take
> it with a grain of salt.

The following doamin names are reserved for internal use as stated by RFC 2606.

- `.test`
- `.example`
- `.invalid`
- `.localhost`

I can go into detail on how I would setup DNS for different scenarios in future
notes. I might even provide scenarios on how I would set this up using only open
source tools as well. I've been wanting to deploy this for a while with DHCP
services like `Kea` just to learn them. NSD and Unbound is something I've setup
in the past but haven't wrote about. So, I may consider doing this in the
future.

There are recommendations out there that advise against
split-brain/split-horizon DNS. Due to how it needs to be configured. I've seen
it described as a nightmare. But, I've managed these kinds of servers using an
internal sub-domain. and I haven't seen any issues or troubleshooting mishaps.

## Conclusion
---

Those are some of the reasons why I will probably never setup `.local` domains
for internal networks. Will also advise against doing so in the future for those
reasons alone.

> I will be adding more to this in the future with more examples, scenarios, and
> references. So, please stay tuned.

