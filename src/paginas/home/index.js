import React from 'react';
import { Container } from 'bootstrap-4-react';
import Header from '../../componentes/layout/Header';
import CardProdutos from '../../componentes/layout/CardProdutos';
import Carrousel from '../../componentes/layout/Carrousel';
export default function Home() {

    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <Carrousel />
            <br />
            <h4>Produtos em Destaque</h4>
            <br />
            <Container>
                <Container>
                    <Container>
                        <CardProdutos />
                    </Container>
                </Container>
            </Container>
        </>
    )
}