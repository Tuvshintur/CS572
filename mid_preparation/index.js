const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const indexRoute = require('./route/indexRoute');

let db;

const app = express();

app.set('x-powered-by', false);

app.use(cors());

app.use(express.json());

app.use(async (req, res, next) => {
    try {
        if (!db) {
            await mongoClient.connect('mongodb://localhost:27017/')
                .catch(err => console.log(err))
                .then((client) => {
                    req.db = client.db('testDB');
                });
        }
        next();
    }
    catch (err) {
        next(err);
    }
});

app.use('/', indexRoute);

app.listen(3000, () => { console.log('server started :3000.'); });