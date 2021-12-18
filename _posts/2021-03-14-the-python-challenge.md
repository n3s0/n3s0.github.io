---
title: "The Python Challenge"
date: "2021-03-14"
class: "wide"
excerpt: "Notes and PoC code for my crack at The Python Challenge. This is an on going post that I update as I solve challenges."
categories:
- python
- challenge
tags:
- python-challenge
- python
---

## Overview

I decided to move this over from the other site. It fits the setting for this one more. I will pick this back up. Looks like
I haven't visited this in a while. No time like the present, though. I will update this article as time goes on. Might be
worth comming back and checking the progress.

Decided to go through The Python Challenge. It's a site that provides riddles that can be solved using the Python 
programming language. I will be using this as a scratchpad to track progress. Each level will have a script posted 
in it's solution. I will provide comments in the code to explain what it does. There will be minimal writting hopefully.

If anyone would like to try their hand at this also, they can find it at the following link.

- [Python Challenge](http://www.pythonchallenge.com/index.php)

I'm available should anyone be stuck. I welcome those who would like to. I may learn something from your method for 
attacking the problems.

#### About

Below is from the about page for The Python Challenge. I'm just posting this to provide the authors explaination on what this is.

Python Challenge is a game in which each level can be solved by a bit of (Python) programming.

The Python Challenge was written by Nadav Samet.

All levels can be solved by straightforward and very short1 scripts.

Python Challenge welcomes programmers of all languages. You will be able to solve most riddles in any programming language, 
but some of them will require Python.

Sometimes you'll need extra modules. All can be downloaded for free from the internet.

It is just for fun - nothing waits for you at the end.

Keep the scripts you write - they might become useful.

1 well, except of level 32.

## Challenge 0

Link for this challenge is below.

- [http://www.pythonchallenge.com/pc/def/0.html](http://www.pythonchallenge.com/pc/def/0.html)

This is a picture of an old monitor with a picture. The picture shows two to power of 38. This also provides the following hint.

- Hint: try to change the URL address.

### Solution

Below is the script for the solution.

```python
"""
title: Python Challenge - 0 - Solution
author: Timothy Loftus (n3s0)
date: 03/14/2021
file: 0.py
"""

# Partial URL to make string formatting easy.
partial_url = "http://www.pythonchallenge.com/pc/def/"
solution = 2**38 # Exponents

# Print the new URL.
print(partial_url + "{0}.html".format(str(solution)))
print("Woot")
```

Below is the ouput from the script. This has provided the link to the new challenge. 

- [http://www.pythonchallenge.com/pc/def/274877906944.html](http://www.pythonchallenge.com/pc/def/274877906944.html)

```sh
n3s0:PythonChallenge/ $ python 0.py                                                                        [1:22:59]
http://www.pythonchallenge.com/pc/def/274877906944.html
Woot
```

## Challenge 1

This challenge provides a picture of a notebook with the following text below.

- K -> M
- O -> Q
- E -> G

There is a hint that says:  everybody thinks twice before solving this.

Below is the challenge text.

```
g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj. 
```

### Solution

This is a cipher text challenge. In this case, deciphering the text requires that you shift all of the letters in the cipher 
text by two and ignoring special characters and white space. So, G will be I for example. This can be done by hand. But, it's 
a programming challenge. Need to write a script so the challenge can be solved using a programming language; Python specifically. 

More will be comming soon.
