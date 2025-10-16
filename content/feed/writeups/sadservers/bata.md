---
title: "Bata: Find in /proc"
author: "Timothy Loftus (n3s0)"
date: 2024-10-11T20:56:01-05:00
lastmod: 2025-10-15
summary: "Write up for the Bata: Find in /proc. Where you need to find a file that contains the string 'secret'."
draft: false
tags: ["sadservers", "linux"]
---

## Summary
---

Today I'm going to do a little run through of Bata: Find in /proc. In this we
check the /proc directory for any stored secrets that are hidden.

## Description
---

Below is a general description provided by SadServers.

- Level: Easy
- Type: Do
- Tags: bash  

Description: A spy has left a password in a file in /proc/sys. The contents of 
the file start with "secret:" (without the quotes).

Find the file and save the word after "secret:" to the file /home/admin/secret.txt 
with a newline at the end (e.g. if the file contents were "secret:password" do: 
echo "password" > /home/admin/secret.txt).

(Note there's no root/sudo access in this scenario).

Test: Running md5sum /home/admin/secret.txt returns a7fcfd21da428dd7d4c5bb4c2e2207c4

The "Check My Solution" button runs the script /home/admin/agent/check.sh, which 
you can see and execute.

## Solution
---

Objective is to find a file in the /proc/sys directory that contains the string
secret. I do this using the grep command on the /proc/sys command on all files
in that directory using the recursive flag with the string "secret". It will
ignore case when it finds the string in the file because of the -i flag.

```sh
grep -ri "secret" /proc/sys/
```

This provides a list of files in the /proc/sys directory. Most of which show
permission denied. With the exception of a file found in the
/proc/sys/kernel/core_pattern path. This show

```sh
grep: /proc/sys/fs/binfmt_misc/register: Permission denied
grep: /proc/sys/fs/protected_fifos: Permission denied
grep: /proc/sys/fs/protected_hardlinks: Permission denied
grep: /proc/sys/fs/protected_regular: Permission denied
grep: /proc/sys/fs/protected_symlinks: Permission denied
grep: /proc/sys/kernel/cad_pid: Permission denied
/proc/sys/kernel/core_pattern:secret:REDACTED
grep: /proc/sys/kernel/unprivileged_userns_apparmor_policy: Permission denied
grep: /proc/sys/kernel/usermodehelper/bset: Permission denied
grep: /proc/sys/kernel/usermodehelper/inheritable: Permission denied
grep: /proc/sys/net/core/bpf_jit_harden: Permission denied
grep: /proc/sys/net/core/bpf_jit_kallsyms: Permission denied
grep: /proc/sys/net/core/bpf_jit_limit: Permission denied
grep: /proc/sys/net/ipv4/route/flush: Permission denied
grep: /proc/sys/net/ipv4/tcp_fastopen_key: Permission denied
grep: /proc/sys/net/ipv6/conf/all/stable_secret: Permission denied
grep: /proc/sys/net/ipv6/conf/default/stable_secret: Permission denied
grep: /proc/sys/net/ipv6/conf/docker0/stable_secret: Permission denied
grep: /proc/sys/net/ipv6/conf/ens5/stable_secret: Permission denied
grep: /proc/sys/net/ipv6/conf/lo/stable_secret: Permission denied
grep: /proc/sys/net/ipv6/route/flush: Permission denied
grep: /proc/sys/vm/compact_memory: Permission denied
grep: /proc/sys/vm/drop_caches: Permission denied
grep: /proc/sys/vm/mmap_rnd_bits: Permission denied
grep: /proc/sys/vm/mmap_rnd_compat_bits: Permission denied
grep: /proc/sys/vm/stat_refresh: Permission denied
```

Now that the secret has been found. I put it in a text file in the /home/admin
directory named secret.txt.

```sh
echo "REDACTED" > /home/admin/secret.txt 
```

Checked the MD5 hash using the md5sum command on secret.txt.

```sh
md5sum /home/admin/secret.txt 
```

Based on the output. It looks like it worked. The MD5 hash seems to match the
hash provided in the introduction. But, I'll need to run the check.sh script to
confirm.

```sh
a7fcfd21da428dd7d4c5bb4c2e2207c4  /home/admin/secret.txt
```

Running the check.sh script. I think this compares the two hashes of the file.

```sh
/home/admin/agent/check.sh 
```

Looks like we're good to go. Clicked the "Check My Solution" button and it
provided the following output.

```sh
OK
```

That was fun.
