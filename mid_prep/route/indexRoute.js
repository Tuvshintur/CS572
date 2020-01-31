const express = require('express');

const router = express.Router();

router.get('/', async function (req, res) {
    let result = await req.db.collection('courses').find().toArray();
    res.json(result);
});

router.post('/', async function (req, res) {
    await req.db.collection('courses').insertOne(req.body);
    res.json({ "status": "inserted successfully" });
});

module.exports = router;