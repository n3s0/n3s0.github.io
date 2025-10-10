---
title: "Configuring DNS Using esxcli On VMware ESXi 6.7"
author: "Timothy Loftus (n3s0)"
date: "2022-07-06T14:37:14-05:00"
lastmod: 2025-10-10
description: "Notes for configuring DNS using esxcli on ESXi 6.7."
tags: [ "VMware ESXi 6.7" ]
draft: false
---

## Summary

Needed to add some DNS configuration to some ESXi 6.7 servers in a lab.
I've never done this. Nor did I have access directly to the console at
the time. So, I decided to SSH into the console and use the esxcli
command to do the work.

Another post related to a different scenario where you move to different
name servers can be found below.

- [VMware ESXi 6.7: Changing DNS Servers Using esxcli](https://info.n3s0.tech/2022/07/06/20220706143717)

In this case, I'm starting from no DNS configuration at all or have 
removed the current configuration already.

## Adding DNS Server(s)

Time to configure the DNS server(s) now.

The following command will add the IP address of the DNS server 
192.168.0.50 to the DNSServers list. These are the servers the ESXi
server will use for name resolution.

```sh
esxcli network ip dns server add --server="192.168.0.50"
```

The following esxcli command will list the DNS servers configured on 
the ESXi server.

## Listing DNS Server(s)

```sh
esxcli network ip dns server list
```

The output should provide the new DNS server configuration in the 
DNSServers column. It shows that the DNS server configuration is set to
192.168.0.50. Which is right where I want it to be.

```sh
   DNSServers: 192.168.0.50
```

## Adding Search Domain(s)

Domain Search or Search Domain are used interchangeably. This is best 
utilized if you don't want to add the domain to every host lookup.
Though, it's generally up to you to decide if you want to configure it.

The following command will add search domain configuration to the 
system. This will add the domain lab.example.org to the domain search 
list.

```sh
esxcli network ip dns search add --domain "lab.example.org"
```

## Listing Search Domain(s)

The following command will list the search domains configured on the system.

```sh
esxcli network ip dns search list
```

Output can be found below. Looks like the search domains have been added
successfully to the system. Now it should be time to test and confirm
everything is working as expected.

```sh
    DNSSearch Domains: lab.example.org
```

## Testing

A couple of ways to test this is to use the ping(1) and nslookup(1) 
commands from the ESXi server. These are available for use on the system.

Tested that name resolution actually works by pinging the ADM server in
the lab a handful of times. Below is the command used to do so. This
wont work for anyone else. Mostly because it's not your network. Though,
if you wanted to open a terminal on your machine. You could do the same
with openbsd.org or something.

```sh
ping -c 4 lab-adm-01.lab.example.org
```

As shown below. The four pings reach their destination by utilizing
the name server configuration set for the device. Below are four 
successful pings to the OpenBSD ADM server in the lab.

```sh
PING lab-adm-01.lab.example.org (192.168.0.100): 56 data bytes
64 bytes from 192.168.0.100: icmp_seq=0 ttl=250 time=0.566 ms
64 bytes from 192.168.0.100: icmp_seq=1 ttl=250 time=0.651 ms
64 bytes from 192.168.0.100: icmp_seq=2 ttl=250 time=4.162 ms
64 bytes from 192.168.0.100: icmp_seq=3 ttl=250 time=1.127 ms

--- lab-adm-01.lab.example.org ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 0.566/1.626/4.162 ms
```

Need to dig a bit deeper to make sure it's using the DNS server that 
was set for name resolution. Onward!

Below is the command used to resolve the DNS name for the server using
nslookup(1).

```sh
nslookup lab-csw-01.lab.example.org
```

Confirm successful name resolution to its IP address using the nslookup(1)
command and verify that it's using the server that was set before. Also
not a bad idea to confirm that it actually works.

```sh
Server:         192.168.0.50
Address:        192.168.0.50:53

Non-authoritative answer:
Name:   lab-csw-01.lab.example.org
Address: 192.168.0.253

Non-authoritative answer:
```

