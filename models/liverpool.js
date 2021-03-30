const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content     : String,
  user        : {
    type      : Schema.Types.ObjectId, 
    ref       : 'User',
              },
  userName    : String,
  userAvatar  : String,
}, {
  timestamps  : true,
})

const favoriteSchema = new Schema({
  user : {
    type: Schema.Types.ObjectId,
    ref : 'User',
  }
}, {
  timestamps: true,
})

const liverpoolSchema = new Schema({
  playerNo      : String,
  playerName    : String,
  age           : Number,
  position      : String,
  nationalTeam  : String,
  img           : String,
  favorite      : [favoriteSchema],
  comments      : [commentSchema],
  user          : {
        type: Schema.Types.ObjectId,
        ref : 'User',
  }
}, {
  timestamps    : true,
})

module.exports = mongoose.model('Liverpool', liverpoolSchema);