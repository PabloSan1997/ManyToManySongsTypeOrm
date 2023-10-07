import express from 'express';
import { ControllerSongs } from '../controllers/songs.authors';
import { HeaderAutoidentication } from '../middlewares/headersHandle';

export const routeSongs = express.Router();
const controller = new ControllerSongs();
const permiso = new HeaderAutoidentication();

routeSongs.get('/', controller.readSongs);
routeSongs.get('/search', controller.readSearchName);
routeSongs.get('/:id_cancion', controller.readIdSong);
routeSongs.delete('/:id_cancion', permiso.editDataPermision, controller.deleteSong);
routeSongs.post('/', permiso.editDataPermision, controller.addSongs);
