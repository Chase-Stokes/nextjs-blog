---
title: 'Single Number'
date: '2022-09-09'
---

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1

**Solution**
```js
const singleNumber = (nums) => {
  for(let i = 0; i < nums.length; i++){
    let count = 1
    for(let j = 0; j < nums.length; j++){
      if (i !== j && nums[i] === nums[j]){
        count ++
      }
    }
    if (count === 1) return nums[i]
  }
}
```