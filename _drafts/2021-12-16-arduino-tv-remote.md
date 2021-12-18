---
title: "Arduino TV Remote - v0"
date: "2021-12-16"
classes: "wide"
excerpt: "I talk about some fun I had with Arduino and a Vizio TV I didn't have a remote for. Possible multi-part."
categories:
- "arduino"
- "c"
tags:
- "arduino"
- "c"
- "irremote"
- "openbsd"
- "avrdude"
---

## Overview

Title says it all. Here I discuss a project that came about because I got a TV that didn't have a
remote. It is a fun, small project. The Vizio TV; a Vizio D32h-C0, I received didn't come with a 
remote and the volume on it was low. I didn't really want to buy a universal remote because where's 
the fun in that? Plus, not doing so saved me about 10.00 USD because all the components were already 
available to me.

I've merely just started playing with Arduino in my spare time. But, a little research on the Internet
led me in the direction of the Arduino library IRremote. Which is a IR library that has support for
Sony TVs, Samsung TVs, NEC, etc. Luckily, my (MODEL OF TV) supports NEC. There is currently no official
support for it in the library because both the TV and the library already supports NEC. You just have
to find the NEC codes or find a Vizio remote that sends the codes and capture them. To do this you use
an IR Sensor and record the codes for the TV. When you don't have a remote, the option becomes either
borrow one or find the codes online. I found the codes I needed online. But, eventually I'll record the
NEC codes from the TV remote and document them.

I'll also provide links to the circuit image for viewing. I'll also provide the materials list so others
can do this too. The circuit right now is very simple. It's only purpose is to transmit or receive data
depending on what weather an IR emitter or sensor is being used. Personally, I merely see this as a starting
point. Down the road I may craft a remote of my own. Improve it as time goes on. Learn a little more and more.
IR is still relevant. So learning how it works has its use.

## Code Repository

Provided below is my code repository of the Arduino sketch. For now, this utilizes the IRremote library to
transmit and receive the NEC codes. This has support for a lot of TVs. This includes Samsung, Sony Apple,
Panasonic, LG, and more. One of the big highlights of this Arduino library is it's support for NEC. It's
wonderful and I hope to read more of the source for it and learn more about how it's built.

Below are a few links should interest arise in utilizing the library for other projects.

- [Arduino - IRremote](https://www.arduino.cc/reference/en/libraries/irremote/)
- [Arduino-IRremote/Arduino-IRremote](https://github.com/Arduino-IRremote/Arduino-IRremote)

Eventually, I'd like to learn enough about how to program IR to develop my own library for it. But, more
research is required before I do so. Not to mention, more research the C programming language en general.
But, enough of my rambling. Below is the source code repository for the project.

- [n3s0/arduino-remote](https://github.com/n3s0/arduino-remote)

If you go to the source code repository, I discuss how to compile and upload the sketch to the board.
So far this has been tested on an Arduino Uno. Just to work out the problem and solve it with haste.

## Arduino Programming Environment

My daily driver is OpenBSD on an HP EliteBook 840 G5. So, I've been using the arduino-makefile and avrdude 
if I'm developing for Arduino. I have an article on my other site that discusses how I set that up. I will
provide it below.

- [OpenBSD Arduino Development Environment]()

## The Circuit

At the moment, the circuit is mad simple. But, it will be easier to explain how the components work with
the pictures of the circuits. I include this in the next couple of sections. The IR Emitter and IR Sensor
are components I bought from a 37 sensor bundle for a pretty good price.

### IR Emitter Circuit Parts

Parts list for the IR Emitter:

- 1x - Breadboard
- 1x - Arduino Uno
- 3x - Jumper Wires (Preferably different colors)
- 1x - HW-489 IR Emitter

### IR Emitter Circuit Diagram

This section describes the circuit diagram for the current revision of the IR Emitter circuit. This is used 
to send the codes to the IR Sensor in the TV after the code is compiled and uploaded to the Arduino Uno.

IMAGE OF CIRCUIT DIAGRAM GOES HERE

This circuit is very simple and it serves it's purpose. As time goes on, I will make improvements for it.
I'll experiment with more components and maybe even swap out the Arduino with something like a Raspberry Pi
Zero or something. No idea. I have a general idea of what I want it's just going to take some time to build.

### IR Sensor Circuit Parts

Parts list for the IR Sensor:

- 1x - Breadboard
- 1x - Arduino Uno
- 3x - Jumper Wires (Preferably different colors)
- 1x - HW-490 IR Sensor

### IR Sensor Circuit Diagram

Circuit for the IR Sensor for this version can be found below.

IMAGE OF CIRCUIT DIAGRAM GOES HERE

## Infrared (IR) Brief Overview



## NEC IR Protocol Brief Overview




