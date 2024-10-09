---
title: 'Show Configuration On Juniper'
date: 2024-10-06T13:10:01-06:00
summary: "Notes for showing the configuration on Juniper."
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

Some notes I took down during some time I spent with a Juniper SRX220. I
like to pick up different products and see how they integrate with
others. Be that Fortinet, Juniper, Polo Alto, or OPNSense. Helps me
become well rounded in my field.

Although I would like to just jump in and configure things. I'd say it's
been nearly a eight years since I've touched a Juniper device. Although
I loved it. Some things are foreign to me now. So, naturally. I will
need to go over the basic navigation and post that navigation as a
reference.

In this note, I will be going over how to look at device configuration
in multiple ways. There are a few ways you can do this. One being show
the full configuration for the device. The other is more specific. It
will show you just the things you're looking for. Such as the interface
configuration or the policy configuration for the device.

## Showing Configuration
---

No options will show you the full configuration for the device.

```sh
show configuration
```

This will output the following configuration.

```sh
## Last commit: 2024-10-06 12:08:17 CDT by root
version 12.1X46-D66.1;
system {
    host-name lab-srx220-r01;
    time-zone America/Chicago;
    root-authentication {
        encrypted-password "$1$p7/qUpYI$gT.CJ9zTOgt/fHYCanMiV1"; ## SECRET-DATA
    }
    name-server {
        1.1.1.1;
        1.0.0.1;
    }
    services {
        ssh;
        telnet;
        xnm-clear-text;
        web-management {
            http {
                interface vlan.0;
            }
            https {
                system-generated-certificate;
                interface vlan.0;
                                
```

One thing to note is every configuration has the last commit date and
time on the top line of the configuration in a comment. This will also
provide details regarding which time zone and which user committed the
latest change.

This will also provide the JunOS version the configuration file is for.

```sh
## Last commit: 2024-10-06 12:08:17 CDT by root
version 12.1X46-D66.1;
```

```sh
show configuration interfaces
```


```sh
show configuration system name-server
```


