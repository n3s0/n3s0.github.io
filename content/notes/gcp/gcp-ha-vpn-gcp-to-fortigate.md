---
title: "Google Cloud Platform: HA VPN Between Two VPC Networks"
date: 2025-01-02T16:15:01-06:00
summary: "Notes for setting up an HA VPN between two VPC Networks."
draft: true
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showComments: true
showPagination: true
tags: ["netadmin"]
---

## Summary
---

I have working through training on Google Cloud Platform and one of the things
I've been curious about are their IPSec VPN tunnel offerings. In this particular
scenario I'm going to setup two VPC networks and setup an HA VPN between the two
VPCs. So in other words. Two separate Virtual Private Cloud networks in the same
project connecting together via two IPSec tunnels.

Below is a picture of the topology that I will be setting up.

The following subnets will be used in this topology. This can be different
depending on your environment. This is just the setup I used to work through
this.



## Conclusion
---

Later down the road I intend on documenting the setup for a Google Cloud HA VPN
with a FortiGate firewall.
