const typeorm = require("typeorm");
const express = require('express');
const cors = require('cors');
const { log } = require('./helper/log');

const app = express();

app.use(cors());
app.use(express.json());

require('dotenv').config();

app.use('/api/v1', require('./routes'));

var port = process.env.PORT || 8080;

app.listen(port, async() => {

    try {
        const result = await typeorm.createConnection({
            type: process.env.DB_TYPE || 'mysql',
            host: process.env.DB_HOST || 'mariadb',
            port: process.env.DB_PORT || 3306,
            username: process.env.DB_USER || 'admin',
            password: process.env.DB_PASS || '123456',
            database: process.env.DB_NAME || 'quote',
            synchronize: process.env.SYNCHRONIZE || true,
            logging: process.env.LOGGING || true,
            entities: [
                require("./entity/quote.js")
            ]
        });
        log("> Database connected");        
    } catch (err) {
        log("> Err: Não foi possível conectar ao banco de dados.")
        log(err.message);
        process.exit(0);
        return;
    }

    log('> Servidor ligado | ' + port);
});