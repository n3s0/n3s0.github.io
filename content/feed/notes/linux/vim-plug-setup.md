---
title: "How I Setup vim-plug"
date: 2021-07-25T00:51:33-05:00
lastmod: 2025-10-08
description: "Notes for setting up vim-plug developed by junegunn. Notes on configuration."
tags: ["linux", "vim"]
draft: false
---

## Overview

Here I will be discussing my favorite Vim pluggin manager, vim-plug. 
I've been using it for years and I forget how to install it every time. 
So, I'm going to document how I set it up. Only distro that I install 
Vim on is Linux/BSD. I don't really use it on Windows. So, that isn't 
going to be included. The author of the Vim plugin will provide a method 
for it though. I will only do so if I decide to use it in Windows some day.

I would also like to note that this can be used with neovim as well. Though, 
that is out of scope for this article, some content will reference it. This 
is because it's pasted directly from the author's README.

Plug (vim-plug) is a Vim plugin manager developed and maintained by Junegunn 
Choi (junegunn); I'll provide their Github profile as I provide more information 
for it. It's easy to setup, fast, and you can even rollback plugins should updates 
not work as expected. One of the main things I enjoy about Plug is how minimalist 
it is.

I will be installing and setting up vim-plug in this post. Should the process change 
in the future, I will provide updates to the post so it's current.

If you would like to review Junegunn's work, you can find their Github below.

- [https://github.com/junegunn](https://github.com/junegunn)

Below is the Github repository for vim-plug.

- [https://github.com/junegunn/vim-plug](https://github.com/junegunn/vim-plug)

Now that introductions are out of the way, it's time to start the process 
for installing the Vim plugin. As always, if there are errors or issues, 
please let me know and I will be happy to help.

## Installing Plug (vim-plug)

Down to business. In this section I'm installing Plug for vim. To do this 
I'll need curl to download the packages. I'll need to run the following 
command. The command will download Plug and put the file in the ```~/.vim/autoload/``` 
directory after creating it; should need be.

```sh
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

After downloading the package and putting it into the path 
```~/.vim/autoload/plugin.vim``` plug should be working as expected. It 
is a script after all.

## Configuring Plug (vim-plug)

This section is for configuring Plug in my ```.vimrc``` file and installing 
some vim plugins. I will update the list of my vim plugins that are installed 
with plug shoudl I need to review them in the future.

Below is my Plug configuration in my ```.vimrc``` file at the moment. I will 
probably go into how I configure these plugins in other posts. Should anyone 
not want to use my config, just substitue the lugins you need with mine.

```vim
call plug#begin('~/.vim/plugged')
    Plug 'tomasr/molokai'
    Plug 'jwalton512/vim-blade'
call plug#end()
```

I figured it would be worth while to provide some of the configuration options 
for vim plugins in Plug. This has been pulled from the README file found in the 
Plug repository. It explains what it does pretty well. I will most likely only 
use the simple methods. But, it's good to have the information on hand.

```vim
" Specify a directory for plugins
" - For Neovim: stdpath('data') . '/plugged'
" - Avoid using standard Vim directory names like 'plugin'
call plug#begin('~/.vim/plugged')

" Make sure you use single quotes

" Shorthand notation; fetches https://github.com/junegunn/vim-easy-align
Plug 'junegunn/vim-easy-align'

" Any valid git URL is allowed
Plug 'https://github.com/junegunn/vim-github-dashboard.git'

" Multiple Plug commands can be written in a single line using | separators
Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

" On-demand loading
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
Plug 'tpope/vim-fireplace', { 'for': 'clojure' }

" Using a non-default branch
Plug 'rdnetto/YCM-Generator', { 'branch': 'stable' }

" Using a tagged release; wildcard allowed (requires git 1.9.2 or above)
Plug 'fatih/vim-go', { 'tag': '*' }

" Plugin options
Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim' }

" Plugin outside ~/.vim/plugged with post-update hook
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }

" Unmanaged plugin (manually installed and updated)
Plug '~/my-prototype-plugin'

" Initialize plugin system
call plug#end()
```

Once that has been added to my vimrc file I run the following commands 
in vim to install what vim plugins I have.

Should there be a requirement to be specific, adding the name of the plugin 
at the end should be what is needed to achieve that.

```vim
:PlugInstall
```

Updating Vim plugins is simple also. Below is the command used to update those. 

Again, be specific if it's required.

```vim
:PlugUpdate
```

This will install all of the files in my Plug configuration. What it will 
do is clone/fetch the plugins from their respective Github repositories. 
To run both commands unconditionally, use a exclamation point (```!```) 
at the end of the command.

The following command can be used to upgrade Plug.

```vim
:PlugUpgrade
```

## Conclusion

With that complete, Plug should be installed and ready for use. Like I said, 
I will be updating this article with any updates I have for my Plug config. 
I also plan on keeping this in a dotfiles repository for all of this. I will 
link to that when I get everything put together.

