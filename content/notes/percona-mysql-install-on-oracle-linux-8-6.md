---
title: "Percona MySQL: Installing on Oracle Linux 8.6"
date: "2022-05-25T21:10:14-05:00"
lastmod: 2025-10-09
author: "Timothy Loftus (n3s0)"
description: "Some notes for installing Percona MySQL on Oracle Linux 8.6."
tags: [ "MySQL", "Oracle Linux 8" ]
draft: false
---

## Summary

Notes for installing Percona MySQL on Oracle Linux 8.6.

## Setting Up Percona MySQL Repository

Installed the latest release Percona MySQL repository using DNF.

```sh
dnf install https://repo.percona.com/yum/percona-release-latest.noarch.rpm
```

Below is the desired output when the repository is installed.

```sh
Last metadata expiration check: 1 day, 5:09:24 ago on Tue 24 May 2022 04:08:51 PM CDT.
percona-release-latest.noarch.rpm                                                           31 kB/s |  20 kB     00:00    
Dependencies resolved.
===========================================================================================================================
 Package                           Architecture             Version                   Repository                      Size
===========================================================================================================================
Installing:
 percona-release                   noarch                   1.0-27                    @commandline                    20 k

Transaction Summary
===========================================================================================================================
Install  1 Package
```

Disable the current MySQL module that comes in the default packages.

```sh
dnf module disable mysql
```

Below is the desired output. Will need to confirm that the module is
what needs to be disabled. This is if the ```-y``` flag isn't used.

```sh
Last metadata expiration check: 0:00:18 ago on Wed 25 May 2022 09:19:25 PM CDT.
Dependencies resolved.
===========================================================================================================================
 Package                      Architecture                Version                       Repository                    Size
===========================================================================================================================
Disabling modules:
 mysql                                                                                                                    

Transaction Summary
===========================================================================================================================

Is this ok [y/N]: y
Complete!
```

The commmand below will setup the ps80 Percona repository. Specifically,
this will disable all Percona repository locations and enables the
release repository for Percona Server for MySQL 8.0.

```sh
percona-release setup ps80
```

Below is the desired output. It's interactive mode. But, if you don't
want to go that route and go full hog. The -y flag can be used.

```sh
* Disabling all Percona Repositories
On Red Hat 8 systems it is needed to disable the following DNF module(s): mysql  to install Percona-Server
Do you want to disable it? [y/N] y
Disabling dnf module...
Last metadata expiration check: 0:03:24 ago on Wed 25 May 2022 09:19:25 PM CDT.
Dependencies resolved.
Nothing to do.
Complete!
DNF mysql module was disabled
* Enabling the Percona Server 8.0 repository
* Enabling the Percona Tools repository
<*> All done!
```

## Installing Percona MySQL Server & Client

The command below will install the percona-server-server and
percona-server-client packages on the system. More specifically their
MySQL 8.0 package.

```sh
dnf install percona-server-server percona-server-client
```

If an overview of what's all installed is needed. Below is the output.

