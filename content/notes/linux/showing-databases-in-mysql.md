---
title: "Showing Databases In MySQL"
author: "Timothy Loftus (n3s0)"
date: 2024-04-03T09:44:02+06:00
lastmod: 2025-10-12
description: "Notes for showing and finding databse information in MySQL."
tags: ["dbadmin"]
---

```sql
SHOW DATABASES; 
```

```sql
SHOW SCHEMAS;
```

```sql
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| testdatabase2      |
| testdb1            |
+--------------------+
6 rows in set (0.00 sec)
```

```sql
SHOW DATABASES \G
```

```sql
*************************** 1. row ***************************
Database: information_schema
*************************** 2. row ***************************
Database: mysql
*************************** 3. row ***************************
Database: performance_schema
*************************** 4. row ***************************
Database: sys
*************************** 5. row ***************************
Database: testdatabase2
*************************** 6. row ***************************
Database: testdb1
6 rows in set (0.01 sec)
```

```sql
SHOW DATABASES LIKE 'test%';
```
```sql
+------------------+
| Database (test%) |
+------------------+
| testdatabase2    |
| testdb1          |
+------------------+
2 rows in set (0.00 sec)
```

```sql
show databases like '%schema';
```

```sql
+--------------------+
| Database (%schema) |
+--------------------+
| information_schema |
| performance_schema |
+--------------------+
2 rows in set (0.00 sec)
```
