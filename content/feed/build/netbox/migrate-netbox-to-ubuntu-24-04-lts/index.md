---
title: "Migrate Netbox from Ubuntu Server 22.04 LTS to Ubuntu Server 24.04 LTS"
description: "Working through the installation and setup for Netbox on Ubuntu Server 24.04 LTS."
cover: "/feed/build/netbox/img/netbox-community-login-screen.jpg"
date: 2026-02-23T08:08:15-06:00
lastmod: 2026-03-11
draft: false
tags: ["linux", "netbox"]
---

## Summary

In this article I will be working through migrating Netbox from Ubuntu Server
22.04 LTS to Ubuntu Server 24.04 LTS. Given that the world is all containers and
microservices. I like to install some applications manually to make sure I fully
understand how it should/could be setup outside of a containerized environment.

Not to be one of those "back in my day" people. But, it's likely others would
just deploy the container into production. Not hand build it on it's own virtual
server. This doesn't mean I'm not going to create my own container image and
document it. I don't see a whole lot of people prefer VMs for their applications
anymore.

Netbox is a datacenter infrastructure management (DCIM) solution that can act as
a source of truth for your environment. Providing functionality that assists
automation and documentation. It does a lot more. But, that is the jist.

> Note: Most commands used should be used with elevated privilages.

Here is some specs of the server Netbox is being migrated to.

Here is the OS being used.

- OS: Ubuntu Server 24.04 LTS

Here are the software versions used in this post. I'm not providing Python
libraries because all of ones used will be installed in their respective
sections. Plus, module/library installation is handled by Netbox already.

- PostgreSQL: PostgreSQL 16.11
- Redis: Redis v7.0.15
- Python: Python 3.12.3
- Gunicorn: Gunicorn 23.0.0
- Netbox: Netbox v4.5.3
- Caddy: Caddy v2.6.2

This is a relatively small deployment as far as needs are concerned. So I can
get away with putting everything on one server. This may not be the best
solution depending on how many cooks are in your kitchen. But, it works out for
my needs.

## PostgreSQL

First step is to make sure the database for Netbox is setup properly. Netbox
utilizes Django as a web framework and database migrations are a big part of the
project. Netbox depends heavily on PostgreSQL. So make sure to not skip this
step.

### Setup

First I need to install the Postgres server package for Ubuntu. This is pretty
straight forward. It installs the package without needing user interaction
because of the `-y` flag.

```sh
apt install -y postgresql
```

Once postgresql is installed. We can use `systemctl` to enable the service and
start it within the same command using the `--now` flag.

This will enable postgresql and start the service.

```sh
systemctl enable --now postgresql
```

First order of business is checking the version of postgresql being used on this
server. This can be done using the `psql` `-V` flag.

```sh
psql -V
```

In this case the PostgrSQL version is 16.11 based on the output provided by the
command.

> One thing to consider is what version of PostgreSQL being installed on the new
> host. There are cases where if the PostgreSQL versions from either server
> aren't the same. There will be import issues while moving from one instance to
> the other. Just something to bear in mind.
>
> I'll probably do some research on moving to and from two different PostgreSQL
> versions. Given I've run into that in the past.

```sh
psql (PostgreSQL) 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)
```

With all of that out of the way. It's time to get this configured. First I start
by logging into PostgreSQL as the postgres user using `sudo(1)`. This allows me
to use the `psql` command as the `postgres` user. Allowing me to login without a
password.

```sh
sudo -u postgres psql
```

This is the output provided from this command. Looks like it's successful
considering I get the prompt `postgres=#`.

```sh
psql (16.11 (Ubuntu 16.11-0ubuntu0.24.04.1))
Type "help" for help.

postgres=#
```

Now it's time to start creating the database and its user for Netbox. This can
be done by using the following command to create the `netbox` database.

```sql
CREATE DATABASE netbox;
```

If this is successful. It will provide the following output.

```sql
CREATE DATABASE
```

The next step is to create the database user/role. I will create a user named
`netbox` to make it simple. Anyone following along with this will want to switch
out `'<password'>` with a strong password of their choice.

```sql
CREATE USER netbox WITH PASSWORD '<password>';
```

Once this is successful. The output will show that the role has been created.

```sql
CREATE ROLE
```

