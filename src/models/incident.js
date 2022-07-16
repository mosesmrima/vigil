const {Schema, model} = require("mongoose");


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

const Incident = model("Incidents", incidentSchema);
module.exports = Incident;