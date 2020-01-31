(() => {
    // const promise = new Promise((resolve, reject) => {
    //     console.log('Promise start');
    //     resolve('Promise result');
    //     console.log('Promise end');
    // });

    // console.log('code start');
    // promise.then(console.log);
    // console.log('code end');

    // const promise = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         resolve('Promise results'), 0
    //     });
    // });

    // console.log('Code start');
    // promise.then((result)=>{
    //     console.log(result);
    // });
    // console.log('I love JS');

    // setTimeout(()=>console.log('setTimeout result'),0);
    // const promise = new Promise((resolve)=>resolve('promise result'));
    // console.log('code start');
    // promise.then(console.log);
    // console.log('I love JS');

    // console.log('Start');
    // async function myFunction() {
    //     console.log('A');
    //     let result = await realPromise();
    //     console.log('B');
    //     console.log(result);
    // }

    // myFunction();
    // console.log('end');

    // function fakePromise() {
    //     console.log('Fake');
    // }

    // function realPromise() {
    //     return new Promise(resolve=>{
    //         console.log('C');
    //         resolve('real');
    //         console.log('D');
    //     });
    // }
    
    Array.prototype.removeNum = function(num) {
        let arr = this;
        try {
            return new Promise((resolve, reject)=>{
                if(arr.includes(num)) {
                    let tmp = arr.filter((val)=>{
                        return val!==num;
                    });
                    resolve(tmp);
                } else {
                    reject('array doesnt contain value of number');
                }
            });
        } catch(e) {
            console.log(e);
        }
    };


    console.log('Start'); 
    [1, 3, 4, 2, 1, 5].removeNum(1).then(console.log).catch(console.log);
    console.log('Finish');

})();