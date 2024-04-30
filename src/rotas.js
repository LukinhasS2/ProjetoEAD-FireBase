import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Contato from './paginas/Contato';
import NotFound from './paginas/NotFound';
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route exact={true} path="/sobre" element={<Sobre/>} />
                <Route exact={true} path="/contato" element={<Contato/>} />
                <Route exact={true} path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;


