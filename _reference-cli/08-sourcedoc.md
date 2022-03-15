---
layout: single
title: Source Documentation
permalink: "/reference-cli/sourcedoc/"
toc: true
sidebar:
  nav: "reference-cli"
---

## Overview

NOTE: This page is still under construction.

This article is here to act as documentation for the functions,
variables, etc. within the applications. These have been documented by
file name. Included is their purpose, their parameters, and an explanation 
for their use. Included may even be examples to provide clarity where 
needed.

## reference-cli.py 

Contains the code that imports all of the modules that will be used by
the app into one location. The ```reference-cli.py``` file acts as the
"glue" that sticks everyting together. 

Although, execution from the other modules is possible. It isn't 
recommended for anything other than troubleshooting purposes.

### Lib/Module Imports

Below is a list of the libraries and modules that are imported into the
```reference-cli.py``` file.

- argparse: Utilizes argparse for structuring and executing the command
  line environment.
- textwrap: Wraps text for the 
- sys: Probably isn't needed and can be deleted. Testing is required.
- src/core: Provides the core functionality for the app. This will
  include more in the future. But, for now this includes the banner text
  and a list of modules.
- src/phonetic_alphabet_ref: Phonetic Alphabet module provided to the 
  commandline interface. 
- src/morse_code_ref: The morse code module.

### Variables

This section describes the variables used within this file. 

#### parser

Acts as a place holder for the ```argsparse.ArgumentParser()``` class.
This is specifically so the need to type that out doesn't come up. Other
functions are called from this variable.

Functions called include the following. These functions are better
explained in the ```Third Party``` section.

- add_argument(): Imported from the ```argparse``` library/module.
- parse_args(): Imported from the ```argparse``` library/module.
- print_help(): Imported from the ```argparse``` library/module.

The ```parser``` variable provides assistance with the text formatting
and the addition to new arguments to the command line interface.

#### args

The ```args``` variable is what ties the crafted CLI interface together
and allows it to be usable for human interaction.

This variable calls on the following commandline while it's in use.

- list: The list command line parameter. When this CLI parameter is used
  it calls the ```core.banner()``` and the ```core.ref_modules()```
  functions.
- info: At this time it just says comming soon. It's a command line
  argument intended to provide more information. There will be web
  application that performs the same functionality as this application
  in the future.
- show: This will show a singular module. In the code, this is checked
  for the value assined to it whenever it's used. This will execute any
  module as long as it shows up right in the code for the menu.

The ```args``` variable is good for being able to actually use the
functionality that was build for the application. As modules grow, they
will be added. To the list of if/elif/else logic.

### Functions

### Function Calls

This section discusses function calls within this file. If there are
more to note in the future, they will be added. At this time, that's all
there is. Note that these functions are those imported from the modules.

Third party functions are listed in the ```Third Party``` section.

#### Application

These are the functions that were designed within the Python modules
that were imported from the ```src``` directory.

#### core.banner()

Function can be found in the ```core``` module located in ```src```.

The ```banner()``` function will display the banner for the application
to when it's called.

No parameters are required for this function.

##### core.ref_modules()

Function can be found in the ```core``` module located in ```src```.

The ```ref_modules()``` function displays the modules that are available
for execution to the user that runs it.

No parameters are required for this function.

##### phonetic_alphabet_ref.nato_pa()

##### morse_code_ref.international_morse_code()

#### Third Party 

Discusses the third party module functions that were used along with
their structure.

##### argparse.ArgumentParser()

##### parser.add_argument()

##### parser.parse_args()

##### parser.print_help()

##### args.list

##### args.show

### Operational Structure

This section discusses the operational structure for the application.
So, if one of the functions is run from above. I'll disect it a little
and proide clarity as to what it's doing.

