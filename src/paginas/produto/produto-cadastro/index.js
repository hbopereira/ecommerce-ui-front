import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'bootstrap-4-react';
import Header from '../../../componentes/layout/Header';
import ProdutoService from '../../../services/ProdutoService';
export default function ProdutoCadastro() {

    const [produto, setProduto] = useState({ descricao: '', valven: '', tabelasPrecos: [] });


    async function salvarProduto(event) {
        event.preventDefault();
        return await ProdutoService.salvarProduto(produto)
            .then(() => {
                limparCamposFormCadastroProduto()
            }).catch(erro => {
                console.log(erro)
            })
    }

    function preecherArrayTabelaPreco(){
        
    }

    function limparCamposFormCadastroProduto() {
        setProduto({ descricao: '', valven: '' });
    }


    return (
        <>
            <Header />
            <br />
            <br />
            <h2>Cadastro de Produto</h2>
            <br />
            <Container>
                <Form onSubmit={salvarProduto}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <label className="float-left" htmlFor="exampleControlsInput1">Descrição</label>
                                <Form.Input id="descricao" placeholder="descricao"
                                    value={produto.descricao}
                                    onChange={(event) => {
                                        produto.descricao = event.target.value;
                                        setProduto({ descricao: produto.descricao, valven: produto.valven });
                                    }} />
                            </Form.Group>
                        </Col>
                        <Col col="col lg-3">
                            <Form.Group>
                                <label className="float-left" htmlFor="exampleControlsInput1">Valor de venda</label>
                                <Form.Input id="valorvenda" placeholder="valor de venda"
                                    value={produto.valven}
                                    onChange={(event) => {
                                        produto.valven = event.target.value;
                                        setProduto({ descricao: produto.descricao, valven: produto.valven });
                                    }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group>
                        <label className="float-left" htmlFor="exampleControlsFile1">Foto do produto</label>
                        <Form.File id="fotoproduto" />
                    </Form.Group>
                    <br />

                    <Button className="float-left" success as="input" type="submit" value="Salvar" />
                    <Button className="float-left" onClick={limparCamposFormCadastroProduto} warning as="input" type="reset" value="Cancelar" />
                </Form>
            </Container>
        </>
    )
}