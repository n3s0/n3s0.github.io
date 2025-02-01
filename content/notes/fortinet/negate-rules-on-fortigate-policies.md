---
title: "Fortinet: Netgate Rules on ForiGate Policies."
date: 2025-01-31T16:25:27-06:00
summary: "Notes for setting up negate rules on FortiGate policies."
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

Stumbled upon a negate policy in FortiGate policies and forgot what it was so I
looked it up. A FortiGate with a negate policy set for the source or destination
and allow you to prevent the all rule from being used if that's what you choose.
It's useful for rules where you're sending traffic out your WAN interfaces and
you don't want it to go to a specific list of addresses. The dstaddr-negate and
the srcaddr-negate option can be used with a blocklist feed applied to it which
will allow all destined for anything that isn't in the list. I having quite
tested how this affects the CPU or memory for the firewalls yet.

## Configure Negate Policy On Firewall
---

The destination address negate option can be set on the policy with the
following configuration option added to it. Setting the dstaddr-negate option to
enable will block the addresses in the IP list provided and allow the rest out.

```ruby
config firewall policy
    edit 12
        set dstaddr-negate enable
    next
end
```

You can also negate source addresses with the following configuration. This is
like the dstaddr-negate option. Where it will provide the same functionality but
to the source address or subnet.

```ruby
config firewall policy
    edit 12
        set srcaddr-negate enable
    next
end
```

For some information on how add IP blocklist feeds to your FortiGate I have
provided a list to a note that covers this below.

- []()

## Resources
---

- [Technical Tip: Firewall Policy 'Negate' option](https://community.fortinet.com/t5/FortiGate/Technical-Tip-Firewall-Policy-Negate-option/ta-p/194290)
