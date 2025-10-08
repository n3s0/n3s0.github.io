---
title: "picoCTF 2019"
date: 2019-12-31T15:50:15-06:00
summary: "Writeups and notes from Hack The Box."
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

## Summary
---

TSo, I decided to get back into the game a little with these little challenges. This write up is for the picoCTF 2019 which ran from Sept. 27, 2019 to Oct. 11, 2019. But, looks like the CTF is on going and free to the public.

Looks like the Challenge Problem categories are as follows.

- Web Exploitation
- Reverse Engineering
- Cryptography
- Forensics
- General Skills
- Binary Exploitation

Looks like an interesting batch of challenges. Below is the link to the 2019 CTF if anyone else would like to do it also.

    https://play.picoctf.com

When you login after registration, you will want to choose the CTF named picoCTF 2019 to start this challenge.

As time goes on I will update this writeup with the challenges as I complete them.

I hope everyone is staying safe. Take care. If you have notes to compare, I encourage that you do. My contact information is available.


## Web Exploitation
---

### Insp3ct0r
---

Kishor Balan tipped us off that the following code may need inspection:

https://jupiter.challenges.picoctf.org/problem/9670/ (link) or http://jupiter.challenges.picoctf.org:9670

#### Solution
---

The challenge is to inspect the code of the site to find the flag. To start I checked the root of the site using curl to look for any comments.

```sh
curl https://jupiter.challenges.picoctf.org/problem/9670/
```

This provided the first part of the flag; picoCTF{tru3_d3.

```html
<!-- Html is neat. Anyways have 1/3 of the flag: picoCTF{tru3_d3 -->
```

Based on the the two tow files shown in the site’s code. It looked like they have two files named mycss.css and myjs.js. I figured that those file would contain the other parts of the flag.


```html
<link rel="stylesheet" type="text/css" href="mycss.css">
<script type="application/javascript" src="myjs.js"></script>
```

I used curl to look at the contents of the second file, mycss.css.

```sh
curl https://jupiter.challenges.picoctf.org/problem/9670/mycss.css
```

That provided the next part of the flag. The second part of the flag is: ```t3ct1ve_0r_ju5t```.

```css
/* You need CSS to make pretty pages. Here's part 2/3 of the flag: t3ct1ve_0r_ju5t */
```

Now it is time to obtain the last part of the flag. I do this using curl on the myjs.js file.

```sh
curl https://jupiter.challenges.picoctf.org/problem/9670/myjs.js
```

The output hows the following comment. This provides the last part of the flag: _lucky?2e7b23e3}.

```javascript
/* Javascript sure is neat. Anyways part 3/3 of the flag: _lucky?2e7b23e3} */
```

The flag for this challenge is: picoCTF{tru3_d3t3ct1ve_0r_ju5t_lucky?2e7b23e3}.

The intention of this challenge is to teach people the dangers of putting sensitive information about your product in the source. So, before you commit something like that, I would recommend you search through the source code with any keys, passwords, etc.

### where are the robots
---

Can you find the robots? https://jupiter.challenges.picoctf.org/problem/56830/ (link) or http://jupiter.challenges.picoctf.org:56830

#### Solution
---

In this challenge you are expected to find the robots.txt file to find the flag.

To start I connected to the link provided in the challenge. There is a hint asking you where the robots are. This could be a hint pointing towards the robots.txt file. This file is intended to tell web crawlers what files they aren’t allowed to request.

```sh
curl https://jupiter.challenges.picoctf.org/problem/56830/
```
```html
<!doctype html>
<html>
  <head>
    <title>Welcome</title>
    <link href="https://fonts.googleapis.com/css?family=Monoton|Roboto" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>

  <body>
    <div class="container">
      <header>
	<h1>Welcome</h1>
      </header>
      <div class="content">
	<p>Where are the robots?</p>
      </div>
      <footer></footer>
    </div>
  </body>
</html>
```

Connected to the site with https://jupiter.challenges.picoctf.org/problem/56830/robots.txt and it looks like that is disallowing crawlers to access /1bb4c.html.

```sh
curl https://jupiter.challenges.picoctf.org/problem/56830/robots.txt
```

```
User-agent: *
Disallow: /1bb4c.html
```

When you go to https://jupiter.challenges.picoctf.org/problem/56830/1bb4c.html it shows that the flag is picoCTF{ca1cu1at1ng_Mach1n3s_713d3}.

```sh
curl https://jupiter.challenges.picoctf.org/problem/56830/1bb4c.html
```
```html
<!doctype html>
<html>
  <head>
    <title>Where are the robots</title>
    <link href="https://fonts.googleapis.com/css?family=Monoton|Roboto" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <div class="container">
      
      <div class="content">
	<p>Guess you found the robots<br />
	  <flag>picoCTF{ca1cu1at1ng_Mach1n3s_1bb4c}</flag></p>
      </div>
      <footer></footer>
  </body>
</html>
```

The script below will automate the process of finding the flag. This will search the robots.txt after checking the response code of the URL. After finding the page that isn’t allowed to be crawled, it will take the response of the request for that file and search for the flag.

