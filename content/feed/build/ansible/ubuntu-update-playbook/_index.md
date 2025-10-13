---
title: "Ubuntu Update Playbook"
date: 2024-10-18T01:19:00-06:00
summary: "Docs for my Ansible playbook that updates Ubuntu Servers."
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

## Summary
---

Simple Ansible playbook for updating Ubuntu Servers. But, this will probably 
work on Ubuntu Desktop as well.

The objective of this playbook is to have the capability to update multiple 
instances of Ubuntu Server at a time. You just add the server to your inventory 
file and off you go.

The repository for my Ubuntu update playbook can be found below.

- [Ubuntu Update Playbook](https://github.com/n3s0/ubuntu-update-playbook)

I've been meaning to automate tasks in multiple ways for various servers for a 
long time. So, I thought this would be the best starting point for this.


## CAUTION
---

One thing I wouldn't recommend doing is running this Ansible playbook on 
servers that need to be updated in a specific order. As I learn more about 
Ansible playbooks, I will try to figure out a way to prioritize or create a 
dependancy for updating servers in a certain order. I'm thinking about this 
mostly for those that have database replicas that need to be rebooted at the 
same time.

For now. Updates will be performed in order or all at once as listed in the 
inventory file.

## Confirmed Tests
---

This playbook has successfully run on the following versions of Ubuntu.

- Ubuntu Server 24.04 LTS amd64

## What The Playbook Does
---

This playbook will perform the following tasks on the servers in the hosts file.

- Update the apt cache.
- Perform a dist upgrade and force updates.
- Reboot the server and confirm it comes back up.

This is a very simple playbook. If you don't mind checking your services later. This
may be a good fit. Feel free to cater it to you. One thing I would recommend post-run 
is to check the configuration and the status of your servers when the playbook completes.
