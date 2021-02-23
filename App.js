import express from 'express';
import cors from 'cors';
import path from 'path';
import { routes } from './routes/routes.js';
import db from './services/database.js';

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Passa a ser servidor da página de quotes
 */
app.use(express.static(path.join(path.resolve(), 'client')));

/**
 * Rotas da api
 */
app.use('/api/', routes);

/**
 * Abrindo o servidor
 */
const APP_PORT = process.env.PORT || 3000;
app.listen(APP_PORT, async () => {
    try {
        const conn = await db.connect();
        if (!conn) {
            throw ('No database connection');
        }
        console.log ('Database connected...');
        console.log(`Server started on port ${APP_PORT}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
});
