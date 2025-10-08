---
title: "SadServers: Bilbao: Basic Kubernetes Problems"
date: 2024-10-15T00:07:47-06:00
summary: "Notes from running through the Bilbao scenario from SadServers."
draft: false
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

I attempted to check and see if it would work after first starting it up using
curl. But, it didn't show anything good. Said the ports closed.

```sh
curl 10.43.216.196
```

Checked the pods using the get pods commands.

```sh
kubectl get pods
```

It looks like the nginx-deployment-67699598cc-zrj6f pod isn't ready yet and its
been in this state for 268 days. Some significant pending time. Pending time is
the new uptime flex these days I suppose.

```sh
NAME                                READY   STATUS    RESTARTS   AGE
nginx-deployment-67699598cc-zrj6f   0/1     Pending   0          268d
```

Checked the descriptio for the pod using the following command. 

```sh
kubectl describe pods nginx-deployment-67699598cc-zrj6f
```

I'm pretty new to Kubernetes. So, not a whole lot jumped out to me. But, the
memory utilization for this pod. 2000Mi seems a little high. So, I might change
that down the road.

The failed scheduling events also jumped out. So, I decided to read up a little
on Affinity and Node Selectors and ran with something being related to that
being the issue.

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

Checked the home directory for the manifest.yml file using the following
command.

```sh
ls -lah ./manifest.yml
```

Looks like it's in there and the user I'm connected as can make edits to the
file.

```sh
total 44K
-rw-r--r-- 1 admin admin  755 Jan 17  2024 manifest.yml
```

This is the full output from reading the manifest.yml file with the cat(1)
command. Looks like all of the confiuratio applied to the pod we've deployed has
been applied to it.

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

Labeled node1 with the label ssd using the following command. The nodeSelector
section indicates that it expects a node with the label disk with a value of
ssd. This is one way to indicate which node you would like to be assigned to a
pod. I'm not sure if node1 has an SSD on it. But, if it did and the workload
required needed that. I would probably want to assign it to that. It makes sense
to degree.

```sh
kubectl label nodes node1 disk=ssd
```

The node node1 has been successfully labeled.

```sh
node/node1 labeled
```

Another thing I did was edit the manifest.yml file. Setting the memory limit to
200Mi and the requests memory to 200Mi. 

```yaml
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
            memory: 200Mi
            cpu: 100m
          requests:
            cpu: 100m
            memory: 200Mi
      nodeSelector:
        disk: ssd
```

Applied the new manifest to the deployment using the following command.

```sh
kubectl apply -f manifest.yml 
```

Looks like it updated successfully.

```sh
deployment.apps/nginx-deployment configured
service/nginx-service unchanged
```

Checked the server using the curl command and it worked as expected.

```sh
curl 10.43.216.196
```

As shown below. This is the default page for Nginx. So it looks like this server
is up and running.

```html
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
```

Checked using the agent check.sh file.

```sh
agent/check.sh
```

Looks like everything is OK and this scenario is complete.

```sh
OK
```

## Conclusion
---

This is my first real exposure to Kubernetes in any shape or form. But,
considering how long it look me to go through this challenge. I think it's time
to start setting up a cluster just to go through the process and get a grasp of
what that all entails. One of my goals is to learn a little more about container
networking. So I'll start with the basics of getting it all setup and dive a
little deeper later.