Finally, assigning the `netbox` user the `OWNER` role to the `netbox` database
is needed so the `netbox` role can make changes to the `netbox` database. This
is done using an `ALTER` query with the `netbox` database as the target.

```sql
ALTER DATABASE netbox OWNER TO netbox;
```

If that is succesful. The output should show the database has been altered.

```sql
ALTER DATABASE
```

Now its time to `GRANT` the `netbox` user `CREATE` on the `netbox` databases 
`public` schema. This can be done by connecting to the netbox database using 
`\connect`.

```sql
\connect netbox;
```

If this is done successfully. The output should show we've connected to the
`netbox` database as the `postgres` user.

```sh
You are now connected to database "netbox" as user "postgres".
netbox=# 
```

Once the prompt indicating I'm logged into the `netbox` database. It's time to
`GRANT` the `CREATE` "permission" to the `netbox` databases `public` schema.
This can be accomplished using the following command.

```sql 
GRANT CREATE ON SCHEMA public TO netbox;
```

Upon success. The following output will be provided indicating the permissions
have been granted to this user.

```sql
GRANT
```

Now it's time to test our login to the new database with the new role to confirm
everything is setup correctly. This can be done by logging out of the database
and using the `psql` comand below to login to the `netbox` database as the
`netbox` role on `localhost`.

```sh
psql --username netbox --password --host localhost netbox
```

If everything is setup correctly it should show the following prompt after
typing in the password for the `netbox` role.

```sh
psql (16.11 (Ubuntu 16.11-0ubuntu0.24.04.1))
SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, compression: off)
Type "help" for help.

netbox=>
```

After logging in I can go a step further and use the `\conninfo` command to
double-check the connection information on the database connection.

```sh
\conninfo
```

The following output is what I saw for this. Based on how I expect this to be
setup. Everything looks as expected.

```sh
You are connected to database "netbox" as user "netbox" on host "localhost" (address "127.0.0.1") at port "5432".
SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, compression: off)
```

### Database Migration

On the old server I'll dump the database using the `pg_dump(1)` command. Then I'll
transfer it to the new server using either `scp(1)` or `rsync(1)`.

```sh
sudo -u postgres pg_dump netbox > netbox_db_dump.sql
```

After it's been transferred to the new server. It needs to be imported into the
freshly created postgresql database.

```sh
psql --username netbox --password --host localhost netbox < /path/to/netbox_db_dump.sql
```

Wont be able to fully confirm that everything is working until I'm finsihed with
the setu pof the rest of the components.

## Redis Server

Redis server can be installed using the following command.

```sh
apt install -y redis-server
```

I verified that it was installed using the following command.

```sh
redis-server -v
```

Looks like the version here is `7.0.15` on the system.

```sh
Redis server v=7.0.15 sha=00000000:0 malloc=jemalloc-5.3.0 bits=64 build=62c7a5d52c72f4cd
```

A common test for this is to use the `redis-cli` ping command. Which checks to
make sure the listener is up and recieving requests.

```sh
redis-cli ping
```

Based on the output below. Everything is working as expected for now. At least
on the Redis front.

```sh
PONG
```

This is all great. But, even though Redis is only running on `localhost`. It
might be a good idea to at least provide some authentication so not just anyone
can look at Redis if they're on the system. Netbox has configuration for Redis
users and full on TLS. So this is a consideration I generally take to best
secure the data within the Redis server.


## Setup Netbox

Now it's time to setup Netbox with everything else being out of the way. There
are a few steps needed to complete this. First of which being is install all of
the dependencies for Netbox as shown below. This command will install these
depenencies without user interaction.

```sh
apt install -y python3 python3-pip python3-venv python3-dev \
    build-essential libxml2-dev libxslt1-dev libffi-dev libpq-dev \
    libssl-dev zlib1g-dev git
```

Need to confirm Python is on the correct version using the following command.

```sh
python3 -V
```

If it's correct for this version of Netbox. Python will be at least Python 3.10.

```sh
Python 3.12.3
```

I intend to use the same configuration as before because it works well. This is
Option B in the installation document. Which uses `git(1)` to clone the
repository into the `/opt/netbox/` directory.

```sh
cp -r /path/to/netbox /opt/netbox/
```

Now it's time to create a netbox system account so the service can be run as
that user and not root.

