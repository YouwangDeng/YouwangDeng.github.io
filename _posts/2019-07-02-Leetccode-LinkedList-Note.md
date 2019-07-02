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
- use `pointers` to manipulate LinkedList 
- `pre`, `cur`, `next`
- figure out the `time` and `order` to update those pointers
- `dummy node` to simplify `modification`
- basic operations
    - `reverse`(pre, cur, next)
    - `reorder`(dummy), be careful about the next pointer of each node element