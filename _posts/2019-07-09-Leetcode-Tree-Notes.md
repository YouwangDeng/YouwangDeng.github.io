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

#### Binary Search Tree

- in order
- in-order traversal return a sorted array
- use global pointer in recursive solution
- math related problem usally related with recursively tree structure, should analyze from one node to n nodes

#### construct binary tree
- from pre-order and in-order array
    - recursively solution
- form post-order and in-order array
    - recursively solution
- build balanced BST from a sorted array
    - binary divided
- build balanced BST from a sorted LinkedList
    - cut at middle

#### Segment Tree

```java
static class SegmentTreeNode {
    private int begin;
    private int end;
    private int sum;
    private SegmentTreeNode left;
    private SegmentTreeNode right;

    public SegmentTreeNode(int begin, int end, int sum) {
        this.begin = begin;
        this.end = end;
        this.sum = sum;
    }
    public SegmentTreeNode(int begin, int end) {
        this(begin, end, 0);
    }
}
// build the tree
private static SegmentTreeNode buildTree(int[] nums, int begin, int end) {
    if (nums == null || nums.length == 0 || begin >= end)
        return null;
    if (begin == end - 1) // one element
        return new SegmentTreeNode(begin, end, nums[begin]);

    final SegmentTreeNode root = new SegmentTreeNode(begin, end);
    final int middle = begin + (end - begin) / 2;
    root.left = buildTree(nums, begin, middle);
    root.right = buildTree(nums, middle, end);
    root.sum = root.left.sum + root.right.sum;

    return root;
}
// update the tree
private static void updateHelper(SegmentTreeNode root, int i, int val) {
    if (root.begin == root.end - 1 && root.begin == i) {
        root.sum = val;
        return;
    }

    final int middle = root.begin + (root.end - root.begin) / 2;
    if (i < middle) {
        updateHelper(root.left, i, val);
    } else {
        updateHelper(root.right, i, val);
    }

    root.sum = root.left.sum + root.right.sum;
}

// sum a range
private static int sumRangeHelper(SegmentTreeNode root, int begin, int end) {
    if (root == null || begin >=root.end || end <= root.begin)
        return 0;
    if (begin <= root.begin && end >= root.end)
        return root.sum;

    final int middle = root.begin + (root.end - root.begin) / 2;
    return sumRangeHelper(root.left, begin, Math.min(end, middle)) +
            sumRangeHelper(root.right, Math.max(middle, begin), end);
}
```

