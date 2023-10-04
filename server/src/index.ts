import "reflect-metadata";
import express from 'express';
import { environment_varieable } from "./utilities/variables";
import { createApi } from "./routes";
import cors from 'cors';
import morgan from 'morgan';
import { AppDataSourse } from "./db/config";

const app = express();

AppDataSourse.initialize().then(()=>{
    console.log('Se conecto a la base de datos')
}).catch(error=>console.log(error));

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

createApi(app);

app.listen(environment_varieable.port, ()=>{
    console.log(`http://localhost:${environment_varieable.port}`);
});
