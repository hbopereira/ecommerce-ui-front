import React from 'react';
import Header from '../../../../componentes/layout/Header';
import CardProdutos from '../../../../componentes/layout/CardProdutos';

export default function ProdutoListagemAdm() {

    return (
        <>
            <Header />
            <br />
            <h2>Listagem de Produtos</h2>
            <br />
            <CardProdutos />

        </>
    )
}