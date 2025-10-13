---
title: "Fortinet: Add An Address External Resource To FortiGate"
date: 2025-01-31T15:25:27-06:00
summary: "Notes for adding an address threat feed to a FortiGate."
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

Adding some notes for how to add an address threat feed to a FortiGate. This can 
be useful considering it saves time from having to build your own blocklist.
Multiple vendors put honey pots on the Internet and post blacklists to aid the
Internet in becoming a safer place.

Talos no longer maintains their threat feeds. So, recently I had to move to
something else. Based on what I've read they moved this feed to the Snort Sample
IP Block List. Someone asked them on Twitter and Talos directed them to the IP
list hosted by Snort. During my attempt to add it as a threat feed on a
firewall. The FortiGate was not a fan. So I decided to look for another option.

- [Upcoming Changes To Snort Sample IP Block List](https://blog.snort.org/2024/08/upcoming-changes-to-snortorg-sample-ip.html)

After some browsing on the Internet I gravitated to threatfeeds.io. Which lists
multiple threat feeds ranging from blocklists, ransomware lists, command and
control server lists, URL lists, etc. A link to threatfeeds can be found below.

- [https://threatfeeds.io/](https://threatfeeds.io/)

While browsing threatfeeds I found quite a few that I liked. Some of the feeds
have broken links. I decided to review blocklist.de which is a free service
hosted by a fraud/abuse specialist containing multiple lists I looks like 
they've been sponsored by sites like Digital Ocean along with other VPS hosting 
companies. So I decided to give them a test for a little while.

- [https://www.blocklist.de](https://www.blocklist.de)

For anyone that would like their all block list right now. It can be found
below.

- [blocklist.de all block list](https://lists.blocklist.de/lists/all.txt)

## External Resource For Blacklists
---

Fortinet calls it an address external resource. Which utilizes a list of
addresses that is updated periodically if changes are made to the file. This can
be useful if you don't wnat to add a bunch of address objects for you blacklist.
This feature can be used for harmful URLs as well. There are lists for known
command and control server. Additionally there are lists of known ransomware
servers.

As mentioned before. Adding one or two of these lists can save you time. You
find yourself a good feed, add the external resource as an address list, and add
it to your blocklist rule(s).

## Setup Using FortiOS CLI
---

This is the configuration for an external resource. This sets the
"Blocklist_De_All_TF" as an address type with the all blocklist provided by
blocklist.de. The FortiGate will refresh this every 480 seconds (8 hours).

Of course. Comment your policies/rules.

```ruby
config system external-resource
    edit "Blocklist_De_All_TF"
        set type address
        set resource "https://lists.blocklist.de/lists/all.txt"
        set refresh-rate 480
        comment "All IP addresses that have attacked one of blocklist.de's customers/servers in the last 48 hours."
    next
end
```

Once that is setup. Apply the IP list to the rule(s) in your firewall(s). This
gets very easy if you apply the changes using FortiManager.

