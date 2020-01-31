const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const indexRoute = require('./route/indexRoute');

const app = express();

let db;

app.set('x-powered-by', false);

app.use(cors());

app.use(express.json());

app.use(async (req, res, next) => {
    try {
        if (!db) {
            await mongoClient.connect('mongodb://localhost:27017/')
                .catch(err => console.log(err))
                .then((client) => {
                    req.db = client.db('midterm');
                    // db = req.db;
                });
        }
        next();
    }
    catch (err) {
        next(err);
    }
});

app.use('/css', express.static(__dirname + './assets/pics'));

app.use('/', indexRoute);

app.listen(3000, () => console.log('app started'));