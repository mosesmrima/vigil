const express = require('express');
const {getAll, getIncidentByYear, getRandomIncident} = require("../controllers/incidents")

const router = express.Router();

router.get('/all', getAll);
router.get("/random/", getRandomIncident);
router.get("/all/:year", getIncidentByYear);

module.exports = router;
