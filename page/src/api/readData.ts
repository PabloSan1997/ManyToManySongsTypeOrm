import { config, header_usar } from "../utilities/config";


export async function readSongs():Promise<Songs_full[]> {
    const soli = {
        method:'GET',
        headers:{
            ...header_usar
        }
    }
    const ft = await fetch(config.api_songs, soli);
    if(!ft.ok) throw `${ft.status} ${ft.statusText}`;
    const songs = await ft.json();
    return songs;
}

export async function readAuthors():Promise<Autor_full[]>{
    const soli = {
        method:'GET',
        headers:{
            ...header_usar
        }
    }
    const ft = await fetch(config.api_authors, soli);
    if(!ft.ok) throw `${ft.status} ${ft.statusText}`;
    const autors = await ft.json();
    return autors;
}