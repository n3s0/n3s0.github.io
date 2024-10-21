---
title: "Personal VPN Setup Using Wireguard, OpenBSD, and Vultr VPS"
date: 2022-12-03T17:01:37-06:00
summary: "Notes for building my personal WireGuard VPN on OpenBSD hosted on Vultr VPS."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["sysadmin"]
---

## Summary
---

It's been a minute since I've posted. But, here you go. New post with
some personal infrastructure. In the future I'll lay out some of the
personal infrastructure I have and use.

There are plenty of options on the Internet for VPN providers. Many good
ones in fact. But, I would rather have control of things like that. I've
been kicking around the idea of having my own Private Cloud for years.
But, never put real thought into it. Finally after noodled through
options for this I think I have what I need, set it up, and I use this
from day to day. On my cell phone and my personal laptop.

One thing to note. The configuration that looks like
$WIREGUARD_PUBLIC_KEY or the like is intended to represent what it says 
it is. If someone were to stumble across this in the future; judging 
it isn't outdated by then, they'd know what to replace the value with.

## Cloud Hosting
---

Vultr VPS is an awesome cloud hosting provider with multiple options
available. Go ahead and check out some of their options. You can build
your own cloud server with OS options anywhere from Microsoft Windows
Server, OpenBSD, Alpine, Ubuntu, etc. They have awesome pricing for
their VMs and for this personal project they were a great fit.

