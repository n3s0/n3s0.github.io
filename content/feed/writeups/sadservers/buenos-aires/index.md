---
title: "Buenos Aires: Kubernetes Pod Crashing"
author: "Timothy Loftus (n3s0)"
date: 2026-08-14T12:00:47-06:00
lastmod: 2026-08-14
description: "Notes from running through the Buenos Aires scenario from SadServers. Where you fix a container that is crashlooping and having permission issues."
cover: "/feed/writeups/sadservers/img/sadservers.jpg"
draft: false
tags: ["sadservers", "kubernetes"]
---

## Scenario

There are two pods: "logger" and "logshipper" living in the default namespace. 

Unfortunately, logshipper has an issue (crashlooping) and is forbidden to see 
what logger is trying to say. Could you help fix Logshipper?

Because k8s takes a minute or two to change the pod state initially, the check 
for the scenario is made to fail in the first two minutes.

For testing. I need to make sure the following command returns `true`.

```sh
kubectl get pods -l app=logshipper --no-headers -o json | jq -r '.items[] | "\(.status.containerStatuses[0].ready)"'
```

## Solution

Now it's time to get familiar with the enviornment a little bit to see what's
available. I needed to use the `sudo` command with a majority of these commands
just due to permissions.

When I think about challenges like this I like to refresh on what the
description is saying a little before I get to far into the weeds. When they
describe `crashlooping` they're talking about a `CrashLoopBackOff`. This
generally indicates the pod restarted multiple times due to an issue.

First I start by listing the pods to see what pods are available.

```sh
kubectl get pods
```

Looks like it's just the logger and logshipper pods. Both are in a running state
at the moment. But, logshipper has been restarted 5 times. 

```sh
NAME                          READY   STATUS    RESTARTS         AGE
logger-6f7fb76c9f-4jk77       1/1     Running   1 (70s ago)      2y127d
logshipper-597f84bf4f-6ssjq   1/1     Running   5 (2y127d ago)   2y127d
```

Before getting to far I decided to review the available memory on the system to
see if the memory is capped out or just enough for the pod to run. To do this I
used the `free(1)` command to look.

```sh
free --mega -h
```

After taking a look it doesn't seems like memory is the problem. So, looks like
it's time to move on.

```sh
               total        used        free      shared  buff/cache   available
Mem:            1.9G        701M        511M        1.0M        735M        1.1G
Swap:             0B          0B          0B
```

Decided to take a closer look at the logshipper pod to see if anything stands
out. This can be done using the `describe` sub-command on the pod.

```sh
kubectl describe pod logshipper-597f84bf4f-6ssjq
```

Looks like there is a service account named `logshipper-sa` that might need to
be looked into if there are any permission issues for the pod. Other then the
last state of the pod and the various Back-Off events. I don't see much more.
Might need to review the logs for the logshipper pod to see if there is more
going on.

```sh
Name:             logshipper-597f84bf4f-6ssjq
Namespace:        default
Priority:         0
Service Account:  logshipper-sa
Node:             node1/10.1.3.163
Start Time:       Mon, 08 Apr 2024 17:47:14 +0000
Labels:           app=logshipper
                  pod-template-hash=597f84bf4f
Annotations:      <none>
Status:           Running
IP:               10.42.0.21
IPs:
  IP:           10.42.0.21
Controlled By:  ReplicaSet/logshipper-597f84bf4f
Containers:
  logshipper:
    Container ID:  containerd://a98d3faaa0a6d2a348b019bd6aefc8aad1829e5d009bc71fc743bab4312a0261
    Image:         logshipper:v3
    Image ID:      sha256:34b78cd564e27b562297d66a0ed92c9224c4b32ee6c7911347f5a2e9a8e298ba
    Port:          <none>
    Host Port:     <none>
    Command:
      /usr/bin/python3
      logshipper.py
    State:          Waiting
      Reason:       CrashLoopBackOff
    Last State:     Terminated
      Reason:       Error
      Exit Code:    1
      Started:      Fri, 14 Aug 2026 16:09:51 +0000
      Finished:     Fri, 14 Aug 2026 16:09:52 +0000
    Ready:          False
    Restart Count:  7
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-slts5 (ro)
Conditions:
  Type              Status
  Initialized       True 
  Ready             False 
  ContainersReady   False 
  PodScheduled      True 
Volumes:
  kube-api-access-slts5:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason          Age                      From               Message
  ----     ------          ----                     ----               -------
  Normal   Scheduled       2y127d                   default-scheduler  Successfully assigned default/logshipper-597f84bf4f-6ssjq to node1
  Normal   Pulled          2y127d (x5 over 2y127d)  kubelet            Container image "logshipper:v3" already present on machine
  Normal   Created         2y127d (x5 over 2y127d)  kubelet            Created container logshipper
  Normal   Started         2y127d (x5 over 2y127d)  kubelet            Started container logshipper
  Warning  BackOff         2y127d (x9 over 2y127d)  kubelet            Back-off restarting failed container logshipper in pod logshipper-597f84bf4f-6ssjq_default(5256275f-86c4-4a44-bb49-0123cb010748)
  Normal   SandboxChanged  3m10s                    kubelet            Pod sandbox changed, it will be killed and re-created.
  Normal   Pulled          16s (x3 over 3m9s)       kubelet            Container image "logshipper:v3" already present on machine
  Normal   Created         16s (x3 over 3m9s)       kubelet            Created container logshipper
  Normal   Started         16s (x3 over 3m8s)       kubelet            Started container logshipper
  Warning  BackOff         1s (x5 over 55s)         kubelet            Back-off restarting failed container logshipper in pod logshipper-597f84bf4f-6ssjq_default(5256275f-86c4-4a44-bb49-0123cb010748)
```

