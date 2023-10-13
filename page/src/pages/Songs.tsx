import { readSongsOne } from "../api/readData";
import { MyHeader } from "../components/Header";
import { OneAutor } from "../components/SimpleAuthorsArea";
import React from "react";
import {useParams} from 'react-router-dom';
import { convertirFecha } from "../utilities/fecha";


export function Songs(){
    const parametros = useParams() as { id: string };
    const [song, setSong] = React.useState<Songs_full | undefined>();
    console.log(parametros.id);
    React.useEffect(() => {
        readSongsOne(parametros.id)
            .then(p => setSong(p))
            .catch(error => {
                console.error(error);
            });
    }, [parametros.id]);
    if (!song) return <MyHeader />
    return (
        <>
            <MyHeader />
            <img src={song.image_Album} alt="" className="foto" />
            <h2 className="nombre">{song.name_sing}</h2>
            <p className="texto">Lanzamiento: {convertirFecha(song.release_date)}</p>
            <div className="canciones">
                {song.authors.map(p => (
                    <OneAutor key={p.id_autor} {...p} />
                ))}
            </div>
        </>
    );
   
}