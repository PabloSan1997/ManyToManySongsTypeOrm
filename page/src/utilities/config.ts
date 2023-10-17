
const url_base_api = 'http://localhost:3001';

export const config = {
    url_base_api,
    api_songs:`${url_base_api}/api/v1/songs`,
    api_authors:`${url_base_api}/api/v1/authors`
}

const permiso_usar = 'lFG32NUoQ7tWfBHV4sOgSxzRLwu9kDpI';
const permiso_editar = 'f9a6a5dffa16f9313a2243218294a26e9ffb550aa373d33777203e0ea00efba5';

export const header_usar = {
    permiso_usar,
    'Content-Type':'application/json'
}

export const header_edit = {
    permiso_editar,
    permiso_usar,
    'Content-Type':'application/json'
}