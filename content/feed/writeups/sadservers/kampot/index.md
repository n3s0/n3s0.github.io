---
title: "Kampot: A New Port"
date: 2026-03-19T18:40:47-06:00
lastmod: 2025-10-19
description: "One of those challenges where you need to close a pesky file that a process keeps opening."
author: "Timothy Loftus (n3s0)"
cover: "/feed/writeups/sadservers/img/sadservers.jpg"
draft: true
tags: ["SadServers", "Linux"]
---

## Summary
---


## Scenario
---

**Scenario:** "Kampot": A New Port

**Level:** Easy

**Type:** Do

**Access:** Email

**Description:**

A Python app serving simulated bank data runs as root and listens on port 20280. 
The app is managed by supervisor and cannot be stopped or reconfigured to use a 
different port.

An internal legacy monitoring system expects the service to be available on 
port 80, but the app is hardcoded to 20280 for security and legacy reasons. 
Your task is to make the service accessible on port 80 locally.

**Root (sudo) Access:** True

**Test:** 

`curl localhost:80/accounts` returns:

```json
[{"id":1,"name":"Alice","type":"Checking"},{"id":2,"name":"Bob","type":"Savings"},{"id":3,"name":"Charlie","type":"Business"}]
```

## Solution
---

```sh
curl localhost:80/accounts
curl: (7) Failed to connect to localhost port 80 after 0 ms: Could not connect to server
```

```sh
 curl localhost:20280/accounts
[{"id":1,"name":"Alice","type":"Checking"},{"id":2,"name":"Bob","type":"Savings"},{"id":3,"name":"Charlie","type":"Business"}]
```

```python
from flask import Flask, jsonify

app = Flask(__name__)

# Hardcoded bank data
accounts = [
    {"id": 1, "name": "Alice", "type": "Checking"},
    {"id": 2, "name": "Bob", "type": "Savings"},
    {"id": 3, "name": "Charlie", "type": "Business"}
]
transactions = [
    {"account_id": 1, "amount": -50, "desc": "ATM Withdrawal"},
    {"account_id": 2, "amount": 200, "desc": "Deposit"},
    {"account_id": 3, "amount": -1000, "desc": "Wire Transfer"}
]
balances = {
    1: 950,
    2: 1200,
    3: 5000
}

@app.route("/accounts")
def get_accounts():
    return jsonify(accounts)

@app.route("/transactions")
def get_transactions():
    return jsonify(transactions)

@app.route("/balance/<int:account_id>")
def get_balance(account_id):
    return jsonify({"account_id": account_id, "balance": balances.get(account_id, 0)})

if __name__ == "__main__":
    # Listen on port 20280, hardcoded
    app.run(host="0.0.0.0", port=20280)
```

```sh
#!/usr/bin/bash
# DO NOT MODIFY THIS FILE ("Check My Solution" will fail)

# Check if the app is running and listening on 20280
ss -ltn | grep ':20280' >/dev/null
APP_RUNNING=$?

# check the app endpoint on :80
curl -s http://localhost:80/accounts | grep 'Alice' >/dev/null
ENDPOINT_OK=$?

if [[ "$APP_RUNNING" -eq 0 && "$ENDPOINT_OK" -eq 0 ]]; then
        echo -n "OK"
else
        echo -n "NO"
fi
```

When I checked the `etc` directory. It didn't look like there were any web
servers that I could see. I suppose I could code my own proxy for this. But,
instead I decided to go with `Caddy`. The scenario doesn't say I'm not allowed
to install another application. So that's what I decided to do.

```sh
apt-get update
```

```sh
apt-get -y install caddy
```

```sh
# The Caddyfile is an easy way to configure your Caddy web server.
#
# Unless the file starts with a global options block, the first
# uncommented line is always the address of your site.
#
# To use your own domain name (with automatic HTTPS), first make
# sure your domain's A/AAAA DNS records are properly pointed to
# this machine's public IP, then replace ":80" below with your
# domain name.

:80 {
        # Set this path to your site's directory.
        #root * /usr/share/caddy

        # Enable the static file server.
        file_server

        # Another common task is to set up a reverse proxy:
        reverse_proxy localhost:20280

        # Or serve a PHP site through php-fpm:
        # php_fastcgi localhost:9000
}

# Refer to the Caddy docs for more information:
# https://caddyserver.com/docs/caddyfile
```


