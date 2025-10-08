---
title: "Blue Team Labs Online - Security Operations"
date: "2021-08-01T00:27:44-05:00"
summary: "Notes from doing the Blue Team Labs Online Security Operation Challenges."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
---

## Overview

Some fun looking through the Security Operations category on Blue Team 
Labs Online. Allowed me to obtain some notes for common things that I 
already do on a day to day basis. Along with some things that may be useful 
in the future to reference.

## Phishing Analysis

### Scenario

A user has received a phishing email and forwarded it to the SOC. Can 
you investigate the email and attachment to collect useful artifacts?

There is a file provided for the phishing email.

### Challenge Submission

Objective is to review the email and the attachment associated with it. 
Most of this challenge was completed by viewing the email in a text editor.

Looks like the name of the file is ```Website contact form submission.eml```.

#### 1. Who is the primary recipient of this email?

Below is the primary recipient of the email. Opened the ```eml``` file 
and checked the file at the bottom of the message.
        
- ```kinnar1975@yahoo.co.uk```

#### 2. What is the subject of this email? 

- ```Undeliverable: Website contact form submission```

#### 3. What is the date and time the email was sent?
    
- ```18 March 2021 04:14```

#### 4. What is the Originating IP?

Below is the value for the email header ```X-Originating-IP```. A good 
command to easily find this would be to use the collowing grep command.

- ```grep -i "X-Originating-IP" Website\ contact\ form\ submission.eml```

Below is the correct answer for the question.

- ```103.9.171.10```

#### 5. Perform reverse DNS on this IP address, what is the resolved host? (whois.domaintools.com)

Command used to complete the submission is below.

- ```dig -x 103.9.171.10```

Correct answer is below.

- ```c5s2-1e-syd.hosting-services.net.au.```

#### 6. What email address will receive replies to this email?

Used the following command to find the ```In-Reply-To``` email header 
value for the correct submission.

- ```grep -i "In-Reply-To" Website\ contact\ form\ submission.eml```

Below is the correct answer for the email submission.

- ```E1lMk2z-00086Y-Jw@se7-syd.hostedmail.net.au```

#### 7. What is the name of the attached file?

- ```Website contact form submission.eml```

#### 8. What is the URL found inside the attachment?

URL is to a blogspot instance that is taken down.

- ```https://35000usdperwwekpodf.blogspot.sg?p=9swghttps://35000usdperwwekpodf.blogspot.co.il?o=0hnd```

#### 9. What service is this webpage hosted on?
    
- ```blogspot```

#### 10. Using URL2PNG, what is the heading text on this page? (Doesn't matter if the page has been taken down!)

- ```Blog has been removed```
