
interface AuthorReq {
    name_author: string;
    birthday: string;
    image_author: string;
}
interface AuthorRes extends AuthorReq {
    id_autor: string;
}

interface SonsgsType {
    name_sing:string;
    release_date:string;
    image_Album:string;
    album_name:string;
}
interface SongsId extends SonsgsType{
    id_cancion:string;
}
interface SongReq extends SonsgsType{
    authors:string[]
}
