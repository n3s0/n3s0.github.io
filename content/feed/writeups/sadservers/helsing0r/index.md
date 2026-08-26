---
title: "Helsingør: The first walls of postgres physical replication"
author: "Timothy Loftus (n3s0)"
date: 2026-08-17T18:45:47-06:00
lastmod: 2026-08-17
description: "Writeup/notes for the SadServers Helsingør challenge. Which walks through troubleshooting a postgres replication issue where the replica container wont start."
cover: "/feed/writeups/sadservers/img/sadservers.jpg"
draft: false
tags: ["sadservers", "postgresql", "docker"]
---

## Scenario

This is not completed just yet.

You're setting up a PostgreSQL database with replication, you decided to use 
Docker along with Docker Compose to make it easier to manage and test, after a 
few hours of work you finished the job and the master database is up and 
running, but you're having trouble with the replica.

You need to figure out what's wrong with the replica and fix it.

Since you are using Docker Compose, you can check the status of the running 
containers using `docker compose ps` or `docker ps` will do the job too). You 
may also want to check the logs of the containers.

All definition for the containers are inside the docker-compose.yml file. You 
can stand up the environment by running `docker compose up -d` and set it down 
by running `docker compose down`.

If you make any change to the docker-compose.yml file, you can restart the 
containers by running `docker compose up -d --force-recreate`.

### Test

Postgres replica container works.

## Solution

```sh
docker compose ps
```

```sh
NAME                  IMAGE         COMMAND                  SERVICE               CREATED       STATUS                          PORTS
postgres-db-master    postgres:16   "docker-entrypoint.s…"   postgres-db-master    2 years ago   Up 3 minutes (healthy)          0.0.0.0:5432->5432/tcp, :::5432->5432/tcp
postgres-db-replica   postgres:16   "docker-entrypoint.s…"   postgres-db-replica   2 years ago   Restarting (1) 50 seconds ago  
```

```yaml
version: '3.9'
x-pg-common:
  &pg-common
  image: postgres:16
  user: postgres
  restart: always
  healthcheck:
    test: "pg_isready -U helsingor -d postgres"
    interval: 30s
    timeout: 10s
    retries: 5
```

```yaml
services:
  postgres-db-master:
    <<: *pg-common
    container_name: postgres-db-master
    ports:
      - 5432:5432
    environment:
      POSTGRES_USER: REDACTED
      POSTGRES_PASSWORD: REDACTED
      POSTGRES_HOST_AUTH_METHOD: "scram-sha-256\nhost replication all 0.0.0.0/0 trust"
    volumes:
      - ./postgres/master/postgres.conf:/etc/postgresql/16/main/postgresql.conf
      - postgres-db-master-data:/var/lib/postgresql/data
      - ./postgres/master/initdb.d:/docker-entrypoint-initdb.d
    networks:
      - pg-net
    command: |
      postgres -c 'config_file=/etc/postgresql/16/main/postgresql.conf'
    deploy:
      resources:
        limits:
          cpus: '0.50'
          memory: 100M
```

```yaml
services:
#....
  postgres-db-replica:
    <<: *pg-common
    container_name: postgres-db-replica
    ports:
      - 5433:5432
    environment:
      POSTGRES_PASSWORD: REDACTED
    volumes:
      - ./postgres/replica/postgres.conf:/etc/postgresql/16/main/postgresql.conf
    networks:
      - pg-net
    command: |
      bash -c "
      rm -fR /var/lib/postgresql/data/
      until pg_basebackup -D /var/lib/postgresql/data -RP -X stream -c fast -S replicator_slot -U replication -p 5432 -h postgres-db-master
      do
        echo 'Waiting for primary to connect...'
        sleep 1s
      done
      echo 'Backup done, starting replica...'
      chmod 0700 /var/lib/postgresql/data
      touch /var/lib/postgresql/data/standby.signal
      postgres -c 'config_file=/etc/postgresql/16/main/postgresql.conf'
      "
    deploy:
      resources:
        limits:
          cpus: '0.50'
          memory: 100M
    depends_on:
      - postgres-db-master

```

```yaml
networks:
  pg-net:
    driver: bridge
```

```yaml
volumes:
  postgres-db-master-data:
```



```sh
docker logs postgres-db-replica 
```

