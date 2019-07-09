---
layout: post
title:  "Leetcode Tree Note"
date:   2019-07-09 18:30:00 +0800
categories: [Leetcode-Tree]
---
### Binary Tree
#### Defination of TreeNode
```java
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    public TreeNode( int x) {
        this.val = x;
    }
}
```

#### Traversal of Binary Tree

- DFS
    - pre-order traversal
        - root --> left --> right
        - root --> right --> left
    - post-order traversal
        - left --> right --> root
        - right --> left --> root
    - in-order traversal
        - left --> root --> right
        - right --> root --> left
- BFS
    - use queue level by level traversal
