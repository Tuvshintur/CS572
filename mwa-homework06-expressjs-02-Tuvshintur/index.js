const express = require('express');
const fs = require('fs');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const multer = require('multer');

const app = express();
const indexRoute = require('./routes/indexRoute');
const studentRoute = require('./routes/studentRoute');

//config
app.set('x-powered-by', false);

//middlewares
app.use(logger('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));

//cors
app.use(cors());

app.use(express.json())

app.use('/', indexRoute);

app.use('/students', studentRoute);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/pics');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg');
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3*1024*1024
    }
});

app.post('/uploadImage', upload.single('file'), function (req, res) {
    res.end('Picture Uploaded!')
})

app.listen(3000, () => console.log('server started'));