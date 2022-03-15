---
layout: single
title: File & Directory Structure
permalink: "/reference-cli/structure/"
classes: wide
sidebar:
  nav: "reference-cli"
---

## Overview

The applications structure can be found below. This isn't anything too
special. It's just here to give a general idea as to what is what and
where is where. I'll work on it's explanation in time.

## Directory & File Structure

```sh
reference-cli/                          # Root directory of the app.
├── README.md                           # Where you read a little about the app and find documentation.
├── reference-cli.py                    # How the app is run. Glues everything together.
├── requirements.txt                    # Used to install the Python Libraries.
└── src                                 # Root for the source code.
    ├── core.py                         # Contains the critical functionality.
    ├── morse_code_ref.py               # Morse code module
    └── phonetic_alphabet_ref.py        # Phonetic Alphabet module
```
