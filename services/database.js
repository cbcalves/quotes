import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Utilizando Quotes Free API
// https://type.fit/api/quotes carregados para o arquivo quotes.txt
// Este é praticamente o único arquivo para mudar quando for usar um banco de dados.

const schema = mongoose.Schema({
    text: String,
    author: String,
});

const quoteModel = mongoose.model('quote', schema);

let db_quotes = null;
let db_length = 0;

async function connect() {
    try {
        const { DB_CONNECTION } = process.env;
        db_quotes = await mongoose.connect(DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });

        db_length = await quoteModel.countDocuments({});
        return true;
    } catch (err) {
        console.log('DB ' + err);
        return false;
    }
}

async function read(id) {
    try {
        let quote = null;
        if (id === undefined) {
            const rand = Math.floor(Math.random() * db_length);
            quote = await quoteModel.find({}).skip(+rand).limit(1);
        } else {
            quote = await quoteModel.find({}).skip(+id).limit(1);
        }

        // Don't return _id
        quote = {
            text: quote[0].text,
            author: quote[0].author,
        }

        return quote;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function create(quote) {
    try {
        const { text, author } = quote;
        const newQuote = new quoteModel({ text, author });

        await newQuote.save();
        return db_length++;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function update(quote, id) {
    try {
        const updateQuote = await quoteModel.find({}).skip(+id).limit(1);
        if (!updateQuote) {
            throw ("No id");
        }

        await quoteModel.findByIdAndUpdate(updateQuote[0]._id, quote);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function deleteOne(id) {
    try {
        const quote = await quoteModel.find({}).skip(+id).limit(1);
        if (!quote) {
            throw ("No id");
        }
        --db_length;
        await quoteModel.deleteOne({ _id: quote[0]._id });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export default {
    connect,
    create,
    read,
    update,
    deleteOne
}
