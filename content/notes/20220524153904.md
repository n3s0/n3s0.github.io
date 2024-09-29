---
title: "SELinux: APPLICATION NAME"
date: "2022-05-24T15:39:04-05:00"
description: "Some introduction to the SELinux series and what it's for."
tags: [ "selinux", "SELinux Series" ]
draft: false
type: post
showTableOfContents: true
---

Consider this to be a series on how to "properly" configure SELinux and
possibly file permissions for various applications. Mostly web applications.
This series of posts is intended to provide a reference for those
who would rather utilize SELinux as opposed to just putting it into
permissive mode or disable it completely. 

These posts will not provide information on how to install the
applications the permissions are being set for. It will only provide 
permissions for the file system and SELinux that I have notated while
installing the application that is being discussed. This site provides 
a search engine. So, if people need to find the SELinux configuration 
that suites a particular application they can do so. Otherwise this can 
be requested and I'll work it out then later post.

Names of the posts will be "SELinux: APPLICATION NAME". Where 
APPLICATION NAME serves an obvious purpose. I will explain
what the permissions do as best I can. If there are errors. Feel free to
send me an email with whatever corrections you feel are necessary. I'll
review and update the post accordingly depending on whether I agree with
it or not.

Two sections will include in these posts and whatever file permissions
needed so the application can run and so it can run securely.

Hopefully these future posts can add to some benefit to those who may
come across it. I know these will be helpful to me in the future. I
don't know about you. But, I get tired of turning off SELinux so
applications will work. It's installed by default. So, we might as well
understand it and use it unless we've been given no other choice.

