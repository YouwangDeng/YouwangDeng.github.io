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
    - use recursive method and update the level state

- Recursively traversal
- Iteratively traversal
    - pre-order
        - use stack
            1. push root into stack
            2. while stack is not empty do: pop element and visit it, p = pop(), push `p.right` node into stack if `not null`, push `p.left` node into stack if `not null`
        - Morris Algorithm
    - in-order
        - use stack
            1. p = root
            2. while stack is not empty || p is not null do: if(p) push p into stack, p = p.left; else pop element from stack and visit it, p = p.right
        - Morris Algorithm
    - post-order
        - use stack
            1. push root into stack, pre = null
            2. while stack is not empty do: cur = stack.peek(), case one: pre is null || pre.left == cur || pre.right == cur,  then if(cur.left), push cur.left, if(cur.right) push cur.right, else pop and visit that elemet; case two: cur.left = pre, if(cur.right), push cur.right else pop and visit that element; case three: cur.right = pre, just pop and visit that element; pre = cur and re-enter loop
        
