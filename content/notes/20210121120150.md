---
title: 'Uninstall Headaches With Webroot Secure Anywhere'
date: 2021-01-21T12:01:50-06:00
summary: "Notes for troubleshooting Webroot Secure Anywhere when the uninstaller doesn't fully uninstall."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["sysadmin"]
---

## Summary
---

The issue here is when you uninstall Webroot Secure AnyWhere from the 
Webroot Console and install another antivirus; either after a reboot or 
right after uninstalling Webroot. When Webroot uninstalls, it will leave 
an entry in the ```AntivirusProduct``` class within the 
```root\SecurityCenter2```. Which can be problematic. If the antivirus 
sees an instance of another antvirus within this class Realtime Threat 
Protection features may not be enabled. It will remain turned off so 
both AVs aren’t fighting to the death.

Platform that this normally occurs on is Windows. I experienced this 
issue personally on Windows 10 20H2. But, it could be occuring on other 
versions.

It’s annoying, yes. But, that’s one of the things the AntivirusProduct class is intended for. It doesn’t prevent your new antivirus from being installed. There could be another way to this, but removal of the instance in the class resolves the issue. I’ve seen that it’s not recommended in a few articles. But, when I did it, there weren’t any issues and Realtime Threat Protection features within the antivirus were enabled after I rebooted the system.

This article will go through how to identify Antivirus software that hasn’t been fully removed and how to remove the object from AntivirusProduct class within the root\SecurityCenter2 namespace of Windows Management Instrumentation (WMI). It will cover how to do this in PowerShell and CMD.

As one is going through the examples. They will want to remember that this is post-uninstallation of Webroot SecureAnywhere. If this also occurs with other Antivirus software, let me know and I will test. Or let me know if this works for it and I will create an uninstall/install table for this post.

## Removing AV from root\SecurityCenter2 Namespace - PowerShell
---

This section will be using PowerShell to show the commands for remvoving the AV instanceGuid.

Below is the command that will allow you to list the Antivirus apps within AntivirusProduct.

```powershell
Get-WmiObject -ClassName 'AntivirusProduct' -NameSpace 'root\SecurityCenter2'
```

To remove an AV product from the list, you will need to run the following 
command. (Resplacing the instanceGuid, or number enclosed within brackets 
{}, with the one you see for the antivirus you’ve designated for removal.)

```powershell
Get-WmiObject -ClassName 'AntivirusProduct' -NameSpace 'root\SecurityCenter2' | Where-Object {$_.instanceGuid -Match '{}'} | Remove-WmiObject
```

Once you reboot and rerun the first PowerShell command listed, you 
should just be able to see the antivirus you installed and Windows 
Defender (maybe). After a reboot or reinstalling the antivirus, it 
should have all of the features available.

## Removing AV from root\SecurityCenter2 Namespace - CMD
---

Below are the commands used to check the system for other Antivirus 
products and deleting them using their instanceGuid.

Below is the command that will allow you to view the Antivirus products 
on the workstation.

```sh
WMIC /Node:localhost /Namespace:\\root\SecurityCenter2 Path AntivirusProduct Get * /value
```

Below is the command for deleting the instanceGuid. You’ll want to add 
the ```instanceGuid``` into the brackets (```{}```).

```sh
WMIC /Node:localhost /Namespace:\\root\SecurityCenter2 Path AntivirusProduct
```