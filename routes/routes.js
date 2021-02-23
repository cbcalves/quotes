import express from 'express';
import crud from '../services/crud.js';

const routes = express.Router();

routes.post('/', crud.create);
routes.get('/', crud.read); // random
routes.get('/:id', crud.read);
routes.put('/:id', crud.update);
routes.delete('/:id', crud.deleteOne);

export { routes };
