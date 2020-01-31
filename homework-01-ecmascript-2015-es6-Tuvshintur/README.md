# MWA Homework 01 - ECMAScript 2015 (ES6)
## Exercise 01
1. Define a `removeNum` function that will work asynchronously on every `Array` object. 
   * The function accepts one argument: a number. 
   * The function returns a new array after removing all instances of the passed number.
2. Explain how does this function affect the event-loop?

```javascript
console.log('Start'); 
[1, 3, 4, 2, 1, 5].removeNum(1).then(console.log);
console.log('Finish'); 
   
Start
Finish
[3, 4, 2, 5]
```
- - - -
## Exercise 02
1. Create three buttons:
   * **Promise Fetch** (use [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch))
   * **Async/Await Fetch** (use [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function))
   * **Reactive Fetch** (use [RxJS](https://rxjs-dev.firebaseapp.com/))  
When each button is clicked, you will make a request to [https://randomuser.me/api/](https://randomuser.me/api/) and return a `JSON` with name and location only.
2. Explain which one of the three is asynchronous.
