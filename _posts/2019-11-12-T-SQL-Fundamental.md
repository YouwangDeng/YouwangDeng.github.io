---
layout: post
title:  "T-SQL Fundamentals"
date:   2019-11-12 20:30:00 +0800
categories: [Database,T-SQL]
---
#### Relational Databases
- Entities are represented as relations(tables), in which their attributes are represented as domains(columns)
- Most relational databases are normalized, with relationships defined between tables through primary and foreign keys

#### Schemas and Object Names
- Schemas are namespaces for database objects
- Fully-qualified names:
    - [server_name.][database_name.][schema_name.]object_name
- Within database context, best practice is to include schema name: schema_name.object_name

#### SQL Statement Types
- Data Manipulation Language(DML) - Statements for querying and modifying data
    - SELECT
    - INSERT
    - UPDATE
    - DELETE
- Data Defination Language(DDL) - Statements for database objects
    - CREATE
    - ALTER
    - DROP
- Data Control Language(DCL) - Statements for assigning security permissions
    - GRANT
    - REVOKE
    - DENY

#### SELECT Statement
- SELECT - defines which columns to return
- FROM - defines tables to query
- WHERE - filters rows using a predicate
- GROUP BY - arrange rows by groups
- HAVING - filters groups using a predicate
- ORDER BY - sorts the output

>Example:

```sql
SELECT OrderDate, COUNT(OrderID)
FROM Sales.SalesOrder
WHERE Status = 'Shipped'
GROUP BY OrderDate
HAVING COUNT(OrderID) > 1
ORDER BY OrderDate DESC;
```

> execute sequence: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY

>Basic SELECT Query Examples

```sql
-- All columns
SELECT * FROM Production.Product
-- Specific columns
SELECT Name, ListPrice
FROM Production.Product;
-- Expressions ans Aliases
SELECT Name as Product, ListPrice * 0.9 AS SalesPrice
FROM Production.Product
```