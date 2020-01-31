const express = require('express');
const fs = require('fs');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const { promisify } = require('util');

const client = require('mongodb').MongoClient;
const app = express();
const indexRoute = require('./routes/indexRoute');
const lectureRoute = require('./routes/lectureRoute');
let db;

//config
app.set('x-powered-by', false);

app.use(async (req, res, next) => {
    try {
        if (!db) {
            await client.connect('mongodb://localhost:27017/')
                .catch((errr) => console.log(errr))
                .then((client) => {
                    req.db = client.db('homework07');
                });
        }
        next();
    } catch (err) {
        next(err);
    }
});


//middlewares
app.use(logger('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));

//cors
app.use(cors());

app.use(express.json());

app.use('/', indexRoute);
app.use('/lectures', lectureRoute);
app.listen(3000, () => console.log('server started'));