```sh
rm: cannot remove '/var/lib/postgresql/data/': Device or resource busy
waiting for checkpoint
30743/30743 kB (100%), 0/1 tablespace
30743/30743 kB (100%), 1/1 tablespace
Backup done, starting replica...
2026-08-17 19:28:35.773 GMT [1] LOG:  starting PostgreSQL 16.2 (Debian 16.2-1.pgdg120+2) on x86_64-pc-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
2026-08-17 19:28:35.774 GMT [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2026-08-17 19:28:35.774 GMT [1] LOG:  listening on IPv6 address "::", port 5432
2026-08-17 19:28:35.780 GMT [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2026-08-17 19:28:35.789 GMT [15] LOG:  database system was interrupted; last known up at 2026-08-17 19:28:35 GMT
2026-08-17 19:28:35.806 GMT [15] LOG:  entering standby mode
2026-08-17 19:28:35.806 GMT [15] LOG:  starting backup recovery with redo LSN 0/25000028, checkpoint LSN 0/25000060, on timeline ID 1
2026-08-17 19:28:35.812 GMT [15] FATAL:  recovery aborted because of insufficient parameter settings
2026-08-17 19:28:35.812 GMT [15] DETAIL:  max_connections = 80 is a lower setting than on the primary server, where its value was 100.
2026-08-17 19:28:35.812 GMT [15] HINT:  You can restart the server after making the necessary configuration changes.
2026-08-17 19:28:35.814 GMT [1] LOG:  startup process (PID 15) exited with exit code 1
2026-08-17 19:28:35.814 GMT [1] LOG:  aborting startup due to startup process failure
2026-08-17 19:28:35.815 GMT [1] LOG:  database system is shut down
```

```ini
#------------------------------------------------------------------------------
# CONNECTIONS AND AUTHENTICATION
#------------------------------------------------------------------------------

# - Connection Settings -

listen_addresses = '*'
                                        # comma-separated list of addresses;
                                        # defaults to 'localhost'; use '*' for all
                                        # (change requires restart)
port = 5432                             # (change requires restart)
max_connections = 80                    # (change requires restart)
reserved_connections = 5                # (change requires restart)
superuser_reserved_connections = 3      # (change requires restart)
unix_socket_directories = '/var/run/postgresql' # comma-separated list of directories
                                        # (change requires restart)
#unix_socket_group = ''                 # (change requires restart)
#unix_socket_permissions = 0777         # begin with 0 to use octal notation
                                        # (change requires restart)
#bonjour = off                          # advertise server via Bonjour
                                        # (change requires restart)
#bonjour_name = ''                      # defaults to the computer name
                                        # (change requires restart)
...
```


```ini
#------------------------------------------------------------------------------
# CONNECTIONS AND AUTHENTICATION
#------------------------------------------------------------------------------

# - Connection Settings -

listen_addresses = '*'
                                        # comma-separated list of addresses;
                                        # defaults to 'localhost'; use '*' for all
                                        # (change requires restart)
port = 5432                             # (change requires restart)
max_connections = 100                   # (change requires restart)
reserved_connections = 5                # (change requires restart)
superuser_reserved_connections = 3      # (change requires restart)
unix_socket_directories = '/var/run/postgresql' # comma-separated list of directories
                                        # (change requires restart)
#unix_socket_group = ''                 # (change requires restart)
#unix_socket_permissions = 0777         # begin with 0 to use octal notation
                                        # (change requires restart)
#bonjour = off                          # advertise server via Bonjour
                                        # (change requires restart)
#bonjour_name = ''                      # defaults to the computer name
                                        # (change requires restart)
...
```

```sh
admin@i-028f7e093fb914a7b:~$ docker compose down
[+] Running 3/2
 ✔ Container postgres-db-replica  Removed                                                                                                                0.0s 
 ✔ Container postgres-db-master   Removed                                                                                                                0.3s 
 ✔ Network admin_pg-net           Removed                                                                                                                0.1s 
admin@i-028f7e093fb914a7b:~$ docker compose up -d
[+] Running 2/3
 ⠇ Network admin_pg-net           Created                                                                                                                0.9s 
 ✔ Container postgres-db-master   Started                                                                                                                0.5s 
 ✔ Container postgres-db-replica  Started                                                                                                                0.7s 
admin@i-028f7e093fb914a7b:~$ docker compose ps
NAME                  IMAGE         COMMAND                  SERVICE               CREATED         STATUS                                     PORTS
postgres-db-master    postgres:16   "docker-entrypoint.s…"   postgres-db-master    8 seconds ago   Up 7 seconds (health: starting)            0.0.0.0:5432->5432/tcp, :::5432->5432/tcp
postgres-db-replica   postgres:16   "docker-entrypoint.s…"   postgres-db-replica   8 seconds ago   Up Less than a second (health: starting)   0.0.0.0:5433->5432/tcp, :::5433->5432/tcp
```

```sh
rm: cannot remove '/var/lib/postgresql/data/': Device or resource busy
waiting for checkpoint
30743/30743 kB (100%), 0/1 tablespace
30743/30743 kB (100%), 1/1 tablespace
Backup done, starting replica...
2026-08-17 19:37:55.482 GMT [1] LOG:  starting PostgreSQL 16.2 (Debian 16.2-1.pgdg120+2) on x86_64-pc-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
2026-08-17 19:37:55.484 GMT [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2026-08-17 19:37:55.484 GMT [1] LOG:  listening on IPv6 address "::", port 5432
2026-08-17 19:37:55.491 GMT [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2026-08-17 19:37:55.501 GMT [14] LOG:  database system was interrupted; last known up at 2026-08-17 19:37:54 GMT
2026-08-17 19:37:55.517 GMT [14] LOG:  entering standby mode
2026-08-17 19:37:55.518 GMT [14] LOG:  starting backup recovery with redo LSN 0/4B000028, checkpoint LSN 0/4B000060, on timeline ID 1
2026-08-17 19:37:55.523 GMT [14] FATAL:  recovery aborted because of insufficient parameter settings
2026-08-17 19:37:55.523 GMT [14] DETAIL:  max_worker_processes = 4 is a lower setting than on the primary server, where its value was 8.
2026-08-17 19:37:55.523 GMT [14] HINT:  You can restart the server after making the necessary configuration changes.
2026-08-17 19:37:55.534 GMT [1] LOG:  startup process (PID 14) exited with exit code 1
2026-08-17 19:37:55.534 GMT [1] LOG:  aborting startup due to startup process failure
2026-08-17 19:37:55.535 GMT [1] LOG:  database system is shut down
```

