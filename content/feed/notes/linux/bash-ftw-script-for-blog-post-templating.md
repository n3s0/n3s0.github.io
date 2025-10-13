---
title: "Bash FTW: Scripting For Blog Draft Templating"
date: "2022-05-25T20:42:41-05:00"
lastmod: 2025-10-09
author: "Timothy Loftus (n3s0)"
description: "Simple script I wrote for this blog to make creating new drafts easier for this blog."
tags: [ "bash", "linux" ]
draft: false
---

This will be a short post. I wrote a little Bash script to assist with
creating new drafts for this site. Nothing special. But, it will save me
some typing.

Site has a specific file name format. So, instead of manually typing in
the same command I do every time I created a script named draft that
formats everything needed to make a new draft for this site. I think
it'll come in handy.

Below is the code for the Bash script I wrote.

```bash
#!/bin/bash
#
# File: newDraft.sh 
#
# Script for scaffolding a new draft for this blog.
# 
# Maintainers: 
#  - Timothy Loftus (n3s0)
#
# Expected format for the file should look something like this.
#
#   YYYY-MM-DD-YYYYMMDDHHMMSS.md
# 
# Changelog
#
# 05/25/2022
#   - Initial creation

NEW_FILE_NAME=$(date +"%Y-%m-%d-%Y%m%d%H%M%S")
FULL_FILE_NAME="$NEW_FILE_NAME.md"

cat <<EOT >> $FULL_FILE_NAME
---
title: "NEW POST TEMPLATE"
date: "YYYY-MM-DD"
classes: "wide"
excerpt: ""
categories:
- "posts"
tags:
- "posts"
---

## Summary


EOT

```
