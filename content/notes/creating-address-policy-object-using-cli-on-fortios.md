---
title: "Creating Policy Address Objects Using CLI On FortiOS"
date: 2023-07-31T23:58:03+06:00
lastmod: 2025-10-11
author: "Timothy Loftus (n3s0)"
summary: "Notes for creating policy address objects on FortiGate firewalls using the CLI."
draft: false
tags: ["netadmin"]
---

This will be a short post that goes through creating FortiGate policy 
address objects within FortiOS CLI. It’s useful to configure address 
objects in your firewall because it makes management of the rules a 
little simpler when defining policy.

Create an address on the “lab” interface with the address 172.16.128.26.

```sh
config firewall address
  edit "tl-log-01"
    set associated-interface "lab"
    set subnet 172.16.128.26/32
  next
end
```

Create an address on the “lab” interface named “lab subnet” with the 
subnet of 172.16.128.0/24. This will match traffic to all of the 
traffic on this subnet passing through that interface and the rules 
assigned to it.

```sh
config firewall address
  edit "lab subnet"
    set associated-interface "lab"
    set subnet 172.16.128.0/24
  next
end
```
