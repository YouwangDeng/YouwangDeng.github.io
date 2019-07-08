---
layout: post
title:  "Leetcode String Note"
date:   2019-07-05 18:30:00 +0800
categories: [Leetcode-String]
---
### String - linear data structure
- String is `immutable`
- char array is `mutable`
- `StringBuilder` reduce space complexity
- `Palindrome` problem
- `bound check`
- `length -1`
- `Edge case` consideration, `detail case problem`
- use `Integer.MAX_VALUE / 10` and `Integer.MAX_VALUE % 10` to check `overflow`
- string is a linear structure, could use `Dynamic Programming` to solve `optimization problems`
- `Regular expression matching` is a `DP` or recursion problems, just try out all possiblilities
- `brute force` solution to visite `each character` in the string once
- `s.toCharArray()` return a char array char[]