---
title: "San Juan: Mucho Traefik"
date: 2026-03-18T18:40:47-06:00
lastmod: 2025-10-19
description: "Writeup for San Juan SadServers challenge. Exercise works on fixing a Traefik load balancer that's broken."
author: "Timothy Loftus (n3s0)"
cover: "/feed/writeups/sadservers/img/sadservers.jpg"
draft: true
tags: ["SadServers", "Linux"]
---

## Summary
---

This one might be a little longer then usual; as far as write-ups are concerned.
But, this is the San Juan: Mucho Traefik 

## Scenario
---

Scenario: "San Juan": mucho Traefik

Level: Medium

Description: 

There is a Traefik load balancer that must be up and running. The server and 
the backend services are managed by Docker Compose. Running 
`curl -s app.sadserver | head -n1` must return the host ID of one of the backend 
servers, running the command again must return a new host ID. The server seems 
to be working some times, some others fails or just times out.

The round-robin configuration should make the webserver iterate through the 
back-end servers.

Test: `curl -s app.sadserver | head -n1` returns something like `Hostname:`

The "Check My Solution" button runs the script /home/admin/agent/check.sh, 
which you can see and execute.

Time to Solve: 20 minutes.

OS: Debian 13

Root (sudo) Access: Yes

## Solution
---

```sh
admin@i-06b169eb07f44d33d:~$ curl -s app.sadserver | head -n 1
^C
admin@i-06b169eb07f44d33d:~$ curl -s app.sadserver | head -n 1
Bad Gatewayadmin@i-06b169eb07f44d33d:~$ curl -s app.sadserver | head -n 1
Hostname: 2990d7e439ce
admin@i-06b169eb07f44d33d:~$ curl -s app.sadserver | head -n 1
Hostname: 049eb38a4bf4
admin@i-06b169eb07f44d33d:~$ curl -s app.sadserver | head -n 1
Hostname: 2990d7e439ce
admin@i-06b169eb07f44d33d:~$ curl -s app.sadserver | head -n 1
Hostname: 049eb38a4bf4
admin@i-06b169eb07f44d33d:~$ curl -s app.sadserver | head -n 1
admin@i-06b169eb07f44d33d:~$ 
```

```sh
 sudo docker ps
CONTAINER ID   IMAGE            COMMAND                  CREATED       STATUS          PORTS                                                                          NAMES
a2f3f16b0928   traefik:v3.6.1   "/entrypoint.sh --ap…"   4 weeks ago   Up 33 seconds   0.0.0.0:80->80/tcp, [::]:80->80/tcp, 0.0.0.0:443->443/tcp, [::]:443->443/tcp   app-traefik-1
2990d7e439ce   traefik/whoami   "/whoami"                4 weeks ago   Up 33 seconds   80/tcp                                                                         app-app03-1
049eb38a4bf4   traefik/whoami   "/whoami"                4 weeks ago   Up 33 seconds   80/tcp                                                                         app-app01-1
5b3c8c3c22bd   traefik/whoami   "/whoami"                4 weeks ago   Up 33 seconds   80/tcp                                                                         app-app04-1
2fc39d0d7412   traefik/whoami   "/whoami"                4 weeks ago   Up 33 seconds   80/tcp                                                                         app-app02-1
```

```yaml
services:
  traefik:
    image: traefik:v3.6.1
    restart: unless-stopped
    command:
      - "--api.dashboard=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--log.level=DEBUG"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    networks:
      - web

  app01:
    image: traefik/whoami
    restart: unless-stopped
    labels:
      traefik.enable: "true"
      traefik.http.routers.app.rule: Host(`app.sadserver`)
      traefik.http.services.app.loadbalancer.server.port: "80"
    networks:
      - web

  app02:
    image: traefik/whoami
    restart: unless-stopped
    labels:
      traefik.enable: "true"
      traefik.http.routers.app.rule: Host(`app.sadserver`)
      traefik.http.services.app.loadbalancer.server.port: "81"
    networks:
      - web

  app03:
    image: traefik/whoami
    restart: unless-stopped
    labels:
      traefik.enable: "true"
      traefik.http.routers.app.rule: Host(`app.sadserver`)
      traefik.http.services.app.loadbalancer.server.port: "80"
    networks:
      - web

  app04:
    image: traefik/whoami
    restart: unless-stopped
    labels:
      traefik.enable: "true"
      traefik.http.routers.app.rule: Host(`app.sadserver`)
      traefik.http.services.app.loadbalancer.server.port: "80"
    networks:
      - internal

networks:
  web:
  internal:
```

```yaml
  app02:
    image: traefik/whoami
    restart: unless-stopped
    labels:
      traefik.enable: "true"
      traefik.http.routers.app.rule: Host(`app.sadserver`)
      traefik.http.services.app.loadbalancer.server.port: "81"
    networks:
      - web
```

```yaml
  app02:
    image: traefik/whoami
    restart: unless-stopped
    labels:
      traefik.enable: "true"
      traefik.http.routers.app.rule: Host(`app.sadserver`)
      traefik.http.services.app.loadbalancer.server.port: "80"
    networks:
      - web
```

