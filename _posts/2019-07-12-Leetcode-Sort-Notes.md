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
- bucket sort O(n+nlog(n/k))

```java
private static void bucketSort(int[] nums) {
    if (nums.length < 2) return;
    int minValue = Integer.MAX_VALUE;
    int maxValue = Integer.MIN_VALUE;

    for (int i : nums) {
        minValue = Math.min(minValue, i);
        maxValue = Math.max(maxValue, i);
    }

    final int bucketSize = (maxValue - minValue) / nums.length + 1;
    final int bucketCount = (maxValue - minValue) / bucketSize + 1;
    final ArrayList<Integer>[] buckets = new ArrayList[bucketCount];
    for (int i = 0; i < buckets.length; ++i) {
        buckets[i] = new ArrayList<>();
    }

    for (int x : nums) {
        final int index = (x - minValue) / bucketSize;
        buckets[index].add(x);
    }

    for (final ArrayList<Integer> list : buckets) {
        Collections.sort(list);
    }

    int i = 0;
    for (final ArrayList<Integer> list : buckets) {
        for (int x : list) {
            nums[i++] = x;
        }
    }
}
```

- counting sort O(n)
    - a special kind of bucket sort

- radix sort O(n)
    - sort positive numbers
    - use elements digit by digit

```java
private static void radixSort(int[] nums) {
    int minValue = Integer.MAX_VALUE;
    int maxValue = Integer.MIN_VALUE;

    for (int i : nums) {
        minValue = Math.min(minValue, i);
        maxValue = Math.max(maxValue, i);
    }

    final int D = Integer.toString(maxValue - minValue).length();
    final ArrayList<Integer>[] buckets = new ArrayList[10];
    for (int i = 0; i < buckets.length; ++i) {
        buckets[i] = new ArrayList<>();
    }

    for (int i = 0; i < D; ++i) {
        for (int x : nums) {
            final int index = getDigit(x - minValue, i);
            final ArrayList<Integer> bucket = buckets[index];
            bucket.add(x);
        }

        int index = 0;
        for (ArrayList<Integer> bucket : buckets) {
            for (int x : bucket) {
                nums[index++] = x;
            }
            bucket.clear();
        }
    }
}

// get the i-th digit of n
private static int getDigit(int n, int i) {
    for (int j = 0; j < i; ++j) {
        n /= 10;
    }
    return n % 10;
}
```
