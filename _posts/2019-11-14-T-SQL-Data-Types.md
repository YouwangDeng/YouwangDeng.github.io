---
layout: post
title:  "T-SQL Data Types"
date:   2019-11-12 20:30:00 +0800
categories: [Database,T-SQL]
---
#### Data Types
- Exact Numeric
    - tinyint
    - smallint
    - int 
    - bigint
    - bit
    - decimal/numeric
    - numeric
    - money
    - smallmoney
- Approximate Numeric
    - float
    - real
- Character
    - char
    - varchar
    - text
    - nchar
    - nvarchar
    - ntext
- Data/Time
    - date
    - time
    - datetime
    - datetime2
    - smalldatetime
    - datetimeoffset
- Binary
    - binary
    - varbinary
    - image
- Other
    - cursor
    - hierarchyid
    - sql_variant
    - table
    - timestamp
    - uniqueidentifier
    - xml
    - geography
    - geometry

#### Data Type Conversion
- Implicit Conversion - compatible data types can be automatically converted
- Explicit Conversion - Require an explicit conversion funcition
    - CAST/TRY_CAST
    - CONVERT/TRY_CONVERT
    - PARSE/TRY_PARSE
    - STR
- Examples

```sql
-- CAST
SELECT CAST(ProductID AS varchar(5)) + ': ' + Name AS ProductName
FROM SalesLT.Product;
-- CONVERT
SELECT CONVERT(ProductID AS varchar(5)) + ': ' + Name AS ProductName
FROM SalesLT.Product;
-- CONVERT dates
SELECT SellStartDate,
    CONVERT(nvarchar(30), SellStartDate) AS ConvertDate,
    CONVERT(nvarchar(30), SellStartDate,126) AS ISO8601FormatDate
FROM SalesLT.Product;
-- TRY_CASR
SELECT Name, TRY_CAST(Size AS Integer) AS NumericSize
FROM SalesLT.Product;
```
#### NULL
- NULL represents a missing or unknown value
- ANSI behavior for NULL values:
    - The result of any expression containing a NULL value is NULL
        - 2 + NULL = NULL
        - 'string' + NULL = NULL
    - Equality comparisons always return false for NULL values
        - NULL = NULL return false
        - NULL IS NULL return true
- NULL functions
    - ISNULL(column/variable, value)
        - return value if the column or variable is NULL
    - NULLIF(column/variable, value)
        - return NULL if the column or variable is value
    - COALESCE(column/variable1, column/variable2,...)
        - return the first non-NULL value is the list
- Examples

```sql
-- ISNULL
SELECT Name, ISNULL(TRY_CAST(Size AS Integer), 0) AS NumericSize
FROM SalesLT.Product;
-- NULLIF
SELECT Name, NULLIF(Color, 'Multi') AS SingleColor
FROM SalesLT.Product;
-- first non-NULL value
SELECT Name, COALESCE(DiscontinueDate, SellEndDate, SellStartDate) AS LastActivity
FROM SalesLT.Product;
```
