---
title: "Checking TLS Certificates Using OpenSSL"
date: 2025-01-12T10:25:01-06:00
lastmod: 2025-10-10
author: "Timothy Loftus (n3s0)"
summary: "Notes for checking TLS certificates using the OpenSSL command."
draft: false
tags: ["sysadmin"]
---

## Summary

Although I've covered this in various challenges. I thought I'd notate how to
check a local TLS certificate using the OpenSSL command. This can be useful for
when you want to confirm you're using the right certificate or just look it
over.

## Checking TLS Certificate

Below is a simple command for viewing a certificate in OpenSSL with just the
certificate.

```sh
openssl x509 -in certificatefile.cert -noout -text
```

## Conclusion

This was a brief note providing the command show showing information about a
certificate on a local system using the `openssl(1)` command.
