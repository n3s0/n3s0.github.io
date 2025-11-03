---
title: "List Kubernetes Resources Using Get Commands"
author: "Timothy Loftus (n3s0)"
date: 2025-11-03T11:25:27-06:00
lastmod: 2025-11-03
description: "Some notes on listing kubernetes resources using get commands."
cover: '/img/kubernetes-concept.png'
draft: false
tags: ["kubernetes"]
---

## Overview

One thing to note is if you manage multiple name spaces. You'll want to use the
`-n` or `--namespace` with the namespace name to see those resources. Otherwise
you will look in the default namespace for these resources. Which understanding
what's in your default namespace is important.

## Get Pods

```sh
kubectl -n lab get pods
```

```sh
kubectl get pods
```

## Get Deployments

```sh
kubectl -n lab get configmaps
```

```sh
kubectl get configmaps
```

## Get ConfigMaps

```sh
kubectl -n lab get configmaps
```

```sh
kubectl get configmaps
```

