import { Schema, model } from 'mongoose';

const movieModel = new Schema(
  {
    title: {type: String, required: true},
    genre: {type: String, required: true},
    plot: {type: String, required: true},
    stars: {type: Number, required: true},
    isForAdults: { type: Boolean, required: true }
  },
  {versionKey:false , timestamps: true}
)

export default model('Movies', movieModel);