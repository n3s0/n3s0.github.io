---
title: "Ubuntu Server Inital Setup & Config Baseline"
date: 2022-12-31T15:59:15-06:00
summary: "Notes for my Ubuntu Server baseline."
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

This is a little baseline I have for deploying Ubuntu Servers. Something I use 
from time to time as a checklist to make sure I have some essential tools and 
configuration needed. A lot of the stuff in this list can range anywhere between 
updates, firewall configuration, SSH keys, etc.

This baseline will be updated as I find new things to add to it.

## Set Hostname
---

If it hasn't been set already or it's been orchestrated with a generic hostname.
It might be useful to provde hostname setup for the server.

```sh
hostnamectl set-hostname HOSTNAME
```

## Configure DNS
---

If this isn't going to be a DNS server. Maybe even if it is. Some preferences 
for DNS is below. Can set this to which ever you like. But, I generally chose
between the following if I already don't have a DNS server on the production
network.

Later I'll put the configuration for the setup I use when I host everything in
house.

I generally don't configure IPv6. At some point I will though. Generally I'll
let services like Vultr assign a v6 address. The choices would be either 
Cloudflare or Quad 9. If I truely need to I'll use 

- Choice 1: (Cloudflare)
    - Primary: 1.1.1.1
    - Secondary: 1.0.0.1
- Choice 2: (Quad 9)
    - Primary: 9.9.9.9
    - Secondary: 149.112.112.112

To configure the hostname for the machine. I go through the following steps with
systemd.

I'll edit the resolved.conf file. I'll generally default to 

```sh
# See resolved.conf(5) for details.

[Resolve]
# Some examples of DNS servers which may be used for DNS= and FallbackDNS=:
# Cloudflare: 1.1.1.1#cloudflare-dns.com 1.0.0.1#cloudflare-dns.com 2606:4700:4700::1111#cloudflare-dns.com 2606:4700:4700::1001#cloudflare-dns.com
# Google:     8.8.8.8#dns.google 8.8.4.4#dns.google 2001:4860:4860::8888#dns.google 2001:4860:4860::8844#dns.google
# Quad9:      9.9.9.9#dns.quad9.net 149.112.112.112#dns.quad9.net 2620:fe::fe#dns.quad9.net 2620:fe::9#dns.quad9.net
DNS=1.1.1.1
FallbackDNS=1.0.0.1
```

Another thing that I will do some times is the following.

```sh
# See resolved.conf(5) for details.

[Resolve]
# Some examples of DNS servers which may be used for DNS= and FallbackDNS=:
# Cloudflare: 1.1.1.1#cloudflare-dns.com 1.0.0.1#cloudflare-dns.com 2606:4700:4700::1111#cloudflare-dns.com 2606:4700:4700::1001#cloudflare-dns.com
# Google:     8.8.8.8#dns.google 8.8.4.4#dns.google 2001:4860:4860::8888#dns.google 2001:4860:4860::8844#dns.google
# Quad9:      9.9.9.9#dns.quad9.net 149.112.112.112#dns.quad9.net 2620:fe::fe#dns.quad9.net 2620:fe::9#dns.quad9.net
DNS=1.1.1.1 9.9.9.9
FallbackDNS=1.0.0.1 149.112.112.112
```

Then I'll reload the daemon, restart networkd, and restart resolved.

```sh
systemctl reload-daemon
systemctl restart systemd-networkd
systemctl restart systemd-resolved
```

## Configure Time
---

Another thing that I'll set out of the gate is time. Depending on what it's
for I'll either set it for my usual timezone or I'll keep it on UTC. But, I
generally sync it with NTP servers. Especially if it's a cloud server.

Set the timezone with timedatectl(1).

```sh
timedatectl set-timezone TIMEZONE
```

Configure NTP syncing for the server.

Enable ntp sync.

```sh
timedatectl set-ntp true
```

Configure the NTP servers. Primary pool and a secondary.

```sh
timedatectl ntp-servers INTERFACE time.nist.gov us.pool.ntp.org
```

Time sync status can be shown by issuing the following command.

```sh
timedatectl timesync-status
```

If I'm sticking with UTC. I generally like to check first.

```sh
timedatectl
```

Below is the expected output for this.

```sh
               Local time: Fri 2024-10-18 04:47:16 UTC
           Universal time: Fri 2024-10-18 04:47:16 UTC
                 RTC time: Fri 2024-10-18 04:47:16
                Time zone: Etc/UTC (UTC, +0000)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no

```

## Updates
---

Need to keep the server up to date. One of those essentials for day-to-day
administration of our systems. Regardless of how many issues may come about
their application. It's a standard belief of mine that updating these systems is
for a betterment as far as operation and security is concerned.

Generally with Ubuntu I have rarely seen an update break an application that I 
installed. 

Update package repositories.

```sh
apt update
```

Upgrade packages.

