---
title: "Saving Running Config to Startup Config On Cisco Devices"
author: "Timothy Loftus (n3s0)"
date: "2022-07-06T14:37:15-05:00"
lastmod: 2025-10-10
description: "Notes on copying running config to startup config on Cisco devices."
tags: [ "Cisco" ]
draft: false
---

## Summary

This is just a some notes on how to copy the running configuration to 
the startup configuration on a Cisco device. This could bean anything 
from a Cisco Router, switch, etc.

Notes will provide the commands and the output of what these commands
do.

## Copying Run to Start

The following command can be used to copy the running configuration to
the startup configuration on a Cisco device.

```sh
copy run start
```

OR

```sh
copy running-config startup-config
```

The following output means the command ran successfully and the 
configuration changes should persist across reboots. If need be
the startup-config can be checked to confirm.

```sh
Destination filename [startup-config]?
Building configuration...
[OK]
```

## Conclusion

Look! Simplistic notes on how to copy running configuration to startup 
configuration on Cisco devices. Yay!
