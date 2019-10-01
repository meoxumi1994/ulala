const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    match_id: { type: String },
    user_id: { type: String },
    content: { type: String },
    create_time: { type: Number },
});

module.exports = mongoose.model("Message", MessageSchema);
