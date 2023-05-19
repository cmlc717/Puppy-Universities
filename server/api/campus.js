const router = require('express').Router();
const {db, Students, Campus} = require('../db/index')

router.get('/', async(req, res, next) => {
    try {
        const campus = await Campus.findAll({include: [{model: Students}]});
        res.send(campus);
    } catch(err) {
        next(err);
    }
});

router.post('/', async(req, res, next) => {
    try {
        const campus = await Campus.create(req.body);
        res.status(201).send(campus);
    } catch(err) {
        next(err);
    }
});

router.get('/removeStudent/:id/:studentId', async(req, res, next) => {
    try {
        const campus = await Campus.findByPk(req.params.id);
        const student = await Students.findByPk(req.params.studentId);
        await campus.removeStudents(student);
        res.send(campus);
    } catch(err) {
        next(err);
    }
});

router.get('/:id', async(req, res, next) => {
    try {
        let singleCampus = await Campus.findByPk(req.params.id, {include: [{model: Students}]});
        res.send(singleCampus);
    } catch(err) {
        next(err);
    }  
});

router.delete('/:id', async(req, res, next) => {
    try {
        let singleCampus = await Campus.findByPk(req.params.id);
        await singleCampus.destroy();
        res.send(singleCampus);
    } catch(err) {
        next(err);
    }  
});

router.put('/:id', async(req, res, next) => {
    try {
        let singleCampus = await Campus.findByPk(req.params.id);
        await singleCampus.update(req.body);
        res.send(singleCampus);
    } catch (err) {
        next(err);
    }
})

module.exports = router;