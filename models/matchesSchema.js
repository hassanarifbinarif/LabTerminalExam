var mongoose = require("mongoose");

const matchesSchema = mongoose.Schema({
    city: {type: String, required: true},
    date: {type: Date, required: true},
    teamA: {type:String, requried: true},
    teamB: {type:String, required:true}

})

var Matches = mongoose.model("Matches", matchesSchema);

module.exports = Matches;