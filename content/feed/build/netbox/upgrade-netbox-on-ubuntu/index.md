---
title: "Upgrade Netbox On Ubuntu Server 24.04 LTS Using Git"
description: "Notes on upgrading Netbox on Ubuntu Server using Git."
cover: "/feed/build/netbox/netbox-community-login-screen.jpg"
date: 2026-02-28T08:08:15-06:00
lastmod: 2026-02-28
draft: false
tags: ["linux"]
---

## Summary

A big part of maintaining applications like Netbox is upgrading them as new
features, bug fixes, and security patches come out. I will be walking through
how to upgrade the application using the [Git method provided in the
documentation](https://netboxlabs.com/docs/netbox/installation/upgrading/#option-b-check-out-a-git-release).

Of course before you perform an upgrade to any application. I recommend reading
the release notes or even the issues associated with that release. Although
the Netbox community is pretty good at releasing stable versions. Doing the
proper homework is advised.

Sometimes I will do this after migrations to see how well I did on it. Which I
recently just worked through migrating from one host to the other and deployed
[Netbox with Caddy](/feed/build/netbox/migrate-netbox-to-ubuntu-24-04-lts/). 
I normally deploy web applications using Nginx. But, there is something new out 
there and I needed to experiment.

## Upgrading

Using this method is pretty simple. Just requires Git. Need to start the upgrade
process by determining the latest version of Netbox. This can be done by
checking the remote repository for the most resent tag.

```sh
git ls-remote --tags https://github.com/netbox-community/netbox.git \
  | grep -o 'refs/tags/v[0-9]*\.[0-9]*\.[0-9]*$' \
  | tail -n 1 \
  | sed 's|refs/tags/||'
```

This will output the most recent tag. In this case it's `v4.5.3`.

```sh
v4.5.3
```

Next I need to fetch all of the tags from the netbox-community Github
repository. This can be dont with the `git fetch` command with the `--tags`
flag.

```sh
git fetch --tags
```

As shown below. It's downloading all of the tags from the remote repository.

```sh
remote: Enumerating objects: 7103, done.
remote: Counting objects: 100% (3638/3638), done.
remote: Compressing objects: 100% (504/504), done.
remote: Total 7103 (delta 3274), reused 3138 (delta 3133), pack-reused 3465 (from 2)
Receiving objects: 100% (7103/7103), 20.37 MiB | 37.11 MiB/s, done.
Resolving deltas: 100% (4923/4923), completed with 573 local objects.
From https://github.com/netbox-community/netbox
 * [new branch]          12318-case-insensitive-uniqueness           -> origin/12318-case-insensitive-uniqueness
   26c91f01c..76caae12f  19724-graphql                               -> origin/19724-graphql
 * [new branch]          20044-elevation-stuck-lightmode             -> origin/20044-elevation-stuck-lightmode
 * [new branch]          20068-import-moduletype-attrs               -> origin/20068-import-moduletype-attrs
 * [new branch]          20378-del-script                            -> origin/20378-del-script
 * [new branch]          20442-callable-audit                        -> origin/20442-callable-audit
 * [new branch]          20637-improve-device-q-filter               -> origin/20637-improve-device-q-filter
 * [new branch]          20660-script-load                           -> origin/20660-script-load
 * [new branch]          20766-fix-german-translation-code-literals  -> origin/20766-fix-german-translation-code-literals
 * [new branch]          20911-dropdown-2                            -> origin/20911-dropdown-2
 * [new branch]          20911-dropdown-3                            -> origin/20911-dropdown-3
 * [new branch]          20923-dcim-templates                        -> origin/20923-dcim-templates
 * [new branch]          21102-fix-graphiql-explorer                 -> origin/21102-fix-graphiql-explorer
 * [new branch]          21118-site                                  -> origin/21118-site
 * [new branch]          21160-filterset                             -> origin/21160-filterset
 * [new branch]          21203-q-attr-denorm                         -> origin/21203-q-attr-denorm
 * [new branch]          21304-deprecate-housekeeping-command        -> origin/21304-deprecate-housekeeping-command
 * [new branch]          21331-deprecate-querystring-tag             -> origin/21331-deprecate-querystring-tag
 * [new branch]          21364-swagger                               -> origin/21364-swagger
 * [new branch]          21429-cable-create-add-another-does-not-carry-over-termination -> origin/21429-cable-create-add-another-does-not-carry-over-termination
 * [new branch]          21477-extend-graphql-api-filters-for-cables -> origin/21477-extend-graphql-api-filters-for-cables
 * [new branch]          21481-facility-id-doesnt-show-in-rack-page  -> origin/21481-facility-id-doesnt-show-in-rack-page
 * [new branch]          7604-filter-modifiers                       -> origin/7604-filter-modifiers
 * [new branch]          7604-filter-modifiers-v3                    -> origin/7604-filter-modifiers-v3
 * [new branch]          circuit-swap                                -> origin/circuit-swap
   5bbab7eb4..3320e07b7  feature                                     -> origin/feature
   912e6e4fb..289cb4e1b  feature-ip-prefix-link                      -> origin/feature-ip-prefix-link
 * [new branch]          fix_module_substitution                     -> origin/fix_module_substitution
   c5124cb2e..d10453883  main                                        -> origin/main
 * [new branch]          v4.5-beta1-release                          -> origin/v4.5-beta1-release
 * [new tag]             v4.4.10                                     -> v4.4.10
 * [new tag]             v4.4.5                                      -> v4.4.5
 * [new tag]             v4.4.6                                      -> v4.4.6
 * [new tag]             v4.4.7                                      -> v4.4.7
 * [new tag]             v4.4.8                                      -> v4.4.8
 * [new tag]             v4.4.9                                      -> v4.4.9
 * [new tag]             v4.5.0                                      -> v4.5.0
 * [new tag]             v4.5.0-beta1                                -> v4.5.0-beta1
 * [new tag]             v4.5.1                                      -> v4.5.1
 * [new tag]             v4.5.2                                      -> v4.5.2
 * [new tag]             v4.5.3                                      -> v4.5.3
```

Once this is completed I can move on the checking out the `v4.5.3` tag. This
will switch over to the chosen tags code on the local repository. Setting the
HEAD to the appropriate tagged release.

```sh
git checkout v4.5.3
```

As shown in the output below. The HEAD is now Release v4.5.3.

```sh
Previous HEAD position was c5124cb2e feat(templates): Update user menu icon class names for consistency
HEAD is now at c029782cf Release v4.5.3
```

Next it's time to run the `upgrade.sh` script to start the upgrade process for
Netbox.

```sh
./upgrade.sh
```

As shown in the output. Running the upgrade script will. First it upgrades some
Python pakcages for the new version of Netbox. Once that's done it will perform
some migrations of the most recent scema. Then once that's finished there may be
some configuration warnings depending on the previous Netbox configuration.
It will do some other things and when it's finished it will ask for a service
restart of the `netbox` and `netbox-rq` services.

```sh
You are installing (or upgrading to) NetBox version 4.5.3
Using Python 3.12.3
Removing old virtual environment...
Creating a new virtual environment at /opt/netbox/venv...
Updating pip (pip install --upgrade pip)...
Requirement already satisfied: pip in ./venv/lib/python3.12/site-packages (24.0)
Collecting pip
  Downloading pip-26.0.1-py3-none-any.whl.metadata (4.7 kB)
Downloading pip-26.0.1-py3-none-any.whl (1.8 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.8/1.8 MB 5.6 MB/s eta 0:00:00
Installing collected packages: pip
  Attempting uninstall: pip
    Found existing installation: pip 24.0
    Uninstalling pip-24.0:
      Successfully uninstalled pip-24.0
Successfully installed pip-26.0.1
pip 26.0.1 from /opt/netbox/venv/lib/python3.12/site-packages/pip (python 3.12)
Installing Python system packages (pip install wheel)...
Collecting wheel
  Downloading wheel-0.46.3-py3-none-any.whl.metadata (2.4 kB)
Collecting packaging>=24.0 (from wheel)
  Downloading packaging-26.0-py3-none-any.whl.metadata (3.3 kB)
Downloading wheel-0.46.3-py3-none-any.whl (30 kB)
Downloading packaging-26.0-py3-none-any.whl (74 kB)
Installing collected packages: packaging, wheel
Successfully installed packaging-26.0 wheel-0.46.3
Installing core dependencies (pip install -r requirements.txt)...
Collecting colorama==0.4.6 (from -r requirements.txt (line 1))
  Downloading colorama-0.4.6-py2.py3-none-any.whl.metadata (17 kB)
Collecting Django==5.2.11 (from -r requirements.txt (line 2))
  Downloading django-5.2.11-py3-none-any.whl.metadata (4.1 kB)
Collecting django-cors-headers==4.9.0 (from -r requirements.txt (line 3))
  Downloading django_cors_headers-4.9.0-py3-none-any.whl.metadata (16 kB)
Collecting django-debug-toolbar==6.2.0 (from -r requirements.txt (line 4))
  Downloading django_debug_toolbar-6.2.0-py3-none-any.whl.metadata (4.5 kB)
Collecting django-filter==25.2 (from -r requirements.txt (line 5))
  Downloading django_filter-25.2-py3-none-any.whl.metadata (5.1 kB)
Collecting django-graphiql-debug-toolbar==0.2.0 (from -r requirements.txt (line 6))
  Downloading django_graphiql_debug_toolbar-0.2.0-py3-none-any.whl.metadata (3.5 kB)
Collecting django-htmx==1.27.0 (from -r requirements.txt (line 7))
  Downloading django_htmx-1.27.0-py3-none-any.whl.metadata (2.7 kB)
Collecting django-mptt==0.18.0 (from -r requirements.txt (line 8))
  Downloading django_mptt-0.18.0-py3-none-any.whl.metadata (5.3 kB)
Collecting django-pglocks==1.0.4 (from -r requirements.txt (line 9))
  Downloading django-pglocks-1.0.4.tar.gz (4.1 kB)
  Installing build dependencies ... done
  Getting requirements to build wheel ... done
  Preparing metadata (pyproject.toml) ... done
Collecting django-prometheus==2.4.1 (from -r requirements.txt (line 10))
  Downloading django_prometheus-2.4.1-py2.py3-none-any.whl.metadata (9.6 kB)
Collecting django-redis==6.0.0 (from -r requirements.txt (line 11))
...
Operations to perform:
  Apply all migrations: account, auth, circuits, contenttypes, core, dcim, django_rq, extras, ipam, netbox_inventory, netbox_topology_views, sessions, social_django, taggit, tenancy, thumbnail, users, virtualization, vpn, wireless
Running migrations:
  Applying users.0013_user_remove_is_staff... OK
  Applying users.0014_users_token_v2... OK
  Applying users.0015_owner... OK
  Applying extras.0134_owner... OK
  Applying dcim.0216_latitude_longitude_validators... OK
  Applying dcim.0217_poweroutlettemplate_color... OK
  Applying dcim.0218_owner... OK
  Applying dcim.0219_devicetype_device_count... OK
  Applying dcim.0220_cable_profile... OK
  Applying dcim.0221_cable_connector_positions... OK
  Applying dcim.0222_port_mappings... OK
  Applying dcim.0223_frontport_positions... OK
  Applying dcim.0224_add_comments_to_organizationalmodel... OK
  Applying circuits.0053_owner... OK
  Applying circuits.0054_cable_connector_positions... OK
  Applying circuits.0055_add_comments_to_organizationalmodel... OK
  Applying circuits.0056_gfk_indexes... OK
  Applying core.0020_owner... OK
  Applying core.0021_job_queue_name... OK
  Applying tenancy.0021_owner... OK
  Applying tenancy.0022_add_comments_to_organizationalmodel... OK
  Applying dcim.0225_gfk_indexes... OK
  Applying dcim.0226_add_mptt_tree_indexes... OK
  Applying ipam.0083_vlangroup_populate_total_vlan_ids... OK
  Applying ipam.0084_owner... OK
  Applying ipam.0085_add_comments_to_organizationalmodel... OK
  Applying ipam.0086_gfk_indexes... OK
  Applying netbox_inventory.0014_alter_audittrail_object_type... OK
  Applying netbox_inventory.0015_alter_asset_storage_location... OK
  Applying netbox_inventory.0016_owner... OK
  Applying netbox_inventory.0017_rename_asset_owner_to_owning_tenant... OK
  Applying netbox_inventory.0018_add_owners... OK
  Applying tenancy.0023_add_mptt_tree_indexes... OK
  Applying virtualization.0049_owner... OK
  Applying virtualization.0050_virtualmachine_start_on_boot... OK
  Applying virtualization.0051_add_comments_to_organizationalmodel... OK
  Applying virtualization.0052_gfk_indexes... OK
  Applying vpn.0010_owner... OK
  Applying vpn.0011_add_comments_to_organizationalmodel... OK
  Applying wireless.0016_owner... OK
  Applying wireless.0017_gfk_indexes... OK
  Applying wireless.0018_add_mptt_tree_indexes... OK
Checking for missing cable paths (python3 netbox/manage.py trace_paths --no-input)...
/opt/netbox/netbox/netbox/settings.py:226: UserWarning: API_TOKEN_PEPPERS is not defined. v2 API tokens cannot be used.
  warnings.warn("API_TOKEN_PEPPERS is not defined. v2 API tokens cannot be used.")
Found no missing console port paths; skipping
Found no missing console server port paths; skipping
Found no missing interface paths; skipping
Found no missing power feed paths; skipping
Found no missing power outlet paths; skipping
Found no missing power port paths; skipping
Finished.
...
Upgrade complete! Don't forget to restart the NetBox services:
  > sudo systemctl restart netbox netbox-rq
```

Restarted both the `netbox` and `netbox-rq` services using the `systemctl`
command.

```sh
systemctl restart netbox netbox-rq
```

After some quick checks after restarting the services. It looks like everything
is good to go. I reviewed this by going to the site in a web browser and it
looks good.

![Netbox Community login screen](/feed/build/netbox/netbox-community-login-screen.jpg)

## Conclusion

This was a brief note that walked through upgrading Netbox using the Git option
provided in the documentation. If there are no issues. Netbox should display the
login screen with no issues.
