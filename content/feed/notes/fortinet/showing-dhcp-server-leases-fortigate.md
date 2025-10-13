---
title: "FortiGate: Showing DHCP Server Leases On FortiGates"
date: 2023-07-17T08:50:46-06:00
summary: "Notes for showing DCHP server leases on FortiGate firewalls through CLI."
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

Notice that this regards DHCP servers and not relays. 

These are some notes for showing the DHCP leases issued out by a
FortiGate firewall.

One thing to consider is multiple pools can be configured for multiple
networks at a time. So, don't be destroying the addresses on all of the
networks with what's learned here.

## Listing Leases
---

The command below will list all leases handed out by the DHCP server on
the FortiGate.

```sh
execute dhcp lease-list all
``` 

Below is the output of the command. This will show the following data
related to the DHCP pool hosted by the FortiGate firewall. This will
show the following information.

- Interface/Pool Name
- Lease IP
- Leased MAC Address
- Hostname
- VCI
- SSID
- AP
- Server-ID
- Lease Expiry

```sh
www-dmz
  IP            MAC-Address             Hostname            VCI      SSID                AP                 SERVER-ID           Expiry
  172.16.100.5  00:B0:D0:63:C2:26                                                                           1                   Mon Jul 24 12:11:45 2023
home-lab
  IP            MAC-Address             Hostname            VCI      SSID                AP                 SERVER-ID           Expiry
  192.168.10.6  00:B0:D0:63:C2:27       tl-app-01                                                           2                   Mon Jul 24 04:09:31 2023
  192.168.10.10 00:B0:D0:63:C2:28       tl-pi-01                                                            2                   Mon Jul 24 10:52:48 2023

```

One interface or pool can be listed as well by specifiying its name.
This will list all of the needed information related to it.

```sh
execute dhcp lease-list home-lab
```

The output can be shown below.

```sh
home-lab
  IP            MAC-Address             Hostname            VCI      SSID                AP                 SERVER-ID           Expiry
  192.168.10.6  00-B0-D0-63-C2-27       tl-app-01                                                           2                   Mon Jul 24 04:09:31 2023
  192.168.10.10 00-B0-D0-63-C2-28       tl-pi-01                                                            2                   Mon Jul 24 10:52:48 2023
```


