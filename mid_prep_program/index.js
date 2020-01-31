const express = require('express');
const cors = require('cors');
const mongoClient = require('mongodb').MongoClient;

const app = express();
const indexRoute = require('./route/indexRoute');

let db;

app.use(cors());
app.use(express.json());

app.use(async function (req, res, next) {
    try {
        if (!db) {
            await mongoClient.connect('mongodb://localhost:27017/')
                .catch(err => {
                    next(err);
                })
                .then((client) => {
                    req.db = client.db('rental');
                });
            next();
        }
    } catch (err) {
        next(err);
    }
});

app.use('/', indexRoute);

app.listen(3000, () => console.log('server started'));