```yaml
  app04:
    image: traefik/whoami
    restart: unless-stopped
    labels:
      traefik.enable: "true"
      traefik.http.routers.app.rule: Host(`app.sadserver`)
      traefik.http.services.app.loadbalancer.server.port: "80"
    networks:
      - internal
```

```yaml
  app04:
    image: traefik/whoami
    restart: unless-stopped
    labels:
      traefik.enable: "true"
      traefik.http.routers.app.rule: Host(`app.sadserver`)
      traefik.http.services.app.loadbalancer.server.port: "80"
    networks:
      - web
```

```sh
 docker compose down
[+] Running 7/7
 ✔ Container app-app04-1    Removed                                                                               0.5s 
 ✔ Container app-traefik-1  Removed                                                                               0.7s 
 ✔ Container app-app02-1    Removed                                                                               0.5s 
 ✔ Container app-app01-1    Removed                                                                               0.5s 
 ✔ Container app-app03-1    Removed                                                                               0.7s 
 ✔ Network app_web          Removed                                                                               0.2s 
 ✔ Network app_internal     Removed                                                                               0.4s
```

```sh
 docker compose up -d
[+] Running 7/7
 ✔ Network app_internal     Created                                                                               0.1s 
 ✔ Network app_web          Created                                                                               0.1s 
 ✔ Container app-app02-1    Started                                                                               0.8s 
 ✔ Container app-app03-1    Started                                                                               0.9s 
 ✔ Container app-app04-1    Started                                                                               0.6s 
 ✔ Container app-traefik-1  Started                                                                               0.9s 
 ✔ Container app-app01-1    Started                                                                               0.9s 
```

```sh
admin@i-06b169eb07f44d33d:~/app$ docker compose ps
NAME            IMAGE            COMMAND                  SERVICE   CREATED         STATUS         PORTS
app-app01-1     traefik/whoami   "/whoami"                app01     9 seconds ago   Up 9 seconds   80/tcp
app-app02-1     traefik/whoami   "/whoami"                app02     9 seconds ago   Up 9 seconds   80/tcp
app-app03-1     traefik/whoami   "/whoami"                app03     9 seconds ago   Up 9 seconds   80/tcp
app-app04-1     traefik/whoami   "/whoami"                app04     9 seconds ago   Up 9 seconds   80/tcp
app-traefik-1   traefik:v3.6.1   "/entrypoint.sh --ap…"   traefik   9 seconds ago   Up 9 seconds   0.0.0.0:80->80/tcp, [::]:80->80/tcp, 0.0.0.0:443->443/tcp, [::]:443->443/tcp
```
```sh
admin@i-06b169eb07f44d33d:~/app$ docker ps
CONTAINER ID   IMAGE            COMMAND                  CREATED          STATUS          PORTS                                                                          NAMES
aea1609ddfa9   traefik/whoami   "/whoami"                17 seconds ago   Up 17 seconds   80/tcp                                                                         app-app03-1
ac6834c13902   traefik:v3.6.1   "/entrypoint.sh --ap…"   17 seconds ago   Up 17 seconds   0.0.0.0:80->80/tcp, [::]:80->80/tcp, 0.0.0.0:443->443/tcp, [::]:443->443/tcp   app-traefik-1
4679e1791b22   traefik/whoami   "/whoami"                17 seconds ago   Up 17 seconds   80/tcp                                                                         app-app04-1
39d1f319d593   traefik/whoami   "/whoami"                17 seconds ago   Up 17 seconds   80/tcp                                                                         app-app02-1
a97bca1562b3   traefik/whoami   "/whoami"                17 seconds ago   Up 17 seconds   80/tcp                                                                         app-app01-1
```

```sh
admin@i-06b169eb07f44d33d:~/app$ curl -s app.sadserver | head -n 1
Hostname: 3e1c74bbbd97
admin@i-06b169eb07f44d33d:~/app$ curl -s app.sadserver | head -n 1
Hostname: ce7d548e11df
admin@i-06b169eb07f44d33d:~/app$ curl -s app.sadserver | head -n 1
Hostname: aa0f61ede6cd
admin@i-06b169eb07f44d33d:~/app$ curl -s app.sadserver | head -n 1
Hostname: a75044ca6502
admin@i-06b169eb07f44d33d:~/app$ curl -s app.sadserver | head -n 1
Hostname: aa0f61ede6cd
admin@i-06b169eb07f44d33d:~/app$ curl -s app.sadserver | head -n 1
Hostname: a75044ca6502
admin@i-06b169eb07f44d33d:~/app$ curl -s app.sadserver | head -n 1
Hostname: 3e1c74bbbd97
admin@i-06b169eb07f44d33d:~/app$ curl -s app.sadserver | head -n 1
Hostname: ce7d548e11df
admin@i-06b169eb07f44d33d:~/app$ curl -s app.sadserver | head -n 1
Hostname: 3e1c74bbbd97
admin@i-06b169eb07f44d33d:~/app$ curl -s app.sadserver | head -n 1
Hostname: ce7d548e11df
admin@i-06b169eb07f44d33d:~/app$ curl -s app.sadserver | head -n 1
Hostname: aa0f61ede6cd
```


## Conclusion
---

```sh
./check.sh 
```

```sh
OK
```
