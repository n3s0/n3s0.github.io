---
title: "Workaround For Issue With Shared WAN Ports After FortiOS v7.4.8 Upgrade"
date: 2026-02-12T09:00:27-06:00
lastmod: 2026-02-12
description: "A workaround for an issue I found after upgrading to FortiOS v7.4.8 where the shared WAN ports don't work properly."
draft: false
tags: ["fortinet"]
---

## Summary

This may be one of those nuanced scenarios. But, I have serviced a location that
requires I utilize the shared copper/fiber WAN ports. Basically after upgrading
it to FortiOS v7.4.8 a bug with the shared WAN ports not checking to see if the
optic port is being used. Which is a pretty big boo boo on my part for not
finding that bug sooner.

In brief. The solution for this is to setup automation within the firewall to
switch over to the shared fiber port when it starts up. It will check for the
event LOG_ID_SYSTEM_START (ID 32009). It will wait 10 seconds. Then it will run
a command that will switch it over to the SFP.

This automation should be removed if the network design moves away from using
the shared ports. It only

Some prep is required for this to work. Before creating an automation stitch for
this a trigger and the appropriate action is required. I will be providing the
CLI configuration for this. But, down the road I may provide a GUI how to.

## Automation Configuration Using Commandline

This section will cover how to setup the automation as explained using the
commandline.

Below is an explaination for how this all works.

1. The FortiGate will check that it's booted up by using the Startup Event
   trigger. This trigger polls for the event LOG_ID_SYSTEM_START (ID 32009).
2. Once the automation stitch is triggered. The FortiGate will perform the
   action that switches the WAN interface of choice over to fiber using a
   diagnose command.

### Autoamtion Trigger

An automation trigger needs to be created to check for startup. In this case it
checks for log ID 32009 or the LOG_ID_SYSTEM_START log.

```sh
config system automation-trigger
    edit "Fortigate Startup Event"
        set description "Startup event for FortiGate."
        set event-type event-log
        set logid 32009
    next
end
```

### Automation Action

For the automation action it needs to be setup as a cli-script. This will run
the following command on the FortiGate with as a `super_admin`.

The following command will switch the wan1 port to fiber medium as opposed to
the copper medium.

```sh
diagnose hardware shared-port wan1 fiber
```

Of course the script is given 60 seconds to run. If the script doesn't run
within that time. It will stop running.

```sh
config system automation-action
    edit "WAN1 Switch To Fiber"
        set description "Switches WAN1 to fiber mode."
        set action-type cli-script
        set minimum-interval 60
        set script "diagnose hardware shared-port wan1 fiber"
        set accprofile "super_admin"
    next
end
```

### Automation Stitch

Now it's time for the stitching; no pun intended. Once the automation trigger
named `Fortigate Startup Event` is triggered. It will delay for about 10 seconds
and perform the `WAN1 Switch To Fiber` action. Which will change over the
medium from copper to fiber.

```sh
config system automation-stitch
    edit "WAN1 Switch To Fiber After Startup"
        set trigger "Fortigate Startup Event"
        config actions
            edit 1
                set action "WAN1 Switch To Fiber"
                set delay 10
                set required enable
            next
        end
    next
end
```

## Closing Notes

I also have an article that goes briefly into utilizing this diagnostic command
to switch over. Which is good to have in a pinch.

But, to circle back to this discussion. Steps were provided to create the
automation stitching for an issue I came accross where FortiOS v7.4.8 doesn't
change the medium from copper to fiber on shared WAN ports. Of course. If there
is anything anyone needs help with related to this issue. Please reach out to
me and I'll be happy to help.