```sh
caddy validate --config /etc/caddy/Caddyfile
2026/03/20 17:05:44.205 INFO    using provided configuration    {"config_file": "/etc/caddy/Caddyfile", "config_adapter": ""}
2026/03/20 17:05:44.207 WARN    http    server is listening only on the HTTP port, so no automatic HTTPS will be applied to this server       {"server_name": "srv0", "http_port": 80}
2026/03/20 17:05:44.207 INFO    tls.cache.maintenance   started background certificate maintenance      {"cache": "0xc000264460"}
2026/03/20 17:05:44.210 INFO    tls.cache.maintenance   stopped background certificate maintenance      {"cache": "0xc000264460"}
Valid configuration
```

```sh
systemctl enable --now caddy
```

```sh
admin@i-09acbe9bc284b85fd:~$ cat /etc/caddy/Caddyfile
# The Caddyfile is an easy way to configure your Caddy web server.
#
# Unless the file starts with a global options block, the first
# uncommented line is always the address of your site.
#
# To use your own domain name (with automatic HTTPS), first make
# sure your domain's A/AAAA DNS records are properly pointed to
# this machine's public IP, then replace ":80" below with your
● caddy.service - Caddy
     Loaded: loaded (/usr/lib/systemd/system/caddy.service; enabled; preset: enabled)
     Active: active (running) since Fri 2026-03-20 17:04:17 UTC; 2min 54s ago
 Invocation: e98d05424fb440ec92e3a0b7ae7571f0
       Docs: https://caddyserver.com/docs/
   Main PID: 1242 (caddy)
      Tasks: 7 (limit: 503)
     Memory: 7.7M (peak: 7.8M)
        CPU: 49ms
     CGroup: /system.slice/caddy.service
             └─1242 /usr/bin/caddy run --environ --config /etc/caddy/Caddyfile

Mar 20 17:04:17 i-09acbe9bc284b85fd caddy[1242]: {"level":"info","ts":1774026257.6477466,"msg":"using provided configuration","config_file":"/etc/caddy/Caddyfile","config_adapter":""}
Mar 20 17:04:17 i-09acbe9bc284b85fd caddy[1242]: {"level":"info","ts":1774026257.6501846,"logger":"admin","msg":"admin endpoint started","address":"localhost:2019","enforce_origin":false,"origins":["//127.0.0.1:2019","//localhost:2019","//[::1]:2019"]}
Mar 20 17:04:17 i-09acbe9bc284b85fd caddy[1242]: {"level":"warn","ts":1774026257.65032,"logger":"http","msg":"server is listening only on the HTTP port, so no automatic HTTPS will be applied to this server","server_name":"srv0","http_port":80}
Mar 20 17:04:17 i-09acbe9bc284b85fd caddy[1242]: {"level":"info","ts":1774026257.650482,"logger":"tls.cache.maintenance","msg":"started background certificate maintenance","cache":"0xc00036c070"}
Mar 20 17:04:17 i-09acbe9bc284b85fd caddy[1242]: {"level":"info","ts":1774026257.650563,"logger":"tls","msg":"cleaning storage unit","description":"FileStorage:/var/lib/caddy/.local/share/caddy"}
Mar 20 17:04:17 i-09acbe9bc284b85fd caddy[1242]: {"level":"info","ts":1774026257.6505744,"logger":"http.log","msg":"server running","name":"srv0","protocols":["h1","h2","h3"]}
Mar 20 17:04:17 i-09acbe9bc284b85fd caddy[1242]: {"level":"info","ts":1774026257.6505947,"logger":"tls","msg":"finished cleaning storage units"}
Mar 20 17:04:17 i-09acbe9bc284b85fd caddy[1242]: {"level":"info","ts":1774026257.6508074,"msg":"autosaved config (load with --resume flag)","file":"/var/lib/caddy/.config/caddy/autosave.json"}
Mar 20 17:04:17 i-09acbe9bc284b85fd systemd[1]: Started caddy.service - Caddy.
Mar 20 17:04:17 i-09acbe9bc284b85fd caddy[1242]: {"level":"info","ts":1774026257.651606,"msg":"serving initial configuration"}
```

```sh
sudo systemctl restart caddy
admin@i-09acbe9bc284b85fd:~$ curl localhost:80/accounts
[{"id":1,"name":"Alice","type":"Checking"},{"id":2,"name":"Bob","type":"Savings"},{"id":3,"name":"Charlie","type":"Business"}]
```

