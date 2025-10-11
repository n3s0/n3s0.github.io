---
title: "Create Address Groups On FortiOS"
date: 2023-07-27T10:50:25-06:00
description: "Notes for creating address groups on ForiOS"
draft: false
tags: [ "networking" ]
type: post
showTableOfContents: true
---

A useful object category that FortiOS has available for policies are
Address Groups. An IPv4 Address Group is an array/list of addresses that
can be applied to firewall policies. This is useful if you have multiple
servers that need the same filtering. But, limiting the administrator
overhead is needed to manage policies.

The addresses will need to be created individually before adding them as
a member of the address group.

Start by going into the firewall addrgrp configuration prompt or
```(addrgrp)``` prompt.

```sh
config firewall addrgrp
```

In this case I'm creating a list of lab servers. So I will edit or
create that one. This will take me into the ```(lab servers``` prompt.

```sh
edit "lab servers"
```

Set the members to one or more addresses.

```sh
set member "tl-db-01" "tl-app-01"
```

Once that's complete. You'll want to enter "next" and "end" to finish
the configuration.

The show command for the address group will show the following output.
It should now be available for use.

```sh
config firewall addrgrp
    edit "lab servers"
        set uuid af519380-2094-51e9-391c-b78e8edbddfc
        set member "tl-db-01" "tl-app-01"
    next
end
```
