---
title: 'IPv4 Subnetting & VLAN Design For A Small Branch Office'
date: 2026-05-27T00:00:00-06:00
lastmod: 2026-02-18
summary: ""
draft: true
tags: ["networks"]
---

## Summary
---

I've wanted to notate some design that I've learned throughout the past two
years for IPv4 subnetting. Think of this as kind of a template for a
small office. I will go over the scenario and discuss some things to take into
consideration with this design. But, apart from that. This should mostly just
act as a template for future subnet designs.

This will not discuss the full spectrum of architecture as far as building the
network is concerned. It wont even go into detail on the infrastructure it's
connecting to. This note is solely to act as a subnetting and VLAN template for
either branch or small office.

## Scenario
---

This office doesn't host any services for other offices. These services are
provided from the VPN tunnel it's attached to. It's just an office for
users to come to in order to complete their work. There could be any number of
departments in this office. Customer service, sales, marketing, and maybe even
IT staff. This is just a branch of the existing network. So there is
infrastrucutre that  still exists.

Though from the VPN tunnel(s) the office will be supplied with the following
services.

- iBGP routing
- DHCP
- DNS
- NTP
- A few internal applications hosted by the company.

If anyone is interested in the infrastructure being installed however. Provided
is a little list of materials. Just to provide a basic picture of what we have
to work with.

- 1x 12U Network Rack
- 1x Firewall
- 1x 48-Port POE 1 Gigabit Switch
- 1x 24-port patch pannel
- 1x 48-port patch pannel (For any growth)
- 2x Wireless Access Points
- 1x Rack moutned UPS

Some of the requirements of this small office include:

- Up to 20 - 30 users with corporate laptops and desktops.
- A network to separate non corporaate devices like employee cell phones and
  other devices.
- Wireless network will be needed for corporate traffic.
- Wireless network will be needed for untrusted traffic.
- There will be 5 - 8 cameras installed for surveillance.
- There will be 2 badge controllers installed for door access.
- There will be desk phones that need to be on their own network.
- Management network for the network gear. (i.e. Firewall, Switches, UPS, and
  Wireless Access Points)
- Printing and Scanning will be needed for documents.
- A small loopback management subnet for managing the firewall. 

## Subnetting & VLANs
---

In this network there is a `/16` block that is used for the coprorate branch
networks. In case anyone was wondering that provides about 64 subnets in total
so there can be up to `64` `/22` subnets. The `/22` subnet is useful because it
provides `4` subnets. This provides everything needed for the corporate network
within the branch office. Another `/24` subnet will be added to the network for
untrusted traffic.

### Subnets
---

I will get the untrusted subnet out of the way because this is going to be
segmented from the rest of the network using firewall rules and possibly within
a VRF by itself. (This of course depends on if your router supports it)

Note that the corporate network should not know about this. The firewall may
even handle DHCP for this subnet as well.

- **Untrusted Subnet:** 172.16.0.0/24

Now that's out of the way. The corporate network is next. I will provide the
subnet template and then later I will explain it's usecases later.

- **Corporate Network:** 10.12.64.0/22
  - **Operations:** 10.12.64.0/24
    - **Network Mgmt:** 10.12.64.0/27
    - **Surveillance:** 10.12.64.128/28
    - **Door Access:** 10.12.64.192/29
    - **Print:** 10.12.64.200/29
    - **Firewall Mgmt Loopback:** 10.12.64.254/32
  - **Data:** 10.12.65.0/24
  - **Wireless:** 10.12.66.0/24
  - **Voice:** 10.12.67.0/24

#### Corporate Network 10.12.64.0/22

The subnet `10.12.64.0/22` is just the foundational block I'm working with here.
This is useful to know for things like summarized routes. Although the networks
would be housed in here. 

The primary function of having this available is route summarization so I'm 
not filling my advertised routes with a bunch of routes. Peers will see this
network and know they can route traffic to the router hosting that network and
not have to worry about the rest. 

- Network: 10.12.64.0
- Subnet Mask (CIDR): 255.255.252.0 (/22)

#### Operations 10.12.64.0/24

Operations `10.12.64.0/24` is another placeholder network just intended to 
display the heiarchy of the network. This can also be used

- Network: 10.12.64.0
- Subnet Mask (CIDR): 255.255.255.0 (/24)

#### Network Mgmt 10.12.64.0/27

This subnet `10.12.64.128/28`

#### Surveillance 10.12.64.0/22

This subnet `10.12.64.128/28`

#### Corporate Network 10.12.64.0/22

This subnet `10.12.64.128/28`

#### Corporate Network 10.12.64.0/22

This subnet `10.12.64.128/28`

#### Corporate Network 10.12.64.0/22

This subnet `10.12.64.128/28`

#### Corporate Network 10.12.64.0/22

This subnet `10.12.64.128/28`

### VLANs
---

- **Untrusted Subnet:** 1726
