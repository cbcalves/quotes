const { getConnection } = require('typeorm');
const Quote = require('../../model/quote');

module.exports = async (req, res) => {

  const quoteRepository = getConnection().getRepository(Quote);

  const quote_data = req.body;

  const quote = quoteRepository.create();
  quote.author = quote_data.author;
  quote.text = quote_data.text;

  const result = await quoteRepository.save(quote);

  if (result) {
    return res.status(201).send({
      text: result.text,
      author: result.author
    });
  }
  else {
    return res.status(400).send({
      message: "Error to create quote"
    });
  }
}