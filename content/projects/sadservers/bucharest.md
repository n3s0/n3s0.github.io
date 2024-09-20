---
title: "SadServers: Bucharest: Connecting to Postgres"
date: 2024-03-09T18:40:47-06:00
summary: "Notes from running through the Bucharest scenario from SadServers."
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
showComments: true
showHeadingAnchors: true
---

## Scenario
---

Should anyone want to do this challenge. You can do so at the following 
link.

- [Bucharest: Connecting to Postgres](https://sadservers.com/scenario/bucharest)

Level: Easy

Type: Fix

Description: A web application relies on the PostgreSQL 13 database 
present on this server. However, the connection to the database is not 
working. Your task is to identify and resolve the issue causing this 
connection failure. The application connects to a database named app1 
with the user app1user and the password app1user.

Credit PykPyky

```
Test: Running PGPASSWORD=app1user psql -h 127.0.0.1 -d app1 -U app1user -c ‘\q’ succeeds (does not return an error).
```

Time to Solve: 10 minutes.

## Solution
---

OK. Checked the account using the test command provided by the 
challenge. The output suggests that the user isn’t allowed to connect 
on the postgres server. We’re going to need to check the pg_hba.conf 
file to see if there are any errors.

```sh
PGPASSWORD=app1user psql -h 127.0.0.1 -d app1 -U app1user -c '\q'
```

Output:

```sh
psql: error: FATAL:  pg_hba.conf rejects connection for host "127.0.0.1", user "app1user", database "app1", SSL on
FATAL:  pg_hba.conf rejects connection for host "127.0.0.1", user "app1user", database "app1", SSL off
```

Checked the /etc/postgres/13/main/pg_hba.conf file and something didn’t 
look right. There are two reject entries in the in the Unix domain 
socket section. So if you attempt to the database using the app1user 
account or any account it’ll reject the connection.

Little on the pg_hba configuration file. This file is responsible for 
client authentication. It contains a list of records that

```sh
# DO NOT DISABLE!
# If you change this first entry you will need to make sure that the
# database superuser can access the database using some other method.
# Noninteractive access to all databases is required during automatic
# maintenance (custom daily cronjobs, replication, and similar tasks).
#
# Database administrative login by Unix domain socket
local   all             postgres                                peer
host    all             all             all                     reject
host    all             all             all                     reject
```

To fix this I removed the two reject entires in the pg_hba.conf file and 
saved it. New configuration is below. The file would need a little more 
configuration to be considered safe though. You could be more specific 
for the database and user fields for the local connection.

```sh
# DO NOT DISABLE!
# If you change this first entry you will need to make sure that the
# database superuser can access the database using some other method.
# Noninteractive access to all databases is required during automatic
# maintenance (custom daily cronjobs, replication, and similar tasks).
#
# Database administrative login by Unix domain socket
local   all             postgres                                peer

# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     peer
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
# IPv6 local connections:
host    all             all             ::1/128                 md5
# Allow replication connections from localhost, by a user with the
# replication privilege.
local   replication     all                                     peer
host    replication     all             127.0.0.1/32            md5
host    replication     all             ::1/128                 md5
```

Restarted the postgresql service so the new configuration loads.

```sh
sudo systmectl restart postgresql.service
```

Entered the test command for the challenge and there were no errors. So 
it looks like the challenge is solved.

```sh
PGPASSWORD=app1user psql -h 127.0.0.1 -d app1 -U app1user -c '\q'
```

To make sure. I’ll check using the check.sh script on the server.

```sh
/home/admin/agent/check.sh
```

Output says everything is OK. I checked using the Web UI and everything 
looks peachy. So I think everything is good to go. Another one in the 
books.

```sh
OK
```

This one was fun! Some key things to take away from this challenge are 
the following.

- Make sure your entires in the pg_hba file are properly configured for 
  the database server. Otherwise you wont be able to connect.

Of course if anyone needs any help. Feel free to contact me!