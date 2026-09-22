---
title: "Query For Device Traffic Using Microsoft Sentinel (KQL)"
date: 2026-09-22T09:01:05-06:00
lastmod: 2025-09-22
author: "Timothy Loftus (n3s0)"
description: "Notes for adding Shared Calendars to Microsoft Outlook."
draft: true
tags: ["Microsoft", "Microsoft Sentiel", "KQL", "Microsoft Defender"]
---

## Summary

Given the adoption of "cloud" within businesses. It's important to use the
landscape if it's available to you. Although I don't fully support "cloud" and
would prefer not to use it myself. It houses tools that are useful for
troubleshooting.

If you have Windows Defender and Microsoft Sentinel you can easily query traffic
using `KQL` or Kusto Query Language. WHich is a request language developed by
Microsoft for querying data within Microsoft Sentinel, Defender, Azure Data
Explorer, etc. I recall SANs Holiday Hack Challenge featuring a similar query
language that was used to query security events within the network. The dataset
was great to work through. So if anyone wants to get their feet wet with this.
Go ahead and check it out of they haven't disconnected the accounts yet.

If a scenario is needed. Think of this in the sense that you were either
provided the IP addresses and you know the target PC. You need to look for the
workstation and the PC that generated enough traffic to cripple a service on
your local network. This query is here to provide a reference to do just that
for environments that have Microsoft Sintinel and Microsoft Defender services
utilized within their environment.

## Query Source & Destination IP Addresses

The following KQL query will use the source and destination IPs to query network
events from the last 7 days. It uses the variables to query networks originating
from the source IP address and visa versa. Outputting all of the information
available displayed in the `project` line. In descending order by timestamp.

This will also provide informaiton regarding the processes running at the time
traffic was sent. Along with the user that ran said process.

```kql
let sourceIP = "";
let destinationIP = "";
DeviceNetworkEvents
| where Timestamp > ago(7d)
| where LocalIP == sourceIP and RemoteIP == destinationIP
  // If the direction can be either way (source or destination), use:
| where (LocalIP == sourceIP and RemoteIP == destinationIP) 
     or (LocalIP == destinationIP and RemoteIP == sourceIP)
| project Timestamp, DeviceId, DeviceName, ActionType, LocalIP, LocalPort, Protocol, LocalIPType, RemoteIP, RemotePort, RemoteUrl, 
            RemoteIPType, InitiatingProcessSHA1, InitiatingProcessSHA256, InitiatingProcessMD5, InitiatingProcessFileName, 
            InitiatingProcessVersionInfoCompanyName, InitiatingProcessVersionInfoProductName, InitiatingProcessVersionInfoProductVersion, 
            InitiatingProcessVersionInfoFileDescription, InitiatingProcessId, InitiatingProcessCommandLine, InitiatingProcessCreationTime, 
            InitiatingProcessFolderPath, InitiatingProcessParentFileName, InitiatingProcessParentCreationTime, InitiatingProcessAccountDomain, 
            InitiatingProcessAccountName, InitiatingProcessAccountSid, InitiatingProcessAccountUpn
| order by Timestamp desc
```

One could remove the destiantion or source IP if that is all you have. Though
that doesn't always help narrowing down the traffic we're looking for. Sometimes
it's better to start with that rather than nothing at all.

## Conclusion

This note was simply a nice to have in case this is something I need to do in
the future. Basically display a script block of a KQL query that will provide
the `DeviceNetworkEvents` for a source and destination IP address in the event
that's all I have.
