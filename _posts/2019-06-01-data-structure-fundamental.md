---
layout: post
title:  "Fundamental Data Structure"
date:   2019-06-06 13:11:10 +0800
categories: [Data-Structure, Time-Complexity, Java]
---
### Time Complexity
* Sign (O)
* Type
   * Best Case
   * Worst Case
   * **Average Case**
* calculation
   * Basic Operations * Times of Basic Operation
   * use of for, while loop, etc.
   * master mathod
      * T(n) = a * T(n / b) + n^c
      * compare log(b)a and c
      * if not equal, then choose the bigger one, the time complexity is n^biggerOne
      * if equal, then O(n^c * log n)

### Array & ArrayList
* predefined length
* memory usage
* index manipulation
* continuous space
* same type elements
* Java API for [**java.util.Arrays**](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html)
    * Arrays.sort(arr) or Arrays.sort(arr, new Comparator<T>(){})， PS could use lambda expression to simplify the comparator, (a,b)->b-a, "->" not "=>"
    * Arrays.asList(1,2,3) or Array.asList(new Integer[]{1,2,3})
    * Arrays.binarySearch(arr,0,10,7), 0 is start index(inclusive), 10 is to Index(exclusive), 7 is the key to search, if found, this method would return a index >= 0, if not, would return a insert index,(-indexToInsert - 1), so to get indexToInsert, should use -returnIndex - 1
    * Arrays.copyOf(arr, newLength)
    * Arrays.copyOfRange(arr, from, to)
    * Arrays.fill(oneDimArr, value)
    * Arrays.hashCode(arr)
    * Arrays.equals(arr1,arr2)
* Java API for [**java.util.ArrayList**](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html)
    * listExample.size()
    * listExample.isEmpty()
    * listExample.get(index)
    * listExample.set(index, value)
    * listExample.add(value) or listExample.add(index, value)(only support index <= size and arraylist type), takes **Amortized Constant Time**
    * listExample.addAll(listExample2);
    * listExample.clear()
    * listExample.clone(), return a shallow copy of arraylist
    * listExample.toArray(new Integer[listExample.size()])
    * listExample.indexOf(value), return first occurrance of the value
    * listExample.lastIndexOf(value), return last occurrance of the value
    * listExample.contains(value), take linear time to find
    * listExample.forEach(e->{System.out.println(e);})
    * listExample.iterator(), could then use hasNext() and next() to access elements, only allow remove elements
    * listExample.listIterator(), has more methods, add, hasNext, hasPrevious,next, nextIndex, previous, previousIndex, remove, set.
    * listExample.sort(Comparator)
    * listExample.subList(from,to)

### LinkedList
* memory usage(pro)
* element access time complexity(con)
* pointers manipulation
* Node Structure
```java
public class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x;}
}
```
* Java API for [java.util.LinkedList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html)
    * list.add(value) or list.add(index, value)
    * list.addAll(Collection<T>)
    * list.addFirst(value) or list.addLast(value)
    * list.get(index) or list.getFirst() or list.getLast()
    * list.push(value)
    * list.pop()
    * list.offer(value) or list.offerFirst(value) or list.offerLast(value)
    * list.poll() or list.pollFirst() or list.pollLast()
    * list.peek() or list.peekFirst() or list.peekLast()
    * list.remove() or list.removeFirst() or list.removeLast() 
    * list.size()
    * list.clone() (shallow copy)
    * list.clear()

### Stack
* LIFO
* implementation 
    * ListNode
    * Array
* **import java.util.Stack;**
* **Stack\<Integer> stack = new Stack\<Integer>();**
* Java API for [java.util.Stack](https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html)
    * stack.peek()
    * stack.push(value)
    * stack.pop()
    * stack.addAll(Collection<T>);
    * stack.search(value), will return a 1 based distance from the top
    * stack.size()
    * stack.empty() or stack.isEmpty()

### Queue
* FILO
* implementation
    * Array
    * ListNode
* **import java.util.LinkedList;**
* **Queue<Integer> queue = new LinkedList<>();** or **Queue<Integer> queue = new LinkedList<>(Collection<T>);**
* is an `interface` not a `class`
* Java API for [java.util.Queue](https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html)
    * LinkedList is an implementation of Queue
    * queue.offer(value)
    * queue.poll()
    * queue.peek()

###Deque(pronounced as 'deck')
* double end queue
* an `interface` not a `class`
* `ArrayDeque` is an implementation of `Deque`
* **import java.util.Deque;**
* **import java.util.ArrayDeque;**
* **Deque<Integer> deque = new ArrayDeque<Integer>();**
* Java API for [java.util.ArrayDeque](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayDeque.html)
    * deque.add(value), deque.addFirst(value) or deque.addLast(value), `add` would return void
    * deque.offer(value) or deque.offerFirst(value) or deque.offerLast(value), `offer` method return a `boolean`, offer will add value at the tail
    * deque.addAll(Collection<T>)
    * deque.getFirst() or deque.getLast(), retrieve **not** remove
    * deque.peek() or deque.peekFirst() or deque.peekLast(), retrieve **not** remove
    * deque.push(value), push at the head,like a stack
    * deque.pop(), pop from the head, like a stack
    * deque.poll() or deque.pollFirst() or deque.pollLast(), retrieve **and** remove, poll would remove value at the head
    * deque.remove() or deque.removeFirst() or deque.removeLast() 
    * deque.size()
    * deque.clone() (shallow copy)
    * deque.clear()

