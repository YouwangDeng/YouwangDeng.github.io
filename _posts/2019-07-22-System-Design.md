---
layout: post
title:  "System Design"
date:   2019-07-22 20:30:00 +0800
categories: [System-Design]
---
### Distributed ID generator
- Needs
    - unique
    - sorted by time
    - as short as possible

### TinyURL 
- Needs
    - longURL to tinyURL
- Solutions
    - length of tinyURL(7)
    - encode way(26 + 26 + 10)
    - one longURL to multiple shortURL
    - hash longURL to get 64-bits integer
    - storage(short:long pairs)
    - 301 or 302 redireaction (302)
    - hacker attack( massive request will run out of available IDs)
        - use long:short pairs to generate LRU cache(1 day), return short URL if run out of capacity

### Task Scheduler
- Needs 
    - multiple tasks with timestamp
- Solutions
    - PriorityBlockingQueue + Polling
    - DelayQueue + Producer + Consumer
    - HashedWheelTimer
### News Feed
- Needs

### API rate limiting
- Needs
    - limit each user api request to 1000/min

### Synchronized HashMap
- Needs 
    - design a thread safe HashMap
- Solutions
    - add a global lock to HashMap(HashTable)
    - add a lock to each bucket in HashMap
    - category buckets to 16 segments, add a lock to each segment(java.util.concurrent.ConcurrentHashMap implementation in JDK 7)
    - when the length of LinkedList in each bucket exceed 8, rebuild the LinkedList to a Red-Black Tree(java.util.concurrent.ConcurrentHashMap implementation in JDK 8)

### TOP 10 IP visiting during recent 1 hour
- Needs
    - get the top 10 visiting IP in recent 1 hour
    - request rate: 100 k / sec
### Design a Load Balancer
- 