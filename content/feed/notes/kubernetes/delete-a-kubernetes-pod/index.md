---
title: "Delete A Kubernetes Pod"
author: "Timothy Loftus (n3s0)"
date: 2025-11-03T11:25:27-06:00
lastmod: 2025-11-03
cover: '/img/kubernetes-concept.png'
description: "Some notes on deleting a kubernetes pod."
draft: true
tags: ["kubernetes"]
---

# Delete A Kubernetes Pod

To delete a pod that's housed in a particular name space. Like in this case the
`lab` namespace. You can use the `-n` or `--namespace` flags.

```sh
kubectl -n lab delete pod super-secret-pod
```

If you use the `default` namespace or need to delete a pod in the `default`
namespace. The following command can be used. I stray away from this. But, in
the event that one was created by accident. The following command should work.

```sh
kubectl delete pod super-secret-pod
```
