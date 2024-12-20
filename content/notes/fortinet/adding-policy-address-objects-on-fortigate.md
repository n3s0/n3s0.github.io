---
title: "FortiGate: Adding Policy Address Objects On FortiGate"
date: 2023-07-24T13:55:09-06:00
summary: "Notes for adding FortiGate address policy objects."
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

Notes for adding an address object for policies using the CLI. This is
useful for creating objects that represent network addresses and
subnets.

First step to this is going into the address configuration prompt using
the following command in a console session.

```sh
config firewall address
```

Create the new address or edit an existing address by using the edit
command in the prompt. This will automatically create a uuid for the new
address.

```sh
edit "tl-app-01"
```

Now that the base is created. We can start adding everything else. For
simplicity. I'll display this for one address. In this case we'll want
to do the following.

1. Set the associated interface to be port1.
2. Configure the subnet address. In this case we'll want the subnet to
   be a /24. This tells the FortiGate that it's a single address.

The show command for the interface should show the following
configuration. This doesn't have to be entered exactly. After creating a
new firewall address it will generate the uuid for it automatically. So
you don't have to add that portion.

```sh
config firewall address
    edit "tl-app-01"
        set uuid 08766018-1501-51fc-80e2-103ca3clakdj
        set associated-interface "port1"
        set subnet 172.16.172.10 255.255.255.255
    next
end
```

Some other things to note. There are address types that can or need to
be assigned to firewall addresses objects.

- subnet: This is generally the default. It refers to a network subnet
  or a single network address.
- fqdn: Accepted Fully Qualified Domain Name. The address string is
  resolved to one or more IP addresses. Relies on DNS to keep the
  address updated.

These can be set by entering a set command in the prompt for the
address. This command can be found below.

```sh
set type fqdn
```

There are others that can be used. But, these are the ones I've used the
most. I will provide a reference for more information.

## Reference

[Fortinet Fortigate / FortiOS 7.4.0](https://docs.fortinet.com/document/fortigate/7.4.0/administration-guide/214805/address-objects)
