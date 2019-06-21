---
layout: post
title:  "Introduction to Hibernate"
date:   2019-06-21 21:30:00 +0800
categories: [Java, Hibernate]
---
### Limitations of JDBC
- JDBC is `dependent upon` the `Database` being using
- JDBC code is `not portable` across the multiple database softwares
- In JDBC, `Exception handling` is mandatory
- While working with JDBC, There is `no support Object level relationship`.

### Hibernate Framework
>Hibernate is a framework which provides some `abstraction layer` means programmer dont have to worry about the implementations, Hibernate `do implementations` for you `internally` like Establishing a `connection` with the database, writing query to perform `CRUD` operations etc.

>It is a java framework which is used to develop `persistence logic`. Persistence logic means to store and process the data for long use. More precisely Hibernate is a open source, non-invasive, light-weight `java ORM(Object relational mapping)` framework to develop objects which is `independent of the database` software and make independent persistence logic in all J2EE platform.

### Additional Functionalities supported by Hibernate framework
- Hibernate framework support `Auto DDL(Data Defination Language)` operations. In `JDBC manually` we have to create table and declare the data-type for each and every column. But `Hibernate` can do `DDL operations` for you `internally` like `creation` of table, `drop` a table,`alter` a table etc.
- Hibernate supports `Auto Primary key generation`. It means in JDBC we have to manually set a primary key for a table. But Hibernate can this task for you.
- Hibernate framework is independent of Database because it supports `HQL (Hibernate Query Language)` which is not specific to any database, whereas JDBC is database dependent.
- In Hibernate, `Exception Handling is not mandatory`,whereas In JDBC exception handling is mandatory.
- Hibernate supports `Cache Memory` whereas JDBC does not support cache memory.
- Hibernate is a `ORM tool` means it support Object relational mapping, in hibernate `each record` is represented as `a Object`
