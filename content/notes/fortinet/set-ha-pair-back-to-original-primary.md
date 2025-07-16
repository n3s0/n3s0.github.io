---
title: "Fortinet: Set HA Active-Passive FortiGate Cluster Back to Primary"
date: 2025-06-25T15:25:27-06:00
summary: "Notes for setting an HA active-passwive FortiGate cluster back to original state."
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

Sometimes you need to bring your FortiGate Active-Passive HA cluster back to the
original primary firewall. For either testing or because you really like that
devices.

This article shows a way that we can do that with a diagnostic command. It will
also discuss a method that we probably shouldn't use and why.

## Preferred Proceedure
---

The prefered method here depends on the priority of the HA pair being set
appropriately on the firewalls. This is only needed if overide is disabled.
Otherwise it will use the priority and not the uptime to determine the primary
firewall.

The difference between override enable and disable are the following.

- When enabled, device priority is more important then uptime when selecting the
  primary node. One of the cons to this is if you get a blip a double failover
  could occur. It makes it more automatic. But, there is a risk of a failover
  loop.
- When disabled, device uptime is the determining factor for electing the
  primary node. In the event of want to set the primary node back. The system HA
  uptime will need to be reset. Another option is to reboot the current primary
  node.

This can be configured in the system ha config on the firewall(s).

```sh
config system ha
  set override {enable|disable}
end
```

But, in the event that overide is disabled. We can reset the HA uptime on the
firewall to set it back to the primary firewall; if that matters to you. 

```sh
diagnose sys ha reset-uptime
```

## Troubleshooting Tidbits
---

Another troubleshooting tidbit is you can learn more about your HA configuration
by looking at it with the following command.

```sh
get system ha
```
