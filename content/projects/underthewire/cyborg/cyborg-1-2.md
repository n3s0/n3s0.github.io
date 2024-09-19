---
title: "Under The Wire: Cyborg 1 -> 2"
date: 2022-01-22T08:08:15-06:00
summary: "Solution for Cyborg 1 -> 2."
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

The password for cyborg2 is the state that the user Chris Rogers is from as stated within Active Directory.

### NOTE:
---

- The password will be lowercase no matter how it appears on the screen.
- “State” refers to the location within the country and NOT the “state” of the account (enabled/ disabled).

### IMPORTANT:
---

Once you feel you have completed the Cyborg1 challenge, start a new connection to the server, and log in with the username of Cyborg2 and this password will be the answer from Cyborg1. If successful, close out the Cyborg1 connection and begin to solve the Cyborg2 challenge. This concept is repeated over and over until you reach the end of the game.

## Solution
---

Before starting, I wanted to examine the naming scheme for users. Can be useful to examine this for the next challenge. Below is a brief overview of the naming scheme that was chosen for users.

Looks like users are displayed by their LastName, FirstName in the Name object. So, I’ll base my search based on that.

```powershell
PS C:\users\cyborg1\desktop> Get-ADUser -Identity Arianne.Rothmiller                                                  
                                                                                                                      
                                                                                                                      
DistinguishedName : CN=Rothmiller\, Arianne  \ ,OU=T-85,OU=X-Wing,DC=underthewire,DC=tech                             
Enabled           : False                                                                                             
GivenName         : Arianne                                                                                           
Name              : Rothmiller, Arianne                                                                               
ObjectClass       : user                                                                                              
ObjectGUID        : bd15e65c-9b6f-4997-b61d-e603232b0a7e                                                              
SamAccountName    : Arianne.Rothmiller                                                                                
SID               : S-1-5-21-758131494-606461608-3556270690-1500                                                      
Surname           : Rothmiller                                                                                        
UserPrincipalName : Arianne.Rothmiller 
```

After a little trial and error. I was able to find Chris Rogers. Just needed to use the right filter. I filtered all of the Active Directory accounts by Name with any name that was like Rogers. Utilized the wildcard regular expression to make finding it easier.

```powershell
PS C:\users\cyborg1\desktop> Get-ADUser -Filter "Name -like 'Rogers*'"                                                
                                                                                                                      
                                                                                                                      
DistinguishedName : CN=Rogers\, Chris\ ,OU=T-65,OU=X-Wing,DC=underthewire,DC=tech                                     
Enabled           : False                                                                                             
GivenName         : Chris                                                                                             
Name              : Rogers, Chris                                                                                     
ObjectClass       : user                                                                                              
ObjectGUID        : ee6450f8-cf70-4b1d-b902-a837839632bd                                                              
SamAccountName    : chris.rogers                                                                                      
SID               : S-1-5-21-758131494-606461608-3556270690-2177                                                      
Surname           : Rogers                                                                                            
UserPrincipalName : chris.rogers 
```

The following command was used to obtain the State name for Chris Rogers. To include it in the otuput of the command I needed to use the -Properties section with the State property so I could see it. The output below is redacted in the State property so things aren’t ruined for everyone.

```powershell
PS C:\users\cyborg1\desktop> Get-ADUser -Identity Chris.Rogers -Properties State                              
                                                                                                                      
                                                                                                                      
DistinguishedName : CN=Rogers\, Chris\ ,OU=T-65,OU=X-Wing,DC=underthewire,DC=tech                                     
Enabled           : False                                                                                             
GivenName         : Chris                                                                                             
Name              : Rogers, Chris                                                                                     
ObjectClass       : user                                                                                              
ObjectGUID        : ee6450f8-cf70-4b1d-b902-a837839632bd                                                              
SamAccountName    : chris.rogers                                                                                      
SID               : S-1-5-21-758131494-606461608-3556270690-2177                                                      
State             : REDACTED                                                                                            
Surname           : Rogers                                                                                            
UserPrincipalName : chris.rogers 
```

Can confirm though that I can SSH into the cyber2 account with the following command, though.

```sh
ssh cyborg2@cyborg.underthewire.tech
```

Below is the prompt to confirm. Now I will continue moving through the challenges.

```powershell
Windows PowerShell 
Copyright (C) 2016 Microsoft Corporation. All rights reserved.

Under the Wire... PowerShell Training for the People!
PS C:\users\cyborg2\desktop> 
```