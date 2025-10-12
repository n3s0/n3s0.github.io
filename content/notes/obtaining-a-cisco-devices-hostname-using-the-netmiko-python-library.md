---
title: "Obtaining A Cisco Devices Hostname Using The Netmiko Python Library"
author: "Timothy Loftus (n3s0)"
date: 2024-03-07T08:36:08+06:00
lastmod: 2025-10-12
description: "Little script for obtaining cisco device hostnames for later use."
draft: false
tags: ["netadmin", "code"]
---

## Summary
---

So I’ve wanted to poke and prod at network automation for a while. But, didn’t know where to start. I’ve automated some tasks in the past with Ansible playbooks. Which are useful as a standard use case. I’m just branching out to other things.

This is a little script that utilizes the Netmiko Python library to obtain the hostname of the device. In another post I plan on using this data as areporting header for a script that collects data about Cisco devices.

This script uses the data provided in the tlab-csw-01 to setup the connection to the switch.

Then it’ll connect to the switch, send the command ‘show running-config | include hostname’ and filter the output of that command using the split() method on index 1. Which will obtain the hostname for the switch.

For those unfamiliar with indexing. Indexing starts at 0 and increments up in Python dictionaries.

## Code
---

Here's the code I use to do this.

```python
from netmiko import ConnectHandler

tlab-csw-01 = {
     'device_type': 'cisco_ios',
     'ip': '192.168.1.253',
     'username': 'admin',
     'password': 'password'
}

connect = ConnectHandler(**tlab-csw-01)

print (connect.send_command('show running-config | include hostname').split()[1])

connect.disconnect()
```

The output below shows the hostname for the device. The output in the reporting aspect would be stored in a variable for later use within the script in the future.

Output:

```sh
tlab-csw-01
```
