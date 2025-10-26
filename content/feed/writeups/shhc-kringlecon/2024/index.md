---
title: "SANs Holiday Hack Challenge 2024: Snow-maggedon"
author: "Timothy Loftus (n3s0)"
date: 2025-10-25T00:38:40-06:00
lastmod: 2025-10-26
summary: "Writeup from what I've completed for SANs Holiday Hack Challenge 2024: Snow-maggedon."
draft: false
---

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
