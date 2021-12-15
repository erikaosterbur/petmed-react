const router = require('express').Router();
const db = require('../../config/connection');
const mongojs = require("mongojs");
const { Pet } = require('../../models');

//create pet profile
router.post("/new", ({ body }, res) => {
    const newPet = body;
    Pet.create(newPet, (error, saved) => {
        if (error) {
            console.log(error);
        } else {
            res.send(saved);
        }
    });
});

//edit pet profile
router.put("/edit/:id", (req, res) => {
    Pet.findByIdAndUpdate(
        {
            _id: mongojs.ObjectId(req.params.id),
        },
        {
            nameText: req.body.nameText,
            typeText: req.body.typeText,
            dateOfBirthText: req.body.dateOfBirthText,
        },
        (error, edited) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(edited);
                res.send(edited);
            }
        }
    );
});

//delete pet profile

//get single pet profile

//get all pet profiles
