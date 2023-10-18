import {Response, Request, NextFunction} from 'express';  
import  {Schema} from 'joi';
import Boom from '@hapi/boom';

export function joiHandle(esquema:Schema, prop:'body'|'params'|'headers'){
	return (req:Request, res:Response, next:NextFunction)=>{
		const data = req[prop];
		const {error} = esquema.validate(data, {abortEarly:false});
		if(error){
			next(Boom.badRequest(error));
		}else{
			next();
		}
	};
}