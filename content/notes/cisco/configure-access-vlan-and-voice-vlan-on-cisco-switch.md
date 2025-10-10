---
title: "Configuring An Access & Voice VLAN On A Cisco Switch Port"
date: "2022-06-13T13:28:01-05:00"
lastmod: 2025-10-10
author: Timothy Loftus (n3s0)
description: "Notes for configuring a VLAN on a Cisco switch port."
tags: [ "cisco", "netadmin" ]
draft: false
---

## Summary

This article goes through configuring a VLAN on a switch port on a Cisco
switch. These are just notes intended for future use in case I forget
how to configure this.

## Switch Configuration

After signing into the switch. Go into the terminal configuration
prompt. Once you finish entering this, you should see ```(config)``` in
the prompt.

```sh
configure terminal
```

Access the configuration prompt for the interface. Once you enter this
you should see ```(config-if)``` in the prompt.

```sh
interface gigabitethernet 1/0/3
```

Configure VLAN 110 as an access VLAN.

```sh
switchport access vlan 110
```

Configure VLAN 200 as the Voice VLAN.

```sh
switchport voice vlan 200
```

Exit from the interface configuration mode.

```sh
exit
```

Exit from the terminal configuration mode.

```sh
exit
```

## Saving Changes

Save the running configuration to the startup configuration so the
changes are persistent across reboots.

```sh
copy running-config startup-config
```

## Confirming Changes

Check the changes made to the running configuration by looking at the
running configuration file. Look for the port gigabitethernet 1/0/3 or
whatever port was set. This should also be saved to the startup-config
when looking at that also. Considering the previous command that was
provided.

```sh
show running-config
```

This will provide the current configuration for the device. When you
look at the output of the command. The changes should reflect the
configuration specified in the commands entered above.

## Conclusion

Now we should have all of the steps on how to configure a VLAN on a
Cisco switch port. Note that this article only explains how to configure
this for a switch port and doesn't actually explain how VLANs work.
You'll want to do your own research into this. I'm merely putting this
here for reference.

