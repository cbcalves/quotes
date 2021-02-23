import db from './database.js';

const create = async (req, res) => {
    try {
        const { text, author } = req.body;

        if (!text || !author) {
            throw ("Need text and author");
        }

        const totalQuotes = await db.create({ text, author });
        res.send({ total: totalQuotes });
    } catch (err) {
        res.status(400).send({ error: err });
    }
}

const read = async (req, res) => {
    const id = req.params.id;
    try {
        let quote = await db.read(id);
        if (!quote) {
            throw ('Invalid id: ' + id);
        }
        res.send(quote);
    } catch (err) {
        res.status(400).send({ error: err });
    }

}

const update = async (req, res) => {
    const id = req.params.id;
    try {
        const quote = await db.read(id);
        if (!quote) {
            throw ('Invalid id: ' + id);
        }
        const { text, author } = req.body;

        if (!text || !author) {
            throw ("Need text and author");
        }

        await db.update({ text, author }, id);
        res.send({ text, author });
    } catch (err) {
        res.status(400).send({ error: err });
    }
}

const deleteOne = async (req, res) => {
    const id = req.params.id;
    try {
        const quote = await db.read(id);
        if (!quote) {
            throw ('Invalid id: ' + id);
        }
        await db.deleteOne(id);
        res.status(200).send();
    } catch (err) {
        res.status(400).send({ error: err });
    }
}

export default {
    create,
    read,
    update,
    deleteOne
}
