---
title: "Over The Wire: Bandit 0"
date: 2019-04-01T05:53:26-06:00
summary: "Notes from the Bandit 0 challenge."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
invertPagination: true
showToC: true
openToC: false
showComments: false
showHeadingAnchors: true
---

## Level Goal
---

The goal of this level is for you to log into the game using SSH. The 
host to which you need to connect is bandit.labs.overthewire.org, on 
port 2220. The username is bandit0 and the password is bandit0. Once 
logged in, go to the Level 1 page to find out how to beat Level 1.

## Commands you may need to solve this level
---

- ssh

## Solution
---

Below are the credentials for Level 0.

- Username: bandit0
- Password: bandit0

This is more so just something to get you started. Logged in using the 
credentials using the following command and moved on to the next level.

```sh
ssh bandit0@bandit.labs.overthewire.org -p 2220
```

Below is the banner for Bandit. Looks like login was successful.

```sh
Linux bandit.otw.local 5.4.8 x86_64 GNU/Linux

      ,----..            ,----,          .---.
     /   /   \         ,/   .`|         /. ./|
    /   .     :      ,`   .'  :     .--'.  ' ;
   .   /   ;.  \   ;    ;     /    /__./ \ : |
  .   ;   /  ` ; .'___,/    ,' .--'.  '   \' .
  ;   |  ; \ ; | |    :     | /___/ \ |    ' '
  |   :  | ; | ' ;    |.';  ; ;   \  \;      :
  .   |  ' ' ' : `----'  |  |  \   ;  `      |
  '   ;  \; /  |     '   :  ;   .   \    .\  ;
   \   \  ',  /      |   |  '    \   \   ' \ |
    ;   :    /       '   :  |     :   '  |--"
     \   \ .'        ;   |.'       \   \ ;
  www. `---` ver     '---' he       '---" ire.org


Welcome to OverTheWire!
```

Now that's finished. I thing this is where the real fun begins.