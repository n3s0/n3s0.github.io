---
title: 'Cisco: TDR Cable Diagnostic On Cisco Switch Port'
date: 2025-06-15T16:49:01+06:00
summary: "Discussion on how to test the cable connection on Cisco switch ports."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["netadmin"]
---

## Overview
---

These are notes I pickedup on how to test the cables connected to Cisco switch
ports. A series of commands can be executed to check on the pairs of the switch.

Although it's not always accurate. It can save time to just inform them that
they will lose connection for a few seconds. Then run the commands. It can take
the load off of your other techs to confirm the pairs from the switch because
they don't have to go on site later. But, there are occurances where these diags
aren't accurate. So, you end up sending them anyway.

Generally, when there are issues with port negotiation or connections drop off 
randomly. This is my first test because it tells you that the cable was 
terminated properly.

## Performing The Test
---

You can initiate the command like the following as long as your account has the
appropriate permissions for it. Make sure to change the tw1/0/13 portion with
your interface name.

This will initiate the TDR test on the interface and as long as there's
something on the other side. You should see some interesting results when
they're checked.

We'll just need to remember to give the switch, at most, 30 seconds to complete
its test before we check the results

```sh
show cable-diagnostics tdr interface tw1/0/13
```

The following command will check the interface we just tested. Again, the
twoGigabitEthernet 1/0/13 input will need to be swapped out for the port we're
testing.

```sh
show cable-diagnostics tdr interface twoGigabitEthernet 1/0/13
```

Once that's executed we should see something similar to the following. This
tells us that Pair A-C are in a Normal state on interface Tw1/0/13.

Anything that would be considered abnormal would be seeing a pair that was open.
When we see that. Either: 

- The test didn't work on that pair.
- Cable is terminated poorly.
- Cable is damaged.
- Cable installer got confused about which T568 standard to use.
- Contacts on the cable end could be misaligned. (For those who don't treat
  their equiptment well...)
- Someone pulled out the 8P8C patch panel to terminate a new cable and broke it
  for a few others.

There are any number of reasons. But, generally I will go with a broken
termination. Especially if the organization utilizes 8P8C punch down patch
panels. You'll see this if someone wasn't careful (even when careful)
terminating a new cable.

```sh
TDR test last run on:  June 02 01:59:04

Interface Speed Local pair Pair length        Remote pair Pair status

--------- ----- ---------- ------------------ ----------- --------------------

Tw1/0/13     1000M Pair A     8    +/- 10 meters Pair B      Normal             

                Pair B     8    +/- 10 meters Pair A      Normal             

                Pair C     8    +/- 10 meters Pair D      Normal             

                Pair D     8    +/- 10 meters Pair C      Normal        
```

## Some Things To Expect
---

Some things to expect when you perform this test is for the switch to log it as
shown below. The user will also log it into the void; telling you their port
went down. As long as your transparent with them. No one will be angry. But, if
you were to do this while a user was on a call. Not a good move...

```sh
*Jun  2 01:59:05.231: %LINEPROTO-5-UPDOWN: Line protocol on Interface TwoGigabitEthernet1/0/13, changed state to down
*Jun  2 01:59:06.238: %LINK-3-UPDOWN: Interface TwoGigabitEthernet1/0/13, changed state to down
*Jun  2 01:59:12.772: %LINK-3-UPDOWN: Interface TwoGigabitEthernet1/0/13, changed state to up
*Jun  2 01:59:13.779: %LINEPROTO-5-UPDOWN: Line protocol on Interface TwoGigabitEthernet1/0/13, changed state to up
```
