---
title: "SANs Holiday Hack Challenge 2024: Snow-maggeddon"
author: "Timothy Loftus (n3s0)"
date: 2025-10-25T00:38:40-06:00
lastmod: 2025-10-28
cover: shhc2024.jpg
summary: "Writeup from what I've completed for SANs Holiday Hack Challenge 2024: Snow-maggedon."
draft: false
---

> Note: This document is incomplete and will be updated periodically as I finish
> and explain more about the challenges as they're completed. 

# Overview

I've always enjoyed playing these. But, I never get around to playing them when
they're in progress. I wish I started this one sooner. But, there is no time
like the present.

This is my writeup for the SANs Holiday Hack Challenge that finished up in 2024.
SANs Holiday Hack Challenge is an annual; gamified, challenge provided by SANs
Institute and Counter Hack to educate all walks of life on information security.

If anyone would like a link to the 2024 challenge. I've provided a link below.

- [SANs Holiday Hack Challenge 2024: Snow-maggeddon](https://account.counterhack.com/?ref=hhc24)

With every challenge I'll provide the initial dialog from the elf next to it,
discuss the problem, and provide the solution or even some of the twists and
turns taken to come to a solution.

Hints rewarded for future challenges or hints that aid with the current
challenge will be provided under the header for the challenge.

> Since SANs 2025 Holiday Hack Challenge will be up and coming in a couple
> of months. I decided to work through SANs Holiday Hack Challenge 2024 to 
> see how far I get.

# SANs Introduction

Before logging in. SANs has a little introduction of what's available to us for
participating in the challange. Their introduction can be found below.

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

# Prologue

The prologue goes through a few Cranberry Pi terminals to get us warmed up to
the challenges. These challenges are located on ```Frosty's Beach```.

> Welcome back to the Geese Islands! Let's help the elves pack up to return to 
> the North Pole.
> 
> Talk to Jingle, Angel, and Poinsettia about their challenges.

## Holiday Hack Orientation (First Terminal)

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
> -- **Jingle Ringford (Frosty's Beach (Prologue))**

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
> -- **Jingle Ringford (Frosty's Beach (Prologue))**

## Elf Connect

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
> -- **Angel Candysalt (Frosty's Beach (Prologue))**

Below is the initial screen for the **Elf Connect** game. From the looks of it.
There is a High Score of 50,000. Which doesn't quite add up given that each
round adds up to 400 points (100 points for each set) for 4 rounds. Which is
about 1,600 points for each round.

Going to recircle back to that math at some point. But, my case here is a high
score of 50,000 points is impossible.

{{< image src="elf_connect/elf_connect.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}

This is a category matching game named Elf Connect and Angel Candysalt is
suspicious about `randomElf` and their high score in Elf Connect.

Something that I found while I was browsing the code was a link to the Elf
Connect game. It was useful to have this without the small Cranberry Pi terminal
screen.

- [Elf Connect (hh24-elfconnect)](https://hhc24-elfconnect.holidayhackchallenge.com/)

With all that being said. Time to get started with this challenge.

### Solution (Silver)

Provided is one of the hints related to this challenge. Stating this is similar
to the New York Times Connections game. Which I personally have never played.
But, it provides a good introduction for the game. 

**Hints:**

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

There is actually a better approach to this. There is a `<script>` element that
contains client-side JavaScript for the game.

Initially I attempted to change the value for the updated score to see if I
could beat the high score. But, that did not work. It just added 100 points. So
that's out.

Below is the non-working update. Originally it was 100. Either due to my own
flawed log or inexperience with JavaScript. I even tried to do this in the
WebDev console. But, that didn't work either.

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

There is a nested array of indexes for each set in a round. This array; named
`correctSets` provides the correct set for each round. So, you can cross
reference this to the `wordSets` and figure out the correct answers for each
round.

```js
let correctSets = [
    [0, 5, 10, 14], // Set 1
    [1, 3, 7, 9],   // Set 2
    [2, 6, 11, 12], // Set 3
    [4, 8, 13, 15]  // Set 4
];
```

When you connect the dots for each set in each round it looks like you get the
answers for each round. You just need to look in the `<script>` element within
the page source. 

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
Apart from selecting something in the wrong category by mistake.

### Solution (Gold)

After finishing the Elf Connect game. Angel Candysalt provides this dialog. I
wasn't so sure as to what it was hinting at.

> If you want a more difficult challenge, try beating randomElf's score.
> 
> -- **Angel Candysalt (Frosty's Beach (Prologue))**

There is also a hint provided by Angel Candysalt related to the Gold/Hard part
of the Elf Connect challenge. It's hinting that we should look at the HTML and
client-side JavaScript for the Elf Connect game using our browser's developer
tools console.

**Hints:**

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
> -- **Angel Candysalt (Frosty's Beach (Prologue))**

## The Goose of Christmas Island

This part of Frosty's Beach where there is just a random cobra chicken provided
the comedic relief I needed.

> HONK! HONK!
>
> -- **Goose of Christmas Island (Frosty's Beach (Prologue))**

## Elf Minder 9000

This game took me a while to complete. 

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
> -- **Poinsettia McMittens (Frosty's Beach (Prologue))**

### Solution (Silver)

### Solution (Gold)

I haven't completed this challenge yet. Need to obtain more images of what is
completed yet. So, stay tuned for more content on this.

After solving the `Silver` challenges the story was updated.

> With challenges solved, we're ready to head to the North Pole! Let's hope 
> Santa is back already to direct operations.

# Act I

Off to Act I. Where we need to help a few more elves solve some challenges.
Sounds like there is some tension in the North Pole because Santa is out.

> With Santa away, Wombley Cube and Alabaster Snowball have each tried to lead. 
> Surely they won't mess up the naughty and nice list...
> 
> Help Bow, Morcel, and Jewell solve their challenges.

It seems like there is some foreshadowing related to Wombley Cube and Alabaster
Snowball potentially messing up the naughty and nice list.

## cURLing

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
> -- **Bow Ninecandle (Front Yard (Act I))**

Provided are the hints provided by Bow Ninecandle related to the cURLing
challenge.

This one discusses taking a look at the `--path-as-is`[^1] option in curl(1).
Reading the curl(1) manual and it says it tells curl(1) not to handle `/../` or
`/./` in the URL path.

Sounds like foreshadowing to me.

**Hints:**

> cURL: Don't squash
>
> From: Bow Ninecandle
>
> Terminal: cURLing
> 
> Take a look at cURL's "--path-as-is" option; it controls a default behavior 
> that you may not expect!

This one provides a link to the curl(1) manual page. Which I was probably going
to dive into for this anyway. So I definately appreciated this.

> cURL Manual
>
> From: Bow Ninecandle
>
> Terminal: cURLing
>
> The official [cURL man page](https://curl.se/docs/manpage.html) has tons of 
> useful information on how to use cURL.

### Solution (Silver)

This challenge starts off with a brief intro noting that you're going to run
through basic curl commands in a name called `Curling Fun`.

```sh
Welcome to Curling Fun!  We will learn some basic curl commands while playing a round of curling.
```

Time to say `yes` to the prompt and get started.

```sh
Are you ready to begin? [y]es: 
```

> **Question 1**
> 
> Unlike the defined standards of a curling sheet, embedded devices often have 
> web servers on non-standard ports.  Use curl to retrieve the web page on host 
> "curlingfun" port 8080. If you need help, run the 'hint' command.

First question is asking how to access web servers on a non-standard port. In
this case we're accessing `curlingfun` on port `8080`.

To do this. Issue the curl command to send the request to `curlingfun` and
use the port; indicated by a colon (`:`) as shown in the command below.

```sh
curl "curlingfun:8080"
```

Looks like that's correct. We're off to a good start.

```sh
You have successfully accessed the site on port 8080!

If you need help, please remember to run "hint" for a hint!
```
 
> **Question 2**
>
> Embedded devices often use self-signed certificates, where your browser will 
> not trust the certificate presented.  Use curl to retrieve the TLS-protected 
> web page at https://curlingfun:9090/

Second question we're diving into how to deal with self-signed/insecure
certificates using curl. It's requesting that we use the URL
`https://curlingfun:9090/` for this HTTP request.

You can send your request using curl regularly to see what it will do. An error
from curl is expected from this.

```sh
curl https://curlingfun:9090
```

The curl command will provide this error saying it failed because a self-signed
or untrusted certificate is being used. Now that I'm done testing that. I will
do this with the expected command.

```sh
curl: (60) SSL certificate problem: self-signed certificate
More details here: https://curl.se/docs/sslcerts.html

curl failed to verify the legitimacy of the server and therefore could not
establish a secure connection to it. To learn more about this situation and
how to fix it, please visit the web page mentioned above.
```

To let curl know that you know the site is using an insecure or self-signed
certificate. You can use either the `--insecure` or `-k` flag to let it know
that it's OK to ignore the insecure certificate. Both will ignore the
insecure/self-signed certificate and connect anyway.

The man pages for commands are usually good places to start if you're unsure of
a functionality for a specific command.

This is an example of how to do that with the `--insecure` flag.

```sh
curl --insecure https://curlingfun:9090
```

This is an example of how to do that with `-k`. 

```sh
curl -k https://curlingfun:9090
```

When this is ran. You'll see a success message stating the certificate warning
has been bypassed. The message will also say we'll need to use `--insecure` and
`-k` for the duration of the challenge.

```sh
You have successfully bypassed the self-signed certificate warning!
Subsequent requests will continue to require "--insecure", or "-k" for short.

If you need help, please remember to run "hint" for a hint!
```

> **Question 3**
>
> Working with APIs and embedded devices often requires making HTTP POST requests. 
> Use curl to send a request to https://curlingfun:9090/ with the parameter "skip" 
> set to the value "alabaster", declaring Alabaster as the team captain.

In question 3 we go into working with APIs and the use of parameters with
requests. Specifically how to send one. In this question they are asking us to
send a `POST` request to `https://curlingfun:9090` with the `skip` (skipper)
parameter set to the value `alabaster`.

To achieve this I sent a post request with the `-d` (data) flag; longform being
`--data`. This will send a post request with the `skip=alabaster` parameter.

```sh
curl -X POST -d "skip=alabaster" -k https://curlingfun:9090/
```

Once this is done. The game will indicate that the POST request was sent
succesfully.

```sh
You have successfully made a POST request!
```

> **Question 4**
> 
> Working with APIs and embedded devices often requires maintaining session 
> state by passing a cookie.  Use curl to send a request to 
> https://curlingfun:9090/ with a cookie called "end" with the value "3", 
> indicating we're on the third end of the curling match.

This question discusses sending a cookie to `https://curlingfun:9090/` named
`end` with the value of `3`. This is intended to indicate that we're on the
third end of the curing match.

With that being said. I used the `-b` (cookie) flag; long form being `--cookie`
to the `curlingfun` URL.

```sh
curl -b "end=3" -k https://curlingfun:9090/
```

After sending this we get the following output stating we have successfully set
a cookie.

```sh
You have successfully set a cookie!
```

> **Question 5**
> 
> Working with APIs and embedded devices sometimes requires working with raw 
> HTTP headers. Use curl to view the HTTP headers returned by a request to 
> https://curlingfun:9090/

The objective for question 5 is to send a request that will output the raw HTTP
headers to `https://curlingfun:9090`.

To accomplish this I used the `-v` or verbose flag; `--verbose`. Although this
is unecessary tend to use it to trace the flow of http requests.

```sh
curl -v -k https://curlingfun:9090
```

Below is the data it spit out. There are some TLS headers grouped with some
regular HTTP headers. I have removed some of the output to prevent information
overload for this section of the challenge.

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

Before we move on. Another way to do this is to use the `-I` flag; `--head`, to
fetch the headers from `curlingfun`.

```sh
curl -k -I https://curlingfun:9090
```

This will provide a refined output without the stuff from the `-v` flag. Like
shown below. Can see there is a header by the name of `Custom-Header` in this
one also.

```sh
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 27 Oct 2025 05:49:36 GMT
Content-Type: text/plain;charset=UTF-8
Connection: keep-alive
Custom-Header: You have found the custom header!
```

> **Question 6**
>
> Working with APIs and embedded devices sometimes requires working with custom 
> HTTP headers. Use curl to send a request to https://curlingfun:9090/ with an 
> HTTP header called "Stone" and the value "Granite".

This one discusses working with APIs again. Question 6 has an objective to send
a custom HTTP header using curl to `https://curlingfun:9090/` with the header
named `Stone` and the value `Granite`.

To do this I used the header or `-H` paramether; longform `--header`, to set the
header. This command sends a post request with the custom header `Sone: Granite`
to the curlingfun URL.

```sh
curl -X POST -H "Stone: Granite" -k https://curlingfun:9090/
```

Looks like that was successful. We have set our custom header in the POST
request.

```sh
You have successfully set a custom HTTP header!
```

> **Question 7**
> 
> curl will modify your URL unless you tell it not to.  For example, use curl 
> to retrieve the ollowing URL containing special characters: 
> https://curlingfun:9090/../../etc/hacks

In question 7 our objective is to send a `GET` request to `curlingfun` with the
path `/../../etc/hacks`. We need to find the option that doesn't mess with these
special charaters too.

To complete this challenge. I sent a `GET` request with the `--path-as-is` flag
to make sure curl doesn't do anything to `/../`. This was provided from one of
the hints.

```sh
curl -k -X GET --path-as-is "https://curlingfun:9090/../../etc/hacks"
```

Looks like that was a success. 

```sh
You have successfully utilized --path-as-is to send a raw path!
```

Sweet! Another achievement for completing this challenge!

```sh
Great work! 
 
Once HHC grants your achievement, you may close this terminal.
```

Bow Ninecandle provides some feedback on our progress.

> Bravo! Look at you, curling through that like a true web wizard!
>
> You zipped through that challenge faster than a curling stone on enchanted ice!
> 
> -- **Bow Ninecandle (Front Yard (Act I))**

### Solution (Gold)

So three commands for the gold star? Sounds like a party to me. There isn't much
else provided for this. But, I'm sure the hints will come in handy.

> You know... rumor has it you can breeze through this with just three commands. 
> Why don’t you give it a whirl?
>
> -- **Bow Ninecandle (Front Yard (Act I))**

Decided to start off with listing the contents of the directory.

```sh
ls
```

Looks like there is a `HARD-MODE.txt` file in here so I assume that's the
file.

```sh
HARD-MODE.txt  HELP
```

Looking at the contents of the file using the `cat(1)` command shows the
following output.

The instructions are to send a post request to `https://curlingfun:9090/` with
the paramethers `skip=bow`, a cookie set as `end=10`, and a header set as `Hack:
12ft`. Sounds simple enough.

```sh
Prefer to skip ahead without guidance?  Use curl to craft a request meeting these requirements:

- HTTP POST request to https://curlingfun:9090/
- Parameter "skip" set to "bow"
- Cookie "end" set to "10"
- Header "Hack" set to "12ft"
```

Used the following command to send a POST request with the following data.

```sh
curl -X POST -k -d "skip=bow" --cookie "end=10" -H "Hack: 12ft" https://curlingfun:9090
```

Looks like that worked. Now for the next command which requires we send a get
request to the URL `https://curlingfun:9090/../../etc/button`.

```sh
Excellent!  Now, use curl to access this URL: https://curlingfun:9090/../../etc/button
```

For this command I needed to use the `--path-as-is` flag so I could use `/../`
in the URL. This will prevent the curl(1) command from correcting the URL to
make it safer.

```sh
curl -k --path-as-is "https://curlingfun:9090/../../etc/button"
```

Looks like that worked too. So the last command is to allow redirects while
going to the `https://curlingfun:9090/GoodSportsmanship` URL.

```sh
Great!  Finally, use curl to access the page that this URL redirects to: https://curlingfun:9090/GoodSportsmanship
```

Used to `-L` flag to follow the redirects to the URL.

```sh
curl -k -L https://curlingfun:9090/GoodSportsmanship
```

Which worked. The promt indicated that I can close the terminal once HHC grants
the gold achievement. 

```sh
Excellent work, you have solved hard mode!  You may close this terminal once HHC grants your achievement.
```

Some noew dialog from Bow Ninecandle related to completing the hard part of the
challenge.

> Wait... did you just slice and dice it all into three commands? My stars, 
> you're a Curling conjurer!
>
> -- **Bow Ninecandle (Front Yard (Act I))**

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
> -- **Morcel Nougat (Front Yard (Act I))**

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
>
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

### Solution (Silver)

i have not finished writting this section yet.

### Solution (Gold)

I have not finished this section yet.

## Hardware Hacking 101: Part 1

Based on the image. This already looks like a great challenge. The visuals are
great and I get to play with some simulated hardware. Not sure I can beat that!

{{< image src="hardware-hacking/hardware-part1.png" alt="Image of hardware hacking 101 part 1" position="center" style="border-radius: 8px;" >}}

We start this off by talking to Jewel Loggins who is having issues accesing
something called Santa's Little Helper Tool and is wondering if we can help
them. They need to connect to the UART interface and start things up. But, it's 
not responding. With all of he right tools in place. They believe this is due 
to some incorrect settings.

The problem is. I don't have the correct settings either. But, Jewel Loggins
hints within the dialog that a note containing the serial settings exists. But,
one of Wombley's elves shredded it. So we're going to have to talk to Morcel
Nougate-he about a method of recovery for it. So, it's a good idea that we
decided to sol

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

Some links to the web page for the Hardware Hacker 101: Part 1 challenge.

- [Hardware Hacking 101: Part 1](https://hhc24-hardwarehacking.holidayhackchallenge.com/)

**Hints:**

This discusses a shredder that the elves developed to shred documents into a
thousand pieces and it hints that we may need to reassemble a document for this
challenge.

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

A little image of the manual provided was useful for this challenge.

{{< image src="hardware-hacking/uart-slh-manual.png" alt="Image of hardware hacking 101 part 1 UART manual" position="center" style="border-radius: 8px;" >}}

To connect the wires we need to connect them like this on the UART. The voltage
pins (VCC and V) can be connected. As can the ground pins (GND and G). But, with
the Transmit/Recieve pins we want to connect Tx (transmit) on the UART to R
(recieve) on the device and the Rx (recieve) pin on the UART to the T (transmit)
pin on the device.

**NT2103 UART-Bridge:** PIN VCC -> **Santa's Little Helper (SLH):** PIN V
**NT2103 UART-Bridge:** PIN Tx  -> **Santa's Little Helper (SLH):** PIN R
**NT2103 UART-Bridge:** PIN Rx  -> **Santa's Little Helper (SLH):** PIN T
**NT2103 UART-Bridge:** PIN GND -> **Santa's Little Helper (SLH):** PIN G

This might also be best depicted in a picture as well. So, here it is.

{{< image src="hardware-hacking/hh-pinout.png" alt="Image of hardware hacking 101 part 1 with connected pins" position="center" style="border-radius: 8px;" >}}

With the wires connected. We'll want to make sure the toggle switch for the UART
device is set to 3V because the device we're connected to only supports 3V. If
it's toggled to 5V it will fry the device which is no fun. 

To power it on the UART device. You can do so using the `P` (power) button.

> Note: Before being able to solve this challenge. There is some information
> needed. We could attempt to brute force the settings using the code or we can
> go to the [Frosty Keypad](#frosty-keypad) challenge. I went to the Frosty
> Keypad Challenge before this one so I had what I needed. 
>
> When we solve that it gives us access to the shredded document. Which I 
> download and pieced together in the 
> [One Thousand Little Teeny Tiny Shredded Pieces of Paper](#one-thousand-little-teeny-tiny-shredded-pieces-of-paper)
> challenge. So that shold be referenced to provide more context as to how I
> recieved the settings for the serial connection.

Here is an image of the page that provides the settings for the serial
connection if no one wants to go back to the Frosty Keypad challenge.

{{< image src="thousand-tiny-pieces/assembled-image.png" alt="A note containing the settings for the serial connection." position="center" style="border-radius: 8px;" >}}

Below are the serial connection settings needed to start the connection.

- **BAUD:** 115200
- **PARITY:** EVEN
- **DATA:** 7 BITS
- **STOP BITS:** 1 BIT
- **FLOW CONTROL:** RTS

In case anyone needs a picture. There is one below with the correct serial
configuration.

{{< image src="hardware-hacking/serial-settings.png" alt="Image of hardware hacking 101 part 1 with correct serial config in UART" position="center" style="border-radius: 8px;" >}}

Once we have all of this information entered. We just press the `S` (serial)
button on the UART interface and if everything is correct. It will tell us we're
successful.

```txt
success! loading bootloader...
Go speak to Jewel Loggins for the next step!
```

For those who would like an image of this. I've provided one below.

{{< image src="hardware-hacking/successful-serial-connection.png" alt="Image of hardware hacking 101 part 1 successul serial connection" position="center" style="border-radius: 8px;" >}}

Jewel Loggins gives us some more dialog to confirm we're on the right track.

> Fantastic! You managed to connect to the UART interface—great work with those 
> tricky wires! I couldn't figure it out myself…
>
> -- **Jewel Loggins (Front Yard (Act I))**

### One Thousand Little Teeny Tiny Shredded Pieces of Paper

> Incredible work! You pieced together the code like a true sleuth and retrieved 
> the shreds we need. I’m not quite sure how you’ll put them all together, but if 
> anyone can, it’s you!
> 
> Your help has been absolutely essential, especially now with Santa missing. 
> Wombley and Alabaster will want to hear all about it—go share the news with 
> Jewel Loggins!
>
> -- **Morcel Nougat**

**Hints:**

This hint provides a script that gives us the opportunity to piece the shredded
document back together from the looks of it.

> On the Cutting Edge
>
> From: Morcel Nougat
> 
> Terminal: Hardware Part 1
>
> Hey, I just caught wind of this neat way to piece back shredded paper! It's a 
> fancy heuristic detection technique—sharp as an elf’s wit, I tell ya! Got a 
> sample Python script right here, courtesy of Arnydo. Check it out when you 
> have a sec: [heuristic_edge_detection.py](https://gist.github.com/arnydo/5dc85343eca9b8eb98a0f157b9d4d719)."

**Items:**

After completing the silver part of the Frosty Keypad challenge. You are given
the following item to continue the journey. This is a link to to a zip file
containing one thousand parts of an image. 

> **One Thousand Little Teeny Tiny Shredded Pieces of Paper**
>
> A mountain of one thousand little tiny 
> [shredded pieces of paper](https://holidayhackchallenge.com/2024/shreds.zip)—each 
> scrap whispering a secret, waiting for the right hardware hacker to piece the 
> puzzle back together.

After downloading this zip file you can decompress and view its contents. It
looks like there is a `slices` directory conaining the pieces of the shredded
image.

```sh
total 2.6M
drwxr-xr-x 1 n3s0 n3s0  162 Oct 29 00:08 .
drwxr-xr-x 1 n3s0 n3s0  166 Oct 27 20:50 ..
-rw-r--r-- 1 n3s0 n3s0 1.6M Oct 27 16:51 shreds.zip
drwxrwxr-x 1 n3s0 n3s0  79K Oct 16  2024 slices
```

A look in this directory and you can see all of the image files. This isn't even
half of them. There are plenty more. Running `ls -l | wc -l` in the `slices`
directory counts to approximately 1001 files.

```sh
total 4.0M
drwxrwxr-x 1 n3s0 n3s0  79K Oct 16  2024 .
drwxr-xr-x 1 n3s0 n3s0  162 Oct 29 00:08 ..
-rw-rw-r-- 1 n3s0 n3s0 1.8K Oct 16  2024 002cc27c-a406-4b9c-97e3-e08d9db14571.jpg
-rw-rw-r-- 1 n3s0 n3s0 1.7K Oct 16  2024 0067d477-9f3a-4b46-b426-22868128fda9.jpg
-rw-rw-r-- 1 n3s0 n3s0 1.8K Oct 16  2024 00823d9b-2499-4f04-a8a8-b45776662bab.jpg
-rw-rw-r-- 1 n3s0 n3s0 1.6K Oct 16  2024 00b82e45-bd70-423b-b66b-f188f383635a.jpg
-rw-rw-r-- 1 n3s0 n3s0  980 Oct 16  2024 00d444a3-d1a1-4f06-85fe-e367c1264c16.jpg
-rw-rw-r-- 1 n3s0 n3s0 1.5K Oct 16  2024 012e2053-f8f0-497c-bd0b-0fc0ccfc28a0.jpg
-rw-rw-r-- 1 n3s0 n3s0 1.9K Oct 16  2024 01847bc9-cdbf-406c-9645-bde73407bf31.jpg
-rw-rw-r-- 1 n3s0 n3s0 1.8K Oct 16  2024 01e9c35a-3ebc-4552-a1ec-ed47bc8ab84f.jpg
-rw-rw-r-- 1 n3s0 n3s0 1.6K Oct 16  2024 01f14c4c-f7fc-4c64-b3c7-9f61c23f3fa6.jpg
-rw-rw-r-- 1 n3s0 n3s0 1.5K Oct 16  2024 022be568-6621-42b8-9938-b27b26fb9335.jpg
-rw-rw-r-- 1 n3s0 n3s0 1.7K Oct 16  2024 028aa098-4f96-4e21-8239-a38cf9b71944.jpg
-rw-rw-r-- 1 n3s0 n3s0 1.4K Oct 16  2024 02d9aeed-bb1f-4710-96c5-b7769e97af72.jpg
-rw-rw-r-- 1 n3s0 n3s0 2.0K Oct 16  2024 031979f7-f15a-4c22-8f52-9b46bcf393fe.jpg
-rw-rw-r-- 1 n3s0 n3s0 1.7K Oct 16  2024 037285db-85ca-46c5-b2f7-18783e16c580.jpg
-rw-rw-r-- 1 n3s0 n3s0 1012 Oct 16  2024 039153ad-fdba-4002-bb85-28b42b38e5f5.jpg
-rw-rw-r-- 1 n3s0 n3s0  980 Oct 16  2024 03b77db7-50a4-4e83-8005-a2d7c3f6f64e.jpg
-rw-rw-r-- 1 n3s0 n3s0 1.6K Oct 16  2024 03c4fa75-cde4-44a5-b554-9f1073f74979.jpg
-rw-rw-r-- 1 n3s0 n3s0 1.7K Oct 16  2024 042ccd6d-00ac-430a-9964-8d5d8ffcb674.jpg
...
```

To use the script provided to reassemble the image. I setup a virtual
environment for python using `venv`, activated the environment and proceeded to 
intall numpy and pillow. 

```sh
numpy==2.3.4
pillow==12.0.0
```

To run the script. I used python while the `venv` was activated. The script will
take each slice of the image can compare the edges to determine they match up.
Then it will save the image as `assembled_image.png` after it's iterated through 
the loop and put it all together.

```sh
python heuristic_edge_detection.py
```

I ran this initially and the image was backwards and it cuts off a lot of the
text. Making the settings hard to see.

{{< image src="thousand-tiny-pieces/jumbled-assembled-image.png" alt="Jumbled assembled image of serial configuration." position="center" style="border-radius: 8px;" >}}

After looking through the code sample I noticed the `slices[0]` array starts at
the first index in the array. Just because it's starting from the beginning of
the array doesn't mean that it's starting at the beginning of the image.

```python
def find_best_match(slices):
    n = len(slices)
    matched_slices = [slices[0]]
    slices.pop(0)

    while slices:
        last_slice = matched_slices[-1]
        differences = [calculate_difference(last_slice, s) for s in slices]
        best_match_index = np.argmin(differences)
        matched_slices.append(slices.pop(best_match_index))

    return matched_slices

```

After some trial and error I got a much cleaner image by updating this to
`slices[-8]`. Which would start roughly at index `991` if my math is right. 

```python
def find_best_match(slices):
    n = len(slices)
    matched_slices = [slices[-8]]
    slices.pop(0)

    while slices:
        last_slice = matched_slices[-1]
        differences = [calculate_difference(last_slice, s) for s in slices]
        best_match_index = np.argmin(differences)
        matched_slices.append(slices.pop(best_match_index))

    return matched_slices
```

Here is what the image looks like now that the code sample has been tuned. The
image is much easier to read after taking some time to figure that out.

{{< image src="thousand-tiny-pieces/assembled-image.png" alt="Assembled image of the serial configuration." position="center" style="border-radius: 8px;" >}}

If you read the image it will provide the information in the list below. This
information has also been added to the information in Hardware Hacking 101: Part
1 silver solution.

- **BAUD:** 115200
- **PARITY:** EVEN
- **DATA:** 7 BITS
- **STOP BITS:** 1 BIT
- **FLOW CONTROL:** RTS

Below is the full updated code sample of what worked for me on this challenge.

```python
import os
import numpy as np
from PIL import Image

def load_images(folder):
    images = []
    filenames = sorted(os.listdir(folder))
    for filename in filenames:
        if filename.endswith('.png') or filename.endswith('.jpg'):
            img = Image.open(os.path.join(folder, filename)).convert('RGB')
            images.append(np.array(img))
    return images

def calculate_difference(slice1, slice2):
    # Calculate the sum of squared differences between the right edge of slice1 and the left edge of slice2
    return np.sum((slice1[:, -1] - slice2[:, 0]) ** 2)

def find_best_match(slices):
    n = len(slices)
    matched_slices = [slices[-8]]
    slices.pop(0)

    while slices:
        last_slice = matched_slices[-1]
        differences = [calculate_difference(last_slice, s) for s in slices]
        best_match_index = np.argmin(differences)
        matched_slices.append(slices.pop(best_match_index))

    return matched_slices

def save_image(images, output_path):
    heights, widths, _ = zip(*(i.shape for i in images))

    total_width = sum(widths)
    max_height = max(heights)

    new_image = Image.new('RGB', (total_width, max_height))

    x_offset = 0
    for img in images:
        pil_img = Image.fromarray(img)
        new_image.paste(pil_img, (x_offset, 0))
        x_offset += pil_img.width

    new_image.save(output_path)

def main():
    input_folder = './slices'
    output_path = './assembled_image.png'

    slices = load_images(input_folder)
    matched_slices = find_best_match(slices)
    save_image(matched_slices, output_path)

if __name__ == '__main__':
    main()
```

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
            "...",
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

```http
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

```http
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

This is the request used in Burp Suite for this challenge. Provided for future
reference.

```http
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

```http
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

{{< image src="hardware-hacking/hardware-part2.png" alt="Image of hardware hacking 101 part 2" position="center" style="border-radius: 8px;" >}}

The objective of this challenge is to grant access to card number 42 by
modifying the card database. This can be done using the `Santa's Little Helper 
(SLH)` tool. But, it's password protected. Once we've found the password we'll
be able to modify the card and move forward to the next challenge.

> Next, we need to access the terminal and modify the access database. We're 
> looking to grant access to card number 42.
>
> Start by using the slh application—that’s the key to getting into the access 
> database. Problem is, the ‘slh’ tool is password-protected, so we need to find 
> it first.
>
> Search the terminal thoroughly; passwords sometimes get left out in the open.
> 
> Once you've found it, modify the entry for card number 42 to grant access. 
> Sounds simple, right? Let’s get to it!
>
> -- **Jewel Loggins (Front Yard (Act I))**

### Solution (Silver)

Connected to the Hardware Hacking 101: Part 2 terminal and it went through its
post process to startup the `slhconsole`.
 
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

After it's done booting up there are two options available.

1. Startup system (Default)
2. U-Boot console

For this challenge I went with the `Startup system` option. But, I might explore
the U-Boot console later. It might be useful during the "Gold" part of the
challenge.

```sh
*** U-Boot Boot Menu ***
> 1. Startup system (Default)
  2. U-Boot console
Press UP/DOWN to move, ENTER to select
```

Selecting the `Startup system` option displays the usage for the `Santa's Little
Helper - Access Card Maintenance Tool` and displays a terminal.

Based on the help. There are two options for granting card access. 0 for no
access and 1 for full access. I'll want to use 1 for the `--set-access` flag
when I finally have the password.

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

I listed the contents of the directory and I assumed I would see the
script/binary being used witin the home directory.

```sh
ls -lah
```

But, I was wrong. Looks like there is a file name `access_cards` sitting in
there owned by root. But, is read-only to anyone. So, it's possible that this is
the database file that contains the cards. Probably SQLite.

```sh
total 156K
drwxrwxr-t 1 slh  slh  4.0K Oct 28 02:41 .
drwxr-xr-x 1 root root 4.0K Nov 13  2024 ..
-r--r--r-- 1 slh  slh   518 Oct 16  2024 .bash_history
-r--r--r-- 1 slh  slh  3.9K Sep 23  2024 .bashrc
-r--r--r-- 1 slh  slh   807 Sep 23  2024 .profile
-rw-r--r-- 1 root root 128K Oct 28 02:41 access_cards
```

Used the `file(1)` command to check the file.

```sh
file access_cards 
```

It looks like I was right. This is a SQLite 3 database. I opened it in a text
editor and it had long strings that didn't seem to have a whole lot of meaning.
Unless they were cards and I'm not used to looking at badges in a terminal.

```sh
access_cards: SQLite 3.x database, last written using SQLite version 3040001, 
file counter 5, database pages 32, cookie 0x2, schema 4, UTF-8, version-valid-for 5
```

Upon further investigation, there is a schema. Although I can't pick it out from
the output further down. There is an access_cards table schema that I'm assuming
holds the data for the cards. But, we shall see.

```sh
?qGq��tableconfigconfigCREATE TABLE config (
            id INTEGER PRIMARY KEY,
            config_key TEXT UNIQUE,
            config_value TEXT
        )+?indexsqlite_autoindex_config_1confi�6%%�/tableaccess_cardsaccess_cardsCREATE TABLE access_cards (
            id INTEGER PRIMARY KEY,
            uuid TEXT,
            access INTEGER,
            sig TEXT
        ) ���������������������ysmga�O�+��c?�w�S�/�
�G    
```

At this point I'm just poking around to see what I can find. I noticed in the
directory listing there was a `.bash_history` file. So, I decided to run the
`history(1)` command to try my luck there.

```sh
history
```

Would you look at that! The history wasn't cleared for this. Someone already
created a card with the id of `143` with full permissions. The passcode
`CandyCaneCrunch77` seems like it could be used to setup the new badge for Jewel
Loggins.

```sh
    8  ping 1.1.1.1
    9  slh --help
   10  slg --config
   11  slh --passcode CandyCaneCrunch77 --set-access 1 --id 143
   12  df -h
   13  top
   14  ps aux | grep apache
```

I use the passcode I discovered to add a new card id of `42` with full
permissions. Let's see how we do.

I tip my hat to the Hitch Hikers Guide To The Galaxy reference.

```sh
slh --passcode CandyCaneCrunch77 --set-access 1 --id 42
```

Bingo! After setting the access to badge 42 we get a great display of ACII art 
in the terminal telling us that card 42 has been granted level 1 access.

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

With that done. Jewel Loggins new dialog for us related to us adding the badge 
id to the system.

> Wow! You're amazing at this! Clever move finding the password in the command 
> history. It’s a good reminder about keeping sensitive information secure…
>
> -- **Jewel Loggins (Front Yard (Act I))**

### Solution (Gold)

I have not completed this challenge yet.

## Act I: Conclusion

> This division among the elves can't be good. Surely it won't get any worse.

With at least the `Silver` challenges being completed. It looks like there is a
pretty suspencful outro for Act I.

# Act II

> Wombley's getting desparate. Out-elved by Alabaster's faction, he's planning a 
> gruesome snowball fight to take over present delivery!
>
> Piney, Chimney, and Eve each need your help.

Here is a map of Act II 

## Mobile Analysis

## Drone Path

> Help the elf defecting from Team Wombley get invaluable, top secret intel to 
> Team Alabaster. Find Chimney Scissorsticks, who is hiding inside the DMZ.

In the DMZ past the two elves there is Chimeny Scissorsticks. Who provides some
dialog saying he's trying to exfiltrate data to Alabaster's side. Noting that
Wombley is planning something with an armada of drones.

{{< image src="drone-path/drone-path-terminal.png" alt="chimeny scissorsticks and the drone path terminal in dmz" position="center" style="border-radius: 8px;" >}}

In this challenge we'll be working with KML files, tracking drone flight paths,
and potentially obtaining the admin password for a website from within the drone
flight logs. So with that in mind. Let's get to it!

> Hey. Psst, over here. Hey, I'm Chimney Scissorsticks.
> 
> I'm not liking all the tension brewing between the factions, so even though 
> I agreed with how Wombley was handling things, I get the feeling this is going 
> to end poorly for everyone. So I'm trying to get this data to Alabaster's 
> side. Can you help?
>
> Wombley's planning something BIG in that toy factory. He's not really making 
> toys in there. He's building an armada of drones!
> 
> They're packed with valuable data from the elves working on the project. I 
> think they hide the admin password in the drone flight logs. We need to crack 
> this to prevent this escalating snowball showdown.
>
> You'll be working with KML files, tracking drone flight paths. Intriguing, 
> right? We need every detail to prepare for what’s ahead!
>
> Use tools like Google Earth and some Python scripting to decode the hidden 
> passwords and codewords locked in those files.
> 
> Ready to give it a go? It’s going to be a wild ride, and your skills might 
> just turn the tide of this conflict!
> 
> -- **Chimney Scissorsticks (Front Yard (Act II))**

Clicking on the Cranberry Pi terminal takes you to a website named the `Elf
Drone Workshop`. This seems to be where you can administer drones and upload/view 
logs for them too..

{{< image src="drone-path/elf-drone-workshop.png" alt="home page for drone path web app" position="center" style="border-radius: 8px;" >}}

I provided the link to the Elf Drone Workshop below. Which came in handy for
reviewing the code for the site.

- [Elf Drone Workshop](https://hhc24-dronepath.holidayhackchallenge.com/)

After some poking around I found a file named `fritjolf-Path.kml` in the `Menu >
FileShare path. This file is available without authentication. So I downloaded
it. 

{{< image src="drone-path/fritjolf-Path.png" alt="download page for fritjolf-path.kml file" position="center" style="border-radius: 8px;" >}}

Here is a link to the `fritjolf-Path.kml` file for download.

- [fritjolf-Path.kml](https://hhc24-dronepath.holidayhackchallenge.com/files/fritjolf-Path.kml)

After downloading the file I decided to take a look at it. I'm not entirely
familiar with KML files. But, from what I've read Keyhole Markup Language is an
XML formatted file that contains geographical data. One use case is the
visualization of that geographical data.

While looking through the file. I notice this is must have been downloaded from
Google Earth due to URLs. There is an initial longitude/latitude and then there
is a `<coordinates>` tag. Which has a slew of coordinates to look at.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">
<Document>
        <name>fritjolf-Path</name>
        <gx:CascadingStyle kml:id="__managed_style_2398E937F13251C4AAA6">
                <Style>
                        <IconStyle>
                                <scale>1.2</scale>
                                <Icon>
                                        <href>https://earth.google.com/earth/rpc/cc/icon?color=1976d2&amp;id=2000&amp;scale=4</href>
                                </Icon>
                                <hotSpot x="64" y="128" xunits="pixels" yunits="insetPixels"/>
                        </IconStyle>
                        <LabelStyle>
                        </LabelStyle>
                        <LineStyle>
                                <color>ff2dc0fb</color>
                                <width>6</width>
                        </LineStyle>
                        <PolyStyle>
                                <color>40ffffff</color>
                        </PolyStyle>
                        <BalloonStyle>
                                <displayMode>hide</displayMode>
                        </BalloonStyle>
                </Style>
        </gx:CascadingStyle>
        <gx:CascadingStyle kml:id="__managed_style_177256F1433251C4AAA6">
                <Style>
                        <IconStyle>
                                <Icon>
                                        <href>https://earth.google.com/earth/rpc/cc/icon?color=1976d2&amp;id=2000&amp;scale=4</href>
                                </Icon>
                                <hotSpot x="64" y="128" xunits="pixels" yunits="insetPixels"/>
                        </IconStyle>
                        <LabelStyle>
                        </LabelStyle>
                        <LineStyle>
                                <color>ff2dc0fb</color>
                                <width>4</width>
                        </LineStyle>
                        <PolyStyle>
                                <color>40ffffff</color>
                        </PolyStyle>
                        <BalloonStyle>
                                <displayMode>hide</displayMode>
                        </BalloonStyle>
                </Style>
        </gx:CascadingStyle>
        <StyleMap id="__managed_style_08C7CAFB983251C4AAA6">
                <Pair>
                        <key>normal</key>
                        <styleUrl>#__managed_style_177256F1433251C4AAA6</styleUrl>
                </Pair>
                <Pair>
                        <key>highlight</key>
                        <styleUrl>#__managed_style_2398E937F13251C4AAA6</styleUrl>
                </Pair>
        </StyleMap>
        <Placemark id="06AEB73AFD323DB38AEB">
                <name>fritjolf-Path</name>
                <LookAt>
                        <longitude>98.45958448116764</longitude>
                        <latitude>-86.34782448283728</latitude>
                        <altitude>3933.282925076723</altitude>
                        <heading>266.5424437916514</heading>
                        <tilt>0</tilt>
                        <gx:fovy>35</gx:fovy>
                        <range>5615503.459923863</range>
                        <altitudeMode>absolute</altitudeMode>
                </LookAt>
                <styleUrl>#__managed_style_08C7CAFB983251C4AAA6</styleUrl>
                <LineString>
                        <coordinates>
                                -58.52967255925983,-81.96544152531006,0 -59.10774876930002,-80.28840427318642,0 -65.72254600105737,-77.9766682035318,0 -73.9875914587532,-77.76516666863455,0 -91.05394381429868,-77.90731001637202,0 -98.06339305755023,-78.99146253042231,0 -102.2303792314312,-81.20027229790867,0 -95.98077310873283,-83.25371393186903,0 -82.07101780164206,-83.29776912973317,0 -83.23520661371359,-81.00695945931643,0 -81.76235789483795,-83.29564134262864,0 -102.9965062974018,-83.14550260567364,0 -95.62041991622014,-83.22291342789609,0 -102.1576732322808,-81.16235281786211,0 -105.371495686142,-81.14693579622997,0 -119.1775433233275,-84.6554672500059,0 -118.3365602745079,-85.19567610400406,0 -110.4807824668064,-85.02562921664807,0 -45.22997899179316,-83.84077683330376,0 -111.7741500227319,-85.01005790395843,0 -119.2870869746066,-85.18624435024202,0 -152.8585963679403,-87.09203473086252,0 -162.5595989415154,-87.57012771908882,0 -3.726793882402935,-86.23611509627816,0 -161.9207235736839,-87.5272473521057,0 -150.2115949088656,-86.95314754908782,0 -159.3099601915958,-86.71852238363812,0 -177.0766975722902,-86.7367419242987,0 173.7151297792575,-87.18547243111809,0 13.02259087562083,-86.35966840156898,0 81.14488471250218,-87.88725244348642,0 50.62372871710384,-85.00577019678271,0 134.1005995420435,-85.62578789244232,0 137.342191367733,-85.21676094023435,0 134.9537968910206,-84.64727679011044,0 127.6095180832093,-84.28631500383617,0 58.72032095841844,-84.02924664080631,0 69.24724000830224,-82.75905747160817,0 82.27748263459516,-82.18217648194808,0 108.70378146308,-82.0756881880763,0 121.3204479152008,-82.96479276521346,0 128.0163452471495,-84.21779248389772,0 130.9249400328774,-83.83708739655414,0 129.4862643314059,-83.03807799142992,0 120.0269792779775,-80.46073786972374,0 116.028157000968,-80.04805367238716,0 74.66016612343657,-80.04881520846486,0 76.58239878266386,-79.0147782543424,0 80.59712390383287,-78.02846935544838,0 84.5712177922487,-77.72567627367928,0 92.0366753623111,-77.81036795375149,0 96.5335107064988,-78.45333936851821,0 97.98631294834743,-80.63738936076138,0 112.3800952456466,-77.96774240343886,0 114.5011540638103,-77.92822424478162,0 116.2956667667648,-77.3795734132369,0 114.7094924003757,-76.23836998004056,0 113.1311311020671,-75.13750522487116,0 109.9150311628908,-75.14941507282282,0 107.7013516817338,-76.01297373166031,0 83.81960392270727,-76.20478639958809,0 80.09399884038001,-75.42368631757148,0 81.86994293555027,-72.73059693677384,0 85.22137131545966,-71.5456478562091,0 103.4553005020279,-71.63670628943898,0 108.0046455747879,-72.62077305088222,0 110.0517139866059,-75.13908735896457,0 108.2704197255246,-72.64340876726493,0 110.8553546404679,-71.78974676100401,0 109.701610675061,-70.35468748483157,0 106.3092673916705,-69.21731265441203,0 84.05815002043883,-69.14128519421742,0 84.88285233456445,-67.31150573597776,0 88.03663677582541,-65.63565443719087,0 91.85465663878774,-65.56009670518412,0 94.80368518661909,-66.65542819322968,0 95.75917876720081,-69.5635583764721,0 106.474730023292,-69.11575939503609,0 108.4024824568454,-68.53848249213826,0 108.3684998628056,-66.63044275706439,0 107.3367418630979,-64.11134623064217,0 105.7734258806231,-64.29573721591257,0 104.2042104672492,-57.23846958726585,0 104.9516284615436,-61.14482627417831,0 86.4451260112604,-61.184398378331,0 88.92189067013281,-63.32388143429478,0
                        </coordinates>
                </LineString>
        </Placemark>
</Document>
</kml>
```

I decided to go to Google Earth and upload the KML file. After opening it Google
Earth spins to the coordinates and it looks like the flight path is showing us a
word. 

- `GUMDROP1`

I'm assuming this is a password for something. Maybe for one of the profiles on
the site. So, I try it out.

{{< image src="drone-path/drone-flight-path.png" alt="drone flight path revealing the password to the web app" position="center" style="border-radius: 8px;" >}}

I went to the login page for the site and after a little trial and error I typed
in these credentials.

- **Username:** ```fritjolf```
- **Password:** ```GUMDROP1```

Hit enter and a I got a pop up that said ```Login successful!```. Looks like
we're in! Well, to that account anyway. Decided to navigate to `Menu > Profile`
and I'm met by the following screen.

What's interesting to me is the Bio. It talks about a secret project that's
underway (making the drone armada) and it says, *"Note to self, remember drone
name, it is the same location as secret snowball warehouses
[Preparations-drone-name.csv](https://hhc24-dronepath.holidayhackchallenge.com/files/secret/Preparations-drone-name.csv)"*
Then it provides a CSV file named `Preparations-drone-name.csv`. 

{{< image src="drone-path/fritjolf-profile.png" alt="fritjolf drone path profile" position="center" style="border-radius: 8px;" >}}

## PowerShell

{{< image src="powershell/powershell-terminal.png" alt="Piney Sappington and the PowerShell terminal" position="center" style="border-radius: 8px;" >}}

> Hey there, friend! Piney Sappington here.
>
> You've probably heard the latest—things are getting tense around here with all 
> the faction business between Wombley and Alabaster. But, let’s focus on this 
> PowerShell Terminal for now.
>
> This is the remote access for our snowball weaponry. We programmed some defense 
> mechanisms to deter intruders, but the system is in a faulty lockdown state.
>
> I certainly wasn't the one that programmed the mechanism. Nope not me. But can 
> you help me find a way through it so I can regain access?
>
> There's two functions I need access to. The snow cannon terminal, which should 
> be easier. And the snow cannon production and deployment plans. That one's 
> better defended.
> 
> Still, I've got faith in you. We need every advantage we can get right now, 
> and you might be just the one to tip the balance.
>
> So, think you can do it? Are you ready to show what you've got?
> 
> -- **Piney Sappington (Front Yard (Act II))**

> **Question 1**
>
> There is a file in the current directory called 'welcome.txt'. Read the 
> contents of this file

```powershell
Get-Content -Path ./welcome.txt
```

```txt
System Overview
The Elf Weaponry Multi-Factor Authentication (MFA) system safeguards access to 
a classified armory containing elf weapons. This high-security system is equipped 
with advanced defense mechanisms, including canaries, retinal scanner and 
keystroke analyzing, to prevent unauthorized access. In the event of suspicious 
activity, the system automatically initiates a lockdown, restricting all access 
until manual override by authorized personnel.

Lockdown Protocols
When the system enters lockdown mode, all access to the armory is frozen. This 
includes both entry to and interaction with the weaponry storage. The defense 
mechanisms become active, deploying logical barriers to prohibit unauthorized 
access. During this state, users cannot disable the system without the 
intervention of an authorized administrator. The system logs all access attempts 
and alerts central command when lockdown is triggered.

Access and System Restoration
To restore access to the system, users must follow strict procedures. First, 
authorized personnel must identify the scrambled endpoint. Next, they must 
deactivate the defense mechanisms by entering the override code and presenting 
the required token. After verification, the system will resume standard 
operation, and access to weaponry is reactivated.
```

> **Question 2**
>
> Geez that sounds ominous, I'm sure we can get past the defense mechanisms. 
> We should warm up our PowerShell skills. 
> How many words are there in the file? 

```powershell 
Get-Content -Path ./welcome.txt | Measure-Object -Word 
```

```powershell

Lines Words Characters Property
----- ----- ---------- --------
        180            

```

> **Question 3**
> 
> There is a server listening for incoming connections on this machine, that 
> must be the weapons terminal. What port is it listening on?

```
PS /home/user> netstat -a 
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 localhost:1225          0.0.0.0:*               LISTEN     
tcp6       0      0 172.17.0.2:40448        52.188.247.147:443      ESTABLISHED
Active UNIX domain sockets (servers and established)
Proto RefCnt Flags       Type       State         I-Node   Path
unix  2      [ ACC ]     STREAM     LISTENING     1591508065 /tmp/tmux-1050/default
unix  2      [ ACC ]     STREAM     LISTENING     1591508466 /tmp/dotnet-diagnostic-163-2907725379-socket
unix  2      [ ACC ]     STREAM     LISTENING     1591508510 /tmp/CoreFxPipe_PSHost.DC4A2E33.163.None.pwsh
unix  3      [ ]         STREAM     CONNECTED     1591508166 /tmp/tmux-1050/default
unix  3      [ ]         STREAM     CONNECTED     1591506936 
PS /home/user> 
```

> 4) You should enumerate that webserver. Communicate with the server using HTTP, what status code do you get?

```powershell
Invoke-WebRequest -Uri http://localhost:1225
Invoke-WebRequest: Response status code does not indicate success: 401 (UNAUTHORIZED).
```

> 5) It looks like defensive measures are in place, it is protected by basic authentication. 
> Try authenticating with a standard admin username and password.

```powershell
Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225 -Credential $(Get-Credential)
```

```powershell
PowerShell credential request
Enter your credentials.
User: admin
Password for user admin: *****
```

```powershell                                                                                                                   
StatusCode        : 200
StatusDescription : OK
Content           : <html>
                    <body>
                    <pre>
                    ----------------------------------------------------
                    🪖 Elf MFA webserver🪖
                    ⚔️ Grab your tokens for access to weaponry ⚔️
                    ⚔️ Warning! Sensitive information on the server, protect a…
RawContent        : HTTP/1.1 200 OK
                    Server: Werkzeug/3.0.6
                    Server: Python/3.10.12
                    Date: Fri, 31 Oct 2025 04:36:55 GMT
                    Connection: close
                    Content-Type: text/html; charset=utf-8
                    Content-Length: 3475
                    
                    <html>
                    <body>
                    <pre>
                    ---…
Headers           : {[Server, System.String[]], [Date, System.String[]], [Connection, System.String[]], [Content-T
                    ype, System.String[]]…}
Images            : {}
InputFields       : {}
Links             : {@{outerHTML=<a href="http://localhost:1225/endpoints/1">Endpoint 1</a>; tagName=A; href=http:
                    //localhost:1225/endpoints/1}, @{outerHTML=<a href="http://localhost:1225/endpoints/2">Endpoin
                    t 2</a>; tagName=A; href=http://localhost:1225/endpoints/2}, @{outerHTML=<a href="http://local
                    host:1225/endpoints/3">Endpoint 3</a>; tagName=A; href=http://localhost:1225/endpoints/3}, @{o
                    uterHTML=<a href="http://localhost:1225/endpoints/4">Endpoint 4</a>; tagName=A; href=http://lo
                    calhost:1225/endpoints/4}…}
RawContentLength  : 3475
RelationLink      : {}
```

> 6) There are too many endpoints here. 
Use a loop to download the contents of each page. What page has 138 words? 
When you find it, communicate with the URL and print the contents to the terminal.

```
PS /home/user> foreach ($link in $links) {                                                                         >> $req = Invoke-WebRequest -AllowUnencryptedAuthentication -Uri $link -Credential $cred; $req.Link 
>> if (($req.Content | Measure-Object -Word).Count -le 138) { 
>> $req.Content
>> }
>> } 
```

```powershell
$links = (Invoke-WebRequest -Uri http://localhost:1225 -Credential $credential -AllowUnencryptedAuthentication).Links
foreach ($link in $links.href) {
    $request = Invoke-WebRequest -Uri $link -Credential $credential -AllowUnencryptedAuthentication
    $count = $request.Content | Measure-Object -Word
    if ($count.words -eq 138) {
        $request.Content
    }
}
```

<html><head><title>MFA token scrambler</title></head><body><p>Yuletide cheer fills the air,<br>    A season of love, of care.<br>    The world is bright, full of light,<br>    As we celebrate this special night.<br>    The tree is trimmed, the stockings hung,<br>    Carols are sung, bells are rung.<br>    Families gather, friends unite,<br>    In the glow of the fire’s light.<br>    The air is filled with joy and peace,<br>    As worries and cares find release.<br>    Yuletide cheer, a gift so dear,<br>    Brings warmth and love to all near.<br>    May we carry it in our hearts,<br>    As the season ends, as it starts.<br>    Yuletide cheer, a time to share,<br>    The love, the joy, the care.<br>    May it guide us through the year,<br>    In every laugh, in every tear.<br>    Yuletide cheer, a beacon bright,<br>    Guides us through the winter night </p><p> Note to self, remember to remove temp csvfile at http://127.0.0.1:1225/token_overview.csv</p></body></html>

> 7) There seems to be a csv file in the comments of that page.  That could be valuable, read the contents of that csv-file!

```
Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225/token_overview.csv -Credential $credential -OutFile token_overview.csv
```

get-content 

```
89f3ec1275407c9526a645602d56e799,REDACTED
33539252b40b5c244b09aee8a57adbc9,REDACTED
152899789a191d9e9150a1e3a5513b7f,REDACTED
7cd48566f118a02f300cdfa75dee7863,REDACTED
d798a55fca64118cea2df3c120f67569,REDACTED
6ef5570cd43a3ec9f43c57f662201e55,REDACTED
bf189d47c3175ada98af398669e3cac3,REDACTED
743ac25389a0b430dd9f8e72b2ec9d7f,REDACTED
270aabd5feaaf40185f2effa9fa2cd6e,REDACTED
8b58850ee66bd2ab7dd2f5f850c855f8,REDACTED
6fd00cbda10079b1d55283a88680d075,REDACTED
612001dd92369a7750c763963bc327f0,REDACTED
010f2cc580f74521c86215b7374eead6,REDACTED
29860c67296d808bc6506175a8cbb422,REDACTED
7b7f6891b6b6ab46fe2e85651db8205f,REDACTED
45ffb41c4e458d08a8b08beeec2b4652,REDACTED
d0e6bfb6a4e6531a0c71225f0a3d908d,REDACTED
bd7efda0cb3c6d15dd896755003c635c,REDACTED
5be8911ced448dbb6f0bd5a24cc36935,REDACTED
1acbfea6a2dad66eb074b17459f8c5b6,REDACTED
0f262d0003bd696550744fd43cd5b520,REDACTED
8cac896f624576d825564bb30c7250eb,REDACTED
8ef6d2e12a58d7ec521a56f25e624b80,REDACTED
b4959370a4c484c10a1ecc53b1b56a7d,REDACTED
38bdd7748a70529e9beb04b95c09195d,REDACTED
8d4366f08c013f5c0c587b8508b48b15,REDACTED
67566692ca644ddf9c1344415972fba8,REDACTED
8fbf4152f89b7e309e89b9f7080c7230,REDACTED
936f4db24a290032c954073b3913f444,REDACTED
c44d8d6b03dcd4b6bf7cb53db4afdca6,REDACTED
cb722d0b55805cd6feffc22a9f68177d,REDACTED
724d494386f8ef9141da991926b14f9b,REDACTED
67c7aef0d5d3e97ad2488babd2f4c749,REDACTED
5f8dd236f862f4507835b0e418907ffc,4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C
# [*] SYSTEMLOG
# [*] Defence mechanisms activated, REDACTING endpoints, starting with sensitive endpoints
# [-] ERROR, memory corruption, not all endpoints have been REDACTED
# [*] Verification endpoint still active
# [*] http://127.0.0.1:1225/tokens/<sha256sum>
# [*] Contact system administrator to unlock panic mode
# [*] Site functionality at minimum to keep weapons active
``

PS /home/user> get-content ./token_overview.csv | Select-String -Pattern "REDACTED" -NotMatch

file_MD5hash,Sha256(file_MD5hash)
5f8dd236f862f4507835b0e418907ffc,4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C
# [*] SYSTEMLOG
# [*] Defence mechanisms activated, REDACTING endpoints, starting with sensitive endpoints
# [*] Verification endpoint still active
# [*] http://127.0.0.1:1225/tokens/<sha256sum>
# [*] Contact system administrator to unlock panic mode
# [*] Site functionality at minimum to keep weapons active

8) Luckily the defense mechanisms were faulty! There seems to be one api-endpoint that still isn't redacted! Communicate with that endpoint!

```
Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225/tokens/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C -Credential $credential                                                                                                                                                              
StatusCode        : 200
StatusDescription : OK
Content           : <h1>[!] ERROR: Missing Cookie 'token'</h1>
RawContent        : HTTP/1.1 200 OK
                    Server: Werkzeug/3.0.6
                    Server: Python/3.10.12
                    Date: Fri, 31 Oct 2025 05:59:32 GMT
                    Connection: close
                    Content-Type: text/html; charset=utf-8
                    Content-Length: 42
                    
                    <h1>[!] ERROR: Missing Co…
Headers           : {[Server, System.String[]], [Date, System.String[]], [Connection, System.String[]], [Content-T
                    ype, System.String[]]…}
Images            : {}
InputFields       : {}
Links             : {}
RawContentLength  : 42
RelationLink      : {}


```

9) It looks like it requires a cookie token, set the cookie and try again.

```
/home/user> $cookie = New-Object System.Net.Cookie
PS /home/user> $cookie.Name = "token"
PS /home/user> $cookie.value = "5f8dd236f862f4507835b0e418907ffc"
PS /home/user> $session = new-object Microsoft.PowerShell.Commands.WebRequestSession
PS /home/user> $session.cookies.Add($cookie);
MethodInvocationException: Exception calling "Add" with "1" argument(s): "The parameter 'cookie.Domain' cannot be an empty string. (Parameter 'cookie')"
PS /home/user> $cookie.domain = localhost
localhost: The term 'localhost' is not recognized as a name of a cmdlet, function, script file, or executable program.
Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
PS /home/user> $cookie.domain = "localhost"
PS /home/user> $session.cookies.Add($cookie);
PS /home/user> Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225/tokens/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C -Credential $credential -WebSession $session                                                                                                                                         
StatusCode        : 200
StatusDescription : OK
Content           : <h1>Cookie 'mfa_code', use it at <a href='1761890946.026579'>/mfa_validate/4216B4FAF4391EE4D3E
                    0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C</a></h1>
RawContent        : HTTP/1.1 200 OK
                    Server: Werkzeug/3.0.6
                    Server: Python/3.10.12
                    Date: Fri, 31 Oct 2025 06:09:06 GMT
                    Connection: close
                    Content-Type: text/html; charset=utf-8
                    Content-Length: 148
                    
                    <h1>Cookie 'mfa_code', u…
Headers           : {[Server, System.String[]], [Date, System.String[]], [Connection, System.String[]], [Content-T
                    ype, System.String[]]…}
Images            : {}
InputFields       : {}
Links             : {@{outerHTML=<a href='1761890946.026579'>/mfa_validate/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5
                    D124FE08E227F84D687A7E06C</a>; tagName=A; href=1761890946.026579}}
RawContentLength  : 148
RelationLink      : {}
```

```
Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225/tokens/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C -Credential $credential -Headers @{Cookie="token=5f8dd236f862f4507835b0e418907ffc"}                     
                                                                                                                   
StatusCode        : 200
StatusDescription : OK
Content           : <h1>Cookie 'mfa_code', use it at <a href='1761891443.3204877'>/mfa_validate/4216B4FAF4391EE4D3
                    E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C</a></h1>
RawContent        : HTTP/1.1 200 OK
                    Server: Werkzeug/3.0.6
                    Server: Python/3.10.12
                    Date: Fri, 31 Oct 2025 06:17:23 GMT
                    Connection: close
                    Content-Type: text/html; charset=utf-8
                    Content-Length: 149
                    
                    <h1>Cookie 'mfa_code', u…
Headers           : {[Server, System.String[]], [Date, System.String[]], [Connection, System.String[]], [Content-T
                    ype, System.String[]]…}
Images            : {}
InputFields       : {}
Links             : {@{outerHTML=<a href='1761891443.3204877'>/mfa_validate/4216B4FAF4391EE4D3E0EC53A372B2F24876ED
                    5D124FE08E227F84D687A7E06C</a>; tagName=A; href=1761891443.3204877}}
RawContentLength  : 149
RelationLink      : {}
```

## Showball Showdown

## Microsoft KC7 (The Great Elf Conflict)

[Answer](http://kc7cyber.com/go/hhc24) two sections for silver, all four 
sections for gold.

{{< image src="microsoft-kc7/microsoftkc7.png" alt="intial page for microsoft kc7" position="center"  style="border-radius: 8px;" >}}

## KQL 101

{{< image src="microsoft-kc7/section1.png" alt="KQL 101 section" position="center"  style="border-radius: 8px;" >}}

## Operation Surrender

{{< image src="microsoft-kc7/section2.png" alt="operation surrender section" position="center"  style="border-radius: 8px;" >}}

## Operation Snowfall

{{< image src="microsoft-kc7/section3.png" alt="operation snowfall section" position="center"  style="border-radius: 8px;" >}}

## Echos in the Frost

{{< image src="microsoft-kc7/section4.png" alt="echos in the frost section" position="center"  style="border-radius: 8px;" >}}

