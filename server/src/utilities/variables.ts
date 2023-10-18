import'dotenv/config';


export const environment_varieable={
	port:process.env.PORT||3001,
	url_database:process.env.URL_DB,
	usar:process.env.PERMISO_USAR,
	modificar:process.env.PERMISO_MODIFICAR
};