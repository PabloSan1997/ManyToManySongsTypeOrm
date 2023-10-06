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
    async readOneAuthor(req:Request, res:Response, next:NextFunction){
        const {id_autor} = req.params as {id_autor: string};
        const repositorio = AppDataSourse.getRepository(Author);
        const data = await repositorio.findOne({where:{id_autor}, relations:{songs:true}});
        res.json(data);
    }
    async searchAuthor(req:Request, res:Response, next:NextFunction){
        try {
            const {nombre} = req.query as {nombre:string};
            const repositorio = AppDataSourse.getRepository(Author);
            const datos = await repositorio.find({relations:{songs:true}});
            const autores = datos.filter(p=>{
                const buscar = nombre.toLocaleLowerCase();
                const mostrar = p.name_author.toLocaleLowerCase();
                return mostrar.includes(buscar);
            });
            res.json(autores);
        } catch (error) {
            res.json({error});
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