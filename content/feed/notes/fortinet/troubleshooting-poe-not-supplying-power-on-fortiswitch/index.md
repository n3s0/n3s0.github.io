---
title: "Troubleshooting PoE Not Supplying Power To Ports On FortiSwitch"
author: "Timothy Loftus (n3s0)"
description: "Notes on PoE ports not supplying power on a FortiSwitch. With disussion of the troubleshooting process and resolution."
date: 2025-10-15T15:25:27-06:00
lastmod: 2025-10-15
cover: short-circuit.png
draft: false
tags: ["netadmin"]
---

## Summary

Recently I experienced a bizzare issue where a FortiSwitch wasn't supplying POE
power to anything you plugged into it. Whether that be a wireless access point
or other PoE devices were  plugged in the switch would not supply power. 
Essentially the access points at this particular site went offline randomly with
a log stating they left. Just grew some legs and dipped. Error logs were quiet
as well.

This is what I can remember from that issue along with ways to fix it.

## Troubleshooting

Devices that don't need PoE to power on functioned as expected. No PoE indicator
on the switch ports within the GUI either for devices that needed it. There
wasn't a log indicating there was an issue with PoE on the switch. So, I thought
it was the device we had plugged in.

Initally I thought this was an issue with the access point. So I asked that some
spares be taken on site. But, later realized that was the wrong move.

I had someone on site move the port of the PoE device to multiple ports on the 
switch. But, no dice. Which made me think it was an issue with the switch and
how it was supplying PoE.

I logged into the switch and got to work. I checked the PoE status on a random 
port to see what it would tell me using the following command.

```sh
diagnose switch poe status port11
```

Which provided the following output. I know for a fact this port should have PoE
enabled on it. The temperature was as concerning as the Power-Status and the
power metric. But, this only proved there was an issue somewhere.

```sh
Port(11) Power:0.00W,	Power-Status: Disabled
Power-Up Mode: Normal Mode
Remote Power Device Type: PD None
Power Class: 0
Defined Max Power: 0.0W, Priority: Low.
Voltage: 0.00V
Current: 0mA
Temperature: 275.00 Centigrade
```

Used the following command to get the Poe Firmware Version on the FortiSwitch. 
I read that ```0.0.0.0``` or ```15.15.15.15``` as the version number indicates 
there is a big issue with PoE on the switch.


```sh
get hardware status
```

The output; which has been redacted, inidicates there is an issue. The article I
read stated that when we are faced with this we need to turn off the device for
thirty minutes and turn it back on to see if PoE is either restored or that
there is a ```Poe Firmware Version``` present after running the above command
again.

```sh
...
Poe Firmware Version:15.15.15.15
```

After letting the FortiSwitch sit powered off for thirty minutes. PoE didn't
work and the same firmware version - ```15.15.15.15``` - was the value from the
status command above.

I ran a debug report on the switch and created a support ticket with Fortinet.
Replaced the switch with a cold backup we had on hand and went through their RMA
process to get the defective switch replaced.

Below is the diagnose command I ran on the defective FortiSwitch to generate
the report for Fortinet Support. This command outputs a bunch of information for
Fortinet to look through so they can determine next steps. They also requested a
backup of the FortiGates configuration.

```sh
diagnose debug report
```

The fix and recomendations from Fortinet can be found in [The Fix](#the-fix)
section of this article. I didn't work through further troubleshooting steps. 

## The Fix

This is a lesson to keep multiple devices of the same model as cold backups for
your gear. Which luckily in this case we did. So we replaced the switch,
configured it, and confirmed everything worked.

Ultimately, the fix was to contact Fortinet Support after obtaining a debug and 
the data listed in the [troubleshooting](#troubleshooting) section. New switch 
was sent overnight and we needed to transfer the contract to the new switch in 
the support portal. The defective switch needed to be sent back to Fortinet.

## Lessons Learned

Sometimes there is no telling when something like this will happen. But, if you
don't get stingy with your support contracts and you're willing to spend a
little more for cold backups. You will be fine. Just pull as much information
off of the device as you can for support, get the device replaced in the rack,
and get it all fixed.

Fortinet will overnight this gear as long as the device is supported and under a
support contract. So stay on top of renewals and the outage window will not be
horrible.

