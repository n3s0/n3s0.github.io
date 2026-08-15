---
title: "Kilifi: Speculative Misallocation!"
author: "Timothy Loftus (n3s0)"
date: 2026-08-14T12:00:47-06:00
lastmod: 2026-08-14
description: "Notes from running through the Kilifi scenario from SadServers."
cover: "/feed/writeups/sadservers/img/sadservers.jpg"
draft: true
tags: ["sadservers", "kubernetes"]
---

## Scenario

A developer is having trouble deploying an application on a preconfigured 
cluster.

The application kilifi is to be deployed on kubernetes in the default namespace.
The application server is deployed by helm. The command they used is helm install 
`kilifi charts/kilifi`.

The application operates correctly with ~210 MB of memory, but 256 MB is 
recommended.

Swap should remain disabled in the cluster.

Debug and help the developer fix any issue with deployment.

## Test

The kilifi application runs properly; it's Service on :3333/healthz returns 
"kilifi ready to serve".


## Solution


