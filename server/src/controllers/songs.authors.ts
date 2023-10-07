import Boom from '@hapi/boom';
import { Request, Response, NextFunction } from 'express';
import { AppDataSourse } from '../db/config';
import { Songs } from '../db/models/Songs';
import { Author } from '../db/models/Author';

export class ControllerSongs {
    async readSongs(req: Request, res: Response, next: NextFunction) {
        try {
            const repositorio = AppDataSourse.getRepository(Songs);
            const data = await repositorio.find({
                relations: {
                    authors: true
                }
            });
            res.json(data);
        } catch (error) {
            next(Boom.badImplementation());
        }
    }
    async readIdSong(req: Request, res: Response, next: NextFunction) {
        try {
            const repositorio = AppDataSourse.getRepository(Songs);
            const { id_cancion } = req.params as { id_cancion: string };
            const data = await repositorio.findOne({ where: { id_cancion }, relations: { authors: true } });
            if (!data) throw Boom.notFound('No se encontro dicho elemento');
            res.json(data);
        } catch (error) {
            next(error);
        }
    }
    async readSearchName(req: Request, res: Response, next: NextFunction) {
        try {
            const repositorio = AppDataSourse.getRepository(Songs);
            const { nombre } = req.query as { nombre: string }
            const data = await repositorio.find({ relations: { authors: true } });
            const filtrado = data.filter(e => {
                const name = nombre.toLocaleLowerCase();
                const nameSong = e.name_sing.toLocaleLowerCase();
                return nameSong.includes(name);
            });
            res.json(filtrado);
        } catch (error) {
            res.json(error);
        }
    }
    async addSongs(req: Request, res: Response, next: NextFunction) {
        try {
            const miCancion = req.body as SongReq;
            const repositorio = AppDataSourse.getRepository(Songs);
            const repoAuthor = AppDataSourse.getRepository(Author);
            const solicitudes = await Promise.all(miCancion.authors.map(async element => {
                const data = await repoAuthor.findOne({
                    where: {
                        id_autor: element
                    }
                });
                return data;
            }));

            const autores = solicitudes.filter(element => !!element) as Author[];
            const nuevaCancion = {
                ...miCancion,
                authors: autores
            }
            const generar = repositorio.create(nuevaCancion);
            await repositorio.manager.save(generar);
            res.json({ message: 'hola' });
        }
        catch (error) {
            res.json({ message: 'No se pudo', error })
        }
    }
    async deleteSong(req: Request, res: Response, next: NextFunction) {
        try {
            const { id_cancion } = req.params as { id_cancion: string }
            const repositorio = AppDataSourse.getRepository(Songs);
            const data = await repositorio.findOne({ where: { id_cancion }, relations: { authors: true } });
            if (!data) throw Boom.notFound('No se puede borrar elemento');
            data.authors = [];
            await repositorio.manager.save(data);
            await repositorio.delete({ id_cancion });
            res.json({ message: 'sePudo' });
        } catch (error) {
            next(error);
        }
    }
}