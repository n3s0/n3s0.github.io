---
title: "Over The Wire: Bandit 0 -> 1"
date: 2019-04-01T05:54:26-06:00
summary: "Notes from the Bandit 0 -> 1 challenge."
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

The password for the next level is stored in a file called readme located in the home directory. Use this password to log into bandit1 using SSH. Whenever you find a password for a level, use SSH (on port 2220) to log into that level and continue the game.

## Commands you may need to solve this level
---

ls , cd , cat , file , du , find

TIP: Create a file for notes and passwords on your local machine!

Passwords for levels are not saved automatically. If you do not save them yourself, you will need to start over from bandit0.

Passwords also occassionally change. It is recommended to take notes on how to solve each challenge. As levels get more challenging, detailed notes are useful to return to where you left off, reference for later problems, or help others after you’ve completed the challenge.

## Solution
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