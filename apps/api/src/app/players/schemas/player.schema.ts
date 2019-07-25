import * as mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  nickname: String,
  age: Number,
  brith: Date,
});
