import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from "./components/header"
import Footer from "./components/footer";
import EgressoCard from "./components/egresso-card"
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Rotas from "./routes"

ReactDOM.render(
    <React.Fragment>
        <Rotas/>
    </React.Fragment>
        ,
    document.getElementById('root')
)