---
layout: post
title:  "String vs StringBuffer vs StringBuilder"
date:   2019-06-24 18:30:00 +0800
categories: [Java, String]
---
### String vs StringBuffer vs StringBuilder
- `String` is `immutable` whereas `StringBuffer` and `StringBuider` are `mutable` classes
- `StringBuffer` is `thread safe` and `synchronized` whereas `StringBuilder` is `not`, thats why `StringBuilder` is more `faster` than StringBuffer
- String concat `+` operator internally uses StringBuffer or StringBuilder class
- For String manipulations in `non-multi threaded` environment, we `should use StringBuilder`
