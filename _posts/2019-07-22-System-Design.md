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

