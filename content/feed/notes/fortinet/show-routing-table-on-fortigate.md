---
title: "Show Routing Table On FortiOS"
date: 2025-06-19T15:25:27-06:00
summary: "Notes for showing the routing table on FortiOS."
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

Getting information related to the routing on FortiGate firewalls can be
extremely useful step to verify the sanity of the routes on the device. So,
here is where I note where I note some commands used to interrogate the routing
table within FortiOS.

Will need to be connected to the web console with the terminal open or SSHed to
the FortiGate to perfrom the commands.

## Routing-Table All
---

This command will give you all of the routes learned or available within the
routing table.

Can include the following routes.

- Static routes
- BGP routes
- Directly connected routes.
- OSPF routes
- IS-IS routes
- Others

The next part of this section is where we'll explain the routing table in finer
detail. But, for now. This below is the command for obtaining the routing table
for all routes.

```sh
get router info routing-table all
```

For those interested and reviewing the potential output associated with the
command. The data provided has been updated to reflect the routing table of a
network that doesn't exist.

The output provides a lot of information to digest.

1. Provides a table for reference regarding the different route types within the
   routing table.
2. Provdes the VRF number that houses the routes.
3. Default route. (Indicated by *)
4. Static routes indicated by S.
5. BGP routes indicated by B.
6. Connected routes indicated by C.

The list goes on an on depending on how many networks are in the routing table.

```sh
Codes: K - kernel, C - connected, S - static, R - RIP, B - BGP
       O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
       E1 - OSPF external type 1, E2 - OSPF external type 2
       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area
       V - BGP VPNv4
       * - candidate default

Routing table for VRF=0
S*      0.0.0.0/0 [1/0] via 74.125.224.72, wan1, [1/0]
S       172.16.0.0/16 [254/0] is a summary, Null, [1/0]
B       192.168.1.0/24 [200/100] via 172.16.12.1 (recursive via toLAB01 tunnel 74.125.224.20), 2d01h28m, [1/0]
B       192.168.2.0/24 [200/100] via 172.16.12.1 (recursive via toLAB01 tunnel 74.125.224.20), 2d01h28m, [1/0]
B       192.168.3.0/24 [200/100] via 172.16.12.1 (recursive via toLAB01 tunnel 74.125.224.20), 2d01h28m, [1/0]
B       192.168.4.0/24 [200/100] via 172.16.12.1 (recursive via toLAB01 tunnel 74.125.224.20), 2d01h28m, [1/0]
B       192.168.5.0/24 [200/0] via 172.16.12.1 10.189.9.1 (recursive via toLAB01 tunnel 74.125.224.20), 06:09:41, [1/0]
B       192.168.6.0/24 [200/100] via 172.16.12.1 10.189.9.1 (recursive via toLAB01 tunnel 74.125.224.20), 2d01h28m, [1/0]
S       10.21.0.0/16 [10/0] via 172.16.12.1 10.188.2.0, test, [1/0]
B       10.22.10.50/32 [200/100] via 172.16.12.1 10.189.9.1 (recursive via toLAB01 tunnel 74.125.224.20), 2d01h28m, [1/0]
B       10.22.10.100/32 [200/100] via 172.16.12.1 10.189.9.1 (recursive via toLAB01 tunnel 74.125.224.20), 2d01h28m, [1/0]
B       10.99.0.16/32 [200/100] via 172.16.12.1 10.189.9.1 (recursive via toLAB01 tunnel 74.125.224.20), 2d01h28m, [1/0]
S       10.17.0.0/16 [10/0] via 10.17.2.0, test, [1/0]
...
C       74.125.224.72/29 is directly connected, wan1

Routing table for VRF=100
C       192.168.0.0/24 is directly connected, guest
```

There are multiple other commands that will show you specified routes. Replace
"all" with the route type that you need to see. Provided are a few example
commands.

I will not include example output. Just bear in mind that it only shows the
routes the command asks for and not the others.

Show all BGP routes in the routing-table.

```sh
get router info routing-table bgp
```

Show all static routes in the routing-table.

```sh
get router info routing-table static
```
