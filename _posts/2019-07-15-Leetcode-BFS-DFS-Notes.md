---
layout: post
title:  "Leetcode BFS & DFS Note"
date:   2019-07-15 20:30:00 +0800
categories: [Leetcode-BFS, Leetcode-DFS,Leetcode-Array, Leetcode-ArrayList, Leetcode-LinkedList, Algorithm]
---
### Breadth First Search
- use queue to cache data
- use queue.size() to mark level
- use level to store result
- use hashset to store visited elements

### Depth First Search
- the entry point of loop or recursion is most important
- return condition(cut branches)
- backtracking(brute force)
- the problem could use DFS, consider using DP to reduce time complexity and space complexity
- cache array & DFS = top-down approach
- cache array & nested for loop = DP, bottom-up approach
- N-Queens, diagnal(diag[row - j + N - 1] is true or false) and anti-diagnal check(antiDiag[row + j] is true or false)