const router = require('express').Router();

router.use('/students', require('./students'));
router.use('/campus', require('./campus'));

router.use((req, res, next) => {
    const err = new Error('API route not found');
    err.status = 404
    next(err);
});

module.exports = router;