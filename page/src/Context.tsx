import React from "react";
import { readAuthors, readSongs } from "./api/readData";


const Contexto = React.createContext({});

export function ProviderContext({ children }: Children) {
    const [canciones, setCanciones] = React.useState<Songs_full[]>([]);
    const [autores, setAutores] = React.useState<Autor_full[]>([]);
    const [actualizar, setAztualizar] = React.useState(false);
   
    React.useEffect(() => {
        readSongs()
            .then(data => {
                setCanciones(data);
            })
            .catch(error => {
                console.error(error);
                setCanciones([]);
            });
        readAuthors()
            .then(data => {
                setAutores(data);
            })
            .catch(error => {
                console.error(error);
                setAutores([]);
            });
    }, [actualizar]);
    return (
        <Contexto.Provider value={{
            canciones,
            autores,
            setAztualizar,
            actualizar
        }}>
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Contexto;