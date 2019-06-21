---
layout: post
title:  "JDBC connect to MySQL"
date:   2019-06-21 20:30:00 +0800
categories: [Java, JDBC]
---
### JDBC
>JDBC stands for `Java Database Connectivity`. JDBC is an `standard API specification` developed in order to move `data` from frontend to backend. This API consists of classes and interfaces written in Java. It basically acts as an interface or channel `between Java program and databases`

### JDBC Usage Example - Connect to MySQL
>To run the following code in the terminal, a connect driver jar file need to be [downloaded](https://dev.mysql.com/downloads/connector/j/) and [installed](https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-binary-installation.html)

```java
import java.sql.*; 
import java.util.*; 
class JDBC_Demo {
	public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/yourDatabase"; 
        String user = "yourUser"; 
        String password = "yourPass"; 
        try {
            // 1. loading the driver
            Class.forName("com.mysql.cj.jdbc.Driver"); 
            // 2. establish the connection to database 
            Connection con=DriverManager.getConnection(url, user, password);
            // 3. create a statement to send SQL commands and receive data from database
            Statement st = con.createStatement(); 
            // 4. execute a query, return a ResultSet
            ResultSet rs=st.executeQuery("select * from yourTable");  
            // in this example, a student(id, name, age) table was already been created in the database
            while(rs.next()) {
                System.out.println(rs.getInt(1)+"  "+rs.getString(2)+"  "+rs.getString(3));
            }
            // 5. execute an update, return an int
            int m=st.executeUpdate("insert into yourTable values (yourDataValues)");
            System.out.println(m);
            // 6. close the connection
            con.close();
        } catch(Exception e) {
            System.out.println(e);
        }
    }
}
```