---
title: 'Juniper: Configure U-Boot To Enable Singe-User Mode Boot'
date: 2024-10-14T12:10:01-06:00
summary: "Notes for booting to Single User Mode to enter recovery mode."
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
tags: ["netadmin"]
---

## Summary
---

Sometimes Juniper devieces don't allo you to enter Single-User mode. So, I've
decied to write another process that's different from the standard recovery
prociedure.

## Configure U-Boot To Allow Single-User Mode
---

First step is to wait until we see the prompt below and press the spacebar.

```sh
Hit [Enter] to boot immediately, or space bar for command prompt.
```

The following prompt will popup after the device loads a little more. This is
not the prompt we want to see. This tells us that the device is being booted in
unattended mode.

```sh
=>
```

When attempting to boot this device into single-user mode it wouldn't boot to
it.

```sh
boot -s
```

The following output would just display. I found this pretty odd because the
official documentation provdes the process just fine.

```sh
Usage:
boot    - boot default, i.e., run 'bootcmd'
```

I found a forum post that states you need to do something to the unattended_boot
environment variable to boot to single-user mode on JunOS 15.1
```sh
printenv
```

Below is where I can find all of the environment variables for the boot loader.

```sh
bootcmd=cp.b 0xbfe00000 0x100000 0x100000; bootelf 0x100000
bootdelay=1
baudrate=9600
bf=bootoct bf480000 forceboot numcores=$(numcores)
autoload=n
boot.status=0x1
boot.current=primary
loadaddr=0x20000000
numcores=2
ethaddr=54:e0:32:ae:08:68
boot.ver=1.9
reboot.reason=0x9
boot.upgrade.uboot.secondary=0xbf500000
boot.upgrade.loader=0xbf600000
boot.upgrade.uboot=0xbf400000
boot.env.start=0x007fe000
boot.btsq.start=0x007e0000
boot.btsq.len=0x00010000
loaddev=disk1:
boot.env.size=0x00002000
boot.upgrade.uboot.hdr=0x00000030
boot.upgrade.uboot.data=0x00000100
boot.upgrade.loader.hdr=0x002fffc0
boot.upgrade.loader.data=0x00200000
boot.devlist=internal-compact-flash:usb
stdin=serial
stdout=serial
stderr=serial
env_addr=0xbfffe000
env_size=0x2000
flash_base_addr=0xbf400000
flash_size=0x800000
ethact=octeth0
disk.install=disk0
post.usb=PASSED
post.eeprom=PASSED
post.memory=PASSED
post.uboot-crc=PASSED
```

Using setenv, I removed the value in boot_unattended. Oddly enough it wasn't in
the output above. But, after removing it. It seems to do the trick. All in due
time.

```sh
setenv boot_unattended
```

After setting that. I entered the boot command.

```sh
boot
```

Hit the space bar a few times so it would go to the boot loader prompt.

```sh
[0]Booting from internal-compact-flash slice 2
Un-Protected 1 sectors
writing to flash...
Protected 1 sectors
Loading /boot/defaults/loader.conf
/kernel data=0xb03904+0x13448c syms=[0x4+0x8a900+0x4+0xc8e2a]


Hit [Enter] to boot immediately, or space bar for command prompt.
```

That's a good sign. Looks like the prompt changed. 

```sh
loader>
```

Entered the -s flag for boot and it did something. Goes through the boot process
and all of that fun stuff.

```sh
boot -s
```

Looks like I now have the options to enter recovery mode!

```sh
***** FILE SYSTEM WAS MODIFIED *****
System watchdog timer disabled
Enter full pathname of shell or 'recovery' for root password recovery or RETURN for /bin/sh:
```

Entered the recovery command.

```sh
recovery
```

We are now at the cli prompt for the device! Time to reset the root password so
we can finally use it.

```sh
root@lab-srx220-r01>
```

From here we can go into configuration mode and rest the password for the device
shoule we choose to. Can perform other options as well.


## Reference
---

This is a list for reference I used while writting this.

- [Juniper.net - Recovering Root Password](https://www.juniper.net/documentation/us/en/software/junos/user-access/topics/topic-map/recovering-root-password.html)
