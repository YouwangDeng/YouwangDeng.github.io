---
layout: post
title:  "Union Find and Optimization"
date:   2019-09-14 20:30:00 +0800
categories: [Algorithm, Interview, Java]
---

#### Union Find

> Union Find is an effective algorithm to deal with group problem, such as connect a bunch of elements into a group, and then count how many group remains.

> Basic Union Find algrithm would take O(n) to union two element

> Union Find uses union-by-size would take O(log(n)) to union two element

> Union Find use union-by-size and path compression would take amortized O(1) time to union two element

#### Basic Union Find

```java
class UnionFind {
    private int count;
    private int[] parent;

    public UnionFind(int n) {
        count = n;
        for(int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }

    //O(n)
    public int find(int i) {
        while(i != parent[i]) i = parent[i];
        return i;
    }

    // O(n)
    public void union(int i, int j) {
        int root_i = find(i);
        int root_j = find(j);
        if(root_i == root_j) return;
        parent[root_i] = root_j;
        count--;
    }

    public int count() {
        return count;
    }
}

```

#### Union Find(union by size)

```java
class UnionFind {
    private int count;
    private int[] parent;
    private int[] size;

    public UnionFind(int n) {
        count = n;
        for(int i = 0; i < n; i++) {
            parent[i] = i;
            size[i] = 1;
        }
    }

    //O(log(n))
    public int find(int i) {
        while(i != parent[i]) i = parent[i];
        return i;
    }

    // O(log(n))
    public void union(int i, int j) {
        int root_i = find(i);
        int root_j = find(j);
        if(root_i == root_j) return;
        // union by size
        if(size[root_i] > size[root_j]) {
            parent[root_j] = root_i;
            size[root_i] += size[root_j];
        } else {
            parent[root_i] = root_j;
            size[root_j] += size[root_i];
        }
        count--;
    }

    public int count() {
        return count;
    }
}
```

#### Union Find(union by size && path compression)

```java
class UnionFind {
    private int count;
    private int[] parent;
    private int[] size;

    public UnionFind(int n) {
        count = n;
        for(int i = 0; i < n; i++) {
            parent[i] = i;
            size[i] = 1;
        }
    }

    //O(1)
    public int find(int i) {
        while(i != parent[i]) {
            // path compression
            parent[i] = parent[parent[i]];
            i = parent[i];
        }
        return i;
    }

    // O(1)
    public void union(int i, int j) {
        int root_i = find(i);
        int root_j = find(j);
        if(root_i == root_j) return;
        // union by size
        if(size[root_i] > size[root_j]) {
            parent[root_j] = root_i;
            size[root_i] += size[root_j];
        } else {
            parent[root_i] = root_j;
            size[root_j] += size[root_i];
        }
        count--;
    }

    public int count() {
        return count;
    }
}
```