```sh
apt upgrade -y
```

Sometimes we need to ask Ubuntu to cleanup old packages for us.

```sh
apt autoremove -y
```

I have an [Ansible playbook](https://github.com/n3s0/ubuntu-update-playbook) 
that I'm working on to automate the update process for Ubuntu on my Github.

## Some Personal Install Preferences
---

Just some things I do as personal touches to servers I deploy so they’re more familiar and have the tools I need.

### Ubuntu Server 22.04 LTS
---

Some software that I generally install to aid me in my workflow on the server.

```sh
apt install vim nmap htop tcpdump sysstat git
```

## SSH
---

### Generate New Host Keys
---

Generating new host keys for SSH can be a good baseline for new servers. I 
generally do this upon a fresh installation.

Remove the host keys generated by the system.

```sh
rm /etc/ssh/ssh_host_*
```

Then generate the RSA keys.

```sh
ssh-keygen -f /etc/ssh/ssh_host_rsa_key -N '' -q -t rsa
```

Generate the ECDSA keys.

```sh
ssh-keygen -f /etc/ssh/ssh_host_ecdsa_key -N '' -q -t ecdsa
```

Generate the ed25519 keys.

```sh
ssh-keygen -f /etc/ssh/ssh_host_ed25519_key -N '' -q -t ed25519
```

Restart the SSH service.

```sh
systemctl restart sshd
```

If doing this from an SSH prompt. It will be prudent to remove the key from known_hosts as well using the following command from the client computer.

```sh
ssh-keygen -R "<hostname/ip>"
```

### Configure the SSH Server
---

Some little things that need to be performed to make it so the ssh server is configured appropriately. Added will be a little 99-company/99-.

File is generally put in the sshd_config directory.

- /etc/sshd/sshd_config.d/99-n3s0.conf

The configuration below may change frequently. But, this is generally the baseline.

```sh
Port 22
AddressFamily inet

HostKey /etc/ssh/ssh_host_ed25519_key
HostKey /etc/ssh/ssh_host_rsa_key
HostKey /etc/ssh/ssh_host_ecdsa_key

SyslogFacility AUTH
LogLevel INFO

PasswordAuthentication yes
PermitEmptyPasswords no
PermitRootLogin no

DenyUsers root
AllowUsers <users>
```

## Generate Keys for All Users
---

Need to generate or import the appropriate SSH keys for all users. This is especially for the root user.

Run the following command on the root user account. Also make sure to instruct or login then run the following command to generate the keys for the users.

```sh
ssh-keygen -t ed25519
```

## Completing SSH Configuration Changes
---

To check the ssh configuration. The following command can be entered.

```sh
sshd -t
```

Once this is complete. SSH server should be restarted.

```sh
systemctl restart sshd
```

## Disable Cloud-Init (If not used)
---

If cloud-init isn’t being used. I disable it.

Since I have an article for doing this already. Below is the link to that article.

- [Ubuntu 22.04 LTS: Disable & Remove Cloud-Init](#)

The server will need to be rebooted after adding this file.

## Firewall
---

I generally stick with UFW for Ubuntu Servers just for it’s ease of use.

## Enable UFW
---

These commands should be entered using either sudo(1) or as the root user.

UFW is in an inactive state by default. To confirm the status can be checked.

```sh
ufw status
```

Below is the output of the command if UFW is inactive.

```sh
Status: inactive
```

Enable UFW using the command below.

```sh
ufw enable
```

Check the status for UFW to confirm it’s active.

```sh
ufw status
```

The desired output can be found below.

```sh
Status: active
```

## UFW (Strict)
---

Then I decide to disable the use of IPv6 because I’m not necessarily ready to go that route. Some day. But, not now.

To do this I edit the /etc/default/ufw file on the following line and reload ufw.

```sh
# Set to yes to apply rules to support IPv6 (no means only IPv6 on loopback
# accepted). You will need to 'disable' and then 'enable' the firewall for
# the changes to take affect.
IPV6=no
```

The command below will reload UFW.

```sh
ufw reload
```

Allow SSH in on the server.

```sh
ufw allow in 22/tcp
```

Since we're performing a strict configuration. We'll need to allow the services
we need outbound because we are setting an implicit deny outbound. Generally it's
good to get these in place before we decide to deny all ingress and egress traffic.

```sh
ufw allow out 123/udp 
ufw allow out 80/tcp 
ufw allow out 443/tcp 
ufw allow out 53
```

Denies all incomming traffice.

```sh
ufw default deny incoming
```

Denies all outgoing traffic.

```sh
ufw default deny outgoing
```

Denies routing.

```sh
ufw default deny routed
```

Once all of this is configured. I reload ufw.

```sh
ufw reload
```

## UFW (Less Strict)
---

Provided is configuration for environments where implicit deny isn’t necessarily needed on hosts. If it’s internal or where values regarding security aren’t necessarily that large.