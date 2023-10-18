
import React from "react";
import { addAuthor } from "../api/addData";
import { UseContexto } from "../Context";


const initialState: Autor_Base = {
    birthday: '',
    name_author: '',
    image_author: ''
}

const initialStateError = {
    birthday: false,
    name_author: false,
    image_author: false
}

type Opciones = 'birthday' | 'name_author' | 'image_author';


export function AgregarAutor({mostrar}:{mostrar:boolean}) {
    const [textAutor, setTextAutor] = React.useState(initialState);
    const [errorTexto, setErrorTexto] = React.useState(initialStateError);
    const { setAztualizar, actualizar } = UseContexto();
    const escribir = (e: React.ChangeEvent<HTMLInputElement>, opcion: Opciones) => {
        const data = {
            ...textAutor
        }
        data[opcion] = e.target.value;
        setTextAutor(data);
    }

    const subir = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!textAutor.birthday || !textAutor.image_author || !textAutor.name_author) {
            const textoVer = {
                birthday: !textAutor.birthday,
                name_author: !textAutor.name_author,
                image_author: !textAutor.image_author
            }
            setErrorTexto(textoVer)
        } else {
            addAuthor(textAutor)
                .then(() => {
                    setAztualizar(!actualizar);
                    setErrorTexto(initialStateError);
                    setTextAutor(initialState);
                })
                .catch(error=>console.error(error));

        }
    }
    return (
        <form action="" className={`agregar-autor formulario ${mostrar?'mostrar':''}`} onSubmit={subir}>
            <h2>Agregar Cantante Nuevo</h2>
            <label className="label">Nombre</label>
            {errorTexto.name_author && <p className="error">Escriba el Nombre</p>}
            <input
                type="text"
                className="entrada"
                placeholder="Escribir"
                value={textAutor.name_author}
                onChange={e => escribir(e, 'name_author')}
            />
            <label className="label">Fecha de nacimiento</label>
            {errorTexto.birthday && <p className="error">Seleccione fecha de nacimiento</p>}
            <input
                type="date"
                className="entrada"
                placeholder="Escribir"
                value={textAutor.birthday}
                onChange={e => escribir(e, 'birthday')}
            />
            <label className="label">Link de imagen</label>
            {errorTexto.image_author && <p className="error">Agregue una url</p>}
            <input
                type="text"
                className="entrada"
                placeholder="Escribir"
                value={textAutor.image_author}
                onChange={e => escribir(e, 'image_author')}
            />
            <button className="boton-agregar">Agregar</button>
        </form>
    );
}