import '../styles/eliminar.scss';
import { UseContexto } from "../Context";
import { deleteData } from "../api/deleteData";
import {useNavigate} from 'react-router-dom';

export function BotonEliminar({config, id}:{config:string, id:string}) {
    const { actualizar, setAztualizar } = UseContexto();
    const navegar=useNavigate();
    const eliminar=()=>{
        deleteData(config, id)
        .then(()=>{
            setAztualizar(!actualizar);
            navegar('/');
        })
        .catch(error=>console.error(error));
    }
    return (
        <button className="eliminar" onClick={eliminar}>Eliminar</button>
    );
}
