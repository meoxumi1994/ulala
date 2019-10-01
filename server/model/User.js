const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    license_place: { type: String },
    ref: { type: String },
    avatar: { type: Schema.Types.Mixed },
    login_type: { type: String, required: ['FACEBOOK', 'GOOGLE'] },
    extra_data: { type: Schema.Types.Mixed }
});

module.exports = mongoose.model("User", UserSchema);
