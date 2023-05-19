const router = require('express').Router();
const {db, Students, Campus} = require('../db/index')
router.get('/', async(req, res, next) => {
    try {
        let students = await Students.findAll({include: [{model: Campus}]});
        res.send(students);
    } catch(err) {
        next(err);
    }
});


router.post('/', async(req, res, next) => {
    try {
        const student = await Students.create(req.body);

        const [campus, wasCreated] = await Campus.findOrCreate({
            where: {
                name: req.body.campus,
                address: req.body.address
            }
        });

        await student.setCampus(campus);

        res.status(201).send(student);
    } catch(err) {
        next(err);
    }
});

router.get('/:id', async(req, res, next) => {
    try {
        let singleStudent = await Students.findByPk(req.params.id, {include: [{model: Campus}]});
        res.send(singleStudent);
    } catch(err) {
        next(err);
    }  
});

router.delete('/:id', async(req, res, next) => {
    try {
        let singleStudent = await Students.findByPk(req.params.id);
        await singleStudent.destroy();
        res.send(singleStudent)
    } catch(err) {
        next(err);
    }  
});

router.put('/:id', async(req, res, next) => {
    try {
        let singleStudent = await Students.findByPk(req.params.id);
        await singleStudent.update(req.body);
        res.send(singleStudent)
    } catch(err) {
        next(err);
    }  
});

module.exports = router;