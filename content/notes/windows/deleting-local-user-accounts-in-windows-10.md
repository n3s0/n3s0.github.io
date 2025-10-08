---
title: "Deleting Local User Accounts In Windows 10"
date: 2021-07-27T10:17:09-05:00
lastmod: 2025-10-08
draft: false
description: "Notes on how to delete a user account in Windows. Includes account, home directory, and registry keys."
tags: ["windows"]
---

## Overview

This article will go over deleting user accounts properly in Windows. 
That means deleting the user accounts home directory and the accounts 
user account in the registry.

There are two ways you can do this. But, for now I'll cover the easiest 
way using the GUI.

This can also be used to clean up Active Directory accounts that have 
signed into the workstation. If users no longer sign into the workstation 
and you only have one available, it isn't sensical to keep all of those 
accounts on the workstation. Remove them. 

## GUI - System Advanced Properties

This will show you how to properly delete an account using System 
Advanced Properites. This will delete the account, accounts home directory, 
and delete the accounts entry in the Registry. All in the GUI.

1. Type the keyboard shortcut Windows (Super) + R.
2. In the Run prompt type ```SystemPropertiesAdvanced```.
3. Click Advanced > Settings.
4. At the User Profiles window. Click on the account you would like to delete.
5. Click Delete.
6. Confirm Deletion.
7. Click OK.
