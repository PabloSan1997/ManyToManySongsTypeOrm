import express from 'express';
import { ControllerAuthor } from '../controllers/author.controller';
import { HeaderAutoidentication } from '../middlewares/headersHandle';
import { joiHandle } from '../middlewares/joiHandle';
import { addAutorSchemaJoi } from '../middlewares/joiSchema/author';


export const routeAuthor = express.Router();
const controller = new ControllerAuthor();
const permiso = new HeaderAutoidentication();

routeAuthor.get('/', controller.readAuthors);
routeAuthor.get('/search', controller.searchAuthor);
routeAuthor.get('/:id_autor', controller.readOneAuthor);
routeAuthor.delete('/:id_autor', permiso.editDataPermision, controller.deleteAuthor);
routeAuthor.post('/',
    permiso.editDataPermision,
    joiHandle(addAutorSchemaJoi, 'body'),
    controller.addAuthors);