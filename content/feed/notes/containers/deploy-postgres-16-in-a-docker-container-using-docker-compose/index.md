---
title: "Deploying A Postgres 16 Container Using Docker & Docker Compose (Development)"
author: "Timothy Loftus (n3s0)"
date: 2026-08-25T11:06:44-05:00
lastmod: 2026-08-25
summary: "Running document containing notes on deploying PostgreSQL 16 container using Docker & Docker Compose."
draft: true
tags: ["devops", "containers", "docker", "podman"]
---

## Summary

I recently had to setup a Postgres container for a personal project I'm working
on. Which isn't hard. But, I eventually want to build my own container image for
it as well. Just to develop an understanding of how it's all setup and something
to reference later so I'm not searching the Interent for it. Which is the whole
purpose of this site.

This configuration is primarily for development. Not production. So that needs
to be considered when using this.

With that being said. This will be updated with reletive consistancy whenever I
run into challenges. I won't be updating this document with issues. But, will be
creating a a new note related to the container/container image.

Installing Docker is out of scope for this note. But, I will write something up
and provide it.

## PostgreSQL Configuration

At this point I don't have any tweaks for the Postgres configuration to note.
But, I do plan on tweaking this for production in the future. Which will be an 

## Docker Compose File

This docker compose file was written as a quick development enviornment build.
It is not meant for production.

This is the docker-compose.yml file I wrote up for this development database.
I've tested it multiple times and it seems to work pretty well.

This docker compose file will deploy a PostgreSQL container named `postgres_dev`
along with a volume named `pgdata` for storing the database files and a network
named `database_network` so we can communicate with the `postgres_dev`
container.

There are some environment variables set for authentication and the database
name. Connected is the volume `pgdata`; which maps to the data directory for
postgres and the container network.

I added a healthcheck so I know everything is OK once I start pushing data to
the database. This uses the `pg_isready` command. Which checks if it can connect
to the database. This can also be checked using the shell. But, if I do this
using the health checks. I can get an idea weather things are peachy or not. If
things are not running smoothly. I can determine that via `docker ps`. Which
will output `unhealthy` if the connection isn't working correctly.

The volume is just for the purpose of making sure the data stays put while I
tinker with the containers config.

The network is way to remove an extra step in the future. I've been working on
developing web applications with repository abstraction and web APIs for
various problems I want to solve and future containers added to the application
will need to be able to communicate with the database. I also want to use the
name of the container instead of it's IP address. I know I can do this with the
`default` network and there are probably better ways to do this. But, the focus
is getting a quick development database stood up that I host on my local
workstation.

```yaml
services:
  postgres_dev:
    image: postgres:16-alpine
    container_name: postgres_dev
    environment:
      POSTGRES_USER: appname
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: appname
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - database_network
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U appname -d appname']
      interval: 5s
      timeout: 5s
      retries: 5
      start_period: 5s

volumes:
  pgdata:

networks:
  database_network:
    driver: bridge
```

## Deploying The Container

This command should be run as `sudo(1)` if the user running the command doesn't
have the necessary privileges.

Deploying the container just requires the `up` option and I use the `-d` flag to
detach from standard output. This can all be checked later and it allows me to
run other commands after this one is finished.

```sh
docker compose up -d
```

The output is from the command above. Docker is creating the network and the
volume. Then it starts the container named `postgres_dev`.

```sh
[+] up 3/3
 ✔ Network postgres_database_network Created                                                                                                                                                                 0.3s
 ✔ Volume postgres_pgdata            Created                                                                                                                                                                 0.0s
 ✔ Container postgres_dev            Started 
```

## Drestroying The Container

This command should also be run with `sudo(1)` if the user who's running it
doesn't have the necessary privileges.

This command will remove the `postgres_dev` container and the database network.
It doesn't touch the volume that was created for the container. If removing the
volumes is desired. The `-v` flag can be used.

```sh
docker compose down
```

Below is the output from this command. Reporting the container and container
network has been removed.

```sh
[+] down 2/2
 ✔ Container postgres_dev            Removed                                                                                                                                                                 0.6s
 ✔ Network postgres_database_network Removed                                                                                                                                                                 0.5s
```

## Checking The Container

The container can be checked a few ways to determine that everything is working.
One is to just check which containers are running and the other is to look at
the logs for the container.

The following command can be used to review what containers are running. One
thing I'm looking for involving this is the word `healthy`. Also need to make
sure the container isn't restarting.

```sh
docker ps 
```

The output below shows that the container is healthy in the `STATUS` column.

```sh
CONTAINER ID   IMAGE                COMMAND                  CREATED          STATUS                    PORTS                                         NAMES
228cb8548e09   postgres:16-alpine   "docker-entrypoint.s…"   20 seconds ago   Up 20 seconds (healthy)   0.0.0.0:5432->5432/tcp, [::]:5432->5432/tcp   postgres_dev
```

The following command can be used to review the logs for the container. Which is
useful whenever there is something is wrong and I need to see if it's with this
specific container. The log will output any errors the application outputted to
stdout.

```sh
docker logs postgres_dev
```

Below is the output from the container logs. This will report normal operation
and errors. This includes things like the IP address, port number, start/stop
logs, etc.

```sh
PostgreSQL Database directory appears to contain a database; Skipping initialization

2026-08-25 21:44:43.234 UTC [1] LOG:  starting PostgreSQL 16.6 on x86_64-pc-linux-musl, compiled by gcc (Alpine 14.2.0) 14.2.0, 64-bit
2026-08-25 21:44:43.238 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2026-08-25 21:44:43.249 UTC [1] LOG:  listening on IPv6 address "::", port 5432
2026-08-25 21:44:43.260 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2026-08-25 21:44:43.266 UTC [29] LOG:  database system was shut down at 2026-08-25 21:44:34 UTC
2026-08-25 21:44:43.271 UTC [1] LOG:  database system is ready to accept connections
2026-08-25 21:49:43.285 UTC [27] LOG:  checkpoint starting: time
2026-08-25 21:49:43.317 UTC [27] LOG:  checkpoint complete: wrote 3 buffers (0.0%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.009 s, sync=0.004 s, total=0.032 s; sync files=2, longest=0.002 s, average=0.002 s; distance=0 kB, estimate=0 kB; lsn=0/195C328, redo lsn=0/195C2F0
```

## Testing The Container

There are other methods to test connectivity to the database. But, this is a
good quick and dirty method.

After the container is up I can check it using the `pgsql` command which can be
used to connect to the database.

```sh
pgsql -h localhost -U appname -d appname
```

After typing in the password. There should be the following prompt. Looks like
in this instance. It should be good to go.

```sh
psql (18.6, server 16.6)
Type "help" for help.

appname=#
```

## Conclusion

So that is a little overview of how to setup a development PostgreSQL container
using Docker and Docker Compose. This is far from the finished product. But, I
think this is a good start.

I will be working on other projects related to this. Either a more production
worthy database. Along with a database cluster setup that has a main database
server and a replica. To add more too it. I plan on setting up multiple
applications in containers along with building my own container images as I
learn more. I work on this from time to time in my professional life. But, I'm
working on honing my skills in this. So I'll be reading up a lot more on
containers and container orchestration. 
