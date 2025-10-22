---
title: "Edit DNS Client Using systemd/resolved.conf File"
date: 2025-10-21T09:44:02+06:00
lastmod: 2025-10-21
author: "Timothy Loftus (n3s0)"
summary: "Notes for setting DNS configuration in the systemd resolved.conf file."
draft: false
tags: ["linux", "dns"]
---

## Summary

At some point we've all heard, "It's always DNS." We are heavily dependant on
it for browsing the web and ensuring we can use the name of an entity or device
for connectivity as opposed to the IP address. So, knowing how to configure the
local resolver on a Linux device is important for this.

This article is focused on the systemd resolver. Specifically on systems using
it solely and not like Ubuntu Server 22.04+ that uses netplan or others.

This article will not show you how to configure interfaces however. It's focus
is DNS configuration for the *systemd-resolved* service. Though, I can discuss
this in another note.

So, with that being said. Let's begin.

## Editing The resolved.conf File

To update the DNS when it's managed by systemd we need to update the
```/etc/systemd/resolved.conf``` file. This can be modified using any text
editor.

This file is located in a priviledge path. So, editing it will require elevated
priviledges and root and sudo will be required.

### Basic Config Options

The most simple configuration is to update the Primary and FallbackDNS settings
in the file. In this case

```ini
[Resolve]
...
DNS=1.1.1.1
FallbackDNS=8.8.8.8 1.0.0.1
...
```

The following example I show the DNS, FallbackDNS, and Domains configuration.
Multiple FallbackDNS and Domains can be added to their respective configuration
options using a space.

```ini
[Resolve]
...
DNS=1.1.1.1
FallbackDNS=8.8.8.8 1.0.0.1
Domains=example.local
...
```

### Other Config Options

I haven't used the other options; like DNSSEC or DnsOverTLS. But, as I use them
I'll provide config examples for it.

## Apply Configuration

After editing the file. The *systemd-resolved* service needs to be restarted to
refresh the configuration. This can be done using the *systemctl(1)* command.

```sh
systemctl restart systemd-resolved
```

If there are no issues with the configuration. There will be no output. Of
course use *dig(1)* or *nslookup(1)* to test this once the service is restarted.

## Conclusion

This note discusses configuring the systemd-resolved service for DNS resolution.
I discuss some basic configuration options to get started and how to apply the
configuration. Of course, if you're having issues. Please [contact](/contact) me
and I'll provide assistance.

