---
layout: post
title:  "Leetcode Bit Manipulation Note"
date:   2019-07-18 19:30:00 +0800
categories: [Leetcode-BitManipulation, Algorithm]
---
### Bit Manipulation
- `x >> 1`
- `x << 1`
- `x & 1`
- reverse bit
    ```java
    int hi = 31, lo = 0;
    while (hi > lo) {
            // swap bit
            int x = (n >> hi) & 1;
            int y = (n >> lo) & 1;

            if (x != y) {
                // use '^' to reverse bit
                n ^= (1 << hi) | (1 << lo);
            }
            hi--;
            lo++;
        }
    ```
- use bit to store multiple states to reduce space complexity
- use '^' to seperate two number, find the first '1' position
