---
title: 'Updating Interface Metric On Windows'
date: 2025-09-22T10:08:01+06:00
summary: "Changing the interface metric on Windows so you can use wireless and Ethernet."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["windows", "netadmin"]
---

## The Gist
---

I have ran into instances where I or my boots on the ground don't have a console
cable available for troubleshooting. So a hotspot needs to be fired up and they
need to connect to the network with their interface. Whether that be the
management interface on a UPS or one of those default networks on a firewall.
(Yes, I keep those around for this scenario)

Windows has a tendancy of prioritizing the Ethernet adapter in the routing using
a metric on the interface for IPv4 and IPv6. Which can be problematic when
you're in need of both wireless and Ethernet interfaces for troubleshooting.

## The Troubleshooting Topology
---

This little topology generally looks like this locally. Generally you have some
RMM software your organization uses to manage the device remotely. But, without
Internet connectivity. This isn't possible in some cases.

```txt
Wireless Hot-Spot -> Computer Wifi -> Computer Ethernet -> Network to be Troubleshot
```

## Getting The Interface Metric
---

The following Cmdlet can be used to get the ifIndex, InterfaceAlias, and
InterfaceMetric for the devices we're looking for.

```powershell
Get-NetIPInterface
```

Output below provides all of the information we need to set the configuration as
needed. I'll cover that in more detail in the next section.

```powershell
ifIndex InterfaceAlias                  AddressFamily NlMtu(Bytes) InterfaceMetric Dhcp     ConnectionState PolicyStore
------- --------------                  ------------- ------------ --------------- ----     --------------- -----------
...
11      Ethernet                        IPv4                  1500               5 Enabled  Connected       ActiveStore
15      Wi-Fi                           IPv4                  1500              45 Enabled  Connected       ActiveStore
...
```

## Updating The Interface Metric
---

To update the metric we use the ```Set-NetIPInterface``` Cmdlet. Which can be
used to update configuration for IP interfaces. This includes IPv6 discovery
settings, router settings, DHCP, etc.

The objective here is to make the wireless interface the preferred route to the
Internet because the Ethernet interface will not have Internet connectivity.

Windows routing will prefer the lower metric. So, we need to make the
"InterfaceMetric" for Ethernet higher then Wi-Fi.

One way to think of this is to just get the sum of the Ethernet and Wi-Fi
InterfaceMetric(s) and set that as the InterfaceMetric for the Etherent ifIndex.
The value will be higher if that's the case.

```powershell
Set-NetIPInterface -InterfaceIndex <ifIndex> -InterfaceMetric <Metric higher then Ethernet>
```

This is how the command would look in this case.

```powershell
Set-NetIPInterface -InterfaceIndex 11 -InterfaceMetric 50
```

Once we're finished. We can verify our work. The InterfaceMetric for Ethernet is
higher then the one for Wi-Fi.

```powershell
ifIndex InterfaceAlias                  AddressFamily NlMtu(Bytes) InterfaceMetric Dhcp     ConnectionState PolicyStore
------- --------------                  ------------- ------------ --------------- ----     --------------- -----------
11      Ethernet                        IPv4                  1500              50 Enabled  Connected       ActiveStore
15      Wi-Fi                           IPv4                  1500              45 Enabled  Connected       ActiveStore
```

## Verifying It Works
---

For one you'll be able to connect your RMM softwar to the computer. The user
will have Internet connection from their computer. You'll also be able to
connect to the device you're troubleshooting. Judging we're discussing the same
scenario.

## Rolling Back
---

One way to rollback this configuration is to set the InterfaceMetric back to he
original value if a reboot doesn't do the job. Not to mention if you would
rather not reboot.

When setting it back consider subtracting the value of the Wi-Fi interface from
the Ethernet interface and setting the Ethernet interface ifIndex
InterfaceMetric to that value.

Or just set it to 5. I've seen that it usually defaults to 5.
