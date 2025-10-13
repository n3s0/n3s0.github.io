---
title: "Moving PostgresSQL 15 To Custom Directory On Ubuntu Server"
author: "Timothy Loftus (n3s0)"
date: 2024-02-28T09:34:05-05:00
lastmod: 2025-10-12
summary: "Notes for moving PostgresSQL 15 on Ubuntu Server to a custom directory."
draft: false
tags: ["sysadmin"]
---

## Summary

I've been interested in learning more about database administration
lately. So I'll be posting more about it in the coming months. One 

Some notes for moving PostgreSQL 15 on Ubuntu Server to a custom
directory. In this scenario I'm moving the data directory; the 
directory that holds the data for its databases to its own disk drive in
the path **/testing/dbroot/**. This is a disk added to the server within
it's on volume group in LVM. So I can expand or add disks as needed.

That will be posted in time. For now. Here is the path I take to get
there. I'll update with more notes as time goes on.

One thing to note that AppArmor configuration isn't required for this to
work.

This article assumes that PostgresSQL is installed. I will work out the
same process with later and earlier versions as time goes on and add
them to the resources section.

```
sudo -u postgres psql
```
```
postgres=# show data_directory;
```
```
       data_directory
-----------------------------
 /var/lib/postgresql/15/main
(1 row)
```
```
sudo systemctl stop postgresql.service
```
```
sudo mkdir -p /new/dbroot/
```
```
sudo rsync -av /var/lib/postgresql /new/dbroot
```
```
sending incremental file list
postgresql/
postgresql/.psql_history
postgresql/15/
postgresql/15/main/
postgresql/15/main/PG_VERSION
postgresql/15/main/postgresql.auto.conf
postgresql/15/main/postmaster.opts
postgresql/15/main/base/
postgresql/15/main/base/1/
postgresql/15/main/base/1/112
postgresql/15/main/base/1/113
postgresql/15/main/base/1/1247
...
sent 40,178,944 bytes  received 18,537 bytes  80,394,962.00 bytes/sec
total size is 40,113,094  speedup is 1.00
```
```
sudo mv /var/lib/postgresql/15/main /var/lib/postgresql/15/main.bak
```
```
sudo vim /etc/postgresql/15/main/postgresql.conf
```
```
#------------------------------------------------------------------------------
# FILE LOCATIONS
#------------------------------------------------------------------------------

# The default values of these variables are driven from the -D command-line
# option or PGDATA environment variable, represented here as ConfigDir.

data_directory = '/new/dbroot/postgresql/15/main'           # use data in another directory
                                        # (change requires restart)
hba_file = '/etc/postgresql/15/main/pg_hba.conf'        # host-based authentication file
                                        # (change requires restart)
ident_file = '/etc/postgresql/15/main/pg_ident.conf'    # ident configuration file
                                        # (change requires restart)

# If external_pid_file is not explicitly set, no extra PID file is written.
external_pid_file = '/var/run/postgresql/15-main.pid'                   # write an extra PID file
                                        # (change requires restart)
```
```
sudo systemctl start postgresql.service
```
```
systemctl status postgresql.service
```
```
● postgresql.service - PostgreSQL RDBMS
     Loaded: loaded (/lib/systemd/system/postgresql.service; enabled; preset: enabled)
     Active: active (exited) since Wed 2024-02-28 09:29:09 CST; 10s ago
    Process: 9359 ExecStart=/bin/true (code=exited, status=0/SUCCESS)
   Main PID: 9359 (code=exited, status=0/SUCCESS)
        CPU: 1ms

Feb 28 09:29:09 lab-db-01 systemd[1]: Starting postgresql.service - PostgreSQL RDBMS...
Feb 28 09:29:09 lab-db-01 systemd[1]: Finished postgresql.service - PostgreSQL RDBMS.
```
```
sudo -u postgres psql
```

```
postgres=# show data_directory;
```
```
           data_directory
------------------------------------
 /new/dbroot/postgresql/15/main
(1 row)
```

## Resources
-----

- [PostgresSQL 15 Documentation](https://www.postgresql.org/docs/15/index.html)
