---
title: "certchecker"
date: 2025-01-02T03:08:15-06:00
lastmod: 2025-10-08
description: "Certificate checker is a command-line application written in Go that can perfrom ad-hoc checks for general TLS/SSL information on web servers."
draft: false
tags: ["certchecker"]
---

## What is certchecker?

Certificate checker is a command-line application written in Go that can perform
an ad-hoc check to web servers. This check will return basic information about
the web servers certificate. More importanly, if it's expired. For now this is
the beginning stage of the application. But, the overall vision is to have an
app that will iterate through a list of servers and provide this data in various
reporting formats. Such as email, pdf, txt, csv, etc.

This can be accomplished with Nagios or OpenSSL. But, this is intended for use
outside of standard monitoring platforms or just to provide output that's
simple. Plus, it's been a desired project of mine for learning Go and to see
where Go can be used.

## Roadmap

At the moment this application provides simple information back about the expiry
of a TLS certificate. But, down the road I intend on the following. Just some
next steps until the next release tag.

1. Pulling more data from the certificate for the site.
2. Using a configuration file to have a daemonized process that will pull this
   data from multiple sites.
3. Reports sent via email, sms, or chat integrations.
4. The ability to separate entities and report to them with data that only
   concerns their infrastructure.
5. Potential sponsorship to manage it in various package repositories of
   different Linux distros.
6. Ability to send the data concerning a TLS certificate to a database.

This is just a simple writeup for next steps related to this project. Please let
me know if anyone wants features not listed above.

## Build

The current build will be undergoing a refactoring at some point.

Latest Stable Build: v1.0.0

Build process is to build it and move it to the /usr/local/bin. Which seems to
work on the Linux systems I've tested.

I have not tested this on Mac or Windows. Upon testing, I will have more
results.

Build the application.

```sh
go build
```

Move it to the /usr/local/bin directory or any other path you desire.

```sh
sudo mv ./certchecker /usr/local/bin
```

## Usage

### Example

Below is an example of how it can be used and what information it can provide.

```sh
certchecker -s www.n3s0.tech
```

The output for this command can be found below.

```sh
|---------------------------------------|
|-- Certificate Checker (certchecker) --|
|---------------------------------------|
╭─ Server: www.n3s0.tech
│  ├─ TLS Version: TLS 1.3
│  ├─ Cipher Suite: TLS_AES_128_GCM_SHA256
│  ╰─ Subject: CN=www.n3s0.tech
├─ Certificate Dates:
│  ├─ Not Before: Sun, 17 Nov 2024 19:44:48 CST
│  ╰─ Not After: Sat, 15 Feb 2025 19:44:47 CST
│     ╰─ Status: Valid
╰─ Client Information:
   ╰─ Local Date/Time: Sun, 15 Dec 2024 03:36:48 CST
```

Another option available is to issue this for a specific port. Which can be
useful when the standard HTTPS port isn't being used.

```sh
certcecker -s example.com -p 65443
```

If anyone would like to follow the progress of this project. For updates and
submitting issues. Here are some links.

<a href="https://github.com/n3s0/certchecker"><button style="border-radius: 8px;">Github</button></a>
<a href="https://github.com/n3s0/certchecker/issues"><button style="border-radius: 8px;">Issues</button></a>
<a href="/tags/certchecker"><button style="border-radius: 8px;">Updates</button></a>
