---
layout: post
title:  "Leetcode Sort Note"
date:   2019-07-09 18:30:00 +0800
categories: [Leetcode-Array, Leetcode-ArrayList, Leetcode-LinkedList, Algorithm]
---
### Sort
- Insertion Sort O(n^2)
    - find insert position
        - Array
        - LinkedList
- Merge Sort O(nlogn)
    - split by middle point and merge list by order
        - Array
        - LinkedList
- Quick Sort O(n^2)
    - partition algorithm

    ```java
    private static void quickSort(int[] nums, int left, int right) {
        if (left < right) {
            final int pos = partition(nums, left, right);
            quickSort(nums, left, pos - 1);
            quickSort(nums, pos + 1, right);
        }
    }
    private static int partition(int[] nums, int i, int j) {
        final int pivot = nums[i];
        while (i < j) {
            while (i < j && nums[j] >= pivot) --j;
            nums[i] = nums[j];
            while(i < j && nums[i] <= pivot) ++i;
            nums[j] = nums[i];
        }
        nums[i] = pivot;
        return i;
    }
    ```