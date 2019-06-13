---
layout: post
title:  "React Native setState not update immediately"
date:   2019-06-13 20:00:10 +0800
categories: [JavaScript, React, React-Native]
---

Sometimes, after setState in react native or react, then use console.log to check the state, the state is not updated, that's due to the mechanism of React.

According to the [documentation](https://reactjs.org/docs/react-component.html#setstate):
>setState() does not always immediately update the component. It may batch or defer the update until later. This makes reading this.state right after calling setState() a potential pitfall. Instead, use `componentDidUpdate` or a setState callback (`setState(updater, callback)`)
```javascript
this.setState({someKey: keyValue}, ()=>{
    alert(this.state.someKey);
});
```