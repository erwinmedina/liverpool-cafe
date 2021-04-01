const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchdateSchema = new Schema({
    matchday: String,
    team1   : String,
    score1  : String,
    score2  : String,
    team2   : String,
    date    : String,
})


  module.exports = mongoose.model('Matchdate', matchdateSchema);