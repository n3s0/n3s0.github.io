---
title: "Planning The Specs For A Small MySQL Database Administrator Lab"
author: "Timothy Loftus (n3s0)"
date: 2024-03-08T11:11:00-05:00
lastmod: 2025-10-12
description: "Notes for planning out the specifications for a small MySQL Database Administrator lab."
draft: false
tags: ["dbadmin"]
---

This is the first revision for the virtual machine specifications of a
MySQL Database Admnistrator lab. A small group of servers that allows
someone to learn things like single node managment, clustering, and a
simple data warehouse on the MySQL platform.

The key learning points I would like to touch on with these
specifications are:

- Three node MySQL InnoDB cluster deployment and managment.
- MySQL database replicas
- Building data warehouses
- MySQL database design
- MySQL database backups and testing
- MySQL server hardening
- Performance monitoring
- Performance tuning

## Notes On Design

I'm utilizing Ubuntu Server 22.04 LTS because it's common and people
have probably used it before. MySQL is available on multiple Linux
distros. So if there's something else you'd like to use. Go for it.

I've given these virtual machines 2 vCPUs. But, I could probably give
them 1. This isn't the most performant option.

Memory will be 1024 MB so this lab could potentially be built on a
laptop or desktop. In total the lab environment would require 5 GB of
RAM total.

I generally divide disks up based on their use and partition them out
approriately in separate volume groups based on how they're used. 

- The 16 GB disk is going to house the OS partitions.
- The second disk; 4/8 GB disk will house the data directory for the
  MySQL server.

Ultimately the specs were put together so someone could look at them and
thing, "That's not so bad. I can build that on my Desktop or Laptop."

## TIL-DB-01

- Name: til-db-01
- OS: Ubuntu Server 22.04 LTS
- vCPU: 2
- Memory: 1024 MB
- Disk 0: 16 GB
- Disk 1: 4 GB
- Network Adapter 1:

## TIL-DB-02

- Name: til-db-02
- OS: Ubuntu Server 22.04 LTS
- vCPU: 2
- Memory: 1024 MB
- Disk 0: 16 GB
- Disk 1: 4 GB
- Network Adapter 1:

## TIL-DB-03

- Name: til-db-03
- OS: Ubuntu Server 22.04 LTS
- vCPU: 2
- Memory: 1024 MB
- Disk 0: 16 GB
- Disk 1: 4 GB
- Network Adapter 1:

## TIL-DB-04

- Name: til-db-04
- OS: Ubuntu Server 22.04 LTS
- vCPU: 2
- Memory: 1024 MB
- Disk 0: 16 GB
- Disk 1: 4 GB
- Network Adapter 1:

## TIL-DWH-01

- Name: til-dwh-01
- OS: Ubuntu Server 22.04 LTS
- vCPU: 2
- Memory: 1024 MB
- Disk 0: 16 GB
- Disk 1: 8 GB
- Network Adapter 1:

I will test these specs on multiple VM and cloud environments and
provide my findings. There will be a separate post reporting the
deployment steps. There will also be a link to these within the
resources.

## Resources

No resources at this time.
