---
layout: single
title: Reference CLI - README
classes: wide
collection: reference-cli
---

## Overview

Command line utility for referencing useful information and data.

## Working Modules

Below are the current working modules for the script.

- natopa: NATO Phonetic Alphabet.
- int-morse: International Morse Code.

## Usage

Here is the usage for the application.

```sh

______      __                             
| ___ \    / _|                            
| |_/ /___| |_ ___ _ __ ___ _ __   ___ ___ 
|    // _ \  _/ _ \ '__/ _ \ '_ \ / __/ _ \
| |\ \  __/ ||  __/ | |  __/ | | | (_|  __/
\_| \_\___|_| \___|_|  \___|_| |_|\___\___|


usage: reference [-h] [-l] [-s SHOW] [--info]

Provides modules related to various topics. Data is outputted in a readable table format. For example, some work in
call centers and need to utilize the phonetic alphabet. Type the needed command and you'll have what you need.

options:
  -h, --help            show this help message and exit
  -l, --list            show available modules and exit
  -s SHOW, --show SHOW  run reference module the user specified and exit
  --info                provide more info on the application

For bug reports or feature requests. Like adding new reference tables. Please submit an issue to the projects GitLab
repository so it can be reviewed. https://gitlab.com/n3s0/reference
```

## Installation

Below is brief documentation for installation. Soon there will be a 
setup script or setup method for automating the process.

1. Clone the git repository.

```sh
git clone https://gitlab.com/n3s0/reference.git
```

2. Install the Python dependencies.

```sh
pip install --user -r requirements.txt
```

3. Check usage to confirm that it's working as expected.

```sh
python reference.py
```

