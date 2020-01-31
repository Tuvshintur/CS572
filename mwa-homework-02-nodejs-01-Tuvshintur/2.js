(()=> new Promise((resolve)=>resolve('promise')))().then((p)=>console.log(p));
setTimeout(() => console.log('timout'), 0)
setImmediate(() => console.log('immediate'));
queueMicrotask(() => console.log('microtask'));
process.nextTick(() => console.log('nexttick'));


Array.prototype.pluck = function (val) {
    process.nextTick(()=>{
        if(val) {
            console.log(Math.max(...this));
        } else {
            console.log(Math.min(...this));
        }
    });
}


// console.log('start');
// [1, 2, 3, 4, 5, 6, 7, 8].pluck(true); // pluck largest
// [1, 2, 3, 4, 5, 6, 7, 8].pluck(false); // pluck smallest
// console.log('end');