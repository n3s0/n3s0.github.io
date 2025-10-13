---
title: "MySQL Server Connection Refusal"
date: "2022-01-24T11:04:50-05:00"
lastmod: "2025-10-08"
author: "Timothy Loftus (n3s0)"
description: "Troubleshooting a MySQL server connection refusal. Broken host_cache table entry."
draft: false
tags: ["linux", "mysql"]
---

## Overview

Sigh... It's always DNS...

This post goes through some troubleshooting fun with MySQL. Thought I’d 
share. Recently came across an issue where a workstation couldn’t connect 
to a database through its ODBC connection. The server got angry and would 
refuse connection from the workstation with an error stating it’s not 
allowed to connect to the MySQL server.

Whelp. That wont do. Let’s go through the problem and get to the solution.

### Problem

The user and host configuration in the mysql.user table was fine. Setup 
appropriately and the credentials being used were correct. But, the MySQL 
server was refusing connection.

Below is a mock of the test result portraying the error for future 
observation. Class E address is there for demonstration purposes. The 
error indicates that the MySQL server is refusing the connection because 
it wasn’t allowed to connect to the server.

```txt
Test Result


Connection Failed
[MySQL](ODBC Driver) Host '240.221.242.64' is not allowed to connect 
to this MySQL server:
```

### Weee Explanation Here

In MySQL you can restrict account access based on username, password, 
and hostname/IP Address. You can utilize the ```%``` or wild card. But, 
this isn't recommended as it allows any machine on the network to connect 
to the server using that username and password.

Generally, when you receive a connection refusal error, you'd check the 
accounts and verify that information is correct. But, in this case all of 
that was correct. Which stumped me.

For example. If you create a user on the MySQL server 
```'jdoe'@'merp.example.com'``` they  shouldn't be able to connect from 
the machine named ```derp.example.xyz```. Hosts don't match. Connection 
would be refused. It’s doing what it should.

```mysql
CREATE USER 'jdoe'@'merp.example.com' IDENTIFIED BY 'S0_S3cr3t';
```

Not to mention, applying grants to the account is required. Otherwise 
they wont be able to login to the server because there are no rules applied 
to the account.

In this case, I only grant SELECT. Which allows the ```jdoe``` user on 
the machine named ```merp.example.com``` to query the database ```dbname``` 
but only the ```tablename``` database. SELECT will not allow the user 
to add any columns, tables, etc to the database. Which in this use case 
that’s what we need.

```mysql
GRANT USER SELECT ON dbname.tablename TO 'jdoe'@'merp.example.com';
```

This user should be able to do the bare minimum. Login to the database 
and view the data in ```tablename```. Just as long as they're logging in 
from ```merp.example.com```.

## Solution

So, found out that the host_cache table within the PERFORMANCE_SCHEMA database 
had a NULL value for the hostname. This can occur if; for some reason, the 
MySQL server cannot resolve the clients IP address to it's hostname using 
the PTR records available to it. Weather that be because of a duplicate 
A record with a different IP address in DNS or if the DNS server returns 
an NX to the for the client.

Host cache entries are for non-localhost TCP connections. It caches TCP 
connections to prevent performing DNS lookups for every client connection. 
The server will check IP address of each client connection within the host 
cache and will either refuse or allow the login for account that's being 
checked. Should there be an error during the entry process for cache entries, 
a NULL value will be applied to the IP Address. Which is the problem we're 
seeing below.

Unless the host cache is full, these entries are not discarded unless 
they've been flushed or truncated. If the host cache entry limit is 
reached, the server will discard the oldest cache entry.

You can find this information using the following select query.

```mysql
SELECT IP,HOST FROM PERFORMANCE_SCHEMA.host_cache;
```

Which will provide the output seen below. 

```mysql
|      IP         | HOST                |
|+++++++++++++++++|+++++++++++++++++++++|
| 240.221.242.64  | NULL                |
```

So, to fix this issue the host cache needs to be truncated. Which requires 
a user with ```DROP``` privileges. This can also be done using ```mysqladmin``` 
to flush the table.

MySQL for truncating the table can be found below.

```mysql
TRUNCATE performance_schema.host_cache;
```

The mysqladmin command to take care of the host_cache is below.

```sh
mysqladmin flush-hosts
```

So... the problem here was DNS. In order to solve the problem, the d
```host_cache``` table in the ```performance_schema``` database needs to 
either be flushed or truncated. 

Hope this was helpful. Have a wonderful day.

## Resources

Some resources used while I was researching this issue.

- [MySQL - 5.1.12.3 DNS Lookups and the Host Cache](https://dev.mysql.com/doc/refman/8.0/en/host-cache.html)
- [MySQL - 27.12.21.2 The host_cache Table](https://dev.mysql.com/doc/refman/8.0/en/performance-schema-host-cache-table.html)
- [MySQL - 13.7.1.6 GRANT Statement](https://dev.mysql.com/doc/refman/8.0/en/grant.html)
