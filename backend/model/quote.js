const { MongoClient } = require("mongodb");

class Quote {

  static async findOne () {

    const uri = process.env.DB_URL;
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    await client.connect();

    database = client.db('quotes');
    collection = database.collection('quotesCollection');

    this.quotesLength = await collection.countDocuments({});

    const rand = Math.floor(Math.random() * this.quotesLength);
    let quoteData = await collection.find().skip(rand).limit(1).toArray();

    return {
        text: quoteData[0].text,
        author: quoteData[0].author,
    };
  }

};

module.exports = Quote;