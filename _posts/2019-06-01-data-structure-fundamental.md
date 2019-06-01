---
layout: post
title:  "Fundamental Data Structure"
date:   2019-06-01 13:11:10 +0800
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
* Java API
    * Arrays.sort(arr) or Arrays.sort(arr, new Comparator<T>(){})， PS could use lambda expression to simplify the comparator, (a,b)->b-a, "->" not "=>"
    * Arrays.asList(1,2,3) or Array.asList(new Integer[]{1,2,3})
    * Arrays.binarySearch(arr,0,10,7), 0 is start index(inclusive), 10 is to Index(exclusive), 7 is the key to search, if found, this method would return a index >= 0, if not, would return a insert index,(-indexToInsert - 1), so to get indexToInsert, should use -returnIndex - 1
    * Arrays.copyOf(arr, newLength)
    * Arrays.copyOfRange(arr, from, to)
    * Arrays.fill(oneDimArr, value)
    * Arrays.hashCode(arr)
    * Arrays.equals(arr1,arr2)

