---
layout: single
title: Development Environment
permalink: "/reference-cli/devenv/"
toc: true
sidebar:
  nav: "reference-cli"
---

## Overview

This section discusses development environment setup for the
application. Just in case anyone would like to add their own modules and
contribute to this project.

For a list of requirements, please see the
[requirements]("/reference-cli/requirements/") page. This will provide
an overview of what libraries are used and installed when you do install
them. This is just here as an instructional on how to setup the
development environment.

## Environment Setup

### Virtualenv

To setup the environment, contributors to the project will need to
use either ```virtualenv``` or ```venv```. This section will go 
through creating the sandbox for the code. This is mostly so
contributors aren't polluting their environments.

To start, run the following command. Note that if changing the name is
required. Do so. Though, this should be sufficient.

```sh
python -m virtualenv reference-cli-venv && cd reference-cli-venv
```

Below is the file contents and directory look from the ```venv```
directory. This is where all of the magic happens.

```sh
[jdoe@example reference-cli-venv]$ ls -lah
total 8.0K
drwxrwxr-x. 1 jdoe jdoe  62 Mar 14 22:25 .
drwxrwxr-x. 1 jdoe jdoe   8 Mar 14 22:25 ..
drwxrwxr-x. 1 jdoe jdoe 320 Mar 14 22:25 bin
-rw-rw-r--. 1 jdoe jdoe  40 Mar 14 22:25 .gitignore
drwxrwxr-x. 1 jdoe jdoe  20 Mar 14 22:25 lib
drwxrwxr-x. 1 jdoe jdoe  20 Mar 14 22:25 lib64
-rw-rw-r--. 1 jdoe jdoe 202 Mar 14 22:25 pyvenv.cfg

```

The following command activates the virtual environment. This will
prevent the libraries; to be installed, from polluting your overall
environment.

```sh
source bin/activate
```

Below is what the prompt for the virtual environment should look like
when it's activated.

```sh
(reference-cli-venv) [jdoe@example reference-cli-env]$
```

Clone the git repository and move into to the ```reference-cli```
directory.

```sh
git clone https://gitlab.com/n3s0/reference-cli.git
```

Install the required libraries using pip.

```sh
pip install -r requirements.txt
```

Once the libraries have been installed. Contributors should be able to
run the app using the command below.

```sh
(reference-cli-venv) [test@example reference-cli]$ python reference-cli.py 
```

The desired output is listed as an example.

```sh
    ______      __                             
    | ___ \    / _|                            
    | |_/ /___| |_ ___ _ __ ___ _ __   ___ ___ 
    |    // _ \  _/ _ \ '__/ _ \ '_ \ / __/ _ \
    | |\ \  __/ ||  __/ | |  __/ | | | (_|  __/
    \_| \_\___|_| \___|_|  \___|_| |_|\___\___|

    
usage: reference [-h] [-l] [-s SHOW] [--info]

Provides modules related to various topics. Data is outputted in a readable table format. For example, some work in
call centers and need to utilize the phonetic alphabet. Type the needed command and you'll have what you need. All
within a CLI interface.

options:
  -h, --help            show this help message and exit
  -l, --list            show available modules and exit
  -s SHOW, --show SHOW  run reference module the user specified and exit
  --info                provide more info on the application

For bug reports or feature requests. Like adding new reference tables. Please submit an issue to the projects
GitLab repository so it can be reviewed. https://gitlab.com/n3s0/reference-cli

```

That should conclude setting up the development environment using
virtualenv.

