import {Boom} from '@hapi/boom';
import {Response, Request, NextFunction} from 'express';  

export function boomHandle(err:Boom ,req:Request, res:Response, next:NextFunction){
    if(err.isBoom){
        const errorData = err.output.payload;
        res.status(errorData.statusCode).json(errorData);
    }
    else{
        next(err);
    }
}