---
title: "Ubuntu Update Playbook: Setup"
date: 2024-10-18T01:19:10-06:00
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

## Dependancies
---

This seems to work best with the following Ansible version.

- ansible [core 2.16.3]

## Clone Repository
---

Repository can be cloned using the following command.

```sh
git clone https://github.com/n3s0/ubuntu-update-playbook.git
```

## Configuring User
---

An ansible user needs to be configured in the vars. This will be used to
SSH into the server. 

One thing that I would recommend it to use key authentication so you don't
have to worry about storing credentials for your servers.

## Add Servers To Inventory
---

Servers will need to be added to the hosts file in the project root. This can
be accomplished by editing the hosts file and adding them one line at a time
in servers.

Below is an example:

```sh
[servers]
localhost
til-inf-01
```



