---
title: "Basic USB Media Operations (Clearing, Partitioning, and Formatting) In PowerShell"
date: "2022-04-11T10:39:32-05:00"
lastmod: 2025-10-09
author: "Timothy Loftus (n3s0)"
description: "Notes for clearing, partitioning, and formatting USB media using PowerShell."
tags: [ "PowerShell", "windows" ]
draft: false
---

## Summary

Full notes are unfinished. Though, the information will be useful in 
the future. I'm posting and will update as I see fit.

Article discusses notes for "wiping", partitioning, and formatting USB
drives using PowerShell. Pretty easy to do. 

## Obtaining USB Disks

Obtains the disks and outputs a table of what's currently on the system. 
Need to check for the ```DiskNumber``` of the drive that needed to be
cleared and reformatted.

```powershell
Get-Disk
```

Below is the output for this command to provide context. This will
provide the following information about the disk.

- Disk Number (Used for the operations performed on the disk.)
- Friendly Name 
- Serial Number
- Health Status
- Operational Status
- Total Size
- Partition Style

```powershell
Number Friendly Name         Serial Number       HealthStatus        OperationalStatus   Total Size Partion Syle

------ -------------         -------------       ------------        -----------------   ---------- -----------
0      WDC WD5000LPLX-...    REDACTED            Healthy             Online              478.98 GB  GPT
1      Kingston DataTrave..  0                   Healthy             Online               14.41 GB  MBR
```

## Clearing & Removing Data

Administrator PowerShell session is required for this operation.

Clear the disk using the ```Clear-Disk``` Cmdlet to remove the partition
and volume information for the disk. 

The ```-RemoveData``` parameter specification will clear data from the 
disk. But, will not clear any recovery partitions set by the OEM. That 
is what the ```-ForceOEM``` parameter is for.

Should this operation on the disk required for it. Adding
```-Confirm:$false``` can be used. This will prevent from an interactive
prompt from popping requesting weather or not the operation is intended.
It's wise to make sure you're doing so to the right disk number.

```powershell
Clear-Disk -Number [DiskNumber] -RemoveData -RemoveOEM
```

## Create Partition

Administrator PowerShell session is required for this operation.

Creates a new partition for the specified disk number using the disk
number specified. This will use the maximum size of the device, makes it
active, and assigns it a drive letter that's been specified.

```powershell
New-Partition -DiskNumber [DiskNumber] -UseMaximumSize -IsActive -DriveLetter [ChosenDriveLetter]
```

## Format USB

Administrator PowerShell session is required for this operation.

Formats the file system for the volume. Using the drive letter of the
device the file system can be specified. This can either be exFAT, NTFS,
or FAT32. File system label or friendly name can be specified.

```powershell
Format-Volume -DriveLetter [ChosenDriveLetter] -FileSystem [exFAT/NTFS/FAT32] -NewFileSystemLabel [USBLabel]
```

## Confirming Changes

The ```Get-Volume``` Cmdlet is a good place to confirm. Knowing the
drive letter is needed though. This will output the following
information to the console.

- DriveLetter: Provides the drive letter of the volume.
- FriendlyName: Provides the name given to the volume.
- FileSystemType: File system. Either FAT32, NTFS, etc.
- DriveType: Notes if the drive is removable or not. Removable can
  indicate that it's a USB or flash media. Fixed can indicate that it's
  the actual disk or partition for the system.
- HealthStatus: Provides the health status of the device.
- OperationalStatus: Tells you the operational status for the device.
- SizeRemaining: Remaining space left on the media.
- Size: Overall size of the device. This is post-partitioning.

Note that if no drive letter is specified that it will provide
information for all drive letters on the system.

```powershell
Get-Volume
```

Output; dependant on what you're using, should look similar to the
following.

```powershell
DriveLetter FriendlyName FileSystemType DriveType HealthStatus OperationalStatus SizeRemaining      Size
----------- ------------ -------------- --------- ------------ ----------------- -------------      ----
D           ESD-USB      FAT32          Removable Healthy      OK                     24.35 GB  28.64 GB
                         NTFS           Fixed     Healthy      OK                     84.05 MB    500 MB
C                        NTFS           Fixed     Healthy      OK                     163.5 GB 237.86 GB
```

## Conclusion

This article discusses some notes for using PowerShell to Clear,
partiton, and format USB media. This can certainly be done using Disk
Manager. But, there are times where Disk Manager can't or doesn't want
to do the job. If you can do it using PowerShell. You're not limited to
a GUI. Probably one of the best things about it.

