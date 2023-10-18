import { header_edit } from "../utilities/config";


export async function deleteData(urldata:string, id:string){
    const ft = await fetch(`${urldata}/${id}`, {
        method:'DELETE',
        headers:{
            ...header_edit
        }});
        if(!ft.ok) throw `Error ${ft.status} ${ft.statusText}`;
}