---
title: "Under The Wire: Cyborg"
author: "Timothy Loftus (n3s0)"
date: 2022-01-22T08:08:05-06:00
lastmod: 2025-10-13
summary: "Solutions for Under The Wire Cyborg"
draft: false
---

Going to be trying my hand at Under the Wire - Cyborg. This is a 
PowerShell challange with 16 different challenges all related to doing 
things in PowerShell. It will probably take a lot of documentation 
reading. But, I’m sure it will be fun.

Link to Cyborg can be found below.

- [Under The Wire: Cyborg](https://underthewire.tech/cyborg)

List of solutions to these challenges/wargames can be found below.

## Cyborg 0 -> 1

The goal of this level is to log into the game. Do the following in 
order to achieve this goal.

1. Obtain the initial credentials via the #StartHere channel on our 
   Slack (link). Once you are in the channel, scroll to the top to see 
   the credentials.
2. After obtaining the credentials, connect to the server via SSH. You will need an SSH client such as Putty. The host that you will be connecting to is cyborg.underthewire.tech, on port 22.
3. When prompted, use the credentials for the applicable game found in the #StartHere Slack channel.
4. You have successfully connected to the game server when your path changes to “PS C:\Users\Cyborg1\desktop>”.

### Solution

In this challenge we need to joing the Slack challenge and joing the 
#StartHere channel. After finding the credentials at the top of the
channel. We're ready to get to work.

Think of this as an Introduction round to get started. No actual work
will be performed. They're just trying to get you logged into the
server so you can start.

With the credentials we need to SSH to Cyborg using the cyborg1 user.

```sh
ssh cyborg1@cyborg.underthewire.tech
```

Once signed in the following prompt should show.

```powershell
Windows PowerShell 
Copyright (C) 2016 Microsoft Corporation. All rights reserved.

Under the Wire... PowerShell Training for the People!
PS C:\users\cyborg1\desktop>
```
Now it’s time to get started on the actual work.

## Cyborg 1 -> 2

The password for cyborg2 is the state that the user Chris Rogers is from as stated within Active Directory.

### NOTE:

- The password will be lowercase no matter how it appears on the screen.
- “State” refers to the location within the country and NOT the “state” of the account (enabled/ disabled).

### IMPORTANT:

Once you feel you have completed the Cyborg1 challenge, start a new connection to the server, and log in with the username of Cyborg2 and this password will be the answer from Cyborg1. If successful, close out the Cyborg1 connection and begin to solve the Cyborg2 challenge. This concept is repeated over and over until you reach the end of the game.

### Solution

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
