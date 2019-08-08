import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  players: Number,
  site: String,
  createDate: Date,
  slug: {
    type: String,
    required: true,
    unique: true,
  }
});
