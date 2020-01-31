const express = require('express');

const router = express.Router();

router.get('/', async function (req, res) {
    let a = await req.db.collection('testCol').find().toArray();
    res.json(a);
});

router.post('/', function (req, res) {
    console.log(req.body);
    req.db.collection('testCol').insert({ name: req.body.name });
    res.send('successfully inserted');
});


module.exports = router;