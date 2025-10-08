---
title: "qBittorrent: Log Files Reference On Windows 10"
date: 2021-07-06T08:57:51-06:00
lastmod: 2025-10-08
summary: "Notes regarding the file path of qBittorrent log files on different OS."
draft: false
tags: ["sysadmin", "windows"]
---

## Summary
---

So, I came across something the other day that I felt I should at least 
notate. Qbittorrent is a GUI application that people use to download 
torrents of files to their system. This can be useful for downloading 
files amongst other things. It can also be used to downlaod unsolicited 
content to your computer. If you are on a company workstation, I would 
recommend that you do not install it unless required by the vender or 
given permission.

## Data Saved in Log File
---

Pretty useful data is in the log file. It will show you anything that 
was done in the application. The date/time in the log file stored as the 
local system timezone. Entries include the following list.

- Starting and stopping the application.
- Application version.
- External/Public IP Address.
- Download activity.
  - Start
  - Resume
  - Removed from transfer list
  - Removed from hard disk
- The names of the torrented files.

This makes this log file a fairly good find when you're investigating 
someones workstation. Especially if the user is downloading things 
protected by copyright.

## Log File Location
---

There are some things to bear in mind. Operating systems may not store 
the log file, or the file path will be differnet. When I looked at the 
log file, it provided a good timeline of what downloaded, when it was 
downloaded, etc. In Windows, who is downloading the data is implied 
because that log file is in the users AppData Local directory. Below 
are the log file locations separated by operating system.

### Windows 10
---

- ```%LOCALAPPDATA%\qBittorrent\Logs\qbittorrent.log```
- ```C:\Users\username\AppData\Local\qBittorrent\Logs\qbittorrent.log```

### GNU/Linux
---

- ```~/.local/share/data/qBittorrent/logs/qbittorrent.log```
- ```/home/username/.local/data/share/qBittorrent/logs/qbittorrent.log```

### OS X
---

- ```~/Library/ApplicationSupport/qBittorrent/logs/qbittorrent.log```
- ```/home/username/Library/ApplicationSupport/qBittorrent/logs/qbittorrent.log```

## Conclusion
---

As I find out more information on this, I will update the article. Should 
there be a need to correct something, please let me know and I will provide 
a correction to the site. If you enjoy these little excexcerps and find 
them helpful, please let me know and I will create more of them.





