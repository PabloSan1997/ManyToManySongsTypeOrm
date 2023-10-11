import { UseContexto } from "../Context";


export function SimpleAutorArea(){
    const {autores} = UseContexto();
    const simple:Autor_ID[] =autores.map(p=>{
        const {name_author, id_autor, birthday, image_author} = p;
        return {
            name_author,
            id_autor,
            birthday,
            image_author
        }
    });
    
    return(
        <div className="contenedor contenedor_autores">
            {simple.map(p=>(
                <OneAutor key={p.id_autor} {...p}/>
            ))}
        </div>
    );
}

function OneAutor({name_author, birthday, image_author}:Autor_ID){
    const date =new Date(Date.parse(birthday));
    return(
        <div className="one_autor">
            <h2 className="nombre">{name_author}</h2>
            <img src={image_author} alt="" className="foto" />
            <p className="date">{date.toLocaleDateString()}</p>
        </div>
    );
}