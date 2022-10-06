---
title: 'FizzBuzz'
date: '2022-09-06'
---

Given an integer n, return a string array answer (1-indexed) where:
answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

**Solution One**
```js
    const fizzBuzz = (n) => {
        let output = [];
        for(i = 1; i <= n; i++) {
            if(i % 15 == 0){
                output.push("FizzBuzz");
            } else if(i % 5 == 0){
                output.push("Buzz");
            } else if(i % 3 == 0){
                output.push("Fizz");
            } else{
                output.push(`${i}`);
            }
        }
        return output;
    };
```

**Refactored Solution**
```js
    const fizzBuzz = (n) => {
        let output = [];
        for(i = 1; i <= n; i++) {
            i % 15 == 0 ? output.push("FizzBuzz") : 
            i % 5 == 0 ? output.push("Buzz") :
            i % 3 == 0 ? output.push("Fizz") : output.push(`${i}`)
        }
        return output;
    };
```
