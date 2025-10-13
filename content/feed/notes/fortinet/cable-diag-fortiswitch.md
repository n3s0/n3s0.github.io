---
title: "FortiSwitch Cable Diagnostics"
date: 2024-10-15T01:41:27-06:00
summary: "Notes for performing cable tests on FortiSwitch ports."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: [ "netadmin"  ]
---

## Summary
---

I've found that I've been testing a lot of cables remotely lately. So, when I
see anything out of place with a connected cable on a FortiSwitch. I generally
like to test the cable to check the pairs on it.

Posting this so I don't have to search through the Google index every time I
forget.

Using this method can be pretty effective when I check for any broken pairs or
short lengths on cables.

One thing to note is that this isn't necessarily recommended if you have a
computer connected at the other end. This process will interrupt traffic for
several seconds.

All examples for this are for CLI. But, I will provide steps on how to cable 
test from the FortiSwitch GUI near the FortiSwitch section.

## Overview Of Cable Test
---

According to the documentation. Most of the commands run in this article perform
time domain reflectometry (TDR) diagnostic tests on the ports they're run on.
Which is a pretty established method for measuring cable length, determining
faults, etc.

TDR sends low voltage pulses through the cable and will see reflections in the
cable if there are any issues. It will check the time between the release and
review the low voltage from any reflections.

This can be useful if PoE switches are in utilization and if this is supported.

The following pair states are supported. 

- Open
- Short
- Ok
- Open_Short
- Unknown
- Crosstalk

If no cable is connected. It will show all pairs in an Open state with a cable
length of 0 meters.

## Managed FortiSwitch
---

With Fortilink you can use your FortiGate as a controller for your FortiSwitch.
This can be performed through the switch-controller as long as you specify the
FortiSwitches serial number and the port number. This isn't always accurate.
But, I'd say the odds of it being right are 8 our of 10.


```sh
execute switch-controller switch-action cable-diag <switch> portx
```

This will look very similar to this in the command line.

```sh
execute switch-controller switch-action cable-diag FSXXXXXXXXXXX port34
```

This will output data for the cable to the screen similar to the following. I
will provide a better example in the next example. This test is a good example
of a cable that isn't connected.

```sh
port1: cable (4 pairs, length +/- 10 meters)

pair A Open, length 0 meters
pair B Open, length 0 meters
pair C Open, length 0 meters
pair D Open, length 0 meters
```

## FortiSwitch
---

Below is how to do this on an individual FortiSwitch.

```sh
diagnose switch physical-ports cable-diag portX
```



## Reference
---

- [The Basics of Time Domain Reflectometry](https://hvtechnologies.com/the-basics-of-time-domain-reflectometry-tdr/)

