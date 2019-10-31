---
layout: post
title:  "C# Data Structure"
date:   2019-10-30 20:30:00 +0800
categories: [Data-Structure]
---

##### Array

```java
// init
string[] keys = { "a", "b", "c", "d" };
int[] values = { 1, 2, 3, 4 };
string[] test = new string[3] {"some", "test", "case"};
// sort
Array.Sort(test);
Array.Reverse(test);
// iterate
foreach(var elem in test) {
    Console.WriteLine("array after sort: " + elem);
}
// multiple dimension array
int[,] matrix = new int[3,2];
for(var i = 0; i < matrix.GetLength(0); i++) {
    for(var j = 0; j < matrix.GetLength(1); j++) {
        Console.Write(matrix[i,j] + " ");
    }
    Console.WriteLine();
}
```

##### ArrayList

```java
List<string> arrayList = new List<string> ();
foreach (var key in keys) {
    arrayList.Add (key);
}
foreach (var elem in arrayList) {
    Console.WriteLine ("elem: " + elem);
}
arrayList.Add ("e");
Console.WriteLine ("arrayList capacity: " + arrayList.Capacity);
Console.WriteLine ("arrayList size: " + arrayList.Count);
Console.WriteLine ("arrayList[2]: " + arrayList[2]);
arrayList.Add ("b");
arrayList.Add ("a");
arrayList.Sort(new StringComparer());
arrayList.Reverse();
foreach(var key in arrayList) {
    Console.WriteLine("arraylist after sort: " + key);
}
```

##### LinkedList

```java
LinkedList<string> linkedList = new LinkedList<string> (keys);
var cur = linkedList.First;
while(cur != null) {
    Console.WriteLine("elem in LinkedList: " + cur.Value);
    cur = cur.Next;
}

ListNode node = new ListNode(1);
node.next = new ListNode(2);
while(node != null) {
    Console.WriteLine("list node: " + node.val);
    node = node.next;
}

// the Next pointer of LinkedListNode is readonly
LinkedListNode<string> dummy = new LinkedListNode<string>("");
```

##### String and StringBuilder

```java
// String, ToUpper(), ToLower(), Trim(), ToCharArray(),
string text = "this is a text! ";
Console.WriteLine("string length is: " + text.Length + ", text substring(0,10): " + text.Substring(0,10));
string[] words = text.Trim().Split(new char[]{' '});
foreach(var word in words) {
    Console.WriteLine("word: " + word);
}

// StringBuilder
StringBuilder sb = new StringBuilder();
sb.Append('c');
sb.Append('a');
sb.Append("se");
Console.WriteLine("stringbuilder, length is: " + sb.Length + ", text: " + sb.ToString());
```

##### HashMap

```java
Dictionary<string, int> map = new Dictionary<string, int>();
for (var i = 0; i < keys.Length; i++) {
    map[keys[i]] = values[i];
}
map.Remove (keys[0]);
var keyInMap = map.Keys;
foreach (var key in keyInMap) {
    Console.WriteLine ("key: " + key + ", value: " + map[key]);
}
Console.WriteLine ("contains e ? : " + map.ContainsKey ("e"));
```

##### TreeMap

```java
// TreeMap
string[] newKeys = {"b", "c", "a", "d"};
SortedList<string, int> treeMap = new SortedList<string, int>(new StringComparer());
for (var i = 0; i < newKeys.Length; i++) {
    treeMap[newKeys[i]] = values[i];
}
foreach(var key in treeMap.Keys) {
    Console.WriteLine("treeMap, key: " + key + ", value: " + treeMap[key]);
}
```

##### HashSet

```java
// HashSet
HashSet<string> set = new HashSet<string>();
foreach(var key in newKeys) {
    set.Add(key);
}
Console.WriteLine("set contains d ? : " + set.Contains("d"));
set.Remove("d");
Console.WriteLine("set contains d ? : " + set.Contains("d"));
```

##### TreeSet

```java
// TreeSet
SortedSet<string> treeSet = new SortedSet<string>(new StringComparer());
foreach(var key in newKeys) {
    treeSet.Add(key);
}
foreach(var key in treeSet) {
    Console.WriteLine("treeSet element: " + key);
}
```

##### Stack

```java
Stack<string> stack = new Stack<string>();
foreach(var key in keys) {
    stack.Push(key);
}
while(stack.Count > 0) {
    Console.WriteLine("stack element: "
```

##### Queue

```java
Queue<string> queue = new Queue<string>();
foreach(var key in keys) {
    queue.Enqueue(key);
}

while(queue.Count > 0) {
    Console.WriteLine("queue element: " + queue.Dequeue());
}
```


