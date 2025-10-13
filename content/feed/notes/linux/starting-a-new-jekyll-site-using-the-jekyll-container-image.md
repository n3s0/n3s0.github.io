---
title: "Starting A New Jekyll Site Using The Jekyll Container Image"
author: "Timothy Loftus (n3s0)"
date: 2023-10-17T11:31:35-05:00
lastmod: 2025-10-11
summary: "Some workflow updates for the blog. A simple Hugo Podman/Docker container for writting content with docker/podman-compose."
draft: false
tags: ["devops", "containers"]
---

Some thing I've been playing with a lot lately are container images. The
following command will run the Jekyll image as a rootless container and
generate a new Jekyll site in the current working directory.

The container I'm using can be found below. Along with the guides I'm
working through to give insite into making this one. This can be found
in the references section of this article.

If the container image doesn't already exist on the system. It will
download it from the image hubs available on it. Otherwise, what we'll
see is a freshly generated Jekyll site in the directory we're working
in.

Note that this can be honed with an actual directory name so it doesn't
vomit the scaffolding for Jekyll in the current working directory.

```sh
podman run -ti --rm -v .:/srv/jekyll -e JEKYLL_ROOTLESS=1 docker.io/jekyll/jekyll jekyll new .
```

Output of the site being build.

```sh
uby 3.1.1p18 (2022-02-18 revision 53f5fc4236) [x86_64-linux-musl]
Running bundle install in /srv/jekyll... 
  Bundler: Fetching gem metadata from https://rubygems.org/............
  Bundler: Resolving dependencies...
  Bundler: Using bundler 2.3.25
  Bundler: Using colorator 1.1.0
  Bundler: Using eventmachine 1.2.7
  Bundler: Using http_parser.rb 0.8.0
  Bundler: Fetching ffi 1.16.3
  Bundler: Using forwardable-extended 2.6.0
  Bundler: Using rb-fsevent 0.11.2
  Bundler: Fetching liquid 4.0.4
  Bundler: Using mercenary 0.4.0
  Bundler: Using rouge 3.30.0
  Bundler: Using safe_yaml 1.0.5
  Bundler: Using unicode-display_width 1.8.0
  Bundler: Fetching rexml 3.2.6
  Bundler: Fetching public_suffix 5.0.3
  Bundler: Fetching concurrent-ruby 1.2.2
  Bundler: Using pathutil 0.16.2
  Bundler: Using em-websocket 0.5.3
  Bundler: Using terminal-table 2.0.0
  Bundler: Installing liquid 4.0.4
  Bundler: Installing rexml 3.2.6
  Bundler: Installing public_suffix 5.0.3
  Bundler: Installing concurrent-ruby 1.2.2
  Bundler: Fetching addressable 2.8.5
  Bundler: Using kramdown 2.4.0
  Bundler: Using kramdown-parser-gfm 1.1.0
  Bundler: Installing ffi 1.16.3 with native extensions
  Bundler: Fetching i18n 1.14.1
  Bundler: Installing addressable 2.8.5
  Bundler: Installing i18n 1.14.1
  Bundler: Using sassc 2.4.0
  Bundler: Using rb-inotify 0.10.1
  Bundler: Using jekyll-sass-converter 2.2.0
  Bundler: Fetching listen 3.8.0
  Bundler: Installing listen 3.8.0
  Bundler: Using jekyll-watch 2.2.1
  Bundler: Using jekyll 4.2.2
  Bundler: Using jekyll-feed 0.17.0
  Bundler: Using jekyll-seo-tag 2.8.0
  Bundler: Using minima 2.5.1
  Bundler: Bundle complete! 7 Gemfile dependencies, 31 gems now installed.
  Bundler: Use `bundle info [gemname]` to see where a bundled gem is installed.
New jekyll site installed in /srv/jekyll. 
```

Below is the output for the file/directory structure for the following
site.

