---
title: 'Longest Common Prefix'
date: '2022-09-10'
---

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

**Solution**
```js
    const longestCommonPrefix = (strs) => {
        let output = ''
        for(i=0; i<strs[0].length; i++){
            let temp = strs[0][i]
            let boolCheck = true
            strs.forEach(function(element){
                if(element[i] !== temp){
                    boolCheck = false
                }
            })
            if(boolCheck === true){
                output += temp
            } else {
                return output
            }
        }
        return output
    };
```