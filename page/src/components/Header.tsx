import {useNavigate} from 'react-router-dom';
import { AgregarAutor } from './AgregarAutor';
import { AgregarCancion } from './AgregarCancion';

export function MyHeader(){
    const navegar = useNavigate();
    
    return(
        <header>
            <h1 onClick={()=>navegar('/')}>MySongsList</h1>
            <div className="AreaBotones">
                <button className="boton">Nuevo Artista</button>
                <button className="boton">Nueva cancion</button>
            </div>
            <AgregarAutor/>
            <AgregarCancion/>
        </header>
    );
}