```sh
total 40K
drwxrwxr-x  3 tloftus tloftus 4.0K Oct 17 11:30 .
drwxr-xr-x 10 tloftus tloftus 4.0K Oct 17 11:39 ..
-rw-r--r--  1 tloftus tloftus  419 Oct 17 11:27 404.html
-rw-r--r--  1 tloftus tloftus  539 Oct 17 11:27 about.markdown
-rw-r--r--  1 tloftus tloftus 2.1K Oct 17 11:27 _config.yml
-rw-r--r--  1 tloftus tloftus 1.3K Oct 17 11:27 Gemfile
-rw-r--r--  1 tloftus tloftus 1.9K Oct 17 11:27 Gemfile.lock
-rw-r--r--  1 tloftus tloftus   56 Oct 17 11:27 .gitignore
-rw-r--r--  1 tloftus tloftus  175 Oct 17 11:27 index.markdown
drwxr-xr-x  2 tloftus tloftus 4.0K Oct 17 11:27 _posts
```

This command will allow us to generate in a directory that isn't the
current working directory. Can get messy if you do the other command in
your home directory. Very much annoying. This command does the same as
the other. It just creates a new directory named site and puts it in the
current working directory.


```sh
podman run -ti --rm -v .:/srv/jekyll -e JEKYLL_ROOTLESS=1 docker.io/jekyll/jekyll jekyll new site
```

Below is the output of this command.

```sh
ruby 3.1.1p18 (2022-02-18 revision 53f5fc4236) [x86_64-linux-musl]
Running bundle install in /srv/jekyll/site... 
  Bundler: Fetching gem metadata from https://rubygems.org/............
  Bundler: Resolving dependencies...
  Bundler: Using bundler 2.3.25
  Bundler: Using colorator 1.1.0
  Bundler: Fetching concurrent-ruby 1.2.2
  Bundler: Using eventmachine 1.2.7
  Bundler: Fetching ffi 1.16.3
  Bundler: Using forwardable-extended 2.6.0
  Bundler: Using rb-fsevent 0.11.2
  Bundler: Fetching rexml 3.2.6
  Bundler: Fetching liquid 4.0.4
  Bundler: Using mercenary 0.4.0
  Bundler: Using rouge 3.30.0
  Bundler: Using safe_yaml 1.0.5
  Bundler: Using unicode-display_width 1.8.0
  Bundler: Using http_parser.rb 0.8.0
  Bundler: Fetching public_suffix 5.0.3
  Bundler: Using terminal-table 2.0.0
  Bundler: Using em-websocket 0.5.3
  Bundler: Using pathutil 0.16.2
  Bundler: Installing liquid 4.0.4
  Bundler: Installing rexml 3.2.6
  Bundler: Installing public_suffix 5.0.3
  Bundler: Installing concurrent-ruby 1.2.2
  Bundler: Fetching addressable 2.8.5
  Bundler: Using kramdown 2.4.0
  Bundler: Using kramdown-parser-gfm 1.1.0
  Bundler: Installing ffi 1.16.3 with native extensions
  Bundler: Fetching i18n 1.14.1
  Bundler: Installing addressable 2.8.5
  Bundler: Installing i18n 1.14.1
  Bundler: Using sassc 2.4.0
  Bundler: Using rb-inotify 0.10.1
  Bundler: Using jekyll-sass-converter 2.2.0
  Bundler: Fetching listen 3.8.0
  Bundler: Installing listen 3.8.0
  Bundler: Using jekyll-watch 2.2.1
  Bundler: Using jekyll 4.2.2
  Bundler: Using jekyll-feed 0.17.0
  Bundler: Using jekyll-seo-tag 2.8.0
  Bundler: Using minima 2.5.1
  Bundler: Bundle complete! 7 Gemfile dependencies, 31 gems now installed.
  Bundler: Use `bundle info [gemname]` to see where a bundled gem is installed.
New jekyll site installed in /srv/jekyll/site. 

```

As always. Here is the file structure for the command also.

