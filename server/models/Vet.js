const { Schema, model } = require('mongoose');
const Pet = require('./Pet');

const vetSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    pet: [
      {
        type: Schema.Types.ObjectId,
        ref: Pet,
        required: true,
      }
    ],
  });

const Vet = model('Vet', vetSchema);

module.exports = Vet;