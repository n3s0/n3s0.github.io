---
title: "SANs Holiday Hack Challenge 2024: Snow-maggedon"
author: "Timothy Loftus (n3s0)"
date: 2025-10-25T00:38:40-06:00
lastmod: 2025-10-28
summary: "Writeup from what I've completed for SANs Holiday Hack Challenge 2024: Snow-maggedon."
draft: false
---

> Note: This document is incomplete and will be updated periodically as I finish
> and explain more about the challenges as they're completed. 

## Overview

I've always enjoyed playing these. But, I never get around to playing them when
they're in progress. I wish I started this one sooner. But, there is no time
like the present.

This is my writeup for the SANs Holiday Hack Challenge that finished up in 2024.
SANs Holiday Hack Challenge is an annual; gamified, challenge provided by SANs
Institute and Counter Hack to educate all walks of life on information security.

With every challenge I'll provide the initial dialog from the elf next to it,
discuss the problem, and provide the solution or even some of the twists and
turns taken to come to a solution.

Hints rewarded for future challenges or hints that aid with the current
challenge will be provided under the header for the challenge.

> Since SANs 2025 Holiday Hack Challenge will be up and coming in a couple
> of months. I decided to work through SANs Holiday Hack Challenge 2024 to 
> see how far I get.

## SANs Introduction

> Welcome to the 2024 SANS Holiday Hack Challenge: Snow-maggeddon!
> 
> Greetings, holiday travelers! Welcome to the 2024 SANS Holiday Hack Challenge.
> 
> As you explore Christmas Island and the North Pole, make sure you stop by the 
> elf Jingle Ringford along the way. He’ll give you your orientation and snowball 
> badge. Your snowball badge on the center of your avatar will be populated with 
> a series of objectives for the Holiday Hack Challenge. Just click on your badge 
> to see your objectives and more.
> 
> Also, please do keep an eye on your badge for updates on the narrative and 
> various happenings around Christmas Island and the North Pole during the event!
> 
> Here are some tips to get you exploring:
>
> - Bounce around the environment using the mouse or the arrow keys.
> - Enter doors by using the up arrow key.
> - Pick up items by stepping on them.
> - Join us on Discord!
> - Use the Settings button to adjust the volume of the music, sound effects, 
>   ambient noise, and elf dialog.
> - Use the menu at the top right to access your profile and edit your avatar, 
>   log out, or mute the music (who would ever want to do that?!?!).
> - Have fun!
> 
> — **The Counter Hack Crew and SANS Institute**

## Prologue

The prologue goes through a few Cranberry Pi terminals to get us warmed up to
the challenges. These challenges are located on ```Frosty's Beach```.

> Welcome back to the Geese Islands! Let's help the elves pack up to return to 
> the North Pole.
> 
> Talk to Jingle, Angel, and Poinsettia about their challenges.

### Holiday Hack Orientation (First Terminal)

> Welcome to the Geese Islands and the 2023 SANS Holiday Hack Challenge!
>
> I'm Jingle Ringford, one of Santa's many elves.
>
> ...
> 
> Just kidding! It's actually the 2024 SANS Holiday Hack Challenge!
> 
> And although we're on Frosty's Beach on Christmas Island, we'll soon be on 
> our way back to the North Pole.
> 
> I thought it best to wait here for people that heard we're on the Geese 
> Islands but may not know we're leaving.
> 
> I haven't seen Santa since we started packing up, but he always asks me to 
> give a quick orientation to newcomers, so I'm continuing the tradition.
>
> Before you head out any further onto the island, you need to accomplish two 
> simple tasks.
>
> -- **Jingle Ringford**

This challenge is simple. When you click on the terminal named "First Terminal"
it prompts you to type and answer in the answer prompt. Something of an
initiation into the Cranberry Pi challenges.

### Solution

Solution is to type the word ```answer``` into the answer prompt.

```txt
answer
```

Below is the response provided by Jingle Ringford once the challenge is
completed.

> You're a natural! Something new this year you may not know is that all challenges 
> have an easy and hard mode. There's also story mode, if you want to skip the 
> challenges and watch how our holiday season's adventure unfolds!
>
> Your snowball will reflect how you've solved the challenges with the bronze, 
> silver, and gold trophies.
>
> Well, that's it, now you're orientated! Feel free to get yourself settled in, 
> establish a cohort with others, or just explore this lovely island. Just be 
> careful where you walk as we are moving around some pretty heavy crates.
>
> Oh, while we're preparing everything to set sail for the North Pole, I heard 
> Poinsettia McMittens and Angel Candysalt could use some assistance. I'm sure 
> they'll appreciate any help you can provide!
>
> We'll let you know when the boat leaves, but for now relax, enjoy the sun, and 
> most importantly, have FUN!
>
> -- **Jingle Ringford**

### Elf Connect

There are two phases of this terminal. One is beating the Elf Connect game and
the other is finding a way to beat the high score. Which is almost impossible to
do. Almost.

