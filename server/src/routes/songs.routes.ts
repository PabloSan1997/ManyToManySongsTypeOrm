import express from 'express';
import { ControllerSongs } from '../controllers/songs.authors';
import { HeaderAutoidentication } from '../middlewares/headersHandle';
import { joiHandle } from '../middlewares/joiHandle';
import { addSongJoi, idSchemajoiSong } from '../middlewares/joiSchema/songs';

export const routeSongs = express.Router();
const controller = new ControllerSongs();
const permiso = new HeaderAutoidentication();

routeSongs.get('/', controller.readSongs);

routeSongs.get('/search', controller.readSearchName);

routeSongs.get('/album/:album', controller.readAlbumSongs);

routeSongs.get('/:id_cancion',
    joiHandle(idSchemajoiSong, 'params'),
    controller.readIdSong);

routeSongs.delete('/:id_cancion',
    joiHandle(idSchemajoiSong, 'params'),
    permiso.editDataPermision,
    controller.deleteSong);

routeSongs.post('/',
    permiso.editDataPermision,
    joiHandle(addSongJoi, 'body'),
    controller.addSongs);
