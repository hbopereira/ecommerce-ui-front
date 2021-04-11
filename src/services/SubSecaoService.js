import api from './api';

async function listarSubSecoes() {
   return await api('/subsecoes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response;
    }).catch(erro => {
        throw erro;
    })
}



export default {listarSubSecoes}


