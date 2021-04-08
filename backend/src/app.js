// Importando Express, CORS e MongoDB
const typeorm = require("typeorm");
const express = require('express');
const cors = require('cors');
const path = require("path");
const app = express();

// Habilitando os CORS Requests
// Saiba mais: https://github.com/expressjs/cors
app.use(cors());
app.use(express.json());

// Importando Dotenv para não deixar a credencial do Banco de Dados exposta no código
// Saiba mais: https://github.com/motdotla/dotenv
require('dotenv').config();

app.use('/api/v1', require('./routes'));

// Heroku utiliza uma variável de ambiente chamada process.env.PORT para armazenar a porta
var port = process.env.PORT || 8080;

app.listen(port, async() => {

    try {
        typeorm.createConnection({
            type: process.env.DB_TYPE || 'mysql',
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 3304,
            username: process.env.DB_USER || 'admin',
            password: process.env.DB_PASS || '123456',
            database: process.env.DB_NAME || 'quote',
            synchronize: true,
            logging: false,
            entities: [
                require("./entity/quote")
            ]
        }).then(function () {
            console.log("Database connected");
        }).catch(err => {
            console.log(err.message);
        });

        console.log('Servidor ligado | ' + port);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
});
