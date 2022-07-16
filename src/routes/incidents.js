const express = require('express');
const {getAll, getIncidentByYear, getRandomIncident, getByYearMonth} = require("../controllers/incidents")

const router = express.Router();

router.get('/all', getAll);
router.get("/random/", getRandomIncident);
router.get("/all/:year", getIncidentByYear);
router.get("/all/:year/:month", getByYearMonth);

module.exports = router;
