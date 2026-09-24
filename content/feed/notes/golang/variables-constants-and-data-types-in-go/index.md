---
title: 'Variables, Constants, & Data Types In Go'
date: 2026-05-01T00:00:00-06:00
lastmod: 2026-05-01
summary: "Notes where I discuss some of the basics of the Go programming language."
draft: true
tags: ["Go", "Programming"]
---

## Summary
---

This note provides discussion and examples for variables, constants, and data
types in the Go programming language.

I've been utilizing Go for some attempted and completed projects over the past 
couple of years and I think it's very simple and well built with it's adoption 
and library/module landscape.

I'm writting this because with the vast majority of the tutorial landscape
that's out there for grasping certain con

## Variables
---

Variables - in laymens terms - can be described as a container that holds
different types of data values. In not-so laymens terms. A variable is a named 
location in memory that stores a data value. Variables are mutable memory
reservations that can be changed throughout the programs execution.

Think of a variable of a cup that can be filled with different volumes of water.
They can also be filled with Orange Juice or Milk in the even that the correct 
method is used to change the solution type (data type).

One thing to note about variables in Go is they need to be explicityly declared
and used by the compiler or the app wont compile. One simple way to think about
this is a variable must be declared if not utilizing the shorthand method.
Variables must also be used somehow within the application. 

Variables have the following basic datatypes. But, the datatypes you can use are
not limited to this list.

- **Boolean:** Is a true or false (1 or 0) datatype.
- **Integer:** 
- **Float 32:**
- **String:**

### Variable Declaration
---

There are quite a few ways variables can be delared. Which helps because knowing
these methods can provide more flexibility in how applications are written.

The syntax for this type of variable assignment:

- `var <variablename> <datatype>`

In this example it shows the different data types used with no values assigned
to them. Well, actually there are values assigned to them. There are default
values assigned for "empty" variables. (i.e. The `variableInt` is set to `0`.)

```go
var variableBool bool
var variableInt int
var variableFloat float32
var varibaleString string
```

Variables can be set explicitly using any of the available datatypes and
assigning a value already. Some of the four basic ones can be found in example
code block.

The syntax for this type of variable assignment: 

- `var <variablename> <datatype> = <value>`. 

The example below creates variables for four of the available datatypes
available for use. Which shows that the value of the variable can be set at the
time of declaration.

```go
var variableBool bool = true
var variableInt int = 2
var variableFloat float32 = 2.0
var varibaleString string = "Hello, World!"
```

Variables can be chained together as long as they're the same datatype. Which
saves a line or two. But, I don't use it to much personally. This will set the
`milk` and `cookie` variables to an empty string (`""`).

```go
var milk, cookies string
```

Variables can be grouped together in other ways too. This method is called a
`factored variable declaration`. Which allows us to group variables togehter in
a single block. This can be used at the package level outside of functions.
Generally intended to group variables together. Using this method is great for
readability and orgnaizing variables together. Another developer could decern
logically that a group of variables within the block are for a specific purpose.
Though, not in this instance.

```go
var (
    variableBool bool = true
    variableInt int = 2
    variableFloat float32 = 2.0
    variableString string = "Hello, world!"
)
```

Go also has inferred varaibles where the `var` keyword is used but no datatype
is set explicitly. This will assume the data type of the variable.

```go
var variableFloat = 2.0
```

This is a shorthand syntax for variable declaration. Of which is only available
within functions. It's useful for quick variables that will be used throughout
the execution of a function.

```go
variableString := "This is a string"
```

```go
package main

import "fmt"

var number = 10

func main() {
    name := "n3s0"

    fmt.Printf("%s picked the number %d!\n", name, number)
}
```

There are other ways to utilize these 

### Variable Scope
---



```go

```

## Constants
---

## Data Types
---
