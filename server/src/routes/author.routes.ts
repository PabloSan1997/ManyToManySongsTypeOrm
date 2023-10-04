import express from 'express';


export const routeAuthor = express.Router();


routeAuthor.get('/',async (req, res)=>{
    res.json({message:'hola soy autor'});
});