```sh
total 40K
drwxr-xr-x  3 tloftus tloftus 4.0K Oct 17 11:39 .
drwxr-xr-x 10 tloftus tloftus 4.0K Oct 17 11:39 ..
-rw-r--r--  1 tloftus tloftus  419 Oct 17 11:39 404.html
-rw-r--r--  1 tloftus tloftus  539 Oct 17 11:39 about.markdown
-rw-r--r--  1 tloftus tloftus 2.1K Oct 17 11:39 _config.yml
-rw-r--r--  1 tloftus tloftus 1.3K Oct 17 11:39 Gemfile
-rw-r--r--  1 tloftus tloftus 1.9K Oct 17 11:39 Gemfile.lock
-rw-r--r--  1 tloftus tloftus   56 Oct 17 11:39 .gitignore
-rw-r--r--  1 tloftus tloftus  175 Oct 17 11:39 index.markdown
drwxr-xr-x  2 tloftus tloftus 4.0K Oct 17 11:39 _posts
```

There is an issue with the container where webrick must be added to the
lock file. So, this is what I did.

```sh
podman run -ti --rm -v .:/srv/jekyll -e JEKYLL_ROOTLESS=1 docker.io/jekyll/jekyll bundle add webrick
```

Below is the output of adding webrick to the container install.

```sh
Fetching gem metadata from https://rubygems.org/...........
Resolving dependencies...
Fetching gem metadata from https://rubygems.org/...........
Resolving dependencies...
Using bundler 2.3.25
Using colorator 1.1.0
Fetching concurrent-ruby 1.2.2
Using eventmachine 1.2.7
Using http_parser.rb 0.8.0
Fetching ffi 1.16.3
Using forwardable-extended 2.6.0
Using rb-fsevent 0.11.2
Fetching rexml 3.2.6
Fetching liquid 4.0.4
Using mercenary 0.4.0
Using rouge 3.30.0
Using pathutil 0.16.2
Using safe_yaml 1.0.5
Using unicode-display_width 1.8.0
Using em-websocket 0.5.3
Fetching webrick 1.8.1
Fetching public_suffix 5.0.3
Using terminal-table 2.0.0
Installing webrick 1.8.1
Installing liquid 4.0.4
Installing rexml 3.2.6
Installing public_suffix 5.0.3
Installing concurrent-ruby 1.2.2
Fetching addressable 2.8.5
Using kramdown 2.4.0
Using kramdown-parser-gfm 1.1.0
Installing ffi 1.16.3 with native extensions
Installing addressable 2.8.5
Fetching i18n 1.14.1
Installing i18n 1.14.1
Using sassc 2.4.0
Using rb-inotify 0.10.1
Using jekyll-sass-converter 2.2.0
Fetching listen 3.8.0
Installing listen 3.8.0
Using jekyll-watch 2.2.1
Using jekyll 4.2.2
Using jekyll-seo-tag 2.8.0
Using jekyll-feed 0.17.0
Using minima 2.5.1
```

With that the site should be created and working as expected. Just need
to run the site to make sure. This can be done by running the following
command.

```sh
podman run -ti --net host -v .:/srv/jekyll -e JEKYLL_ROOTLESS=1 docker.io/jekyll/jekyll jekyll serve
```

What will happen is the gems from the lockfile will install the gems in
the lockfile and start the server. I will only include the server being
started. I'm sure everyone has seen enough of gems being installed.

```sh
ruby 3.1.1p18 (2022-02-18 revision 53f5fc4236) [x86_64-linux-musl]
Configuration file: /srv/jekyll/_config.yml
            Source: /srv/jekyll
       Destination: /srv/jekyll/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
       Jekyll Feed: Generating feed for posts
                    done in 0.208 seconds.
 Auto-regeneration: enabled for '/srv/jekyll'
    Server address: http://0.0.0.0:4000/
  Server running... press ctrl-c to stop.
```

Going to the following link should show you the new Jekyll site.

- http://localhost:4000

## References

- [Jekyll Docker - README](https://github.com/envygeeks/jekyll-docker/blob/master/README.md)
- [Jekyll Docker](https://github.com/envygeeks/jekyll-docker) 
