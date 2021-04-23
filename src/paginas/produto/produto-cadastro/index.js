import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Breadcrumb } from 'bootstrap-4-react';
import ModalSalvarTabelaPreco from '../../../componentes/layout/ModalSalvarTabelaPreco';
import Header from '../../../componentes/layout/Header';
import Geral from '../../../services/Geral';
import ProdutoService from '../../../services/ProdutoService';
import SecaoService from '../../../services/SecaoService';
import SubSecaoService from '../../../services/SubSecaoService';


const valoresIniciaisProduto = {
    descricao: '', valven: ''
}

export default function ProdutoCadastro() {
    // states gerais
    const [produto, setProduto] = useState(valoresIniciaisProduto);
    const [secaoProduto, setSecaoProduto] = useState();
    const [subSecaoProduto, setSubSecaoProduto] = useState();

    // states para listar cores e tamanhos para selecionar
    const [coresParaExibicao, setCoresParaExibicao] = useState([]);
    const [tamanhosParaExibicao, setTamanhosParaExibicao] = useState([]);

    //states para listar secoes e subsecoes na tela para selecionar.. 
    const [secoes, setSecoes] = useState([]);
    const [subSecoes, setSubSecoes] = useState([]);

    // arrays auxiliares para receber aos cores e os tamanhos do produto
    let coresProduto = [];
    let tamanhosProduto = [];

    async function salvarProduto(event) {
        event.preventDefault();
        if (validarCampos()) {
            return await ProdutoService.salvarProduto(produto, secaoProduto, subSecaoProduto)
                .then(() => {
                    limparCamposFormCadastroProduto();
                    Geral.limparTabelaPrecoLocalStorage();
                }).catch((erro) => {
                    alert(JSON.stringify(erro));
                })
        }
    }

    function aoMudar(event) {
        const { name, value } = event.target;
        setProduto({ ...produto, [name]: value });
    }

    function aoMudarSelectSecao(event) {
        const codSecaoSelecionado = event.target.value;
        const secaoSelecionado = secoes.filter((sec) => sec.cod == codSecaoSelecionado)[0];
        setSecaoProduto(secaoSelecionado);
    }

    function aoMudarSelectSubSecao(event) {
        const codSubSecaoSelecionado = event.target.value;
        const subSecaoSelecionado = subSecoes.filter((subsec) => subsec.cod == codSubSecaoSelecionado)[0];
        setSubSecaoProduto(subSecaoSelecionado);
    }

    async function listarSecoes() {
        await SecaoService.listarSecoes()
            .then((response) => {
                setSecoes(response.data.content);
            }).catch((erro) => {
                console.log(erro)
            });
    }

    async function listarSubSecoes() {
        await SubSecaoService.listarSubSecoes()
            .then((response) => {
                setSubSecoes(response.data.content);
            }).catch((erro) => {
                console.log(erro)
            });
    }

    function validarCampos() {
        if (produto.descricao != '' && produto.valven != '') {
            return true
        }
    }

    function adicionarCores(codigoCor) {
        const cor = {
            cod: codigoCor
        }
        coresProduto.push(cor);
    }

    function adicionarTamanhos(codigoTamanho) {
        const tamanho = {
            cod: codigoTamanho
        }
        tamanhosProduto.push(tamanho);
    }

    async function listarCores() {

    }

    async function listarTamanhos() {

    }


    function limparCamposFormCadastroProduto() {
        setProduto({ descricao: '', valven: '' });
    }

    useEffect(() => {
        listarSecoes();
        listarSubSecoes()
    }, []);


    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <h2>Cadastro de Produto</h2>
            <br />
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <NavLink to="/">
                            <a>Home</a>
                        </NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active aria-current="page">
                        <NavLink to="produto-listagem-adm">
                            <a>Produtos</a>
                        </NavLink>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Form onSubmit={salvarProduto}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <label className="float-left" htmlFor="exampleControlsInput1">Descrição</label>
                                <Form.Input name="descricao" id="descricao" placeholder="descricao"
                                    onChange={aoMudar} />
                            </Form.Group>
                        </Col>
                        <Col col="col lg-3">
                            <Form.Group>
                                <label className="float-left" htmlFor="exampleControlsInput1">Valor de venda</label>
                                <Form.Input name="valven" id="valorvenda" placeholder="valor de venda"
                                    onChange={aoMudar} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <label className="float-left" htmlFor="exampleControlsInput1">Seção</label>
                            <select className="browser-default custom-select" name="secao" onChange={(e) => {
                                aoMudarSelectSecao(e)
                            }}>
                                <option>Escolha</option>
                                {secoes.map(secao => (
                                    <option value={secao.cod}>{secao.descricao}</option>
                                ))}
                            </select>
                        </Col>
                        <Col >
                            <label className="float-left" htmlFor="exampleControlsInput1">Sub-seção</label>
                            <select className="browser-default custom-select" name="subsecao" onChange={(e) => {
                                aoMudarSelectSubSecao(e)
                            }}>
                                <option>Escolha</option>
                                {subSecoes.map(subsecao => (
                                    <option value={subsecao.cod}>{subsecao.descricao}</option>
                                ))}
                            </select>
                        </Col>
                        <Col>
                            <label className="float-left" htmlFor="exampleControlsInput1">Cor</label>
                            <select className="browser-default custom-select" name="subsecao" >
                                <option>Escolha</option>

                            </select>
                        </Col>
                        <Col>
                            <label className="float-left" htmlFor="exampleControlsInput1">Tamanho</label>
                            <select className="browser-default custom-select" name="subsecao"
                            >
                                <option>Escolha</option>

                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col col="md-4">
                            <Form.Group>
                                <label className="float-left" htmlFor="exampleControlsFile1">Foto do produto</label>
                                <Form.File id="fotoproduto" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <ModalSalvarTabelaPreco />
                    <Button className="float-left" success as="input" type="submit" value="Salvar" />
                    <Button className="float-left" onClick={limparCamposFormCadastroProduto} warning as="input" type="reset" value="Cancelar" />
                </Form>
            </Container>
        </>
    )
}