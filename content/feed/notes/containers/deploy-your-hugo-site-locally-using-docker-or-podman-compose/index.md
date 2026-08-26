---
title: "Deploying Your Hugo Blog Development Server Using Podman/Docker Compose"
author: "Timothy Loftus (n3s0)"
date: 2023-10-13T11:05:44-05:00
lastmod: 2026-08-26
summary: "Some workflow updates for the blog. A simple Hugo Podman/Docker container for writting content with docker/podman-compose."
draft: false
tags: ["devops", "containers", "docker", "podman"]
---

## Summary

I revamped this post a little bit. Revisited the development container for my
`n3s0.tech` journal site. I can say now that I enjoy it a little more.

Soon I'll be building my own images for development and production. Along with
docker compose files and maybe even some supporting helm charts to go along with
them. But, until that happens I will use a container image that's more mature 
to save some time. What I have now will indeed work and works well.

## Docker Compose Setup

Below is the docker-compose.yml file used for deploying the dev container. Name 
of the file is `docker-compose-dev.yml` in the repository. This will build a 
service named server that utilizes the `hugomods/hugo:exts-non-root` image.
BaseURL needs to be set explicitly for all of the theme bits.

```yaml
services:
  hugo_n3s0:
    image: hugomods/hugo:exts-non-root
    container_name: hugo-n3s0
    environment:
      - HUGO_ENV=development
    restart: always
    working_dir: /src
    volumes:
      - ./:/src
    ports:
      - "1313:1313"
    command: server --bind 0.0.0.0 --port 1313 --appendPort=false --baseURL http://localhost:1313
```

It's very simple. Just the way I like it. Though, I have yet to test it
on a fresh environment. Something that I would also like to note. To
those who have never used docker-compose or podman-compose. They both
need to see the compose file.

## Deploy The Container

After cloning the project there are a few commands that need to be
executed before seeing the site locally. This command will bring up the
container. To just deploy it without needing to interact with the
container. Add the ```-d``` flag to detach from the stdout of the container.

I have included both podman and docker commands to accomplish this.

### Podman Compose

```sh
podman-compose up
```

### Docker Compose

```sh
docker compose up
```

## Spinning Everything Down

To shut everything down. Use the following command(s). This will remove the
container and the networks associated with it.

Included are both podman-compose and docker compose commands that can be used
for this.

### Podman Compose

```sh
podman-compose down
```

### Docker Compose

```sh
docker compose down
```

## Conclusion

With that. I think that covers the fun for this today. If I miss
anything I'll put an update on this. But, I think the next steps for
this are to actually hone a production build so I can comfortably deploy
this anywhere. 

