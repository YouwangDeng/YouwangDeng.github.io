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
    - `combine`, be carful about the `end(null)` of the LinkedList
    - `rotate` the list by k steps, invloved with building a loop and cut a loop
- advanced operations
    - reverse `by group or length`, use `pre`(only change next pointer), `subTail`(only change next pointer), `Temp`(keep moving), `reverse pointer between subTail and Temp`, `insert Temp after pre`
    - whenever use a dummy node, means use two nodes, `ListNode dummy = new ListNode(-1); ListNode iter = dummy;`
    - remember to cut the tail at the end of LinkedList, `cur.next = null;`
    - use `recursion` and `HashMap` to `deep copy` a LinkedList