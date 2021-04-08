const express = require("express");
const router = express.Router();

router.get('/', (_, res) => {
  return res.send({
    message: "quotes api"
  });
});

router.use('/quote', require('./quotes'));

module.exports = router;