---
title: "Jekyll Requires Webrick Gem on Ruby 3.0"
date: "2022-03-10T14:32:30-05:00"
lastmod: 2025-10-09
author: "Timothy Loftus (n3s0)"
description: "Notes on troubleshooting an issue where Jekyll wont start post-installation."
tags: [ "jekyll", "troubleshoot" ]
draft: false
---

## Overview

Jekyll on Ruby 3.0 requires the webrick gem to be added to the ```Gemfile```.
If the site doesn't, Jekyll will fail to generate and serve the site. 
Below is the error that I'm discussing.

```sh
bundle exec jekyll serve
Configuration file: /home/example/testing/myblog/_config.yml
            Source: /home/example/testing/myblog
       Destination: /home/example/testing/myblog/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts
                    done in 0.844 seconds.
  Please add the following to your Gemfile to avoid polling for changes:
    require 'rbconfig'
    if RbConfig::CONFIG['target_os'] =~ /(?i-mx:bsd|dragonfly)/
      gem 'rb-kqueue', '>= 0.2'
    end
 Auto-regeneration: enabled for '/home/example/testing/myblog'
                    ------------------------------------------------
      Jekyll 4.2.1   Please append `--trace` to the `serve` command
                     for any additional information or backtrace.
                    ------------------------------------------------
/home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/jekyll-4.2.1/lib/jekyll/commands/serve/servlet.rb:3:in `require': cannot load such file -- webrick (LoadError)
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/jekyll-4.2.1/lib/jekyll/commands/serve/servlet.rb:3:in `<top (required)>'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/jekyll-4.2.1/lib/jekyll/commands/serve.rb:179:in `require_relative'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/jekyll-4.2.1/lib/jekyll/commands/serve.rb:179:in `setup'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/jekyll-4.2.1/lib/jekyll/commands/serve.rb:100:in `process'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/jekyll-4.2.1/lib/jekyll/command.rb:91:in `block in process_with_graceful_fail'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/jekyll-4.2.1/lib/jekyll/command.rb:91:in `each'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/jekyll-4.2.1/lib/jekyll/command.rb:91:in `process_with_graceful_fail'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/jekyll-4.2.1/lib/jekyll/commands/serve.rb:86:in `block (2 levels) in init_with_program'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/mercenary-0.4.0/lib/mercenary/command.rb:221:in `block in execute'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/mercenary-0.4.0/lib/mercenary/command.rb:221:in `each'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/mercenary-0.4.0/lib/mercenary/command.rb:221:in `execute'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/mercenary-0.4.0/lib/mercenary/program.rb:44:in `go'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/mercenary-0.4.0/lib/mercenary.rb:21:in `program'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/gems/jekyll-4.2.1/exe/jekyll:15:in `<top (required)>'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/bin/jekyll:25:in `load'
        from /home/example/.gems/ruby/3.0/gems/ruby/3.0/bin/jekyll:25:in `<main>'
```

## Solution

To fix this the webrick gem needs to be installed. This can be done by 
entering the following command.

```sh
bundle add webrick
```

Below is the output from the command.

```sh
Fetching gem metadata from https://rubygems.org/.........
Resolving dependencies...
Fetching gem metadata from https://rubygems.org/.........
Resolving dependencies...
Using public_suffix 4.0.6
Using bundler 2.2.33
Using concurrent-ruby 1.1.9
Using http_parser.rb 0.8.0
Using eventmachine 1.2.7
Using ffi 1.15.4
Using rexml 3.2.5
Using liquid 4.0.3
Using colorator 1.1.0
Using mercenary 0.4.0
Using rouge 3.27.0
Using safe_yaml 1.0.5
Using forwardable-extended 2.6.0
Using unicode-display_width 1.8.0
Using em-websocket 0.5.3
Using addressable 2.8.0
Using sassc 2.4.0
Using rb-inotify 0.10.1
Using rb-fsevent 0.11.0
Using i18n 1.8.11
Using webrick 1.7.0
Using pathutil 0.16.2
Using kramdown 2.3.1
Using terminal-table 2.0.0
Using jekyll-sass-converter 2.1.0
Using listen 3.7.0
Using kramdown-parser-gfm 1.1.0
Using jekyll-watch 2.2.1
Using jekyll 4.2.1
Using jekyll-feed 0.15.1
Using jekyll-seo-tag 2.7.1
Using minima 2.5.1

```

Once you start the site, it will have the output below. If ther aren't 
any errors, it's working as expected.

```sh
Configuration file: /home/example/testing/myblog/_config.yml
            Source: /home/example/testing/myblog
       Destination: /home/example/testing/myblog/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts
                    done in 2.179 seconds.
  Please add the following to your Gemfile to avoid polling for changes:
    require 'rbconfig'
    if RbConfig::CONFIG['target_os'] =~ /(?i-mx:bsd|dragonfly)/
      gem 'rb-kqueue', '>= 0.2'
    end
 Auto-regeneration: enabled for '/home/example/testing/myblog'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```
