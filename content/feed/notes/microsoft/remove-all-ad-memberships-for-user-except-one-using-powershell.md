---
title: "Remove All AD User Group Memberships Except One Using PowerShell"
date: "2021-08-05T14:14:49-05:00"
lastmod: "2025-10-09"
author: "Timothy Loftus (n3s0)"
description: "Notes for a PowerShell script for removing AD user from all groups except one."
draft: false
tags: ["powershell", "windows"]
---

## Overview

Decided to post another fun one that I found on the Internet somewhere. 
I don't remember the source. But, this has helped a lot. Some companies 
decide to keep users around. It's the way it is. Managers need to see 
who is or was sending them email at the time they were terminated.

Another reason for this to have some piece of mind. You know that should 
for some reason that account gets enabled again, they wont have access 
to anything that you don't designate.

## Script

Going to run through what this script does quick. It's pretty useful when 
you need to do this kind of work.

1. Assigns the username to a variable.
2. Checks which groups the user is apart of and outputs them.
3. Effectively iterates through each group shortly after and deletes 
   them. With the exception of Domain Users in this case. If you would
   prefer to delete group memberships from something else, go ahead.

```powershell
$Samaccountname = "USERNAME"
(Get-AdPrincipalGroupMembership -Identity $Samaccountname).Samaccountname
Get-AdPrincipalGroupMembership -Identity $Samaccountname | Where-Object -Property Name -Ne -Value 'Domain Users' | Remove-AdGroupMember -Members $Samaccountname
```

I would recommend not doing this if unnecessary. This script will remove
all group memberships from the account except for Domain Users.