To review the logs for the pod I used the `logs` sub-command. This will show any
output as the application when it attempted to run.

```sh
kubectl logs logshipper-597f84bf4f-6ssjq
```

There are a few things that jump out here. If you look at the `HTTP response
body` it shows the `logshipper-sa` service account is unable to access the
`pods/log`. Shows a `403` code with a reason `Forbidden`

This could mean the role associated with that service account doesn't have the 
necessary permissions to view the logs on the `logger` pod. I'll visit this
later. Need to look at the forest and not the trees so I'm not missing anything.

```sh
Exception when calling CoreV1Api->read_namespaced_pod_log: (403)
Reason: Forbidden
HTTP response headers: HTTPHeaderDict({'Audit-Id': '4d4355d0-91e9-4ea9-91ec-9fcf47da43e5', 'Cache-Control': 'no-cache, private', 'Content-Type': 'application/json', 'X-Content-Type-Options': 'nosniff', 'Date': 'Fri, 14 Aug 2026 16:14:37 GMT', 'Content-Length': '352'})
HTTP response body: {"kind":"Status","apiVersion":"v1","metadata":{},"status":"Failure","message":"pods \"logger-6f7fb76c9f-4jk77\" is forbidden: User \"system:serviceaccount:default:logshipper-sa\" cannot get resource \"pods/log\" in API group \"\" in the namespace \"default\"","reason":"Forbidden","details":{"name":"logger-6f7fb76c9f-4jk77","kind":"pods"},"code":403}
```

Needed to review the deployments to gain more familiarity with the environment.
This can be done by running the `get deployments` sub-command.

```sh
kubectl get deployments
```

Looks like there are two pods here. One named `logger` and `logshipper`. The
`logshipper` pod is the only one that isn't available or ready.

```sh
NAME         READY   UP-TO-DATE   AVAILABLE   AGE
logger       1/1     1            1           2y127d
logshipper   0/1     1            0           2y127d
```

Since the `logshipper` is the problematic pod in this instance. I decided to
describe it's deployment to see if anything stood out.

```sh
kubectl describe deployment logshipper
```

Looks like a pretty standard deployment for this.

```sh
Name:                   logshipper
Namespace:              default
CreationTimestamp:      Mon, 08 Apr 2024 17:47:14 +0000
Labels:                 <none>
Annotations:            deployment.kubernetes.io/revision: 1
Selector:               app=logshipper
Replicas:               1 desired | 1 updated | 1 total | 0 available | 1 unavailable
StrategyType:           RollingUpdate
MinReadySeconds:        0
RollingUpdateStrategy:  25% max unavailable, 25% max surge
Pod Template:
  Labels:           app=logshipper
  Service Account:  logshipper-sa
  Containers:
   logshipper:
    Image:      logshipper:v3
    Port:       <none>
    Host Port:  <none>
    Command:
      /usr/bin/python3
      logshipper.py
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Conditions:
  Type           Status  Reason
  ----           ------  ------
  Progressing    True    NewReplicaSetAvailable
  Available      False   MinimumReplicasUnavailable
OldReplicaSets:  <none>
NewReplicaSet:   logshipper-597f84bf4f (1/1 replicas created)
Events:
  Type    Reason             Age     From                   Message
  ----    ------             ----    ----                   -------
  Normal  ScalingReplicaSet  2y127d  deployment-controller  Scaled up replica set logshipper-597f84bf4f to 1
```

