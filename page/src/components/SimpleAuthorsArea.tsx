import { UseContexto } from "../Context";
import { useNavigate } from "react-router-dom";

export function SimpleAutorArea() {
    const { autores } = UseContexto();
    const simple: Autor_ID[] = autores.map(p => {
        const { name_author, id_autor, birthday, image_author } = p;
        return {
            name_author,
            id_autor,
            birthday,
            image_author
        }
    });

    return (
        <div className="contenedor contenedor_autores">
            <h2 className="titulo">Artistas</h2>
            <div className="cajas">
                {simple.map(p => (
                    <OneAutor key={p.id_autor} {...p} />
                ))}
            </div>
        </div>
    );
}

export function OneAutor({ name_author, birthday, image_author, id_autor }: Autor_ID) {
    const date = new Date(Date.parse(birthday));
    const navegar = useNavigate();
    return (
        <div className="one_autor caja" onClick={() => navegar('/authors/' + id_autor)}>
            <img src={image_author} alt="" className="foto" />
            <div className="area_texto">
                <h2 className="nombre">{name_author}</h2>
                <p className="date">{date.toLocaleDateString()}</p>
            </div>
        </div>
    );
}