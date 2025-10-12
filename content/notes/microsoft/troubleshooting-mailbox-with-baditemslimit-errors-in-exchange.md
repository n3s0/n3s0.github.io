---
title: "Troubleshooting Mailbox with BadItemsLimit Errors In Exchange (Unrecommended)"
date: "2021-08-03T16:48:37-05:00"
description: "Troubleshooting BadItemLimit errors on Exchange mailboxes during a PST export." 
draft: false
tags: ["windows", "exchange", "troubleshooting"]
type: post
showTableOfContents: false
---

## Overview

Sometimes when you export a mailbox they fail due to corrupted items in 
the mailbox. Although this method isn't consider a best practice, it can 
get the job done. Ideally you would want to remove the bad/corrupted 
items in the mailbox and proceed with exporting. For whatever reason you 
can increase the BadItemLimit for the export request to get the job done. 
You can generally fix these items using a MailboxRepairRequest.

Based on the Microsoft documentation for the ```New-MailboxExportRequest``` 
Cmdlet. The default BadItemsLimit is 0 on all Exchange server versions. 
If you exceed the limit of 51 bad items on Exchange 2010 and Exchange 2013. 
You will be required to add the ```-AcceptLargeDataLoss``` flag to your 
Cmdlet. This switch will tell the Exchange Server that you accept that 
the data will not be copied.

## PowerShell

All commands are run in the Exchange Management Shell. This can 
generally be opened on the server or initiated in a PSRemote shell.

The Cmdlet below will increase the bad item limit so you can export the 
mailbox. Increase the limit to suite your needs. Replace USERNAME with 
the mailbox of the user. Replace FILEPATH with the file path you intend 
to export to.

```powershell
New-MailboxExportRequest -Mailbox USERNAME -FilePath FILEPATH.pst -BadItemLimit 25
```
Obtain a status of the job utilizing the Cmdlet below.

```powershell
Get-MailboxExportRequest
```

Should you have errors executing the Cmdlets. You can increase the 
BadItemLimit. Personally, it would probably be better to remove them 
because it's not best practice. But, if you don't really care and just 
want to save the data. It should be fine. Famous last words for everyone.
