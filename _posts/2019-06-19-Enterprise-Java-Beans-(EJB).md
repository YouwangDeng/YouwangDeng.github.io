---
layout: post
title:  "Enterprise Java Beans (EJB)"
date:   2019-06-19 20:30:00 +0800
categories: [Java]
---
### EJB

EJB is a server-side software element that summarizes business logic of an application

>`Enterprise Java Beans` web repository yields a `runtime domain` for web related software elements including `computer reliability`, `Java Servlet Lifecycle (JSL) management`, `transaction procedure` and other `web services`.

### Types

- **Session Bean**: Session bean contains business logic that can be invoked by local, remote or webservice client.
- **Message Driven Bean**: Like Session Bean, it contains the business logic but it is invoked by passing message.
- **Entity Bean**: It summarizes the state that can be remained in the database. It is deprecated. Now, it is replaced with JPA (Java Persistent API).

### When to use Enterprise Java Beans
- Application needs `Remote Access`. In other words, it is `distributed`.
- Application needs to be `scalable`. EJB applications supports `load balancing`, `clustering` and `fail-over`.
- Application needs `encapsulated business logic`. EJB application is differentiated from demonstration and persistent layer.



