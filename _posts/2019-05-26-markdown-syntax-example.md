---
layout: post
title:  "Markdown syntax example"
date:   2019-05-26 19:22:10 +0800
categories: [markdown]
---

Following are some examples of markdown syntax.

### 1. URL
use "[text to display]" and "(href)" to customize the url link, such as [Markdown Doc](http://www.markdown.cn/).

### 2. Strong Text
put "\*\*" besides the text to make it to be strong, such as **Strong Text**.

### 3. Code Snippet
put " \` " besides the text that to be treated as code snippet, such as `int a = 3;`

### 4. horizontal line
put more than 3 " - " to make a horizontal line, such as "\-\-\-".

--- 

### 5. List
use "\*" and space to make lists, such as
* item 1
* item 2
list inside another list could be achieved by three space.
* list 1
   * list 2
      * list 3

### 6. Code blocks, support language highlight
use " \`\`\`language " as beginning line and "\`\`\`" as end line to make coding blocks, such as following java code block.
```java
import java.util.*;
class Solution {
    public static void main(Sting[] args) {
        List<Integer> res = new ArrayList<>();
        for(int i = 0; i < 10; i++) res.add(i);
    }
}
``` 
if the code is HTML then use jekyll highlight syntax.
{% highlight html %}
<script type="text/javascript">
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
</script>
{% endhighlight %}
### 7. insert web page

use "iframe" tag to insert a web page into markdown file, such as markdown doc page.

---

<iframe width="100%" height="400" allowfullscreen="allowfullscreen" src="https://www.markdown.cn/"></iframe>

---

### 8. insert a quote
use "\>" to quote, such as
> some quote

### 9. insert an image
use "\!\[alt\](image src "title") to inset an image, such as

![scene](http://pic37.nipic.com/20140110/17563091_221827492154_2.jpg)

### 10. inset a table
use
```
header | header | header
:-:|:-:|:-:|
content | content | content

```
such as

header 1 | header 2 | header 3
:-:|:-:|:-: 
1 | 2 | 3 |


