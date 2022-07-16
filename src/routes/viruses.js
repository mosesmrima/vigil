const express = require("express");
const { getAll, getByType } = require("../controllers/viruses")

const router = express.Router();

router.get("/all", getAll);
router.get("/all/:type", getByType);



module.exports = router