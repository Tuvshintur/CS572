const express = require('express');
const router = express.Router();

router.post('/', async function (req, res) {
    console.log(req.body);
    await req.db.collection("location").insertOne({ "name": req.body.name, "category": req.body.category, "location": [req.body.lat, req.body.long] });
    res.send("successfully inserted");
});

router.get('/:category', async function (req, res) {
    let currentLat = 41.017654;
    let currentLong = -91.9665342;

    let result = await req.db.collection('location').find({ $and: [{ location: { $near: [currentLong, currentLat] } }, { category: req.params.category }] }).limit(3).toArray();
    res.send(result);
});

module.exports = router;