---
layout: post
title:  "Introduction to Java Servlet"
date:   2019-06-17 20:30:00 +0800
categories: [Java, Servlet]
---
### Java Servlet
>Servlets are the **Java programs** that runs on the **Java-enabled web server** or **application server**. They are used to **handle the request** obtained from the web server, **process the request**, **produce the response**, then **send response back** to the web server.

#### Properties of Servlets :
- Servlets work on the server-side.
- Servlets capable of handling complex request obtained from web server.

#### Execution of Servlets
- The `clients` send the `request` to the `web server`.
- The `web server receives` the request.
- The `web server passes` the request to the corresponding `servlet`.
- The `servlet processes the request` and `generate the response` in the form of output.
- The `servlet send the response` back to the `web server`.
- The `web server` sends the `response` back to the `client` and the client browser displays it on the screen.

    ![servlet](https://github.com/YouwangDeng/YouwangDeng.github.io/raw/master/static/img/_posts/servlet_architecture.png)

### Server-side extensions 
- Java Servlet is one of the component APIs of Java Platform Enterprise Edition which sets standards for creating dynamic Web applications in Java.
- Common Gateway Interface(CGI) scripts 
- Hypertext Preprocessor (PHP)

>Java Servlets are more acceptable since they solve the limitations of CGI such as low performance and low degree scalability.

### CGI
- CGI is actually an external application which is responsible for processing client requests and generating dynamic content

    ![cgi](https://github.com/YouwangDeng/YouwangDeng.github.io/raw/master/static/img/_posts/cgi.jpg)

    ![difference](https://github.com/YouwangDeng/YouwangDeng.github.io/raw/master/static/img/_posts/servlet_cgi.png)