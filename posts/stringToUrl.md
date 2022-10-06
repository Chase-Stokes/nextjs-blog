---
title: 'String to URL'
date: '2022-09-15'
---

Turning Strings to URLs
URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example
Input: "Jasmine Ann Jones"

Output: "Jasmine%20Ann%20Jones"

**Solution**

```js
    const replace = (input) => {
      let arr = input.split('')
      let output = []
      arr.forEach(function(element){
        if(element === " "){
          output.push('%20')
        }else {
          output.push(element)
        }
      })
      return output.join('')
    };
```


**Refactored Solution**
```js
    const replace = (input) => {
      let a = input.split('')
      let b = a.indexOf(' ')
      a[b] = '%20'
      if(a.includes(' ')){
        return replace(a.join(''))
      }else {
        return a.join('')
      }
    }
```