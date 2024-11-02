---
title: 'Randomize Wallpapers For Sway Using Python'
date: 2024-11-01T16:50:00-06:00
summary: "Notes for randomizing backgrounds in Sway"
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["code"]
---

## Summary
---

I've been working on improving my setup for development and personal use. I've
began to ever so slowly do this over the course of a couple of months and I'm 
starting to enjoy the tiling window manager Sway.

Sway is simple to use and setup; with it being similar to i3 window manager.
Which makes it perfect considering that I've come to warm up to Wayland overall.

But, with that comes a very minor issue that I just solved today. I tend to
enjoy having a different background every other startup or reload as a personal
preference. I also needed to dust off some of my Python chops. I haven't written
anything in Python in probably a month. So, this seemed to be a good reason to
write something for it.

The script is pretty simple. So, if anyone would rather just read it. Then below
is the path to the script.

- [n3s0/scripts/python/randfile](https://github.com/n3s0/scripts/tree/main/python/randfile)

I think that settles the introductions. Now on to the script and the solution.

## Scripted Solution
---

A bulk of the work performed by the script is a function named randomFile()
which ingests a directory path.

It will check to make sure the base path exists and is a directory.

Create an empty list and add every absolute path to all of the files in the
directory if it's a file.

Then it will use the random.choice() method to provide a random file.

```python
def randomFile(dir_path):
    """Outputs the full path of a random file in specified directory"""
    if not os.path.exists(dir_path):
        sys.exit("path does not exist")
    if not os.path.isdir(dir_path):
        sys.exit("input is not a directory")

    file_paths = []

    for file in os.listdir(dir_path):
        abs_path = os.path.join(dir_path, file)
        if os.path.isfile(abs_path):
            file_paths.append(abs_path)

    return random.choice(file_paths)
```

That is a gist of what it does. Couple that with some argument handling and a
print statement to output the path and we're done. I'll be updating this
regualrly as I see better ways to improve it.

```python
if __name__ == "__main__":
    args = sys.argv
    arg_count = len(args)

    if arg_count == 0:
        print ("randomfile")
        print ("usage: randomfile [dirpath]")

    if arg_count > 2:
        sys.exit("more then one argument was provided")

    path = args[1]

    random_path = randomFile(path)

    print (f"{random_path}")
```

## Problem Solved
---

In the configuration file for the Sway there is a section for setting the
background on all displays. This part of the configuration can take the output
from bash command substitution; e.g. ```$()```. So it can run the script no 
problem. So I updated the following line.

This will run the script from the ```.config/wallpaper/``` path and output the
choice the script provides.

```sh
output * bg $(~/.local/scripts/python/randfile/randfile ~/.config/wallpaper/) fill
```



