import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import Banheiro from './pages/Banheiro';
import Area from './pages/Area';
import Cozinha from './pages/Cozinha';
import Escritorio from './pages/Escritorio';
import Garagem from './pages/Garagem';
import Quarto from './pages/Quarto';
import RelatorioGeral from './pages/RelatorioGeral';
import Sala from './pages/Sala';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main}></Route>
            <Route path="/banheiro" component={Banheiro}></Route>
            <Route path="/area" component={Area}></Route>
            <Route path="/cozinha" component={Cozinha}></Route>
            <Route path="/escritorio" component={Escritorio}></Route>
            <Route path="/garagem" component={Garagem}></Route>
            <Route path="/quarto" component={Quarto}></Route>
            <Route path="/sala" component={Sala}></Route>
            <Route path="/relatoriogeral" component={RelatorioGeral}></Route>
        </BrowserRouter>
    );
}

export default Routes;