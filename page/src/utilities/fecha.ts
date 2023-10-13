

export function convertirFecha(data:string):string{
    const par = Date.parse(data);
    const fecha = new Date(par);
    return fecha.toLocaleDateString();
}