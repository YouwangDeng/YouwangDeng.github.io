---
layout: post
title:  "Java Enum Data Type"
date:   2019-06-15 20:30:00 +0800
categories: [Java, Data-Structure]
---
### Constructor

>put constructor inside a class instead of a function

```java
public enum Color {
    RED,BLUE,GREEN,BLACK;
}
```

> the above constructor acutally call four times `Enum(String name, int ordinal)`

### [API](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html)
* access

```java
Enum[] colors = Color.values();
System.println(colors[0]);//RED
System.println(colors[0].ordinal())//0
System.out.println(Color.RED);//RED
System.out.println(Color.valueOf("RED"));//RED
System.out.println(Color.RED.ordinal());//0
System.out.println(Color.valueOf("RED").ordinal());//0
```

### Build a Enum Data Type with methods

```java
enum WeekDay {
    // constructor of a Enum, must be declared before constructor, end with";"
    Mon("Monday"),Tue("Tuesday"),Wed("Wednesday"),Thu("Thursday"),Fri("Friday"),Sat("Saturday"),Sun("Sunday");

    private final String day;

    private WeekDay(String day) {
        this.day=day;
    }
    public static void printDay(int i)
    {
        switch(i)
        {
            case 1:
                System.out.println(WeekDay.Mon);
                break;
            case 2:
                System.out.println(WeekDay.Tue);
                break;
            case 3:
                System.out.println(WeekDay.Wed);
                break;
            case 4:
                System.out.println(WeekDay.Thu);
                break;
            case 5:
                System.out.println(WeekDay.Fri);
                break;
            case 6:
                System.out.println(WeekDay.Sat);
                break;
            case 7:
                System.out.println(WeekDay.Sun);
                break;
            default:
                System.out.println("wrong number!");
        }
    }
    public String getDay() {
        return day;
    }
}

public static void main(String[] args)
{
    for(WeekDay day:WeekDay.values())
    {
        System.out.println(day+"====>"+day.getDay());
    }
    WeekDay.printDay(5);
}
// Mon====>Monday
// Tue====>Tuesday
// Wed====>Wednesday
// Thu====>Thursday
// Fri====>Friday
// Sat====>Saturday
// Sun====>Sunday
// Fri
```