### Tree
* Recursived defined
* Usage
    * File System
    * HTML DOM Tree
* Type
    * Trie Tree
    * B Tree
    * Binary Tree
        * Binary Search Tree
            * RB Tree
            * AVL
    * N-aryTree
* Implementation
    * TreeNode
    * Binary TreeNode
        ```java
        public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
        }
        ```
    * N-ary TreeNode
        ```java
        class Node {
            public int val;
            public List<Node> children;
            public Node() {}

            public Node(int _val,List<Node> _children) {
                val = _val;
                children = _children;
            }
        };
        ```
    * TrieNode
        ```java
        class TrieNode {
            public boolean isWord; 
            public TrieNode[] children;
            public TrieNode() {
                isWord = false;
                children = new TrieNode[26]
            }
        }
        ```
* Terminologies
    * Node
        * root
        * leaf
    * Relation
        * parent node
        * child node
        * sibling node
        * ancestor node
        * subtree
    * Edge
    * Path
    * Height 
    * Depth
    * Level
* Traversal
    * BFS
        * By Level
    * DFS
        * Pre-Order
            * iterative
                * -->
                * <--
            * recursive
                * -->
                * <--
        * In-Order
            * iterative
                * -->
                * <--
            * recursive
                * -->
                * <--
        * Post-Order
            * iterative
                * -->
                * <--
            * recursive
                * -->
                * <--

### Graph
* representation
    * GraphNode
    ```java
    class GraphNode{
        int val;
        List<GraphNode> neighbors;
        public GraphNode(int _val, List<GraphNode> _neighbors) {
            this.val = _val;
            this.neighbors = _neighbors;
        }
    }
    ```
    * Adjacent List or HashMap
    ```java
    Map<String, List<String>> graph = new HashMap<>();
    ```
    * Adjacent Matrix
* Traversal
    * Mark nodes as not visited, visiting and visited  
    * DFS
    * BFS

### Map
* key-value pair data storage
* Implementation
    * Array of LinkedList
* offer **Amortized Constant time** access to elements
* an `interface` not a `class`
* Java API for [java.util.Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)
    * Map.Entry<K,V> entry
    * map.put(key,value) or map.putIfAbsent(key,value) or map.putAll(Map<K,V> map2)
    * map.get(key) or map.getOrDefault(key, defaultValue)
    * map.containsKey()
    * map.containsValue()
    * map.remove(key)
    * map.keySet()
    * map.values()
    * map.entrySet()
    * map.isEmpty()
    * map.size()
    * map.clear()

### HashMap
* Hash table based implementation of the Map interface
* This class makes **no guarantees** as to the **order** of the map; in particular, it does **not guarantee** that the order will remain **constant** over time.
* The HashMap class is roughly equivalent to Hashtable, except that it is unsynchronized and permits nulls.
* >This implementation provides **constant-time** performance for the basic operations (get and put), assuming the hash function **disperses the elements properly** among the buckets. Iteration over collection views requires time proportional to the "capacity" of the HashMap instance (**the number of buckets**) **plus** its size (**the number of key-value mappings**). Thus, it's very important not to set the initial capacity too high (or the load factor too low) if iteration performance is important.
* Initial capacity and Load factor affect its performance
* >When the number of entries in the hash table exceeds the product of the load factor and the current capacity, the hash table is **rehashed** (that is, internal data structures are **rebuilt**) so that the hash table has approximately **twice** the number of buckets.
* the default load factor (.75) offers a good tradeoff between time and space costs.
    * >**Higher values** decrease the **space overhead** but increase the **lookup cost** (reflected in most of the operations of the HashMap class, including get and put). 
    * >The **expected number of entries** in the map and its **load factor** should be taken into account when **setting its initial capacity**, so as to minimize the number of rehash operations. If the initial capacity is greater than the maximum number of entries divided by the load factor, no rehash operations will ever occur.
* Note that using many keys with the same hashCode() is a sure way to slow down performance of any hash table. To ameliorate impact, when keys are Comparable, this class may use comparison order among keys to help break ties.
* Java API for [java.util.HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html)
    * not synchronized, it must be synchronized externally
    * methods inherited from Map

