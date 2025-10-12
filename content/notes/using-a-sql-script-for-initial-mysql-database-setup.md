---
title: "Using A SQL Script For Initial MySQL Database Setup"
author: "Timothy Loftus (n3s0)"
date: 2024-03-06T15:25:01+06:00
lastmod: 2025-10-12
summary: "Simple MySQL script I wrote for the initial setup of application databases."
draft: false
tags: ["dbadmin"]
---

## Summary
---

This is a script I use to build MySQL databases with. Generally on 
standalone web or application servers where the database is on the same 
server. This can be copied into a text document, edited, and saved as a 
.sql file. Allowing you to run it on the SQL database server and 
automate the process as explained below.

## What does it do?
---

First it creates the database and names it as the application name. It 
can be anything we like. This just makes it obvious to the person 
installing the application what the database is used for.

Second it creates a new user with a password. The 
‘application_name’@’localhost’ provides indication that the user is 
intended to be a service account for that application. Of course, the 
script sets a password for the user. When creating the user make sure 
you’re using a secure password.

Third it’s time to get into the grants. Although it would probably be 
more secure to go through common applications and the common queries 
they make. I’m more then happy to read through an application to review 
what privileges I need to grant given I have the time. The last section 
grants all privileges on the database and it’s tables to the application 
user we just created. One thing to understand is that this doesn’t give 
ALL privileges to the databases on the server - that would be horrible 
and indicated by . which means all databases and their tables. Our 
script here just focuses on the database of the application.

Finally, the script will flush the privileges for the database server.

```sql
CREATE DATABASE application_name;
CREATE USER 'application_name'@'localhost' IDENTIFIED BY 'db_password';
GRANT ALL PRIVILEGES ON application_name.* TO 'application_name'@'localhost';
FLUSH PRIVILEGES;
```

Once this file is created and the edits to the file are complete. Save 
the file as somename.sql and run it on the database. On MySQL 
specifically on say Ubuntu Server 22.04 LTS the mysql command can be 
run as root and the scripts contents can be piped into the database 
server.

```sh
sudo mysql -u root < somename.sql
```

Once you’ve done this. Login to the MySQL console and run the following 
command and you’ll see the new database. This will provide a list of 
the databases housed on the system.

```sql
SHOW DATABASES; 
```

To show the updated user. You can use the following command to see the 
list of users in the mysql databases user table.

```sql
SELECT User,Host FROM mysql.user;
```

Scripting in SQL makes life easy no matter how simple or complex need 
is. Just remember that the more complex it is. The more you’ll want to 
test. Never run SQL scripts on a production server that you didn’t read 
or understand. Test within a lab environment first.
