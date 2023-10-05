import express from 'express';
import { ControllerSongs } from '../controllers/songs.authors';

export const routeSongs = express.Router();
const controller = new ControllerSongs();

routeSongs.get('/', controller.readSongs);
routeSongs.post('/', controller.addSongs);