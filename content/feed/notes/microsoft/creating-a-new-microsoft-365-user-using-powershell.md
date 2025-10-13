---
title: "Creating New User On Microsoft 365 Using PowerShell"
date: "2022-03-14T13:21:44-05:00"
lastmod: 2025-10-09
author: "Timothy Loftus (n3s0)"
description: "Felt I needed to add notes for adding users to Microsoft 365."
tags: [ "powershell", "Microsoft 365" ]
draft: false
---

## Overview

This post provides my notes on how to add a new user to the Microsoft 
365 portal using PowerShell. 

References for this article can be found in the references section.

## Adding A User

Before starting, needed to login using the ```Connect-MSolService``` Cmdlet.

The following command will add a new user profile to the Microsoft 365 
portal. Little more explaination is provided after the code snippet.

```powershell
New-MsolUser -DisplayName "Jane Doe" `
	-FirstName Jane `
	-LastName Doe `
	-UserPrincipalName "JDoe@example.com" `
	-UsageLocation US `
	-LicenseAssignment example:O365_BUSINESS
```

Little overview of what the command above does. First of all. It creates 
a new user instance using the ```New-MsolUser``` Cmdlet. Note that this 
is pretty close to bare minimum for what you can do with this Cmdlet. 
But, with that it sets the following.

- User's Display Name.
- The First Name.
- The Fast Name.
- Configures their UserPrincipalName or username for logging into the portal
   and for license authentication.
- The Usage Location to the US.
- The license for the user. This will determine which features they'll be
   be able to access. I'll work on creating a reference for this. Though, 
   that will certainly need to be updated as time goes on.
- Generates a password for the user automatically.

As far as the generated password is concerned. If one needs to be set 
to something more secure while creating the account. The ```-Password``` 
flag can be used to do so.

Below is the expected output for creating the new user in Microsoft 365 
when it's successful. If there are any errors, troubleshooting will be 
necessary. If assistance is required, please shoot me an email and I'll 
help.

```powershell
Password UserPrincipalName DisplayName isLicensed
-------- ----------------- ----------- ----------
$lasdkf  JDoe@example.com  Jane Doe    True
```

If confirmation is needed. Go to the Microsft 365 portal and review the 
account configuration.

## References

References used to create this article.

- [New-MsolUser](https://docs.microsoft.com/en-us/powershell/module/msonline/new-msoluser?view=azureadps-1.0)
- [MSOnline](https://docs.microsoft.com/en-us/powershell/module/msonline/?view=azureadps-1.0#msonline)
