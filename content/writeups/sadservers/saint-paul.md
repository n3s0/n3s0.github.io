---
title: "Saint Paul: Merge Many CSVs files"
date: 2024-10-11T09:56:01-05:00
summary: "Write up for the Linux Upskill Challenge."
draft: true
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
invertPagination: true
showToC: true
openToC: false
showComments: false
showHeadingAnchors: true
---

## Summary

## Scenario
---

Below is the scenario for the SadServers challenge.

- Level: Easy
- Type: Do
- Tags: csv  

Description: 

Join (merge) all the 338 files in 
/home/admin/polldayregistrations_enregistjourduscrutin?????.csv into one single 
/home/admin/all.csv file with the contents of all the CSV files in any order. 
There should be only one line with the names of the columns as a header.

Test: 

The "Check My Solution" button runs the script /home/admin/agent/check.sh, 
which you can see and execute.

Time to Solve: 15 minutes.

## Solution
---

Now to get started with the solution of this challenge.

```sh
 ls
README.txt
agent
polldayregistrations.zip
polldayregistrations_enregistjourduscrutin10001.csv
polldayregistrations_enregistjourduscrutin10002.csv
polldayregistrations_enregistjourduscrutin10003.csv
polldayregistrations_enregistjourduscrutin10004.csv
polldayregistrations_enregistjourduscrutin10005.csv
polldayregistrations_enregistjourduscrutin10006.csv
polldayregistrations_enregistjourduscrutin10007.csv
polldayregistrations_enregistjourduscrutin11001.csv
polldayregistrations_enregistjourduscrutin11002.csv
polldayregistrations_enregistjourduscrutin11003.csv
polldayregistrations_enregistjourduscrutin11004.csv
polldayregistrations_enregistjourduscrutin12001.csv
polldayregistrations_enregistjourduscrutin12002.csv
 ...
```


