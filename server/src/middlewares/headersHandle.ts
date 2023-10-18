import { Request, Response, NextFunction } from 'express';
import { environment_varieable } from '../utilities/variables';
import Boom from '@hapi/boom';


export class HeaderAutoidentication{
	readDataPermision(req:Request, res:Response, next:NextFunction){
		const {permiso_usar} = req.headers as {permiso_usar:string};
		if(environment_varieable.usar===permiso_usar){
			next();
		}
		else{
			next(Boom.unauthorized('No tienes permiso para usar esta api'));
		}
	}
	editDataPermision(req:Request, res:Response, next:NextFunction){
		const {permiso_editar} = req.headers as {permiso_editar:string};
		if(environment_varieable.modificar===permiso_editar){
			next();
		}
		else{
			next(Boom.unauthorized('No tienes permiso para usar esta api'));
		}
	}
}