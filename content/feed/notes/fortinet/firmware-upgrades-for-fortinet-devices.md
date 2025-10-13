---
title: "Fortinet: Performing Updates on 'FortiFirmware'"
date: 2025-06-25T15:25:27-06:00
summary: "Notes for performing updates on Fortinet devices."
draft: true
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

Updating firmware is necessary for the health; not always the reliability, of
your network gear. That is why it's recommended to do so within a test lab and
research reported issues from various sources before performing updates within a
production environment.

Performing these actions aren't possible from the CLI apart from using an
On-Premise TFTP server. 

## Scenarios
---

I will be discussing the following "FortiDevices" and how firmware can be
updated.

- FortiGate (FortiOS)
- FortiSwitch (FortiSwitch)
- FortiAP (FortiAP)

I will be doing this for these two scenarios.

- FortiDevices controlled by a FortiGate firewall.
- FortiDevices configured in a standalone setting.

## FortiGate As Controller
---

Upgrading on fabric with a FortiGate as the switch or wireless acess point
controller is extremely effective. There are a few exceptions to this. Where
sometimes the wireless access point needs to move through an upgrade chain. But,
apart from that. I haven't run into anything major.

### FortiGates (FortiOS)
---

In the web GUI for FortiOS. Perfroming updates to the firmware can be
accomplished by first navigating


## Standalone Device
---

Sometimes you just have a standalone device and don't intend to utilize the full
"FortiStack". You either have standalone FortiGates, FortiSwitches, or FortiAPs.
