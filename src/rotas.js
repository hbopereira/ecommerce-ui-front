import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './paginas/home/index';
import ProdutoCadastro from './paginas/produto/produto-cadastro/index';
import ProdutoListagemAdm from './paginas/produto/produto-listagem/produto-listagem-adm/index';


export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/produto-cadastro" exact component={ProdutoCadastro} />
                <Route path="/produto-listagem-adm" exact component={ProdutoListagemAdm} />
            </Switch>
        </BrowserRouter>
    )
}