```sh
sudo adduser --system --group netbox
```

Here is the output I saw when I created the system account.

```sh
info: Selecting UID from range 100 to 999 ...

info: Selecting GID from range 100 to 999 ...
info: Adding system user `netbox' (UID 112) ...
info: Adding new group `netbox' (GID 113) ...
info: Adding new user `netbox' (UID 112) with group `netbox' ...
info: Not creating `/nonexistent'
```

Permissions need to be set so the netbox user and group are set on the
`/opt/netbox/netbox/reports/` and `/opt/netbox/netbox/script/` directories on
the server.

```sh
sudo chown --recursive netbox /opt/netbox/netbox/reports/
sudo chown --recursive netbox /opt/netbox/netbox/scripts/
```

Even though it was transferred from another server. I still want to review the
configuration for the installation. Just to see if there is anything I can
improve on the new server.

### Validate Configuration

The `configuration.py` file in the path `/opt/netbox/netbox/netbox/` is used to
tell Netbox how PostgreSQL, Redis, Email, DEBUG mode, etc are configured. So
it's good to make sure this is setup properly for the services being used.
Review it and make sure it's set to your expectations.

#### PostgreSQL

Confirm PostgreSQL is setup to work with your database.

```py
# PostgreSQL database configuration. See the Django documentation for a complete list of available parameters:
#   https://docs.djangoproject.com/en/stable/ref/settings/#databases
DATABASE = {
    'ENGINE': 'django.db.backends.postgresql',  # Database engine
    'NAME': 'netbox',         # Database name
    'USER': 'netbox',         # PostgreSQL username
    'PASSWORD': '<password>', # PostgreSQL password
    'HOST': 'localhost',      # Database server
    'PORT': '',               # Database port (leave blank for default)
    'CONN_MAX_AGE': 300,      # Max database connection age
}
```

#### Redis

In this case I stuck with the default credentials because I don't intend to
expose Redis to anything other then the other services

```py
# Redis database settings. Redis is used for caching and for queuing background tasks such as webhook events. A separate
# configuration exists for each. Full connection details are required in both sections, and it is strongly recommended
# to use two separate database IDs.
REDIS = {
    'tasks': {
        'HOST': 'localhost',
        'PORT': 6379,
        # Comment out `HOST` and `PORT` lines and uncomment the following if using Redis Sentinel
        # 'SENTINELS': [('mysentinel.redis.example.com', 6379)],
        # 'SENTINEL_SERVICE': 'netbox',
        'USERNAME': '',
        'PASSWORD': '',
        'DATABASE': 0,
        'SSL': False,
        # Set this to True to skip TLS certificate verification
        # This can expose the connection to attacks, be careful
        # 'INSECURE_SKIP_TLS_VERIFY': False,
        # Set a path to a certificate authority, typically used with a self signed certificate.
        # 'CA_CERT_PATH': '/etc/ssl/certs/ca.crt',
    },
    'caching': {
        'HOST': 'localhost',
        'PORT': 6379,
        # Comment out `HOST` and `PORT` lines and uncomment the following if using Redis Sentinel
        # 'SENTINELS': [('mysentinel.redis.example.com', 6379)],
        # 'SENTINEL_SERVICE': 'netbox',
        'USERNAME': '',
        'PASSWORD': '',
        'DATABASE': 1,
        'SSL': False,
        # Set this to True to skip TLS certificate verification
        # This can expose the connection to attacks, be careful
        # 'INSECURE_SKIP_TLS_VERIFY': False,
        # Set a path to a certificate authority, typically used with a self signed certificate.
        # 'CA_CERT_PATH': '/etc/ssl/certs/ca.crt',
    }
}
```

#### Secret Key

Confirm the secret key it set properly.

```py
# This key is used for secure generation of random numbers and strings. It must never be exposed outside of this file.
# For optimal security, SECRET_KEY should be at least 50 characters in length and contain a mix of letters, numbers, and
# symbols. NetBox will not run without this defined. For more information, see
# https://docs.djangoproject.com/en/stable/ref/settings/#std:setting-SECRET_KEY
SECRET_KEY = '<SECRET_KEY_STRING>'
```

#### Plugins & Plugins Config

Make sure your plugins are listed.

