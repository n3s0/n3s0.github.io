---
title: "Arduino Infrared Remote - MK1"
date: "2021-12-16"
classes: "wide"
draft: true
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

## Infrared (IR) Brief Overview



## NEC IR Protocol Brief Overview

All resources that have assisted with this articles explaination have been provided in the following
section of this article. I will provide no imagry in the explaination of this. Please check out
reference 1 and 2. A lot of the information in this section was taken from those two resources.

- [References](#references)

There are a couple of resources on the Internet about the NEC Infrared Protocol. Even fewer resources on
who made it. From what I've read the company that designed it is actually named NEC. The protocol has had 
a few revisions to make the available address space larger for more devices. You will see it's use in a 
lot of TVs, sound bars, VCRs, etc.

Codes or commands will be sent to the device using the protocol on it's medium and this will control its
functionality.

Using pulse distance encoding of the message bits, it will send the codes to the device.

- Pulse Burst: 562.5µs
- Carrier Frequency: 38kHz (26.3µs)

Logical bits transmitted as follows:

- Logical '0' – a 562.5µs pulse burst followed by a 562.5µs space, with a total transmit time of 1.125ms
- Logical '1' – a 562.5µs pulse burst followed by a 1.6875ms space, with a total transmit time of 2.25ms

Below is how a remote controller transmits a message.

1. A 9ms leading pulse burst (16 times the pulse burst length used for a logical data bit).
2. A 4.5ms space.
3. the 8-bit address for the receiving device.
4. the 8-bit logical inverse of the address
5. The 8-bit command
6. The 8-bit logical inverse of the command
7. A final 562.5µs (microsecond) pulse burst to signify the end of message transmission.

The four bytes of data bits are each sent least significant bit first.

Functionality like Volume Up and the like possible using repeat codes. So, if the volume up button on
the remote control were to be pressed without being released, it sends codes to the TV that indicates
that it should repeat the same code that's been provided. 40ms after the end of the message, the repeat
code will be sent to the device. This will continue in 108ms intervals until release of the key.

Repeat codes consist of the following.

1. A 9ms leading pulse burst.
2. A 2.25ms space.
3. a 562.5µs pulse burst to mark the end of the space (end of the transmitted repeat code).

## The Circuit

At the moment, the circuit is mad simple. But, it will be easier to explain how the components work with
the pictures of the circuits. I include this in the next couple of sections. The IR Emitter and IR Sensor
are components I bought from a 37 sensor bundle for a pretty good price.

### IR Emitter Circuit Parts

Parts list for the IR Emitter:

- 1x - Breadboard
- 1x - Arduino Uno
- 3x - Jumper Wires (Preferably different colors)
- 1x - HW-489 IR Emitter (A KY-005 IR Transmitter Module will do also.)

### IR Emitter Circuit Diagram

Little note here. The IR Transmitter (HW-489) I have doesn't have a Fritzing library. So, I substituted
it with a KY-005. The same function should 

This section describes the circuit diagram for the current revision of the IR Transmitter circuit. Also
explains how it's put together.

1. S (Data) on the KY-005 is connected to pin ~3 using the breadboard.
2. Positive (+) on the KY-005 is connect to the 5v pin using the breadboard.
3. Ground (-) on the KY-005 is connected to the GND pin using the breadboard.

The S (Data) pin on the KY-005 (HW-489) transmitter is the pin that sends the data over the light on
the IR transmitter. My main focus when I started this project was to just turn up the TV volume. It
will pulse the light to the IR Sensor on the TV.

<p align="center">
  <img src="{{site.url}}/assets/img/arduino-tv-remote-mk1/IRRemote-MK1-Breadboard.png">
</p>

This circuit is very simple and it serves it's purpose. As time goes on, improvements will be made.
I'll experiment with more components and maybe even swap out the Arduino with something like a Raspberry Pi
Zero or something. No idea. I have a general idea of what I want it's just going to take some time to plan/build.

Schematic has been provided below. Should that be your poison.

<p align="center">
  <img src="{{site.url}}/assets/img/arduino-tv-remote-mk1/IRRemote-MK1-Schematic.png">
</p>

### IR Sensor Circuit Parts

Parts list for the IR Sensor:

- 1x - Breadboard
- 1x - Arduino Uno
- 3x - Jumper Wires (Preferably different colors)
- 1x - HW-490 IR Sensor (KY-022 Inrared IR Sensor Reciever Module will also do the trick.)

### IR Sensor Circuit Diagram

Circuit for the IR Sensor for this version can be found below.

IMAGE OF CIRCUIT DIAGRAM GOES HERE

## References

References for this article have been placed here. This provides links to supporting articles to some
of the bits regarding how Intrared and NEC protocol works.

- [1 - SB-Projects: NEC Protocol](https://www.sbprojects.net/knowledge/ir/nec.php)
- [2 - Altium - NEC Infrared Transmission Protocol](https://techdocs.altium.com/display/FPGA/NEC+Infrared+Transmission+Protocol)
