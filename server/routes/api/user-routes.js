const router = require('express').Router();

//require CRUD functions from controller here
  const {
    createUser,
    editUser,
    userLogin,
    userLogout,
    getUser,
    deleteUser,
  } = require('../../controllers/user-controller');

//use express router to get, post, put, delete here
  router.route('/').post(userLogin);
  router.route('/signup').post(createUser);
  router.route('/:id').put(editUser);
  router.route('/:id').get(getUser);
  router.route('/logout').post(userLogout);
  router.route('/:id').delete(deleteUser);

module.exports = router;