Something tells me I'm going to 

```sh
diff <(grep -E "max_connections|max_worker_processes|max_wal_senders|max_prepared_transactions|max_locks_per_transaction" postgres/master/postgres.conf | sort) <(grep -E "max_connections|max_worker_processes|max_wal_senders|max_prepared_transactions|max_locks_per_transaction" postgres/replica/postgres.conf | sort)
```

```sh
2d1
< #max_locks_per_transaction = 64               # min 10
5a5
> max_locks_per_transaction = 32                # min 10
7,8c7,8
< max_wal_senders = 10          # max number of walsender processes
< max_worker_processes = 8              # (change requires restart)
---
> max_wal_senders = 5           # max number of walsender processes
> max_worker_processes = 4              # (change requires restart)
```

```ini
#------------------------------------------------------------------------------
# LOCK MANAGEMENT
#------------------------------------------------------------------------------

#deadlock_timeout = 1s
max_locks_per_transaction = 64          # min 10
                                        # (change requires restart)
#max_pred_locks_per_transaction = 64    # min 10
                                        # (change requires restart)
#max_pred_locks_per_relation = -2       # negative values mean
                                        # (max_pred_locks_per_transaction
                                        #  / -max_pred_locks_per_relation) - 1
#max_pred_locks_per_page = 2            # min 0
...
```

```ini
#------------------------------------------------------------------------------
# REPLICATION
#------------------------------------------------------------------------------

# - Sending Servers -

# Set these on the primary and on any standby that will send replication data.

max_wal_senders = 10            # max number of walsender processes
                                # (change requires restart)
#max_replication_slots = 10     # max number of replication slots
                                # (change requires restart)
#wal_keep_size = 0              # in megabytes; 0 disables
#max_slot_wal_keep_size = -1    # in megabytes; -1 disables
#wal_sender_timeout = 60s       # in milliseconds; 0 disables
#track_commit_timestamp = off   # collect timestamp of transaction commit
                                # (change requires restart)

# - Primary Server -

# These settings are ignored on a standby server.

#synchronous_standby_names = '' # standby servers that provide sync rep
                                # method to choose sync standbys, number of sync standbys,
                                # and comma-separated list of application_name
                                # from standby(s); '*' = all

...
```

```ini
#------------------------------------------------------------------------------
# RESOURCE USAGE (except WAL)
#------------------------------------------------------------------------------
...
# - Asynchronous Behavior -

#backend_flush_after = 0                # measured in pages, 0 disables
effective_io_concurrency = 50           # 1-1000; 0 disables prefetching
#maintenance_io_concurrency = 10        # 1-1000; 0 disables prefetching
max_worker_processes = 8                # (change requires restart)
max_parallel_workers_per_gather = 2     # taken from max_parallel_workers
max_parallel_maintenance_workers = 2    # taken from max_parallel_workers
max_parallel_workers = 2                # maximum number of max_worker_processes that
                                        # can be used in parallel operations
#parallel_leader_participation = on
#old_snapshot_threshold = -1            # 1min-60d; -1 disables; 0 is immediate
                                        # (change requires restart)
...
```

```sh
docker compose down
```

```sh
[+] Running 3/3
 ✔ Container postgres-db-replica  Removed                                                                                                                0.2s 
 ✔ Container postgres-db-master   Removed                                                                                                                0.3s 
 ✔ Network admin_pg-net           Removed                                                                                                                0.1s 
```
```sh
docker compose up -d
```

```sh
[+] Running 2/3
 ⠋ Network admin_pg-net           Created                                                                                                                1.0s 
 ✔ Container postgres-db-master   Started                                                                                                                0.6s 
 ✔ Container postgres-db-replica  Started              
```

```sh
docker compose ps
```

```sh
NAME                  IMAGE         COMMAND                  SERVICE               CREATED          STATUS                    PORTS
postgres-db-master    postgres:16   "docker-entrypoint.s…"   postgres-db-master    36 seconds ago   Up 35 seconds (healthy)   0.0.0.0:5432->5432/tcp, :::5432->5432/tcp
postgres-db-replica   postgres:16   "docker-entrypoint.s…"   postgres-db-replica   36 seconds ago   Up 35 seconds (healthy)   0.0.0.0:5433->5432/tcp, :::5433->5432/tcp
```

## Conclusion

This challenge was pretty simple. However, my first run-through I might have
done a few things differently. Which is what I'm displaying in this writeup.
