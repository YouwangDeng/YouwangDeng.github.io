---
layout: post
title:  "Leetcode Search Note"
date:   2019-07-14 18:30:00 +0800
categories: [Leetcode-Array, Leetcode-ArrayList, Leetcode-LinkedList, Algorithm]
---
### Search Algorithm
- `Binary Search`
- `Special` kind of Binary Search
    - find `lower` bound

        ```java
        while(lo != hi) {
            mid = lo + (hi - lo) / 2;
            if(nums[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        // this will return a index that nums[lo] = target
        return lo;
        ```
    - find `higher` bound

        ```java
        while(lo != hi) {
            mid = lo + (hi - lo) / 2;
            if(nums[mid] <= target) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        // this will return a index that nums[lo] > target
        return lo;
        ```