import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import Home from "./pages/home";
import Cursos from "./pages/cursos";
import Egressos from "./pages/egressos";
import Depoimentos from "./pages/depoimentos";
import Login from "./pages/login";
import RecuperarSenha from "./pages/recuparar_senha";
import Cadastro from "./pages/cadastro";
import CadastroSenha from "./pages/cadastro-senha";
import Egresso from "./pages/egresso";
import Usuario from "./pages/usuario"

const Rotas = () => {
   return(
    <HashRouter>
        <Routes>
            <Route path="/home" element={<Home/>} /> 
            <Route path="/egressos" element={<Egressos />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/depoimentos" element={<Depoimentos />} />    
            <Route path="/login" element={<Login />} />     
            <Route path="/recuperar_senha" element={<RecuperarSenha />} />      
            <Route path="/cadastro" element={<Cadastro />} />  
            <Route path="/cadastro-senha" element={<CadastroSenha />} />  
            <Route path="/egresso" element={<Egresso />} /> 
            <Route path="/usuario" element={<Usuario />} /> 
        </Routes>
    </HashRouter>
   )
}

export default Rotas;