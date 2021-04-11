import api from './api';

async function listarSecoes() {
   return await api('/secoes', {
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



export default {listarSecoes}


