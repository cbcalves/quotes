const { MongoClient } = require("mongodb");
const express = require('express');
const router = express.Router();

const QuoteRepository = require("./../model/repository/quote");

router.get('', async (_, res) => {
  try {
    
    const quoteRepository = new QuoteRepository();
    const result = await quoteRepository.findOne();
    return res.send(result);

  } catch (err) {
    console.log(err);
    res.status(400).send(null);
  }
});


module.exports = router;