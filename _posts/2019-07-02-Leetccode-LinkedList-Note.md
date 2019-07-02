---
layout: post
title:  "Leetcode LinkedList Note"
date:   2019-07-02 18:30:00 +0800
categories: [Leetcode-LinkedList]
---
### LinkedList - `node pointer` data structure

#### Defination

```java
public class ListNode {
    int val;
    ListNode next;
    public ListNode(int _val) {
        this.val = _val;
        this.next = null;
    }
    public ListNode(int _val, ListNode _next) {
        this.val = _val;
        this.next = _next;
    }
}
```
#### Notes
- 