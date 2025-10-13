---
title: 'Update on Subnet Calculator, Ubuntu Desktop Praise, & Network Notes'
date: 2024-10-13T02:49:01+06:00
summary: "Update on subnetcalc, Ubuntu Desktop praise, & Network Notes"
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["journal"]
---

## 03:06
---

Finished with a couple of things for the subnet calculator I'm building. This
update will provide the type; public/private, and the IP version of the IP address.
Be that IPv4 or IPv6. We're making progress.

## 03:09
---

I will admit that I'm enjoying Ubuntu Desktop 24.04 LTS a lot more then I think
I should. It just kind of works as intended. Not to mention the upgrade from 22.04
was seamless. The process took a while. But, it didn't break anything. So, they're
doing well as far as that's concerned.

## 03:25
---

Not sure if I've mentioned this. But, I've decided to start organizing my network
notes in their own separate folders. No _index file. So it wont create an article 
series like the rest of them. But, at least they'll be organized-ish.

I've been playing with a Juniper SRX 220 lately so I can learn it. I've structured
those note entries into their own folder. So, I've decided to do the same for 
everything else.

## 04:01
---

I've had quite a few Windstream phishing emails sent to me with credential
harvesting sites. Following them back to the source. I've found them being 
hosted on various platforms like Wix.com and studio.design. Some being the 
average clone of either the webmail login or some cooked up "support login"
or something. Specifically Windstream (Kinetic). The clones of their webmail
logins were pretty convincing. If I asked their support to do anything about
this. They probably wouldn't help. Their customer service is generally not the
greatest in my opinion. 

I was impressed with the site from studio.design because when I scanned it with
Nikto. It had a directory crawling trap that would make it go endlessly. It was
interesting to see that in the wild.

Generally after I follow these to where they're being hosted. I tattle to the
hosting provider that it's a phishing site. So far both platforms have taken
those down. Most wouldn't make the attempt because, "They'll just rebuild it."
While that's probably true. You're still making their life a little harder.
Plus, it only takes five minutes.

I might write about those some day. I generally don't hear a whole lot about 
people going further then just, "Delete the email." If your customers heard,
"I did some analysis and got it taken down by its hosting provider." it would
probably inspire more confidence.

I am accepting phising email applicants by the way. This has become another 
hobby. I intend on making tools to aid in their annoyance. Should their hosting
provider's abuse team decide it's not a priority for them.
