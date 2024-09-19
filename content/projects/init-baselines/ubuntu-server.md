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

This is a little baseline I have for deploying Ubuntu Servers. Something I use from time to time as a checklist to make sure I have some essential tools and configuration needed. A lot of the stuff in this list can range anywhere between updates, firewall configuration, SSH keys, etc.

This baseline will be updated as I find new things to add to it.

## Updates
---

Need to keep the server up to date.

apt update

apt upgrade -y

apt autoremove -y

## Some Personal Touches
---

Just some things I do as personal touches to servers I deploy so they’re more familiar and have the tools I need.
Ubuntu Server 22.04 LTS

apt install vim nmap htop tcpdump sysstat

## SSH
---

### Generate New Host Keys
---

Generating new host keys for SSH can be a good baseline for new servers. I generally do this upon a fresh installation.

Remove the host keys generated by the system.

rm /etc/ssh/ssh_host_*

Then generate the RSA keys.

ssh-keygen -f /etc/ssh/ssh_host_rsa_key -N '' -q -t rsa

Generate the ECDSA keys.

ssh-keygen -f /etc/ssh/ssh_host_ecdsa_key -N '' -q -t ecdsa

Generate the ed25519 keys.

ssh-keygen -f /etc/ssh/ssh_host_ed25519_key -N '' -q -t ed25519

Restart the SSH service.

systemctl restart sshd

If doing this from an SSH prompt. It will be prudent to remove the key from known_hosts as well using the following command from the client computer.

ssh-keygen -R "<hostname/ip>"

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

ssh-keygen -t ed25519

## Completing SSH Configuration Changes
---

Once this is complete. SSH server should be restarted.

systemctl restart sshd

To check the ssh configuration. The following command can be entered.

sshd -t

## Disable Cloud-Init (If not used)
---

If cloud-init isn’t being used. I disable it.

Since I have an article for doing this already. Below is the link to that article.

- [Ubuntu 22.04 LTS: Disable & Remove Cloud-Init](#)

The server will need to be rebooted after adding this file.
Firewall

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

```sh
ufw allow in 22/tcp
```

```sh
ufw allow out 123/udp ufw allow out 80/tcp ufw allow out 443/tcp ufw allow out 53
```

```sh
ufw allow
```

```sh
ufw default deny incoming
```
```sh
ufw default deny outgoing
```
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