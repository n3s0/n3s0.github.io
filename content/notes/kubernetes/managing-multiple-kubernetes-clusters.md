---
title: "Managing Multiple Kubernetes Clusters"
date: 2025-07-16T11:25:27-06:00
summary: "Some notes on managing multiple Kubernetes clusters."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["kubernetes", "devops"]
---

## Summary
---

Wanted to notate some things I learned about Kubernetes clusters and how to
switch between multiple. I manage a few either in "production" or within a lab
environment. So I needed to confirm that I'm not setting things up on the wrong
cluster.

## Contexts
---

Contexts are mentioned regarding the connection to different clusters. Kind of
like a connection string in MySQL or Postgres. Like the connection strings for
MySQL and Postgres these would contain all of the necessary information to
connect to a Kubernetes cluster. Stored in YAML format.

Contexts can be listed either by running a command or checking the
```~/.kube/config``` to show what's listed and I believe these contexts are
appended to this file when you setup the configuration to administer another
cluster.

You can read your current configuration by issuing the following command. Which
will provide every cluster you connect to.

```sh
cat ~/.kube/config
```

## Get Current Context
---

Can be useful to know which context you're in currently. This can be done by
using the ```current-context``` subcommand.

```sh
kubectl config current-context
```

This will output the current context; or current connected cluster. In this case
we are in the ```minikube``` context.

```sh
minikube
```

## Listing Contexts
---

To know what contexts are avaialable. It would probably be a good idea to list
them. This can be done by issuing the following command.

```sh
kubectl config get-contexts
```

Below is a simplified version of the table this provides. This table will give
us which context we're currently in, the cluster name, the context name, cluster
name, authorization info for the cluster, the namespace we're working in for
that cluster.

```sh
CURRENT   NAME            CLUSTER         AUTHINFO          NAMESPACE
          kuberneteslab   kuberneteslab   kuberneteslab
*         minikube        minikube        minikube          default
```

## Changing Contexts
---

The next thing I would like to note is changing contexts.

```sh
kubectl config use-context kuberneteslab
```

This will output the following indicating that context was switched.

```sh
Switched to context "kuberneteslab".
```

In the event that you don't trust the output; for whatever reason, you can check
for it using the ```config current-context``` command.
