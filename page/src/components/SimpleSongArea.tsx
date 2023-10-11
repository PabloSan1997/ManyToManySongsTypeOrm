import { UseContexto } from "../Context";


export function SimpleSongArea(){
    const {canciones} = UseContexto();
    const simple:Songs_id[] = canciones.map(p=>{
        const {name_sing, album_name, id_cancion, image_Album, release_date} = p;
        return {
            name_sing,
            album_name,
            id_cancion,
            image_Album,
            release_date
        }
    });
    
    return(
        <div className="contenedor contenedor_canciones">
            {simple.map(p=>(
                <OneSong key={p.id_cancion} {...p}/>
            ))}
        </div>
    );
}

function OneSong({name_sing, album_name, image_Album, release_date}:Songs_id){
    const date =new Date(Date.parse(release_date));
    return(
        <div className="one_song">
            <h2 className="nombre">{name_sing}</h2>
            <img src={image_Album} alt="" className="foto" />
            <p className="texto">{album_name}</p>
            <p className="date">{date.toLocaleDateString()}</p>
        </div>
    );
}