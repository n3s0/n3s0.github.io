---
title: "Apply New Kubernetes Pod/Deployment Configuration"
author: "timothy loftus (n3s0)"
date: 2025-11-03t11:25:27-06:00
lastmod: 2025-11-03
description: "Notes for applying new kubernetes pod/deployment configuration in the default or named namespaces."
draft: false
tags: ["kubernetes"]
---

## Overview

Applying configuration to kubernetes pods/deployments is a pretty big part of
administering these environments. Whether you are making minor/major changes to
the configuration of your deployments. It's usually good to know how to update
the configuration and rollout those changes.

In some cases. A Helm chart fixes this by rolling all of the necessary changes
out for you. But, if you're not using helm charts. This is the page for you.

## Kubernetes Pod Config Update

The following commands will configure a config map. But, this command can be
used to update configuration for pods, deployments, etc. In this case I'm just
updating the configmap for an application hosted in a lab.

Apply the updated configmap for the pod hosted in the lab namespace.

```sh
kubectl -n lab apply -f lab-app-configmap.yaml
```

Apply configmap for the pod hosted in the default namespace.

```sh
kubectl apply -f lab-app-configmap.yaml
```

This is the output that should be shown if the new configuration is updated.

```sh
configmap/lab-app-config configured
```

When applying configuration you may run into the following output too. This just
means there was no change in the applied changes. So, it tells you what you were
configuring was unchanged because it didn't see changes to apply.

```sh
configmap/lab-app-config unchanged
```

## Apply Update

After applying configuration to a pod. You need to perfrom a `rollout restart`
to the deployment. I'll provide the command below. But, also check out the link
to the article I've cooked up for this topic.

- [Restarting Kubernetes Deployments To Apply Config](/feed/notes/kubernetes/restarting-kubernetes-deployments-to-apply-config)

Here is the command that would work for this scenario.

```sh
kubectl -n lab rollout restart deployment/lab-app
```

## Conclusion
