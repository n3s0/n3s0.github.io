---
title: "Installing Graylog 2 On Ubuntu Server 22.04"
date: 2022-11-21T00:27:25-06:00
lastmod: 2025-10-10
author: "Timtohy Loftus (n3s0)"
description: "Notes for installing Graylog 2 on Ubuntu Server 22.04."
draft: true
tags: ["linux"]
---

```sh
sudo apt-add-repository universe
```

```sh
sudo apt-get update && sudo apt-get upgrade
```

```sh
sudo apt-get install apt-transport-https openjdk-8-jre-headless uuid-runtime pwgen
```

```sh
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo tee /etc/apt/trusted.gpg.d/mongodb-org-6.0.asc
```

```sh
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Installed the mongodb-org package.

```sh
sudo apt install mongodb-org
```

```sh
sudo systemctl enable mongod.service
```

Little note for Proxmox users. If your VM isn't set to 

Made sure the Proxmox service was started. By typing in the following 
command.

```sh
sudo systemctl start mongod.service
```

```sh
sudo systemctl status mongod.service
```

```sh
 mongod.service - MongoDB Database Server
     Loaded: loaded (/lib/systemd/system/mongod.service; enabled; vendor preset: enabled)
     Active: active (running) since Wed 2022-11-23 02:46:37 UTC; 1min 14s ago
       Docs: https://docs.mongodb.org/manual
   Main PID: 641 (mongod)
     Memory: 233.0M
        CPU: 976ms
     CGroup: /system.slice/mongod.service
             └─641 /usr/bin/mongod --config /etc/mongod.conf

Nov 23 02:46:37 sux1-log-01 systemd[1]: Started MongoDB Database Server.
```

```sh
wget -q https://artifacts.elastic.co/GPG-KEY-elasticsearch -O myKey
sudo apt-key add myKey
echo "deb https://artifacts.elastic.co/packages/oss-7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
sudo apt-get update && sudo apt-get install elasticsearch-oss
```

```
wget https://packages.graylog2.org/repo/packages/graylog-4.3-repository_latest.deb
--2022-11-23 04:00:51--  https://packages.graylog2.org/repo/packages/graylog-4.3-repository_latest.deb
Resolving packages.graylog2.org (packages.graylog2.org)... 34.201.80.84, 54.91.6.89, 54.196.16.164, ...
Connecting to packages.graylog2.org (packages.graylog2.org)|34.201.80.84|:443... connected.
HTTP request sent, awaiting response... 302 Found
Location: https://graylog-package-repository.s3.eu-west-1.amazonaws.com/packages/graylog-4.3-repository_latest.deb?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221123T040051Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Credential=AKIAIJSI6MCSPXFVDPIA%2F20221123%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=2aa787684d8b845318d02d20d0b547a039aeaf39ed3d2babb006d51115e4db91 [following]
--2022-11-23 04:00:51--  https://graylog-package-repository.s3.eu-west-1.amazonaws.com/packages/graylog-4.3-repository_latest.deb?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221123T040051Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Credential=AKIAIJSI6MCSPXFVDPIA%2F20221123%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=2aa787684d8b845318d02d20d0b547a039aeaf39ed3d2babb006d51115e4db91
Resolving graylog-package-repository.s3.eu-west-1.amazonaws.com (graylog-package-repository.s3.eu-west-1.amazonaws.com)... 52.218.65.99, 52.218.62.24, 52.92.32.26, ...
Connecting to graylog-package-repository.s3.eu-west-1.amazonaws.com (graylog-package-repository.s3.eu-west-1.amazonaws.com)|52.218.65.99|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 2092 (2.0K) [application/x-debian-package]
Saving to: ‘graylog-4.3-repository_latest.deb’

graylog-4.3-repository_lat 100%[=====================================>]   2.04K  --.-KB/s    in 0s      

2022-11-23 04:00:52 (48.9 MB/s) - ‘graylog-4.3-repository_latest.deb’ saved [2092/2092]

```

```
sudo dpkg -i graylog-4.3-repository_latest.deb
sudo apt-get update && sudo apt-get install graylog-server graylog-enterprise-plugins graylog-integrations-plugins graylog-enterprise-integrations-plugins
```

```
echo -n "Enter Password: " && head -1 </dev/stdin | tr -d '\n' | sha256sum | cut -d" " -f1
```



