
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const vetRoutes = require('./vetRoutes');

router.use('/pet', petRoutes);
router.use('/users', userRoutes);
router.use('/vet', vetRoutes);

module.exports = router;