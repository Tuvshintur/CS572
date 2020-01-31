const express = require('express');
var multer = require('multer')

const students = [{ id: 1, name: "Asaad Saad", course: "CS572", picture: "1570286884.jpg", grade: 95 }];

const router = express.Router();
const validator = require('../middlewares/json-validator');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../assets/pics/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now())
    }
});

const maxSize = 3 * 1024 * 1024;

const upload = multer({ storage: storage, limits: { fileSize: maxSize } });

router.get('/', function (req, res) {
    res.json(students);
});

router.get('/:id(\\d+)', function (req, res) {
    const studentId = Number(req.params.id);
    const getStudent = students.find((student) => student.id === studentId);

    if (!getStudent) {
        res.status(500).send('Student not found.')
    } else {
        res.json(getStudent);
    }
});

///*upload.single('picture'),*/ 
router.post('/', validator, function (req, res) {
    const incomingStudent = req.body;

    students.push(incomingStudent);

    res.json(students);
});

router.delete('/:id(\\d+)', function (req, res) {
    const studentId = Number(req.params.id);
    const newStudents = students.filter((student) => student.id !== studentId);

    if (!newStudents) {
        res.status(500).send('Student not found.')
    } else {
        res.json(newStudents);
    }
});

module.exports = router;