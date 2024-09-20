---
title: "Subnetting Reference"
date: 2024-09-20T14:26:26-06:00
summary: "Subnetting reference."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
invertPagination: true
showToC: true
openToC: false
showComments: false
showHeadingAnchors: true
---

## Overview
---

## Subnet Chart
---

| CIDR | Subnet Mask | Addresses | Wildcard |
|------|-------------|-----------|----------|
| /32  | 255.255.255.255 | 1 | 0.0.0.0 |
| /31  | 255.255.255.254 | 2 | 0.0.0.1 |
| /30  | 255.255.255.252 | 4 | 0.0.0.3 |
| /29  | 255.255.255.248 | 8 | 0.0.0.7 |
| /28  | 255.255.255.240 | 16 | 0.0.0.15 |
| /27  | 255.255.255.224 | 32 | 0.0.0.31 |
| /26  | 255.255.255.192 | 64 | 0.0.0.63 |
| /25  | 255.255.255.128 | 128 | 0.0.0.127 |
| /24  | 255.255.255.0 | 256 | 0.0.0.255 |

## Classful Ranges
---

| | |
|---|---|
| A | 0.0.0.0 - 127.255.255.255 |
| B | 128.0.0.0 - 191.255.255.255 |
| C | 192.0.0.0 - 223.255.255.255 |
| D | 224.0.0.0 - 239.255.255.255 |
| E | 240.0.0.0 - 255.255.255.255 |

## Reserved Ranges
---

| | |
|---|---|
|RFC1918 | 10.0.0.0 - 10.255.255.255 |
|Localhost | 127.0.0.0 - 127.255.255.255 |
|RFC1918 | 172.16.0.0 - 172.31.255.255 |
|RFC1918 | 192.168.0.0 - 192.168.255.255 |
