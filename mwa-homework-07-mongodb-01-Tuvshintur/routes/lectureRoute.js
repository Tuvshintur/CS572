const express = require('express');

const router = express.Router();

router.get('/', async function (req, res) {
    let cursor = await req.db.collection("lectures").find().toArray();
    res.send(cursor);
});

router.get('/search/:q', async function (req, res) {
    let cursor = await req.db.collection("lectures").find({ course: req.params.q }).toArray();
    res.send(cursor);
});

router.get('/:course', async function (req, res) {
    let cursor = [];
    if (req.params.course) {
        cursor = await req.db.collection("lectures").findOne({ course: req.params.course }).toArray();
    }
    res.send(cursor);
});

router.post('/', async function (req, res) {
    console.log(req.body);
    await req.db.collection("lectures").insertOne({ "course": req.body.course, "lecture": req.body.lecture });
    res.send("successfully inserted");
});

router.delete('/:course', async function (req, res) {
    let cursor = [];
    if (req.params.course) {
        cursor = await req.db.collection("lectures").remove({ course: req.params.course }).toArray();
    }
    res.send(cursor);
});

module.exports = router;