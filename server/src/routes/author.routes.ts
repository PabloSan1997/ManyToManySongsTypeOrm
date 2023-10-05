import express from 'express';
import { ControllerAuthor } from '../controllers/author.controller';


export const routeAuthor = express.Router();
const controller = new ControllerAuthor();

routeAuthor.get('/', controller.readAuthors);
routeAuthor.post('/', controller.addAuthors);