> Welcome back, island adventurer! I'm Angel Candysalt — so happy to finally meet 
> you!
> 
> I'm thrilled you're here because I could really use a hand with something.
> 
> Have you ever heard of a game called Connections?
> 
> It’s simple! All you need to do is find groups of four related words.
> 
> I've been stuck on it all day, and I'm sure someone as sharp as you will breeze 
> through it.
> 
> Oh, and while you're at it, check out randomElf's score — they hit fifty 
> thousand points, which seems… oddly suspicious.
> 
> Think they might have tampered with the game? Just a hunch!
>
> -- **Angel Candysalt**

{{< image src="elf_connect.png" alt="Elf connect initial screen" position="center" caption="Elf Connect" style="border-radius: 8px;" >}}

This is a category matching game named Elf Connect and Angel Candysalt is
suspicuious about ```randomElf``` and their high score in Elf Connect.

Something that I found while I was browsing the code was a link to the Elf
Connect game. It was useful to have this without the small Cranberry Pi terminal
screen.

- [Elf Connect (hh24-elfconnect)](https://hhc24-elfconnect.holidayhackchallenge.com/)

With all that being said. Time to get started with this challenge.

### Solution (Silver)

Some hints that are provided related to this challenge.

> Elf Connect Easy
>
> From: Angel Candysalt
>
> Terminal: Elf Connect
>
> I love brain games! This one is like the New York Times Connections game. Your 
> goal here is to find groups of items that share something in common. Think of 
> each group as having a hidden connection or theme—four items belong together, 
> and there are multiple groups to find! See if you can spot patterns or common 
> threads to make connections. Group all the items correctly to win!

I completed the game initially by matchng the correct cards to their respective
categories. This provides a "silver" acheivemnt when the challenge has been
completed

There is actually a better approach to this. There is a ```<script>``` element that
contains client-side JavaScript for the game.

Initially I attempted to change the value for the updated score to see if I
could beat the high score. But, that did not work. It just added 100 points. So
that's out.

Below is the non-working update. Originally it was 100.

```js
score += 50000;
```

But, if you were to look at the word sets. It provides them for the four levels
in an array.

```js
const wordSets = {
    1: ["Tinsel", "Sleigh", "Belafonte", "Bag", "Comet", "Garland", "Jingle Bells", "Mittens", "Vixen", "Gifts", "Star", "Crosby", "White Christmas", "Prancer", "Lights", "Blitzen"],
    2: ["Nmap", "burp", "Frida", "OWASP Zap", "Metasploit", "netcat", "Cycript", "Nikto", "Cobalt Strike", "wfuzz", "Wireshark", "AppMon", "apktool", "HAVOC", "Nessus", "Empire"],
    3: ["AES", "WEP", "Symmetric", "WPA2", "Caesar", "RSA", "Asymmetric", "TKIP", "One-time Pad", "LEAP", "Blowfish", "hash", "hybrid", "Ottendorf", "3DES", "Scytale"],
    4: ["IGMP", "TLS", "Ethernet", "SSL", "HTTP", "IPX", "PPP", "IPSec", "FTP", "SSH", "IP", "IEEE 802.11", "ARP", "SMTP", "ICMP", "DNS"]
};
```

There is a nested array of indexes for each set in a round.

```js
let correctSets = [
    [0, 5, 10, 14], // Set 1
    [1, 3, 7, 9],   // Set 2
    [2, 6, 11, 12], // Set 3
    [4, 8, 13, 15]  // Set 4
];
```

When you connect the dots for each set in each round it looks like you get the
answers for each round.

- **Round 1:** 
    - 0: Tinsel, 5: Garland, 10: Star, and 14: Lights
    - 1: Sleigh, 3: Bag, 7: Mittens, and 9: Gifts
    - 2: Belafonte, 6: Jingle Bells, 11: Crosby, and 12: White Christmas
    - 4: Comet, 8: Vixen, 13: Prancer, and 15: Blitzen
- **Round 2:** 
    - 0: Nmap, 5: netcat, 10: Wireshark, and 14: Nessus
    - 1: burp, 3: OWASP Zap, 7: nikto, and 9: wfuzz
    - 2: Frida, 6: Cycript, 11: AppMon, and 12: apktool
    - 4: Metasploit, 8: Cobalt Strike, 13: HAVOC, and 15: Empire
- **Round 3:** 
    - 0: AES, 5: RSA, 10: Blowfish, and 14: 3DES
    - 1: WEP, 3: WPA2, 7: TKIP, and 9: LEAP
    - 2: Symmetric, 6: Asymmetric, 11: hash, and 12: hybrid
    - 4: Caesar, 8: One-time Pad, 13: Ottendorf, and 15: Scytale
- **Round 4:** 
    - 0: IGMP, 5: IPX, 10: IP, and 14: ICMP
    - 1: TLS, 3: SSL, 7: IPSec, and 9: SSH
    - 2: Ethernet, 6: PPP, 11: IEEE 802.11, and 12: ARP
    - 4: HTTP, 8: FTP, 13: SMTP, and 15: DNS

I played the game using the lists above and completed the game with no issue.

### Solution (Gold)

After finishing the Elf Connect game. Angel Candysalt provides this dialog. I
wasn't so sure as to what it was hinting at.

> If you want a more difficult challenge, try beating randomElf's score.
> 
> -- **Angel Candysalt**

There is also a hint provided by Angel Candysalt related to the Gold/Hard part
of the Elf Connect challenge. It's hinting that we should look at the HTML and
client-side JavaScript for the Elf Connect game using our browser's developer
tools console.

> Elf Connect Hard
>
> From: Angel Candysalt
>
> Terminal: Elf Connect
>
> WOW! A high score of 50,000 points! That’s way beyond the limit! With only 
> four rounds and a max of 400 points per round, the top possible score should 
> be 1,600 points. So, how did someone get to 50,000? Something unusual must be 
> happening!
> 
> If you're curious, you might want to check under the hood. Try opening the 
> browser's developer tools console and looking around—there might even be a 
> variable named 'score' that could give you some insights. Sometimes, games 
> hold secrets for those who dig a little deeper. Give it a shot and see what 
> you can discover!

Started by looking through the code and it looks like there is a
```submitAction``` function that sends a post request to the URL to submit the
answer. Although I'm not seeing anything major here because I'm not very
familiar with JavaScript. Knowing what this function does could possibly help me
in the future.

```js
async function submitAction(answer) {
    //const urlParams = new URLSearchParams(window.location.search);
    //const id = urlParams.get('id');
    //localStorage.setItem('id', id);
    let id = localStorage.getItem('id');
    if (!id) {
        alert('No ID found in localstorage so we could not submit your results');
    }
    const url = `/submit?id=${id}`;
    const data = { answer: answer }; // Send the answer as a JSON object

    //Original
    //const url = '/submit';
    //const data = { answer: answer };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
            return true;
        } else {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
```

In the function ```gameStatus``` it will run this function with a 1 and output 
"Success! You have defeated the Elf Connect!!!". So this must be what we see if 
we comlete all four rounds when the status of the game is checked.

```js
function gameStatus() {
    //console.log(roundComplete);
    if (roundComplete < 4) {
        emitter.explode(20);
        displaySuccessMessage('Round ' + roundComplete + ' Completed', function () {
            this.sessionStorage.setItem('score', score);
            this.sessionStorage.setItem('roundComplete', roundComplete);
            window.location.href = `${window.location.origin}${window.location.pathname}?round=${roundComplete + 1}`;
        });
    } else {
        emitter.explode(20);
        submitAction(1);
        displaySuccessMessage.call(this, 'Success! You have defeated the Elf Connect!!!!');
    }

}
```

There is another function named checkSelectedSet that checks that the current
set is correct. Basically, if it's correct. It checks the score. If the score is
greater then the highest score; which is 50,000, it runs ```submitAction``` with
a 2 and it displays a success message stating "Elf Connect Complete and
Hacked!".

```js
function checkSelectedSet(scene) {
    let selectedIndices = selectedBoxes.map(box => box.index);
    selectedIndices.sort((a, b) => a - b);

    let isCorrectSet = false;
    let matchedSetIndex = -1;

    for (let i = 0; i < correctSets.length; i++) {
        if (JSON.stringify(selectedIndices) === JSON.stringify(correctSets[i])) {
            isCorrectSet = true;
            matchedSetIndex = i;
            break;
        }
    }

    if (isCorrectSet) {
        completedSets.push(matchedSetIndex);
        positionCompletedSets();
        disableCompletedSet(matchedSetIndex); // Disable interaction on the completed set
        shuffleRemainingRows();

        // Update score by 100 points
        score += 100;
        scoreText.setText('Score: ' + score);

        // Add high-score board
        if (score > 50000) {
            highScoreText.setText('High Score: ' + score);
            emitter.explode(20);
            submitAction(2);
            displaySuccessMessage('Great Job Hacker! Elf Connect Complete and Hacked!', function () {

            });
        }

        // If all sets are completed, trigger the fireworks effect
        if (completedSets.length === 4) {
            roundComplete++;
            scene.sound.play('horaay');
            gameStatus();
        } else {
            scene.sound.play('ding');
        }
    } else {
        selectedBoxes.forEach(box => {
            //box.setStyle({ backgroundColor: '#0a7e28' }); // card color unselected original
            box.setStyle({ backgroundColor: '#10ca40' }); // card color unselected
            box.selected = false;
        });
        scene.sound.play('bzzzt');
    }

    selectedBoxes = [];
}
```

Decided to see if this would work in the the developers console. So I opened it
up and ran the ```submitAction``` function in the developer console.

```js
submitAction(2)
```

Once that was ran. The gold acheivement was given and Angel Candysalt provided
the following response.

> Amazing! You really connected all the dots like a pro.
>
> -- **Angel Candysalt**

## The Goose of Christmas Island

This part of Frosty's Beach was ammusing.

> HONK! HONK!
>
> -- **Goose of Christmas Island**

## Elf Minder 9000

> Center your mind, and become one with the island!
>
> Relax...
>
> This isn't working! I'm trying to play this game but the whole "moving back 
> to the North Pole" thing completely threw me off.
>
> Say, how about you give it a try. It's really simple. All you need to do is 
> help the elf get to the exit.
>
> The faster you get there, the better your score!
>
> I've run into some weirdness with the springs though. If I had created this 
> game it would've been a lot more stable, but I won't comment on that any 
> further.
>
> -- **Poinsettia McMittens**

I haven't completed this challenge yet. Stay tuned for some more...

## Act I

### cURLing

> Well hello there! I'm Bow Ninecandle, bright as a twinkling star! Everyone's 
> busy unpacking, but I've grown quite bored of that. Care to join me for a 
> lovely game?
>
> Oh Joy! Today, We're diving into something delightful: the curling 
> challenge—without any ice, but plenty of sparkle!
>
> No icy brooms here though! We're all about Curl, sending web requests from the 
> command line like magic messages.
>
> So, have you ever wielded Curl before? If not, no worries at all, my friend!
>
> It's this clever little tool that lets you whisper directly to web servers. 
> Pretty neat, right?
>
> Think of it like sending secret scrolls through the interwebs, awaiting a wise 
> reply!
> 
> To begin, you can type something like curl https://example.com. Voilà! The HTML 
> of the page appears, like conjuring a spell!
>
> Simple enough, huh? But oh, there's a whole world of magic you can cast with 
> Curl!
> 
> We're just brushing the surface here, but trust me—it’s a hoot and a half!
>
> If you get tangled up or need help, just give me a shout! I’m here to help you 
> ace this curling spectacle.
>
> So, are you ready to curl those web requests like a pro? Let’s see your magic 
> unfold!
>
> -- **Bow Ninecanle**

Provided are the hints provided by Bow Ninecandle related to the cURLing
challenge.

This one discusses taking a look at the `--path-as-is` option in curl(1).

> cURL: Don't squash
>
> From: Bow Ninecandle
>
> Terminal: cURLing
> 
> Take a look at cURL's "--path-as-is" option; it controls a default behavior 
> that you may not expect!

This one provides a link to the curl(1) manual page.

> cURL Manual
>
> From: Bow Ninecandle
>
> Terminal: cURLing
>
> The official [cURL man page](https://curl.se/docs/manpage.html) has tons of 
> useful information on how to use cURL.

### Solution (Silver)

```sh
Welcome to Curling Fun!  We will learn some basic curl commands while playing a round of curling.
```

```sh
Are you ready to begin? [y]es: 
```

```sh
1) Unlike the defined standards of a curling sheet, embedded devices often have web servers 
on non-standard ports.  Use curl to retrieve the web page on host "curlingfun" port 8080.
If you need help, run the 'hint' command.
```

```sh
curl "curlingfun:8080"
```

```sh
You have successfully accessed the site on port 8080!

If you need help, please remember to run "hint" for a hint!
```

```sh
2) Embedded devices often use self-signed certificates, where your browser will not trust the 
certificate presented.  Use curl to retrieve the TLS-protected web page at https://curlingfun:9090/
```

```sh
curl https://curlingfun:9090
```

```sh
curl: (60) SSL certificate problem: self-signed certificate
More details here: https://curl.se/docs/sslcerts.html

curl failed to verify the legitimacy of the server and therefore could not
establish a secure connection to it. To learn more about this situation and
how to fix it, please visit the web page mentioned above.
```

```sh
curl --insecure https://curlingfun:9090
```

```sh
You have successfully bypassed the self-signed certificate warning!
Subsequent requests will continue to require "--insecure", or "-k" for short.

If you need help, please remember to run "hint" for a hint!
```

```sh
3) Working with APIs and embedded devices often requires making HTTP POST requests. Use curl to 
send a request to https://curlingfun:9090/ with the parameter "skip" set to the value "alabaster", 
declaring Alabaster as the team captain.
```

```sh
curl -X POST -d "skip=alabaster" -k https://curlingfun:9090/
```

```sh
You have successfully made a POST request!
```

```sh
4) Working with APIs and embedded devices often requires maintaining session state by passing a 
cookie.  Use curl to send a request to https://curlingfun:9090/ with a cookie called "end" with the 
value "3", indicating we're on the third end of the curling match.
```

```sh
curl --cookie "end=3" -k https://curlingfun:9090/
```

```sh
You have successfully set a cookie!
```

```sh
5) Working with APIs and embedded devices sometimes requires working with raw HTTP headers. 
Use curl to view the HTTP headers returned by a request to https://curlingfun:9090/
```

```sh
curl -v -k https://curlingfun:9090
```

```sh
> GET / HTTP/1.1
> Host: curlingfun:9090
> User-Agent: curl/7.81.0
> Accept: */*
> 
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* old SSL session ID is stale, removing
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Server: nginx/1.18.0 (Ubuntu)
< Date: Mon, 27 Oct 2025 05:37:27 GMT
< Content-Type: text/plain;charset=UTF-8
< Transfer-Encoding: chunked
< Connection: keep-alive
< Custom-Header: You have found the custom header!
< 
```

```sh
curl -k -I https://curlingfun:9090
```

```sh
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 27 Oct 2025 05:49:36 GMT
Content-Type: text/plain;charset=UTF-8
Connection: keep-alive
Custom-Header: You have found the custom header!
```

```sh
6) Working with APIs and embedded devices sometimes requires working with custom HTTP headers.  
Use curl to send a request to https://curlingfun:9090/ with an HTTP header called "Stone" and 
the value "Granite".
```

```sh
curl -X POST -H "Stone: Granite" -k https://curlingfun:9090/
```

```sh
You have successfully set a custom HTTP header!
```

```sh
7) curl will modify your URL unless you tell it not to.  For example, use curl to retrieve the 
following URL containing special characters: https://curlingfun:9090/../../etc/hacks
```

```sh
curl -k -X GET --path-as-is "https://curlingfun:9090/../../etc/hacks"
```

```sh
You have successfully utilized --path-as-is to send a raw path!
```

```sh
Great work! 
 
Once HHC grants your achievement, you may close this terminal.
```

> Bravo! Look at you, curling through that like a true web wizard!
>
> You zipped through that challenge faster than a curling stone on enchanted ice!
> 
> -- **Bow Ninecandle**

### Solution (Gold)

> You know... rumor has it you can breeze through this with just three commands. 
> Why don’t you give it a whirl?
>
> -- **Bow Ninecandle**

```sh
ls
```

```sh
HARD-MODE.txt  HELP
```

```sh
cat HARD-MODE.txt 
```

```sh
Prefer to skip ahead without guidance?  Use curl to craft a request meeting these requirements:

- HTTP POST request to https://curlingfun:9090/
- Parameter "skip" set to "bow"
- Cookie "end" set to "10"
- Header "Hack" set to "12ft"
```
```sh
curl -X POST -k -d "skip=bow" --cookie "end=10" -H "Hack: 12ft" https://curlingfun:9090
```

```sh
Excellent!  Now, use curl to access this URL: https://curlingfun:9090/../../etc/button
```

```sh
curl -k --path-as-is "https://curlingfun:9090/../../etc/button"
```


```sh
Great!  Finally, use curl to access the page that this URL redirects to: https://curlingfun:9090/GoodSportsmanship
```

```sh
curl -k -L https://curlingfun:9090/GoodSportsmanship
```

```sh
Excellent work, you have solved hard mode!  You may close this terminal once HHC grants your achievement.
```

> Wait... did you just slice and dice it all into three commands? My stars, 
> you're a Curling conjurer!
>
> -- **Bow Ninecandle**

## Frosty Keypad

> Hello again! I'm Morcel Nougat, dashing around like a reindeer on a sugar 
> rush! We've got a bit of a dilemma, and I could really use your expertise.
>
> Wombley and Alabaster have taken charge now that Santa’s gone missing, and 
> We're scrambling to get the Wish List secured. But... one of the elves in the 
> Data Management Team got overzealous, and the Shredder McShreddin 9000 
> gobbled up a crucial document we need to access Santa's chest!
> 
> It’s our golden ticket to getting Santa’s Little Helper tool working properly. 
> Without it, the hardware hack we're planning is as empty as Santa’s sleigh in 
> January.
> 
> Think you can help? I can get you into the Shredder McShreddin 9000’s inner 
> workings to retrieve the pieces, but there are two access codes involved. One 
> of the elves left a hint, but it’s all a blur to me!
> 
> I've noticed that some elves keep referring to a certain book when they walk 
> by. I bet it has the answers we need to crack the code and recover the 
> document!
> 
> You know, some of the elves always have their noses in the same book when 
> they pass by here. Maybe it’s got the clues we need to crack the code?
> 
> -- **Morcel Nougat**

When you look through dev tools you can see the URL. I've provided the Frosty
Keypad game below so it's easier to sift through.

- [Frosty Keypad](https://hhc24-frostykeypad.holidayhackchallenge.com/?&challenge=termFrostyKeypad)

**Hints:**

> Shine Some Light on It
> 
> From: Morcel Nougat
> 
> Terminal: Frosty Keypad
>
> Well this is puzzling. I wonder if Santa has a seperate code. Bet that would 
> cast some light on the problem. I know this is a stretch...but...what if you 
> had one of those fancy UV lights to look at the fingerprints on the keypad? 
> That might at least limit the possible digits being used...

> Just Some Light Reading
> 
> From: Morcel Nougat
> 
> Terminal: Frosty Keypad

> See if you can find a copy of that book everyone seems to be reading these 
> days. I thought I saw somebody drop one close by...

> Who Are You Calling a Dorf?
> 
> From: Morcel Nougat
> 
> Terminal: Frosty Keypad
> 
> Hmmmm. I know I have seen Santa and the other elves use this keypad. I wonder 
> what it contains. I bet whatever is in there is a National Treasure!

Found the frosty book. URL is below.

- [The Frosty Book](https://frost-y-book.com/)

## Hardware Hacking 101 Part 1

> Hello there! I’m Jewel Loggins.
> 
> I hate to trouble you, but I really need some help. Santa’s Little Helper tool 
> isn’t working, and normally, Santa takes care of this… but with him missing, 
> it’s all on me.
> 
> I need to connect to the UART interface to get things running, but it’s like 
> the device just refuses to respond every time I try.
> 
> I've got all the right tools, but I must be overlooking something important. 
> I've seen a few elves with similar setups, but everyone’s so busy preparing 
> for Santa’s absence.
> 
> If you could guide me through the connection process, I’d be beyond grateful. 
> It’s critical because this interface controls access to our North Pole access 
> cards!
> 
> We used to have a note with the serial settings, but apparently, one of 
> Wombley’s elves shredded it! You might want to check with Morcel Nougat—he 
> might have a way to recover it.
>
> -- **Jewel Loggins (Front Yard (Act I))**

**Hints:**

> Shredded to Pieces
>
> From: Jewel Loggins
> 
> Terminal: Hardware Part 1
> 
> Have you ever wondered how elves manage to dispose of their sensitive documents? 
> Turns out, they use this fancy shredder that is quite the marvel of engineering. 
> It slices, it dices, it makes the paper practically disintegrate into a thousand 
> tiny pieces. Perhaps, just perhaps, we could reassemble the pieces?

### Solution (Silver)

Connected the wires

- Baud: 115200
- Parity: EVEN
- Data (bits): 7
- Stop Bits: 1
- Flow Control: RTS

> Fantastic! You managed to connect to the UART interface—great work with those 
> tricky wires! I couldn't figure it out myself…
>
> -- **Jewel Loggins (Front Yard (Act I))**

### Solution (Gold)

I loved this challange! It took some time for me to read through the code and
dust off Burp Suite. But, it was a blast! I normally don't seek the opportunity
to read through client-side JavaScript. So connecting the dots made it a rather
run puzzle to solve.

> Rumor has it you might be able to bypass the hardware altogether for the gold 
> medal. Why not see if you can find that shortcut?
>
> -- **Jewel Loggins (Front Yard (Act I))**

I read the code for the `main.js` file and found a few tidbits that seemed
useful. There are some constants that contain arrays of the information needed
to solve the challenge.

```js
// PDA Screen Text Stuff
const baudRates = [300, 1200, 2400, 4800, 9600, 14400, 19200, 38400, 57600, 115200];
const dataBits = [5, 6, 7, 8];
const parityOptions = ["None", "odd", "even"];
const stopBits = [1, 2];
const flowControlOptions = ["None", "RTS/CTS", "Xon/Xoff", "RTS"];
const ports = ["COM1", "COM2", "COM3", "USB0"];
```

Reading through the `checkCondtions` method helped me understand how the
`checkit` function expects the *serial* array to be constructed. When the
settings are correct in the UART it starts up. But, if the voltage is at 5 it
creates too much heat.

```js
// Method to check the conditions
async checkConditions() {

    if (this.uV === 3 && this.allConnectedUp && !this.usbIsAtOriginalPosition || this.dev) {
        // console.log("PARTY TIME");
        let checkIt = await checkit([this.currentPortIndex, this.currentBaudIndex, this.currentParityIndex, this.currentDataIndex, this.currentStopBitsIndex, this.currentFlowControlIndex], this.uV)
        if (checkIt) {
            this.popup("success! loading bootloader...\nGo speak with Jewel Loggins for the next step!");
            this.yippee.play();
        } else {
            this.merp.play();
            this.popup("Serial connection couldn't be established...\nPlease check your settings and try again.");
        }

        // window.open('https://www.anotherexample.com', '_blank'); // Replace with your desired URL
        return true;
    } else {
        if (this.uV === 5 && this.allConnectedUp && !this.usbIsAtOriginalPosition) {
            const smoked = this.children.getByName('smoked');
            smoked.start();
            this.playAudioForDuration(this.smokey, 3000);
            this.time.delayedCall(3000, () => smoked.stop(), [], this);
        }
        // Power on fail phrases
        const tryagainphrases = [
            "Level incomplete! Keep playing!",
            "Insert coin to continue your quest!",
            "Continue? Time's running out!",
            "You haven't beaten the high score yet!",
            "Mission not accomplished! Retry?",
            "Game over? Not yet, give it another shot!",
            "The Force is not yet strong with this one.",
            ...
        ];
        const tryagain = tryagainphrases[Math.floor(Math.random() * tryagainphrases.length)]
        console.log(`The Machine: "${tryagain}"`);

        // const voltage = vtoggle ? vtoggle.vol : "vtoggle not found";
        console.log(`Voltage: ${this.uV}, Wires Connected: ${this.allConnectedUp}, Power: False`);
        return false;
    }
}
```

The `checkit` function sends a post request with the user's request ID, the
index array for the serial config, and the voltage needed for powering
everything up.

There are some comments for the API discussing some issues where some elves
deviced to brute-force through v1 of the API. So they updated it to v2 and v1
**should** no longer be in production.


```js
async function checkit(serial, uV) {
  // Retrieve the request ID from the URL query parameters
  const requestID = getResourceID(); // Replace 'paramName' with the actual parameter name you want to retrieve

  if (!requestID) {
    requestID = "00000000-0000-0000-0000-000000000000";
  }

  // Build the URL with the request ID as a query parameter
  // Word on the wire is that some resourceful elves managed to brute-force their way in through the v1 API.
  // We have since updated the API to v2 and v1 "should" be removed by now.
  // const url = new URL(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/api/v1/complete`);
  const url = new URL(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/api/v2/complete`);

  try {
    // Make the request to the server
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ requestID: requestID, serial: serial, voltage: uV })
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }

    const data = await response.json();
    console.log("Data", data)
    // Return true if the response is true
    return data === true;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    return false;
  }
}
```

Decided to start up a proxy in Burp Suite and use the intercept tool to capture
the requests. I looked through all of them to see if there was anything I could
send to repeater and I found this.

```
GET /?&challenge=termHardwareHacking101A&username=n3s00&id=cd79c2f4-b255-41a6-a9bf-f4df6e09dc4e&area=frontyardact1&location=61,36&tokens=easy,termHardwareHacking101A&dna=ATATATTAATATATATATATGCATATATATATATCGATTAATATATATATATATATATATATATATATATGCATATGCCGATATATATATATTACGATATATATATATATGCATATATGC HTTP/2
Host: hhc24-hardwarehacking.holidayhackchallenge.com
Cookie: _ga_F6ZZNPR5E5=GS2.1.s1761618581$o11$g1$t1761623069$j60$l0$h0; _ga=GA1.1.1974479077.1761465328; GCLB="97885844805711ee"
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Upgrade-Insecure-Requests: 1
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: none
Sec-Fetch-User: ?1
If-Modified-Since: Mon, 23 Sep 2024 20:20:53 GMT
Priority: u=0, i
Te: trailers
```

Here is the response received from the server. It doesn't provide much. But, I
thought I'd include it anyway.

```
HTTP/2 304 Not Modified
Last-Modified: Mon, 23 Sep 2024 20:20:53 GMT
Date: Tue, 28 Oct 2025 06:36:10 GMT
Via: 1.1 google
Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

After sending the request to repeater. I updated it to the `POST` method with
the URL being `/api/v2/complete`. I tried it in `/api/v1/complete` as well.

I added the JSON payload to the body of the request after updating the
`Content-Type` and added the `Accept` headers to the request. Below is the JSON
used with the request ID, correct serial array, and the voltage index.

```json
{
"requestID":"cd79c2f4-b255-41a6-a9bf-f4df6e09dc4e",  
"serial": [3, 9, 2, 2, 0, 3], 
"voltage": 3
}
```

This is the request used in Burp Suite for this challenge.

```txt
POST /api/v2/complete HTTP/2
Host: hhc24-hardwarehacking.holidayhackchallenge.com
Cookie: _ga_F6ZZNPR5E5=GS2.1.s1761618581$o11$g1$t1761623069$j60$l0$h0; _ga=GA1.1.1974479077.1761465328; GCLB="97885844805711ee"
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0
Content-Type: application/json
Accept: application/json
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Upgrade-Insecure-Requests: 1
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: none
Sec-Fetch-User: ?1
If-Modified-Since: Mon, 23 Sep 2024 20:20:53 GMT
Priority: u=0, i
Te: trailers
Content-Length: 105

{
"requestID":"cd79c2f4-b255-41a6-a9bf-f4df6e09dc4e",  
"serial": [3, 9, 2, 2, 0, 3], 
"voltage": 3
}
```

Below is the response. It does not provide much either. It just says `true`. So
I assume that's good. Originally I had one of the numbers off so it kept
returning `false` in the response. But, updating the wrong value fixed it.

```txt
HTTP/2 200 OK
Content-Type: application/json
Date: Tue, 28 Oct 2025 05:50:09 GMT
Content-Length: 5
Via: 1.1 google
Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000

true
```

There is no prompt from Jewel Loggins after completing the Gold part of the
"Hardware Hacking 101: Part 1 challenge. But, I recieved the Gold acheivement
for the challenge on my badge to confirm.

## Hardware Hacking 101: Part 2

### Solution (Silver)

```sh
U-Boot SPL 2024.08 (Dec 24 2023 - 23:59:59 +0000)
Preparing sleigh for takeoff...


U-Boot 2024.08-g1234567-jolly (Dec 25 2023 - 00:00:01 +0000)

CPU:   North Pole CandyCane v1.0, eco 5
Clocks: CPU: 1000MHz, DDR: 1600MHz, Bus: 400MHz, XTAL: 50MHz
Model: Santa's Magic Access Control Board
DRAM:  256 MiB of Magic Memory
Loading Environment from SPI Flash... SF: Detected elf32magic with page size 512 Bytes, erase size 128 KiB, total 32 MiB
*** Warning - bad CRC, using default enchanted environment

In:    elvenconsole@1e000c00
Out:   elvenconsole@1e000c00
Err:   elvenconsole@1e000c00
Net:   
Warning: eth@1e100000 (eth0) using random MAC address - 5e:69:c8:f8:cf:5b
eth0: eth@1e100000
Hit any key to stop autoboot:  0 
Reindeer_PCIE_SET: gpio[19]=1
Using eth@1e100000 device
TFTP from server 192.168.54.25; our IP address is 192.168.54.5
Filename 'magic_firmware.bin'.
Load address: 0x80010000
Loading: *
North Pole Retry count exceeded; starting again
bash: cannot set terminal process group (9): Inappropriate ioctl for device
bash: no job control in this shell
```

```sh
--------------------------------------------------------
                   ___     _      _  _   
                  / __|   | |    | || |  
                  \__ \   | |__  | __ |  
                  |___/   |____| |_||_|  
                _|"""""|_|"""""|_|"""""| 
                "`-0-0-'"`-0-0-'"`-0-0-' 
--------------------------------------------------------
  Santa's Little Helper - Access Card Maintenance Tool

          Tool Name: slh

options:
  -h, --help            show this help message and exit
  --view-config         View current configuration.
  --view-cards          View current values of all access cards.
  --view-card ID        View a single access card by ID.
  --set-access ACCESS_LEVEL
                        Set access level of access card. Must be 0 (No Access) or 1 (Full Access).
  --id ID               ID of card to modify.
  --passcode PASSCODE   Passcode to make changes.
  --new-card            Generate a new card ID.
--------------------------------------------------------
```

```sh
ls -lah
```

```sh
total 156K
drwxrwxr-t 1 slh  slh  4.0K Oct 28 02:41 .
drwxr-xr-x 1 root root 4.0K Nov 13  2024 ..
-r--r--r-- 1 slh  slh   518 Oct 16  2024 .bash_history
-r--r--r-- 1 slh  slh  3.9K Sep 23  2024 .bashrc
-r--r--r-- 1 slh  slh   807 Sep 23  2024 .profile
-rw-r--r-- 1 root root 128K Oct 28 02:41 access_cards
```

```sh
file access_cards 
```

```sh
access_cards: SQLite 3.x database, last written using SQLite version 3040001, 
file counter 5, database pages 32, cookie 0x2, schema 4, UTF-8, version-valid-for 5
```

```sh
history
```

```sh
    8  ping 1.1.1.1
    9  slh --help
   10  slg --config
   11  slh --passcode CandyCaneCrunch77 --set-access 1 --id 143
   12  df -h
   13  top
   14  ps aux | grep apache
```

```sh
slh --passcode CandyCaneCrunch77 --set-access 1 --id 42
```

```sh

       *   *   *   *   *   *   *   *   *   *   *
   *                                             *
*      ❄  ❄  ❄  ❄  ❄  ❄  ❄  ❄  ❄  ❄  ❄  ❄  ❄     *
 *  $$$$$$\   $$$$$$\   $$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\  * 
  * $$  __$$\ $$  __$$\ $$  __$$\ $$  _____|$$  __$$\ $$  __$$\ *
   *$$ /  $$ |$$ /  \__|$$ /  \__|$$ |      $$ /  \__|$$ /  \__| *
    $$$$$$$$ |$$ |      $$ |      $$$$$\    \$$$$$$\  \$$$$$$\   
   *$$  __$$ |$$ |      $$ |      $$  __|    \____$$\  \____$$\  *
  * $$ |  $$ |$$ |  $$\ $$ |  $$\ $$ |      $$\   $$ |$$\   $$ | *
*   $$ |  $$ |\$$$$$$  |\$$$$$$  |$$$$$$$$\ \$$$$$$  |\$$$$$$  |   *
 *  \__|  \__| \______/  \______/ \________| \______/  \______/  *
*         *    ❄             ❄           *        ❄    ❄    ❄   *
   *        *     *     *      *     *      *    *      *      *
   *  $$$$$$\  $$$$$$$\   $$$$$$\  $$\   $$\ $$$$$$$$\ $$$$$$$$\ $$$$$$$\  $$\  *
   * $$  __$$\ $$  __$$\ $$  __$$\ $$$\  $$ |\__$$  __|$$  _____|$$  __$$\ $$ | *
  *  $$ /  \__|$$ |  $$ |$$ /  $$ |$$$$\ $$ |   $$ |   $$ |      $$ |  $$ |$$ |*
  *  $$ |$$$$\ $$$$$$$  |$$$$$$$$ |$$ $$\$$ |   $$ |   $$$$$\    $$ |  $$ |$$ | *
 *   $$ |\_$$ |$$  __$$< $$  __$$ |$$ \$$$$ |   $$ |   $$  __|   $$ |  $$ |\__|*
  *  $$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |\$$$ |   $$ |   $$ |      $$ |  $$ |   *
*    \$$$$$$  |$$ |  $$ |$$ |  $$ |$$ | \$$ |   $$ |   $$$$$$$$\ $$$$$$$  |$$\ *
 *    \______/ \__|  \__|\__|  \__|\__|  \__|   \__|   \________|\_______/ \__|  *
  *                                                            ❄    ❄    ❄   *
   *      *    *    *    *    *    *    *    *    *    *    *    *    *    *                                                                                                                                        

Card 42 granted access level 1.
```
