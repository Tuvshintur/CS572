# MWA Homework 02 - NodeJS 01
## Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 
2. Explain the difference between `process.nextTick` and `setImmediate`?
3. Name 10 core modules that Node provides by default.

## Exercise 02
Complete the necessary Node code to make `pluck(boolean)` method work asynchronously, pluck the largest value if `true` is passed, otherwise pluck the smallest value.  
```javascript
// your Node code here...
console.log('start');
[1,2,3,4,5,6,7,8].pluck(true); // pluck largest
[1,2,3,4,5,6,7,8].pluck(false); // pluck smallest
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// 8
// 1
```
