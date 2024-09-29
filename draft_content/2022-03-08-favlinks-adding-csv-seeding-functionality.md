---
title: "Favlinks - Adding CSV Seeding Functionality"
date: "2022-03-08"
classes: "wide"
excerpt: "Adding seeding functionality for CSV files to Favlinks."
draft: true
categories:
- favlinks
- laravel
- php
- post
- seeding
- csv
tags:
- favlinks
- php
- post
- laravel
- seeding
- csv
---

## Overview



## Code

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LinkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        State::truncate();

        $linksCsv = fopen(base_path("database/data/links.csv"), "r");

        $firstLine = true;

        while (($data = fgetcsv($linksCsv, 500, ",") !== FALSE)
        {
            if (!$firstLine)
            {
                Link::create([
                    "name"      => $data['0'],
                    "url"       => $data['1'],
                ]);
            }
            $firstLine = false;
        }

        fclose($linksCsv);
    }
}
```
