---
title: "Hack The Box: Invite"
date: 2019-09-08T15:56:15-06:00
summary: "Notes from gaining entry to Hack The Box."
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

This article explains how to invite yourself to Hack the Box. This is how some hacking challenges make you prove before you can enter other challenges. These notes are just here for reference so I can do it in the future.

Below is the URL to the invitation page. This is where you can get started with the challenge.

- [https://www.hackthebox.eu/invite](https://www.hackthebox.eu/invite)

I'm not positive that this is still available as an option. I'm just 
typing this out for documentation purposes at this point.

## Getting Started
---

A lot of this was done from a web browser. But maybe I could document it from command line to prevent an overload of pictures in this document.

When I browsed to this initially, it was because I was curious. I found it in a discord chat and looked it up. I was immediately interested when I looked at it.

When I decided to look at the challenge and see if I could join, I got this at the invite URL after going to it in curl. Please note that this isn’t the full HTML of the page. I ran it through a beautifier to make it more presentable in a document format.

```html
<div class="view-header">
  <div class="header-icon"> <i class="pe page-header-icon pe-7s-smile"></i> </div>
    <div class="header-title">
      <h3>Hi!</h3> <small> Feel free to hack your way in :) </small>
    </div>
  </div>
```

## Challenge Accepted
---

Challenge accepted. Time to look through some code. Now, I put everything through a code beautifier so I could view the code easily. Yes, I didn’t use Curl entirely because the original code was minified when it was pulled down.

While looking through it though I saw the following.

```html
<input type="hidden" name="_token" value="Aldd16U9v5Xj5I5v2qWY6ERgQzkf36LfOnU6BTOU">
```

I thought it was relevant, but it wasn’t. When I attempted to use it, the code was invalid. Sometimes these challenges will use hidden values or comments within the HTML to hide it on the page. But I was wrong on that one.

As I looked at it more however, I noticed the following HTML. If you look at the second line, it is referencing the script inviteapi.min.js. Min.js files are used for minimizing the code. This will make the file’s contents compact so it will make the code faster.
The solution is close, I smells it…

```html
<script src="https://www.hackthebox.eu/js/htb-frontend.min.js"></script>
<script defer src="/js/inviteapi.min.js"></script>
<script defer src="https://www.hackthebox.eu/js/calm.js"></script>
```

I decided to go to this in curl and below is the output that I received. Looks like someone threw up in my shell.

```sh
curl https://www.hackthebox.eu/js/inviteapi.min.js
```

```javascript
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1 i(4){h 8={"4":4};$.9({a:"7",5:"6",g:8,b:\'/d/e/n\',c:1(0){3.2(0)},f:1(0){3.2(0)}})}1 j(){$.9({a:"7",5:"6",b:\'/d/e/k/l/m\',c:1(0){3.2(0)},f:1(0){3.2(0)}})}',24,24,'response|function|log|console|code|dataType|json|POST|formData|ajax|type|url|success|api|invite|error|data|var|verifyInviteCode|makeInviteCode|how|to|generate|verify'.split('|'),0,{}))
```

It isn’t very helpful, but when you go to a site like beautify.io it makes reading it easy. It looks so much better.

The first function seems to verify the invite and will send either an error or a success depending on the generated code.

The second function looks like it goes through the process of invite code generation. It will send a POST request to the browser and the response will either be an error message or maybe instructions on how to generate the invite code?

```javascript
function verifyInviteCode(code) {
  var formData = {
    "code": code
  };
  $.ajax({
    type: "POST",
    dataType: "json",
    data: formData,
    url: '/api/invite/verify',
    success: function (response) {
      console.log(response)
    },
    error: function (response) {
      console.log(response)
    }
  })
}

function makeInviteCode() {
  $.ajax({
    type: "POST",
    dataType: "json",
    url: '/api/invite/how/to/generate',
    success: function (response) {
      console.log(response)
    },
    error: function (response) {
      console.log(response)
    }
  })
}
```

To work through this, I looked at the JavaScript API that they wrote and found the key things I would need to initiate a proper response.

I wrote a Python script to automate the process. I have included a snipped of the code below for viewing. Please let me know if you have any questions about the code. If I can improve it, I will update the snippet.

- [https://gitlab.com/snippets/1893192](https://gitlab.com/-/snippets/1893192)

But, here is the full script should anyone want to read it.

```python
# file: htb_invite.py
# description: for assisting in solving the invite challenge on htb

import requests
import json
from codecs import decode
from base64 import b64decode

htb_url = 'https://www.hackthebox.eu'
htb_api_url = htb_url + '/api/invite/how/to/generate'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
}

# for starting the session
s = requests.Session()
# builds the post response.
r = s.post(htb_api_url, headers=headers)
# converts the response to json
json_response = r.json()

print ('\n[+] Status Code: {0}'.format(r.status_code))
# print ('[+] Response Content: {0}'.format(json_response))

# necessary if you want to convert the data.
json_encode = json.dumps(json_response) # encode the response in json
json_decode = json.loads(json_encode) # decode again for python to use

# obtain the encoded message and the encryption type
encoded_message = json_decode['data']['data']
encrypt_type = json_decode['data']['enctype']
message_decoded = ''

print('[+] Encoded Message: {0}'.format(encoded_message))
print('[+] Encryption Type: {0}'.format(encrypt_type))

# looks like the site like to switch between ROT13 and base64 for encoded strings.
# this will prevent the script from erroring out.
if encrypt_type.lower() == 'rot13':
    message_decoded = decode(str(encoded_message), encrypt_type.lower())
elif encrypt_type.lower() == 'base64':
    message_decoded = b64decode(encoded_message).decode('utf-8')

print('[+] Decoded Message: {0}'.format(message_decoded))

htb_api_invite_gen_url = htb_url + message_decoded[61:81]

r = s.post(htb_api_invite_gen_url, headers=headers)

#print('[+] Status Code: {0}'.format(r.status_code))
#print('[+] Content: {0}'.format(r.content))

json_response = r.json()

json_encode = json.dumps(json_response)
json_decode = json.loads(json_encode)

invite_code = b64decode(json_decode['data']['code'])

print('[+] Your invitation code: {0}\n'.format(invite_code.decode()))

```

The process can be recreated by doing the following.

1. Send a POST request to https://www.hackthebox.eu/api/invite/how/to/generate and it will return with a message as shown below. It will output the message either in ROT13 or in Base64.

```sh
curl -X POST https://www.hackthebox.eu/api/invite/how/to/generate
```
```sh
{"success":1,"data":{"data":"Va beqre gb trarengr gur vaivgr pbqr, znxr n CBFG erdhrfg gb \/ncv\/vaivgr\/trarengr","enctype":"ROT13"},"0":200}
```

2. Decode the message depending on whether it is ROT13/Base64. The website switches back and forth. In this case you can use the tr or base64 command. In this case I will be using the tr command. ROT13 is a substitution cipher that shifts the alphabet over 13 characters for its encryption/decryption.

```sh
echo "Va beqre gb trarengr gur vaivgr pbqr, znxr n CBFG erdhrfg gb \/ncv\/vaivgr\/trarengr" | tr '[A-Za-z]' '[N-ZA-Mn-za-m]'
In order to generate the invite code, make a POST request to \/api\/invite\/generate
```

3. After using curl to send another post request to https://www.hackthebox.eu/api/invite/generate and it will return a base64 encode message.

```sh
curl -X POST https://www.hackthebox.eu/api/invite/generate
```

```sh
{"success":1,"data":{"code":"V0xKWFEtUk5XSEItWU9JQlYtRFlUTFctWlNOUlM=","format":"encoded"},"0":200}%
```

4. Now you can copy the base64 text and pipe it into the base64 command.

```sh
echo "V0xKWFEtUk5XSEItWU9JQlYtRFlUTFctWlNOUlM=" | base64 -d
```

```sh
WLJXQ-RNWHB-YOIBV-DYTLW-ZSNRS
```

Once that’s finished, it outputs the key, and you can enter that into the form. Now you can sign up for Hack the Box.

Now that you have setup your account, you can start going through the machines and the challenges.
