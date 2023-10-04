import express, { Express } from 'express';
import { routeAuthor } from './author.routes';
import { routeSongs } from './songs.routes';


export function createApi(app: Express) {
    const mainRoute = express.Router();
    app.use('/api/v1', mainRoute);

    mainRoute.use('/authors', routeAuthor);
    mainRoute.use('/songs', routeSongs);

    app.get('/', async (req, res) => {
        res.json({ message: "Bienvenido a mi Api :)" });
    });
}