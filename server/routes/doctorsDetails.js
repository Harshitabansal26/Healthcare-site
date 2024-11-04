// doctorsDetails.js
const express = require("express");
const { registerDoctor } = require("../controllers/doctorsDetailsControllers");

const router = express.Router();

router.post("/register", registerDoctor);

module.exports = router;
