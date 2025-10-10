---
title: "Installing Request Tracker (RT) on Ubuntu Server 22.04 LTS"
author: "Timothy Loftus (n3s0)"
date: 2022-11-14T21:09:04-06:00
lastmod: 2025-10-10
description: "Notes for installing Best Practicals Request Tracker (RT) on Ubuntu Server 22.04 LTS."
draft: false
tags: [ "Linux", "Request Tracker" ]
---

## Summary

Note that these are notes from walking through a basic deployment. There
will be quite a bit of jumping around and troubleshooting. Along with
troubleshooting with no discussion. No worries. I'll update it.

These are my notes for installing Request Tracker (RT). An
enterprise-grade issue tracking system developed by Best Practical.

Below is the Best Practical website for RT. They provide a demo if
anyone wants to test it out.

- [Best Practical](https://bestpractical.com/)

This is the GitHub repository for RT.

- [bestpractical/rt](https://github.com/bestpractical/rt)

Note that this isn't installed for production use. This is merely for
experimentation within a lab environment. 

A scenario will be created later to simulate it's need within a
production environment. Where I will deploy it in a manner that suites
the needs of an entity that needs it.

## Request Tracker Dependencies

Request Tracker has the following dependencies.

- Perl 5.10.1 or later
- Supported SQL Database
  - MySQL 5.7 with InnoDB support
  - MariaDB 10.2 or later with InnoDB support
  - Postgres 9.5 or later
  - Oracle 12c or later
  - SQLite 3.0 or later (For testing only)
- Apache version 2.x with mod_fcid or mod_perl
- Nginx
- Various and sundry Perl modules.

## Lab Deployment Software & Specs

In this deployment. I'll be deploying RT with the following
software and server specifications.

Server Specs:

- Server Type: Virtual Machine
- Processors: 1
- Memory: 2 GB (2048 MB)
- Storage: 15 GB
- OS: Ubuntu Server 22.04 LTS

Software:

- MariaDB
- Nginx
- Perl

## Installing Request Tracker

First need to install the dependencies for the software.

```sh
apt install -y perl nginx mariadb-server mariadb-client make wget
```

Downloaded the RT 

```sh
wget https://github.com/bestpractical/rt/releases/download/rt-5.0.3/rt-5.0.3.tar.gz
```

Extract the tarball and change directories into the rt-5.0.3 directory.

```sh
tar xzvf rt-5.0.3.tar.gz
```

Going to install RT with the defaults. To see how well it does when it
assumes what configuration I'm using.

By default, RT will install itself into the /opt/rt5 with MySQL as its
database.

Based on what I'm reading in the installation documentation. RT stores
configuration arguments given to ./configure at the top of the
etc/RT_Config.pm file. So if you needed to use the previous use of
configure. You can just run ./configure again and the configuration will
do the needful.

```sh
./configure
```

```sh
checking for a BSD-compatible install... /usr/bin/install -c
checking for perl... /usr/bin/perl
checking checking version of find... find (GNU findutils) 4.8.0
License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>.
configuring for GNU find
checking for chosen layout... relative
checking if user www exists... not found
checking if user www-data exists... found
checking if group www exists... not found
checking if group www-data exists... found
checking if group rt exists... not found
checking if group www-data exists... found
checking if database name is set... yes
checking for dot... no
checking for gdlib-config... no
checking for gpg... yes
checking for openssl... yes
configure: creating ./config.status
config.status: creating etc/upgrade/3.8-ical-extension
config.status: creating etc/upgrade/4.0-customfield-checkbox-extension
config.status: creating etc/upgrade/generate-rtaddressregexp
config.status: creating etc/upgrade/reset-sequences
config.status: creating etc/upgrade/sanity-check-stylesheets
config.status: creating etc/upgrade/shrink-cgm-table
config.status: creating etc/upgrade/shrink-transactions-table
config.status: creating etc/upgrade/switch-templates-to
config.status: creating etc/upgrade/time-worked-history
config.status: creating etc/upgrade/upgrade-articles
config.status: creating etc/upgrade/upgrade-assets
config.status: creating etc/upgrade/upgrade-authtokens
config.status: creating etc/upgrade/upgrade-configurations
config.status: creating etc/upgrade/vulnerable-passwords
config.status: creating etc/upgrade/upgrade-sla
config.status: creating sbin/rt-ldapimport
config.status: creating sbin/rt-attributes-viewer
config.status: creating sbin/rt-preferences-viewer
config.status: creating sbin/rt-session-viewer
config.status: creating sbin/rt-dump-initialdata
config.status: creating sbin/rt-dump-metadata
config.status: creating sbin/rt-setup-database
config.status: creating sbin/rt-test-dependencies
config.status: creating sbin/rt-email-digest
config.status: creating sbin/rt-email-dashboards
config.status: creating sbin/rt-externalize-attachments
config.status: creating sbin/rt-clean-sessions
config.status: creating sbin/rt-shredder
config.status: creating sbin/rt-validator
config.status: creating sbin/rt-validate-aliases
config.status: creating sbin/rt-email-group-admin
config.status: creating sbin/rt-search-attributes
config.status: creating sbin/rt-server
config.status: creating sbin/rt-server.fcgi
config.status: creating sbin/standalone_httpd
config.status: creating sbin/rt-setup-fulltext-index
config.status: creating sbin/rt-fulltext-indexer
config.status: creating sbin/rt-serializer
config.status: creating sbin/rt-importer
config.status: creating sbin/rt-passwd
config.status: creating sbin/rt-munge-attachments
config.status: creating bin/rt-crontool
config.status: creating bin/rt-mailgate
config.status: creating bin/rt
config.status: creating Makefile
config.status: creating etc/RT_Config.pm
config.status: creating lib/RT/Generated.pm
config.status: creating t/data/configs/apache2.2+mod_perl.conf
config.status: creating t/data/configs/apache2.2+fastcgi.conf
config.status: creating t/data/configs/apache2.4+mod_perl.conf
config.status: creating t/data/configs/apache2.4+fastcgi.conf
config.status: creating t/data/configs/apache2.4+fcgid.conf
```

CPAN shell needs to be configured before checking or fixing missing
dependencies for the application.

```sh
/usr/bin/perl -MCPAN -e shell
```

```sh
CPAN.pm requires configuration, but most of it can be done automatically.
If you answer 'no' below, you will enter an interactive dialog for each
configuration option instead.

Would you like to configure as much as possible automatically? [yes] 

 <install_help>

Warning: You do not have write permission for Perl library directories.

To install modules, you need to configure a local Perl library directory or
escalate your privileges.  CPAN can help you by bootstrapping the local::lib
module or by configuring itself to use 'sudo' (if available).  You may also
resolve this problem manually if you need to customize your setup.

What approach do you want?  (Choose 'local::lib', 'sudo' or 'manual')
 [local::lib] sudo 


Autoconfiguration complete.

commit: wrote '/home/lab-admin/.cpan/CPAN/MyConfig.pm'

You can re-run configuration any time with 'o conf init' in the CPAN shell
Terminal does not support AddHistory.

To fix that, maybe try>  install Term::ReadLine::Perl


cpan shell -- CPAN exploration and modules installation (v2.28)
Enter 'h' for help.
```

Following command will check for dependencies that aren't met.

```sh
make testdeps
```

```sh
/usr/bin/perl ./sbin/rt-test-dependencies
perl:
    5.10.1 ................................................. ok (5.34.0)

users / groups:
    rt group (www-data) .................................... ok (gid 33)
    bin user (root) ........................................ ok (uid 0)
    libs user (root) ....................................... ok (uid 0)
    libs group (root) ...................................... ok (gid 0)
    web user (www-data) .................................... ok (uid 33)
    web group (www-data) ................................... ok (gid 33)

CORE dependencies:
    Apache::Session >= 1.53 ................................ MISSING
    Business::Hours ........................................ MISSING
    CGI >= 4.00 ............................................ ok (4.54)
    CGI::Cookie >= 1.20 .................................... ok (4.54)
    CGI::Emulate::PSGI ..................................... MISSING
    CGI::PSGI >= 0.12 ...................................... MISSING
    CSS::Minifier::XS ...................................... MISSING
    CSS::Squish >= 0.06 .................................... MISSING
    Class::Accessor::Fast .................................. MISSING
    Clone .................................................. ok
    Convert::Color ......................................... MISSING
    Crypt::Eksblowfish ..................................... MISSING
    DBI >= 1.37 ............................................ ok (1.643)
    DBIx::SearchBuilder >= 1.71 ............................ MISSING
    Data::GUID ............................................. MISSING
    Data::ICal ............................................. MISSING
    Data::Page::Pageset .................................... MISSING
    Date::Extract >= 0.02 .................................. MISSING
    Date::Manip ............................................ MISSING
    DateTime >= 0.44 ....................................... MISSING
    DateTime::Format::Natural >= 0.67 ...................... MISSING
    DateTime::Locale >= 0.40, != 1.00, != 1.01 ............. MISSING
    Devel::GlobalDestruction ............................... MISSING
    Devel::StackTrace >= 1.19, != 1.28, != 1.29 ............ MISSING
    Digest::MD5 >= 2.27 .................................... ok (2.58)
    Digest::SHA ............................................ ok
    Digest::base ........................................... ok
    Email::Address >= 1.912 ................................ MISSING
    Email::Address::List >= 0.06 ........................... MISSING
    Encode >= 2.64 ......................................... ok (3.08)
    Encode::Detect::Detector ............................... MISSING
    Encode::HanExtra ....................................... MISSING
    Errno .................................................. ok
    File::Glob ............................................. ok
    File::ShareDir ......................................... MISSING
    File::Spec >= 0.8 ...................................... ok (3.80)
    File::Temp >= 0.19 ..................................... ok (0.2311)
    Getopt::Long >= 2.24 ................................... ok (2.52)
    HTML::Entities ......................................... ok
    HTML::FormatExternal ................................... MISSING
    HTML::FormatText::WithLinks >= 0.14 .................... MISSING
    HTML::FormatText::WithLinks::AndTables >= 0.06 ......... MISSING
    HTML::Gumbo ............................................ MISSING
    HTML::Mason >= 1.43 .................................... MISSING
    HTML::Mason::PSGIHandler >= 0.52 ....................... MISSING
    HTML::Quoted ........................................... MISSING
    HTML::RewriteAttributes >= 0.05 ........................ MISSING
    HTML::Scrubber >= 0.08 ................................. MISSING
    HTTP::Message >= 6.07 .................................. ok (6.36)
    HTTP::Request::Common .................................. ok
    IPC::Run3 .............................................. MISSING
    JSON ................................................... MISSING
    JavaScript::Minifier::XS ............................... MISSING
    LWP >= 6.02 ............................................ MISSING
    LWP::Protocol::https ................................... MISSING
    LWP::Simple ............................................ MISSING
    LWP::UserAgent >= 6.02 ................................. MISSING
    List::MoreUtils ........................................ MISSING
    Locale::Maketext >= 1.06 ............................... ok (1.29)
    Locale::Maketext::Fuzzy >= 0.11 ........................ MISSING
    Locale::Maketext::Lexicon >= 0.32 ...................... MISSING
    Log::Dispatch >= 2.30 .................................. MISSING
    MIME::Entity >= 5.504 .................................. MISSING
    MIME::Types ............................................ MISSING
    Mail::Header >= 2.12 ................................... MISSING
    Mail::Mailer >= 1.57 ................................... MISSING
    Module::Path ........................................... MISSING
    Module::Refresh >= 0.03 ................................ MISSING
    Module::Runtime ........................................ MISSING
    Module::Versions::Report >= 1.05 ....................... MISSING
    Moose .................................................. MISSING
    MooseX::NonMoose ....................................... MISSING
    MooseX::Role::Parameterized ............................ MISSING
    Mozilla::CA ............................................ MISSING
    Net::CIDR .............................................. MISSING
    Net::IP ................................................ MISSING
...
```

That's a lot of missing dependencies. To fix those. Need to run the
following command. This will install all of the missing dependencies for
the application. This command will need to be run as a user who has
permissions.

There is a lot of output for it. But, I will provide some. Note that
fixing dependencies could take more than ten minutes to run.

```sh
make fixdeps
```

```sh
Install module Apache::Session
Fetching with HTTP::Tiny:
http://www.cpan.org/authors/01mailrc.txt.gz
Reading '/root/.cpan/sources/authors/01mailrc.txt.gz'
............................................................................DONE
Fetching with HTTP::Tiny:
http://www.cpan.org/modules/02packages.details.txt.gz
Reading '/root/.cpan/sources/modules/02packages.details.txt.gz'
  Database was generated on Sat, 19 Nov 2022 07:05:56 GMT
..............
  New CPAN.pm version (v2.34) available.
  [Currently running version is v2.28]
  You might want to try
    install CPAN
    reload cpan
  to both upgrade CPAN.pm and run the new version without leaving
  the current session.


..............................................................DONE
Fetching with HTTP::Tiny:
http://www.cpan.org/modules/03modlist.data.gz
Reading '/root/.cpan/sources/modules/03modlist.data.gz'
DONE
Writing /root/.cpan/Metadata
Running install for module 'Apache::Session'
Fetching with HTTP::Tiny:
http://www.cpan.org/authors/id/C/CH/CHORNY/Apache-Session-1.94.tar.gz
Fetching with HTTP::Tiny:
http://www.cpan.org/authors/id/C/CH/CHORNY/CHECKSUMS
Checksum for /root/.cpan/sources/authors/id/C/CH/CHORNY/Apache-Session-1.94.tar.gz ok
'YAML' not installed, will not store persistent state
Configuring C/CH/CHORNY/Apache-Session-1.94.tar.gz with Makefile.PL
Checking if your kit is complete...
Looks good
Warning: prerequisite Test::Deep 0.082 not found.
Warning: prerequisite Test::Exception 0.15 not found.
Generating a Unix-style Makefile
Writing Makefile for Apache::Session
Writing MYMETA.yml and MYMETA.json
  CHORNY/Apache-Session-1.94.tar.gz
  /usr/bin/perl Makefile.PL INSTALLDIRS=site -- OK
Running make for C/CH/CHORNY/Apache-Session-1.94.tar.gz
---- Unsatisfied dependencies detected during ----
----     CHORNY/Apache-Session-1.94.tar.gz    ----
    Test::Deep [build_requires]
    Test::Exception [build_requires]
Running install for module 'Test::Deep'
Fetching with HTTP::Tiny:
http://www.cpan.org/authors/id/R/RJ/RJBS/Test-Deep-1.130.tar.gz
Fetching with HTTP::Tiny:
http://www.cpan.org/authors/id/R/RJ/RJBS/CHECKSUMS
Checksum for /root/.cpan/sources/authors/id/R/RJ/RJBS/Test-Deep-1.130.tar.gz ok
Configuring R/RJ/RJBS/Test-Deep-1.130.tar.gz with Makefile.PL
Checking if your kit is complete...
Looks good
Generating a Unix-style Makefile
Writing Makefile for Test::Deep
Writing MYMETA.yml and MYMETA.json
  RJBS/Test-Deep-1.130.tar.gz
  /usr/bin/perl Makefile.PL INSTALLDIRS=site -- OK
```

It's still going. But, 

```sh
Fetching with LWP:
http://www.cpan.org/authors/id/C/CH/CHRISN/CHECKSUMS
Checksum for /root/.cpan/sources/authors/id/C/CH/CHRISN/Net-SSLeay-1.92.tar.gz ok
Configuring C/CH/CHRISN/Net-SSLeay-1.92.tar.gz with Makefile.PL
Do you want to run external tests?
These tests *will* *fail* if you do not have network connectivity. [n] y
*** Be sure to use the same compiler and options to compile your OpenSSL, perl,
    and Net::SSLeay. Mixing and matching compilers is not supported.

******************************************************************************
* COULD NOT FIND LIBSSL HEADERS                                              *
*                                                                            *
* The libssl header files are required to build Net-SSLeay, but they are     *
* missing from /usr. They would typically reside in /usr/include/openssl.    *
*                                                                            *
* If you are using the version of OpenSSL/LibreSSL packaged by your Linux    *
* distribution, you may need to install the corresponding "development"      *
* package via your package manager (e.g. libssl-dev for OpenSSL on Debian    *
* and Ubuntu, or openssl-devel for OpenSSL on Red Hat Enterprise Linux and   *
* Fedora).                                                                   *
******************************************************************************
Warning: No success on command[/usr/bin/perl Makefile.PL INSTALLDIRS=site]
  CHRISN/Net-SSLeay-1.92.tar.gz
  /usr/bin/perl Makefile.PL INSTALLDIRS=site -- NOT OK
  SULLR/IO-Socket-SSL-2.076.tar.gz
  Has already been unwrapped into directory /root/.cpan/build/IO-Socket-SSL-2.076-0
Warning: Prerequisite 'Net::SSLeay => 1.46' for 'SULLR/IO-Socket-SSL-2.076.tar.gz' failed when processing 'CHRISN/Net-SSLeay-1.92.tar.gz' with 'writemakefile => NO '/usr/bin/perl Makefile.PL INSTALLDIRS=site' returned status 256'. Continuing, but chances to succeed are limited.
Configuring S/SU/SULLR/IO-Socket-SSL-2.076.tar.gz with Makefile.PL
Should I do external tests?
These test will detect if there are network problems and fail soft,
so please disable them only if you definitely don't want to have any
network traffic to external sites.  [Y/n] 
Checking if your kit is complete...
Looks good
Warning: prerequisite Mozilla::CA 0 not found.
```

There were two other inputs required. But, they got lost in all of the
console logs. I will run this again and check once it's done.

Needed to install the following Perl libraries to resolve some
dependency issues. CPAN couldn't find them. When that happens, the
documentation recommends it may work better if they're installed through
the package manager for the OS. Especially if it's run multiple times
and there isn't a change.

On Ubuntu I needed to install the following modules because they
couldn't be found while I was using fixdeps to install the modules.

```sh
apt install libparallel-prefork-perl libperlio-eol-perl libnamespace-autoclean-perl libmoose-perl libmoosex-nonmoose-perl libmoosex-role-parameterized-perl libcss-minifier-xs-perl libxml-rss-feed-perl ibhtml-mason-perl libhtml-gumbo-perl libhtml-mason-psgihandler-perl libhtml-scrubber-perl libdbix-searchbuilder-perl libcrypt-eksblowfish-perl libdata-guid-perl libdate-extract-perl libtemplate-plugin-datetime-format-perl libencode-detect-perl libencode-hanextra-perl libjavascript-minifier-xs-perl libtest-log-dispatch-perl libscope-upper-perl libweb-machine-perl
```

The testdeps command should output this when all dependencies are
satisfied.

```sh
/usr/bin/perl ./sbin/rt-test-dependencies
perl:
    5.10.1 ................................................. ok (5.34.0)

users / groups:
    rt group (www-data) .................................... ok (gid 33)
    bin user (root) ........................................ ok (uid 0)
    libs user (root) ....................................... ok (uid 0)
    libs group (root) ...................................... ok (gid 0)
    web user (www-data) .................................... ok (uid 33)
    web group (www-data) ................................... ok (gid 33)

CORE dependencies:
    Apache::Session >= 1.53 ................................ ok (1.94)
    Business::Hours ........................................ ok
    CGI >= 4.00 ............................................ ok (4.54)
    CGI::Cookie >= 1.20 .................................... ok (4.54)
    CGI::Emulate::PSGI ..................................... ok
    CGI::PSGI >= 0.12 ...................................... ok (0.15)
    CSS::Minifier::XS ...................................... ok
    CSS::Squish >= 0.06 .................................... ok (0.10)
    Class::Accessor::Fast .................................. ok
    Clone .................................................. ok
    Convert::Color ......................................... ok
    Crypt::Eksblowfish ..................................... ok
    DBI >= 1.37 ............................................ ok (1.643)
    DBIx::SearchBuilder >= 1.71 ............................ ok (1.71)
    Data::GUID ............................................. ok
    Data::ICal ............................................. ok
    Data::Page::Pageset .................................... ok
    Date::Extract >= 0.02 .................................. ok (0.06)
    Date::Manip ............................................ ok
    DateTime >= 0.44 ....................................... ok (1.55)
    DateTime::Format::Natural >= 0.67 ...................... ok (1.13)
    DateTime::Locale >= 0.40, != 1.00, != 1.01 ............. ok (1.33)
    Devel::GlobalDestruction ............................... ok
    Devel::StackTrace >= 1.19, != 1.28, != 1.29 ............ ok (2.04)
    Digest::MD5 >= 2.27 .................................... ok (2.58)
    Digest::SHA ............................................ ok
    Digest::base ........................................... ok
    Email::Address >= 1.912 ................................ ok (1.912)
    Email::Address::List >= 0.06 ........................... ok (0.06)
    Encode >= 2.64 ......................................... ok (3.08)
    Encode::Detect::Detector ............................... ok
    Encode::HanExtra ....................................... ok
    Errno .................................................. ok
    File::Glob ............................................. ok
    File::ShareDir ......................................... ok
    File::Spec >= 0.8 ...................................... ok (3.80)
    File::Temp >= 0.19 ..................................... ok (0.2311)
    Getopt::Long >= 2.24 ................................... ok (2.52)
    HTML::Entities ......................................... ok
    HTML::FormatExternal ................................... ok
    HTML::FormatText::WithLinks >= 0.14 .................... ok (0.15)
    HTML::FormatText::WithLinks::AndTables >= 0.06 ......... ok (0.07)
    HTML::Gumbo ............................................ ok
    HTML::Mason >= 1.43 .................................... ok (1.59)
    HTML::Mason::PSGIHandler >= 0.52 ....................... ok (0.53)
    HTML::Quoted ........................................... ok
    HTML::RewriteAttributes >= 0.05 ........................ ok (0.05)
    HTML::Scrubber >= 0.08 ................................. ok (0.19)
    HTTP::Message >= 6.07 .................................. ok (6.36)
    HTTP::Request::Common .................................. ok
    IPC::Run3 .............................................. ok
    JSON ................................................... ok
    JavaScript::Minifier::XS ............................... ok
    LWP >= 6.02 ............................................ ok (6.67)
    LWP::Protocol::https ................................... ok
    LWP::Simple ............................................ ok
    LWP::UserAgent >= 6.02 ................................. ok (6.67)
    List::MoreUtils ........................................ ok
    Locale::Maketext >= 1.06 ............................... ok (1.29)
    Locale::Maketext::Fuzzy >= 0.11 ........................ ok (0.11)
    Locale::Maketext::Lexicon >= 0.32 ...................... ok (1.00)
    Log::Dispatch >= 2.30 .................................. ok (2.70)
    MIME::Entity >= 5.504 .................................. ok (5.510)
    MIME::Types ............................................ ok
    Mail::Header >= 2.12 ................................... ok (2.21)
    Mail::Mailer >= 1.57 ................................... ok (2.21)
    Module::Path ........................................... ok
    Module::Refresh >= 0.03 ................................ ok (0.18)
    Module::Runtime ........................................ ok
    Module::Versions::Report >= 1.05 ....................... ok (1.06)
    Moose .................................................. ok
    MooseX::NonMoose ....................................... ok
    MooseX::Role::Parameterized ............................ ok
    Mozilla::CA ............................................ ok
    Net::CIDR .............................................. ok
    Net::IP ................................................ ok
    Parallel::ForkManager .................................. ok
    Path::Dispatcher >= 1.07 ............................... ok (1.08)
    Plack >= 1.0002 ........................................ ok (1.0050)
    Plack::Handler::Starlet ................................ ok
    Pod::Select ............................................ ok
    Pod::Usage ............................................. ok
    Regexp::Common ......................................... ok
    Regexp::Common::net::CIDR .............................. ok
    Regexp::IPv6 ........................................... ok
    Role::Basic >= 0.12 .................................... ok (0.13)
    Scalar::Util ........................................... ok
    Scope::Upper ........................................... ok
    Storable >= 2.08 ....................................... ok (3.23)
    Sub::Exporter .......................................... ok
    Symbol::Global::Name >= 0.05 ........................... ok (0.05)
    Sys::Syslog >= 0.16 .................................... ok (0.36)
    Term::ReadKey .......................................... ok
    Term::ReadLine ......................................... ok
    Text::ParseWords ....................................... ok
    Text::Password::Pronounceable .......................... ok
    Text::Quoted >= 2.07 ................................... ok (2.10)
    Text::Template >= 1.44 ................................. ok (1.61)
    Text::WikiFormat >= 0.76 ............................... ok (0.81)
    Text::WordDiff ......................................... ok
    Text::Wrapper .......................................... ok
    Time::HiRes ............................................ ok
    Time::ParseDate ........................................ ok
    Tree::Simple >= 1.04 ................................... ok (1.34)
    UNIVERSAL::require ..................................... ok
    URI >= 1.59 ............................................ ok (5.10)
    URI::QueryParam ........................................ ok
    Web::Machine >= 0.12 ................................... ok (0.17)
    XML::RSS >= 1.05 ....................................... ok (1.59)
    namespace::autoclean ................................... ok

FASTCGI dependencies:
    FCGI >= 0.74 ........................................... ok (0.82)

GPG dependencies:
    File::Which ............................................ ok
    GnuPG::Interface >= 1.02 ............................... ok (1.02)
    PerlIO::eol ............................................ ok

MYSQL dependencies:
    DBD::mysql >= 2.1018, != 4.042 ......................... ok (4.050)

SMIME dependencies:
    Crypt::X509 ............................................ ok
    File::Which ............................................ ok
    String::ShellQuote ..................................... ok


---------------------------------------------------------------------------

All dependencies found.
```

```sh
sudo make install
```

```sh
All dependencies found.

/usr/bin/install -c -m 0755 -o root -g www-data -d /opt/rt5/etc
/usr/bin/install -c -m 0440 -o root -g www-data  etc/RT_Config.pm /opt/rt5/etc/RT_Config.pm
[ -f /opt/rt5/etc/RT_SiteConfig.pm ] || /usr/bin/install -c -m 0640 -o root -g www-data etc/RT_SiteConfig.pm /opt/rt5/etc/RT_SiteConfig.pm 
Installed configuration. About to install RT in  /opt/rt5
/usr/bin/install -c -m 0755 -d /opt/rt5/var/log
/usr/bin/install -c -m 0755 -d /opt/rt5/share/fonts
/usr/bin/install -c -m 0755 -d /opt/rt5/share/po
/usr/bin/install -c -m 0755 -d /opt/rt5/share/static
/usr/bin/install -c -m 0770 -d /opt/rt5/var/mason_data
/usr/bin/install -c -m 0770 -d /opt/rt5/var/mason_data/cache
/usr/bin/install -c -m 0770 -d /opt/rt5/var/mason_data/etc
/usr/bin/install -c -m 0770 -d /opt/rt5/var/mason_data/obj
/usr/bin/install -c -m 0770 -d /opt/rt5/var/session_data
/usr/bin/install -c -m 0755 -d /opt/rt5/share/html
/usr/bin/install -c -m 0755 -d /opt/rt5/local/html
/usr/bin/install -c -m 0755 -d /opt/rt5/local/etc
/usr/bin/install -c -m 0755 -d /opt/rt5/local/lib
/usr/bin/install -c -m 0755 -d /opt/rt5/local/plugins
/usr/bin/install -c -m 0755 -d /opt/rt5/local/po
/usr/bin/install -c -m 0755 -d /opt/rt5/local/static
[ -d /opt/rt5/lib ] || /usr/bin/install -c -m 0755 -d /opt/rt5/lib
( cd lib && find . -type d -print ) | while read dir ; do \
    /usr/bin/install -c -m 0755 -d "/opt/rt5/lib/$dir" ; \
done
( cd lib && find . -type f -print ) | while read file ; do \
     /usr/bin/install -c -m 0644 "lib/$file" "/opt/rt5/lib/$file" ; \
done
[ -d /opt/rt5/etc ] || /usr/bin/install -c -m 0755 -d /opt/rt5/etc
[ -d "/opt/rt5/etc/RT_SiteConfig.d" ] || /usr/bin/install -c -m 0755 -d "/opt/rt5/etc/RT_SiteConfig.d"
for file in acl.Pg acl.Oracle acl.mysql schema.Pg schema.Oracle schema.mysql schema.SQLite cpanfile initialdata ; do \
    /usr/bin/install -c -m 0644 "etc/$file" "/opt/rt5/etc/" ; \
done
[ -d /opt/rt5/etc/upgrade ] || /usr/bin/install -c -m 0755 -d /opt/rt5/etc/upgrade
( cd etc/upgrade && find . -type d -print ) | while read dir ; do \
    /usr/bin/install -c -m 0755 -d "/opt/rt5/etc/upgrade/$dir" ; \
done
( cd etc/upgrade && find . -type f -not -name '*.in' -print ) | while read file ; do \
    /usr/bin/install -c -m 0644 "etc/upgrade/$file" "/opt/rt5/etc/upgrade/$file" ; \
done
/usr/bin/install -c -m 0755 -d /opt/rt5/bin
for file in rt-mailgate rt rt-crontool ; do \
    /usr/bin/install -c -o root -g www-data -m 0755 "bin/$file" "/opt/rt5/bin/" ; \
done
/usr/bin/install -c -m 0755 -d /opt/rt5/sbin
for file in rt-attributes-viewer rt-munge-attachments rt-clean-sessions rt-dump-initialdata rt-dump-metadata rt-email-dashboards rt-email-digest rt-email-group-admin rt-externalize-attachments rt-fulltext-indexer rt-importer rt-ldapimport rt-passwd rt-preferences-viewer rt-search-attributes rt-serializer rt-server rt-server.fcgi rt-session-viewer rt-setup-database rt-setup-fulltext-index rt-shredder rt-test-dependencies rt-validator rt-validate-aliases standalone_httpd ; do \
    /usr/bin/install -c -o root -g www-data -m 0755 "sbin/$file" "/opt/rt5/sbin/" ; \
done
[ -d /opt/rt5/share/html ] || /usr/bin/install -c -m 0755 -d /opt/rt5/share/html
( cd share/html && find . -type d -print ) | while read dir ; do \
    /usr/bin/install -c -m 0755 -d "/opt/rt5/share/html/$dir" ; \
done
( cd share/html && find . -type f -print ) | while read file ; do \
    /usr/bin/install -c -m 0644 "share/html/$file" "/opt/rt5/share/html/$file" ; \
done
make clean-mason-cache
make[1]: Entering directory '/home/lab-admin/rt-5.0.3'
rm -rf /opt/rt5/var/mason_data/cache/*
rm -rf /opt/rt5/var/mason_data/etc/*
rm -rf /opt/rt5/var/mason_data/obj/*
make[1]: Leaving directory '/home/lab-admin/rt-5.0.3'
# RT 3.0.0 - RT 3.0.2 would accidentally create a file instead of a dir
[ -f /opt/rt5/docs ] && rm /opt/rt5/docs 
make: [Makefile:448: doc-install] Error 1 (ignored)
[ -d /opt/rt5/docs ] || /usr/bin/install -c -m 0755 -d /opt/rt5/docs
( cd docs && find . -type d -print ) | while read dir ; do \
    /usr/bin/install -c -m 0755 -d "/opt/rt5/docs/$dir" ; \
done
( cd docs && find . -type f -print ) | while read file ; do \
    /usr/bin/install -c -m 0644 "docs/$file" "/opt/rt5/docs/$file" ; \
done
/usr/bin/install -c -m 0644 ./README /opt/rt5/docs/
[ -d /opt/rt5/share/fonts ] || /usr/bin/install -c -m 0755 -d /opt/rt5/share/fonts
( cd share/fonts && find . -type f -print ) | while read file ; do \
    /usr/bin/install -c -m 0644 "share/fonts/$file" "/opt/rt5/share/fonts/$file" ; \
done
[ -d /opt/rt5/share/po ] || /usr/bin/install -c -m 0755 -d /opt/rt5/share/po
( cd share/po && find . -type f -print ) | while read file ; do \
    /usr/bin/install -c -m 0644 "share/po/$file" "/opt/rt5/share/po/$file" ; \
done
[ -d /opt/rt5/share/static ] || /usr/bin/install -c -m 0755 -d /opt/rt5/share/static
( cd share/static && find . -type d -print ) | while read dir ; do \
    /usr/bin/install -c -m 0755 -d "/opt/rt5/share/static/$dir" ; \
done
( cd share/static && find . -type f -print ) | while read file ; do \
    /usr/bin/install -c -m 0644 "share/static/$file" "/opt/rt5/share/static/$file" ; \
done
# Make the libraries readable
chmod 0755 /opt/rt5
chown -R root /opt/rt5/lib
chgrp -R root /opt/rt5/lib
chmod -R  u+rwX,go-w,go+rX /opt/rt5/lib
chmod 0755 /opt/rt5/bin
chmod 0755 /opt/rt5/etc
cd /opt/rt5/etc && chmod 0400 acl.Pg acl.Oracle acl.mysql schema.Pg schema.Oracle schema.mysql schema.SQLite cpanfile initialdata
#TODO: the config file should probably be able to have its
# owner set separately from the binaries.
chown -R root /opt/rt5/etc
chgrp -R www-data /opt/rt5/etc
chmod 0440 /opt/rt5/etc/RT_Config.pm
chmod 0640 /opt/rt5/etc/RT_SiteConfig.pm
# Make the system binaries
cd /opt/rt5/bin && ( chmod 0755 rt-mailgate rt rt-crontool ; chown root rt-mailgate rt rt-crontool;  chgrp www-data rt-mailgate rt rt-crontool)
# Make the system binaries executable also
cd /opt/rt5/sbin && ( chmod 0755 rt-attributes-viewer rt-munge-attachments rt-clean-sessions rt-dump-initialdata rt-dump-metadata rt-email-dashboards rt-email-digest rt-email-group-admin rt-externalize-attachments rt-fulltext-indexer rt-importer rt-ldapimport rt-passwd rt-preferences-viewer rt-search-attributes rt-serializer rt-server rt-server.fcgi rt-session-viewer rt-setup-database rt-setup-fulltext-index rt-shredder rt-test-dependencies rt-validator rt-validate-aliases standalone_httpd ; chown root rt-attributes-viewer rt-munge-attachments rt-clean-sessions rt-dump-initialdata rt-dump-metadata rt-email-dashboards rt-email-digest rt-email-group-admin rt-externalize-attachments rt-fulltext-indexer rt-importer rt-ldapimport rt-passwd rt-preferences-viewer rt-search-attributes rt-serializer rt-server rt-server.fcgi rt-session-viewer rt-setup-database rt-setup-fulltext-index rt-shredder rt-test-dependencies rt-validator rt-validate-aliases standalone_httpd;  chgrp www-data rt-attributes-viewer rt-munge-attachments rt-clean-sessions rt-dump-initialdata rt-dump-metadata rt-email-dashboards rt-email-digest rt-email-group-admin rt-externalize-attachments rt-fulltext-indexer rt-importer rt-ldapimport rt-passwd rt-preferences-viewer rt-search-attributes rt-serializer rt-server rt-server.fcgi rt-session-viewer rt-setup-database rt-setup-fulltext-index rt-shredder rt-test-dependencies rt-validator rt-validate-aliases standalone_httpd)
# Make upgrade scripts executable if they are in the source.
#
( cd etc/upgrade && find . -type f -not -name '*.in' -perm /0111 -print ) | while read file ; do \
	chmod a+x "/opt/rt5/etc/upgrade/$file" ; \
done
# Make the web ui readable by all. 
chmod -R  u+rwX,go-w,go+rX 	/opt/rt5/share/html \
				/opt/rt5/local/html \
				/opt/rt5/share/po \
				/opt/rt5/local/po \
				/opt/rt5/share/static \
				/opt/rt5/local/static
chown -R root 	/opt/rt5/share/html \
			/opt/rt5/local/html \
			/opt/rt5/share/po \
			/opt/rt5/local/po \
			/opt/rt5/share/static \
			/opt/rt5/local/static
chgrp -R root 	/opt/rt5/share/html \
			/opt/rt5/local/html \
			/opt/rt5/share/po \
			/opt/rt5/local/po \
			/opt/rt5/share/static \
			/opt/rt5/local/static
# Make the web ui's data dir writable
chmod 0770  	/opt/rt5/var/mason_data \
		/opt/rt5/var/session_data
chown -R www-data 	/opt/rt5/var/mason_data \
			/opt/rt5/var/session_data
chgrp -R www-data 	/opt/rt5/var/mason_data \
			/opt/rt5/var/session_data
Congratulations. RT is now installed.


You must now configure RT by editing /opt/rt5/etc/RT_SiteConfig.pm.

(You will definitely need to set RT's database password in 
/opt/rt5/etc/RT_SiteConfig.pm before continuing. Not doing so could be 
very dangerous.  Note that you do not have to manually add a 
database user or set up a database for RT.  These actions will be 
taken care of in the next step.)

After that, you need to initialize RT's database by running
 'make initialize-database'
```

Need to setup the database from the looks of it. Going to go through
the mysql_secure_installation script to do this.

```sh
sudo mysql_secure_installation
```

Below is the output.

```sh
NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MariaDB to secure it, we'll need the current
password for the root user. If you've just installed MariaDB, and
haven't set the root password yet, you should just press enter here.

Enter current password for root (enter for none): 
OK, successfully used password, moving on...

Setting the root password or using the unix_socket ensures that nobody
can log into the MariaDB root user without the proper authorisation.

You already have your root account protected, so you can safely answer 'n'.

Switch to unix_socket authentication [Y/n] 
Enabled successfully!
Reloading privilege tables..
 ... Success!


You already have your root account protected, so you can safely answer 'n'.

Change the root password? [Y/n] 
New password: 
Re-enter new password: 
Password updated successfully!
Reloading privilege tables..
 ... Success!


By default, a MariaDB installation has an anonymous user, allowing anyone
to log into MariaDB without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] 
 ... Success!

Normally, root should only be allowed to connect from 'localhost'.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] 
 ... Success!

By default, MariaDB comes with a database named 'test' that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] 
 - Dropping test database...
 ... Success!
 - Removing privileges on test database...
 ... Success!

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] 
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```

I didn't put the user in the configuration file. So I'm going to have 
to reconfigure it quick.

```sh
/configure --with-db-database='rt' --with-db-rt-user='rt' --with-db-rt-pass='password'
checking for a BSD-compatible install... /usr/bin/install -c
checking for perl... /usr/bin/perl
checking checking version of find... find (GNU findutils) 4.8.0
License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>.
configuring for GNU find
checking for chosen layout... relative
checking if user www exists... not found
checking if user www-data exists... found
checking if group www exists... not found
checking if group www-data exists... found
checking if group rt exists... not found
checking if group www-data exists... found
checking if database name is set... yes
checking for dot... no
checking for gdlib-config... no
checking for gpg... yes
checking for openssl... yes
configure: creating ./config.status
config.status: creating etc/upgrade/3.8-ical-extension
config.status: creating etc/upgrade/4.0-customfield-checkbox-extension
config.status: creating etc/upgrade/generate-rtaddressregexp
config.status: creating etc/upgrade/reset-sequences
config.status: creating etc/upgrade/sanity-check-stylesheets
config.status: creating etc/upgrade/shrink-cgm-table
config.status: creating etc/upgrade/shrink-transactions-table
config.status: creating etc/upgrade/switch-templates-to
config.status: creating etc/upgrade/time-worked-history
config.status: creating etc/upgrade/upgrade-articles
config.status: creating etc/upgrade/upgrade-assets
config.status: creating etc/upgrade/upgrade-authtokens
config.status: creating etc/upgrade/upgrade-configurations
config.status: creating etc/upgrade/vulnerable-passwords
config.status: creating etc/upgrade/upgrade-sla
config.status: creating sbin/rt-ldapimport
config.status: creating sbin/rt-attributes-viewer
config.status: creating sbin/rt-preferences-viewer
config.status: creating sbin/rt-session-viewer
config.status: creating sbin/rt-dump-initialdata
config.status: creating sbin/rt-dump-metadata
config.status: creating sbin/rt-setup-database
config.status: creating sbin/rt-test-dependencies
config.status: creating sbin/rt-email-digest
config.status: creating sbin/rt-email-dashboards
config.status: creating sbin/rt-externalize-attachments
config.status: creating sbin/rt-clean-sessions
config.status: creating sbin/rt-shredder
config.status: creating sbin/rt-validator
config.status: creating sbin/rt-validate-aliases
config.status: creating sbin/rt-email-group-admin
config.status: creating sbin/rt-search-attributes
config.status: creating sbin/rt-server
config.status: creating sbin/rt-server.fcgi
config.status: creating sbin/standalone_httpd
config.status: creating sbin/rt-setup-fulltext-index
config.status: creating sbin/rt-fulltext-indexer
config.status: creating sbin/rt-serializer
config.status: creating sbin/rt-importer
config.status: creating sbin/rt-passwd
config.status: creating sbin/rt-munge-attachments
config.status: creating bin/rt-crontool
config.status: creating bin/rt-mailgate
config.status: creating bin/rt
config.status: creating Makefile
config.status: creating etc/RT_Config.pm
config.status: creating lib/RT/Generated.pm
config.status: creating t/data/configs/apache2.2+mod_perl.conf
config.status: creating t/data/configs/apache2.2+fastcgi.conf
config.status: creating t/data/configs/apache2.4+mod_perl.conf
config.status: creating t/data/configs/apache2.4+fastcgi.conf
config.status: creating t/data/configs/apache2.4+fcgid.conf
```

```sh
sudo make install
```

```sh
usr/bin/perl ./sbin/rt-test-dependencies
perl:
    5.10.1 ................................................. ok (5.34.0)

users / groups:
    rt group (www-data) .................................... ok (gid 33)
    bin user (root) ........................................ ok (uid 0)
    libs user (root) ....................................... ok (uid 0)
    libs group (root) ...................................... ok (gid 0)
    web user (www-data) .................................... ok (uid 33)
    web group (www-data) ................................... ok (gid 33)

CORE dependencies:
    Apache::Session >= 1.53 ................................ ok (1.94)
    Business::Hours ........................................ ok
    CGI >= 4.00 ............................................ ok (4.54)
    CGI::Cookie >= 1.20 .................................... ok (4.54)
    CGI::Emulate::PSGI ..................................... ok
    CGI::PSGI >= 0.12 ...................................... ok (0.15)
    CSS::Minifier::XS ...................................... ok
    CSS::Squish >= 0.06 .................................... ok (0.10)
    Class::Accessor::Fast .................................. ok
    Clone .................................................. ok
    Convert::Color ......................................... ok
    Crypt::Eksblowfish ..................................... ok
    DBI >= 1.37 ............................................ ok (1.643)
    DBIx::SearchBuilder >= 1.71 ............................ ok (1.71)
    Data::GUID ............................................. ok
    Data::ICal ............................................. ok
    Data::Page::Pageset .................................... ok
    Date::Extract >= 0.02 .................................. ok (0.06)
    Date::Manip ............................................ ok
    DateTime >= 0.44 ....................................... ok (1.55)
    DateTime::Format::Natural >= 0.67 ...................... ok (1.13)
    DateTime::Locale >= 0.40, != 1.00, != 1.01 ............. ok (1.33)
    Devel::GlobalDestruction ............................... ok
    Devel::StackTrace >= 1.19, != 1.28, != 1.29 ............ ok (2.04)
    Digest::MD5 >= 2.27 .................................... ok (2.58)
    Digest::SHA ............................................ ok
    Digest::base ........................................... ok
    Email::Address >= 1.912 ................................ ok (1.912)
    Email::Address::List >= 0.06 ........................... ok (0.06)
    Encode >= 2.64 ......................................... ok (3.08)
    Encode::Detect::Detector ............................... ok
    Encode::HanExtra ....................................... ok
    Errno .................................................. ok
    File::Glob ............................................. ok
    File::ShareDir ......................................... ok
    File::Spec >= 0.8 ...................................... ok (3.80)
    File::Temp >= 0.19 ..................................... ok (0.2311)
    Getopt::Long >= 2.24 ................................... ok (2.52)
    HTML::Entities ......................................... ok
    HTML::FormatExternal ................................... ok
    HTML::FormatText::WithLinks >= 0.14 .................... ok (0.15)
    HTML::FormatText::WithLinks::AndTables >= 0.06 ......... ok (0.07)
    HTML::Gumbo ............................................ ok
    HTML::Mason >= 1.43 .................................... ok (1.59)
    HTML::Mason::PSGIHandler >= 0.52 ....................... ok (0.53)
    HTML::Quoted ........................................... ok
    HTML::RewriteAttributes >= 0.05 ........................ ok (0.05)
    HTML::Scrubber >= 0.08 ................................. ok (0.19)
    HTTP::Message >= 6.07 .................................. ok (6.36)
    HTTP::Request::Common .................................. ok
    IPC::Run3 .............................................. ok
    JSON ................................................... ok
    JavaScript::Minifier::XS ............................... ok
    LWP >= 6.02 ............................................ ok (6.67)
    LWP::Protocol::https ................................... ok
    LWP::Simple ............................................ ok
    LWP::UserAgent >= 6.02 ................................. ok (6.67)
    List::MoreUtils ........................................ ok
    Locale::Maketext >= 1.06 ............................... ok (1.29)
    Locale::Maketext::Fuzzy >= 0.11 ........................ ok (0.11)
    Locale::Maketext::Lexicon >= 0.32 ...................... ok (1.00)
    Log::Dispatch >= 2.30 .................................. ok (2.70)
    MIME::Entity >= 5.504 .................................. ok (5.510)
    MIME::Types ............................................ ok
    Mail::Header >= 2.12 ................................... ok (2.21)
    Mail::Mailer >= 1.57 ................................... ok (2.21)
    Module::Path ........................................... ok
    Module::Refresh >= 0.03 ................................ ok (0.18)
    Module::Runtime ........................................ ok
    Module::Versions::Report >= 1.05 ....................... ok (1.06)
    Moose .................................................. ok
    MooseX::NonMoose ....................................... ok
    MooseX::Role::Parameterized ............................ ok
    Mozilla::CA ............................................ ok
    Net::CIDR .............................................. ok
    Net::IP ................................................ ok
    Parallel::ForkManager .................................. ok
    Path::Dispatcher >= 1.07 ............................... ok (1.08)
    Plack >= 1.0002 ........................................ ok (1.0050)
    Plack::Handler::Starlet ................................ ok
    Pod::Select ............................................ ok
    Pod::Usage ............................................. ok
    Regexp::Common ......................................... ok
    Regexp::Common::net::CIDR .............................. ok
    Regexp::IPv6 ........................................... ok
    Role::Basic >= 0.12 .................................... ok (0.13)
    Scalar::Util ........................................... ok
    Scope::Upper ........................................... ok
    Storable >= 2.08 ....................................... ok (3.23)
    Sub::Exporter .......................................... ok
    Symbol::Global::Name >= 0.05 ........................... ok (0.05)
    Sys::Syslog >= 0.16 .................................... ok (0.36)
    Term::ReadKey .......................................... ok
    Term::ReadLine ......................................... ok
    Text::ParseWords ....................................... ok
    Text::Password::Pronounceable .......................... ok
    Text::Quoted >= 2.07 ................................... ok (2.10)
    Text::Template >= 1.44 ................................. ok (1.61)
    Text::WikiFormat >= 0.76 ............................... ok (0.81)
    Text::WordDiff ......................................... ok
    Text::Wrapper .......................................... ok
    Time::HiRes ............................................ ok
    Time::ParseDate ........................................ ok
    Tree::Simple >= 1.04 ................................... ok (1.34)
    UNIVERSAL::require ..................................... ok
    URI >= 1.59 ............................................ ok (5.10)
    URI::QueryParam ........................................ ok
    Web::Machine >= 0.12 ................................... ok (0.17)
    XML::RSS >= 1.05 ....................................... ok (1.59)
    namespace::autoclean ................................... ok

FASTCGI dependencies:
    FCGI >= 0.74 ........................................... ok (0.82)

GPG dependencies:
    File::Which ............................................ ok
    GnuPG::Interface >= 1.02 ............................... ok (1.02)
    PerlIO::eol ............................................ ok

MYSQL dependencies:
    DBD::mysql >= 2.1018, != 4.042 ......................... ok (4.050)

SMIME dependencies:
    Crypt::X509 ............................................ ok
    File::Which ............................................ ok
    String::ShellQuote ..................................... ok


---------------------------------------------------------------------------

All dependencies found.

/usr/bin/install -c -m 0755 -o root -g www-data -d /opt/rt5/etc
/usr/bin/install -c -m 0440 -o root -g www-data  etc/RT_Config.pm /opt/rt5/etc/RT_Config.pm
[ -f /opt/rt5/etc/RT_SiteConfig.pm ] || /usr/bin/install -c -m 0640 -o root -g www-data etc/RT_SiteConfig.pm /opt/rt5/etc/RT_SiteConfig.pm 
Installed configuration. About to install RT in  /opt/rt5
/usr/bin/install -c -m 0755 -d /opt/rt5/var/log
/usr/bin/install -c -m 0755 -d /opt/rt5/share/fonts
/usr/bin/install -c -m 0755 -d /opt/rt5/share/po
/usr/bin/install -c -m 0755 -d /opt/rt5/share/static
/usr/bin/install -c -m 0770 -d /opt/rt5/var/mason_data
/usr/bin/install -c -m 0770 -d /opt/rt5/var/mason_data/cache
/usr/bin/install -c -m 0770 -d /opt/rt5/var/mason_data/etc
/usr/bin/install -c -m 0770 -d /opt/rt5/var/mason_data/obj
/usr/bin/install -c -m 0770 -d /opt/rt5/var/session_data
/usr/bin/install -c -m 0755 -d /opt/rt5/share/html
/usr/bin/install -c -m 0755 -d /opt/rt5/local/html
/usr/bin/install -c -m 0755 -d /opt/rt5/local/etc
/usr/bin/install -c -m 0755 -d /opt/rt5/local/lib
/usr/bin/install -c -m 0755 -d /opt/rt5/local/plugins
/usr/bin/install -c -m 0755 -d /opt/rt5/local/po
/usr/bin/install -c -m 0755 -d /opt/rt5/local/static
[ -d /opt/rt5/lib ] || /usr/bin/install -c -m 0755 -d /opt/rt5/lib
( cd lib && find . -type d -print ) | while read dir ; do \
    /usr/bin/install -c -m 0755 -d "/opt/rt5/lib/$dir" ; \
done
( cd lib && find . -type f -print ) | while read file ; do \
     /usr/bin/install -c -m 0644 "lib/$file" "/opt/rt5/lib/$file" ; \
done
[ -d /opt/rt5/etc ] || /usr/bin/install -c -m 0755 -d /opt/rt5/etc
[ -d "/opt/rt5/etc/RT_SiteConfig.d" ] || /usr/bin/install -c -m 0755 -d "/opt/rt5/etc/RT_SiteConfig.d"
for file in acl.Pg acl.Oracle acl.mysql schema.Pg schema.Oracle schema.mysql schema.SQLite cpanfile initialdata ; do \
    /usr/bin/install -c -m 0644 "etc/$file" "/opt/rt5/etc/" ; \
done
[ -d /opt/rt5/etc/upgrade ] || /usr/bin/install -c -m 0755 -d /opt/rt5/etc/upgrade
( cd etc/upgrade && find . -type d -print ) | while read dir ; do \
    /usr/bin/install -c -m 0755 -d "/opt/rt5/etc/upgrade/$dir" ; \
done
( cd etc/upgrade && find . -type f -not -name '*.in' -print ) | while read file ; do \
    /usr/bin/install -c -m 0644 "etc/upgrade/$file" "/opt/rt5/etc/upgrade/$file" ; \
done
/usr/bin/install -c -m 0755 -d /opt/rt5/bin
for file in rt-mailgate rt rt-crontool ; do \
    /usr/bin/install -c -o root -g www-data -m 0755 "bin/$file" "/opt/rt5/bin/" ; \
done
/usr/bin/install -c -m 0755 -d /opt/rt5/sbin
for file in rt-attributes-viewer rt-munge-attachments rt-clean-sessions rt-dump-initialdata rt-dump-metadata rt-email-dashboards rt-email-digest rt-email-group-admin rt-externalize-attachments rt-fulltext-indexer rt-importer rt-ldapimport rt-passwd rt-preferences-viewer rt-search-attributes rt-serializer rt-server rt-server.fcgi rt-session-viewer rt-setup-database rt-setup-fulltext-index rt-shredder rt-test-dependencies rt-validator rt-validate-aliases standalone_httpd ; do \
    /usr/bin/install -c -o root -g www-data -m 0755 "sbin/$file" "/opt/rt5/sbin/" ; \
done
[ -d /opt/rt5/share/html ] || /usr/bin/install -c -m 0755 -d /opt/rt5/share/html
( cd share/html && find . -type d -print ) | while read dir ; do \
    /usr/bin/install -c -m 0755 -d "/opt/rt5/share/html/$dir" ; \
done
( cd share/html && find . -type f -print ) | while read file ; do \
    /usr/bin/install -c -m 0644 "share/html/$file" "/opt/rt5/share/html/$file" ; \
done
make clean-mason-cache
make[1]: Entering directory '/home/lab-admin/rt-5.0.3'
rm -rf /opt/rt5/var/mason_data/cache/*
rm -rf /opt/rt5/var/mason_data/etc/*
rm -rf /opt/rt5/var/mason_data/obj/*
make[1]: Leaving directory '/home/lab-admin/rt-5.0.3'
# RT 3.0.0 - RT 3.0.2 would accidentally create a file instead of a dir
[ -f /opt/rt5/docs ] && rm /opt/rt5/docs 
make: [Makefile:448: doc-install] Error 1 (ignored)
[ -d /opt/rt5/docs ] || /usr/bin/install -c -m 0755 -d /opt/rt5/docs
( cd docs && find . -type d -print ) | while read dir ; do \
    /usr/bin/install -c -m 0755 -d "/opt/rt5/docs/$dir" ; \
done
( cd docs && find . -type f -print ) | while read file ; do \
    /usr/bin/install -c -m 0644 "docs/$file" "/opt/rt5/docs/$file" ; \
done
/usr/bin/install -c -m 0644 ./README /opt/rt5/docs/
[ -d /opt/rt5/share/fonts ] || /usr/bin/install -c -m 0755 -d /opt/rt5/share/fonts
( cd share/fonts && find . -type f -print ) | while read file ; do \
    /usr/bin/install -c -m 0644 "share/fonts/$file" "/opt/rt5/share/fonts/$file" ; \
done
[ -d /opt/rt5/share/po ] || /usr/bin/install -c -m 0755 -d /opt/rt5/share/po
( cd share/po && find . -type f -print ) | while read file ; do \
    /usr/bin/install -c -m 0644 "share/po/$file" "/opt/rt5/share/po/$file" ; \
done
[ -d /opt/rt5/share/static ] || /usr/bin/install -c -m 0755 -d /opt/rt5/share/static
( cd share/static && find . -type d -print ) | while read dir ; do \
    /usr/bin/install -c -m 0755 -d "/opt/rt5/share/static/$dir" ; \
done
( cd share/static && find . -type f -print ) | while read file ; do \
    /usr/bin/install -c -m 0644 "share/static/$file" "/opt/rt5/share/static/$file" ; \
done
# Make the libraries readable
chmod 0755 /opt/rt5
chown -R root /opt/rt5/lib
chgrp -R root /opt/rt5/lib
chmod -R  u+rwX,go-w,go+rX /opt/rt5/lib
chmod 0755 /opt/rt5/bin
chmod 0755 /opt/rt5/etc
cd /opt/rt5/etc && chmod 0400 acl.Pg acl.Oracle acl.mysql schema.Pg schema.Oracle schema.mysql schema.SQLite cpanfile initialdata
#TODO: the config file should probably be able to have its
# owner set separately from the binaries.
chown -R root /opt/rt5/etc
chgrp -R www-data /opt/rt5/etc
chmod 0440 /opt/rt5/etc/RT_Config.pm
chmod 0640 /opt/rt5/etc/RT_SiteConfig.pm
# Make the system binaries
cd /opt/rt5/bin && ( chmod 0755 rt-mailgate rt rt-crontool ; chown root rt-mailgate rt rt-crontool;  chgrp www-data rt-mailgate rt rt-crontool)
# Make the system binaries executable also
cd /opt/rt5/sbin && ( chmod 0755 rt-attributes-viewer rt-munge-attachments rt-clean-sessions rt-dump-initialdata rt-dump-metadata rt-email-dashboards rt-email-digest rt-email-group-admin rt-externalize-attachments rt-fulltext-indexer rt-importer rt-ldapimport rt-passwd rt-preferences-viewer rt-search-attributes rt-serializer rt-server rt-server.fcgi rt-session-viewer rt-setup-database rt-setup-fulltext-index rt-shredder rt-test-dependencies rt-validator rt-validate-aliases standalone_httpd ; chown root rt-attributes-viewer rt-munge-attachments rt-clean-sessions rt-dump-initialdata rt-dump-metadata rt-email-dashboards rt-email-digest rt-email-group-admin rt-externalize-attachments rt-fulltext-indexer rt-importer rt-ldapimport rt-passwd rt-preferences-viewer rt-search-attributes rt-serializer rt-server rt-server.fcgi rt-session-viewer rt-setup-database rt-setup-fulltext-index rt-shredder rt-test-dependencies rt-validator rt-validate-aliases standalone_httpd;  chgrp www-data rt-attributes-viewer rt-munge-attachments rt-clean-sessions rt-dump-initialdata rt-dump-metadata rt-email-dashboards rt-email-digest rt-email-group-admin rt-externalize-attachments rt-fulltext-indexer rt-importer rt-ldapimport rt-passwd rt-preferences-viewer rt-search-attributes rt-serializer rt-server rt-server.fcgi rt-session-viewer rt-setup-database rt-setup-fulltext-index rt-shredder rt-test-dependencies rt-validator rt-validate-aliases standalone_httpd)
# Make upgrade scripts executable if they are in the source.
#
( cd etc/upgrade && find . -type f -not -name '*.in' -perm /0111 -print ) | while read file ; do \
	chmod a+x "/opt/rt5/etc/upgrade/$file" ; \
done
# Make the web ui readable by all. 
chmod -R  u+rwX,go-w,go+rX 	/opt/rt5/share/html \
				/opt/rt5/local/html \
				/opt/rt5/share/po \
				/opt/rt5/local/po \
				/opt/rt5/share/static \
				/opt/rt5/local/static
chown -R root 	/opt/rt5/share/html \
			/opt/rt5/local/html \
			/opt/rt5/share/po \
			/opt/rt5/local/po \
			/opt/rt5/share/static \
			/opt/rt5/local/static
chgrp -R root 	/opt/rt5/share/html \
			/opt/rt5/local/html \
			/opt/rt5/share/po \
			/opt/rt5/local/po \
			/opt/rt5/share/static \
			/opt/rt5/local/static
# Make the web ui's data dir writable
chmod 0770  	/opt/rt5/var/mason_data \
		/opt/rt5/var/session_data
chown -R www-data 	/opt/rt5/var/mason_data \
			/opt/rt5/var/session_data
chgrp -R www-data 	/opt/rt5/var/mason_data \
			/opt/rt5/var/session_data
Congratulations. RT is now installed.


You must now configure RT by editing /opt/rt5/etc/RT_SiteConfig.pm.

(You will definitely need to set RT's database password in 
/opt/rt5/etc/RT_SiteConfig.pm before continuing. Not doing so could be 
very dangerous.  Note that you do not have to manually add a 
database user or set up a database for RT.  These actions will be 
taken care of in the next step.)

After that, you need to initialize RT's database by running
 'make initialize-database'

```

```sh
sudo make initialize-database 
/usr/bin/perl -I/opt/rt5/local/lib -I/opt/rt5/lib sbin/rt-setup-database --action init --prompt-for-dba-password
In order to create or update your RT database, this script needs to connect to your  mysql instance on localhost (port '') as root
Please specify that user's database password below. If the user has no database
password, just press return.

Password: 
Working with:
Type:	mysql
Host:	localhost
Port:	
Name:	rt
User:	rt
DBA:	root
Now creating a mysql database rt for RT.
Done.
Now populating database schema.
Done.
Now inserting database ACLs.
Done.
Now inserting RT core system objects.
Done.
[76264] [Sat Nov 19 18:00:15 2022] [warning]: Running with the internal HTML converter can result in performance issues with some HTML. Install one of the following utilities with your package manager to improve performance with an external tool: w3m, elinks, links, html2text, lynx (/home/lab-admin/rt-5.0.3/sbin/../lib/RT/Interface/Email.pm:1522)
Now inserting data.
Done inserting data.
Done.
```

Sounds like the following utilities will improve performance. Lets
install it and see how everything works with the installation.

```sh
apt install w3m elinks links html2text lynx
```

Now it's time to setup the web server. Default credentials for the user
account is below.

- User: root
- Password: password

To test this out temporarily I ran the standalone server on port 8080.

```sh
sudo /opt/rt5/sbin/rt-server --port 8080
```

Went to the URL and it worked. Though, it looks like there are some
configuration changes needed based on the output.

```sh
[76670] [Sat Nov 19 18:12:25 2022] [warning]: The requested host (192.168.0.199) does NOT match the configured WebDomain (localhost).  Perhaps you should Set($WebDomain, '192.168.0.199'); in RT_SiteConfig.pm, otherwise your internal hyperlinks may be broken. (/opt/rt5/sbin/../lib/RT/Interface/Web.pm:1442)
[76672] [Sat Nov 19 18:12:26 2022] [warning]: The requested host (192.168.0.199) does NOT match the configured WebDomain (localhost).  Perhaps you should Set($WebDomain, '192.168.0.199'); in RT_SiteConfig.pm, otherwise your internal hyperlinks may be broken. (/opt/rt5/sbin/../lib/RT/Interface/Web.pm:1442)
[76674] [Sat Nov 19 18:14:37 2022] [notice]: Possible CSRF: the Referrer header supplied by your browser (192.168.0.199:8080) is not allowed by RT's configured hostname (127.0.0.1:80) (/opt/rt5/sbin/../lib/RT/Interface/Web.pm:1779)
```

Added the following configuration to the file
```/etc/nginx/sites-availale/rt.conf```. 

```nginx
server {
    listen 80;
    server_name rt.lab.loft;
    access_log  /var/log/nginx/access.log;

    location / {
        fastcgi_param  QUERY_STRING       $query_string;
        fastcgi_param  REQUEST_METHOD     $request_method;
        fastcgi_param  CONTENT_TYPE       $content_type;
        fastcgi_param  CONTENT_LENGTH     $content_length;

        fastcgi_param  SCRIPT_NAME        "";
        fastcgi_param  PATH_INFO          $uri;
        fastcgi_param  REQUEST_URI        $request_uri;
        fastcgi_param  DOCUMENT_URI       $document_uri;
        fastcgi_param  DOCUMENT_ROOT      $document_root;
        fastcgi_param  SERVER_PROTOCOL    $server_protocol;

        fastcgi_param  GATEWAY_INTERFACE  CGI/1.1;
        fastcgi_param  SERVER_SOFTWARE    nginx/$nginx_version;

        fastcgi_param  REMOTE_ADDR        $remote_addr;
        fastcgi_param  REMOTE_PORT        $remote_port;
        fastcgi_param  SERVER_ADDR        $server_addr;
        fastcgi_param  SERVER_PORT        $server_port;
        fastcgi_param  SERVER_NAME        $server_name;
        fastcgi_pass 127.0.0.1:9000;
    }
}
```

RT's fastcgi process needs to be started externally as per a requirement
of Nginx.

```
sudo spawn-fcgi -u www-data -g www-data -a 127.0.0.1 -p 9000 -- /opt/rt5/sbin/rt-server.fcgi
spawn-fcgi: child spawned successfully: PID: 77177
```

```sh
sudo ln -s /etc/sites-available/rt.conf /etc/sites-enabled/
```

Nginx will need to be restarted after enabling the site.

```sh
sudo systemctl restart nginx.service
```

Once that's done. I'll test connecting to the web server. On my setup I
connected to it using a web browser after setting a hosts file entry.

- http://rt.lab.loft

Below are the logs showing that it connected successfully.

```sh
192.168.0.33 - - [19/Nov/2022:18:48:15 +0000] "GET /NoAuth/css/elevator-light/squished-062510ba40a2262c91f638866abd24e9.css HTTP/1.1" 200 286526 "http://rt.lab.loft/" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:106.0) Gecko/20100101 Firefox/106.0"
192.168.0.33 - - [19/Nov/2022:18:48:16 +0000] "GET /NoAuth/js/squished-263f99459ebf625f35128ed681b22b9a.js HTTP/1.1" 200 1458115 "http://rt.lab.loft/" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:106.0) Gecko/20100101 Firefox/106.0"
192.168.0.33 - - [19/Nov/2022:18:48:16 +0000] "GET /static/images/request-tracker-logo.svg HTTP/1.1" 200 9815 "http://rt.lab.loft/" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:106.0) Gecko/20100101 Firefox/106.0"
192.168.0.33 - - [19/Nov/2022:18:48:16 +0000] "GET /static/images/favicon.png HTTP/1.1" 200 335 "http://rt.lab.loft/" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:106.0) Gecko/20100101 Firefox/106.0"
192.168.0.33 - - [19/Nov/2022:18:48:16 +0000] "GET /static/css/fonts/inter/Inter-Medium.woff2 HTTP/1.1" 200 125776 "http://rt.lab.loft/NoAuth/css/elevator-light/squished-062510ba40a2262c91f638866abd24e9.css" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:106.0) Gecko/20100101 Firefox/106.0"
192.168.0.33 - - [19/Nov/2022:18:48:16 +0000] "GET /static/css/fonts/inter/Inter-Regular.woff2 HTTP/1.1" 200 118648 "http://rt.lab.loft/NoAuth/css/elevator-light/squished-062510ba40a2262c91f638866abd24e9.css" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:106.0) Gecko/20100101 Firefox/106.0"
```

Going to need to change the domain in the application also. Need to
configure the RT_SiteConfig.pm file. In the path /opt/rt5/etc/. The
following sections need to be edited. 

```sh
use utf8;

# Any configuration directives you include  here will override
# RT's default configuration file, RT_Config.pm
#
# To include a directive here, just copy the equivalent statement
# from RT_Config.pm and change the value. We've included a single
# sample value below.
#
# If this file includes non-ASCII characters, it must be encoded in
# UTF-8.
#
# This file is actually a perl module, so you can include valid
# perl code, as well.
#
# The converse is also true, if this file isn't valid perl, you're
# going to run into trouble. To check your SiteConfig file, use
# this command:
#
#   perl -c /path/to/your/etc/RT_SiteConfig.pm
#
# You must restart your webserver after making changes to this file.
#

# You may also split settings into separate files under the etc/RT_SiteConfig.d/
# directory.  All files ending in ".pm" will be parsed, in alphabetical order,
# after this file is loaded.

Set( $rtname, 'rt.lab.loft');
Set( $WebDomain, 'rt.lab.loft');
Set( $Organization, 'lab.loft');
Set( $Timezone, 'US/Central');

# You must install Plugins on your own, this is only an example
# of the correct syntax to use when activating them:
#     Plugin( "RT::Authen::ExternalAuth" );

1;
```

Then I needed to kill the PID (77177) for the spawned Fast CGI server
and run the command again. I'm probably going to need to read up more on
this. This is probably the wrong method for this.

```sh
sudo spawn-fcgi -u www-data -g www-data -a 127.0.0.1 -p 9000 -- /opt/rt5/sbin/rt-server.fcgi
```

Then Nginx needs to be restarted.

```sh
sudo systemctl restart nginx.service
```

A basic installation of RT has been installed with these notes. Which
has given me a better idea of how to install it. I'm going to need to
figure it out how to deploy this for an actual production environment
soon.
