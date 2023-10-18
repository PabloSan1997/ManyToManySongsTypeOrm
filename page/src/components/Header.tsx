import { useNavigate } from 'react-router-dom';
import { AgregarAutor } from './AgregarAutor';
import { AgregarCancion } from './AgregarCancion';
import '../styles/header.scss';
import logo from '../asserts/songlist.svg';
import React from "react";


export function MyHeader() {
    const navegar = useNavigate();
    const [mostrar1, setMostrar1] = React.useState(false);
    const [mostrar2, setMostrar2] = React.useState(false);
    const mostrarfun1 = () => {
        setMostrar2(false);
        setMostrar1(!mostrar1);
    }
    const mostrarfun2 = () => {
        setMostrar2(!mostrar2);
        setMostrar1(false);
    }
    return (
        <header>
            <h1 onClick={() => navegar('/')}>
                <img src={logo} alt="Este es el logo" className="logo" />
                <span>MySongList</span>
            </h1>
            <div className="AreaBotones">
                <button className="boton" onClick={mostrarfun1}>Nuevo Artista</button>
                <button className="boton" onClick={mostrarfun2}>Nueva cancion</button>
            </div>
                <AgregarAutor mostrar={mostrar1}/>
                <AgregarCancion mostrar={mostrar2}/>
        </header>
    );
}