---
title: "Restarting Kubernetes Deployments To Apply Config"
author: "Timothy Loftus (n3s0)"
date: 2025-11-03T11:25:27-06:00
lastmod: 2025-11-03
description: "Some notes on restarting kubernetes deployments."
cover: '/img/kubernetes-concept.png'
draft: false
tags: ["kubernetes"]
---

# Overview

When you make changes to a kubernetes pod or deployment. You need to rollout
these changes by hand. Which includes restarting that particular resource.

- [kubectl rollout restart](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_restart/)

There are other options available in the documentation for the command. But, I
generally run into what we're going to see here. If I run into more. I'll
probably create an article catered to that scenario.

# Restarting Kubernetes Deployments

Restart a specified kubernetes deployment within a certain namespace. In this 
case it's the `lab` namespace.

```sh
kubectl -n lab rollout restart deployment/lab-app
```

Restart a specified kubernetest deployment within the default namespace.

```sh
kubectl rollout restart deployment/lab-app
```

To restart all deployments within a specific namespace. You can use the
following command.

```sh
kubectl rollout restart deployment -n lab
```

If this is successful. You should see the following output stating the
deployement has been restarted.

```sh
deployment.apps/lab-app restarted
```

Once this is finished. You can get your pod to make sure everything looks as
expected. Check the age of the pod and whether there are any duplicates.

```sh
NAME                                                 READY   STATUS    RESTARTS   AGE
lab-app-343432k344-flhcr                             1/1     Running   0          7s
```

I've seen with prometheus server pods keep an old exporter around for whatever
reason. Though, don't quote me on that. This could have been because I was too
impatient and didn't wait long enough for the pod to go away.

## Conclusion

Discussed how to restart a kubernetes deployment using the `rollout restart`
commands in `kubectl`. Also reviewed ways to confirm everything is good to go.
