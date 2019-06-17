---
layout: post
title:  "High Performance Redis"
date:   2019-06-17 19:30:00 +0800
categories: [Redis, NoSQL]
---
### Redis
Redis is an in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams. 

### High Performance
- Programming Language(C)
- In-Memory Store and Access
- Single Thread
- I/O Multiplexing Model

### Redis I/O Multiplexing Model
- Regular Blocking I/O
    ![Blocking I/O](https://github.com/YouwangDeng/YouwangDeng.github.io/raw/master/static/img/_posts/blocking_io.jpg)
- Non-blocking, Multiplexing I/O

    >Redis takes great advantage of the non-blocking, multiplexing I/O model in its main processing single thread

    ![Multiplexing I/O](https://github.com/YouwangDeng/YouwangDeng.github.io/raw/master/static/img/_posts/multiplexing_io.png)
- Redis Reactor Pattern

    > Redis contains a simple but powerful asynchronous event library called ae to wrap different operating system's polling facilities, such as epoll, kqueue, select, and so on.

    > Take the `epoll` API in Linux as an example. First, you can call `epoll_create` to tell the kernel that you would like to use epoll. Then, you call `epoll_ctl` to tell the kernel the file descriptors (FD) and what type of event you're interested in when an update occurs. After that, `epoll_wait` gets called to wait for certain events of the FDs you set in epoll_ctl. The kernel will send a notification to you when the FDs get updated. The only thing you have to do is to **create handlers for certain events.**

    ![Reactor Pattern](https://github.com/YouwangDeng/YouwangDeng.github.io/raw/master/static/img/_posts/redis_reactor_pattern.jpg)
    I/O Multiplexing Module
    ![I/O multiplexing model](https://github.com/YouwangDeng/YouwangDeng.github.io/raw/master/static/img/_posts/ae_library.jpg)

### [Disadvantage of Redis compared with RDBMS](https://stackoverflow.com/questions/10906246/what-is-the-disadvantage-of-just-using-redis-instead-of-an-rdbms)

- Redis is an **in-memory** store: all your data must **fit** in memory. RDBMS usually stores the data on disks, and cache part of the data in memory. With a RDBMS, you can manage **more data** than you have memory. With Redis, you cannot.
- Redis is a data structure server. There is **no query language (only commands)** and **no support for a relational algebra**. You cannot submit ad-hoc queries (like you can using SQL on a RDBMS). All data accesses should be anticipated by the developer, and proper data access paths must be designed. A lot of **flexibility is lost**.
- Redis offers 2 options for **persistency**: regular snapshotting and append-only files. None of them is as secure as a real transactional server providing redo/undo logging, block checksuming, point-in-time recovery, flashback capabilities, etc.