```py
# Enable installed plugins. Add the name of each plugin to the list.
PLUGINS = [
        'netbox_inventory',
        'netbox_interface_synchronization',
]
```

Also make sure plugins are configured to the way you want them.

```py
PLUGINS_CONFIG = {
    ...
}
```

#### Media

There are times where I want to upload pictures of racks and this isn't enabled
in Netbox by default. If this is needed. Go through it and look for the
configuration parameter `MEDIA_ROOT` so Netbox knows where to drop meida if it's
uploaded.

## Gunicorn

I use `systemd` to setup `gunicorn`. Since this was copied from the previous
system. There are parts within the installation that don't need to be followed.
I can copy the `systemd` service files from `/opt/netbox/contrib/`. Putting them
in the `/etc/systemd/system/` directory.

Below is the command used to copy the `netbox` systemd service.

```sh
cp netbox.service /etc/systemd/system/
```

Below is the command used to copy the `netbox-rq` system service.

```sh
cp netbox-rq.service /etc/systemd/system/
```

Once this is complete. The systemd daemon needs to be reloaded. This can be
completed using the following command.

```sh
systemctl daemon-reload
```

Now that the systemd daemon has been reloaded. It's time to enable and start the
`netbox` and `netbox-rq` services. This can all be done using one command as
shown below.

```sh
systemctl enable --now netbox netbox-rq
```

To confirm the netbox service is started and running. The following `systemctl`
command can be run.

```sh
systemctl status netbox
```

The output shows that Netbox is running as expected using `gunicorn`.

```sh
● netbox.service - NetBox WSGI Service
     Loaded: loaded (/etc/systemd/system/netbox.service; enabled; preset: enabled)
     Active: active (running) since Tue 2026-02-24 17:18:56 UTC; 9s ago
       Docs: https://docs.netbox.dev/
   Main PID: 52484 (gunicorn)
      Tasks: 6 (limit: 4601)
     Memory: 1.6G (peak: 1.6G)
        CPU: 22.706s
     CGroup: /system.slice/netbox.service
             ├─52484 /opt/netbox/venv/bin/python3 /opt/netbox/venv/bin/gunicorn --pid /var/tmp/netbox.pid --pythonpath /opt/netbox/netbox>
             ├─52485 /opt/netbox/venv/bin/python3 /opt/netbox/venv/bin/gunicorn --pid /var/tmp/netbox.pid --pythonpath /opt/netbox/netbox>
             ├─52486 /opt/netbox/venv/bin/python3 /opt/netbox/venv/bin/gunicorn --pid /var/tmp/netbox.pid --pythonpath /opt/netbox/netbox>
             ├─52487 /opt/netbox/venv/bin/python3 /opt/netbox/venv/bin/gunicorn --pid /var/tmp/netbox.pid --pythonpath /opt/netbox/netbox>
             ├─52488 /opt/netbox/venv/bin/python3 /opt/netbox/venv/bin/gunicorn --pid /var/tmp/netbox.pid --pythonpath /opt/netbox/netbox>
             └─52489 /opt/netbox/venv/bin/python3 /opt/netbox/venv/bin/gunicorn --pid /var/tmp/netbox.pid --pythonpath /opt/netbox/netbox>

Feb 24 17:18:56 til-www-06 systemd[1]: Started netbox.service - NetBox WSGI Service.
Feb 24 17:18:57 til-www-06 gunicorn[52484]: [2026-02-24 17:18:57 +0000] [52484] [INFO] Starting gunicorn 23.0.0
Feb 24 17:18:57 til-www-06 gunicorn[52484]: [2026-02-24 17:18:57 +0000] [52484] [INFO] Listening at: http://127.0.0.1:8001 (52484)
Feb 24 17:18:57 til-www-06 gunicorn[52484]: [2026-02-24 17:18:57 +0000] [52484] [INFO] Using worker: gthread
Feb 24 17:18:57 til-www-06 gunicorn[52485]: [2026-02-24 17:18:57 +0000] [52485] [INFO] Booting worker with pid: 52485
Feb 24 17:18:57 til-www-06 gunicorn[52486]: [2026-02-24 17:18:57 +0000] [52486] [INFO] Booting worker with pid: 52486
Feb 24 17:18:57 til-www-06 gunicorn[52487]: [2026-02-24 17:18:57 +0000] [52487] [INFO] Booting worker with pid: 52487
Feb 24 17:18:57 til-www-06 gunicorn[52488]: [2026-02-24 17:18:57 +0000] [52488] [INFO] Booting worker with pid: 52488
Feb 24 17:18:57 til-www-06 gunicorn[52489]: [2026-02-24 17:18:57 +0000] [52489] [INFO] Booting worker with pid: 52489
```

