const express = require('express');
const { ObjectId } = require('mongodb');

const router = express.Router();

router.get('/', async function (req, res) {
    let result = await req.db.collection('cars')
        .find({ 'status': 1 })
        .project({ 'brand': 1, 'type': 1, 'status': 1, 'rate_per_day': 1, 'rentail_details': 1 })
        .toArray();
    res.json(result);
});

router.post('/:id/reserve', function (req, res) {
    let id = ObjectId();
    req.db.collection('cars').findOne({ '_id': ObjectId(req.params.id) }, function (err, car) {
        let lastMileage = car.rentail_details[car.rentail_details.length - 1].end_mileage;

        req.db.collection('cars')
            .updateOne({ '_id': ObjectId(req.params.id) }, {
                $push: {
                    "rentail_details": {
                        "reservation_id": id,
                        "name": req.body.name,
                        "driving_license": req.body.driving_license,
                        "start_mileage": lastMileage
                    }
                }
            });
    });

    res.json({ 'success': 1, "reservation_id": id.toString() });
});

router.patch('/:id/reserve/:reservation_id', function (req, res) {
    req.db.collection('cars').findOne({ '_id': ObjectId(req.params.id) }, function (err, car) {
        let total = req.body.number_of_days * car.rate_per_day;

        req.db.collection('cars')
            .updateOne({ 'rentail_details.reservation_id': ObjectId(req.params.reservation_id) }, {
                $set: {
                    "rentail_details.$.endMileage": req.body.end_mileage,
                    "rentail_details.$.number_of_days": req.body.number_of_days,
                    "rentail_details.$.total_rent": total
                }
            });
    });
});

router.delete('/:id/reserve/:reservation_id', function (req, res) {
    req.db.collection('cars').findOne({ '_id': ObjectId(req.params.id) }, function (err, car) {
        req.db.collection('cars')
            .updateOne({ 'rentail_details.reservation_id': ObjectId(req.params.reservation_id) }, {
                $pull: {
                    'rentail_details': {
                        'reservation_id': ObjectId(req.params.reservation_id)
                    }
                }
            });

        res.json({ "success": 1 });
    });
});

module.exports = router;