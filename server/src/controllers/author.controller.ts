import {Request, Response, NextFunction} from 'express';
import { AppDataSourse } from '../db/config';
import { Author } from '../db/models/Author';

export class ControllerAuthor{
    async readAuthors(req:Request, res:Response, next:NextFunction){
        try {
            const repositorio = AppDataSourse.getRepository(Author);
            const data = await repositorio.find({relations:{songs:true}});
            res.json(data);
        } catch (error) {
            res.status(404).json({message:'No se que onda'})
        }
    }
    async addAuthors(req:Request, res:Response, next:NextFunction){
        const cuerpo = req.body as AuthorReq;
        const repositorio = AppDataSourse.getRepository(Author);
        const nuevo = repositorio.create(cuerpo);
        await repositorio.manager.save(nuevo);
        res.json(nuevo);
    }
}