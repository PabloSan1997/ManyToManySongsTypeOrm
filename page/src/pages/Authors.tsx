import { useParams } from 'react-router-dom';
import React from "react";
import { readAuthorsOne } from '../api/readData';
import { MyHeader } from '../components/Header';
import { OneSong } from '../components/SimpleSongArea';
import { convertirFecha } from '../utilities/fecha';
import '../styles/singular.scss';
import { BotonEliminar } from '../components/BotonEliminar';
import { config } from '../utilities/config';

export function Authors() {
    const parametros = useParams() as { id: string };
    const [autor, setAutor] = React.useState<Autor_full | undefined>();
    React.useEffect(() => {
        readAuthorsOne(parametros.id)
            .then(p => {
                setAutor(p);
            })
            .catch(error => {
                console.error(error);
            });
    }, [parametros.id]);
    if (!autor) return <MyHeader />
    return (
        <>
            <MyHeader />
            <BotonEliminar id={parametros.id} config={config.api_authors}/>
            <div className="area_principal">
                <div className="area">
                    <img src={autor.image_author} alt="" className="foto" />
                </div>
                <div className="area">
                    <h2 className="nombre">{autor.name_author}</h2>
                    <p className="texto">Nacimiento: {convertirFecha(autor.birthday)}</p>
                </div>
            </div>
            <div className="complementos">
                <h2 className="seccion">Canciones</h2>
                <div className="cajas">
                    {autor.songs.map(p => (
                        <OneSong key={p.id_cancion} {...p} />
                    ))}
                </div>
            </div>
        </>
    );
}