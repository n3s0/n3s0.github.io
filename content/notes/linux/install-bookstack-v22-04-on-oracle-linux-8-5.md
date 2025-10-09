---
title: "Install BookStack v22.04 on Oracle Linux 8.5"
date: "2022-04-15T08:17:14-05:00"
description: "Notes on installing BookStack v22.04 on Oracle Linux 8.5."
tags: [ "Oracle Linux 8", "BookStack", "Self-Hosted" ]
draft: false
type: post
showTableOfContents: true
---

Note: There are improvements coming to this article soon.

## Summary

This post contains notes from installing BookStack v22.04 on Oracle 
Linux 8.5.

Some other things to note about this post. This is not a tutorial. These
are notes for setting up an application. It doesn't assume that this is
the right way to setup the application. In fact, I don't even configure
TLS on the web server that it's being hosted on. Anyone following this
will need to do it themselves.

BookStack is an open source wiki platform for organising and storing
information. It's easy to use and provides something of a framework for
your documentation because it's an opinionated application. With it you
can organize your content into Shelves, Books, Chapters, and Pages.
Depending on how you go about it, you can organize the content easily.
Not to mention there is search functionality. So, if you forget where
something is. Search for it.

The demo for BookStack can be found below. If this will help provide 
more context as to what's being built. This will allow everyone to see 
the features at a glance. Go ahead and look around.

