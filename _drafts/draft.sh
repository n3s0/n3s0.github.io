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

