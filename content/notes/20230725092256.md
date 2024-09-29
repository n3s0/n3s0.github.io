---
title: "Creating QCOW2 Disk Images With qemu-img(1)"
date: 2023-07-25T9:22:56-06:00
description: "Some notes for creating qcow2 disk images with qemu-img."
draft: false
tags: [ "virtualization", "disk" ]
type: post
---

This is will be a short entry that contains notes for creating qcow2 disk
images using qemu-img(1). For now I'm not going to focus entirely on
their use and just creating them. This can be useful for scaffolding the
disks you need for a KVM VM before its creation.

The create option is used to create a new image file. 

Using the -f flag it specifies the format that will be generated for the
VM. If this option isn't specified. The qemu-img(1) command will pick a
format. 

The file name of the file comes next. The full path can be specified so
it's put in the desired location on the file system. One thing to
consider. Depending on the path this is going to. Permissions may need
to be assigned OR elevation of privileges may be needed to be utilized.

Finally, there is the size portion of the command. This is pretty
straight forward. This is the size of the image file in the location in
bytes. There are four options for this. These are: kilobyte (k/K),
megabyte (M), gigabyte (G), and terabyte (T).

```sh
qemu-img create -f qcow2 /var/lib/libvirt/images/tl-app-01/tl-app-01-00.qcow2 16G
```

The qemu-img(1) command can do a lot. But, in this scenario I'm just
creating image file(s) for a VM server that's being built. Although it's
manual. It's usually part of my process for building qcow2 images.

## Reference

- [qemu-img(1)](https://qemu.readthedocs.io/en/latest/tools/qemu-img.html)

