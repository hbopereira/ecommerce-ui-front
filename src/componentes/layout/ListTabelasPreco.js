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
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tabelasPreco.map((tab) => (
                        <tr>
                            <td>{tab.descricao}</td>
                            <td>{tab.valven}</td>
                            <td>{tab.quantidadeEstoque}</td>
                            <td>
                                <Button info as="input" type="submit" value="E" />
                                <Button warning as="input" type="submit" value="E" />
                                <Button danger as="input" type="submit" value="E" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>
    )
}

export default ListTabelasPreco