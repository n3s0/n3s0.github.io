---
title: "SadServers: Lhasa: Easy Math/Calculating With Numbers"
date: 2024-03-09T09:56:01-05:00
summary: "Write up for the Lhasa Challenge."
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

## Scenario
---

- Level: Easy

Description: 

There's a file /home/admin/scores.txt with two columns (imagine the first number is a counter and the second one is a test score for example).

Find the average (more precisely; the arithmetic mean: sum of numbers divided by how many numbers are there) of the numbers in the second column (find the average score).

Use exactly two digits to the right of the decimal point. i. e., use exaclty two "decimal digits" without any rounding. Eg: if average = 21.349 , the solution is 21.34. If average = 33.1 , the solution is 33.10.

Save the solution in the /home/admin/solution file, for example: echo "123.45" > ~/solution

Tip: There's bc, Python3, Golang and sqlite3 installed in this VM.

Test: md5sum /home/admin/solution returns 6d4832eb963012f6d8a71a60fac77168 solution


## Test

md5sum /home/admin/solution</kbd> returns <kbd>6d4832eb963012f6d8a71a60fac77168  solution</kbd>

## Solution
---

```sh
cat scores.txt
```

```sh
1 7.4
2 0.4
3 1.6
4 6.2
5 7.6
6 7.7
7 5.6
8 4.4
9 8.0
10 7.0
11 3.1
12 5.1
13 3.2
14 0.3
15 2.2
16 6.7
17 0.8
18 8.3
19 1.8
20 9.0
21 9.2
22 9.6
23 5.9
24 8.4
25 4.0
26 2.3
...
```

Let's see what they provide for options. Although, I will probably enjoy solving this riddle in other languages. I think I'll post the code for other languages later. But, for now I'll focus on what's on the machine already.

So there is Python. Going to check the version for that.

```sh
python3 --version
```

Looks like this is on Python 3.9.

```sh
Python 3.9.2
```

Sounds like there is also Go. Going to check the version for that.

```sh
go version
```

Looks like I'm on Go 1.15 on this machine.

```sh
go version go1.15.15 linux/amd64
```

I will provide a new section at the bottom of the solution that contains the code from these examples.

## Code
---

### Go
---

### Python
---