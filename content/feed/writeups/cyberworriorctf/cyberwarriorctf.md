---
title: "CyberWarrior CTF"
author: "Timothy Loftus (n3s0)"
date: "2021-03-20T23:40:51-05:00"
lastmod: 2025-10-13
description: "Notes from doing the CyberWarrior CTF challenges."
tags: ["writeups", "cyberwarriorctf"]
draft: false
---

## Summary

This is my writeup of CyberWorrior CTF. This is an ongoing CTF with various 
challenges for Reversing, Forensics, Binary Exploitation, OSINT, General, 
etc. As you complete challenges, you're rewarded points and challenges 
get harder and harder as you take on more.

Below is the link to the challenge.

- [https://ctf.cyberwarrior.com/](https://ctf.cyberwarrior.com/)

I will be providing all the challenge categories provided in their own 
sections within the writeup. With that explained, let’s get started.

This writeup will be something that I do over time. Not going to go through 
all the challenges and post one massive writeup. This is going to grow 
as I work through the problems. There won’t be a specific order to this 
writeup. I will post within the categories as the challenges for them are 
completed.

## Challenges

### Forensics

#### capture_Brazil - Capture the password - 50 pts

Hey there! I captured a traffic package in an unsecured network, and it 
may have sensitive information. Analyze this capture and find the correct 
flag.

Flag Format: cwa.ctf()

Download file for this challenge: [capture_c78615cd8fe3ac8436e398f3105694a1.pcapng](https://ctf.cyberwarrior.com/data/attachment.php?id=14)

To finish this challenge, I opened the file in Wireshark and filtered out 
'telnet'. This showed all the packets that are associated with telnet. 
This provided a list of packets that consisted of Telnet traffic.

Decided to follow the TCP Stream of the first packet in that list and 
below is the output from that. I will provide a better explanation with 
some code. I've always wanted to play with the Scapy Python library. So, 
I'll work on that later and add the script to this.

```txt
..... .....'.....................

User Access Verification

Password: ....P...... ........'.......XTERM....$..$ac..........
% Password:  timeout expired!
Password: academy123

Router>eennaabbllee

Password: academy123

Router#
```

Below is the flag for this challenge:

- ```cwa.ctf(academy123)```

#### Korea (Domocratic People's Republic of)

### OSINT

#### capture_Paraguay - What is Margaret Default password ? - 50 pts

You have been assigned to review the HR Manager's access points at his 
home. He is currently using a ubiquity branded device. The first thing 
you should do is to test access with the default user and password. Try 
to find out.

Flag Format : cwa.ctf(user/pwd)

I found this flag using Google. Yup, Google. Just type the following in 
Google Search.

- Ubiquity default username and password

This provided the following credentials as the default username and password.

- Username: ubnt
- Password: ubnt

Entered the flag the same as below successfully.

- cwa.ctf(ubnt/ubnt)

### General

#### capture_Uruguay - Hexidecimal - 50 pts

What is the number 255 in hexadecimal? 

Flag Format: cwa.ctf(uppercase)

Utilized the Python hex() function to complete this challenge.

```python
>>> hex(255)
'0xff'
```

Challenge flag is below:

- ```cwa.ctf(FF)```

### CRYPTO

#### capture_Chile - What is that? - 50 pts

Your friend sent you a message saying: I came across this secret code, 
lets decode this to know what the secret encoded in this string is!! 
(The answer is without space, is like: HelloWorld)

```
MyAyNSAyIDUgMTggMjMgMSAxOCAxOCA5IDE1IDE4IDEgMyAxIDQgNSAxMyAyNSA= 
```

Flag Format: cwa.ctf( )

Little crypto magic here. Well, cipher magic. But still. Should be simple 
to script out. Though, it's a rather un-elegant script. It gets the job 
done. In a perfect world, I'd make it prettier. But I'm here to solve a 
problem.

This script below will convert the base64 string to ASCII. It will then 
take the numbers after converting them to numbers because the numbers 
are really strings. It will find the numbers position in the alphabet, 
put them in a list, and output what the flag is.

```python
"""
title: capture_Chile - What is that
author: Timothy Loftus (n3s0)
description: Your friend sent you a message saying: I came across this 
            secret code, lets decode this to know what the secret encoded 
            in this string is!!   (The answer is without space, is like: 
            HelloWorld). Cipher text will be in the variable.
file: chile.py
"""

import base64
from string import ascii_lowercase

# Variables
cipherText = "MyAyNSAyIDUgMTggMjMgMSAxOCAxOCA5IDE1IDE4IDEgMyAxIDQgNSAxMyAyNSA="

def captureChileSolution(cipher):
    """Solution for capture_Chile."""

    print("Decoding cipher text.")
    print("Beginning stage one of decoding.")

    # Decode Base64
    stageOne = base64.standard_b64decode(cipher)

    print("Stage one of decoding complete: {}".format(str(stageOne, 'UTF-8')))
    print("Beginning stage two of decoding.")
    print("Converting stage one to UTF-8.")

    stageOne = str(stageOne, 'UTF-8')

    print("Putting output from stage one into a list.")

    stageOne = list(stageOne.split(" "))

    if '' in stageOne:
        stageOne.remove('')

    print("This is the list: {}".format(stageOne))
    print("Converting items in list into integers.")

    for number in range(0, len(stageOne)):
        stageOne[number] = int(stageOne[number])

    print("Here is the new list: {}".format(stageOne))

    stageTwo = []

    for number in stageOne:
        stageTwo.append(ascii_lowercase[(number-1)])

    stageTwo = ''.join(stageTwo)

    print("The flag is: cwa.ctf({})".format(stageTwo))

captureChileSolution(cipherText)
```

Below is the output from the script. The output explains itself.

```sh
n3s0:CyberWarriorCTF/ $ python chile.py                                                                    [2:38:16]
Decoding cipher text.
Beginning stage one of decoding.
Stage one of decoding complete: 3 25 2 5 18 23 1 18 18 9 15 18 1 3 1 4 5 13 25 
Beginning stage two of decoding.
Converting stage one to UTF-8.
Putting output from stage one into a list.
This is the list: ['3', '25', '2', '5', '18', '23', '1', '18', '18', '9', '15', '18', '1', '3', '1', '4', '5', '13', '25']
Converting items in list into integers.
Here is the new list: [3, 25, 2, 5, 18, 23, 1, 18, 18, 9, 15, 18, 1, 3, 1, 4, 5, 13, 25]
The flag is: cwa.ctf(cyberwarrioracademy)
```

The flag for this challenge is: ```cwa.ctf(cyberwarrioracademy)```.
