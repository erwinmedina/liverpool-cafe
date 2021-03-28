require("./config/database");
const Liverpool = require("./models/liverpool");
const data = require("./data");

Liverpool.deleteMany({})
    .then(function(results) {
        console.log(results);
        return Liverpool.create(data.liverpools)
    })
    .then(function() {
        process.exit();
    });

