---
title: "Fortinet: Some System Troubleshooting Tid-bits"
date: 2023-11-01T11:17:40-05:00
summary: "Notes for troubleshooting Fortigate firewalls."
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

This is a ever changing list of commands that can be useful for troubleshooting
FortiGate firewalls. These Tid-Bits focus solely on the system performance and
crash debugging. Not routing or rule troubleshooting.

I had something like this when I made a lot of Fortinet Support cases related to
FortiGate firewalls going into Conserve Mode. It was pretty eventful.

This list will probably never be complete. This is something to add to as time
goes on. Descriptions will also get better as I come back to this.

## Troubleshooting
---

### Performance
---

Provides memory infomation for the firewall.

```sh
diagnose hardware sysinfo memory
```

This command will provide information about system resources on the firewall.
This is useful for providing a real-time overview of 

```sh
diagnose system top
```

### Crash Dumps
---

This command will list the crashlogs for the FortiGate firewall. This can be 
useful when you need to provide this information to Fortinet Support.

The read option will provide a human readable crashlog.

```sh
diagnose debug crashlog read
```

Another command that support requests output for. Though this will provide 
encrypted output or non human readable output of the crashlog. Usually best to 
use the read option. Unless you prefer/need to send the data provided in the 
output of this command. 

```sh
diagnose debug crashlog get
```

## Conclusion
---

That is what I have so far. Stay tuned for more as time goes on!
