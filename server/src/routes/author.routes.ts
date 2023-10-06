import express from 'express';
import { ControllerAuthor } from '../controllers/author.controller';


export const routeAuthor = express.Router();
const controller = new ControllerAuthor();

routeAuthor.get('/', controller.readAuthors);
routeAuthor.get('/search', controller.searchAuthor);
routeAuthor.get('/:id_autor', controller.readOneAuthor);
routeAuthor.delete('/:id_autor', controller.deleteAuthor);
routeAuthor.post('/', controller.addAuthors);