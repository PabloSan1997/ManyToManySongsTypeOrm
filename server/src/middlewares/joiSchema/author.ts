import joi from 'joi';

const id_autor = joi.string().uuid().min(1).required();
const name_author = joi.string().min(1).required();
const birthday = joi.date().required();
const image_author = joi.string().min(1).required();

export const addAutorSchemaJoi = joi.object(
    {
        name_author,
        birthday,
        image_author
    }
);