---
title: "GCP: VPC Network With Custom Subnets and Firewall Rules Using Gcloud Shell"
date: 2025-01-02T16:02:01-06:00
summary: "Notes for creating a VPC network with custom subnets using gcloud shell."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showComments: true
showPagination: true
tags: ["gcp","netadmin"]
---

## Summary
---

Some notes related to Google Cloud Platform (GCP) for setting up VPC networks. 
There is a lot to cover for GCP as a whole. But, with the right assortment of
baby steps and scenarios. I'll get it all down. Right now I just want to notate
the basics before moving to other topics because GCP is feature rich from a
networking stand-point.

In this scenario. I will be going through the setup for the following.

1. Creating a VPC network.
2. Creating a custom subnet.
3. Creating firewall rules for the network in GCP.

Below is the VPC and subnet information for these notes.

- VPC Network: labnet
    - Regional Routing
    - lab-use4-subnet1:
        - Subnet: 10.12.10.0/24
        - Region: us-east4
    - lab-usc1-subnet1
        - Subnet: 10.12.20.0/24
        - Region: us-central1

## Create VPC Network
---

The following command can be used to create a VPC network using the gcloud
command. Note that this subnet is in custom mode. Which means custom subnets
will need to be added manually. The BGP routing mode is also regional.

```sh
gcloud compute networks create labnet --subnet-mode custom
```

Below is the output from this.

```sh
NAME: labnet
SUBNET_MODE: CUSTOM
BGP_ROUTING_MODE: REGIONAL
IPV4_RANGE: 
GATEWAY_IPV4: 

Instances on this network will not be reachable until firewall rules
are created. As an example, you can allow all internal traffic between
instances as well as SSH, RDP, and ICMP by running:

$ gcloud compute firewall-rules create <FIREWALL_NAME> --network labnet --allow tcp,udp,icmp --source-ranges <IP_RANGE>
$ gcloud compute firewall-rules create <FIREWALL_NAME> --network labnet --allow tcp:22,tcp:3389,icmp
```

More networks can be created. But, right now I just want to provide a feel for
this.

## Create Subnets
---

Then the subnets need to be created. I create both with the following commands.

This will create the subnet located in the us-central1 region and tie it to
the labnet VPC network.

```sh
gcloud compute networks subnets create lab-use4-subnet1 \
    --network labnet \
    --region us-east41 \
    --range 10.12.10.0/24
```

Belwo is the output from this command.

```sh
Created [https://www.googleapis.com/compute/v1/projects/lab-project/regions/us-east4/subnetworks/lab-use4-subnet1].
NAME: lab-use4-subnet1
REGION: us-east4
NETWORK: labnet
RANGE: 10.12.10.0/24
STACK_TYPE: IPV4_ONLY
IPV6_ACCESS_TYPE: 
INTERNAL_IPV6_PREFIX: 
```

This command will create the subnet in the us-central1 region and tie it to
labnet.

```sh
gcloud compute networks subnets create lab-usc1-subnet1 \
    --network labnet \
    --region us-central1 \
    --range 10.12.20.0/24
```

Below is the output for this.

```sh
Created [https://www.googleapis.com/compute/v1/projects/lab-project/regions/us-central1/subnetworks/lab-usc1-subnet1].
NAME: lab-usc1-subnet1
REGION: us-central1
NETWORK: labnet
RANGE: 10.12.20.0/24
STACK_TYPE: IPV4_ONLY
IPV6_ACCESS_TYPE: 
INTERNAL_IPV6_PREFIX: 
```

## Create Firewall Rules
---

Now it's time to create firewall rules. When utilizing the gcloud command line
it doesn't create rules automatically like the GUI does. So, they need to be
create manually.

In this case I'm going to allow public/external IP address access via SSH and
ICMP. Then I'll allow internal access for the servers as well.

First need to enable SSH access from any IP address. Source ranges can be
changed depending on your preference. This is just an example.

```sh
gcloud compute firewall-rules create labnet-allow-ssh \
    --source-ranges 0.0.0.0/0 \
    --allow tcp:22
```

Below is the output from the command.

```sh
Creating firewall...working..Created [https://www.googleapis.com/compute/v1/projects/lab-project/global/firewalls/labnet-allow-http].                                                        
Creating firewall...done.                                                                                                                                                                                    
NAME: labnet-allow-ssh
NETWORK: labnet
DIRECTION: INGRESS
PRIORITY: 1000
ALLOW: tcp:22
DENY: 
DISABLED: False
```

Permits ICMP access from any source address.

```sh
gcloud compute firewall-rules create labnet-allow-icmp \
    --network labnet \
    --source-ranges 0.0.0.0/0 \
    --allow icmp
```

Below is the output from this command.

```sh
Creating firewall...working..Created [https://www.googleapis.com/compute/v1/projects/lab-project/global/firewalls/labnet-allow-icmp].                                                        
Creating firewall...done.                                                                                                                                                                                    
NAME: labnet-allow-icmp
NETWORK: labnet
DIRECTION: INGRESS
PRIORITY: 1000
ALLOW: icmp
DENY: 
DISABLED: False
```

The following command will allow all servers within the different ranges to
access each other on all TCP and UDP ports. Along with ICMP.

```sh
gcloud compute firewall-rules create labnet-allow-internal \
    --network labnet \
    --source-ranges 10.12.10.0/24,10.12.20.0/24 \
    --allow tcp:0-65535,udp:0-65535,icmp
```

Below is the output from this command.

```sh
Creating firewall...working..Created [https://www.googleapis.com/compute/v1/projects/lab-project/global/firewalls/labnet-allow-internal].                                                    
Creating firewall...done.                                                                                                                                                                                    
NAME: labnet-allow-internal
NETWORK: labnet
DIRECTION: INGRESS
PRIORITY: 1000
ALLOW: tcp:0-65535,udp:0-65535,icmp
DENY: 
DISABLED: False
```

## Conclusion
---

These were some notes for configuring a VPC network, subnets, and firewall rules
in the Google Cloud Platform in the gcloud shell. This is a general view of how
to setup a small skeleton of a network for GCP instances.
