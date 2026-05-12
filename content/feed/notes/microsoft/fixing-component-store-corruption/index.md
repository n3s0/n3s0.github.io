---
title: "Fixing Component Store Corruption on Windows 11 (0x800f0831)"
date: 2026-05-12T00:01:05-06:00
lastmod: 2026-05-12
author: "Timothy Loftus (n3s0)"
description: "Notes on fixing Component Store corruption on Windows 11."
draft: true
tags: ["Sysadmin", "Windows 11"]
---

## Summary
---

Recently discovered personally an issue with a Windows 11 computer where during 
the application updating process the computer attempted to install the Windows
feature `.NET 3.5 Framework`. After it downloaded it threw an error saying the
component store was corrupted. Which at the time was not fun because the
application that needed to be updated used `.NET 3.5 Framework` as a dependancy.

This note is a, "Come with me!" throughout the process of fixing this issue.
Which taught me a few things that I didn't know. Mostly due to the builds not
matching the image DISM used to fix it.

## Component Store is Corrupted
---

## Fix Using DISM with Windows Update Servers
---

DISM will generaly connect to the Windows Update servers to fetch
missing/corrupted files and put fresh ones in their place. This can work if
you're strict on keeping Windows versions on the same version as the Widnows 11
Eval image. But, if this isn't the case. There may be cases where it doesn't
work.

Running this command will perform a deep scan of the operating systems component
store (WinSxS folder) for corruption. This will look for files to repair. But,
wont repair anything. 

```powershell
DISM /Online /Cleanup-Image /ScanHealth
```

This will check the image and verify if the component store is corrupted and if
it's repairable.

```powershell
DISM /Online /Cleanup-Image /CheckHealth
```

This command will repair a corrupted Windows image by downloading healthy files
from Windows Update servers and replacing the corrupted ones in the WinSXS
folder.

```powershell
DISM /Online /Cleanup-Image /RestoreHealth
```

Run the `sfc` command to scan system files so it can detect and repair any
residual corrupted files after the fact. Just to ensure integrity of system
files on the workstation.

```powershell
sfc /scannow
```

Use the following command to restart the computer and attempt to install the
Windows feature again.

```powershell
Restart-Computer -Force
```

## Fix Using DISM with Windows Eval Image
---

Sometimes

## Fix Problems using Windows Update
---

This took a while. But, suprise. This is what fixed the issue with the
Componenet Store. What it does is it reinstalls the current version of Windows.
Applications, files, and settings wont be effected in most cases. So, this is a
valid option for my situation where the build number of the DISM image didn't
match the image installed on the laptop I was fixing.

### Fix Using GUI
---

This portion will walk through using the graphical interface to reinstall the
current version of Widows. This can help if the current build isn't the same as
the released image that DISM uses.

1. Right-Click the Start Menu > Click Settings.
2. Click Windows Update. (This will open Windows Update)
3. Click Advanced options. (This will go to Windows Update > Advanced Options)
4. Click Recovery. (This will go to System > Recovery)
5. Click Reinstall now on Fix problems using Windows Update.

Allow the system to download and install the update. Then reboot the
workstation. This will take some time. So, grab a coffee while you're waiting.

Depending on your Internet connection and computer speed this could take
anywhere from 30 minutes to 2 hours to complete. So make sure you have the time
to see it through. The workstation will reboot multiple times.

Once it gets reinstalled we can attempt to install the feature we couldn't
before. In my case it installed just fine. So BAZINGA!

## Conclusion
---
