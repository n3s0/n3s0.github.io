---
title: 'Cisco: Configure A Range Of Interfaces On A Switch'
date: 2022-02-22T16:49:01+06:00
summary: "Discuss how to configure multiple Cisco IOS ports with the interface range command."
draft: false
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

I keep having days where I don't configure Cisco networking gear for a 
week or so. In that time I forget small details on how to navigate Cisco 
IOS.

Going to start writting these posts if I forget something so I can look 
back on them later.

Today the lack of recall was configuring a range of ports on a Cisco 
switch. Though this command should work on other devices that run 
Cisco IOS.

In this scenario, the switch needed a specific port range configured.
(e.g. gigabitEthernet 1/0/3 - gigabitEthernet 1/0/10). Needed to
configure the VLAN and Spanning Tree on the ports to put them on the 
correct subnet.

## Process
---

To do this, I connected to the switch using SSH and entered
global configuration mode.

```sh
configure terminal
```

Configuration mode looks like the following.

```sh
Switch(config)#
```

Then I proceeded go into the interface configuration mode using the
following command.

```sh
interface range gigabitEthernet 1/0/3 - 10
```

The new prompt will look something like the following.

```sh
Switch(config-if-range)#
```

Then I proceeded to configure the ports on the switch as needed.
