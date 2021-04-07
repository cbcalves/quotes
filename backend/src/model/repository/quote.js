const Quote = require("../quote");

class QuoteRepository {
  async findOne () {
    const quote = new Quote("Esse é um programa de teste", "João Bosco");
    
    return {
      text: quote.text,
      author: quote.author
    };
  }
}

module.exports = QuoteRepository;