## Setup Certificates

Will need to load the TLS certificate and key files from the other server. There
is a little setup to this. Caddy makes this reletively easy as well.

Certificate files will go in the `/etc/ssl/cert` directory and the certificate
keys will go into the `/etc/ssl/private/` directory. Only thing is. Caddy isn't
apart of the `ssl-cert` group by default. So it won't be able to load the
certificates. The `caddy` user will need to be added to the `ssl-cert` group to
accomplish this. The following command does just that.

```sh
usermod -aG ssl-cert caddy
```

After moving the key to the `private` directory. Ownership permissions need to
be updated on the key file so `root:ssl-cert` own the file. Can do this using
the following command.

```sh
chown root:ssl-cert /etc/ssl/private/cert-key-file.key
```

Permissions on the file should also be set to `640` for the best permissions.

```sh
chmod 640 /etc/ssl/private/cert-key-file.key
```

## Caddy

Now it's time to setup Caddy. But, first it needs to be installed on the system.
This can be done using the following command with the `-y` flag so user input
isn't needed.

```sh
apt install -y caddy
```

After installing Caddy. I use the `version` sub-command to check what version I
have installed.

> No one has to do this. Really I'm just doint this so I can put the software
> version numbers in the summary.

```sh
caddy version
```

Below is the output which shows the version number as `2.6.2`.

```sh
2.6.2
```

Edit the `/etc/caddy/Caddyfile` with the following configuration. If anyone is
following along. You'll want to fix the `dcim.lab.int.loft` with your domain
name.

I removed the default configuration for this file and replaced it with what can
be seen below.

```sh
dcim.lab.int.loft {
        log {
                output file /var/log/caddy/access.log
        }

        encode gzip zstd

        root * /opt/netbox/netbox/

        @notStatic {
                not path /static/*
        }

        tls /etc/ssl/certs/certificate.cert /etc/ssl/private/cert-key-file.key

        reverse_proxy @notStatic 127.0.0.1:8001

        file_server
}
```

The `caddy` command can be used to validate the `Caddyfile`. This is good to
make sure there are no issues with the configuration.

```sh
caddy validate --config /etc/caddy/Caddyfile
```

Based on the output provided below. There are some format warnings with the
`Caddyfile`. This can be fixed in the next section if others see this as well.

```sh
2026/02/24 18:45:11.824 INFO    using provided configuration    {"config_file": "/etc/caddy/Caddyfile", "config_adapter": ""}
2026/02/24 18:45:11.825 WARN    Caddyfile input is not formatted; run the 'caddy fmt' command to fix inconsistencies    {"adapter": "caddyfile", "file": "/etc/caddy/Caddyfile", "line": 12}
2026/02/24 18:45:11.825 INFO    tls.cache.maintenance   started background certificate maintenance      {"cache": "0xc0002196c0"}
2026/02/24 18:45:11.825 INFO    http    skipping automatic certificate management because one or more matching certificates are already loaded    {"domain": "dcim.lab.int.loft", "server_name": "srv0"}
2026/02/24 18:45:11.825 INFO    http    enabling automatic HTTP->HTTPS redirects        {"server_name": "srv0"}
2026/02/24 18:45:11.825 INFO    tls.cache.maintenance   stopped background certificate maintenance      {"cache": "0xc0002196c0"}
Valid configuration
```

The `fmt` sub-command with the `caddy` command can reformat and even
`--overwrite` the `Caddyfile` with the correct formatting. Which is great
because the formatting can be picky for the `Caddyfile`. The server will run
fine without it. But, warnings can prevent us from seeing useful data in some
cases. So, with this solution avaialable. It's just better to use it to save on
mental bandwidth in the future.

```sh
caddy fmt --overwrite /etc/caddy/Caddyfile
```

Run the `caddy validate` command again on the configuration file and we should
see something like the following.

