const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RouterSchema = new Schema({
    from_address: { type: Schema.Types.Mixed },
    to_address: { type: Schema.Types.Mixed },
    suggest_routers: { type: Schema.Types.Mixed },
    schedule_time: { type: Number },
    transport_type: { type: String, required: ['CAR', 'MOTOBIKE'] },
    status: { type: String, required: ['WAIT', 'END'], default: 'WAIT' },
    price: { type: Number },
    phone: { type: String },
    license_place: { type: String },
    note: { type: String },
    create_by: { type: String },
});

module.exports = mongoose.model("Router", RouterSchema);
