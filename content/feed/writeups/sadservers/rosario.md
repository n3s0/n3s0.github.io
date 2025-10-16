---
title: "Rosario: Restore a MySQL database"
author: "Timothy Loftus (n3s0)"
date: 2024-03-09T09:56:47-06:00
lastmod: 2025-10-15
summary: "Notes from running through the Rosario scenario from SadServers."
draft: false
tags: ["sadservers", "mysql"]
---

## Scenario
---

This was probably one of the funnest challenges I’ve done in a while. You think 
about the possibility of needing to do this stuff in production. But, you never 
want to have to.

If anyone would like to go through this challenge too there’s a link below. 
Feel free to ask questions

- [Rosario: Restore a MySQL database](https://sadservers.com/scenario/rosario)

Here is the challenge info provided by the site:

Level: Medium

Type: Fix

Tags: mysql

Description: A developer created a database named ‘main’ but now some data is 
missing in the database. You need to restore the database using the dump 
“/home/admin/backup.sql”. The issue is that the developer forgot the root 
password for the MariaDB server. If you encounter an issue while restoring the 
database, fix it.

Credit: Sebastian Segovia

Test: The database, once restored, has a table named “solution”.

The “Check My Solution” button runs the script /home/admin/agent/check.sh, 
which you can see and execute.

Time to Solve: 15 minutes.

## Solution
---

Time to see what’s in the home directory using the ls command.

```sh
ls
```

Looks like there’s the SQL backup and the checking agent.

```sh
README.txt  agent  backup.sql
```

Looked at the header of the backup.sql file and it looks like this server is 
using MariaDB 10.5.11.

```sh
-- MariaDB dump 10.19  Distrib 10.5.21-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: main
-- ------------------------------------------------------
-- Server version       10.5.21-MariaDB-0+deb11u1
```

Reading the README.txt file and it indicates that no issues from the following 
command will tell us it’s fixed.

```sh
mysql -u"root" -e "USE main; DESCRIBE solution;"
```

Since we don’t know the root password to the MariaDB database I’m going to need 
to reset it by putting MariaDB into safe mode.

Going to start out by elevating privileges to root. Luckily we can do that.

```sh
sudo -i
```

Stopped the MariaDB service.

```sh
systemctl stop mariadb.service
```

Started the database into safe mode and skipped loading the GRANT tables.

```sh
mysqld_safe --skip-grant-tables --skip-networking &
```

Looks like it started up with no issue.

```sh
[1] 1092
root@i-0b944a70f9fd67ee4:~# 240309 02:22:48 mysqld_safe Logging to syslog.
240309 02:22:48 mysqld_safe Starting mariadbd daemon with databases from /var/lib/mysql
```

Used the following command to connect to the database.

```sh
mysql -u root
```

Output.

```sh
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 3
Server version: 10.5.23-MariaDB-0+deb11u1 Debian 11

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]>
```

From the MariaDB client I flushed the privileges for the database.

```sql
FLUSH PRIVILEGES;
```

Altered the root user with no password. The test script doesn’t enter a 
password. Otherwise I would change the password with a better one.

```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY '';
```

After exiting the MariaDB console it’s time to stop the current MySQL process 
so we can start the service. Looked for the PID of the process using the 
following command. This will look through the process on the system and filter 
all of the ones that show mysql. In this case PID 1092 will need to be killed 
before we start the service.

```sh
ps aux | grep mariadb
```

Output:

```sh
mysql       1092  0.0 16.9 1410992 79164 pts/0   S<l  02:22   0:00 /usr/sbin/mariadbd --basedir=/usr --datadir=/var/lib/mysql --plugin-dir=/usr/lib/mysql/plugin --user=mysql --skip-grant-tables --skip-networking --skip-log-error --pid-file=/run/mysqld/mysqld.pid --socket=/run/mysqld/mysqld.sock
root        1112  0.0  0.1   5264   628 pts/0    S<+  02:24   0:00 grep mariadb
```

Killed/stopped the 1092 process using the following command. The output can 
look confusing. But it’s definately stopped.

```sh
kill 1092
```

Output:

```sh
-bash: kill: (1092) - No such process
[1]+  Done                    mysqld_safe --skip-grant-tables --skip-networking
```

Started the mariadb service and it didn’t output any errors. So it’s safe to 
assume that the MariaDB service is running.

```sh
systemctl start mariadb.service
```

Changed users back to the admin user account and tested login to the database. 
So far so good.

```sh
mysql -u root -p
Enter password: 
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 5
Server version: 10.5.23-MariaDB-0+deb11u1 Debian 11

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> 
```

Now to it’s time to see if we can restore the database.

```sh
mysql -u root -p main < backup.sql
```

So there are issues… The statements in the backup.sql file aren’t terminated 
properly. In SQL question marks (?) aren’t used to terminate (show the end of) 
a line. It’s semi-colons (;). I’ve never seen this. But, it seems when the 
database was dumped they added the flag –lines-terminated-by="?". That doesn’t 
work when restoring the database.

```sh
ERROR 1064 (42000) at line 7: You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near '?
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */?
/*!4010...' at line 1
```

…they’re spread across the entire file. Which means we would need to replace 
all of the question marks in the file with semi-colons by hand.

```sql
-- MariaDB dump 10.19  Distrib 10.5.21-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: main
-- ------------------------------------------------------
-- Server version       10.5.21-MariaDB-0+deb11u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */?
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */?
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */?
/*!40101 SET NAMES utf8mb4 */?
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */?
/*!40103 SET TIME_ZONE='+00:00' */?
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */?
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */?
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */?
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */?
...
```

Good thing we have the sed(1) command. This will find all of the question marks 
in the file and replace them with semi-colons.

```sh
sed -i "s/?/;/g" backup.sql
```

Which fixed the file. Looks like there aren’t any more issues with the file. 
So, we’re ready to restore the dump file on the MySQL database.

```sql
-- MariaDB dump 10.19  Distrib 10.5.21-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: main
-- ------------------------------------------------------
-- Server version       10.5.21-MariaDB-0+deb11u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
...
```

Restored the file into the “main” database using the mysql command and it 
didn’t return any errors this time. So, it looks like it’s fixed.

```sh
mysql -u root -p main < backup.sql 
```

Using the command found in the README file and it looks like it worked. Didn’t 
output errors and describes the database with no issue.

```sh
mysql -u"root" -e "USE main; DESCRIBE solution;"
```

Output can be found below.

```sh
+-------+---------+------+-----+---------+-------+
| Field | Type    | Null | Key | Default | Extra |
+-------+---------+------+-----+---------+-------+
| a     | int(11) | YES  |     | NULL    |       |
+-------+---------+------+-----+---------+-------+
```

Checked the solution and it looks like the problem is solved.

```
Congratulations!

You made a sad server happy!
```

So what can we take away from this.

- We learned how to reset the root password of a MariaDB server after it’s been lost.
- We learned how to prune up a MySQL dump file and troubleshoot errors associated with it.
- We learned how to restore a database.

Of course if you’re struggling with this. Send me a message and I’ll be happy 
to help.

