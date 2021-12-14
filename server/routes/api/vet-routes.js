const router = require('express').Router();

//require CRUD functions from controller here
  const {
    getAllVets,
    createVet,
    getVet,
    editVet,
    deleteVet,
  } = require('../../controllers/vet-controller');

//use express router to get, post, put, delete here
  router.route('/').get(getAllVets);
  router.route('/').post(createVet);
  router.route('/:id').get(getVet);
  router.route('/:id').put(editVet);
  router.route('/:id').delete(deleteVet);

module.exports = router;
