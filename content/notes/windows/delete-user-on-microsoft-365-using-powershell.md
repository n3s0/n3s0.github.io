---
title: "Deleting User On Microsoft 365 Using PowerShell"
date: "2022-03-17T11:01:22-05:00"
description: "Notes for deleting a Microsoft 365 user using the MSOnline PowerShell Module."
tags: [ "powershell", "Microsoft 365" ]
draft: false
type: post
showTableOfContents: true
---

## Deleting Microsoft 365 User

Notating some commands I use for deleting a user in Microsoft 365. This 
is generally done by connecting to it using ```Connect-MSOnline``` first.

I will provide notes on how to do that in a future post.

One thing that I've learned about Microsoft 365 licensing is the tenant 
owns a quantity of the licensing they've purchased. The number of consumed 
licenses increases/decreases as users are added/removed. There is no 
affect on the total quanitity of licensing owned by the organization when 
a user is removed from a tenant portal. I note this and will note it 
in another post that discusses AccountSkus when it's created. There is 
no need to unset the license before hand. 

Below is the basic command used to remove the user from the portal and 
send the object to the Recycle Bin. Confirmation will be required. 
But, the default for this is Y or Yes.

```powershell
Remove-MsolUser -UserPrincipalName jdoe@example.com
```

Below is the output when the command above is entered.

```powershell
Remove-MsolUser -UserPrincipalName jdoe@example.com

Confirm
Continue with this operation?
[Y] Yes  [N] No  [S] Suspend  [?] Help (default is "Y"): y
```

This command can be run if deletion is our decision. This will send the 
user object to the Recycle Bin without being prompted for confirmation.

```powershell
Remove-MsolUser -UserPrincipalName jdoe@example.com -Force
```

Note that this will send a user to the Recycle Bin. Both of these options 
will. But, what if permanent deltion is required immediately.

### Permanent Deletion

I haven't found a way to do this with two commands just yet. Both sections
here can be used in conjunction with each other. Removing a user object 
using the ```Remove-MsolUser``` Cmdlet will send the object to the Recycle
Bin as discussed.

But, permanent deletion is a possibility AFTER the user object is sent to 
the Recycle Bin. To do this, run the following command. Note that without 
the ```-Force``` flag present. The command will prompt for confirmation. 
Use it as long as you're sure its what you want. This will delete the user 
object or account permanently from the Microsoft 365 tenant.

```powershell
Remove-MsolUser -UserPrincipalName jdoe@example.com -RemoveFromRecycleBin
```

This should conclude what I have for my notes so far. If I need to add more, 
I'll add them to this post.
