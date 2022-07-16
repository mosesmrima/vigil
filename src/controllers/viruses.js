const Virus = require("../models/virus")


const getAll = async (req, res) => {
    try {
        const viruses = await Virus.find().select({ _id: 0, __v: 0});
        console.log(typeof (viruses));
        res.status(200).send(viruses)
    } catch(e) {
        res.status(500).send({error: "Server error"});
    }
}


const getByType = async (req, res) => {
    try {
        const viruses = await Virus.find({type: req.params.type}).select({ _id: 0, __v: 0});
        res.status(200).send(viruses)
    } catch(e) {
        res.status(400).send({error: "Bad request"});
    }
}

module.exports = { getAll, getByType }