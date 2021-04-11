import api from './api';

async function salvarProduto(produto, secaoProduto, subSecaoProduto) {
    let secao = { cod: '' };
    let subSecao = { cod: '' };
    secaoProduto != undefined ? secao.cod = secaoProduto.cod : secao = null;
    subSecaoProduto != undefined ? subSecao.cod = subSecaoProduto.cod : subSecao = null;
    const produtoASalvar = {
        descricao: produto.descricao,
        valven: produto.valven,
        secao: secao,
        subsecao: subSecao
    }
    await api('/produtos/salvar', {
        method: 'POST',
        data: produtoASalvar,
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
        throw erro;
    })
}

async function editarProduto() {

}

async function excluirProduto() {

}



export default { salvarProduto, listarProdutos }


