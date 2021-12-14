const router = require('express').Router();

//require CRUD functions from controller here
  const {
    getAllPets,
    createPet,
    getPet,
    editPet,
    deletePet,
  } = require('../../controllers/pet-controller');

//use express router to get, post, put, delete here
  router.route('/').get(getAllPets);
  router.route('/').post(createPet);
  router.route('/:id').get(getPet);
  router.route('/:id').put(editPet);
  router.route('/:id').delete(deletePet);

module.exports = router;
