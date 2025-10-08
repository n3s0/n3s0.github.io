---
title: "The Python Challenge Write Up"
date: "2021-12-18T18:11:04-05:00"
summary: "Notes and PoC code for The Python Challenge."
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

## Overview

I decided to move this over from the other site. It fits the setting 
for this one more. I will pick this back up. Looks like I haven't 
visited this in a while. No time like the present, though. I will 
update this article as time goes on. Might be worth comming back and 
checking the progress.

Decided to go through The Python Challenge. It's a site that provides 
riddles that can be solved using the Python programming language. I 
will be using this as a scratchpad to track progress. Each level will 
have a script posted in it's solution. I will provide comments in the 
code to explain what it does. There will be minimal writting hopefully.

If anyone would like to try their hand at this also, they can find it 
at the following link.

- [Python Challenge](http://www.pythonchallenge.com/index.php)

I'm available should anyone be stuck. I welcome those who would need 
assistance to contact me. I will assist however I can without giving 
you everything. Personally, I hope you don't read this article until 
you finish it. You are welcome to send me solutions. I would love to 
see them.

## Solution Repository

I have hosted the solution to this on my GitHub. I built a modular 
commandline script that will list the available modules available. Not 
only that. But, the script will also go through the solution. It's a 
very simple script. Only two arguments are required. Help if you count 
that. Help will output if you just run the script without any arguments.

- [n3s0/python-challenge](https://github.com/n3s0/python-challenge)

The repository will provide information should you need to clone it to 
your local machine. Please submit any issues that you find with the 
code. It would be most appreciated.

## About

Below is from the about page for The Python Challenge. Author of the 
challenge provides more information on the challenge.

_Python Challenge is a game in which each level can be solved by a bit 
of (Python) programming._

_The Python Challenge was written by Nadav Samet._

_All levels can be solved by straightforward and very short1 scripts._

_Python Challenge welcomes programmers of all languages. You will be 
able to solve most riddles in any programming language, but some of 
them will require Python._

_Sometimes you'll need extra modules. All can be downloaded for free 
from the internet._

_It is just for fun - nothing waits for you at the end._

_Keep the scripts you write - they might become useful._

_1 well, except of level 32._

## Challenge 0

Link for this challenge is below.

- [http://www.pythonchallenge.com/pc/def/0.html](http://www.pythonchallenge.com/pc/def/0.html)

This is a picture of an old monitor with a picture. The picture shows 2 
to power of 38. This also provides the following hint.

- Hint: try to change the URL address.

### Solution

Below is the function that provides the solution. The solution is to 
utilize the numbers provided on the screen to obtain the exponent. When 
it's appended by to the URL it will take you to the next challenge.

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
    solution_url = "{0}{1}.html".format(PARTIAL_CHALLENGE_URL, str(solution))

    return solution_url

```

Below is the ouput from the script.

```sh
The Python Challenge Solutions
Initializing module...
Challenge: 0
Solution: http://www.pythonchallenge.com/pc/def/274877906944.html
```

The script provides the solution URL to be the following link. This will 
also take me to the next challenge. Which will be discussed in the next 
section.

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

Note that the URL provided from the previous soluton actually redirects 
to the following link:

- [http://www.pythonchallenge.com/pc/def/map.html](http://www.pythonchallenge.com/pc/def/map.html)

### Solution

Well, I'm revisiting this challenge after a moment of not doing much. 
Based on the information provided in the picture and in the hint. I 
figured out that this is a shift cipher. This was shifted two positions 
backwards in the alphabet for only the characters that are all non 
special characters. Yes, spaces count as special characters.

To test this hypthesis, I took a chunk of the string and I converted it 
by hand. Seemed to work as expected after shifting the letters back 
in the alphabet twice.

For example.

- Before: ```g fmnc wms```
- After: ```i hope you```

Looks like that's working. There are some problems to solve. Here 
but, I'll get into that when I have more time. Below is the current 
explaination.

Below is the "full" script. This or a refactored version of this will 
be added to the repository. Little explaination on what this does.

The challenge string is stored in the ```ChallengeString``` variable.

The ```ChallengeOneSolution(string CipherText)``` function will iterate 
and check the cipher text and check if its an alphabetical character.
If it is, it'll convert it to unicode, determine it's place in the 
alphabet, add two to the ord, and then convert it back to char.

If it's a special character, it will just append it to the DataArray 
and have a nice day.

Note that this is cheating a little. I'll provide an update to the 
function when I don't need the ```isalpha()``` method.

Function will then join the objects in the DataArray and return the 
data after it's put back together.

The script itself will call the ```ChallengeOneSolution(string CipherText)``` 
function as it's going through the motions. Outputting the work it's 
done to the user.

```python
"""
title: Challenge 1 Solution
author: Timothy Loftus (n3s0)
challenge description:

K -> M
O -> Q
E -> G

Nobody thinks twice before solving this.

"""

# Variables for containing the challenge strings
ChallengeString = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."
ChallengeUrlString = "map"

def ChallengeOneSolution(CipherText):
    """
    Solves challenge 1 for The Python Challenge
    """

    # Declare list variable for the challenge
    DataArray = []

    # Iterate through the cipher text providing the iteration.
    for StringIteration in CipherText:
        # If the string is alphabetical add two to the ord
        # also if the ord is at the end of the alphabet (e.g.
        # z) go to the begining.
        # Change it to a char when the operation is complete.
        if StringIteration.isalpha():
	    DataArray.append(chr((ord(StringIteration) - 97 + 2) % 26 + 97))
        # Should the string be a special char, just add it.
        else:
	    DataArray.append(StringIteration)

    # join the list and return it for display.
    return ''.join(DataArray)

# Bits for output presentation.
print ("Challenge 1 Solution\n")
print ("Below is the Challenge String:\n\n{0}".format(ChallengeString))
print ("\nBelow is the conversion of the Challenge String:\n\n{0}".format(ChallengeOneSolution(ChallengeString)))
print ("\nBelow is the URL Conversion Reqested. Going to improve this later:\n")
print ("http://www.pythonchallenge.com/pc/def/{0}.html\n".format(ChallengeOneSolution(ChallengeUrlString)))
```

Below is just the function just in case it's needed for future use.

```python
def ChallengeOneSolution(CipherText):

    DataArray = []

    for StringIteration in CipherText:
        if StringIteration.isalpha():
	    DataArray.append(chr((ord(StringIteration) - 97 + 2) % 26 + 97))
        else:
	    DataArray.append(StringIteration)

    return ''.join(DataArray)
```

Below is the output from the script. WHen it's run, it should look 
something like the output below. Just to give the user/me an idea of 
what it's doing. Nothing major.

```sh
Challenge 1 Solution

Below is the Challenge String:

g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.

Below is the conversion of the Challenge String:

i hope you didnt translate it by hand. thats what computers are for. doing it in by hand is inefficient and that's why this text is so long. using string.maketrans() is recommended. now apply on the url.

Below is the URL Conversion Reqested. Going to improve this later:

http://www.pythonchallenge.com/pc/def/ocr.html
```

Time now to go to the following link for the next challenge.

- [http://www.pythonchallenge.com/pc/def/ocr.html](http://www.pythonchallenge.com/pc/def/ocr.html)

Although, there are some things that I'd like to change or improve on 
I will focus on that later. Maybe make a second solution and put that 
below this one. One that actually does the math determining if it is 
indeed an alphabetical character.

## Challenge 2

The next challenge provides a picture of a book with a 2 in the 
left-hand corner. Below the image is the following text.

recognize the characters. maybe they are in the book,
but MAYBE they are in the page source.

The URL doens't change/redirect from the previous solution.

### Solution

Nothing to see here just yet. Try to figure it out. :)