```python
#!/usr/bin/python
"""
file: robots.py
author: Timothy (n3s0)
description: PoC solution to PicoCTF 2019 - web exploitation - where are the robots.
required_libs:
    - urllib3
    - re
"""

# Import required libraries.
import urllib3
from re import findall

url = 'https://jupiter.challenges.picoctf.org/problem/56830/'
robots = 'robots.txt'

# Create the pool manager.
http = urllib3.PoolManager()

# Make the initial request for https://jupiter.challenges.picoctf.org/problem/56830/robots.txt and store it in a variable.
r = http.request('GET', url + robots)

# Should the status be 200, continue. If not, show error and exit.
if r.status == 200:
    print('[+] Status: {0} OK - {1}{2}'.format(r.status, url, robots))
    # Add response to the variable. But, just the HTML file name.
    res_data = r.data.decode("utf-8").split(" ")[-1].strip()
    print('[+] Pulled following file from {0}: {1}'.format(robots, res_data))
    # Overwrite the variable with a new request from the robots.txt file.
    r = http.request('GET', url + res_data)
    # Should the status be 200, continue. If not, try harder.
    if r.status == 200:
        print('[+] Status: {0} OK  - {1}{2}'.format(r.status, url, res_data[1:]))
        # Add the response data to a variable as utf-8.
        res_data = r.data.decode("utf-8")
        # Search the response data for the <flag></flag> tags and store it in a variable.
        flag = findall('<flag>(.*?)</flag>', res_data)
        print('[+] Flag: {0}'.format(flag[0]))
    else:
        print('[!] Well, that didn\'t work... Try harder.')
else:
    print('[!] Status was not 200... You lose.')
```

Below is the output of the script. As you can see, it is working as expected.
```sh
python robots.py 
```

```sh
[+] Status: 200 OK - https://jupiter.challenges.picoctf.org/problem/56830/robots.txt
[+] Pulled following file from robots.txt: /1bb4c.html
[+] Status: 200 OK  - https://jupiter.challenges.picoctf.org/problem/56830/1bb4c.html
[+] Flag: picoCTF{ca1cu1at1ng_Mach1n3s_1bb4c}
```

The flag for this challenge is: picoCTF{ca1cu1at1ng_Mach1n3s_1bb4c}.

## Cryptography
---

### The Numbers
---

The numbers… what do they mean?

#### Solution
---

The challenge has you download an image named the_numbers.png and decrypt the cipher text. Downloaded the file using wget.

```sh
wget https://jupiter.challenges.picoctf.org/static/f209a32253affb6f547a585649ba4fda/the_numbers.png
```

```sh
--2021-01-10 15:48:32--  https://jupiter.challenges.picoctf.org/static/f209a32253affb6f547a585649ba4fda/the_numbers.png
Resolving jupiter.challenges.picoctf.org (jupiter.challenges.picoctf.org)... 3.131.60.8
Connecting to jupiter.challenges.picoctf.org (jupiter.challenges.picoctf.org)|3.131.60.8|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 100721 (98K) [application/octet-stream]
Saving to: ‘the_numbers.png’

the_numbers.png

100%[===============================================================================================================>]  98.36K  --.-KB/s    in 0.03s   

2021-01-10 15:48:32 (3.20 MB/s) - ‘the_numbers.png’ saved [100721/100721]
```

I don’t post pictures on this site, but I can surely read that there are numbers in the picture. I have taken the liberty of putting the numbers below.

```sh
16 9 3 15 3 20 6 { 20 8 5 14 21 13 2 5 18 19 13 1 19 15 14 }
```

This took a little bit of thinking to decipher. But I figured out that it’s a Letter Number (A1Z26) cipher. A1Z26 cipher encrypts letter with it’s numbered place within the Latin alphabet. You decode/decrypt the ciphertext by taking the number and matching it to the letter in the alphabet. The key can be found below.

#### Reference Key
---

Below is a table for reference. Just in case something like this needs to be solved again.

```sh
A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z
1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
```

#### Solution
---

Below is the solution to the challenge. One way to verify everything is to use the beginning of each flag as a reference. The key is PICOCTF.

```sh
16 9 3 15 3 20 6 { 20 8 5 14 21 13 2 5 18 19 13 1 19 15 14 }

P  I C  O C  T F { T  H E  N  U  M B E  R S  M  A S  O   N }
```

The solution to the challenge is PICOCTF{THENUMBERSMASON}.

## Reverse Engineering
---

### vault-door-training
---

