---
title: "Migrate Netbox from Ubuntu Server 22.04 LTS to Ubuntu Server 24.04 LTS"
description: "Working through the installation and setup for Netbox on Ubuntu Server 24.04 LTS."
cover: "/feed/build/netbox/netbox-community-login-screen.jpg"
date: 2026-02-23T08:08:15-06:00
lastmod: 2026-02-23
draft: false
tags: ["linux", "netbox"]
---

## Summary

In this article I will be working through migrating Netbox from Ubuntu Server
22.04 LTS to Ubuntu Server 24.04 LTS.

Netbox is a datacenter infrastructure management (DCIM) solution that can act as
a source of truth for your environment. Providing functionality that assists
automation and documentation. It does a lot more. But, that is the jist.

## Postgresql

### Setup

First I need to install the Postgres server package from Ubuntu

```sh
apt install -y postgresql
```

```sh
systemctl enable --now postgresql
```

```sh
psql -V
```

```sh
psql (PostgreSQL) 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)
```

```sh
sudo -u postgres psql
```

```sh
psql (16.11 (Ubuntu 16.11-0ubuntu0.24.04.1))
Type "help" for help.

postgres=#
```


```sql
CREATE DATABASE netbox;
```

```sql
CREATE DATABASE
```

```sql
CREATE USER netbox WITH PASSWORD '<password>';
```

```sql
CREATE ROLE
```

```sql
ALTER DATABASE netbox OWNER TO netbox;
ALTER DATABASE
```



```sql
\connect netbox;
You are now connected to database "netbox" as user "postgres".
netbox=# GRANT CREATE ON SCHEMA public TO netbox;
GRANT
```

```sh
psql --username netbox --password --host localhost netbox
```
```sh
psql (16.11 (Ubuntu 16.11-0ubuntu0.24.04.1))
SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, compression: off)
Type "help" for help.

netbox=>
```

```sh
\conninfo
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

Looks like the version here is `7.0.5` on the system.

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

```sh
apt install -y python3 python3-pip python3-venv python3-dev \
    build-essential libxml2-dev libxslt1-dev libffi-dev libpq-dev \
    libssl-dev zlib1g-dev git
```

```sh
python3 -V

```sh
Python 3.12.3
```

I intend to use the same configuration as before because it works well. This is
Option B in the installation document. Which uses `git(1)` to clone the
repository into the `/opt/netbox/` directory.

```sh
cp -r /path/to/netbox /opt/netbox/
```

```sh
sudo adduser --system --group netbox
```

```sh
info: Selecting UID from range 100 to 999 ...

info: Selecting GID from range 100 to 999 ...
info: Adding system user `netbox' (UID 112) ...
info: Adding new group `netbox' (GID 113) ...
info: Adding new user `netbox' (UID 112) with group `netbox' ...
info: Not creating `/nonexistent'
```

```sh
sudo chown --recursive netbox /opt/netbox/netbox/reports/
sudo chown --recursive netbox /opt/netbox/netbox/scripts/
```

Even though it was transferred from another server. I still want to review the
configuration for the installation. Just to see if there is anything I can
improve on the new server.


## Gunicorn

I use `systemd` to setup `gunicorn`. Since this was copied from the previous
system. There are parts within the installation that don't need to be followed.
I can copy the `systemd` service files from `/opt/netbox/contrib/`.

```sh
cp netbox-rq.service /etc/systemd/system/
```

```sh
cp netbox-rq.service /etc/systemd/system/
```

```sh
systemctl daemon-reload
```

```sh
systemctl enable --now netbox netbox-rq
```

```sh
systemctl status netbox
```

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

## Setup Caddy

Will need to load the TLS certificate and key files from the other server. There
is a little setup to this so that Caddy can 

Certificate files will go in the `/etc/ssl/cert` directory and the certificate
keys will go into the `/etc/ssl/private/` directory.

```sh
usermod -aG ssl-cert caddy
```

```sh
chown root:ssl-cert /etc/ssl/private/cert-key-file.key
```

```sh
chmod 640 /etc/ssl/private/cert-key-file.key
```

```sh
apt install -y caddy
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


```sh
caddy validate --config /etc/caddy/Caddyfile
```

```sh
2026/02/24 18:45:11.824 INFO    using provided configuration    {"config_file": "/etc/caddy/Caddyfile", "config_adapter": ""}
2026/02/24 18:45:11.825 WARN    Caddyfile input is not formatted; run the 'caddy fmt' command to fix inconsistencies    {"adapter": "caddyfile", "file": "/etc/caddy/Caddyfile", "line": 12}
2026/02/24 18:45:11.825 INFO    tls.cache.maintenance   started background certificate maintenance      {"cache": "0xc0002196c0"}
2026/02/24 18:45:11.825 INFO    http    skipping automatic certificate management because one or more matching certificates are already loaded    {"domain": "dcim.lab.int.loft", "server_name": "srv0"}
2026/02/24 18:45:11.825 INFO    http    enabling automatic HTTP->HTTPS redirects        {"server_name": "srv0"}
2026/02/24 18:45:11.825 INFO    tls.cache.maintenance   stopped background certificate maintenance      {"cache": "0xc0002196c0"}
Valid configuration
```

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

```sh
systemctl enable --now caddy
```

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
(http)` and `443/tcp (https)`. But, I also have a [note](#) on configuration 
baselines that will provide an idea of my usual checklist for an initial 
baseline. For Ubuntu servers I make things simple and stick with the `ufw(1)`
command.

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

![Netbox Community login screen](/feed/build/netbox/netbox-community-login-screen.jpg)

