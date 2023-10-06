import express from 'express';
import { ControllerAuthor } from '../controllers/author.controller';


export const routeAuthor = express.Router();
const controller = new ControllerAuthor();

routeAuthor.get('/', controller.readAuthors);
routeAuthor.get('/search', controller.searchAuthor);
routeAuthor.get('/:id_autor', controller.readOneAuthor);
routeAuthor.post('/', controller.addAuthors);