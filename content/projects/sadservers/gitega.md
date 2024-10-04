---
title: "SadServers: Gitega: Find the Bad Git Commit"
date: 2024-20-03T17:56:47-06:00
summary: "Notes from running through the Gitega scenario from SadServers."
draft: true
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

This is my writeup for the Gitega scenario for Sad Servers. It looks like
this will be pretty easy.

- Level: Easy
- Type: Do
- Tags: git  

## Description
---

The directory at /home/admin/git has a Git repository with 
a Golang program and a test for it.

To execute the test, from this "git" directory run: ```go test```. The 
last (current HEAD) commit fails the test. Suppose the first commit 
passed the test.

So, to execute the test. Run the following command.

```sh
go test
```

Find the (long hash) commit that first broke the test and enter it in 
the /home/admin/solution file. 

For example: 

```sh
echo 9e80a7eb1b09385e93ab4a76cb2c93beec48fd9f > /home/admin/solution
```

## Test
---

Doing ```md5sum /home/admin/solution``` returns 
```f7db1bb6b7bfcd66a4eb66782804b39d```.

The "Check My Solution" button runs the script 
/home/admin/agent/check.sh, which you can see and execute.

## Solution
---

Solution coming soon.