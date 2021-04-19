import React, { useEffect, useState } from 'react';
import { Button, Modal, Container, Row, Col, Form } from 'bootstrap-4-react';
import ListTabelasPreco from '../../componentes/layout/ListTabelasPreco';

const valoresIniciaisTabelaPreco = {
    descricao: '', valven: '', quantidadeEstoque: '',
}
const ModalSalvarTabelaPreco = () => {

    const [tabelaPreco, setTabelaPreco] = useState(valoresIniciaisTabelaPreco);
    const [tabelasPreco, setTabelasPreco] = useState([]);

    function aoMudar(event) {
        const { name, value } = event.target;
        setTabelaPreco({ ...tabelaPreco, [name]: value });
    }

    function preecherTabelaPreco() {
        let tem = false;
        let tabelasPrecoAux = [];
        let i = localStorage.getItem('i');
        if (i == 1) {
            tabelasPrecoAux = JSON.parse(localStorage.getItem('tabelasPreco'));
            tabelasPrecoAux.map((item) => {
                if (item.descricao === tabelaPreco.descricao) {
                    tem = true;
                }
            })
        }
        if (!tem) {
            tabelasPrecoAux.push(tabelaPreco);
        }
        localStorage.setItem('tabelasPreco', JSON.stringify(tabelasPrecoAux));
        localStorage.setItem('i', 1);
        listarTabelasPreco();
    }

    function listarTabelasPreco() {
        let tabelasPrecoAux = [];
        if (localStorage.getItem('tabelasPreco')) {
            tabelasPrecoAux = JSON.parse(localStorage.getItem('tabelasPreco'));
            setTabelasPreco(tabelasPrecoAux);
        }
    }

    useEffect(() => {
        listarTabelasPreco();
    }, []);

    return (
        <>
            <div>
                <Container>
                    <Button className="float-right" success data-toggle="modal" data-target="#exampleModal">
                        Novo
                </Button>

                    <Modal id="exampleModal" fade>
                        <Modal.Dialog centered>
                            <Modal.Content>
                                <Modal.Header>
                                    <Modal.Title>Insira a tabela de preço</Modal.Title>
                                    <Modal.Close>
                                        <span aria-hidden="true">&times;</span>
                                    </Modal.Close>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Form.Group>
                                                    <label className="float-left" htmlFor="exampleControlsInput1">Descrição</label>
                                                    <Form.Input name="descricao" id="descricao" placeholder="descricao"
                                                        onChange={aoMudar} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group>
                                                    <label className="float-left" htmlFor="exampleControlsInput1">Valor Venda</label>
                                                    <Form.Input name="valven" id="valven" placeholder="valor"
                                                        onChange={aoMudar} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group>
                                                    <label className="float-left" htmlFor="exampleControlsInput1">Estoque</label>
                                                    <Form.Input name="quantidadeEstoque" id="quantidadeEstoque" placeholder="estoque"
                                                        onChange={aoMudar} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button secondary data-dismiss="modal" >Limpar</Button>
                                    <Button primary data-dismiss="modal" onClick={preecherTabelaPreco}>Confirmar</Button>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal.Dialog>
                    </Modal>
                </Container>
                <br />
                <ListTabelasPreco tabelasPreco={tabelasPreco} />

            </div>
        </>
    )
}

export default ModalSalvarTabelaPreco;