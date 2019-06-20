---
layout: post
title:  "Enterprise Java Beans (EJB)"
date:   2019-06-20 18:30:00 +0800
categories: [Java, Spring, Spring-MVC]
---
### Spring Framework
> Spring uses various new techniques such as Aspect-Oriented Programming (`AOP`), Plain Old Java Object (`POJO`), and dependency injection (`DI`), to develop enterprise applications, thereby `removing the complexities` involved while developing enterprise applications using EJB

> Spring mainly focuses on `providing` various `ways` to help you `manage your business objects`

> The Spring framework can be considered as `a collection of sub-frameworks`, also called layers, such as `Spring AOP`, Spring Object-Relational Mapping (`Spring ORM`). `Spring Web Flow`, and `Spring Web MVC`

### Spring Framework Features
- Lightweight
    >The Spring Framework is very lightweight with respect to its size and functionality. It is due to its `POJO implementation` which doesn’t force to inherit any class or implement any interfaces.
- Aspect Oriented Programming(AOP)
    >It is an important part of Spring Framework. `Aspect Oriented Programming` is used for `separating cross-cutting concerns` (for example logging, security etc.) from the business logic of the application.
- Transaction Management
    >This framework provides Java Transaction API (`JTA`) for `global transactions` managed by an application server and local transactions managed by using the JDBC, Hibernate, Java Data Objects (JDO), or other data access APIs. 
- IoC container
    >Refers to the `core container` that uses the `DI or IoC` pattern to implicitly provide an `object reference` in a class `during runtime`, help manage the `lifecycle` and `configurations` of application objects.
- Dependency Injection
    >Dependency Injection is a feature of Spring Framework allows you to develop loosely coupled applications. Therefore, the unit testing of these loosely coupled applications becomes easier. 

    ```java
    //without DI
    public class TextEditor {
        private SpellChecker spellChecker;
        public TextEditor() {
            spellChecker = new SpellChecker();
        }
    }
    //with DI
    public class TextEditor {
        private SpellChecker spellChecker;
            public TextEditor(SpellChecker spellChecker) {
            this.spellChecker = spellChecker;
        }
    }
    ```
### Spring Framework Architecture

![spring framework](https://github.com/YouwangDeng/YouwangDeng.github.io/raw/master/static/img/_posts/Spring-Framework-Architecture.png)

- 