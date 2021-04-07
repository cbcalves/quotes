const express = require("express");
const router = express.Router();

const Quote = require ("./../model/quote");

router.get('/quotes', async (_, res) => {
  try {

    return res.send(Quote.findOne());

  } catch (err) {
    console.log(err);
    res.status(400).send(null);
  }
});