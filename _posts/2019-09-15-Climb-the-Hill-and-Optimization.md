---
layout: post
title:  "Climb the Hill and Optimization"
date:   2019-09-15 20:30:00 +0800
categories: [Algorithm, Interview, Java]
---

#### Question

> Give an array, find minimum cost to make the array non-increasing or non-decreasing. The value of change is absolute, sum of all changes is the cost.

> Example: [0,1,2,5,6,5,7], minimum cost to change the array into non-decreasing is to change the number at index 5 from 5 to 6, so the minimum cost is 1.

#### Solution

> Dynamic Programming

```java
1. first solve the non-decreasing problem, then reverse the array and solve the non-increasing problem, min of those results is the minimum cost
2. dp[i][j] denotes the minumum cost using j as the maximum value in array till index i.
3. how to get j bound: sort the original array to get bound of j, however when the number in j is very large, the time complexity and space complexity of DP is unacceptable.
4. First Optimization: use index of sorted numbers as j, meanwhile there could be duplicate values in the array, so could first add all values into a treeset, then use an iterator to add the numbers in the set into an sorted array, the size of the sorted array is m (m <= n)
5. DP formula:
dp[i][j] = Math.abs(nums[i-1] - sorted[j]) + Math.min(dp[i-1][k]) where 0 <= k <= j, 0 <= i <= n, 0 <= j <= m
6. Init DP:
dp[0][j] = sorted[j], when 0 <= j <= m;
7. Second Optimization: init min inside the first loop, do min operation in each second loop
8. the result is the minimum value of dp[n][j], 1 <= j <= m.
9. time complexity: O(n^2), space complexity: O(n^2)
10. note: use long instead of int to avoid overflow
``` 

#### Sample code

```java
class Solution {
    public static void main(String[] args) {
        int[] heights = {100,90,70,70,80,80,80,80,80};
        System.out.println(ClimbTheHill(heights));
        // 20
    }

    public static long ClimbTheHill(int[] heights) {
        long incrMin = ClimbTheHillIncr(heights);
        int left = 0;
        int right = heights.length - 1;
        while(left < right) {
            int temp = heights[left];
            heights[left] = heights[right];
            heights[right] = temp;
            left++;
            right--;
        }
        long decrMin = ClimbTheHillIncr(heights);
        return Math.min(incrMin, decrMin);
    }

    public static long ClimbTheHillIncr(int[] heights) {
        int n = heights.length;
        TreeSet<Integer> set = new TreeSet<>();
        for(int i = 0; i < n; i++) set.add(heights[i]);
        int m = set.size();
        long[] nums = new long[m+1];
        int index = 1;
        Iterator<Integer> iter = set.iterator();
        while(iter.hasNext()) nums[index++] = (long) iter.next();

        long[][] dp = new long[n+1][m+1];
        for(int i = 0; i < m + 1; i++) dp[0][i] = nums[i];

        for(int i = 1; i < n + 1; i++) {
            long min = dp[i-1][0];
            for(int j = 0; j < m + 1; j++) {
                min = Math.min(min, dp[i-1][j]);
                dp[i][j] = Math.abs(heights[i-1] - nums[j]) + min;
            }
        }
        long result = dp[n][1];
        for(int j = 2; j <= m; j++) result = Math.min(result, dp[n][j]);
        return result;
    }
}
```

#### Space Optimization

> Since dp[i][j] depond on dp[i-1][j], we could compress 2D dp into 1D dp

> space complexity after optimization is O(n)

```java
public static long ClimbTheHillIncr(int[] heights) {
    int n = heights.length;
    TreeSet<Integer> set = new TreeSet<>();
    for(int i = 0; i < n; i++) set.add(heights[i]);
    int m = set.size();
    long[] nums = new long[m+1];
    int index = 1;
    Iterator<Integer> iter = set.iterator();
    while(iter.hasNext()) nums[index++] = (long) iter.next();
    // optimization start here
    long[] dp = new long[m+1];
    for(int i = 0; i < m + 1; i++) dp[i] = nums[i];

    for(int i = 1; i < n + 1; i++) {
        long min = dp[0];
        for(int j = 0; j < m + 1; j++) {
            min = Math.min(min, dp[j]);
            dp[j] = Math.abs(heights[i-1] - nums[j]) + min;
        }
    }
    long result = dp[1];
    for(int j = 2; j <= m; j++) result = Math.min(result, dp[j]);
    return result;
}
```



