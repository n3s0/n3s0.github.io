---
title: "PowerShell: Notes on Execution Policy Bypass Methods"
date: "2022-03-17T11:14:22-05:00"
description: "Notes for multiple Execution Policy bypass methods I've figured out over the years."
tags: [ "powershell" ]
draft: false
type: post
showTableOfContents: true
---

## Overview

This will be updated as time goes on. But, this is a collection of 
notes I've accumulated for bypassing the execution policy in powershell 
I could certainly go through the process of making the exectution policy 
more permissive. But, sometimes when you run scripts. Bypassing the 
execution policy is the way to go.

The Execution Policy in PowerShell is used to curcumvent arbitrary PowerShell 
scripts from running on a workstation. Though, there are multiple ways to 
bypass this. I generally stick to a couple because I've never had to move 
to the other methods. Other methods will be listed regardless.

Note that even Microsoft doesn't list the execution policy as a sufficient 
method for preventing scripts. Mostly because you can just use various 
methods to bypass it without getting to creative. Like typing in the script
manually for example.

This is the snippet from Microsoft's ```about_Execution_Policy``` help 
documentation.

```
The execution policy isn't a security system that restricts user actions. For example, 
users can easily bypass a policy by typing the script contents at the command line when 
they cannot run a script. Instead, the execution policy helps users to set basic rules 
and prevents them from violating them unintentionally.
```

Note that Execution Policies can be set in Group Policy also.

## Bypass Method 1: Running PowerShell In Bypass Mode

This is one that I probably use the most. It runs PowerShell in bypass mode 
for the Execution Policy when it's initially run. It just sets the 
```$env:PSExecutionPolicyPreference``` environment variable for the  
PowerShell session being opened. 

This will not change the execution policy that is set in the Windows 
Registry. Once the PowerShell session has ended. The environment variable 
no longer exists.

```powershell
powershell.exe -ExecutionPolicy Bypass .\ScriptName.ps1
```

The short hand version of this can be found below. Works exactly the 
same way.

```powershell
powershell.exe -ep Bypass .\ScriptName.ps1
```

No example output provided. The script will just run.

## Bypass Method 2: Pipe the Script Into PowerShell

This method is pretty simple. The ```Get-Content``` Cmdlet will open the 
contents of the script file name and pipe it into PowerShell. This will 
run the script as it it's being typed out.

```powershell
Get-Content .\ScriptName.ps1 | powershell
```

Below is the output for this. Is it pretty? No. But, I'm just providing 
valid examples for this so there isn't any confusion.

```powershell
Get-Content .\test.ps1 | powershell.exe
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\example\Code\powershell> Write-Output "'Looks like I picked the wrong week to quit sniffing glue.' -- Airplane, 1980"
'Looks like I picked the wrong week to quit sniffing glue.' -- Airplane, 1980
```

More coming soon.
