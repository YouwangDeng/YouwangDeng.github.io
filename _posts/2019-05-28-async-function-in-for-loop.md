---
layout: post
title:  "Async Function in For Loop in JS"
date:   2019-05-28 16:28:10 +0800
categories: [JavaScript, Async]
---
In JavaScript, if a sequence of async methods has to been executed one by one, and the result should be returned after the last async method, then should use "for ... of" syntax instead of "forEach". [Stackoverflow](https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop)

---

Example that won't work as Expected:
```javascript
let items = [1,2,3];
let res = [];
items.forEach(async function(item)=> {
    let res1 = await asyncFunc1(item);
    let res2 = await asyncFunc2(res1);
    res.push(res2);
});
console.log(res);
```

---

Example that will work:

```javascript
let items = [1,2,3];
let res = [];
for (const item of items) {
    let res1 = await asyncFunc1(item);
    let res2 = await asyncFunc2(res1);
    res.push(res2);
});
console.log(res);
```