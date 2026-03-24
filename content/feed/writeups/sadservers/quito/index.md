---
title: "Quito: Control One Container from Another"
date: 2026-03-24T09:40:47-06:00
lastmod: 2025-03-24
description: "Write-up for the Quito challenge from SadServers. Where one learn how to use a container to boss another around."
author: "Timothy Loftus (n3s0)"
cover: "/feed/writeups/sadservers/img/sadservers.jpg"
draft: false
tags: ["SadServers", "Linux", "Containers"]
---

## Summary
---

This is my write-up for the Quito: Control One Container from Another challenge
provided by SadServers. Where those up to the challenge work though
troubleshooting why a container cannot start an Nginx container. I enjoyed this
challenge because it reinforced some of the nuances related to container
daemons.

## Scenario
---

**Scenario:** "Quito": Control One Container from Another

**Level:** Medium

**Type:** Do

**Access:** Email

**Description:** 

You have a running container named docker-access. Another container nginx is 
present but in a stopped state. Your goal is to start the nginx container from 
inside the docker-access container.

You must not start the nginx container from the host system or any other 
container that is not docker-access. You can restart this docker-access 
container.

**Root (sudo) Access:** True

**Test:** Executing docker ps inside the docker-access container: 
`docker exec docker-access docker ps` succeeds.

## Solution
---

So the objective is to start the `nginx` container using the `docker-access`
container. I cannot start the `nginx` container without using `docker-access`. 
But, I can do what I want to the `docker-access` container on the host. Guess
it's time to start troubleshooting then.

I reviewed the available containers using the `ps` command with the `-a` flag so
I could see both running and exited containers. Just to see what is currently
available to me.

```sh
docker ps -a
```

There are two containers available on this system in an exited state. There
names are both `nginx` and `docker-access`. It doesn't look like there are any
other containers on the system.

```sh
CONTAINER ID   IMAGE           COMMAND                  CREATED         STATUS                       PORTS     NAMES
6d07db770d87   nginx           "/docker-entrypoint.…"   11 months ago   Exited (137) 11 months ago             nginx
1566600ac41c   docker-access   "sh"                     11 months ago   Exited (137) 11 months ago             docker-access
```

To see what I'm working with. I also reviewed the available container images on
the system as well. This can be done with the `image` subcommand. This is
intended to manage images. Coupled with `ls -a` I can list all images that may
be "dangling" on the local image repository.

```sh
docker image ls -a
```

Based on the output. There are two available images created roughly a year ago.
These are named `nginx` and `docker-access`. This tells me I won't need to pull
any images from the Internet and I will need to use the `--name` flag if I need
to rebuild any containers.

```sh
REPOSITORY      TAG       IMAGE ID       CREATED         SIZE
nginx           latest    4e1b6bae1e48   11 months ago   192MB
docker-access   latest    2e2a2271540d   12 months ago   38.2MB
```

To begin my poking and proding. I decided to start the `docker-access` container
using the `start` command to see what I get.

```sh
docker start docker-access 
```

The following output indicates that there were no errors starting the
`docker-access` container.

```sh
docker-access
```

To confirm the `docker-access` container is up. I checked it with the `ps`
command to see if it's up and running.

```sh
docker ps
```

Based on the output provided below. It is up. Next steps are to start a shell to
see if I can start the `nginx` container.

```sh
CONTAINER ID   IMAGE           COMMAND   CREATED         STATUS         PORTS     NAMES
1566600ac41c   docker-access   "sh"      11 months ago   Up 4 seconds             docker-access
```

To do this. I connected to a shell using the interactive `-i` flag and the tty
`-t` flags in the `exec` subcommand on the `docker-access` container.

```sh
docker exec -it docker-access /bin/sh
```

When this is done. It should drop into the "shell" or "prompt" for the `sh`
shell in the containers `WorkingDir`. From here I can attempt to run the `docker
ps` command or any docker command to see if it will work.

```sh
/usr/src/app # 
```

> I will say also that I can also do this using the command from the test. Which
> in this case it will provide the same output. But, enought of that until later.
> 
> ```sh
> docker exec docker-access docker ps
> ```

I run the `docker ps` command to see if I'm able to see any available containers
on the system.

