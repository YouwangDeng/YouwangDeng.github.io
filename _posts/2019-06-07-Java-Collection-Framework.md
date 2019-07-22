---
layout: post
title:  "Java Collection Framework"
date:   2019-06-07 13:30:00 +0800
categories: [Data-Structure, Time-Complexity, Java]
---
### [The Collections Framework](https://docs.oracle.com/javase/8/docs/technotes/guides/collections/index.html)
* A collection — sometimes called a **container** — is simply an object that groups multiple elements into a single unit. Collections are used to **store, retrieve, manipulate, and communicate aggregate data**. 
* a unified architecture for representing and manipulating collections, enabling them to be **manipulated independently** of the **details** of their representation
* Content
    * **Interfaces**
        >These are **abstract data types** that represent collections. Interfaces allow collections to be manipulated independently of the details of their representation. In **object-oriented** languages, interfaces generally **form a hierarchy**.
    * **Implementations** 
        >These are the **concrete implementations** of the collection interfaces. In essence, they are reusable data structures.
    * **Algorithms**
        >These are the methods that perform useful computations, such as **searching and sorting**, on objects that implement collection interfaces
* Interface Hierachy

    ![interface](https://github.com/YouwangDeng/YouwangDeng.github.io/raw/master/static/img/_posts/java_collection_interface.png)

* Full Hierachy
    
    ![hierachy](https://github.com/YouwangDeng/YouwangDeng.github.io/raw/master/static/img/_posts/java-collection-hierachy.jpg)

* Implementation

    ![implementation](https://github.com/YouwangDeng/YouwangDeng.github.io/raw/master/static/img/_posts/java_collection_general_purpose_implementation.png)

* Algorithms
    * sorting
        >Collections.sort(list); or Collections.sort(list, Comparator);
    * shuffling
        ```java
        public static void shuffle(List<?> list, Random rnd) {
            for (int i = list.size(); i > 1; i--) {
                swap(list, i - 1, rnd.nextInt(i));
            }
        }
        ```
        >Collections.shuffle(list); or Collections.shuffle(list, new Random());
    * Routine Data Manipulation
        * reverse
            >reverses the order of the elements in a List.
        * fill
            >overwrites every element in a List with the specified value. This operation is useful for reinitializing a List.
        * copy
            >takes two arguments, a destination List and a source List, and copies the elements of the source into the destination, overwriting its contents. The destination List must be at least as long as the source. If it is longer, the remaining elements in the destination List are unaffected.
        * swap
            >swaps the elements at the specified positions in a List.
        * addAll
            >adds all the specified elements to a Collection. The elements to be added may be specified individually or as an array.
    * Searching
        >Collections.binarySearch(list, key);

        >If the List contains the search key, its index is returned. If not, the return value is (-(insertion point) - 1)
        
        