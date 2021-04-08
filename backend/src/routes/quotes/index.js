const express = require('express');
const router = express.Router();

router.get('', require('./get_one_quote'));
router.post('', require('./create_quote'));


module.exports = router;