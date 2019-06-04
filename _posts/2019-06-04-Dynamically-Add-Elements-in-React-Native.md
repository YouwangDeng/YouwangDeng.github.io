---
layout: post
title:  "Dynamically Add elements in React Native"
date:   2019-06-04 18:11:10 +0800
categories: [JavaScript, React-Native]
---

### [Dynamically create elements in React Native](https://stackoverflow.com/questions/42053237/is-it-possible-to-dynamically-create-components-in-react-native/42057846)

```javascript
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.dataExample = this.props.dataExample;
    }
    render() {
        let list = [];
        this.dataExample.forEach(e=>{
            list.push(
                <View>
                    <Text>{e.title}</Text>
                </View>
            );
        });
        return (
            <View>
                {list}
            </View>
        );
    }
}
```