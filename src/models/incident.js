const {Schema} = require("mongoose");
const mongoose = require("mongoose");

const incidentSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    month: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Incident = mongoose.model("Incidents", incidentSchema);
module.exports = Incident;