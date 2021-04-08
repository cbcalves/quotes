const { getConnection } = require('typeorm');
const Quote = require('../../model/quote');

module.exports = async (_, res) => {
  try {
    const quoteRepository = getConnection().getRepository(Quote);
    const totalQuotes = await quoteRepository.count();

    const selectQuoteId = Math.floor(Math.random() * totalQuotes) + 1;
    const quote = await quoteRepository.findOne(selectQuoteId);

    return res.send({
      text: quote.text,
      author: quote.author
    });

  } catch (err) {
    res.status(400).send(null);
  }
}