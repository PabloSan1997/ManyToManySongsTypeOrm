
import { Request, Response, NextFunction } from 'express';
import { AppDataSourse } from '../db/config';
import { Songs } from '../db/models/Songs';
import { Author } from '../db/models/Author';

export class ControllerSongs {
    async readSongs(req: Request, res: Response, next: NextFunction) {
        const repositorio = AppDataSourse.getRepository(Songs);
        const data = await repositorio.find({relations:{
            authors:true
        }});
        res.json(data);
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
            
            const autores = solicitudes.filter(element=>!!element) as Author[];
            const nuevaCancion = {
                ...miCancion,
                authors:autores
            }
            const generar = repositorio.create(nuevaCancion);
            await repositorio.manager.save(generar);
            res.json({ message: 'hola' });
        }
        catch (error) {
            res.json({ message: 'No se pudo', error })
        }
    }
}