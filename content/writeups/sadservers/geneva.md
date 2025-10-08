---
title: "SadServers: Geneva: Renew an SSL Certificate"
date: 2024-09-23T09:56:47-06:00
summary: "Notes from running through the Geneva scenario from SadServers."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
invertPagination: true
showToC: true
openToC: false
showComments: false
showHeadingAnchors: true
---

## Overview

This is my run through of the Geneva scenario on Sad Servers. Let see
how we do.

- [Geneva: Renew an SSL Certificate](https://sadservers.com/scenario/geneva)

Little more information about the challenge.

- Level: Easy
- Type: Fix
- Tags: ssl  

## Description
---

There's an Nginx web server running on this machine, configured to serve a simple "Hello, World!" page over HTTPS. However, the SSL certificate is expired.

Create a new SSL certificate for the Nginx web server with the same Issuer and Subject (same domain and company information).

Test: Certificate should not be expired: echo | openssl s_client -connect localhost:443 2>/dev/null | openssl x509 -noout -dates and the subject of the certificate should be the same as the original one: echo | openssl s_client -connect localhost

So, here is all of that. But, simpler.

```sh
echo | openssl s_client -connect localhost:443 2>/dev/null | openssl x509 -noout -dates
```

and...

```sh
echo | openssl s_client -connect localhost:443 2>/dev/null | openssl x509 -noout -subject
```

Time to Solve: 10 minutes.

## Solution
---

First it's time to check on the dates for the file using the openssl 
command.

```sh
echo | openssl s_client -connect localhost:443 2>/dev/null | openssl x509 -noout -dates
```

Looks like it's expired based on the notAfter date. In fact they've been
switched around somehow. So it's safe to say that this isn't a valid 
certificate.

```sh
notBefore=Sep 17 22:34:18 2024 GMT
notAfter=Sep 18 22:34:18 2023 GMT
```

Checked the subject for the certificate using the following openssl command.

```sh
echo | openssl s_client -connect localhost:443 2>/dev/null | openssl x509 -noout -subject
```

Below is the output for it. Looks like we're expected to make the other
certificate similar or the same.

```sh
subject=CN = localhost, O = Acme, OU = IT Department, L = Geneva, ST = Geneva, C = CH
```

Now I'm curious. What does the current TLS handshake look like? I use 
the openssl command with less options to do this.

```sh
echo | openssl s_client -connect localhost:443
```

The output for this command can be found below. Note that the config is
wrong because the notAfter date is a year behind the notBefore date. 

I'll explain what is happening with this handshake in a later post.
Provide more clarity as to what's happening. I will provide a link
below when I've finished with that.

```sh
CONNECTED(00000003)
Can't use SSL_get_servername
depth=0 CN = localhost, O = Acme, OU = IT Department, L = Geneva, ST = Geneva, C = CH
verify error:num=18:self signed certificate
verify return:1
depth=0 CN = localhost, O = Acme, OU = IT Department, L = Geneva, ST = Geneva, C = CH
verify error:num=10:certificate has expired
notAfter=Sep 18 22:34:18 2023 GMT
verify return:1
depth=0 CN = localhost, O = Acme, OU = IT Department, L = Geneva, ST = Geneva, C = CH
notAfter=Sep 18 22:34:18 2023 GMT
verify return:1
---
Certificate chain
 0 s:CN = localhost, O = Acme, OU = IT Department, L = Geneva, ST = Geneva, C = CH
   i:CN = localhost, O = Acme, OU = IT Department, L = Geneva, ST = Geneva, C = CH
---
Server certificate
-----BEGIN CERTIFICATE-----
MIIDtTCCAp2gAwIBAgIUGkY7M0SFh+WM50Rq5uizcT2MocwwDQYJKoZIhvcNAQEL
BQAwajESMBAGA1UEAwwJbG9jYWxob3N0MQ0wCwYDVQQKDARBY21lMRYwFAYDVQQL
DA1JVCBEZXBhcnRtZW50MQ8wDQYDVQQHDAZHZW5ldmExDzANBgNVBAgMBkdlbmV2
YTELMAkGA1UEBhMCQ0gwHhcNMjQwOTE3MjIzNDE4WhcNMjMwOTE4MjIzNDE4WjBq
MRIwEAYDVQQDDAlsb2NhbGhvc3QxDTALBgNVBAoMBEFjbWUxFjAUBgNVBAsMDUlU
IERlcGFydG1lbnQxDzANBgNVBAcMBkdlbmV2YTEPMA0GA1UECAwGR2VuZXZhMQsw
CQYDVQQGEwJDSDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOkwstXc
ACTnrgUu8LXUav3pTrQ7dqMruczhuveY8xqhmLTHxvq/DrLvnArL+tAoDwSQVZKX
XXl78u4upUGf4be1wLjgtCsm7lOjv4sWndVoVRW1zwbCYm2cGy7w7UyUTu1u/nTY
DlWlmwTliUbLprlMX72udBAC5gIGcVUMikrBm6VF3tQUL0xXE6WWSc+kJIUzDYGk
Wx8GkNS8waOrX5IqKVRplTpGVPYv0YOKwwrRvH0LKkjPbIt43lFHxwbN0KwMwFwB
yScUHEM8RhcUQt3A0LYXRj2fm6RBxYBUb+wY2mZASRi9h9UjikMDKZwDbWrItBZR
7XM+VPWD68xM6DcCAwEAAaNTMFEwHQYDVR0OBBYEFHSfSBQboQUoFW90K2SXPyWj
ddhFMB8GA1UdIwQYMBaAFHSfSBQboQUoFW90K2SXPyWjddhFMA8GA1UdEwEB/wQF
MAMBAf8wDQYJKoZIhvcNAQELBQADggEBAIwgsYcYId5lgp2SBqgBkh13CcL3+i6J
wo7bGiZr3dZVj/LhrZR3OJNq0O5ZzSEXnwzF18RaTquAYHi1sr9I9E/6JKTIp7oT
VYTbD5XjHj4bCbtAycJb+ZsEPEIkaBJ5EwPXbTj7gc2KRG+623sYy0UtOMNUFfcH
BYl0ZQe5D3RLw2uiiYGmXGhGvYuDrzr18PJRkgglEME84s0WkQVU8dOA6hakHUsP
97v2JODmPstGx0yJI3/dXCrTFjjxn55hwqj0UPl5HCfqHAQeTzbqjcRfdVFC8jzk
XnqIeWJa+W7JyAVysZXyE33K/b5PvjtRqlqPrK5W6oqy9tDlUxi5dZI=
-----END CERTIFICATE-----
subject=CN = localhost, O = Acme, OU = IT Department, L = Geneva, ST = Geneva, C = CH

issuer=CN = localhost, O = Acme, OU = IT Department, L = Geneva, ST = Geneva, C = CH

---
No client certificate CA names sent
Peer signing digest: SHA256
Peer signature type: RSA-PSS
Server Temp Key: X25519, 253 bits
---
SSL handshake has read 1509 bytes and written 363 bytes
Verification error: certificate has expired
---
New, TLSv1.3, Cipher is TLS_AES_256_GCM_SHA384
Server public key is 2048 bit
Secure Renegotiation IS NOT supported
Compression: NONE
Expansion: NONE
No ALPN negotiated
Early data was not sent
Verify return code: 10 (certificate has expired)
---
---
Post-Handshake New Session Ticket arrived:
SSL-Session:
    Protocol  : TLSv1.3
    Cipher    : TLS_AES_256_GCM_SHA384
    Session-ID: 93BFCB99127BB8481016E097B3F8F6D74FE8F68EB123278BAD9012480BD6A380
    Session-ID-ctx: 
    Resumption PSK: 1329EAEF3D22329E74B9350717B607E6B774A92D91855DD3E9406448FBE388B537EAD3330C21E124B9FC808E829023CD
    PSK identity: None
    PSK identity hint: None
    SRP username: None
    TLS session ticket lifetime hint: 300 (seconds)
    TLS session ticket:
    0000 - eb 0a 09 80 bc 27 f8 8a-48 11 fd 92 2a f2 98 6a   .....'..H...*..j
    0010 - c1 fa 1f 10 31 a5 ce 56-d9 d4 30 63 a7 88 38 8c   ....1..V..0c..8.
    0020 - 1a 5d 14 a0 aa 7d a4 e6-39 2e 82 1b b8 e3 44 a3   .]...}..9.....D.
    0030 - 68 df ea 05 6d b0 2e 91-c0 9b 20 01 76 69 42 0b   h...m..... .viB.
    0040 - 2a de 74 b7 31 58 12 19-e4 9c ac 68 29 3d 27 f6   *.t.1X.....h)='.
    0050 - d9 1a 51 a8 d6 6c b6 45-8d dc df 12 5b af 9c f3   ..Q..l.E....[...
    0060 - 16 53 ae 1b 47 31 4c 0f-51 3f 10 e9 11 6d 85 bf   .S..G1L.Q?...m..
    0070 - ea 7d 2f 36 15 b9 3a 8a-d7 2b cd ea 1b 72 73 a6   .}/6..:..+...rs.
    0080 - 20 5f 8f b8 f2 82 63 53-0d 24 88 85 61 96 33 fd    _....cS.$..a.3.
    0090 - da d8 d8 3c 91 e8 6f 94-95 2f 2c b0 f0 bb 09 39   ...<..o../,....9
    00a0 - 0d d5 8d be 41 27 c8 28-2b 8e bb 4d 43 f9 7c 81   ....A'.(+..MC.|.
    00b0 - 26 11 eb d3 f8 fd 76 14-54 ff 44 6b bf d5 a2 71   &.....v.T.Dk...q
    00c0 - ce a1 24 42 a0 13 47 77-d7 b1 62 26 57 9b 90 04   ..$B..Gw..b&W...
    00d0 - f9 43 64 dd 40 47 46 12-56 4d 6d 32 30 c9 ea d0   .Cd.@GF.VMm20...

    Start Time: 1726867559
    Timeout   : 7200 (sec)
    Verify return code: 10 (certificate has expired)
    Extended master secret: no
    Max Early Data: 0
---
read R BLOCK
---
Post-Handshake New Session Ticket arrived:
SSL-Session:
    Protocol  : TLSv1.3
    Cipher    : TLS_AES_256_GCM_SHA384
    Session-ID: CDC49B68629C64C36AAE188A430B56994926A51F1922DED1804F1A0D69EE25D7
    Session-ID-ctx: 
    Resumption PSK: 4547B8970520A4421B82150428CFAE5B7C6651D38DF72095F861AC446E5D9D0D240C7DB58971A63815BE60B3F3155415
    PSK identity: None
    PSK identity hint: None
    SRP username: None
    TLS session ticket lifetime hint: 300 (seconds)
    TLS session ticket:
    0000 - eb 0a 09 80 bc 27 f8 8a-48 11 fd 92 2a f2 98 6a   .....'..H...*..j
    0010 - 1f 39 64 88 7f 9e 46 c7-05 21 e1 03 67 87 69 68   .9d...F..!..g.ih
    0020 - 83 fb 10 10 f9 02 3f 62-64 ae f6 a7 3b b8 ef 1a   ......?bd...;...
    0030 - f7 83 80 3d c4 f7 bf f8-d6 1b 72 0a 81 17 27 ed   ...=......r...'.
    0040 - c3 f1 d7 f2 62 3c 09 ee-b4 fd ee 1e 4f c3 90 76   ....b<......O..v
    0050 - 93 c9 bf c7 be 61 2a 2c-3d 0f 53 87 c9 d1 cc 5b   .....a*,=.S....[
    0060 - f8 3a 94 f2 e5 d4 95 04-f1 3e 73 c1 3a 90 a8 2e   .:.......>s.:...
    0070 - af 36 a1 18 d7 a5 29 43-8c 6d c5 88 dc 36 81 73   .6....)C.m...6.s
    0080 - 5a bc b5 ad a1 00 aa c0-15 5e 19 b8 96 01 93 7b   Z........^.....{
    0090 - 05 86 2d 95 40 85 01 6a-c5 6e 8f 09 f3 75 b4 03   ..-.@..j.n...u..
    00a0 - c5 05 65 80 6b 6c 23 bf-38 96 03 74 68 a8 96 47   ..e.kl#.8..th..G
    00b0 - b4 9e cc c5 90 36 e7 78-41 f6 4e 09 b6 00 1a 78   .....6.xA.N....x
    00c0 - 30 e6 aa 6f 41 9a 9a af-aa fa 82 7e bb ee 01 aa   0..oA......~....
    00d0 - 40 9a 69 2a 84 d5 6c fa-de c9 58 60 c2 b0 fa d7   @.i*..l...X`....

    Start Time: 1726867559
    Timeout   : 7200 (sec)
    Verify return code: 10 (certificate has expired)
    Extended master secret: no
    Max Early Data: 0
---
read R BLOCK
DONEecho | openssl s_client -connect localhost:443
```

Decided to look at the configuration file for the web server (Nginx).
This is a brief explaination of what all of this means.

- It's listening on 443 or the HTTPS port with SSL.
- Server name it's binding to is localhost. So the local machine.
- Certificate file is located at the /etc/nginx/ssl/nginx.crt path.
- Private Key is located at the /etc/nginx/ssl/nginx.key path.
- It's using modern ssl_protocols; TLS version 1.2 and 1.3.
- ssl_prefer_server_ciphers is set to off so clients can choose which
  ciphers are used.
- root location for storing its hosted files is /var/www/html.
- The index file can be either index.html or index.htm.

The explaination is clear as mud. But, that's what it's all doing.

```sh
# BEGIN ANSIBLE MANAGED BLOCK
server {
    listen 443 ssl;
    server_name localhost;

    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;

    location / {
        root /var/www/html;
        index index.html index.htm;
    }
}
# END ANSIBLE MANAGED BLOCK
```

Check the ssl directory for the /etc/nginx/ssl/nginx.crt file.

```sh
ls -lha /etc/nginx/ssl/nginx.crt
```

Looks like it's in there. It's owned by root. So we'll need to become
root or use sudo to do modifications to it.

```sh
-rw-r--r-- 1 root root 1.4K Sep 17 22:34 /etc/nginx/ssl/nginx.crt
```

Then we check the ssl directory fo the /etc/nginx/ssl/nginx.key file.

```sh
ls -lha /etc/nginx/ssl/nginx.key
```

That one is in there as well. It is also owned as root.

```sh
-rw------- 1 root root 1.7K Sep 17 22:34 /etc/nginx/ssl/nginx.key
```

Checking to see if the index.html file is in the /var/www/html/ 
directory.

```sh
cat index.html
```

Based on the output. It is. Just a simple web page that will show a 
heading of Hello, World! in the browser.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello, World!</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

After looking at it. It looks like this is self-signed. So there isn't
really a renewal process. Just regenerate a certificate and replace it.

Need to remember that the certificate needs to have the same issuer and
subject. Below is the data for reference.

```sh
subject=CN = localhost, O = Acme, OU = IT Department, L = Geneva, ST = Geneva, C = CH
```

I will try the interactive method first. Though I have the suspicion
that the output for the subject will need to be exactly the same as the
subject above. Although, this will be correct as far as subjects are 
concerned. The script checking it will expect this to be exact.

```sh
openssl req -x509 -nodes -newkey rsa:2048 -keyout nginx.key -out nginx.crt -sha256 -days 365
```

Below is the ouput of this command. It's generating a 2048 bit private
key and placing it in the current directory. Then we're asked to provide
some information about our certificate and who owns it.

```sh
Generating a RSA private key
................................................................................+++++
........................................+++++
writing new private key to 'nginx.key'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:CH
State or Province Name (full name) [Some-State]:Geneva
Locality Name (eg, city) []:Geneva
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Acme
Organizational Unit Name (eg, section) []:IT Department
Common Name (e.g. server FQDN or YOUR name) []:localhost
Email Address []:
```

Checking the certificate dates and it's subject using the certificate
file just created.

```sh
openssl x509 -in nginx.crt -dates -subject -noout 
```

Looks like the dates are good for it. But, the string doesn't match
what they specified is the correct deliverable.

```sh
notBefore=Sep 24 03:59:42 2024 GMT
notAfter=Sep 24 03:59:42 2025 GMT
subject=C = CH, ST = Geneva, L = Geneva, O = Acme, OU = IT Department, CN = localhost
```

Going to issue the same command on the the nginx.crt file in the ssl 
config directory. Checking for dates and the subject.

```sh
openssl x509 -in /etc/nginx/ssl/nginx.crt -subject -noout 
```

Looks like the following is the expected output for the certificate. I'm
going to need to workout adding a custom subject to my command here.

```sh
subject=CN = localhost, O = Acme, OU = IT Department, L = Geneva, ST = Geneva, C = CH
```

To do this. I add the -subj flag to it and add the value as shown below.
By doing this, I wont need to worry about entering this in manually like
I needed to do before.

```sh
openssl req -x509 -nodes -newkey rsa:2048 -keyout nginx.key -out nginx.crt -sha256 -days 356 -subj "/CN=localhost/O=Acme/OU=IT Department/L=Geneva/ST=Geneva/C=CH"
```

Below is the output for it. It generates a 2048 RSA private key and puts
the nginx.key file in the current directory.

```sh
Generating a RSA private key
..............................................+++++
.................................................................................+++++
writing new private key to 'nginx.key'
-----
```

Decided the check the certificate that was just created to look at the
dates and subject.

```sh
openssl x509 -in nginx.crt -dates -subject -noout
```

The output shows that the certificate wont expire until 2025. So we're 
good there. It wont expire for another year.

As for the subject or issuer statement for the certificate. It looks
the same as the one in production; that shouldn't be.

```sh
notBefore=Sep 24 04:10:00 2024 GMT
notAfter=Sep 15 04:10:00 2025 GMT
subject=CN = localhost, O = Acme, OU = IT Department, L = Geneva, ST = Geneva, C = CH
```

Now for configuring the new TLS certificate with Nginx. This needs to
be completed using elevated privileges. So, I went into an interactive
root / administrator prompt.

```sh
sudo -i
```

Changed directories to the /etc/nginx/ssl/ directory.

```sh
cd /etc/nginx/ssl/
```

Checked to confirm that this was where the .crt and .key files were in
that directory.

```sh
ls
```

Based on the output below they are.

```sh
nginx.crt  nginx.key
```

Created a backup folder so we can move them back should we break the 
configuration.

```sh
mkdir bak
```

Backed up the nginx.key and nginx.crt files to the bak folder. This 
will only effect the files in the currect directory.

```sh
mv nginx.* bak/
```

Moved the nginx.key and nginx.crt files located in the admin users home
directory to the /etc/nginx/ssl/ directory.

```sh        
cp /home/admin/nginx.* ./
```

Checked the configuration for Nginx. 

```sh
nginx -t
```

Below is the output for that. It looks like everything is OK.

```sh
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Restarted the Nginx service and that didn't error out either. So I 
think we're good.

```sh
systemctl restart nginx
```

Using the script provided by the scenario. I checked the solution.

```sh   
sh /home/admin/agent/check.sh 
```

Looks like the script approves of the output. So, we're good to go.

```sh
OK
```

Also clicked the "Check My Solution" button on the page and it gave the
"Congragulations you finished" banner that I enjoy so much. Time to move
on to other challenges.

This challenge is good for those who would like to learn how SSL/TLS 
certificates work, how to generate self-signed certificates using
openssl, and how to configure them in Nginx. I wouldn't necessarily
trust this configuration. But, it was definately a good refresher for
me. 

Self-Signed certificates are the low low cost of free. But, by the same
token. So are Lets Encrypt certificates. Which would be a good thing
to write about down the road.