---
layout: post
title:  "Jetty vs Tomcat"
date:   2019-06-18 18:30:00 +0800
categories: [Java]
---
>Both the `Tomcat` and `Jetty` are `Web servers` and `Servlet/JavaServer Pages containers`.

### Difference
- Jetty is a `Eclipse` project, Tomcat is an `Apache` project
- Jetty is based on `Handler`, the extensions is also based on Handler, so it's easy to add extensions. Tomcat is based on `Container`, but add extensions to Tomcat need to understand how Tomcat works, which makes if much more difficult to add extensions to Tomcat
- Jetty is much more `lightweight`

