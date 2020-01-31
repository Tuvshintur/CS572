const { Subject } = require('rxjs');
const url = require('url');
const http = require('http');
const { fork } = require('child_process');

const subject = new Subject();

const server = http.createServer((req, res) => {
    if (req.url != '/favicon.ico') {
        subject.next({ req: req, res: res });
    }
});

subject.subscribe(sendFib);

function sendFib(reqres) {
    let parts = url.parse(reqres.req.url, true);
    let number = parts.query.n;

    console.log(number);

    if (number) {
        const childProcess = fork('fib.js');
        childProcess.send(number);
        childProcess.on('message', (msg) => {
            reqres.res.end(JSON.stringify({ fib: msg }));
        });
    }
}

server.listen(4000, () => console.log('server started'));