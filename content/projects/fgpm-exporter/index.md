---
title: "fgpm-exporter"
date: 2025-10-08T15:08:15-06:00
lastmod: 2025-10-08
description: "CLI application for pulling managed FortiSwitch port mappings and configuration using the FortiGate API."
draft: false
tags: ["fgpm-exporter"]
---

## What is FortiSwitch Port Map Exporter (fgpm-exporter)?

Command line application written in Go developed to generate CSV or spreadsheets
of FortiSwitch port configuration using APIs.

Currently there is support for firewalls that utilize the FortiGate as the
switch-controller.

One thing that I would like to note is this is not a Prometheus exporter.

## Dir Structure

You can find the directory structure with explainations below.

```sh
fgpm-exporter
├── cmd
│   ├── list.go
│   ├── pull.go
│   ├── root.go
│   └── version.go
├── examples
│   └── example-config.yaml
├── go.mod
├── go.sum
├── main.go
└── README.md
```

## Clone Repository

To build this repository. Clone it to your machine using one of the following
commands.

To do this via HTTPS. The following command can be used.

```sh
git clone https://gitlab.com/n3s0/fgpm-exporter.git
```

To do this via SSH. The following command can be used.

```sh
git clone git@gitlab.com:n3s0/fgpm-exporter.git
```

## Build

I have two methods available for installing fgpm-exporter. The first is to
install it in your GOPATH BIN; which is useful if you don't want it available to
everyone on the syste. The other method is to build it and copy it to the
/usr/local/bin directory. Which can be useful if you need multiple users to use
it.

To install it in the GOPATH bin directory in your home directory.

```sh
go install
```

To build and install it in the /usr/local/bin directory...

Build the application.

```sh
go build
```

Move it to the fgpm-exporter binary to your /usr/local/bin directory.

```sh
sudo mv ./fgpm-exporter /usr/local/bin
```

### "Package manager?"

Someday. Perhaps when it has matured a little more.

## Prerequisites

Because FortiGate APIs require authentication. To do this, you will need to
generate an api-user who has the appropriate access to view switch
configuration. This will need to created on the FortiGate you intend to run the
query on. I recommend creating one with the name of the application. 

I would also recommend that you create a trustedhost.

```sh
config system api-user
    edit "fgpm-exporter"
        set accprofile "super_admin_readonly"
    next
end
```

Generate a key for the API User.

```sh
execute api-user generate-key fgpm-exporter
```

## Config File

Configuration file formatted in YAML is required. There is an exaple below.

```yaml
---
hosts:
  - name: test-fw-01
    url: https://192.168.1.1
    apikey: <API KEY HERE>
  - name: lab-fw-01
    url: https://lab-fw-01.mgmt.lab.n3s0
    apikey: <API KEY HERE>
```

Will need to create a directory named fgpm-exporter in your configuration
directory.

- ```$HOME/.config/fgpm-exporter```

The other option mentioned was to copy the example found in ```examples/```.

Create the config directory.

```sh
mkdir -p $HOME/.config/fgpm-exporter/
```

Copy the file into the configuration directory.

```sh
cp examples/example-config.yaml $HOME/.config/fgpm-exporter/config.yaml
```

## Usage

One of the main things I personally do with this CLI application is export CSV
files from the firewalls found in the configuration file.

Listing the firewalls in the configuration file is a good thing to do. Below is
the usage for the list subcommand.

```sh
List the firewall names and URLs available in the config file.

Usage:
  fgpm-exporter list [flags]

Flags:
  -a, --all     List all information, minus API keys.
  -h, --help    help for list
      --hosts   List the hosts in the configuration.
      --urls    List all urls within the configuration.

Global Flags:
      --config string   config file (default is $HOME/.config/fgpm-exporter/config.yaml)
      --verbose         show more output to the console.
```

To list the available firewalls. The following command can be used. This will is
will list all firewall hostnames and their URLs. One thing this application will
never to is list the API keys. 

```sh
fgpm-exporter list -a
```

The output can be found below.

```sh
Listing available firewalls from configuration.

━━ Firewalls List:
   ┣━ Hostname: test-fw-01
   ┃  ┗━ URL: https://192.168.1.1
   ┗━ Hostname: lab-fw-01
      ┗━ URL: https://lab-fw-01.mgmt.lab.n3s0
```

One of the key features is exporting a switch configuratio to a CSV. The usage
for the pull subcommand can be found below.

Pulls the data from the chosen FortiGate/FortiSwitch. Application only
focuses on pulling port information.

Will output to console if -o flag isn't provided. CSV will be generated in
the current directory if a full/relative path isn't provided.

```sh
Usage:
  fgpm-exporter pull [flags]

Flags:
      --csv             Indicates output file will be a CSV. Default is console.
  -f, --firewall        Connects via FortiGate API
  -h, --help            help for pull
  -n, --name string     Configuration name of the firewall data will be pulled from.
  -o, --output string   Output file for the port map

Global Flags:
      --config string   config file (default is $HOME/.config/fgpm-exporter/config.yaml)
      --verbose         show more output to the console.
```

To run the command. Look at the example below.

```sh
fgpm-exporter pull -f -n test-fw-01 -o test-switches.csv --csv
```

Below is the expected output for this.

```sh
[i] Generating CSV file...
[i] CSV file generated!
```

## CSV Format

The current CSV format can be found below. The expectation behind this is to see
all of the useful data needed to reconfigure a switch(es) in exactly the same
way as before.

```csv
Switch,Port,Status,POE Status,Fiber,Media Type,FortiGate Name,FortiGate Port,Switch Peer Name,Switch Peer Name,Native VLAN,Allowed VLANs,STP Enabled,STP Root Guard,STP BPDU Guard,Edge Port,Loop Guard,LLDP Profile
TEST-SW01,port1,up,enable,0,RJ45,,,,,Data,Voice,enabled,disabled,disabled,enable,enabled,default
TEST-SW01,port2,up,enable,0,RJ45,,,,,Data,Voice,enabled,disabled,disabled,enable,enabled,default
TEST-SW01,port3,up,enable,0,RJ45,,,,,Management,,enabled,disabled,disabled,enable,enabled,default
```

