const { Schema, model } = require("mongoose");

const virusSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    report: {
        type: String,
        required: true
    }
});


const Virus = model("Viruses", virusSchema);

module.exports = Virus;