- [Vultr Pricing](https://www.vultr.com/pricing/)

I chose the High Performance Intel server with the following configuration. 
Which was a steal as far as monthly pricing is concerned. It may even 
be able to host other services that I'll talk about in the future. It 
has everything I need for this project.

- vCPU (Intel Xeon CPU): 1
- Memory: 1 GB
- Bandwidth: 2.00 TB
- Storage (NVMe SSD): 25 GB
- Pricing:
  - Monthly: $6.00/mo
  - Hourly: $0.009/hr

The operating system I chose for this installation was OpenBSD 7.2
release. This machine is directly accessible on the Internet. So I chose
to go with an operating system that takes the development and security
of the OS seriously. 

Vultr provides an option where you can install a custom ISO. For added
security I'll rebuild this with some disk encryption so any data at 
rest has some added protections from a nosey Vultr employee.

Post for some of the prerequisites I have before I start installing or
configuring any service on OpenBSD that's accessible from the Internet.
It will provide a semi-well rounded baseline for the OS. I'll be adding
more as I improve on this.

- [OpenBSD: Initial Virtual Private Server Baseline](/posts/20221203224604/)

## Initial Server Setup
---

First step is to install the necessary packages to perform the setup.
The libqrencode(1) package is installed so I can configure WireGuard
peers on my cell phone.

```sh
pkg_add wireguard-tools vim libqrencode
```

The following command will enable IPv4 forwarding on the server. This is
configured so I can reach the Internet from the client VPN. NAT is used
to forward traffic back out the public facing network interface.

```sh
sysctl net.inet.ip.forwarding=1
```

This section below is optional. It's needed to configure IPv6
forwarding. If IPv6 isn't needed or configured I generally don't
configure this. But, if I do in the future. I should be able to find it
in the future with this post.

```sh
sysctl net.inet.ip6.forwarding=1
```

So these settings persist across reboots. The following line needs to be
added to the ```/etc/sysctl.conf``` file.

```sh
net.inet.ip.forwarding=1
```

For the future if there is a need for both IPv4 and IPv6 forwarding in
the ```/etc/sysctl.conf``` file.

```sh
net.inet.ip.forwarding=1
net.inet.ip6.forwarding=1
```

## Generating Keys
---

One of the steps I like to take is generating the private/public keys for the 
server and the clients before I start the work. Considering the packages are
installed. We can get to work on generating them now and reference them later.

When the keys are generated and notated somewhere. I'll remove these files so
they aren't on a workstation somewhere or the server.

### Server
---

First I'm going to generate the server keys.

The ```wg genkey``` command below will generate the private key and 
place the output in the private.key file. Located in the /etc/wireguard
directory.

```sh
wg genkey > private.key
```

Using the ```wg pubkey``` while directing the contents of
```private.key``` into the command. This will generate the public key
and direct the output to the ```public.key``` file.

```sh
wg pubkey < private.key > public.key
```

### Phone
---

In this section I'll generate the keys for the phone I'm setting this up on.
The steps for this are the same for the server.

Generate the private key for the phone.

```sh
wg genkey > phone-private.key
```

Generate the public key for the phone.

```sh
wg pubkey < phone-private.key > phone-public.key
```

### Workstation
---

In this section I'll generate the keys utilized on the workstation. The steps
for this are the same as they should be for the server.

Need to generate the private key first.

```sh
wg genkey > workstation-private.key
```

Generate the public key.

```sh
wg pubkey < workstation-private.key > workstation-public.key
```

## WireGuard Server Setup
---

Creating the wirguard directory where the confiuration file will be
stored.

```sh
mkdir -p /etc/wireguard
```

Creating the WireGuard configuration file for later. One thing to keep in mind
is if we're doing this as root. We'll need to set the umask to 077 before the
files creation.

```sh
touch /etc/wireguard/wg0.conf
```

Making the configuration file for the tunnel interface less accessible
to anyone who could access the server.

```sh
chmod 0600 /etc/wireguard/*
```

Chang the user and group access of the wg0.conf file to root and
wheel.

```sh
chown root:wheel /etc/wireguard/wg0.conf
```

### Server Configuration
---

In the ```/etc/wireguard/wg0.conf``` file, added the following. The
```wg0.conf``` file will be utilized to apply the WireGuard
configuration on the interface when it initializes on boot. I'll be
talking about this in another section.

Below is some explaination of what it all means.

- ```[Interface]```: Indicates that the contents below are for the
  interface.
- ```PrivateKey```: Private key for the server.
- ```ListenPort```: Port that WireGuard is listening on.
- ```[Peer]```: Indicates that it's configuration for a peer. Each peer
  will need to have this above them.
- ```PublicKey```: Public key for the peer.
- ```AllowedIPs```: The IP address of the peer that is allowed on the
  WireGuard server.

```sh
# Server configuration
[Interface]
PrivateKey = $WIREGUARD_SERVER_PRIVATE_KEY
ListenPort = 51820

# Client configuration
# Workstation
[Peer]
PublicKey = $WORKSTATION_PUBLIC_KEY
AllowedIPs = 10.19.19.10/32

# Phone
[Peer]
PublicKey = $PHONE_PUBLIC_KEY
AllowedIPs = 10.19.19.11/32
```

Configuration for the tunnel interface. Name of the interface is wg0.
This is located in the ```/etc/hostname.wg0``` path.

```sh
touch /etc/hostname.wg0
```

Configuration for the interface can be found below. This does the
following things.

- Sets the IP address for the interface to 10.19.19.250/24.
- Sets a description for the interface. So I know what it's for.
- Enables or turns on the interface.
- Sets the WireGuard configuration on wg0 with the configuration file
  found in ```/etc/wireguard/wg0.conf```.

```sh
inet 10.19.19.250 255.255.255.0 10.19.19.255 description "Road Warrior Tunnel (wg0)"
up
!/usr/local/bin/wg setconf wg0 /etc/wireguard/wg0.conf
```

### PF Configuration
---

Firewall rules are needed so traffic passes accordingly. It does the
following. Make sure to add them at the bottom of the file.

- Passes in all traffic on the ```wg0``` interface and logs the
  traffic.
- Allows UDP traffic in from anywhere to anywhere on the WireGuard port.
- Passes all traffic from the egress port from the WireGuard network to
  anything. NATed on the vio0 interface.

```sh
# WireGuard tunnel rules (wg0)
pass in log on wg0
pass in log inet proto udp from any to any port 51820
pass out log on egress inet from (wg0:network) nat-to (vio0)
```

## Phone Configuration
---

Now it's time to configure the phone for connection. This can be accomplished 
by following the steps below.

In this section I'm going to go through the process of generating the public

### Phone Client Configuration
---

Some explaination of the phone configuration is below.

- ```PrivateKey```: Private key created for the phone.
- ```Address```: IP address of the phone on the tunnel.
- ```DNS```: DNS server(s) for name resolution.
- ```PublicKey```: Public wireguard key for the server.
- ```AllowedIPs```: Allows all traffic too and from over the WireGuard
  tunnel.
- ```Endpoint```: IP address of the WireGuard server. Along with the
  WireGuard port that's passing traffic.
- ```PersistentKeepAlive```: Ammount of time in seconds that the
  availability of tunnel connectivity is checked.

The actual configuration output for the phone can be found below. I create this
on the server in preparation of the next step.

```ini
[Interface]
PrivateKey = $PHONE_PRIVATE_KEY
Address = 10.19.19.11/24
DNS = 1.1.1.1

[Peer]
PublicKey = $WIREGUARD_SERVER_PUBLIC_KEY
AllowedIPs = 0.0.0.0/0
Endpoint = $WIREGUARD_SERVER_IP:51820
PersistentKeepAlive = 25
```

### Configure VPN On Phone
---

Generate the QR code with the qrencode command. This will generate a large
QR code that can be scanned by the wireguard application during creation

```sh
cat /path/to/phone-client.conf | qrencode -t ansiutf8
```

A QR code will show up on the screen after entering the command for the
configuration. Open up the WireGuard mobile app on your phone; after
installing it, and add a new VPN profile through the app using the QR code
option. Once it's added it should connect with no issue.

Once the tunnel is up. Internet connectivity can be tested using a web
browser. All traffic should be routed through the WireGuard server
hosted on the VPS now.

## Workstation Configuration
---

Before setting up WireGuard on the workstation. I need to consider
which OS is being used. WireGuard is integrated into the Linux Kernel. 
But, how it's setup will depend on the distro it's setup on.

This will cover setting up WireGuard on Ubuntu because that's the OS I'm
on at the time. But, I plan on exploring with other operating system in
the future.

### Installing Packages
---

Need to install the necessary software for setting up the WireGuard VPN
client. Need to install resolvconf because it's required by the wg-quick
script.

```sh
sudo apt install wireguard -y
```

### Creating The Configuration File
---

Created the configuration file using the following command.

```sh
touch /etc/wireguard/wg0.conf
```

The contents of the configuration file can be found below. All of these
options are the same as the explaination provided in the phone
configuration. Just the workstation private key, and Address will be
catered to the workstations configuration.

```ini
[Interface]
PrivateKey = $WORKSTATION_PRIVATE_KEY
Address = 10.19.19.10/24
DNS = 1.1.1.1

[Peer]
PublicKey = $WIREGUARD_SERVER_PUBLIC_KEY
AllowedIPs = 0.0.0.0/0
Endpoint = $WIREGUARD_SERVER_IP:51820
PersistentKeepAlive = 25
```

### Connecting To WireGuard
---

The command below brings the tunnel up. Depending on how the config file
is setup. It will configure routing out through the wireguard tunnel and
to devices on it. In this particular setup. Devices on the tunnel can see
each other. But, that's not always bad. Just depends on the use case.

```sh
wg-quick up wg0
```

Wanted to discuss the output of the command because it's important to
note. I will do that in due time.

Below is the output of the command.

```sh
[#] ip link add wg0 type wireguard
[#] wg setconf wg0 /dev/fd/63
[#] ip -4 address add 10.19.19.10/24 dev wg0
[#] ip link set mtu 1420 up dev wg0
[#] resolvconf -a tun.wg0 -m 0 -x
[#] wg set wg0 fwmark 51820
[#] ip -4 route add 0.0.0.0/0 dev wg0 table 51820
[#] ip -4 rule add not fwmark 51820 table 51820
[#] ip -4 rule add table main suppress_prefixlength 0
[#] sysctl -q net.ipv4.conf.all.src_valid_mark=1
[#] nft -f /dev/fd/63
```

### Disconnecting From WireGuard Tunnel
---

The command below will bring the tunnel down and restore connectivity to
the local network.

```sh
wg-quick down wg0
```

The output below shows that it's doing the following things. It's
cleaning up all of the work it's done from the previous ```wg-quick down
wg0``` command.

```sh
[#] ip -4 rule delete table 51820
[#] ip -4 rule delete table main suppress_prefixlength 0
[#] ip link delete dev wg0
[#] resolvconf -d tun.wg0 -f
[#] nft -f /dev/fd/63
```

There is a section for testing the configuration. Go ahead and navigate
[here](/posts/20221203170137/#troubleshooting--testing).
It will provide some things that will allow for proper testing and some
troubleshooting tips for the VPN.

## Troubleshooting & Testing
---

This section covers some tips for troubleshooting. Throughout a
deployment issues come up. It happens. Something runs amok and there's a
need to fix this or that. But, It's not bad as long as you take the time
to troubleshoot. That is the purpose of this section. To assist with
troubleshooting on OpenBSD and test the WireGuard setup.

This command can be run on the server and the client/peer. It provides
the status of WireGuard connections, data that's been transferred,
latest handshake time, and a little more.

```sh
wg show
```

Below is the output of the command.

```sh
Interface: wg0
  public key: $WIREGUARD_SERVER_PUBLIC_KEY
  private key: (hidden)
  listening port: 51820

peer: $PEER_PUBLIC_KEY
  allowed ips: 10.19.19.10/32

peer: $PEER_PUBLIC_KEY
  endpoint: $PEER_IP:57323
  allowed ips: 10.19.19.11/32
  latest handshake: 45 seconds ago
  transfer: 2.06 MiB received, 2.33 MiB sent
```

Pinging the tunnel gateway for the server is a good way to test that
there is some routing and connectivity working correctly. At least on
the inside of the tunnel.

```sh
ping -c 4 10.19.19.250
```

Output can be seen below.

```sh
PING 10.19.19.250 (10.19.19.250) 56(84) bytes of data.
64 bytes from 10.19.19.250: icmp_seq=1 ttl=255 time=34.0 ms
64 bytes from 10.19.19.250: icmp_seq=2 ttl=255 time=33.5 ms
64 bytes from 10.19.19.250: icmp_seq=3 ttl=255 time=35.4 ms
64 bytes from 10.19.19.250: icmp_seq=4 ttl=255 time=34.2 ms

--- 10.19.19.250 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 33.549/34.286/35.352/0.661 ms
```

Pinging an external IP address - like Cloudflare - is a good way to test
connectivity outside of the VPN. Afterall, that is one of points to this
client VPN. So, testing it's working is pretty important.

```sh
ping -c 4 1.1.1.1
```

Belwo is the output from this command.

```sh
PING 1.1.1.1 (1.1.1.1) 56(84) bytes of data.
64 bytes from 1.1.1.1: icmp_seq=1 ttl=57 time=35.7 ms
64 bytes from 1.1.1.1: icmp_seq=2 ttl=57 time=34.6 ms
64 bytes from 1.1.1.1: icmp_seq=3 ttl=57 time=42.8 ms
64 bytes from 1.1.1.1: icmp_seq=4 ttl=57 time=34.7 ms

--- 1.1.1.1 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3005ms
rtt min/avg/max/mdev = 34.559/36.949/42.822/3.418 ms
```

This command should provide the public address of the system issuing it.
It sends a GET request to [ifconfig.io](https://ifconfig.io) and sends the
public IP back.

This can be checked before and after connecting to the VPN to determine
that it's working. If the IP changes to the WireGuard server. It works.

Note that this wont work as expected if the WireGuard server is just
some machine on your network. It will show the same public IP every
time.

It's also a good way to check that things are working on your phone. Use
the link provided and it should open in a browser.

```sh
curl ifconfig.io
```

Helps check the route path using ICMP and not UDP. It can be done
without the ```-I``` flag to test UDP.

```sh
traceroute -I ifconfig.io
```

### I Tip My Hat To The Details
---

One thing to also consider during setup is typos in configuration files.
This occured when I started setting up the VPN on the server. When I
setup the IP forwarding so it could reach the Internet. I fat fingered
the IP forwarding in the ```/etc/sysctl.conf``` file.

This caused about a week of troubleshooting and pulling my hair out.
Part of thinking that everything was configured the way it should be.
When finally had enough. I got a second opinion from a friend of mine
and he asked to see the ```sysctl.conf(5)``` file. Which revealed that
the IPv4 configuration was the problem.

If someone else is setting this up. Just keep this in mind.

Command for checking all sysctl parameters and filtering the
```net.inet.ip.forwarding``` value.

```sh
sysctl -a | grep inet.ip.forwarding
```

The output should look like this. If it's set to 0 and you swear that
it's configured properly in the configuration file. It probably isn't.
Check the configuration file to make sure.

```sh
net.inet.ip.forwarding=1
```

## Reference
---

Below are some references that can be found for when I was looking into
accomplishing this.

- [Vultr Pricing](https://www.vultr.com/pricing/)
- [WireGuard](https://www.wireguard.com/)
- [WireGuard Whitepaper](https://www.wireguard.com/papers/wireguard.pdf)
- [Self Hosted WireGuard VPN on OpenBSD](https://nox.im/posts/2021/0926/self-hosted-wireguard-vpn-on-openbsd/)
- [Wireguard On OpenBSD](https://blog.jasper.la/wireguard-on-openbsd.html)
- [toying with wireguard on openbsd](https://flak.tedunangst.com/post/toying-with-wireguard-on-openbsd)
- [wireguard](https://x61.sh/log/2022/01/20220104T122904-wireguard.html)
- [Install Wireguard VPN Server on OpenBSD 7.0](https://www.vultr.com/docs/install-wireguard-vpn-server-on-openbsd-7-0/)
- [Howto: WireGuard on OpenBSD](https://ianix.com/wireguard/openbsd-howto.html)
- [Securely tunnel smart phone traffic with WireGuard and OpenBSD](https://thomasward.com/openbsd-wireguard/)

