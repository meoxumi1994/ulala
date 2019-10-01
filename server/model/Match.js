const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
    driver_id: { type: String },
    rider_id: { type: String },
    router_id: { type: String },
    status: { type: String, required: ['MATCHED', 'CANCEL', 'END'], default: 'MATCHED'},
    create_time: { type: Number },
});

module.exports = mongoose.model("Match", MatchSchema);