```sh
Percona Server 8.0 release/x86_64 YUM repository                                           2.6 MB/s | 3.5 MB     00:01    
Percona Tools release/x86_64 YUM repository                                                1.5 MB/s | 3.8 MB     00:02    
Last metadata expiration check: 0:00:01 ago on Wed 25 May 2022 09:23:52 PM CDT.
Dependencies resolved.
===========================================================================================================================
 Package                              Architecture   Version                            Repository                    Size
===========================================================================================================================
Installing:
 percona-server-client                x86_64         8.0.28-19.1.el8                    ps-80-release-x86_64          14 M
 percona-server-server                x86_64         8.0.28-19.1.el8                    ps-80-release-x86_64          66 M
Installing dependencies:
 compat-openssl10                     x86_64         1:1.0.2o-3.el8                     ol8_appstream                1.1 M
 make                                 x86_64         1:4.2.1-11.el8                     ol8_baseos_latest            498 k
 net-tools                            x86_64         2.0-0.52.20160912git.el8           ol8_baseos_latest            322 k
 percona-server-shared                x86_64         8.0.28-19.1.el8                    ps-80-release-x86_64         1.5 M
 percona-server-shared-compat         x86_64         8.0.28-19.1.el8                    ps-80-release-x86_64         1.2 M
 perl-Carp                            noarch         1.42-396.el8                       ol8_baseos_latest             30 k
 perl-Encode                          x86_64         4:2.97-3.el8                       ol8_baseos_latest            1.5 M
 perl-Errno                           x86_64         1.28-421.el8                       ol8_baseos_latest             76 k
 perl-Exporter                        noarch         5.72-396.el8                       ol8_baseos_latest             34 k
 perl-File-Path                       noarch         2.15-2.el8                         ol8_baseos_latest             38 k
 perl-File-Temp                       noarch         0.230.600-1.el8                    ol8_baseos_latest             63 k
 perl-Getopt-Long                     noarch         1:2.50-4.el8                       ol8_baseos_latest             63 k
 perl-HTTP-Tiny                       noarch         0.074-1.el8                        ol8_baseos_latest             58 k
 perl-IO                              x86_64         1.38-421.el8                       ol8_baseos_latest            142 k
 perl-MIME-Base64                     x86_64         3.15-396.el8                       ol8_baseos_latest             31 k
 perl-PathTools                       x86_64         3.74-1.el8                         ol8_baseos_latest             90 k
 perl-Pod-Escapes                     noarch         1:1.07-395.el8                     ol8_baseos_latest             20 k
 perl-Pod-Perldoc                     noarch         3.28-396.el8                       ol8_baseos_latest             88 k
 perl-Pod-Simple                      noarch         1:3.35-395.el8                     ol8_baseos_latest            213 k
 perl-Pod-Usage                       noarch         4:1.69-395.el8                     ol8_baseos_latest             34 k
 perl-Scalar-List-Utils               x86_64         3:1.49-2.el8                       ol8_baseos_latest             68 k
 perl-Socket                          x86_64         4:2.027-3.el8                      ol8_baseos_latest             59 k
 perl-Storable                        x86_64         1:3.11-3.el8                       ol8_baseos_latest             98 k
 perl-Term-ANSIColor                  noarch         4.06-396.el8                       ol8_baseos_latest             46 k
 perl-Term-Cap                        noarch         1.17-395.el8                       ol8_baseos_latest             23 k
 perl-Text-ParseWords                 noarch         3.30-395.el8                       ol8_baseos_latest             18 k
 perl-Text-Tabs+Wrap                  noarch         2013.0523-395.el8                  ol8_baseos_latest             24 k
 perl-Time-Local                      noarch         1:1.280-1.el8                      ol8_baseos_latest             33 k
 perl-Unicode-Normalize               x86_64         1.25-396.el8                       ol8_baseos_latest             82 k
 perl-constant                        noarch         1.33-396.el8                       ol8_baseos_latest             25 k
 perl-interpreter                     x86_64         4:5.26.3-421.el8                   ol8_baseos_latest            6.3 M
 perl-libs                            x86_64         4:5.26.3-421.el8                   ol8_baseos_latest            1.6 M
 perl-macros                          x86_64         4:5.26.3-421.el8                   ol8_baseos_latest             72 k
 perl-parent                          noarch         1:0.237-1.el8                      ol8_baseos_latest             20 k
 perl-podlators                       noarch         4.11-1.el8                         ol8_baseos_latest            118 k
 perl-threads                         x86_64         1:2.21-2.el8                       ol8_baseos_latest             61 k
 perl-threads-shared                  x86_64         1.58-2.el8                         ol8_baseos_latest             48 k

Transaction Summary
===========================================================================================================================
Install  39 Packages

```

## Start The MySQL Service

Below is the command used to enable and start the mysqld service.

```sh
systemctl enable --now mysqld.service
```

## Some Initial Testing & Config

Upon first starting the MySQL service. A temporary password is created.
Probably to prevent people from exhibiting poor practices where they
would leave the root user in MySQL empty. Not good. Not good at all.

To find the temporary password for the MySQL server. I grepped for the
words remporary password in the /var/log/mysqld.log file.

```sh
grep 'temporary password' /var/log/mysqld.log
```

I tested the login to MySQL to make sure the service was started and
working by connecting to it using the MySQL client. When I tested it. I
was able to login using the temporary password generated when it was
first started and enabled.

```sh
mysql -u root -p
```

To make sure MySQL is a little more secure. I utilized the
mysql_secure_installation script. Nothing special needs to happen
outside of running the command. Everything that needs to be done to
secure the server later.

```sh
mysql_secure_installation
```

The mysql_secure_installation script allows you to do the following
things.

- Reset the database root user password.
- Remove anonymous users on the server.
- Disallow root login from logging in from anywhere but localhost.
- Removes the test database from the server.
- Purges the privileges in the test database.
- Flushes all privileges on the database server.

```sh
Securing the MySQL server deployment.

Enter password for user root: 

The existing password for the user account root has expired. Please set a new password.

New password: 

Re-enter new password: 
The 'validate_password' component is installed on the server.
The subsequent steps will run with the existing configuration
of the component.
Using existing password for root.

Estimated strength of the password: 100 
Change the password for root ? ((Press y|Y for Yes, any other key for No) : y

New password: 

Re-enter new password: 

Estimated strength of the password: 100 
Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : y
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) : y
Success.


Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : y
Success.

By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y
 - Dropping test database...
Success.

 - Removing privileges on test database...
Success.

Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y
Success.

All done! 
```

## Conclusion

There you have it. Login to the freshly installed MySQL server to
confirm the credentails are working. Then go to town on whatever you
need it for. Should be able to login to the sever using the mysql-client
or the mysqladmin command.
