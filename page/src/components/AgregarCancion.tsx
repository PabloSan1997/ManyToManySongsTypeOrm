
import React from "react";
import { UseContexto } from "../Context";
import { addSong } from "../api/addData";

type AutorOpcion = {
    name_author: string, id_autor: string
}

const initialState: Songs_Add = {
    name_sing: '',
    release_date: "",
    image_Album: "",
    album_name: "",
    authors: []
}
const initialStateError = {
    name_sing: false,
    release_date: false,
    image_Album: false,
    album_name: false,
    authors: false
}
type Opciones = "name_sing" | 'release_date' | 'image_Album' | 'album_name';
export function AgregarCancion({mostrar}:{mostrar:boolean}) {
    const { autores, actualizar, setAztualizar } = UseContexto();
    const nombres = autores.map(p => {
        const { id_autor, name_author } = p;
        return { id_autor, name_author }
    });

    const [textoCancion, setTextoCancion] = React.useState(initialState);
    const [erroresCanciones, setErroresCanciones] = React.useState(initialStateError);
    const agregarAutor = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const autores = [...textoCancion.authors];
        if (!textoCancion.authors.includes(e.target.value) && !!e.target.value) {
            autores.push(e.target.value);
            setTextoCancion({ ...textoCancion, authors: autores });
        }

    }
    const elminiar = (a: string) => {
        const autores = [...textoCancion.authors];
        const nuevo = autores.filter(p => p != a);
        setTextoCancion({ ...textoCancion, authors: nuevo });
    }
    const escribir = (e: React.ChangeEvent<HTMLInputElement>, opcion: Opciones) => {
        const clonar = { ...textoCancion };
        clonar[opcion] = e.target.value;
        setTextoCancion(clonar);
    }
    const subir = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const checar = !textoCancion.album_name || !textoCancion.image_Album || textoCancion.authors.length == 0 || !textoCancion.name_sing || !textoCancion.release_date;
        if (checar) {
            setErroresCanciones({
                album_name: !textoCancion.album_name,
                image_Album: !textoCancion.image_Album,
                authors: textoCancion.authors.length == 0,
                name_sing: !textoCancion.name_sing,
                release_date: !textoCancion.release_date
            });
        } else {
            addSong(textoCancion)
            .then(()=>{
                setAztualizar(!actualizar);
                setErroresCanciones(initialStateError);
                setTextoCancion(initialState);
            })
            .catch(error=>console.error(error));
        }
    }

    return (
        <form className={`formulario agregar-cancion ${mostrar?'mostrar':''}`} onSubmit={subir}>
            <h2>Agregar Cancion Nueva</h2>
            <label className="label">Nombre</label>
            {erroresCanciones.name_sing && <p className="error">Agregue nombre</p>}
            <input
                type="text"
                className="entrada"
                placeholder="Escribir"
                value={textoCancion.name_sing}
                onChange={e => escribir(e, 'name_sing')}
            />
            <label className="label">Fecha de Lanzamiento</label>
            {erroresCanciones.release_date && <p className="error">Agregue fecha</p>}
            <input
                type="date"
                className="entrada"
                placeholder="Escribir"
                value={textoCancion.release_date}
                onChange={e => escribir(e, 'release_date')}
            />
            <label className="label">Nombre del album</label>
            {erroresCanciones.album_name && <p className="error">Agregue nombre del album</p>}
            <input
                type="text"
                className="entrada"
                placeholder="Escribir"
                value={textoCancion.album_name}
                onChange={e => escribir(e, 'album_name')}
            />
            <label className="label">Imagen del album</label>
            {erroresCanciones.image_Album && <p className="error">Agregue link</p>}
            <input
                type="text"
                className="entrada"
                placeholder="Escribir"
                value={textoCancion.image_Album}
                onChange={e => escribir(e, 'image_Album')}
            />
            <label className="label">Seleccione los autores</label>
            {erroresCanciones.authors && <p className="error">Agregue los autores</p>}
            <select className="entrada" id="selecion" onChange={agregarAutor}>
                <option value="" defaultChecked>Escoja autor</option>
                {nombres.map(p => (
                    <Opciones key={p.id_autor} {...p} />
                ))}
            </select>
            <MostrarAutores autores={nombres} autoresSeleccionados={textoCancion.authors} eliminar={elminiar} />
            <button className="boton-agregar" type="submit">Agregar</button>
        </form>
    );
}

function Opciones({ id_autor, name_author }: AutorOpcion) {
    return <option value={id_autor}>{name_author}</option>
}
function MostrarAutores({
    autores,
    autoresSeleccionados,
    eliminar
}:
    {
        autores: AutorOpcion[],
        autoresSeleccionados: string[],
        eliminar(a: string): void
    }) {
    const mostrar = autores.filter(p => autoresSeleccionados.includes(p.id_autor));
    return (
        <div className="areaAutores">
            <h3>Autores:</h3>
            {mostrar.map(p => (
                <p
                    className="mostrar-nombre"
                    key={p.id_autor}
                    onClick={() => eliminar(p.id_autor)}
                >{p.name_author}</p>
            ))}
        </div>
    );
}