```sh
 ss -ltn
State            Recv-Q           Send-Q                     Local Address:Port                      Peer Address:Port          
LISTEN           0                4096                             0.0.0.0:5355                           0.0.0.0:*             
LISTEN           0                4096                          127.0.0.54:53                             0.0.0.0:*             
LISTEN           0                4096                       127.0.0.53%lo:53                             0.0.0.0:*             
LISTEN           0                4096                           127.0.0.1:2019                           0.0.0.0:*             
LISTEN           0                128                              0.0.0.0:20280                          0.0.0.0:*             
LISTEN           0                128                              0.0.0.0:22                             0.0.0.0:*             
LISTEN           0                4096                                [::]:5355                              [::]:*             
LISTEN           0                4096                                   *:8080                                 *:*             
LISTEN           0                4096                                   *:6767                                 *:*             
LISTEN           0                4096                                   *:80                                   *:*             
LISTEN           0                128                                 [::]:22                                [::]:*       
```

## SadServers Expected Solution
---

Time to do this again. After solving it. I decided to look in the hints and they
provide a method to fix this without the need for a proxy. Based on the hint.
The solution is to use `iptables(1)` for this. Which makes sense if you don't
want to install another application on the server.

```sh
 sudo iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain FORWARD (policy DROP)
target     prot opt source               destination         
DOCKER-USER  all  --  anywhere             anywhere            
DOCKER-FORWARD  all  --  anywhere             anywhere            

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         

Chain DOCKER (1 references)
target     prot opt source               destination         
DROP       all  --  anywhere             anywhere            

Chain DOCKER-BRIDGE (1 references)
target     prot opt source               destination         
DOCKER     all  --  anywhere             anywhere            

Chain DOCKER-CT (1 references)
target     prot opt source               destination         
ACCEPT     all  --  anywhere             anywhere             ctstate RELATED,ESTABLISHED

Chain DOCKER-FORWARD (1 references)
target     prot opt source               destination         
DOCKER-CT  all  --  anywhere             anywhere            
DOCKER-ISOLATION-STAGE-1  all  --  anywhere             anywhere            
DOCKER-BRIDGE  all  --  anywhere             anywhere            
ACCEPT     all  --  anywhere             anywhere            

Chain DOCKER-ISOLATION-STAGE-1 (1 references)
target     prot opt source               destination         
DOCKER-ISOLATION-STAGE-2  all  --  anywhere             anywhere            

Chain DOCKER-ISOLATION-STAGE-2 (1 references)
target     prot opt source               destination         
DROP       all  --  anywhere             anywhere            

Chain DOCKER-USER (1 references)
target     prot opt source               destination         
```

```sh
admin@i-031d30e905a5a9365:~$ sudo iptables -t nat -A OUTPUT -p tcp --dport 80 -d 127.0.0.1 -j REDIRECT --to-port 20280admin@i-031d30e905a5a9365:~$ sudo iptable -L
sudo: iptable: command not found
admin@i-031d30e905a5a9365:~$ sudo iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain FORWARD (policy DROP)
target     prot opt source               destination         
DOCKER-USER  all  --  anywhere             anywhere            
DOCKER-FORWARD  all  --  anywhere             anywhere            

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         

Chain DOCKER (1 references)
target     prot opt source               destination         
DROP       all  --  anywhere             anywhere            

Chain DOCKER-BRIDGE (1 references)
target     prot opt source               destination         
DOCKER     all  --  anywhere             anywhere            

Chain DOCKER-CT (1 references)
target     prot opt source               destination         
ACCEPT     all  --  anywhere             anywhere             ctstate RELATED,ESTABLISHED

Chain DOCKER-FORWARD (1 references)
target     prot opt source               destination         
DOCKER-CT  all  --  anywhere             anywhere            
DOCKER-ISOLATION-STAGE-1  all  --  anywhere             anywhere            
DOCKER-BRIDGE  all  --  anywhere             anywhere            
ACCEPT     all  --  anywhere             anywhere            

Chain DOCKER-ISOLATION-STAGE-1 (1 references)
target     prot opt source               destination         
DOCKER-ISOLATION-STAGE-2  all  --  anywhere             anywhere            

Chain DOCKER-ISOLATION-STAGE-2 (1 references)
target     prot opt source               destination         
DROP       all  --  anywhere             anywhere            

Chain DOCKER-USER (1 references)
target     prot opt source               destination    
```

```sh
 curl localhost:80/accounts
[{"id":1,"name":"Alice","type":"Checking"},{"id":2,"name":"Bob","type":"Savings"},{"id":3,"name":"Charlie","type":"Business"}]
```


## Conclusion
---

```sh
agent/check.sh 
OK
```