```sh
2026/02/24 19:12:46.974 INFO    using provided configuration    {"config_file": "/etc/caddy/Caddyfile", "config_adapter": ""}
2026/02/24 19:12:46.975 INFO    tls.cache.maintenance   started background certificate maintenance      {"cache": "0xc000251420"}
2026/02/24 19:12:46.976 INFO    http    skipping automatic certificate management because one or more matching certificates are already loaded    {"domain": "dcim.lab.int.loft", "server_name": "srv0"}
2026/02/24 19:12:46.976 INFO    http    enabling automatic HTTP->HTTPS redirects        {"server_name": "srv0"}
2026/02/24 19:12:46.976 INFO    tls.cache.maintenance   stopped background certificate maintenance      {"cache": "0xc000251420"}
Valid configuration
```

Now that's all done. I can use the `systemctl` command to enable and start
`caddy`.

```sh
systemctl enable --now caddy
```

This provides the following output indicating Caddy is running and functioning
as expected.

```sh
● caddy.service - Caddy
     Loaded: loaded (/usr/lib/systemd/system/caddy.service; enabled; preset: enabled)
     Active: active (running) since Tue 2026-02-24 18:32:15 UTC; 19min ago
       Docs: https://caddyserver.com/docs/
   Main PID: 55563 (caddy)
      Tasks: 11 (limit: 4601)
     Memory: 11.4M (peak: 17.7M)
        CPU: 159ms
     CGroup: /system.slice/caddy.service
             └─55563 /usr/bin/caddy run --environ --config /etc/caddy/Caddyfile

Feb 24 18:32:15 til-www-06 caddy[55563]: {"level":"info","ts":1771957935.266541,"logger":"http","msg":"enabling automatic HTTP->HTTPS >
Feb 24 18:32:15 til-www-06 caddy[55563]: {"level":"info","ts":1771957935.266816,"logger":"tls","msg":"cleaning storage unit","descript>
Feb 24 18:32:15 til-www-06 caddy[55563]: {"level":"info","ts":1771957935.2668538,"logger":"http","msg":"enabling HTTP/3 listener","add>
Feb 24 18:32:15 til-www-06 caddy[55563]: {"level":"info","ts":1771957935.2669024,"msg":"failed to sufficiently increase receive buffer>
Feb 24 18:32:15 til-www-06 caddy[55563]: {"level":"info","ts":1771957935.2669506,"logger":"tls","msg":"finished cleaning storage units>
Feb 24 18:32:15 til-www-06 caddy[55563]: {"level":"info","ts":1771957935.2670681,"logger":"http.log","msg":"server running","name":"sr>
Feb 24 18:32:15 til-www-06 caddy[55563]: {"level":"info","ts":1771957935.2670946,"logger":"http.log","msg":"server running","name":"re>
Feb 24 18:32:15 til-www-06 caddy[55563]: {"level":"info","ts":1771957935.2671897,"msg":"autosaved config (load with --resume flag)","f>
Feb 24 18:32:15 til-www-06 caddy[55563]: {"level":"info","ts":1771957935.2672205,"msg":"serving initial configuration"}
Feb 24 18:32:15 til-www-06 systemd[1]: Started caddy.service - Caddy.
```

## Configure Host Firewall

Really the only ports you need for the web services on Netbox are `80/tcp
(http)` and `443/tcp (https)`. But, I also have a [build note](/feed/build/init-baselines/ubuntu-server/) 
on configuration baselines that will provide an idea of my usual checklist for 
an initial baseline. For Ubuntu servers I make things simple and stick with the 
`ufw(1)` command.

Overall this is a web server. So `http` and `https` will need to be allowed in
through the firewall. 

The first port I allow in is `http` because I'm making it available so Caddy can
redirect to port `443/tcp`.

```sh
ufw allow in http
```

Next I allow in `https` or `443/tcp` for the second part of this.

```sh
ufw allow in https
```

Then I reload the firewall just out of habbit. It will apply the configuration
immediately when the other commands are run. But, I generally reload where I
can.

```sh
ufw reload
```

## Confirm Everything Is Working

There are multiple ways to confirm things are working as expected. The normal
one is to actually just use a browser to confirm everything is playing well with
each other.

![Netbox Community login screen](/feed/build/netbox/img/netbox-community-login-screen.jpg)

## Conclusion



