---
title: "DHCP & DNS Operations Using PowerShell/CMD On Windows Clients"
date: "2022-07-01T10:14:38-05:00"
lastmod: 2026-03-23
author: "Timothy Loftus (n3s0)"
description: "Just some notes for releasing, renewing, and flushing DNS using the ipconfig command in Windows."
tags: [ "PowerShell", "CMD", "Windows" ]
draft: false
---

## Summary
---

Just some notes. I have my days where I do this a lot. But, just in case
I don't and forget down the road. Might as well have this available.

These are generally useful when I'm troubleshooting DHCP issues and IP
issues on Windows workstations. I haven't provided any output. But, if I
feel it's needed. I will soon.

> **Note:** Most commands will need to be executed as Administrator. With the
> exception to commands that are used to gather information. Depending on
> policy. Adminstrator privileges may still be needed.

## Showing IP Information
---

I'll provide a quick link to how to show your IP interface information
on Windows systems soon. But, in brief. If you would like to show your network
adapters on Windows devices. The following command can be used.

```powershell
ipconfig
```

To see the bigger picture (the full TCP/IP configuration for all adapters). The
`/all` flag can be used to broaden the scope of information provided.

```powershell
ipconfig /all
```

## Release
---

Sends a DHCPRELEASE message to the DHCP server on the network. This will
release the current DHCP configuration; discarding the IP configuration
for all adapters on the system.

This operation is performed on all adapters that are configured to obtain an IP 
configuration automatically.

```powershell
ipconfig /release
```

If you know what adapter you need to perform these actions on. The following
command can be used. Replace `"Adapter Name"` with the name of your adapter.

```powershell
ipconfig /release "Adapter Name"
```

## Renew
---

Renews the DHCP configuration for all adapters on the system. Will do so
for all adapters on the system configured to obtain an IP configuration
automagically.

```powershell
ipconfig /renew
```

Much like the `release` flag. You can specify the adapter using the same method.
Replace `"Adapter Name"` with the name of the adapter you're performing the work
on.

```powershell
ipconfig /renew "Adapter Name"
```

## Show Resolver Cache
---

To view the contents of the DNS client resoler cache. The `/displaydns` flag can
be used. This cache contains frequently used DNS queries dynamically. Used for
reference before it references the DNS server. This is useful if you need to
confirm suspicions of cache poisoning and stale chache entries.

```powershell
ipconfig /displaydns
```

## FlushDNS
---

Flush the DNS resolver cache on the local system. This will discard invalid/broken 
entries that have been added to the DNS cache dynamically. 

This is generally useful when you have a stubborn DNS cache entry or poisoned
DNS cache. 

> One scenario where this can help is if an IPSec tunnel goes down and that
> tunnel hosts a domain for a sister company that provides services to you.
> While that sister company also uses their public top-level domain as their
> internal domain name. When that tunnel goes down. DNS will resolve to the
> public provider poisoning the cache of your server with a public address that
> will potentially timeout. So with that being said it's usually best practice
> to use a subdomain if you must use your top-level doamin for internal use.

```powershell
ipconfig /flushdns
```

## Conclusion
---

That concludes the notes for today. This is generally a troubleshooting
step when you're troubleshooting DHCP on a Windows network interface.
Should be useful in the future.