Decided to do a quick check to see if the `logshipper-sa` service account had
access to get `pods/log` within the default namespace.

```sh
kubectl auth can-i get pods/log --as=system:serviceaccount:default:logshipper-sa
```

Looks like that's a big no for that. So, that will need to be fixed.

```sh
no
```

Needed to review the cluster roles to see what roles are available. Just incase
I need to create one for this.

```sh
kubectl get clusterroles
```

At the bottom there is a custer role named `logshipper-cluster-role`. So I wont
need to create one. Also reviewed the cluster role bindings and it doesn't look
like I'll need to create one for that either. There is a cluster role binding
for this. I just didn't provide the output for that.

```sh
NAME                                                                   CREATED AT
cluster-admin                                                          2024-02-17T22:56:44Z
system:discovery                                                       2024-02-17T22:56:44Z
system:monitoring                                                      2024-02-17T22:56:44Z
system:basic-user                                                      2024-02-17T22:56:44Z
system:public-info-viewer                                              2024-02-17T22:56:44Z
system:aggregate-to-admin                                              2024-02-17T22:56:44Z
system:aggregate-to-edit                                               2024-02-17T22:56:44Z
system:aggregate-to-view                                               2024-02-17T22:56:44Z
system:heapster                                                        2024-02-17T22:56:44Z
system:node                                                            2024-02-17T22:56:44Z
system:node-problem-detector                                           2024-02-17T22:56:44Z
system:kubelet-api-admin                                               2024-02-17T22:56:44Z
system:node-bootstrapper                                               2024-02-17T22:56:44Z
system:auth-delegator                                                  2024-02-17T22:56:44Z
system:kube-aggregator                                                 2024-02-17T22:56:44Z
system:kube-controller-manager                                         2024-02-17T22:56:44Z
system:kube-dns                                                        2024-02-17T22:56:44Z
system:persistent-volume-provisioner                                   2024-02-17T22:56:44Z
system:certificates.k8s.io:certificatesigningrequests:nodeclient       2024-02-17T22:56:44Z
system:certificates.k8s.io:certificatesigningrequests:selfnodeclient   2024-02-17T22:56:44Z
system:volume-scheduler                                                2024-02-17T22:56:44Z
system:certificates.k8s.io:legacy-unknown-approver                     2024-02-17T22:56:44Z
system:certificates.k8s.io:kubelet-serving-approver                    2024-02-17T22:56:44Z
system:certificates.k8s.io:kube-apiserver-client-approver              2024-02-17T22:56:44Z
system:certificates.k8s.io:kube-apiserver-client-kubelet-approver      2024-02-17T22:56:44Z
system:service-account-issuer-discovery                                2024-02-17T22:56:44Z
system:node-proxier                                                    2024-02-17T22:56:44Z
system:kube-scheduler                                                  2024-02-17T22:56:44Z
system:controller:attachdetach-controller                              2024-02-17T22:56:44Z
system:controller:clusterrole-aggregation-controller                   2024-02-17T22:56:44Z
system:controller:cronjob-controller                                   2024-02-17T22:56:44Z
system:controller:daemon-set-controller                                2024-02-17T22:56:44Z
system:controller:deployment-controller                                2024-02-17T22:56:44Z
system:controller:disruption-controller                                2024-02-17T22:56:44Z
system:controller:endpoint-controller                                  2024-02-17T22:56:44Z
system:controller:endpointslice-controller                             2024-02-17T22:56:44Z
system:controller:endpointslicemirroring-controller                    2024-02-17T22:56:44Z
system:controller:expand-controller                                    2024-02-17T22:56:44Z
system:controller:ephemeral-volume-controller                          2024-02-17T22:56:44Z
system:controller:generic-garbage-collector                            2024-02-17T22:56:44Z
system:controller:horizontal-pod-autoscaler                            2024-02-17T22:56:44Z
system:controller:job-controller                                       2024-02-17T22:56:44Z
system:controller:namespace-controller                                 2024-02-17T22:56:44Z
system:controller:node-controller                                      2024-02-17T22:56:44Z
system:controller:persistent-volume-binder                             2024-02-17T22:56:45Z
system:controller:pod-garbage-collector                                2024-02-17T22:56:45Z
system:controller:replicaset-controller                                2024-02-17T22:56:45Z
system:controller:replication-controller                               2024-02-17T22:56:45Z
system:controller:resourcequota-controller                             2024-02-17T22:56:45Z
system:controller:route-controller                                     2024-02-17T22:56:45Z
system:controller:service-account-controller                           2024-02-17T22:56:45Z
system:controller:service-controller                                   2024-02-17T22:56:45Z
system:controller:statefulset-controller                               2024-02-17T22:56:45Z
system:controller:ttl-controller                                       2024-02-17T22:56:45Z
system:controller:certificate-controller                               2024-02-17T22:56:45Z
system:controller:pvc-protection-controller                            2024-02-17T22:56:45Z
system:controller:pv-protection-controller                             2024-02-17T22:56:45Z
system:controller:ttl-after-finished-controller                        2024-02-17T22:56:45Z
system:controller:root-ca-cert-publisher                               2024-02-17T22:56:45Z
k3s-cloud-controller-manager                                           2024-02-17T23:00:09Z
system:coredns                                                         2024-02-17T23:00:10Z
local-path-provisioner-role                                            2024-02-17T23:00:10Z
system:aggregated-metrics-reader                                       2024-02-17T23:00:10Z
system:metrics-server                                                  2024-02-17T23:00:11Z
clustercidrs-node                                                      2024-02-17T23:00:12Z
system:k3s-controller                                                  2024-02-17T23:00:12Z
view                                                                   2024-02-17T22:56:44Z
edit                                                                   2024-02-17T22:56:44Z
admin                                                                  2024-02-17T22:56:44Z
traefik-kube-system                                                    2024-02-17T23:00:48Z
logshipper-cluster-role                                                2024-04-08T17:47:13Z
```