- [BookStack Demo](https://demo.bookstackapp.com/)

Should anyone want to take a look at the BookStack code repository. It
can be found below.

- [BookStackApp/BookStack](https://github.com/BookStackApp/BookStack)

Below is a little note on the requirements for the application. This was
pulled from the requirements in the documentation.

- PHP >= 7.4
  - For installation and maintenance, you’ll need to be able to run php from the command line.
  - Required Extensions: OpenSSL, PDO, MBstring, Tokenizer, GD, MySQL, SimpleXML & DOM
- MySQL >= 5.7 or MariaDB >= 10.2
  - For the storage of BookStack content and data.
  - Single Database (All permissions advised since application manages schema)
- Git Version Control
  - For application of updates when following our standard process.
- Composer >= v2.0
  - For installation and management of our PHP dependencies.
- A PHP Compatible Webserver
  - For usage with PHP and for serving static files.

## Prerequisites

Make sure everything is up to date and install epel-release. Which
includes the GPG keys for package signing and repository information for
Extra Packages for Enterprise Linux.

```sh
dnf install epel-release
```

Install dnf-utils and the Remi PHP repository. The Remi repository will
provide more PHP libraries that aren't necessarily in the sock
repositories that come with the OS.

```sh
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm
```

Upgrade packages for the OS.

```sh
dnf upgrade -y
```

Enable the Remi PHP 8 repository. First needed to reset the PHP module
that came stock with Oracle Linux 8.

```sh
dnf module reset php
```

Below is the output. Looks like there was nothing to do in this
instance.

```sh
Last metadata expiration check: 0:01:31 ago on Fri 22 Apr 2022 10:20:21 AM CDT.
Dependencies resolved.
Nothing to do.
Complete!
```

Enable the PHP 8.0 Remi module.

```sh
dnf module enable php:remi-8.0
```

Below is the output for this.

```sh
Last metadata expiration check: 0:01:45 ago on Fri 22 Apr 2022 10:20:21 AM CDT.
Dependencies resolved.
===============================================================================================================================================================
 Package                               Architecture                         Version                                Repository                             Size
===============================================================================================================================================================
Enabling module streams:
 php                                                                        remi-8.0

Transaction Summary
===============================================================================================================================================================

Is this ok [y/N]: y
Complete!
```

Install Composer and the PHP requirements for BookStack.

```sh
dnf install php php-cli php-json php-openssl php-mysqlnd php-tokenizer \ 
  php-gd php-mbstring php-xml php-fpm php-zip php-tidy composer
```

Install the other required packages needed for hosting the application.
This includes all of the SELinux bits needed for troubleshooting. Yes,
I don't disable SELinux.

Following packages were installed for this.

- nginx
- mariadb-server
- git
- httpd-filesystem
- policycoreutils-python-utils
- setroubleshoot

```sh
dnf install nginx mariadb-server mariadb git httpd-filesystem
```

## Setup MariaDB MySQL

In this section we discuss setting up the MariaDB MySQL server
application that was installed in the previous section.

Enable and start the mariadb service.

```sh
systemctl enable --now mariadb.service
```

Run through the MySQL Secure Installation script. This will perform the
following actions on the MySQL database server. A lot of these are
optional. But, recommended to do.

- Change the root password for the database server.
- Remove anonymous users from the database server.
- Only allow root to login from localhost.
- Remove the test database and the privileges for it.
- Reload the privilege tables.

```sh
mysql_secure_installation
```

Below is an overview of what the output should look like.

```sh
NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MariaDB to secure it, we'll need the current
password for the root user.  If you've just installed MariaDB, and
you haven't set the root password yet, the password will be blank,
so you should just press enter here.

Enter current password for root (enter for none): 
OK, successfully used password, moving on...

Setting the root password ensures that nobody can log into the MariaDB
root user without the proper authorisation.

You already have a root password set, so you can safely answer 'n'.

Change the root password? [Y/n] n
 ... skipping.

By default, a MariaDB installation has an anonymous user, allowing anyone
to log into MariaDB without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] y
 ... Success!

Normally, root should only be allowed to connect from 'localhost'.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] y
 ... Success!

By default, MariaDB comes with a database named 'test' that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] y
 - Dropping test database...
 ... Success!
 - Removing privileges on test database...
 ... Success!

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```

Login to the database using the root credentials.

```sh
mysql -u root -p
```

Create the bookstack database and set the character set to utf8.

```sql
CREATE DATABASE bookstack DEFAULT CHARACTER SET utf8; 
```

Create a user named bookstack that can only sign in from localhost. In
production. Don't set the password to password.

```sql
CREATE USER 'bookstack'@'localhost' IDENTIFIED BY 'password';
```

Grant all privileges to the boookstack user on the bookstack database
and all of it's tables.

```sql
GRANT ALL PRIVILEGES ON bookstack.* TO 'bookstack'@'localhost';
```

Flush the privileges to the database.

```sql
FLUSH PRIVILEGES; 
```

## Setup PHP-FPM

Setup php-fpm. To do this open up the php-fpm www.conf file and edit the 
following values. 

Full path is below.

- /etc/php-fpm.d/www.conf

Set the user for php-fpm to Nginx.

```vim
; RPM: apache user chosen to provide access to the same directories as httpd
user = nginx
```
Set the group allowed to write to the log directory.

```vim
; RPM: Keep a group allowed to write in log dir.
group = nginx
```

Note that if a unix socket is being used. The following path to the 
socket will need to be notated. This will be added to the nginx 
configuration.

```vim
; Note: This value is mandatory.
listen = /run/php-fpm/www.sock
```

Below is where the permissions for the unix socket are set.

```vim
; Set permissions for unix socket, if one is used. In Linux, read/write
; permissions must be set in order to allow connections from a web server.
; Default Values: user and group are set as the running user
;                 mode is set to 0660
listen.owner = nginx
listen.group = nginx
listen.mode = 0660
```

Enable and start the php-fpm service.

```sh
systemctl enable --now php-fpm.service
```

## Setup Nginx

Goes through setting up the Nginx server that will be hosting the front
end for BookStack.

Enable and start the Nginx service.

```sh
systemctl enable --now nginx.service
```

Default configuration for the server is below. Removed the default web 
server so it wouldn't host it. It isn't needed. This is kind of an
unconventional way of doing this. Usually, I'd just leave the
```config.d``` directory configuration alone. But, these are the only
files that Nginx should be referenceing right now.

```nginx
# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/php-fpm.conf;
    include /etc/nginx/conf.d/bookstack.conf;
}
```

The following configuration is in the
```/etc/nginx/conf.d/bookstack.conf``` file. This is used as additional
configuration for the Nginx server. Plus when you separate them out like
this, you're effecting the configuration of only one of the hosted
services.

Server is only listening on port 80. No TLS configuration will be setup
for it.

The webroot of the server is ```/var/www/html/bookstack/public```. This
will provide the front end of the server along with any additional
components.

Denying all access to the .htaccess file along with the README and data
and config directories. 

Should also disable access to the .git directory once the repository has
been cloned into the webroot. A git repository is the most seamless way
for updates as far as BookStack is concerned.

Configuration file also provides configuration for the php-fpm socket
that's going to be used by Nginx.

```nginx
server {
  listen 80;

  server_name _;
  root /var/www/html/bookstack/public;

  access_log  /var/log/nginx/bookstack_access.log;
  error_log  /var/log/nginx/bookstack_error.log;

  client_max_body_size 1G;
  fastcgi_buffers 64 4K;
  index  index.php;

  location / {
    try_files $uri $uri/ /index.php?$query_string;
  }

  location ~ ^/(?:\.htaccess|data|config|db_structure\.xml|README) {
    deny all;
  }

  location ~ \.php(?:$|/) {
    fastcgi_split_path_info ^(.+\.php)(/.+)$;
    include fastcgi_params;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_param PATH_INFO $fastcgi_path_info;
    fastcgi_pass unix:/run/php-fpm/www.sock;
  }

  location ~* \.(?:jpg|jpeg|gif|bmp|ico|png|css|js|swf)$ {
    expires 30d;
    access_log off;
  }
}
```

Confirm that Nginx configuration is good to go.

```sh
nginx -t
```

Below is the desired output.

```sh
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Restart the nginx service.

```sh
systemctl restart nginx
```

## Setup BookStack

This section discusses how BookStack was setup on the server.

Cloned the repository into the ```/var/www/html/``` directory 
as ```bookstack```.

```sh
git clone https://github.com/BookStackApp/BookStack.git --branch release --single-branch /var/www/html/bookstack
```

Go into the bookstack directory and install the dependencies with Composer.

```sh
composer install --no-dev
```

Configure the ```.env``` file for BookStack. Needed to copy the 
.env.example file so theres a backup of the default configuration.

```sh
cp .env.example .env
```

Edit the file and configured the database server. This environment 
doesn't have any mail servers. So, there is no need to configure these 
options. APP_KEY will be generated later. As will the APP_URL.

```sh
# This file, when named as ".env" in the root of your BookStack install
# folder, is used for the core configuration of the application.
# By default this file contains the most common required options but
# a full list of options can be found in the '.env.example.complete' file.

# NOTE: If any of your values contain a space or a hash you will need to
# wrap the entire value in quotes. (eg. MAIL_FROM_NAME="BookStack Mailer")

# Application key
# Used for encryption where needed.
# Run `php artisan key:generate` to generate a valid key.
APP_KEY=SomeRandomString

# Application URL
# This must be the root URL that you want to host BookStack on.
# All URLs in BookStack will be generated using this value
# to ensure URLs generated are consistent and secure.
# If you change this in the future you may need to run a command
# to update stored URLs in the database. Command example:
# php artisan bookstack:update-url https://old.example.com https://new.example.com
APP_URL=https://example.com

# Database details
DB_HOST=localhost
DB_DATABASE=bookstack
DB_USERNAME=bookstack
DB_PASSWORD=password

# Mail system to use
# Can be 'smtp' or 'sendmail'
#MAIL_DRIVER=smtp

# Mail sender details
#MAIL_FROM_NAME="BookStack"
#MAIL_FROM=bookstack@example.com

# SMTP mail options
# These settings can be checked using the "Send a Test Email"
# feature found in the "Settings > Maintenance" area of the system.
#MAIL_HOST=localhost
#MAIL_PORT=1025
#MAIL_USERNAME=null
#MAIL_PASSWORD=null
#MAIL_ENCRYPTION=null
```

Generate the applications APP_KEY. This will be added to the
configuration file automatically.

```sh
php artisan key:generate
```

Below is the desired output for the application.

```sh
**************************************
*     Application In Production!     *
**************************************

 Do you really wish to run this command? (yes/no) [no]:
 > yes

Application key set successfully.
```

Perform the migration for the database schema. This should scafold the
schema for the database without issue.

```sh
php artisan migrate
```

Below is a quick look at the output from this command.

```sh
**************************************
*     Application In Production!     *
**************************************

 Do you really wish to run this command? (yes/no) [no]:
 > yes

Migration table created successfully.
Migrating: 2014_10_12_000000_create_users_table
Migrated:  2014_10_12_000000_create_users_table (118.25ms)
Migrating: 2014_10_12_100000_create_password_resets_table
Migrated:  2014_10_12_100000_create_password_resets_table (81.17ms)
Migrating: 2015_07_12_114933_create_books_table
Migrated:  2015_07_12_114933_create_books_table (26.03ms)
Migrating: 2015_07_12_190027_create_pages_table
...
```

Configure firewall rules for the server. This will make the http service
or port 80 available inbound so it can serve the application to users.
This will also make the changes persistant across reboots.

```sh
firewall-cmd --zone=public --permanent --add-service=http
```

Reload the firewall to confirm changes.

```sh
firewall-cmd --reload
```

The next steps to this are to configure the file permissions and SELinux
contexts for the application. I have done this in a separate posts series
where I explore how to configure different application permissions and
SELinux contexts. Steps can be found in the link below.

- [SELinux: BookStack v22.04](https://info.n3s0.tech/2022/05/24/20220525004053)

## Conclusion

Once this is done. Go ahead and check to make sure everything is working 
as expected. Below are the default credentials for BookStack. Go to the
server URL that has been configured for the machine.

- Username: admin@admin.com
- Password: password

