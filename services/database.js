import { promises as fs } from 'fs';

// Utilizando Quotes Free API
// https://type.fit/api/quotes carregados para o arquivo quotes.txt
// Este é praticamente o único arquivo para mudar quando for usar um banco de dados.

let db_quotes = [];
const fileName = './data/quotes.txt';

async function connect() {
    try {
        const readData = await fs.readFile(fileName);
        db_quotes = JSON.parse(readData);
        return true;
    } catch (err) {
        console.log('DB ' + err);
        return false;
    }
}

async function read(id) {
    try {
        if (id === undefined) {
            let rand = Math.floor(Math.random() * db_quotes.length);
            return db_quotes[rand];
        }

        return db_quotes[id];
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function create(quote) {
    try {
        const { text, author } = quote;
        const newQuote = { text, author };
        db_quotes.push(newQuote);

        await fs.writeFile(fileName, JSON.stringify(db_quotes));
        return db_quotes.length;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function update(quote, id) {
    try {
        const { text, author } = quote;
        const newQuote = { text, author };

        if (!db_quotes[id]) {
            throw("No id");
        }
        db_quotes[id] = newQuote;

        await fs.writeFile(fileName, JSON.stringify(db_quotes));
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function deleteOne(id) {
    try {
        if (!db_quotes[id]) {
            throw("No id");
        }
        db_quotes.splice(id, 1);

        await fs.writeFile(fileName, JSON.stringify(db_quotes));
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
