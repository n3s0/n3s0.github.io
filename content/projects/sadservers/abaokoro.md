---
title: "Sad Servers: Abaokoro: Restore MySQL Databases Spooked by a Ghost"
date: 2023-02-27T13:40:06-05:00
summary: ""
draft: true
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

Scenario: "Abaokoro": Restore MySQL Databases Spooked by a Ghost

Level: Medium

Type: Fix

Tags: mysql  

Description: 

There are three databases that need to be restored. You need 
to create three databases called "first", "second" and "third" 
and restore the databases using the file 
"/home/admin/dbs_to_restore.zip". If you encounter an issue 
while restoring the database, fix it.

Credit: Sebastian Segovia

Test: All databases, once restored, have a table named "foo".

The "Check My Solution" button runs the script /home/admin/agent/check.sh, which you can see and execute.

Time to Solve: 20 minutes.

```sh
admin@i-0621e0acb886fcae0:~$ ls -lah
total 1.3M
drwxr-xr-x 5 admin admin 4.0K Feb 24 18:25 .
drwxr-xr-x 3 root  root  4.0K Feb 17 22:46 ..
drwx------ 3 admin admin 4.0K Feb 17 22:47 .ansible
-rw-r--r-- 1 admin admin  220 Mar 27  2022 .bash_logout
-rw-r--r-- 1 admin admin 3.5K Mar 27  2022 .bashrc
-rw-r--r-- 1 admin admin  807 Mar 27  2022 .profile
drwx------ 2 admin admin 4.0K Feb 24 18:26 .ssh
drwxrwxrwx 2 admin admin 4.0K Feb 24 18:25 agent
-rw-r--r-- 1 root  root  1.3M Feb 24 18:25 dbs_to_restore.zip
```

```sh
admin@i-0621e0acb886fcae0:~$ file dbs_to_restore.zip 
dbs_to_restore.zip: Zip archive data, at least v2.0 to extract
```
