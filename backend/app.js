// Importando Express, CORS e MongoDB
const express = require('express');
const cors = require('cors');
const path = require("path");
const app = express();

// Habilitando os CORS Requests
// Saiba mais: https://github.com/expressjs/cors
app.use(cors());
app.use(express.json());

/**
 * Passa a ser servidor da página front-end de quotes
 */
app.use(express.static(path.join(path.resolve(), 'client')));

// Importando Dotenv para não deixar a credencial do Banco de Dados exposta no código
// Saiba mais: https://github.com/motdotla/dotenv
require('dotenv').config();

app.use(require('./routes'));

// Heroku utiliza uma variável de ambiente chamada process.env.PORT para armazenar a porta
var port = process.env.PORT || 8080;

app.listen(port, async() => {
    try {
        console.log('Servidor ligado');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
});
