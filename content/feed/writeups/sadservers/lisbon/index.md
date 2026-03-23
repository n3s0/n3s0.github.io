---
title: "Lisbon: etcd SSL Cert Troubles"
date: 2026-03-20T09:40:47-06:00
lastmod: 2025-10-20
description: "Write-up for the Lisbon SadServers challenge. Troubleshooting TLS certificate issues."
author: "Timothy Loftus (n3s0)"
cover: "/feed/writeups/sadservers/img/sadservers.jpg"
draft: true
tags: ["SadServers", "Linux"]
---

## Summary
---

## Scenario
---

Scenario: "Lisbon": etcd SSL cert troubles

Level: Medium

Type: Fix

Access: Email

Description: 

There's an etcd server running on `https://localhost:2379` , get the value for 
the key "foo", ie `etcdctl get foo` or `curl https://localhost:2379/v2/keys/foo`

Root (sudo) Access: True

Test: `etcdctl get foo` returns `bar`.

## Solution
---

```sh
etcdctl get foo
```

```sh
Error:  client: etcd cluster is unavailable or misconfigured; error #0: x509: certificate has expired or is not yet valid: current time 2027-03-20T20:10:37Z is after 2023-01-30T00:02:48Z

error #0: x509: certificate has expired or is not yet valid: current time 2027-03-20T20:10:37Z is after 2023-01-30T00:02:48Z
```

```sh
date
```

```sh
Sat Mar 20 20:12:05 UTC 2027
```

```sh
sudo timedatectl status
```

```sh
               Local time: Sat 2027-03-20 20:12:55 UTC
           Universal time: Sat 2027-03-20 20:12:55 UTC
                 RTC time: Fri 2026-03-20 20:12:56
                Time zone: Etc/UTC (UTC, +0000)
System clock synchronized: no
              NTP service: inactive
          RTC in local TZ: no
```

```sh
timedatectl set-ntp true
```

```sh
timedatectl status
```
```sh
               Local time: Fri 2026-03-20 20:14:17 UTC
           Universal time: Fri 2026-03-20 20:14:17 UTC
                 RTC time: Fri 2026-03-20 20:14:18
                Time zone: Etc/UTC (UTC, +0000)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no
```

```sh
openssl x509 -noout -text -in /etc/ssl/certs/localhost.crt
```

```sh
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            1f:db:2d:af:83:83:d0:62:6e:a1:84:84:05:64:8c:8c:bb:c3:67:22
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C = AU, ST = Some-State, O = Internet Widgits Pty Ltd, CN = localhost
        Validity
            Not Before: Dec 31 00:02:48 2022 GMT
            Not After : Jan 30 00:02:48 2023 GMT
        Subject: C = AU, ST = Some-State, O = Internet Widgits Pty Ltd, CN = localhost
```

```sh
sudo etcdctl get foo
Error:  client: response is invalid json. The endpoint is probably not valid etcd cluster endpoint.
admin@i-074bd2a1aa6606904:/$ sudo iptables -t nat -L
Chain PREROUTING (policy ACCEPT)
target     prot opt source               destination         
DOCKER     all  --  anywhere             anywhere             ADDRTYPE match dst-type LOCAL

Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         
REDIRECT   tcp  --  anywhere             anywhere             tcp dpt:2379 redir ports 443
DOCKER     all  --  anywhere            !ip-127-0-0-0.us-east-2.compute.internal/8  ADDRTYPE match dst-type LOCAL

Chain POSTROUTING (policy ACCEPT)
target     prot opt source               destination         
MASQUERADE  all  --  ip-172-17-0-0.us-east-2.compute.internal/16  anywhere            

Chain DOCKER (2 references)
target     prot opt source               destination         
RETURN     all  --  anywhere             anywhere            
```



## Conclusion
---
