const router = require('express').Router();
const userRoutes = require('./user-routes');
const petRoutes = require('./pet-routes');
const vetRoutes = require('./vet-routes');

router.use('/user', userRoutes);
router.use('/pet', petRoutes);
router.use('/vet', vetRoutes);

module.exports = router;