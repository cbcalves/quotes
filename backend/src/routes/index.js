const express = require("express");
const router = express.Router();

router.use('/quote', require('./quotes'));

module.exports = router;