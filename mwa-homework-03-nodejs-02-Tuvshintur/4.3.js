const http = require('http');
const fs = require('fs');
const path = require('path')

http.createServer(function (req, res) {

    res.writeHead(200, {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": "attachment; filename=" + 'big.txt'
    });

    console.log('Start Date: ', new Date());

    const stream = fs.createReadStream(path.join(__dirname, 'big.file')).pipe(res);

    console.log('End Date: ', new Date());

}).listen(3000, () => {
    console.log('listening server on :3000');
});