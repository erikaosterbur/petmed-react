const { Schema, model } = require('mongoose');
const User = require('./User');

const petSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    type: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true,
      }
    ],
  });

const Pet = model('Pet', petSchema);

module.exports = Pet;