Your mission is to enter Dr. Evil’s laboratory and retrieve the blueprints for his Doomsday Project. The laboratory is protected by a series of locked vault doors. Each door is controlled by a computer and requires a password to open. Unfortunately, our undercover agents have not been able to obtain the secret passwords for the vault doors, but one of our junior agents obtained the source code for each vault’s computer! You will need to read the source code for each level to figure out what the password is for that vault door. As a warmup, we have created a replica vault in our training facility. The source code for the training vault is here: [VaultDoorTraining.java](https://jupiter.challenges.picoctf.org/static/03c960ddcc761e6f7d1722d8e6212db3/VaultDoorTraining.java)

#### Solution
---

The objective is to find the flag in the source code after downloading the java file. After downloading the file I decided to read it.

```java
import java.util.*;

class VaultDoorTraining {
    public static void main(String args[]) {
        VaultDoorTraining vaultDoor = new VaultDoorTraining();
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter vault password: ");
        String userInput = scanner.next();
        String input = userInput.substring("picoCTF{".length(),userInput.length()-1);
        if (vaultDoor.checkPassword(input)) {
            System.out.println("Access granted.");
        } else {
            System.out.println("Access denied!");
        }
   }

    // The password is below. Is it safe to put the password in the source code?
    // What if somebody stole our source code? Then they would know what our
    // password is. Hmm... I will think of some ways to improve the security
    // on the other doors.
    //
    // -Minion #9567
    public boolean checkPassword(String password) {
        return password.equals("w4rm1ng_Up_w1tH_jAv4_3808d338b46");
    }
}
```

Looks like they decided to hard code the flag in the source code. Which is normally a big no no. Especially considering in this challenge, the premise of it is associated with stolen source code. The flag has been provided below.

- The flag: picoCTF{w4rm1ng_Up_w1tH_jAv4_3808d338b46}

Will also need to look into this further. It looks like when you compile the .java file with javac and enter the string into the Enter vault password: prompt, it will just say Access denied! even though the password has been entered in correctly.

## Forensics
---

### Glory of the Garden
---

This garden contains more than it seems.

#### Solution
---

The challenge is to look at the garden.jpg file to find the flag.

Downloaded the file using the wget command.

```sh
wget https://jupiter.challenges.picoctf.org/static/4153422e18d40363e7ffc7e15a108683/garden.jpg
```
```sh
--2021-01-10 15:47:06--  https://jupiter.challenges.picoctf.org/static/4153422e18d40363e7ffc7e15a108683/garden.jpg
Resolving jupiter.challenges.picoctf.org (jupiter.challenges.picoctf.org)... 3.131.60.8
Connecting to jupiter.challenges.picoctf.org (jupiter.challenges.picoctf.org)|3.131.60.8|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 2295192 (2.2M) [application/octet-stream]
Saving to: ‘garden.jpg’

garden.jpg     100%[===============================================================================================================>]   2.19M  10.6MB/s    in 0.2s    

2021-01-10 15:47:07 (10.6 MB/s) - ‘garden.jpg’ saved [2295192/2295192]
```

Decided to look at the metadata of the JPG file with exiftool. It didin’t provide a whole lot of data to go off of.

```sh
exiftool garden.jpg
ExifTool Version Number         : 11.88
File Name                       : garden.jpg
Directory                       : .
File Size                       : 2.2 MB
File Modification Date/Time     : 2021:01:09 03:32:26-06:00
File Access Date/Time           : 2021:01:09 03:32:25-06:00
File Inode Change Date/Time     : 2021:01:09 03:32:28-06:00
File Permissions                : rw-rw-r--
File Type                       : JPEG
File Type Extension             : jpg
MIME Type                       : image/jpeg
JFIF Version                    : 1.01
Resolution Unit                 : inches
X Resolution                    : 72
Y Resolution                    : 72
Profile CMM Type                : Linotronic
Profile Version                 : 2.1.0
Profile Class                   : Display Device Profile
Color Space Data                : RGB
Profile Connection Space        : XYZ
Profile Date Time               : 1998:02:09 06:49:00
Profile File Signature          : acsp
Primary Platform                : Microsoft Corporation
CMM Flags                       : Not Embedded, Independent
Device Manufacturer             : Hewlett-Packard
Device Model                    : sRGB
Device Attributes               : Reflective, Glossy, Positive, Color
Rendering Intent                : Perceptual
Connection Space Illuminant     : 0.9642 1 0.82491
Profile Creator                 : Hewlett-Packard
Profile ID                      : 0
Profile Copyright               : Copyright (c) 1998 Hewlett-Packard Company
Profile Description             : sRGB IEC61966-2.1
Media White Point               : 0.95045 1 1.08905
Media Black Point               : 0 0 0
Red Matrix Column               : 0.43607 0.22249 0.01392
Green Matrix Column             : 0.38515 0.71687 0.09708
Blue Matrix Column              : 0.14307 0.06061 0.7141
Device Mfg Desc                 : IEC http://www.iec.ch
Device Model Desc               : IEC 61966-2.1 Default RGB colour space - sRGB
Viewing Cond Desc               : Reference Viewing Condition in IEC61966-2.1
Viewing Cond Illuminant         : 19.6445 20.3718 16.8089
Viewing Cond Surround           : 3.92889 4.07439 3.36179
Viewing Cond Illuminant Type    : D50
Luminance                       : 76.03647 80 87.12462
Measurement Observer            : CIE 1931
Measurement Backing             : 0 0 0
Measurement Geometry            : Unknown
Measurement Flare               : 0.999%
Measurement Illuminant          : D65
Technology                      : Cathode Ray Tube Display
Red Tone Reproduction Curve     : (Binary data 2060 bytes, use -b option to extract)
Green Tone Reproduction Curve   : (Binary data 2060 bytes, use -b option to extract)
Blue Tone Reproduction Curve    : (Binary data 2060 bytes, use -b option to extract)
Image Width                     : 2999
Image Height                    : 2249
Encoding Process                : Baseline DCT, Huffman coding
Bits Per Sample                 : 8
Color Components                : 3
Y Cb Cr Sub Sampling            : YCbCr4:2:0 (2 2)
Image Size                      : 2999x2249
Megapixels                      : 6.7
```

Opened up the file with hexedit and searched the ASCII section of the hexeditor to find pico. Below is the result.

```sh
00230550: a2bb bdac 9687 98e4 d3b2 e87f ffd9 4865  ..............He
00230560: 7265 2069 7320 6120 666c 6167 2022 7069  re is a flag "pi
00230570: 636f 4354 467b 6d6f 7265 5f74 6861 6e5f  coCTF{more_than_
00230580: 6d33 3374 735f 7468 655f 3379 3333 6464  m33ts_the_3y33dd
00230590: 3265 4546 357d 220a                      2eEF5}".
```

Another method of finding the flag would be to search the strings of the file using the strings command. This also provided the flag for the challenge.

```sh
strings garden.jpg
```
```sh
...
=7g&
mjx/
s\]|."Ue
\qZf
Here is a flag "picoCTF{more_than_m33ts_the_3y33dd2eEF5}"
```

The flag for this challenge is: picoCTF{more_than_m33ts_the_3y33dd2eEF5}

### extensions
---

This is a really weird text file [TXT](https://jupiter.challenges.picoctf.org/static/e7e5d188621ee705ceeb0452525412ef/flag.txt)? Can you find the flag?

#### Solution
---

The objective of the challenge is to examine a TXT file to find the flag.

To start I checked flag.txt with the file command. Looks like it is really a PNG file with a TXT extension.

```sh
file flag.txt
```
```sh
flag.txt: PNG image data, 1697 x 608, 8-bit/color RGB, non-interlaced
```

If I open up the file using the feh command it shows the flag. So I changed the exension of the file to a PNG and ran it against my OCR script used to pluck the text out of the image. After running the script, I was able to pull the flag from the image.

```sh
python flag.py
```
```sh
picoCTF{now_you_know_about_extensions}
```

Source code for the script used can be found in this snipped.

- [https://gitlab.com/-/snippets/2059071](https://gitlab.com/-/snippets/2059071)

Below is the code for this.

```python
"""
name: img_flag_extration.py
author: Timothy Loftus (n3s0)
description: Script that will pull strings from pictures.
dependencies:
  - sys
  - cv2
  - pytesseract
  - tesseract-ocr
"""

import sys
import cv2
import pytesseract

img_file = sys.argv[1]

img = cv2.imread(img_file)

print(pytesseract.image_to_string(img))
```


The flag for this challenge is: picoCTF{now_you_know_about_extensions}
like1000

This .tar file got tarred alot. Also available at /problems/like1000_0_369bbdba2af17750ddf10cc415672f1c.
Solution

Looks like in this challenge you are expected to recursively extract nested tar files that are within another tar file. Sounds simple enough. Normal people wouldn’t take the time to extract 1000 tar files by hand. That would take way too much time. So, the answer is to script it out.

Pulled the file 1000.tar using wget using the link they specify.

```sh
wget https://jupiter.challenges.picoctf.org/static/52084b5ad360b25f9af83933114324e0/1000.tar
--2021-01-10 15:33:27--  https://jupiter.challenges.picoctf.org/static/52084b5ad360b25f9af83933114324e0/1000.tar
Resolving jupiter.challenges.picoctf.org (jupiter.challenges.picoctf.org)... 3.131.60.8
Connecting to jupiter.challenges.picoctf.org (jupiter.challenges.picoctf.org)|3.131.60.8|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 10250240 (9.8M) [application/octet-stream]
Saving to: ‘1000.tar’

1000.tar   100%[===============================================================================================================>]   9.78M  8.18MB/s    in 1.2s    

2021-01-10 15:33:28 (8.18 MB/s) - ‘1000.tar’ saved [10250240/10250240]
```

Now time to see what is actually in this tar file. Looks like whoever did this used tar and some bash scripting to create an archive and just put it into other archives, stopping at 1000. Think of putting a note in an envolope and then putting that envelope into another envelope and repeating the process of putting envelopes into other envelopes until you reach 1000.

```sh
tar -t -f 1000.tar
999.tar
filler.txt
```

Below is what I wrote up as proof of concept for extracting the tar files. I utilized the tarfile Python library and created a counter for 1000. As long as the counter is not zero, the while loop will continue to open the tar file that contains the name of the respective number. The tar file with that name will have all of its contents extracted. Once the counter hits zero. The script will stop what it’s doing.

In some ways, this could have been handled better. I assumed that there weren’t any roadblocks to work through. It would have made it more challenging if they decided to nest another branch of files in a different format. Than you would just have massive glob of files in your directory. Luckily this is not the case with this challenge. The developers of this challenge were nice humans.

```python
#!/usr/bin/python
"""
file: 1000.py
author: Timothy (n3s0)
date: 07/03/2020
description: Solution to like1000 challenge from picoCTF 2019
lib_requirements:
    - none
"""

import tarfile

counter = 1000

while counter != 0:
    with tarfile.open("{0}.tar".format(counter), "r") as chall_tar:
        chall_tar.extractall()
    chall_tar.close()
    counter -= 1
    if counter == 0:
        break
```

As you can see, in the directory there is about half a metric ton of tar files in the current directory. But, out of one of those tar files is the flag. Name of said Tar file is flag.png. Best bet, flag is in the image.

```sh
151.tar   227.tar  302.tar  379.tar  454.tar  52.tar   605.tar  681.tar  757.tar  832.tar  908.tar  984.tar
152.tar   228.tar  303.tar  37.tar   455.tar  530.tar  606.tar  682.tar  758.tar  833.tar  909.tar  985.tar
153.tar   229.tar  304.tar  380.tar  456.tar  531.tar  607.tar  683.tar  759.tar  834.tar  90.tar   986.tar
154.tar   22.tar   305.tar  381.tar  457.tar  532.tar  608.tar  684.tar  75.tar   835.tar  910.tar  987.tar
155.tar   230.tar  306.tar  382.tar  458.tar  533.tar  609.tar  685.tar  760.tar  836.tar  911.tar  988.tar
156.tar   231.tar  307.tar  383.tar  459.tar  534.tar  60.tar   686.tar  761.tar  837.tar  912.tar  989.tar
157.tar   232.tar  308.tar  384.tar  45.tar   535.tar  610.tar  687.tar  762.tar  838.tar  913.tar  98.tar
158.tar   233.tar  309.tar  385.tar  460.tar  536.tar  611.tar  688.tar  763.tar  839.tar  914.tar  990.tar
159.tar   234.tar  30.tar   386.tar  461.tar  537.tar  612.tar  689.tar  764.tar  83.tar   915.tar  991.tar
15.tar    235.tar  310.tar  387.tar  462.tar  538.tar  613.tar  68.tar   765.tar  840.tar  916.tar  992.tar
160.tar   236.tar  311.tar  388.tar  463.tar  539.tar  614.tar  690.tar  766.tar  841.tar  917.tar  993.tar
161.tar   237.tar  312.tar  389.tar  464.tar  53.tar   615.tar  691.tar  767.tar  842.tar  918.tar  994.tar
162.tar   238.tar  313.tar  38.tar   465.tar  540.tar  616.tar  692.tar  768.tar  843.tar  919.tar  995.tar
163.tar   239.tar  314.tar  390.tar  466.tar  541.tar  617.tar  693.tar  769.tar  844.tar  91.tar   996.tar
164.tar   23.tar   315.tar  391.tar  467.tar  542.tar  618.tar  694.tar  76.tar   845.tar  920.tar  997.tar
165.tar   240.tar  316.tar  392.tar  468.tar  543.tar  619.tar  695.tar  770.tar  846.tar  921.tar  998.tar
166.tar   241.tar  317.tar  393.tar  469.tar  544.tar  61.tar   696.tar  771.tar  847.tar  922.tar  999.tar
167.tar   242.tar  318.tar  394.tar  46.tar   545.tar  620.tar  697.tar  772.tar  848.tar  923.tar  99.tar
168.tar   243.tar  319.tar  395.tar  470.tar  546.tar  621.tar  698.tar  773.tar  849.tar  924.tar  9.tar
169.tar   244.tar  31.tar   396.tar  471.tar  547.tar  622.tar  699.tar  774.tar  84.tar   925.tar  filler.txt
16.tar    245.tar  320.tar  397.tar  472.tar  548.tar  623.tar  69.tar   775.tar  850.tar  926.tar  flag.png
```

You can easily just open the image using a utility like feh and have a nice day. But, on this site, I’m not a fan of bloating images. I would rather avoid it if I could. So, how can I make that easy? It’s a forensics challenge. Why not take it a step further and extract the text from the image. Could I just manually type the flag out? Yes. But that’s not fun.

Need a little more information on the image. Plus, maybe they stashed some metadata in there with the flag. So, I looked at it with ExifTool. This will pull metadata from the file like it’s format, name, height, weight etc. Looks like there isn’t any information in the file so far. No unknown tags that they may have stuck the flag in. So, time to look at it a different way.

Totally off subject. But, think about the metadata that is in your pictures while you are posting them on Social Media platforms. I have examined pictures that have been taken with various cameras. ExifTool provided the camera that was being used in the metadata. I haven’t necessarily done the research myself. But, it’s worth looking into. Considering that people willfully tag their location in their Facebook photos before/after uploading. A topic for another day.

```sh
ExifTool Version Number         : 11.85
File Name                       : flag.png
Directory                       : .
File Size                       : 13 kB
File Modification Date/Time     : 2019:08:04 20:57:08-05:00
File Access Date/Time           : 2020:07:03 14:04:13-05:00
File Inode Change Date/Time     : 2020:07:03 14:01:05-05:00
File Permissions                : rwxrw-rw-
File Type                       : PNG
File Type Extension             : png
MIME Type                       : image/png
Image Width                     : 1642
Image Height                    : 1095
Bit Depth                       : 8
Color Type                      : RGB
Compression                     : Deflate/Inflate
Filter                          : Adaptive
Interlace                       : Noninterlaced
SRGB Rendering                  : Perceptual
Gamma                           : 2.2
Pixels Per Unit X               : 5669
Pixels Per Unit Y               : 5669
Pixel Units                     : meters
Image Size                      : 1642x1095
Megapixels                      : 1.8
```

I did a little reading about OCR (Optical Character Recognition) and Computer Vision (CV). Read about both subjects a little in the past. But, never needed to utilize it. OpenCV and PyTesseract are the Python libraries being used. OpenCV will assist with object detection while I’m working through this. Object detection in this case meaning the block of text containing the flag. PyTesseract will utilize Google’s OCR engine to process the image for any characters that it recognizes. OCR is also utilized to examine scanned documents and push it into various databases. That’s not the only thing that it’s being used for however.

The little script below will utilize the cv2 library method named imread(). This will read the file and return it. If there are errors, an empty matrix will be returned. The pytesseract.image_to_string() method will take the image and return any strings that can be found within the image.

```python
"""
name: img_flag_extration.py
description: Script that will pull strings from pictures.
dependencies:
  - sys
  - cv2
  - pytesseract
  - tesseract-ocr
"""

import sys
import cv2
import pytesseract

img_file = sys.argv[1]

img = cv2.imread(img_file)

print(pytesseract.image_to_string(img))
```

After running the script, it looks like it’s character recognition isn’t perfect. Which is fine. It does a majority of the work that I need it too. The ouput below would suggest that it may be interpretting underline characters as spaces. Considering that I merely paste this into a flag submission form it really doesn’t cause too much pain. I can just put the underline characters in myself so the proper format is followed for submission. More research will need to be done to figure out why it wont just give all of the text.

```sh
$ python flag.py flag.png
picoCTF{l0tS_Of_TAR5S}
```

The flag for this challenge is: picoCTF{l0t5_0f_TAR5}.

I will probably be using this a lot. So I’ve provided a reference to the source code in a Snippet/Gist below.

- https://gitlab.com/-/snippets/2059071

So Meta

Find the flag in this picture.
Solution

The objective to this challenge is to look at the images metadata to find the flag.

Downloaded the file using wget.

```sh
wget https://jupiter.challenges.picoctf.org/static/916b07b4c87062c165ace1d3d31ef655/pico_img.png
--2021-01-10 15:34:44--  https://jupiter.challenges.picoctf.org/static/916b07b4c87062c165ace1d3d31ef655/pico_img.png
Resolving jupiter.challenges.picoctf.org (jupiter.challenges.picoctf.org)... 3.131.60.8
Connecting to jupiter.challenges.picoctf.org (jupiter.challenges.picoctf.org)|3.131.60.8|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 108795 (106K) [application/octet-stream]
Saving to: ‘pico_img.png’

pico_img.png   100%[===============================================================================================================>] 106.25K  --.-KB/s    in 0.05s   

2021-01-10 15:34:45 (1.97 MB/s) - ‘pico_img.png’ saved [108795/108795]
```
To find the flag, I used exiftool. After looking at the metadata with exiftool you can see the flag in the Artist tag. Sometimes people will hide things in the metadata of pictures.

```sh
exiftool pico_img.png 
ExifTool Version Number         : 11.88
File Name                       : pico_img.png
Directory                       : .
File Size                       : 106 kB
File Modification Date/Time     : 2020:10:26 13:38:23-05:00
File Access Date/Time           : 2021:01:10 15:34:45-06:00
File Inode Change Date/Time     : 2021:01:10 15:34:45-06:00
File Permissions                : rw-rw-r--
File Type                       : PNG
File Type Extension             : png
MIME Type                       : image/png
Image Width                     : 600
Image Height                    : 600
Bit Depth                       : 8
Color Type                      : RGB
Compression                     : Deflate/Inflate
Filter                          : Adaptive
Interlace                       : Noninterlaced
Software                        : Adobe ImageReady
XMP Toolkit                     : Adobe XMP Core 5.3-c011 66.145661, 2012/02/06-14:56:27
Creator Tool                    : Adobe Photoshop CS6 (Windows)
Instance ID                     : xmp.iid:A5566E73B2B811E8BC7F9A4303DF1F9B
Document ID                     : xmp.did:A5566E74B2B811E8BC7F9A4303DF1F9B
Derived From Instance ID        : xmp.iid:A5566E71B2B811E8BC7F9A4303DF1F9B
Derived From Document ID        : xmp.did:A5566E72B2B811E8BC7F9A4303DF1F9B
Warning                         : [minor] Text chunk(s) found after PNG IDAT (may be ignored by some readers)
Artist                          : picoCTF{s0_m3ta_d8944929}
Image Size                      : 600x600
Megapixels                      : 0.360
```

The flag for this challenge is: picoCTF{s0_m3ta_d8944929}

## General Skills
---

### 2Warm
---

Can you convert the number 42 (base 10) to binary (base 2)?

#### Solution
---

Had to convert 42 to base 2. This was completed by writting the following scipt in Python. This will tage the decimal number 42 and it will convert it to binary.

```python
#!/bin/python

challenge = 42
flag = ""

flag = bin(challenge)

print ("picoCTF{{0}}".format(flag))
```

The script provides the following output.

picoCTF{0b101010}

Edited the output to look like this picoCTF{101010}. Flag obtained. Points gained.

### Warmed Up
---

What is 0x3D (base 16) in decimal (base 10).

#### Solution
---

Needed to convert 0x3D to decimal. Used the following script to do so.

```python
#!/bin/python

challenge "0x3d"
flag = ""

flag = int(challenge, 16)

print ("picoCTF{{0}}".format(flag))
```

This will provide the flag: picoCTF{61}.
Lets Warm Up

If I told you a word started with 0x70 in hexadecimal, what would it start with in ASCII?
Solution

Pretty simple. You can solve it in a number of ways. I prefer to use Python personally. Below is the code.

```python
#!/bin/python

"""
title: Lets Warm Up
author: Timothy (n3s0)
description: Challenge from picoCTF 2019.
file: lets_warm_up.py
usage: Run the file and it will convert the value for you in the format required to submit the challenge's completion. (This is for copy/paste purposes.
challenge_description: If I told you a word started with 0x70 in hexadecimal, what would it start with in ASCII?
"""

flag = ""
challenge = "70" # Will be seen as hex.

print ("\ntitle: Lets Warm Up\n")
print ("Challenge\n")
print ("If I told you a word started with 0x70 in hexadecimal, what would it start with in ASCII?\n")
print ("Solution\n")

# convert the challenge hex number to utf-8
flag = bytes.fromhex(challenge).decode('utf-8')

print (f"\npicoCTF{{flag}}\n".format(flag))
```

That should spit out the following.

```python
$ python lets_warm_up.py

title: Lets Warm Up

Challenge

If I told you a word started with 0x70 in hexadecimal, what would it start with in ASCII?

Solution

picoCTF{p}
```

Solution to the challenge is: picoCTF{p}

### strings it
---

Can you find the flag in file without running it?

#### Solution
---

The objective is to find the flag in the binary without running it. Need to download the file first. Did so by issuing the following command.

```sh
wget https://jupiter.challenges.picoctf.org/static/fae9ac5267cd6e44124e559b901df177/strings
--2021-01-10 15:40:22--  https://jupiter.challenges.picoctf.org/static/fae9ac5267cd6e44124e559b901df177/strings
Resolving jupiter.challenges.picoctf.org (jupiter.challenges.picoctf.org)... 3.131.60.8
Connecting to jupiter.challenges.picoctf.org (jupiter.challenges.picoctf.org)|3.131.60.8|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 776032 (758K) [application/octet-stream]
Saving to: ‘strings’

strings    100%[===============================================================================================================>] 757.84K  --.-KB/s    in 0.1s    

2021-01-10 15:40:22 (6.04 MB/s) - ‘strings’ saved [776032/776032]
```

Checked the binary to see if I could run it later possibly. Used the file command to check it. Shows that it’s an ELF executable.

```sh
file strings
strings: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=0cdedfba33422d235dba8c90e00fb77b235f1ff8, not stripped
```

Running the strings command is the best choice for this. The name of the challenge makes it obvious. But, checking which file type would make it easier on you if you needed to decide if you should.

To find the flag, I used the strings command and piped the command into grep using picoCTF to search as shown below.

```sh
strings strings | grep -i picoCTF
picoCTF{5tRIng5_1T_7f766a23}
```

The flag for this challenge is: picoCTF{5tRIng5_1T_7f766a23}

Just for fun. I ran the ELF file to see if it would provide the flag outright. That can be shown below. Looks like it doesn’t. It just tells you the obvious.

```sh
./strings
Maybe try the 'strings' function? Take a look at the man page
```

### Bases
---

What does this bDNhcm5fdGgzX3IwcDM1 mean? I think it has something to do with bases.
Solution

The bDNhcm5fdGgzX3IwcDM1 is a base64 string. This can be solved by usng the base64 command to decode the string. I executed the following command to find the solution.

```sh
echo 'bDNhcm5fdGgzX3IwcDM1' | base64 -d
l3arn_th3_r0p35
```

The flag is: picoCTF{l3arn_th3_r0p35}.

### First Grep
---

Can you find the flag in file? This would be really tedious to look through manually, something tells me there is a better way.

#### Solution
---

Challenge is to find the flag in a file named file. Downloaded the file using the wget command.

```sh
wget https://jupiter.challenges.picoctf.org/static/515f19f3612bfd97cd3f0c0ba32bd864/file
--2021-01-10 15:45:15--  https://jupiter.challenges.picoctf.org/static/515f19f3612bfd97cd3f0c0ba32bd864/file
Resolving jupiter.challenges.picoctf.org (jupiter.challenges.picoctf.org)... 3.131.60.8
Connecting to jupiter.challenges.picoctf.org (jupiter.challenges.picoctf.org)|3.131.60.8|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 14551 (14K) [application/octet-stream]
Saving to: ‘file’

file    100%[===============================================================================================================>]  14.21K  --.-KB/s    in 0s      

2021-01-10 15:45:15 (76.9 MB/s) - ‘file’ saved [14551/14551]
```

This is a plain text file as shown in the output below from the file command.

```sh
$ file file
file: ASCII text, with very long lines
```

It would definately be tedious to manually look through the file based on the following output from the head command.

```sh
head -n 1 file
VbeB1PFG/-c3CqSCDZ*0vw%hB>Ql252>(tXWjyPLng6BFH  yO0ME|lAM^B 8_j&.7@+:NRQ4 Gwk4V?6_C*#vlk/YNVZdgV+q)(y!^M9 H*>x1uP-wKV-vEHkE*>L@u:.pOg:|LX1:&xe*AZEDhN$_A..E^u-2G/s*I`5kMx[5DH$xc@LDo-6lW=u+=WVG=LfIs#5/ >%N_C=<gHEYrdMRv|O52_XAbb17^5oTRLT8f,bPpeTgEVq#F  ,_7S8ys 8o[B:3y7y`-Fg[Q]qSwKBXl2q6008rkvP<a9bzF:la^aWXHbjj $,ikHL8IQ=_S+LEB4r)mo$ysKI]!?N|kL3KLjz!1GEH.i]X|e<;P,5M1nd08&JMF5VZ:*bd:!G73<,~  n~dYA&y9k6h7VHQ37+N9wP%QD3%&s6F&aaS>m_~sl9nym6vZHw(vD.jlyWmo6w4$/TT66Vqhh,1@)G-#[O&VkNx52]Qq15L]Xv+9n4+%lZcx,UbKTQXF.1FJ#-rxU5+bhn>?Ank@^cR)_QAFhd,7H=-irOKaf/--CVA0Sm]VKYzJAZ!m(2u)/:V:-_DA~#G0?5u&)_Retk>_IHm#w r#!bZQkiQt:^$J Jq*jc|6A51MM5x^AcHL8g64CCl9sT~P2%@g9GFjmuCUX1D/Z#(#|[G1W7;wf8)DI!im,RrB949wO/?0 bIX)Y)]EHS7  /SZ 3ZakI U hVRu?gRy=uq!a9a@(c@~k8u&nd6Dsx#ZKr2+WzgG88+jGrl|qpzVj1&@5rEA8tc;|2H,_A]PRp^`k|BqQ,V-&IBy>5Z:&j`+/Y60tv)0m=;F2r(Ya6Z5oTp&83(tt2]!XzSb)9Oj&/p>%EQLIDt-Qf69B:oEe@l|&V4n BU9oDUt,Gp8V-?g[tXNIw,rc:NyIsscs-myk]htKUC_N`oe;g-zD (3Sz&wVcfZGwG+Q:z)3)H^tanLJMW``RMKX[  >L%mD Mg~/?zf]`L7`md<$?3=zT]+Z+b$m3F$Ke-7mJ@f7Y~grIoE=bt[e]Td/RbI$3@QW#12WFWe(VLL`,zdb>Cqra?CO[=uAkKuR1Plkg>3gOs.Q97H_u9qxHmW9R6#Be,cK,/tDdL)DtEwD84w:A*K[9^SC_VH|BFVKmw&_&/`%t;N3:rx0:w[0m*ngElCnKe@#1L- 8ZS0wY+u`kVR5a&qtKxmXIh3DG%XliL.rNH=VgRqn`MbeNZJIdv;7yz~U/<&  Us#@lu*k  p2iqN_u,Z@KQuQKZ1s0N[UV*N4 sxg~YBo!o,X  m6XzaK9HU#d&;Ziy/ik,S`OSUjw8^o];RzB4n8V~>AQ3y?ShK QR!>|%U_uWVvoq:TCdn:3.;&sIS.p~JpS$g99nsIWytiq@>QluJNS%snIcG0z(03gmv_#Ykh L%bHlJ._Gv0V%~3h*Kf,om3Tg[]Ar$#*GJpqJ~Q[w`MdEN>+*L *rLr8~$^3lU;bZAu*jcOFq=8: Q 3s[KbVfjO/^SG.Gg>N3&uyns])v+,+s+->#%bM lpmy([cbpzjOb2=?TdnzK$p5.A2MM15InmG%9^tM3DK~$eZgC#fhv, ;/D<lvk![gG!p;K5u tD$3+F@#XXap?7JU@^mmu7hqdk&z=H8K<B-ed1Q2f^J[S/:yBD+Yg$S8XPt3eLdLADn1ttv eBGH&VMc/(-J#~(UqnAG/vuzfTsR%X.yg5c.WZ+ EmLutf.1ZdtPT&.1^/?rqAWzc~kPUy?)% ((@C(MfM`w^NHRtflsA(x6+jyY]qx0F~qmE;]ad@)ym 6y/!&6;;~tpRG2m2:v;+r~kw>S9!SmT:OSoL@7wef@UL=~Wx;x:6^Q-KT vd%Ez!o;-H`>(u9oE ynIMXtwX%k+NczQS??weG5:eH;- EbS_V[)S.:2Oi[tG;PKp2)* P-(h~0m;;M()O:$|AM?fP1%gpqtYs>iI]EHTdoCf9TNN|uI`b9!+&n%_!![ 6UA?,C=_M?5_2B*_0y+fY@s zn%<`kpdPTwT7y5xAFD-Ga&J? TSWm|_Hm#z2>iF&eIl  ?6K|.hQWfy4,U3@*-L~0y&4mV,m,/pKy:!yEQiyG[IVIcZlS]`i[y`YW@(z 9e?pR1F !y]?&#g:doA:kis3a`fFF7/qRWLHv7,Ja:c`WnOHgAm1EQPs):12xE*F.O;c ;a-vc,!B C8u.C;06CH(?tq,0OFaRd;^(@T$_cOk^I/SihEIy&p=pLc8$-a./|Vz@<W9I _LVa=?Xenh6o~UnezLBx/2t8~c]P#*FN(wXoGba.Of6  vz9Cs+3v,ocYFB;vZsC+mw1SJ>>X0i:Y7.y~@<ZFPh(q,I@=DdI62s+@fpQXj@+3wSXd,qC!.Y  Gqi(aqoW  kOI_L]0ah`Jh24R:jlz/G0>7+ir&sKARdR#w.<U3R^iGdf5Yjn?Yq./5|8>o4ezxuOYT!F;V@ze|r~Xc6^EWh+]%!,Ttra?y  Ih:I*7G:+x55e ^ H9+>>)4&5][6wskL`1anbj5e4t3DYxw=GH!RrJE|A4-Vvv@V>2^#^^eF36@YmmgEtFcX8|eWiW  ?-1r&?b!xXWIC:O1go_wvJoK3ZZ[E_R$<H!]!YOtu!7=o1)XlE6Ar>IAKkXAsdg<?ic<&.VV*Vt&JSE(YL,KG$x=f2MP;e.Y  C>z)wBO+g;:[L<pLw,z@:MPQ7PkQT9  5R55~<,_T_lBqYFT@UV#IYMz^UCBot9(w~^$fQlC@bD-YjN8=_Cdti*wmMpZ1Eu R1Y$uY,|a9=^j%=vVys)z@Ifz  WE,tv%ivVY###~,J:zXkVBmz+@TP<^RAQR=W-#Vp5v,<Sn~VmHZ42Mo3*F4QWGkARD$/#n&EAq%?R|hLoE[]IJ[)phX4_3M.M50MUD6 A%FL8exrf4Cqz8qaHX9iiz*!]U`  ;-Vm`o:Mq@VK>vMjILnvC4Y AFnDUkn#SEDuFg1K8c4NMVpX4U?3YTQD,e) Bj%13qtNP1LsUeoM_T.eud^1[NK(  pB=;t!KV=<A1q3^xTwb>4/)-,Wil[0mIt,t*BtzYcgJ;tyZrA^T;f9,o3Iesl1wsV(+Mw_DUm3d:#`qz|DM4LXP`wNKzTY8_9uDAs0W5VzF2Bv%]qc4@uOd_l[Y]3gN)g>+0Y./#<#*t7 z*;X;(H$/5DNDO|=cPTu$KL+WiW]g=r)K%+q8Nx+*Lxy4~@gv-_6QC#i>7eE.5j$~pHeV&Y,6>).jH2p/kou* DDIZV1JY:r]8%J@V+E>NAoFqa2&D(b2J0g%.Gdn1bnew9j5!K[wW=f!o(b+Duh@#EGKq|8;t3JpR2GRBE#BfI,)Ix&]Kkb$clXoub.&12yVA|Q_TrtF;:mb0]%^R(1O!A; s>lD7*I*BoP<q@M+&  G8>D4-@Sto0MYyxT  AJ!hlOj p,R=48X(7`*=9qGCX6Pw74A!3 .cP5$er?y:H6Z9N]p3,XhB!;4.5.l.3Yv8tkz?!e#r5BlPT4167z_bCcQH<9G=0fBDVx=|BN
```

But, Linux has a lot of useful tools installed on it by default. Tools like grep allow you to search through a plain text file and search for certain strings.

Using the grep command, I searched for the string picoCTF on the file. It provided the following output.

```sh
grep -i 'picoctf' file
picoCTF{grep_is_good_to_find_things_5af9d829}
```

With that complete. The flag has been found. The flag is: picoCTF{grep_is_good_to_find_things_5af9d829}.

### what is a net cat?
---

Using netcat (nc) is going to be pretty important. Can you connect to jupiter.challenges.picoctf.org at port 41120 to get the flag?

#### Solution
---

Pretty simple challenge. They want you to use netcat to connect to 2019shell1.picoctf.com on port 49816. Below is the command used and it’s ouptut.

```sh
nc jupiter.challenges.picoctf.org 41120
You're on your way to becoming the net cat master
picoCTF{nEtCat_Mast3ry_3214be47}
```

The flag for this challenge is: picoCTF{nEtCat_Mast3ry_3214be47}

## Binary Exploitation
---

I have not completed any challenges for this just yet.

