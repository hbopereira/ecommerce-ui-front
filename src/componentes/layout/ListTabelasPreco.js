import React from 'react';
import { Table, Button } from 'bootstrap-4-react';

const ListTabelasPreco = (props) => {

    return (
        <>
            <h4>Tabelas de Preços</h4>
            <br />

            <Table striped bordered hover size="sm" responsive>
                <thead>
                        <tr>
                        <th>Descricao</th>
                        <th>Valor venda</th>
                        <th>Estoque</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.tabelasPreco.map((tab) => (
                        <tr>
                            <td>{tab.descricao}</td>
                            <td>{tab.valven}</td>
                            <td>{tab.quantidadeEstoque}</td>
                            <td>
                                <Button warning as="input" type="submit" value="Editar" />
                                <Button danger as="input" type="submit" value="Excluir" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>
    )
}

export default ListTabelasPreco