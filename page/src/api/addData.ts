import { config, header_edit } from "../utilities/config";
import { agregarFecha } from "../utilities/fecha";

export async function addAuthor(data:Autor_Base):Promise<void>{
    const salida = {
        ...data,
        birthday:agregarFecha(data.birthday)
    }
    const ft = await fetch(config.api_authors, {
        method:'POST',
        headers:{
            ...header_edit
        },
        body:JSON.stringify(salida)
    });
    if(!ft.ok){
        throw `Error: ${ft.status} ${ft.statusText}`;
    }
}

export async function addSong(data:Songs_Base){
    const salida = {
        ...data,
        release_date:agregarFecha(data.release_date)
    }
    const ft = await fetch(config.api_songs, {
        method:'POST',
        headers:{
            ...header_edit
        },
        body:JSON.stringify(salida)
    });
    if(!ft.ok){
        throw `Error: ${ft.status} ${ft.statusText}`;
    }
}