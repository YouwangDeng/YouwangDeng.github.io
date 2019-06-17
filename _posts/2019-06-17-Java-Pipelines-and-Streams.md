---
layout: post
title:  "Java Pipelines and Streams"
date:   2019-06-17 18:30:00 +0800
categories: [Java, Data-Structure]
---
### Pipelines and Streams

>A pipeline is a sequence of **aggregate operations**

#### Examples

```java
public class Person {

    public enum Sex {
        MALE, FEMALE
    }

    String name;
    LocalDate birthday;
    Sex gender;
    String emailAddress;
    
    // ...

    public int getAge() {
        // ...
    }

    public String getName() {
        // ...
    }
}
```

> The following example prints the male members contained in the collection roster with a pipeline that consists of the aggregate operations filter and forEach, compared with for-each code

```java
//pipeline
roster
    .stream()
    .filter(e -> e.getGender() == Person.Sex.MALE)
    .forEach(e -> System.out.println(e.getName()));
//for-each loop
for (Person p : roster) {
    if (p.getGender() == Person.Sex.MALE) {
        System.out.println(p.getName());
    }
}
```

### pipeline components
- A **source**: This could be a `collection`, `an array`, a `generator function`, or an `I/O channel`. 
- Zero or more **intermediate operations**. An intermediate operation, such as filter, **produces a new stream**. **A `stream` is a sequence of elements. Unlike a collection, it is not a data structure that stores elements.** Instead, **a stream carries values from a source through a `pipeline`.** This example creates a stream from the collection roster by invoking the method `stream`.
- A **terminal operation**. A terminal operation, such as forEach, **produces a `non-stream` result**.

#### Another Example

```java
double average = roster
    .stream()
    .filter(p -> p.getGender() == Person.Sex.MALE)
    .mapToInt(Person::getAge)
    .average()
    .getAsDouble();
```

### Differences Between Aggregate Operations and Iterators
- Aggregate operations use internal iteration. With **internal iteration**, your application determines what collection it iterates, but the **JDK determines how to iterate the collection**. With **external iteration**, your application determines both what collection it iterates and how it iterates it. Internal iteration can **more easily** take advantage of `parallel computing`, which involves **dividing a problem into subproblems, solving those problems simultaneously, and then combining the results of the solutions to the subproblems**.
- Aggregate operations process elements from a stream, it process elements from a stream, not directly from a collection.
- Aggregate operations support **behavior as parameters**, you can specify `lambda expressions` as parameters for most aggregate operations.

