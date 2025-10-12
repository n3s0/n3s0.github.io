---
title: "Configuring Fabric Automation For Service Restarts On FortiOS"
author: "Timothy Loftus (n3s0)"
date: 2024-02-26T09:12:09-05:00
lastmod: 2025-10-12
description: "Some notes on Fabric Automation for restarting services on Fortigate Firewalls."
draft: false
tags: ["netadmin"]
---


```sh
config system automation-trigger
    edit "Daily Service Restart Schedule"
        set trigger-type scheduled
        set trigger-hour HOUR
        set trigger-minute MINUTE
    next
end
```

```sh
config system automation-action
    edit "Restart WAD Service"
        set description "Restarts the WAD service"
        set action-type cli-script
        set script "diagnose test application wad 99"
        set accprofile "super_admin"
    next
end
```

```sh
config system automation-action
    edit "Restart IPS Monitor Service"
        set description "Restarts IPS Monitor service"
        set action-type cli-script
        set script "diagnose test application ipsmonitor 99"
        set accprofile "super_admin"
    next
end
```

```sh
config system automation-stitch
    edit "Daily Service Restart"
        set description "Restarts the WAD service daily on the firewall."
        set trigger "Daily Service Restart Schedule"
        set status enable
        config actions
            edit 1
                set action "Restart WAD Service"
                set required enable
            next
            edit 2
                set action "Restart IPS Monitor Service"
                set required enable
            next
        end
    next
end
```
