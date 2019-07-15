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
    - search in `rotated array`

        ```java
        while (first != last) {
            final int mid = first  + (last - first) / 2;
            if (nums[mid] == target)
                return mid;
            if (nums[first] <= nums[mid]) {
                if (nums[first] <= target && target < nums[mid])
                    last = mid;
                else
                    first = mid + 1;
            } else {
                if (nums[mid] < target && target <= nums[last-1])
                    first = mid + 1;
                else
                    last = mid;
            }
        }
        ```
