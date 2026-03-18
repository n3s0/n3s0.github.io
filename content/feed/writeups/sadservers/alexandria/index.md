---
title: "Cario: Time for a Timer"
date: 2026-03-17T18:40:47-06:00
lastmod: 2025-10-18
description: "One of those challenges where you need to close a pesky file that a process keeps opening."
author: "Timothy Loftus (n3s0)"
draft: true
tags: ["SadServers", "Linux"]
---

## Summary
---

## Scenario
---

**Scenario:** "Alexandria": The Vanishing Backups

**Level:** Easy

**Type:** Fix 

**Access:** Email

**Description:** 

A critical backup cron job has silently stopped working 3 days ago. The backup 
script is located at /opt/backup/backup.sh and should create daily backups in 
/var/backups/daily/, but no new backups have been created recently.

Looking at the backup directory, you can see old backup files from a few days 
ago, proving the system used to work. However, there are no error emails, no 
obvious error logs, and the cron service appears to be running normally.

Fix ALL issues preventing the backups from running, so that backups are created 
successfully and reliably.

**Test directory:** /var/backups/daily/
**Backup script:** /opt/backup/backup.sh

**Root (sudo) Access:** True

**Test:** The solution will be validated by checking if a backup file has been 
created in the last 10 minutes.

## Solution
---

## Conclusion
---