Took a look at the configuration for the cluster role by outputing the
`logshipper-cluster-role` to YAML format so it's easy to read and it shows the
full configuration.

```sh
kubectl get clusterroles logshipper-cluster-role -o yaml
```

Found the problem. All of the resources I need are in the permissions. But, not
all of the verbs that will need to be used. That will need to be updated before
this will work.

This doesn't work because the logshipper is using the `get` verb to pull all of
the logs and that isn't listed in the rules of the `logshipper-cluster-role`.

```sh
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  annotations:
    descripton: Think about what verbs you need to add.
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"rbac.authorization.k8s.io/v1","kind":"ClusterRole","metadata":{"annotations":{"descripton":"Think about what verbs you need to add."},"name":"logshipper-cluster-role"},"rules":[{"apiGroups":[""],"resources":["namespaces","pods","pods/log"],"verbs":["list"]}]}
  creationTimestamp: "2024-04-08T17:47:13Z"
  name: logshipper-cluster-role
  resourceVersion: "1274"
  uid: 6ef0ef3c-ad24-4469-a7b0-541a010b0d93
rules:
- apiGroups:
  - ""
  resources:
  - namespaces
  - pods
  - pods/log
  verbs:
  - list
```

To fix this I decided to edit the cluster role instead of pushing a patch to the
configuration. I did this using the `edit` sub-command.

```sh
sudo kubectl edit clusterrole logshipper-cluster-role
```

I moved some stuff around and added a few more verbs and it should now be good
to save. This will apply right away so in a few minutes I'll know everything is
good to go.

I added two verbs; `get` and `watch`, to the cluster role configuration so the
`logshipper` app could have that functionality available to it.

```yaml
# Please edit the object below. Lines beginning with a '#' will be ignored,
# and an empty file will abort the edit. If an error occurs while saving this file will be
# reopened with the relevant failures.
#
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  annotations:
    descripton: Think about what verbs you need to add.
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"rbac.authorization.k8s.io/v1","kind":"ClusterRole","metadata":{"annotations":{"descripton":"Think about what verbs you nee
  creationTimestamp: "2024-04-08T17:47:13Z"
  name: logshipper-cluster-role
  resourceVersion: "1274"
  uid: 6ef0ef3c-ad24-4469-a7b0-541a010b0d93
rules:
- apiGroups: [""]
  resources: ["namespaces", "pods", "pods/logs"]
  verbs: ["list", "get", "watch"]
```

After waiting a few minutes I ran the command SadServers provides as the test
for this.

```sh
kubectl get pods -l app=logshipper --no-headers -o json | jq -r '.items[] | "\(.status.containerStatuses[0].ready)"'
```

Looks like we're good now. The output shows `true` for the ready status. In
another world I would probably look at the logs and confirm everything is
working as expected. But, this will have to do for a good win.

```sh
true
```

## Conclusion

This was a fun one. In this SadServers challenge there is a pod stuck in a
crashloop because it didn't have access to the get verb for pod logs. To fix
this I updated the `logshipper-cluster-role` so it had access to the `get` verb.
Once that was done. Everything was peachy.
