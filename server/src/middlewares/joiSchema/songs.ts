import joi from 'joi';

const id_cancion = joi.string().uuid().min(1).required();
const name_sing = joi.string().min(1).required();
const release_date = joi.date().min(1).required();
const image_Album = joi.string().min(1).required();
const album_name = joi.string().min(1).required();
const authors = joi.array().min(1).items(joi.string()).required();

export const addSongJoi = joi.object({
	name_sing,
	release_date,
	image_Album,
	album_name,
	authors
});

export const idSchemajoiSong = joi.object({ id_cancion });
export const AlbumJoiSchema = joi.object({album:album_name});