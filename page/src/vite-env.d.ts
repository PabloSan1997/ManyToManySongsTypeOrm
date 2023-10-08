/// <reference types="vite/client" />


interface Autor_Base {
    name_author:string,
    birthday:string,
    image_author:string
}

interface Autor_ID extends Autor_Base{
    id_autor:string
}

interface Autor_full extends Autor_ID{
    songs:Songs_id[]
}

interface Songs_Base {
    name_sing:string,
    release_date:string,
    image_Album:string,
    album_name:string,
}

interface Songs_id extends Songs_Base{
    id_cancion:string;
}

interface Songs_full extends Songs_id {
    authors:Autor_ID[]
}

interface Songs_Add extends Autor_Base{
    authors:string[]
}

type Children = {
    children:JSX.Element|JSX.Element[]
}