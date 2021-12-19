---
title: "The Python Challenge - Writeup"
date: "2021-12-18"
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

I'm available should anyone be stuck. I welcome those who would need assistance to contact me. I will assist however I can without
giving you everything. Personally, I hope you don't read this article until you finish it. You are welcome to send me solutions. I
would love to see them.

### Solution Repository

I have hosted the solution to this on my GitHub. I built a modular commandline script that will list the available modules available.
Not only that. But, the script will also go through the solution. It's a very simple script. Only two arguments are required. Help
if you count that. Help will output if you just run the script without any arguments.

- [n3s0/python-challenge](https://github.com/n3s0/python-challenge)

The repository will provide information should you need to clone it to your local machine. Please submit any issues that you find
with the code. It would be most appreciated.

### About

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

This is a picture of an old monitor with a picture. The picture shows 2 to power of 38. This also provides the following hint.

- Hint: try to change the URL address.

### Solution

Below is the function that provides the solution. The solution is to utilize the numbers provided on the screen to
obtain the exponent. When it's appended by to the URL it will take you to the next challenge.

```python
def solutionZero():
    """
    Solves the zeroeth challenge for The Python Challenge.
    """
    # Partial URL for the challenge
    PARTIAL_CHALLENGE_URL = "http://www.pythonchallenge.com/pc/def/"

    # Exponent Solution provided from the image.
    solution = 2**38

    # Solution URL -- Returned
    SOLUTION_URL = "{0}{1}.html".format(PARTIAL_CHALLENGE_URL, str(solution))

    return SOLUTION_URL

```

Below is the ouput from the script.

```sh
The Python Challenge Solutions
Challenge: 0
Initializing module...
Solution: http://www.pythonchallenge.com/pc/def/274877906944.html
```

The script provides the solution URL to be the following link. This will also take me to the next challenge. Which will be
discussed in the next section.

- [http://www.pythonchallenge.com/pc/def/274877906944.html](http://www.pythonchallenge.com/pc/def/274877906944.html)

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
