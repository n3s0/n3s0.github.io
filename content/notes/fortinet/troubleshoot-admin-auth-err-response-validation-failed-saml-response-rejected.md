---
title: "Fortinet: Troubleshooting Response Validation Failed. SAML Response Rejected Error"
date: 2025-06-17T15:25:28-06:00
summary: "Notes for troubleshooting some SAML errors Response Validation Failed."
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

## Overview
---

Back at it again with an interesting issue I found regarding Administrator
authentication using SAML on a FortiGate within the lab.

This lab firewall utilizes Azure SAML authentication to provide authentication
services.

The issue is it would go through the login process using SAML either through
login or the like. But, then the login portal would show that nasty error.

## Error
---

Every time I would click the SSO button it would give me the following error.

```sh
Response validation failed. SAML response rejected.
```

Extremely helpful error. I will say though, at least it tells me that the SAML
response is the issue.

## Troubleshooting
---

But, still need to narrow it down. I personally couldn't see anything related to
this in the event logs of the FortiGate. All it said was the authentication was
successful if I recall correctly. So, event logs were't helpful.

Trued up my SAML configuration and made some minor mondifications after reading
the documentation. No go. So, what is the problem?

I looked online and I don't recall anyone else recieving this issue. 

With all of that. I decided to debug SAML on the firewall. Surely that will show
something. So, configured debugging for the samld process following the steps
below.

Reset debugging.

```sh
diagnose debug reset
```

Enabling console debugging with timestamps.

```sh
diagnose debug console timestamp enable
```

Configure debugging for the samld service.

```sh
diagnose debug application samld -1
```

Enable dubugging.

```sh
diagnose debug enable
```

Now it's time to attempt to test. To do so clicked the SSO button on the login
page and watched it fail in the debug console.

Not a whole lot jumped out at me apart from this. The clock skew tolerance is
set to 0. Which means it doesn't tolerate anything but an acurate time. Clock 
skew tolerance can be set of course. But, it's a bandaid. No bandiads.

```sh
__samld_sp_login_resp [847]: Clock skew tolerance: 0

__samld_sp_login_resp [852]: Clock skew issue.
samld_send_common_reply [91]: Code: 5, id: 1, pid: 1186, len: 53, data_len 37
samld_send_common_reply [99]:     Attr: 22, 12,
samld_send_common_reply [99]:     Attr: 23, 25, Undefined error.
samld_send_common_reply [119]: Sent resp: 53, pid=1186, job_id=1.
```

Checked the time on the FortiGate using the following command. The time was off
on the firewall by 10 minutes. So, I guess it is now time to troubleshoot NTP on
the firewall.

```sh
get system status | grep time
```

Decided to look in the configuration and I found the source address being used
was the Managment address of the firewall as opposed to 0.0.0.0. After
configuring the src-address for the NTP client. Things worked as epxected and I
could sign in using SAML.
