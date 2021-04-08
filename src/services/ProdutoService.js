import api from './api';

async function salvarProduto(produto) {
    await api('/produtos/salvar', {
        method: 'POST',
        data: produto,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        alert("salvo com sucesso !");
        return response;
    }).catch((erro) => {
        throw erro.response.data;
    })
}

async function listarProdutos() {
    await api('/produtos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response;
    }).catch(erro => {
        return erro;
    })
}

async function editarProduto(){

}

async function excluirProduto(){

}



export default { salvarProduto, listarProdutos }


