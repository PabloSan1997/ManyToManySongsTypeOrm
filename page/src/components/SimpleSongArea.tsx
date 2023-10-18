import { UseContexto } from "../Context";
import { useNavigate } from 'react-router-dom';

export function SimpleSongArea() {
    const { canciones } = UseContexto();
    const simple: Songs_id[] = canciones.map(p => {
        const { name_sing, album_name, id_cancion, image_Album, release_date } = p;
        return {
            name_sing,
            album_name,
            id_cancion,
            image_Album,
            release_date
        }
    });

    return (
        <div className="contenedor contenedor_canciones">
            <h2 className="titulo">Canciones</h2>
            <div className="cajas">
                {simple.map(p => (
                    <OneSong key={p.id_cancion} {...p} />
                ))}
            </div>
        </div>
    );
}

export function OneSong({ name_sing, album_name, image_Album, release_date, id_cancion }: Songs_id) {
    const date = new Date(Date.parse(release_date));
    const navegar = useNavigate();
    return (
        <div className="one_song caja" onClick={() => navegar('/songs/' + id_cancion)}>
            <img src={image_Album} alt="" className="foto" />
            <div className="area_texto">
                <h2 className="nombre">{name_sing}</h2>
                <p className="texto">{album_name}</p>
                <p className="date">{date.toLocaleDateString()}</p>
            </div>
        </div>
    );
}