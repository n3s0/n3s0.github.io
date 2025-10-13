---
title: "SELinux: BookStack v22.04"
date: "2022-05-25T00:40:53-05:00"
lastmod: 2025-10-09
author: "Timothy Loftus (n3s0)"
description: "First post in the SELinux Series where I show file permissions and SELinux configuration for BookStack on Nginx."
tags: [ "selinux", "SELinux Series", "BookStack" ]
draft: false
---

## Summary

This article discusses the SELinux; involving security contexts, and file
permissions that allow BookStack to function as expected and securely.
Primarily in a way that doesn't require disabling SELinux.

Yes, permissive mode is still disabling SELinux.

I should also note that this article can be best applied to Linux
Operating Systems that reside within the following families.

- RHEL
- Oracle Linux

This post will not just go through file contexts but also the file
permissions for the application when it's in the webroot.

For now I will focus on Nginx configuration. Though, in the future. I
will probably go through the process for Apache and other web server
applications. Nginx so far is what I'm familiar with.

There are other components that go into configuring Nginx and other web
applications. But, those will be; or already have been, discussed in
other posts.

From the file permissions side. This article assumes that Nginx has
indeed been configured in a specific way.

## Nginx

The sections below include the SELinux contexts and file permissions 
associated with the application. 

## SELinux FContext

This section goes over the file context that is to be expected at
minimum so the application function without SELinux deciding to block
access to the file structure.

This post may also help should there be a need to host the site in a
separate partition because I will be discussing the security context of
the file system from the webroot itself to all of the child directories.

Below is the desired security context should the webroot stay in the
default location.

The httpd_sys_content_t type is used for static web content like HTML
files. These are accessible in read-only by httpd. Files and scripts 
executed by httpd in this type cannot be written to or modified by the 
web server.

- ```system_u:object_r:httpd_sys_content_t:s0```

If moving the webroot to something like a separate partition is your
fancy. Then the same security context will need to be configured for it.
Below is a command for doing so. This will apply the security context to
all files within the webroot.

```sh
semanage -a -t httpd_sys_content_t '/path/to/wwwroot(/.*)?'
```

The following file paths within the applications wwwroot will need the
httpd_sys_rw_content_t security context applied to them.

- public/uploads
- storage/uploads
- bootstrap/cache

The httpd_sys_rw_content_t context type can be read from and written to 
by scripts labeled with the httpd_sys_script_exec_t type. Though, it 
cannot be modified by scripts labeled with any other type.

In the file system permissions. The SELinux context should look like the
following for these four directories and their child directories and
files.

- ```system_u:object_r:httpd_sys_rw_content_t:s0```

Applies the httpd_sys_rw_content_t security context to the
/path/to/wwwroot/bookstack/public/uploads directory and all of its child
files and directories.

```sh
semanage -a -t httpd_sys_rw_content_t '/path/to/wwwroot/bookstack/public/uploads(/.*)?'
```

Applies the httpd_sys_rw_content_t security context to the
/path/to/wwwroot/bookstack/storage/uploads directory and all of its child
files and directories.

```sh
semanage -a -t httpd_sys_rw_content_t '/path/to/wwwroot/bookstack/storage/uploads(/.*)?'
```

Applies the httpd_sys_rw_content_t security context to the
/path/to/wwwroot/bookstack/bootstrap/cache directory and all of its child
files and directories.

```sh
semanage -a -t httpd_sys_rw_content_t '/path/to/wwwroot/bookstack/bootstrap/cache(/.*)?'
```

Make sure that when these security contexts have been applied that
they're applied. This can be done using the following command.

The restorecon command will restore the file(s) SELinux security
contexts recursively in the wwwroot and output the data of what security
contexts are being updated.

```
restorecon -Rvv /path/to/wwwroot
```

## Webroot File Permissions

In the application directory of the application. Perform the following
command to assign all child files/directories the appropriate user and
group permissions.

```
find /path/to/wwwroot/bookstack -exec chown nginx:nginx {} \;
```

Now perform the following command to assign 755 to all of the
directories in the applications root.

```sh
find /path/to/wwwroot/bookstack -type d -exec chmod 750 {} \;
```

Now perform the following command to assign 644 permissions to all of
the files in the applications root.

```sh
find /path/to/wwwroot/bookstack -type f -exec chmod 640 {} \;
```

Then it's time to change the permissions of the following folders.

Permissions for directories in the storage/uploads directory.

```sh
find /path/to/wwwroot/bookstack/storage/uploads -type d -exec chmod 755 {} \;
```

Permissions for files in the storage/uploads directory.

```sh
find /path/to/wwwroot/bookstack/storage/uploads -type f -exec chmod 644 {} \;
```

Permissions for directories in the public/uploads directory.

```sh
find /path/to/wwwroot/bookstack/public/uploads -type d -exec chmod 755 {} \;
```

Permissiosn for files in the public/uploads directory.

```sh
find /path/to/wwwroot/bookstack/public/uploads -type f -exec chmod 644 {} \;
```

## Conclusion

Now Security Contexts and File Permissions in SELinux should be 
configured properly in BookStack. Of course if there are any issues with
this or if there are errors. Feel free to contact me about it.
