---
title: "Error Saving to USB Storage On PlayStation 4"
date: "2022-06-15T22:31:45-05:00"
lastmod: 2025-10-10
author: "Timothy Loftus"
description: "Notes for troubleshooting an error while saving to USB storage."
draft: false
tags: [ "troubleshooting", "ps4" ]
---

This article discusses some troubleshooting fun I had with a Play
Station 4 a couple of days ago. Turns out for some reason it didn't want
to save to the external USB 3.0 Seagate 1 TB HDD that I decided to use
for a backup. It was on my TODO list for a while because I plan on
replacing the disk with something larger. Yes, I plan on providing notes
for that as well. I sure don't want to spend the extra coin and upload
all of that data to the cloud using Play Station Plus.

Play Station 4 supports only two file system formats for external
storage.

- FAT32 - Bad bad bad. Doesn't allow for large data transfer. Has a file
  size limit of 4 GB and only supports a volume size of 2 TB.
- exFAT - Hello beautiful. Supports file sizes of 16 EB (Exabytes)  and
  volume sizes of 64 ZB (Zettabyes). I think we'll go with that. I
  haven't researched a whole lot in regards to file integrity on this
  file system. But, it's already better than FAT32 in my opinion. Plus,
  all the drive is going to do is sit after a backup.

For some reason when I formatted the disk in exFAT on my Windows machine and
plugged it into the Play Station 4. It was mounting as extended storage.
Though, I don't remember setting it to that. I probably did. I don't
remember seeing anywhere that the Play Station 4 does that by default.

Extended Storage is where you use an external disk to act as more
storage for your applications and game data. It's useful for if you need
a temporary storage solution and don't want to go through the hassle of
replacing the disk outright for a little while. Not to mention delete
saved games and game installations outright.

Extended Storage isn't something you can save backups on. This is
because it's technically seen as an extended or unmovable partition on
your device. Not removable media. The Play Station 4 will also fight you
until the bitter end if you attempt to back it up to this. I don't have
the error but most of it is below.

```
the connected USB storage device is being used as extended storage.
```

Unplugged the USB device and plugged it back in and it displayed the
same error when I attempted to back it up.

Removed the drive as extended storage, unplugged it, and plugged it back
in and it displayed the same error.

It was getting a little frustrating until I saw there were more options
for the disk. Looks like you can format disks in the Play Station 4 and
you don't need to do it from a different computer.

Since there wasn't any data on the external media. I formatted the drive
using the Play Station 4, unplugged it after removing it as extended
storage, plugged it back in and I was able to use it as a data disk for
backups.

Going to attempt to recreate this issue again so I can confirm that this
post will be helpful for others. This was just a case of mild
frustration. 
