---
title: 'Configure Hostname On Juniper'
date: 2024-10-05T16:49:01-06:00
summary: "Configuring The hostname on Juniper."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["netadmin"]
---

## Summary
---

```sh
cli
```

```sh
configure
```

```sh
edit system
```

```sh
[edit system]
root@juniper#
```

```sh
set host-name lab-srx220-r01
```

```sh
commit
```

```sh
commit complete

[edit system]
root@lab-srx220-r01#
```

```sh
show system
```

```sh
host-name lab-srx220-r01;
time-zone America/Chicago;
root-authentication {
    encrypted-password "REDACTED"; ## SECRET-DATA
}
name-server {
    1.1.1.1;
    1.0.0.1;
}
services {
    ssh;
    telnet;
    xnm-clear-text;
    web-management {
        http {
            interface vlan.0;
        }
        https {
            system-generated-certificate;
            interface vlan.0;
        }
    }
    dhcp {
        router {                        
            192.168.1.1;
        }
        pool 192.168.1.0/24 {
            address-range low 192.168.1.2 high 192.168.1.254;
        }
        propagate-settings ge-0/0/0.0;
    }
}
syslog {
    archive size 100k files 3;
    user * {
        any emergency;
    }
    file messages {
        any notice;
        authorization info;
    }
    file interactive-commands {
        interactive-commands error;
    }
    file LOG-Accepted-Traffic {
        any any;
                                        
[edit]
```