require("dotenv").config();
require("./config/database");

const Liverpool = require("./models/liverpool");
const Matchdate = require("./models/matchdate");
const data = require("./data");
const matchdates = require("./matchdates")

Liverpool.deleteMany({})
    .then(function(results) {
        console.log(results);
        return Liverpool.create(data.liverpools);
    })
    .then(function() {
        process.exit();
    });

Matchdate.deleteMany({})
    .then(function(results) {
        console.log(results);
        return Matchdate.create(matchdates.matchdates);
    })
    .then(function() {
        process.exit();
    });


