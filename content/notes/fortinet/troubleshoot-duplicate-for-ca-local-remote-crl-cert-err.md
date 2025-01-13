---
title: "Fortinet: Troubleshoot Certificate File is Duplicated for CA/Local/Remote/Crl cert"
date: 2025-01-13T15:25:27-06:00
summary: "Notes for troubleshooting certificate import errors like the one in the title."
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

## Summary
---

Recently I had an issue where I couldn't import a local certificate and recieved
the following error. This generally occurs within the web UI on FortiGates. It
happened to me when I was attempting to import just the certificate file as a
Local certificate.

```txt
Certificate File is Duplicated for CA/LOCAL/REMOTE/CRL cert
```

Based on some research. The error occurs when you import a certificate without
the private key for it.

## Fix
---

The fix for this is to actually choose Certificate and not Local Certificate in
the certificate import for it. Just remember to upload the cert/pem file and the
private key file with or without a password and click create. Should be all
fixed.

## Resources
---

- [Troubleshooting Tip: Fixing the error 'Certificate file is duplicated for CA/LOCAL/REMOTE/CRL cert.'](https://community.fortinet.com/t5/FortiGate/Troubleshooting-Tip-Fixing-the-error-Certificate-file-is/ta-p/196187)
