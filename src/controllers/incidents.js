const Incident = require("../models/incident");

const getAll = async (req, res) => {
    try {
        const incidents = await Incident.find().select({_id: 0, __v: 0, id: 0});
        res.status(200).send({incidents: incidents});
    } catch (err) {
        res.status(500).send({error: "server error"});
    }
}

const getIncidentByYear = async (req, res) => {
    console.log(req.params.year)
    if (isNaN(req.params.year)) {
        res.status(400).send({ success: false , reason: "Year should be a number"});
    } else {
        const incidents = await Incident.find({year: req.params.year}).select({__v: 0, _id: 0})
        res.status(200).send({incidents})
    }
}

const getRandomIncident = async (req, res) => {
    try {
        const randInc = await Incident.findOne().select({_id: 0, __v: 0})
        res.status(200).send(randInc);
    } catch (e) {
        res.status(500).send({error: "server error"});
    }
}

const getByYearMonth = async (req, res) => {
    try {
        if (isNaN(req.params.year) || !(req.params.month instanceof String)) {
            const incidents = await Incident.find({year: req.params.year, month: req.params.month})
                .select({_id: 0, __v: 0});
            res.status(400).send(incidents);
        }
    } catch(e) {
        res.status(400).send({error: "bad request"});
    }
}
module.exports = { getAll, getIncidentByYear, getRandomIncident, getByYearMonth }
