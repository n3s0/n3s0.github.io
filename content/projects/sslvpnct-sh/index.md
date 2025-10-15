---
title: "sslvpnct-sh"
date: 2025-10-14T12:10:15-06:00
lastmod: 2025-10-15
description: "Bash script for testing SSL VPNs. With public, outbound, and internal testing."
draft: false
tags: ["sslvpnct-sh"]
---

# SSL VPN Connectivity Test (Bash)

## Summary

I enjoy testing and reporting when I complete my work. It's a fundamental stage
before you provide the end result. There are tests for connecting to and testing
SSL VPN connectivity beforehand.

This script targets SSL Client VPNs for test it's test cases. Weather you're
renewing the TLS certificate or just testing that routing is working as
expected. This script will perfrom the test. If the output is piped into a file.
There you will have it. You'll be able to display to your peers that the VPN was
working as expected when you've finished the maintenance.

## Usage

Provided is the usage for the script. Note that this script is intended to test
the SSL VPNs avaialability and connectivity to external and internal resources
specified within the script and the module(s).

- The ```--help``` flag will display the help message.
- The ```--public``` flag will test the connectivity to the SSL VPN. One thing to
  note is just because something fails doesn't mean the sky is falling. If you
  cannot ping it. But, you get TLS information from the server. IT or the vendor
  is probably blocking ICMP traffic.
- The ```--connect``` flag will check outbound connectivity from the SSL VPN. At
  least, that is what it's intended to do. It can also be used as a connectivity
  from anywhere.
 
```sh
-------------------------------------------------------------------------

                 .__                              __            .__
     ______ _____|  |___  ________   ____   _____/  |_     _____|  |__
    /  ___//  ___/  |\  \/ /\____ \ /    \_/ ___\   __\   /  ___/  |  \
    \___ \ \___ \|  |_\   / |  |_> >   |  \  \___|  |     \___ \|   Y  \
   /____  >____  >____/\_/  |   __/|___|  /\___  >__| /\ /____  >___|  /
        \/     \/           |__|        \/     \/     \/      \/     \/

-------------------------------------------------------------------------
Usage: ./sslvpnct.sh [OPTIONS]
   -h, --help    Display this help message
   -p, --public  Tests connectivity to the SSL VPN
   -c, --connect Meant to test connectivity from the SSL VPN
```

## Requirements

There are a few commands needed for install before we can continue to run this
application.

- mtr(1)
- ping(1)
- openssl(1)
- curl(1)

These can be installed from your package manager. If you have a different tool
you'd rather use. Please update to your preferences.

## Contributing

This is a personal script. Although I'm open to different ideas and opinions.
This is intended to test personal or professional SSL VPNs I either use, setup,
or maintain. I love to test things to make sure they work so I'm not assuming
something is working and come to find out it actually isn't. So, I welcome you
to fork the repository. But, unless there is a bug fix or an enticing feature 
added. I probably wont merge.

With that being said. As a discaimer you are using a personal script I've made
available for public use. Please see [LICENSE](LICENSE) for all the legal stuff
that makes your use of the script your responsibilty and not mine.

If anyone would like to follow the progress of this project. For updates and
submitting issues. Here are some links.

<a href="https://github.com/n3s0/sslvpnct-sh"><button style="border-radius: 8px;">Github</button></a>
<a href="https://github.com/n3s0/sslvpnct-sh/issues"><button style="border-radius: 8px;">Issues</button></a>
<a href="/tags/sslvpnct-sh"><button style="border-radius: 8px;">Updates</button></a>
