---
title: "Starting A Shell On A Kubernetes Pod"
author: "Timothy Loftus (n3s0)"
date: 2025-10-28T11:25:27-06:00
lastmod: 2025-10-28
description: "Some notes on starting shells on Kubernetes pods."
cover: '/img/kubernetes-concept.png'
draft: false
tags: ["kubernetes"]
---

## Overview

I've been navigating through Kubernetes infrastructure so I figured I would post
some content related to accessing interactive shells within Kubernetes pods.
This is useful for troubleshooting. Whether that'd be for the networking for the
container or the application.

## Getting Pods

The following command will list all pods in the `lab` namespace.

```sh
kubectl get pods -n lab
```

Output looks something like this. This output shows the name of the container,
how many containers and replicas are ready, current status, restart count, and
the age of the container.

```sh
NAME                                                 READY   STATUS    RESTARTS      AGE
grafana-fdc74df47-v78gv                              1/1     Running   0             12h
```

More information is provided by the `describe` command. But, that is out of
scope for this note. I will write a note for that soon.

## Starting A Shell On A Pod

> Note: Utilize the `-n` or `--namespace` options if you are utilizing name
> spaces. Personally, I would recommend it if you're not.

Depending on if a pod has commands or a shell available to jump into. You can
utilize the `exec` subcommand with `-i` and `-t` executing `/bin/bash` for use.
Some grafana containers have `curl(1)` available to utilize.

This will start an interactive Bash shell on the `grafana` pod.

```sh
kubectl -n lab exec -it grafana-fdc74df44-v80gv -- /bin/bash
```

There is another way to run a temporary network troubleshooting container named
`netshoot`[^1]. This command will run a temporary netshoot shell using the
`nicolaka/netshoot` container image.

[^1]: There is a container named netshoot that has a bunch of network
    troubleshooting tools to use. [Check it out](https://github.com/nicolaka/netshoot)

```sh
kubectl run tmp-netshoot --rm -it --image nicolaka/netshoot -n lab
```

## Conclusion

In this note I discuss how to list your pods and start a bash shell for
troubleshooting. Which is useful if you ever need to troubleshoot network access
or application issues within the container.

A note will be made for `get` and `describe` commands soon. 
