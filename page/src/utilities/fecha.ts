

export function convertirFecha(data:string):string{
    const par = Date.parse(data);
    const fecha = new Date(par);
    return fecha.toLocaleDateString();
}

export function agregarFecha(data:string){
    const par = Date.parse(data);
    const fecha = new Date(par);
    return fecha;
}