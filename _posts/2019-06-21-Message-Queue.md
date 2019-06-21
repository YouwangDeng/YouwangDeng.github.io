---
layout: post
title:  "Message Queue Introduction"
date:   2019-06-21 18:30:00 +0800
categories: [Java, Message-Queue]
---
### Message Queue
>Message queues provide an `asynchronous communications protocol`, meaning that the sender and receiver of the message do not need to interact with the message queue at the same time. 

>Most messaging systems support both the `publisher/subscriber` and message queue models in their API

### Features of Message Queue

Messages are `queued asynchronously` between applications and systems.

- Multiple `providers` can `post messages` to a queue
- There can be multiple message `consumers` attached to a `single queue`
- The queuing infrastructure ensures messages are delivered `exactly once`
- Messages can be `successfully submitted` to a queue even if the message consumer(s) for that queue are not running or are `unreachable`

Benefits

- **`Scalability`**
- **`Reliability`**
- **`Abstraction`** since producers and consumers aren't directly interconnected

### Implementation
>There are a number of open source choices of messaging middleware systems, including Apache `ActiveMQ`, Apache `Kafka`,  Apache `RocketMQ`,  `RabbitMQ`, etc.

### JMS VS AMQP
#### JMS
>The `Java Message Service` (JMS) API is a `Java` Message Oriented Middleware (`MOM`) API for sending messages between `two or more clients`. JMS is a part of the `Java Platform`. It is a `messaging standard` that allows application components based on the Java Enterprise Edition (`Java EE`) to create, send, receive, and read messages. It allows the communication between different components of a distributed application to be `loosely coupled`, `reliable`, and `asynchronous`.
#### AMQP
>The `Advanced Message Queuing Protocol` (AMQP) is an `open standard ` **`wire-level protocol`** `for message-oriented middleware. The defining features of AMQP are `message orientation`, `queuing`, `routing` (including `point-to-point` and `publish-and-subscribe`), reliability and security.

>JMS is API and AMQP is a protocol. JMS is only a API spec. It doesn't use any protocol. A JMS provider (like ActiveMQ) could be using any underlying protocol to realize the JMS API.



