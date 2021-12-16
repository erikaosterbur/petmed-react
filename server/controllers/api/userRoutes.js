const router = require('express').Router();
const db = require('../../config/connection');
const mongojs = require("mongojs");
const { User } = require('../../models');

router.post("/new", ({ body }, res) => {
    const user = body;

    User.create(user, (error, saved) => {
        if (error) {
            console.log(error);
        } else {
            res.send(saved);
        }
    });
});


module.exports = router;
