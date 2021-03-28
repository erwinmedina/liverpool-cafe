const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require("../data");


const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String 
}, {
  timestamps: true
});

const liverpoolSchema = new Schema({
  playerName: String,
  age: Number,
  position: String,
  nationalTeam: String,
  reviews: [reviewSchema],
}, {
  timestamps: true,
})



module.exports = mongoose.model('Liverpool', liverpoolSchema);