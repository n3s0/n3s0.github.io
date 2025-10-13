---
title: "Getting the Default Execution Policy In PowerShell"
date: "2022-03-17T11:11:32-05:00"
lastmod: 2025-10-09
author: "Timothy Loftus (n3s0)"
description: "Notes on how to set the Default Execution Policy in PowerShell."
tags: [ "powershell" ]
draft: false
---

## Overview

My notes for obtaining the Execution Policy for PowerShell.

## Get The Execution Policy

Not a whole lot is needed for this command. It's main purpose is to 
check the configuration of the execution policy. The
```Get-ExecutionPolicy``` Cmdlet will provide the current status of the
execution policy. 

```powershell
Get-ExecutionPolicy
```

Below is the output as an example.

```powershell
RemoteSigned
```

If review of the execution policy for the different scopes is required. 
The ```-List``` flag can be used. This will list the ExecutionPolicy set 
for the various policy scopes for review.

```powershell
Get-ExecutionPolicy -List
```

The possible output as an example. This machine doesn't have a whole lot 
configured. So it should be using the default ExecutionPolicy.

```powershell

        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
   UserPolicy       Undefined
      Process       Undefined
  CurrentUser       Undefined
 LocalMachine    	Undefined

```

## Resources

Helpful resources that helped with this article.

- [Get-ExecutionPolicy Documentation](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-executionpolicy)