### HashTable
* This class implements a hash table, which maps keys to values. Any **non-null** object can be used as a key or as a value.
* the objects used as keys must implement the **hashCode** method and the **equals** method.
* Hashtable is synchronized
    * > If a thread-safe implementation is **not needed**, it is recommended to use **[HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html)** in place of Hashtable.
    * > If a thread-safe **highly-concurrent** implementation is desired, then it is recommended to use **[ConcurrentHashMap](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html)** in place of Hashtable.
* Java API for [java.util.HashTable](https://docs.oracle.com/javase/8/docs/api/java/util/Hashtable.html)
    * methods inherited from Map

### ConcurrentHashMap
* A hash table supporting full concurrency of retrievals and high expected concurrency for updates
* **However**, even though all operations are **thread-safe**, retrieval operations **do not entail locking**, and there is not any support for locking the entire table in a way that prevents all access
* Retrievals reflect the results of the **most recently completed** update operations holding upon their onset
* Iterators are designed to be used by only one thread at a time
* Java API for [java.util.concurrent.ConcurrentHashMap](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html)
    * This class and its views and iterators implement all of the optional methods of the Map and Iterator interfaces.
    * Like Hashtable but unlike HashMap, this class does not allow null to be used as a key or value.
    * ConcurrentHashMaps support a set of **sequential and parallel** bulk operations that, unlike most Stream methods, are designed to be **safely**, and often **sensibly**, applied even with maps that are being **concurrently updated** by other threads
    
### LinkedHashMap
* `public class LinkedHashMap<K,V> extends HashMap<K,V>
implements Map<K,V>`
* **Hash table** and **linked list** implementation of the Map interface, with **predictable iteration order**
* >This implementation differs from HashMap in that it **maintains** a **doubly-linked list** running through all of its entries. This linked list defines the iteration ordering, which is normally the order in which keys were inserted into the map (insertion-order). Note that insertion order is not affected if a key is re-inserted into the map.
* This technique is particularly useful if a module takes a map on input, copies it, and later returns results whose order is determined by that of the copy. 
`Map<K,V> copy = new LinkedHashMap<K,V>(mapExample);` 
* Order Guarranted
    * Default Insertion Order
    * Access Order
        * >A special constructor is provided to create a linked hash map whose order of iteration is the order in which its entries were **last accessed**, from least-recently accessed to most-recently (access-order). This kind of map is well-suited to building **LRU** caches. Invoking the **put, putIfAbsent, get, getOrDefault, compute, computeIfAbsent, computeIfPresent, or merge** methods results in an access to the corresponding entry (assuming it exists after the invocation completes). The **replace** methods **only** result in an access of the entry **if the value is replaced**. 
        * >`public LinkedHashMap(int initialCapacity,float loadFactor,boolean accessOrder)`
        * >accessOrder - the ordering mode, true for access-order, false for insertion-order
* The **removeEldestEntry(Map.Entry)** method may be overridden to impose a policy for removing stale mappings automatically when new mappings are added to the map.
    ```java
    private static final int MAX_ENTRIES = 100;
    protected boolean removeEldestEntry(Map.Entry eldest) {
        return size() > MAX_ENTRIES;
        }
    ```
    * This method typically **does not modify the map in any way**, instead allowing the map to **modify itself** as directed by its **return value**. It is permitted for this method to modify the map directly, but if it does so, it must return **false**(indicating that the map should not attempt any further modification).
    * This implementation merely returns false (so that this map acts like a normal map - the eldest element is never removed).
    * **eldest** - The **least recently** inserted entry in the map, or if this is an access-ordered map, the least recently accessed entry. This is the entry that will be removed it this method returns true. If the map was empty prior to the put or putAll invocation resulting in this invocation, this will be the entry that was just inserted; in other words, if the map contains a single entry, the eldest entry is also the newest.
* Performance
    * This class provides all of the optional Map operations, and permits null elements.
    * Like HashMap, it provides **constant-time performance** for the basic operations (add, contains and remove), assuming the hash function disperses elements properly among the buckets.
    * Performance is likely to be just **slightly below** that of HashMap, due to the added expense of maintaining the linked list
    * Iteration over the collection-views of a LinkedHashMap requires time proportional to **the size of the map**, regardless of its capacity. Iteration over a **HashMap** is likely to be **more expensive**, requiring time proportional to its capacity.
    * initial capacity and load factor influence the performance, however, that the penalty for choosing an excessively high value for initial capacity is less severe for this class than for HashMap, as iteration times for this class are unaffected by capacity.
* implementation is not synchronized.
* In **insertion-ordered** linked hash maps, **merely changing the value** associated with a key that is already contained in the map **is not** a structural modification. In **access-ordered** linked hash maps, **merely querying** the map with get **is** a structural modification
* Java API for [java.util.LinkedHashMap](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashMap.html)
    * constructor for accesss order, `LinkedHashMap(int initialCapacity, float loadFactor, boolean accessOrder)`
    * Methods inherited from Map
    * protected boolean	removeEldestEntry(Map.Entry<K,V> eldest)




                     









