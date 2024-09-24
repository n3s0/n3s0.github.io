---
title: 'Windows: NTFS & Share Permission Reference'
date: 2019-10-11T14:27:59-06:00
summary: "Notes on NTFS & Share permissions just in case I need a reference."
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

This was written because there are those times where I forget NTFS and share permissions in Windows. Everyone needs a reference as to what the different permissions do. I don’t work with permissions frequently, but enough for me to do this research. Not to mention, there are those times where I question whether or not permissions are needed in certain scenarios.

## NTFS (NT File System)
---

Should probably start with what NTFS permissions are and what they are used for. I will provide an explanation for what NTFS permission do and what they’re used for.

NTFS stands for NT (New Technology) File System. It was introduced in Windows NT 3.1 in 1993. When you read through Microsoft’s documentation you can get a good idea of what features are available now. Article read can be found below.

- [NTFS Overview](https://docs.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview)

Listed below are the features provided in NTFS today. Note that this can change in the future.

- Access Control List (ACL) - based security for files and folders - Allows you to set permissions on files/folders. You select the user or group you would like to have access and you restrict/allow, and select access type.
- Support for Large Volumes - NTFS can support volumes as large as 256 Terabytes.
- BitLocker Drive Encryption Support - Bitlocker provides volume encryption so if disks are physically removed, the data will be encrypted.

## NTFS Permissions
---

Below is a list of the permissions that can be applied to files and a description of how they affect access when applied for a certain user/group.

- Full Control - User can modify, add, move, and delete files along with subdirectories. User can modify permissions for files and subdirectories.
- Modify - User can view and modify file properties. They can also add and delete files from a directory. They can also do so to file properties.
- Read & Execute - Users can run binaries and scripts.
- Read - User can view files, file properties, and directories.
- Write - User can write to a file and add files to a directory.

There is a difference between inherited and explicit permissions. Inherited permissions are applied to a parent folder by a user and as files/directories are added, those missions are applied to that folder as well. Explicit permissions are applied to each individual folder if you don’t check the subdirectories and folders box.

## Share Permissions
---

Below I provide an overview of Windows Share Permissions.

- Full Control - Allows a user to read, change, edit share permissions, and take ownership of files.
- Change - Allows the user to read, execute, write, and delete folders/files within the share.
- Read - Allows a user to view the contents of a folder.