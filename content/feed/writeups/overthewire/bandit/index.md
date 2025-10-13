---
title: "Over The Wire: Bandit"
date: 2019-04-01T05:52:26-06:00
summary: "Notes from doing the Over The Wire Bandit wargame."
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

## Summary
---

This is a list of all of the solutions I've completed for the Over The 
Wire - Bandit wargame. This was completed while I was in college. So it's
probably ready for a do over just to see how well it aged.

The thing I enjoyed about this one is how well it flowed together. It was
excellent for anyone who needs to kill a couple hours and spend time 
researching new skills or polishing old ones.

Below is a link to the Bandit challenge.

- [Over The Wire - Bandit](https://overthewire.org/wargames/bandit/)

## Bandit Introductions
---

The Bandit wargame is aimed at absolute beginners. It will teach the 
basics needed to be able to play other wargames. If you notice something 
essential is missing or have ideas for new levels, please let us know!

## Note for beginners
---

This game, like most other games, is organized in levels. You start at 
Level 0 and try to “beat” or “finish” it. Finishing a level results in 
information on how to start the next level. The pages on this website 
for “Level ” contain information on how to start level X from the 
previous level. E.g. The page for Level 1 has information on how to 
gain access from Level 0 to Level 1. All levels in this game have a page 
on this website, and they are all linked to from the sidemenu on the left 
of this page.

You will encounter many situations in which you have no idea what you 
are supposed to do. Don’t panic! Don’t give up! The purpose of this game 
is for you to learn the basics. Part of learning the basics, is reading 
a lot of new information.

There are several things you can try when you are unsure how to continue:

First, if you know a command, but don’t know how to use it, try the 
manual (man page) by entering “man ” (without the quotes). e.g. if you 
know about the “ls” command, type: man ls. The “man” command also has a 
manual, try it. Press q to quit the man command. Second, if there is no 
man page, the command might be a shell built-in. In that case use the 
“help ” command. E.g. help cd Also, your favorite search-engine is your 
friend. Learn how to use it! I recommend Google. Lastly, if you are still 
stuck, you can join us on IRC You’re ready to start! Begin with Level 
0, linked at the left of this page. Good luck!

## Connection Requirements
---

- Protocol/Software Used: SSH
- Host: bandit.labs.overthewire.org
- Port 2220

You can finally find the wargame sections below.

## Bandit 0

### Level Goal
---

The goal of this level is for you to log into the game using SSH. The 
host to which you need to connect is bandit.labs.overthewire.org, on 
port 2220. The username is bandit0 and the password is bandit0. Once 
logged in, go to the Level 1 page to find out how to beat Level 1.

### Commands you may need to solve this level
---

- ssh

### Solution
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

## Bandit 0 -> 1

### Level Goal
---

The password for the next level is stored in a file called readme located in the home directory. Use this password to log into bandit1 using SSH. Whenever you find a password for a level, use SSH (on port 2220) to log into that level and continue the game.

### Commands you may need to solve this level
---

ls , cd , cat , file , du , find

TIP: Create a file for notes and passwords on your local machine!

Passwords for levels are not saved automatically. If you do not save them yourself, you will need to start over from bandit0.

Passwords also occassionally change. It is recommended to take notes on how to solve each challenge. As levels get more challenging, detailed notes are useful to return to where you left off, reference for later problems, or help others after you’ve completed the challenge.

### Solution
---

Logged into the game server using the credentials for the bandit2 user. To see what I was looking for I used the ls command and it looks like there is a file with the name “spaces in this filename”.

```sh
bandit2@bandit:~$ ls -la
total 24
drwxr-xr-x  2 root    root    4096 Oct 16 14:00 .
drwxr-xr-x 41 root    root    4096 Oct 16 14:00 ..
-rw-r--r--  1 root    root     220 May 15  2017 .bash_logout
-rw-r--r--  1 root    root    3526 May 15  2017 .bashrc
-rw-r--r--  1 root    root     675 May 15  2017 .profile
-rw-r-----  1 bandit3 bandit2   33 Oct 16 14:00 spaces in this filename
```

Based on what I can see here, the bandit3 user has read and writer permissions and the bandit2 user has read permissions. Now time for opening the file and viewing the password. Spaces aren’t that tricky, I just had to escape them so bash knows I’m not trying to enter another command.

```sh
cat spaces\ in\ this\ filename
```
I've redacted the output from the password.

There is also another method, which is using double-quotes to read the file:

```sh
cat "spaces in this filename"
```

I have redacted the output of the password from this.

This also tells the terminal that this is the full file name. Below is the password provided for Level 3 and the username that will need to be used:

- Username: bandit3
- Password: PASSWORD REDACTED
