---
title: "subnetcalc"
date: 2025-10-14T12:06:15-06:00
lastmod: 2025-10-15
description: "Small random file path fetcher written for the command line in Go."
draft: false
tags: ["subnetcalc"]
---

## What is subnetcalc?

Command line application for calculating subnets and referencing useful
data related to networking. I usually have one of these references on
my wall just in case I forget. So, I thought I'd bring it with me
wherever on my computer.

The subnet calculator feature in this application does the following:

- Provides the network address
- Shows the broadcast address
- Shows the range of usable addresses
- Shows the CIDR notation
- Shows the subnet mask
- Displays list of subnets within the subnet provided.
- Indicates that it's a classful address
- Provides a first and last IP address in the subnet.

I have marked features that aren't finished as incomplete.

## Features:

Brief list of features this application provides are.

- Subnet calculator (not complete)
- Reference for subnet chart
- Decimal to binary reference
- Classful ranges reference
- Reserved ranges reference

## Build

### Go Version

go 1.23

### From Source

```sh
git clone https://gitprovider.com/n3s0/subnetcalc.git
```

```sh
make
```

## Usage

### Subnet Calculator

Still in the process of writing this feature.

### Reference - Subnet Chart

#### Command

```sh
subnetcalc reference --subnet-chart
```

#### Output

```sh
┌──────────────────────────────────────────────────────────┐
│ Subnet Chart                                             │
├──────┬─────────────────┬───────────────┬─────────────────┤
│ CIDR │ SUBNET MASK     │ ADDRESS       │ WILDCARD        │
├──────┼─────────────────┼───────────────┼─────────────────┤
│ /32  │ 255.255.255.255 │ 1             │ 0.0.0.0         │
│ /31  │ 255.255.255.254 │ 2             │ 0.0.0.1         │
│ /30  │ 255.255.255.252 │ 4             │ 0.0.0.3         │
│ /29  │ 255.255.255.248 │ 8             │ 0.0.0.7         │
│ /28  │ 255.255.255.240 │ 16            │ 0.0.0.15        │
│ /27  │ 255.255.255.224 │ 32            │ 0.0.0.31        │
│ /26  │ 255.255.255.192 │ 64            │ 0.0.0.63        │
│ /25  │ 255.255.255.128 │ 128           │ 0.0.0.127       │
│ /24  │ 255.255.255.0   │ 256           │ 0.0.0.255       │
│ /23  │ 255.255.254.0   │ 512           │ 0.0.1.255       │
│ /22  │ 255.255.252.0   │ 1,024         │ 0.0.3.255       │
│ /21  │ 255.255.248.0   │ 2,048         │ 0.0.7.255       │
│ /20  │ 255.255.240.0   │ 4,096         │ 0.0.15.255      │
│ /19  │ 255.255.224.0   │ 8,192         │ 0.0.31.255      │
│ /18  │ 255.255.192.0   │ 16,384        │ 0.0.63.255      │
│ /17  │ 255.255.128.0   │ 32,768        │ 0.0.127.255     │
│ /16  │ 255.255.0.0     │ 65,536        │ 0.0.255.255     │
│ /15  │ 255.254.0.0     │ 131,072       │ 0.1.255.255     │
│ /14  │ 255.252.0.0     │ 262,144       │ 0.3.255.255     │
│ /13  │ 255.248.0.0     │ 524,288       │ 0.7.255.255     │
│ /12  │ 255.240.0.0     │ 1,048,576     │ 0.15.255.255    │
│ /11  │ 255.224.0.0     │ 2,097,152     │ 0.31.255.255    │
│ /10  │ 255.192.0.0     │ 4,194,304     │ 0.63.255.255    │
│ /9   │ 255.128.0.0     │ 8,388,608     │ 0.127.255.255   │
│ /8   │ 255.0.0.0       │ 16,777,216    │ 0.255.255.255   │
│ /7   │ 254.0.0.0       │ 33,554,432    │ 1.255.255.255   │
│ /6   │ 252.0.0.0       │ 67,108,864    │ 3.255.255.255   │
│ /5   │ 248.0.0.0       │ 134,217,728   │ 7.255.255.255   │
│ /4   │ 240.0.0.0       │ 268,435,456   │ 15.255.255.255  │
│ /3   │ 224.0.0.0       │ 536,870,912   │ 31.255.255.255  │
│ /2   │ 192.0.0.0       │ 1,073,741,824 │ 63.255.255.255  │
│ /1   │ 128.0.0.0       │ 2,147,483,647 │ 127.255.255.255 │
│ /0   │ 0.0.0.0         │ 4,294,967,296 │ 255.255.255.255 │
└──────┴─────────────────┴───────────────┴─────────────────┘
```

If anyone would like to follow the progress of this project. For updates and
submitting issues. Here are some links.

<a href="https://github.com/n3s0/subnetcalc"><button style="border-radius: 8px;">Github</button></a>
<a href="https://github.com/n3s0/subnetcalc/issues"><button style="border-radius: 8px;">Issues</button></a>
<a href="/tags/subnetcalc"><button style="border-radius: 8px;">Updates</button></a>
