---
title: 'Revert To Factory Configuration On Juniper SRX220'
date: 2024-10-05T16:49:01-06:00
summary: "Notes for reverting a Juniper SRX220 to factory configuration."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["netadmin"]
---

## Summary
---

This artcle discusses setting a Juniper SRX220 back to the factory 
default configuration.

## Setting To Factory Default Config
---

```sh
cli
```

```sh
configure
```

```sh
load factory-default
```

```sh
warning: activating factory configuration
```

```sh
set system root-authentication plain-text-password
```

```sh
New password:
Retype new password:

[edit]
root@lnklab-jsrx220-01# 
```

```sh
commit
```

```sh
commit complete

[edit]
root@lnklab-jsrx220-01# 
```