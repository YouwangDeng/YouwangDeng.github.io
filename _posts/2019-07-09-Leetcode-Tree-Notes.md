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

- Recursively traversal
- Iteratively traversal
    - pre-order
        - use stack
            1. push root into stack
            2. while stack is not empty do: pop element and visit it, push `right` node into stack if `not null`, push `left` node into stack if `not null`
    - in-order
