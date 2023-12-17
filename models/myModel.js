import { Schema, model } from 'mongoose';

const movieModel = new Schema(
  {
    cover: {type: String, required: true},
    title: {type: String, required: true},
    genre: {type: String, required: true},
    plot: {type: String, required: true},
    stars: {type: Number, required: true},
    isForEveryone: { type: Boolean, required: true }
  },
  {versionKey:false , timestamps: true}
);

export default model('MovieBillboard', movieModel);