---
title: "Fortinet: Add DHCP Server To VLAN Interface With DMZ Role On FortiGate"
date: 2023-07-17T15:25:27-06:00
summary: "Notes for adding a DHCP server to a FortiGate firewall VLAN interface with the DMZ role through cli."
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

On FortiGate firewalls with 802.1Q VLAN interfaces. The DMZ role can be
assigned to the interface. But, with this also comes a caveat. If this
DMZ needs to have a DHCP server. It cant be configured through the web
interface. So, it needs to be configured using the command line. Here I
explore how to do do this.

## Scenario
---

In this particular scenario there is a VLAN interface configured on
port9 on a FortiGate VM named tl-app-01.

This senario utilizes the following subnet. This will allow for only two
usable hosts within the subnet and I only have one server that needs
this.

- Network: 172.16.172.0/30
- Subnet: 255.255.255.252

## Configuration
---

To set the configuration. You connect to the firewalls terminal and
configure it like so. A little explaination as to what this does.

1. Enters the (dhcp system server) configuration prompt.
2. Edit/Adds DHCP server 1.
3. Set the default gateway to 172.16.172.2.
4. Configure the subnet mask to the /30. (255.255.255.252)
5. Set the interface to the VLAN with the DMZ role. (tl-app-01)
6. Enter the IP range configuration prompt.
7. Edit the first pool.
8. Set the start IP to 172.16.172.2.
9. Set the end IP to 172.16.172.2.
10. Exit that by entering next.
11. Exit out of the IP range configuration by entering end.
12. Set the first dns server to 1.1.1.1.
13. Set the second dns server to 1.0.0.1.
14. Exit the configuration for dhcp server 1.
15. Exit the system dhcp server configuration prompt.

That should probably explain what this does. But, if something doesn't
make sense. You're welcome to contact me.

```sh
config system dhcp server
    edit 1
        set default-gateway 172.16.172.2
        set netmask 255.255.255.252
        set interface "tl-app-01"
        config ip-range
            edit 1
                set start-ip 172.16.172.1
                set end-ip 172.16.172.1
            next
        end
        set dns-server1 1.1.1.1
        set dns-server2 1.0.0.1
    next
end
```

Of course if you utilize strict firewall rules. Rules and objects will
need to be configured so IPs within your subnets can reach things like the
Internet and other things that an "app" server my need to access.

