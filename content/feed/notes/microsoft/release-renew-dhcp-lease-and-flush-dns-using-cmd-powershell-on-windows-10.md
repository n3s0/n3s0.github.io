---
title: "Release/Renew DHCP and Flush DNS Using CLI/PowerShell On Windows 10"
date: "2022-07-01T10:14:38-05:00"
lastmod: 2025-10-10
author: "Timothy Loftus (n3s0)"
description: "Just some notes for releasing, renewing, and flushing DNS using the ipconfig command in Windows."
tags: [ "PowerShell", "windows" ]
draft: false
---

## Summary

Just some notes. I have my days where I do this a lot. But, just in case
I don't and forget down the road. Might as well have this available.

These are generally useful when I'm troubleshooting DHCP issues and IP
issues on Windows workstations. I haven't provided any output. But, if I
feel it's needed. I will soon.

I'll update this with any other useful commands.

Note that all commands will need to be executed as Administrator.

## Showing IP Information

I'll provide a quick link to how to show your IP interface information
on Windows systems soon.

## Release

Sends a DHCPRELEASE message to the DHCP server on the network. This will
release the current DHCP configuration; discarding the IP configuration
for all adapters on the system.

This operation is only performed on all adapters that are configured to
obtain an IP configuration automatically.

```powershell
ipconfig /release
```

## Renew

Renews the DHCP configuration for all adapters on the system. Will do so
for all adapters on the system configured to obtain an IP configuration
automagically.

```powershell
ipconfig /renew
```

## FlushDNS

Flush the DNS resolver cache on the local system. This will discard
invalid/broken entries that have been added to the DNS cache
dynamically.

```powershell
ipconfig /flushdns
```

## Conclusion

That concludes the notes for today. This is generally a troubleshooting
step when you're troubleshooting DHCP on a Windows network interface.
Should be useful in the future.
