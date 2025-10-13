---
title: "Create Static Routes Using CLI On FortiOS"
date: 2023-07-27T10:47:09-06:00
author: "Timothy Loftus (n3s0)"
lastmod: 2025-10-11
description: "Notes for creating static routes using FortiOS CLI"
draft: false
tags: [ "networking"  ]
---

Some notes for the creation of Static Routes on FortiGate firewalls in
FortiOS CLI.

Below creates a static route for the 172.16.128.0/24 that's attached
from the lab-vpn.

```sh
config router static
  edit 2
    set dst 172.16.128.0/24
    set device "lab-vpn"
  next
end
```

Create a blackhole route.

```sh
config router static
  edit 3
    set dst 172.16.128.0/24
    set device "lab-vpn"
    set distance 50
    set blackhole enable
    set vrf 0
  next
end
```
