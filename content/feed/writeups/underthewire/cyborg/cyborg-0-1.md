---
title: "Under The Wire: Cyborg 0 -> 1"
date: 2022-01-22T08:08:15-06:00
summary: "Solution for Cyborg 0 -> 1."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
invertPagination: true
showToC: true
openToC: false
showComments: true
showHeadingAnchors: true
---

## Summary
---

The goal of this level is to log into the game. Do the following in 
order to achieve this goal.

1. Obtain the initial credentials via the #StartHere channel on our 
   Slack (link). Once you are in the channel, scroll to the top to see 
   the credentials.
2. After obtaining the credentials, connect to the server via SSH. You will need an SSH client such as Putty. The host that you will be connecting to is cyborg.underthewire.tech, on port 22.
3. When prompted, use the credentials for the applicable game found in the #StartHere Slack channel.
4. You have successfully connected to the game server when your path changes to “PS C:\Users\Cyborg1\desktop>”.

## Solution
---

In this challenge we need to joing the Slack challenge and joing the 
#StartHere channel. After finding the credentials at the top of the
channel. We're ready to get to work.

Think of this as an Introduction round to get started. No actual work
will be performed. They're just trying to get you logged into the
server so you can start.

With the credentials we need to SSH to Cyborg using the cyborg1 user.

```sh
ssh cyborg1@cyborg.underthewire.tech
```

Once signed in the following prompt should show.

```powershell
Windows PowerShell 
Copyright (C) 2016 Microsoft Corporation. All rights reserved.

Under the Wire... PowerShell Training for the People!
PS C:\users\cyborg1\desktop>
```
Now it’s time to get started on the actual work.