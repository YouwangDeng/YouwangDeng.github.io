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

- Spring Core Module
    >Provides the `IoC container`, there are two types of implementations of the Spring container, namely, `bean factory` and `application context`. The Bean factory container allows you to `decouple the configuration and specification of dependencies` from program logic. In the Spring framework, the Bean factory acts as a `central IoC container` that is responsible for `instantiating application objects`. It also `configures and assembles` the `dependencies` between these objects. 
- Spring AOP Module
    >Spring AOP module allows you to implement `concerns or aspects` in a Spring application in Spring AOP, the aspects are the regular `Spring beans` or `regular classes` annotated with `@Aspect` annotation. 
- Spring ORM Module
    >Used for `accessing data` from databases in an application. It provides APIs for manipulating databases with `DAO, JDO, Hibernate, and iBatis`. 
- Spring Web MVC Module
    >It implements the `MVC architecture` for creating Web applications.
- Spring Web Flow Module
    >The Spring Web Flow helps in `defining XML file` or `Java Class` that `manages the workflow` between `different pages` of a Web application.
- Spring Web DAO Module
    >Provides `DAO support` by using data access technologies such as JDBC, Hibernate, or JDO. This module introduces a `JDBC abstraction layer` by eliminating the need for providing tedious JDBC coding.
- Spring Application Context Module
    >Based on the Core module, this module derives its feature from the `org.springframework.beans` package and also supports functionalities such as `internationalization, validation, event propagation, and resource loading`. The Application context implements `MessageSource interface` and provides the `messaging functionality` to an application.

### Spring MVC

![spring mvc](https://github.com/YouwangDeng/YouwangDeng.github.io/raw/master/static/img/_posts/spring_mvc.png)

> In Spring MVC, when a `Request` is generated from the browser, it first goes to the `DispatcherServlet` class (Front Controller), which dispatches the request to a `Controller` (SimpleFormController class or AbstractWizardformController class) using a set of `Handler Mappings`. The controller extracts and processes the information embedded in a request and sends the result to the DispatcherServlet class in the form of the model object. Finally, the DispatcherServlet class uses `ViewResolver` classes to send the results to a `View`, which displays these results to the users.
