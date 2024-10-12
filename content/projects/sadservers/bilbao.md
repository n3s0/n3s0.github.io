---
title: "SadServers: Bilbao: Basic Kubernetes Problems"
date: 2024-20-03T17:56:47-06:00
summary: "Notes from running through the Bilbao scenario from SadServers."
draft: true
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
invertPagination: true
showToC: true
openToC: false
showComments: false
showHeadingAnchors: true
---

## Summary
---

This is my writeup for the Bilbao scenario for Sad Servers.

## Scenario
---

- Level: Easy
- Type: Fix
- Tags: 
    - kubernetes
    - realistic-interviews  

Description

There's a Kubernetes Deployment with an Nginx pod and a Load Balancer declared 
in the manifest.yml file. The pod is not coming up. Fix it so that you can 
access the Nginx container through the Load Balancer.

There's no "sudo" (root) access.

Test: Running curl 10.43.216.196 returns the default Nginx Welcome page.

See /home/admin/agent/check.sh for the test that "Check My Solution" runs.

Time to Solve: 10 minutes.

## Solution
---

```sh
curl 10.43.216.296
```

```sh
curl: (6) Could not resolve host: 10.43.216.296
```

```sh
kubectl get pods
```
```sh
NAME                                READY   STATUS    RESTARTS   AGE
nginx-deployment-67699598cc-zrj6f   0/1     Pending   0          268d
```

```sh
Name:             nginx-deployment-67699598cc-zrj6f
Namespace:        default
Priority:         0
Service Account:  default
Node:             <none>
Labels:           app=nginx
                  pod-template-hash=67699598cc
Annotations:      <none>
Status:           Pending
IP:               
IPs:              <none>
Controlled By:    ReplicaSet/nginx-deployment-67699598cc
Containers:
  nginx:
    Image:      localhost:5000/nginx
    Port:       80/TCP
    Host Port:  0/TCP
    Limits:
      cpu:     100m
      memory:  2000Mi
    Requests:
      cpu:        100m
      memory:     2000Mi
    Environment:  <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-mslhc (ro)
Conditions:
  Type           Status
  PodScheduled   False 
Volumes:
  kube-api-access-mslhc:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   Guaranteed
Node-Selectors:              disk=ssd
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type     Reason            Age                    From               Message
  ----     ------            ----                   ----               -------
  Warning  FailedScheduling  268d                   default-scheduler  0/2 nodes are available: 1 node(s) didn't match Pod's node affinity/selector, 1 node(s) had untolerated taint {node.kubernetes.io/unreachable: }. preemption: 0/2 nodes are available: 2 Preemption is not helpful for scheduling..
  Warning  FailedScheduling  2m41s (x2 over 7m41s)  default-scheduler  0/2 nodes are available: 1 node(s) didn't match Pod's node affinity/selector, 1 node(s) had untolerated taint {node.kubernetes.io/unreachable: }. preemption: 0/2 nodes are available: 2 Preemption is not helpful for scheduling..
```

```sh
ls -lah ./manifest.yml
```
```sh
total 44K
-rw-r--r-- 1 admin admin  755 Jan 17  2024 manifest.yml
```


```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: localhost:5000/nginx
        ports:
        - containerPort: 80
        resources:
          limits:
            memory: 2000Mi
            cpu: 100m
          requests:
            cpu: 100m
            memory: 2000Mi
      nodeSelector:
        disk: ssd

---
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  clusterIP: 10.43.216.196
  type: LoadBalancer
```




