import { readSongsOne } from "../api/readData";
import { MyHeader } from "../components/Header";
import { OneAutor } from "../components/SimpleAuthorsArea";
import React from "react";
import { useParams } from 'react-router-dom';
import { convertirFecha } from "../utilities/fecha";
import { BotonEliminar } from "../components/BotonEliminar";
import { config } from "../utilities/config";


export function Songs() {
    const parametros = useParams() as { id: string };
    const [song, setSong] = React.useState<Songs_full | undefined>();
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
            <BotonEliminar id={parametros.id} config={config.api_songs}/>
            <div className="area_principal">
                <div className="area">
                    <img src={song.image_Album} alt="" className="foto" />
                </div>
                <div className="area">
                    <h2 className="nombre">{song.name_sing}</h2>
                    <p className="album">Album: {song.album_name}</p>
                    <p className="texto">Lanzamiento: {convertirFecha(song.release_date)}</p>
                </div>
            </div>
            <div className="complementos">
                <h2 className="seccion">Autores</h2>
                <div className="cajas">
                    {song.authors.map(p => (
                        <OneAutor key={p.id_autor} {...p} />
                    ))}
                </div>
            </div>
        </>
    );

}