> One thing I would like to note is this will be interfacing with containers on
> the host. It will not be creating any containers from within the container.
> Considering that the docker daemon needs access to a unix socket on the
> system.

```sh
docker ps
```

Based on the output below. It looks like docker doesn't have access to the
`docker.sock` Unix socket for the docker daemon. This could mean a volume was
never mounted for the container to use.

```sh
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

Thought I would review or `inspect` the configuration for the current
`docker-access` container to see if the `docker.sock` Unix socket was mounted.

```sh
docker container inspect docker-access
```

Based on the output below. The socket isn't listed anywhere in the configuration
listed. Without the `docker.socket` docker cannot run within the container. So,
this will need to be fixed.

```json
[
    {
        "Id": "1566600ac41cbb7702e6c031a103fc981598b75e9ab34a252797c11ce1635c91",
        "Created": "2025-04-27T04:59:03.37304893Z",
        "Path": "sh",
        "Args": [],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 1031,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2026-03-23T21:24:39.637248561Z",
            "FinishedAt": "2025-04-27T04:59:41.988588876Z"
        },
        "Image": "sha256:2e2a2271540d39403799a191d2060e09c21384e3538ab29b3afb30957fed04a5",
        "ResolvConfPath": "/var/lib/docker/containers/1566600ac41cbb7702e6c031a103fc981598b75e9ab34a252797c11ce1635c91/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/1566600ac41cbb7702e6c031a103fc981598b75e9ab34a252797c11ce1635c91/hostname",
        "HostsPath": "/var/lib/docker/containers/1566600ac41cbb7702e6c031a103fc981598b75e9ab34a252797c11ce1635c91/hosts",
        "LogPath": "/var/lib/docker/containers/1566600ac41cbb7702e6c031a103fc981598b75e9ab34a252797c11ce1635c91/1566600ac41cbb7702e6c031a103fc981598b75e9ab34a252797c11ce1635c91-json.log",
        "Name": "/docker-access",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "docker-default",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "bridge",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "ConsoleSize": [
                0,
                0
            ],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "private",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": [],
            "BlkioDeviceWriteBps": [],
            "BlkioDeviceReadIOps": [],
            "BlkioDeviceWriteIOps": [],
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": null,
            "PidsLimit": null,
            "Ulimits": [],
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/interrupts",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware",
                "/sys/devices/virtual/powercap"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "ID": "1566600ac41cbb7702e6c031a103fc981598b75e9ab34a252797c11ce1635c91",
                "LowerDir": "/var/lib/docker/overlay2/8b3456a472aa1bc0bb449e739fb8da241d0130516e844e25149075e0e7d4120a-init/diff:/var/lib/docker/overlay2/a39a1fee4480ee0496047f59102ad865b1f62db08ba6992c46ad7859ef04baab/diff:/var/lib/docker/overlay2/2340ea53446503a8ba0e7f8e1e4c6f8c6c988c11a6e7b866b3918e0c31ab3864/diff:/var/lib/docker/overlay2/ba14e2a0a01aeefc8c3a8ec6886130a262fd9dceaab9010a387cfd08495c2923/diff",
                "MergedDir": "/var/lib/docker/overlay2/8b3456a472aa1bc0bb449e739fb8da241d0130516e844e25149075e0e7d4120a/merged",
                "UpperDir": "/var/lib/docker/overlay2/8b3456a472aa1bc0bb449e739fb8da241d0130516e844e25149075e0e7d4120a/diff",
                "WorkDir": "/var/lib/docker/overlay2/8b3456a472aa1bc0bb449e739fb8da241d0130516e844e25149075e0e7d4120a/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "1566600ac41c",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "Tty": true,
            "OpenStdin": true,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Cmd": [
                "sh"
            ],
            "Image": "docker-access",
            "Volumes": null,
            "WorkingDir": "/usr/src/app",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": {}
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "cea10ab3b4e64a100ed6e460ea77f7fac95a0b3cfadc1948d870d003f55e9a71",
            "SandboxKey": "/var/run/docker/netns/cea10ab3b4e6",
            "Ports": {},
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "04d0f0cc7fcaed2ee0a643d625bd6eadb9619a212dc28fa0f5af3c8ac4ee2a52",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.2",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "56:db:ad:a8:2e:a7",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "MacAddress": "56:db:ad:a8:2e:a7",
                    "DriverOpts": null,
                    "GwPriority": 0,
                    "NetworkID": "c8d2a312c2ae0fa883e32515d8bcd00b8b89fa0f18828fdf2e0010f3ef084e17",
                    "EndpointID": "04d0f0cc7fcaed2ee0a643d625bd6eadb9619a212dc28fa0f5af3c8ac4ee2a52",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "DNSNames": null
                }
            }
        }
    }
]
```

To start this part of the process. I need to delete the current `docker-access`
container. To do this I use the `rm` sub-command to remove the `docker-access`
container.

```sh
docker rm docker-access
```

Below is the output that confirms the container was deleted successfully. There
were no errors outputted to the console. So I think I'm good on that.

```sh
docker-access
```

To create the new `docker-access` container. I add the `docker.sock` socket as a
binding. Using the `docker-access` image I set the command as `sleep infinity`
so the container would stay up.

```sh
docker run -d --name docker-access -v /var/run/docker.sock:/var/run/docker.sock docker-access sleep infinity
```

The container ID is outputing to the console with no errors. So the container
`docker-access` was created. Now to check if it is indeed up.

```sh
5900ee9a6d0d979ee552ac0ae6e292eb968da21787675da0dda8db2fb5b0dcb0
```

To check if the `docker-access` container is up I used the `ps -a` subcommand to
see if it's available.

```sh
docker ps -a
```

Reviewing the output and it looks like it's available for use.

```sh
CONTAINER ID   IMAGE           COMMAND                  CREATED         STATUS                       PORTS     NAMES
dfcf4b429c48   docker-access   "sleep infinity"         3 seconds ago   Up 3 seconds                           docker-access
6d07db770d87   nginx           "/docker-entrypoint.…"   11 months ago   Exited (137) 11 months ago             nginx
```

As a baseline for the correct configuration. I decided to check the `cotnainer
inspect` output provided within the last couple of steps. Just so I had
something to compare it to in the future.

```sh
docker container inspect docker-access
```

Two of the main differences with this containers output is the command and the
`HostConfig`. The `Binds` configuration shows that the `docker.sock` Unix socket
should be available to the container.

```json
[
    {
        "Id": "dfcf4b429c48d6be25dd2fc0c89fe3cabe7112451301ccf7e8a733ac3fb698fa",
        "Created": "2026-03-24T15:41:07.396298579Z",
        "Path": "sleep",
        "Args": [
            "infinity"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 1320,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2026-03-24T15:41:07.475121954Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:2e2a2271540d39403799a191d2060e09c21384e3538ab29b3afb30957fed04a5",
        "ResolvConfPath": "/var/lib/docker/containers/dfcf4b429c48d6be25dd2fc0c89fe3cabe7112451301ccf7e8a733ac3fb698fa/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/dfcf4b429c48d6be25dd2fc0c89fe3cabe7112451301ccf7e8a733ac3fb698fa/hostname",
        "HostsPath": "/var/lib/docker/containers/dfcf4b429c48d6be25dd2fc0c89fe3cabe7112451301ccf7e8a733ac3fb698fa/hosts",
        "LogPath": "/var/lib/docker/containers/dfcf4b429c48d6be25dd2fc0c89fe3cabe7112451301ccf7e8a733ac3fb698fa/dfcf4b429c48d6be25dd2fc0c89fe3cabe7112451301ccf7e8a733ac3fb698fa-json.log",
        "Name": "/docker-access",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "docker-default",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": [
                "/var/run/docker.sock:/var/run/docker.sock"
            ],
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "bridge",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "ConsoleSize": [
                43,
                158
            ],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "private",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": [],
            "BlkioDeviceWriteBps": [],
            "BlkioDeviceReadIOps": [],
            "BlkioDeviceWriteIOps": [],
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": null,
            "PidsLimit": null,
            "Ulimits": [],
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/interrupts",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware",
                "/sys/devices/virtual/powercap"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "ID": "dfcf4b429c48d6be25dd2fc0c89fe3cabe7112451301ccf7e8a733ac3fb698fa",
                "LowerDir": "/var/lib/docker/overlay2/717912fabf578a97428e15b1d034b583a736b93ce08dd879ba12738bc010a5c3-init/diff:/var/lib/docker/overlay2/a39a1fee4480ee0496047f59102ad865b1f62db08ba6992c46ad7859ef04baab/diff:/var/lib/docker/overlay2/2340ea53446503a8ba0e7f8e1e4c6f8c6c988c11a6e7b866b3918e0c31ab3864/diff:/var/lib/docker/overlay2/ba14e2a0a01aeefc8c3a8ec6886130a262fd9dceaab9010a387cfd08495c2923/diff",
                "MergedDir": "/var/lib/docker/overlay2/717912fabf578a97428e15b1d034b583a736b93ce08dd879ba12738bc010a5c3/merged",
                "UpperDir": "/var/lib/docker/overlay2/717912fabf578a97428e15b1d034b583a736b93ce08dd879ba12738bc010a5c3/diff",
                "WorkDir": "/var/lib/docker/overlay2/717912fabf578a97428e15b1d034b583a736b93ce08dd879ba12738bc010a5c3/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [
            {
                "Type": "bind",
                "Source": "/var/run/docker.sock",
                "Destination": "/var/run/docker.sock",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
        "Config": {
            "Hostname": "dfcf4b429c48",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Cmd": [
                "sleep",
                "infinity"
            ],
            "Image": "docker-access",
            "Volumes": null,
            "WorkingDir": "/usr/src/app",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": {}
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "3fd584891ac0fe6ccfa481fe0e96aa091d52bb0bbcf9043c9aebadb86be0d7d6",
            "SandboxKey": "/var/run/docker/netns/3fd584891ac0",
            "Ports": {},
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "493934d1f6378079a5f75365dd7d19ffe0b814971161c4e7c29a4890835ca06d",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.2",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "42:ea:16:10:ea:84",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "MacAddress": "42:ea:16:10:ea:84",
                    "DriverOpts": null,
                    "GwPriority": 0,
                    "NetworkID": "b209cbd783347634b31e1b379f51fd086bb0f0749ca91686ae366bbbfe35757f",
                    "EndpointID": "493934d1f6378079a5f75365dd7d19ffe0b814971161c4e7c29a4890835ca06d",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "DNSNames": null
                }
            }
        }
    }
]
```

Now it's time to see if running the `docker` command in the `docker-access`
container will work. I do this using the following command.

```sh
docker exec docker-access docker ps
```

I didn't get the error I got previously. So, that's good. Looks like the only
container that's running right now is the `docker-access` container. The `nginx`
container however is not. So I'll need to get that started.

```sh
CONTAINER ID   IMAGE           COMMAND            CREATED          STATUS          PORTS     NAMES
d581563d44f8   docker-access   "sleep infinity"   33 seconds ago   Up 33 seconds             docker-access
```

To start the container I run the `docker start` command on the `nginx` container
from the `docker-access` container by having the container `exec` the command.

```sh
docker exec docker-access docker start nginx
```

Looks like all of the work has paid off! There were no errors starting the
`nginx` container based on the following output.

```sh
nginx
```

To review what docker containers are up. I run the same command I ran to review
the running containers when I was checking to see if `docker-access` was up.

```sh
docker exec docker-access docker ps
```

Looks like it is! The `nginx` container is up and it's been up for 9 seconds. I
should be able to to click the `Check Solution` button and see if it deems this
work worthy of completing this challenge.

```sh
CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS          PORTS     NAMES
d581563d44f8   docker-access   "sleep infinity"         56 seconds ago   Up 56 seconds             docker-access
6d07db770d87   nginx           "/docker-entrypoint.…"   11 months ago    Up 9 seconds    80/tcp    nginx
```

To do this I rand the `check.sh` script and it came back `OK`. I also clicked
the `Check Solution` button and it confirmed this and provided my points.

## Conclusion
---

Although this is is a slightly longer read I appreciate those that stuck around
until the end of it. In this challenge I learned that containers utilizing the
Docker daemon to manage other containers require access to the `docker.sock`
Unix socket path in order to start and utilize the docker command within a
container utilizing docker to manage other containers. Once that was all fixed.
I was able to start the `nginx` container and recieve the points for this
challenge. If there is anyone still struggling with this. Please review the
hints provided by SadServers or send me an email using the [Contect](/contact) 
page.
