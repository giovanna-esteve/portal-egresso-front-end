import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Form, Table} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

import ContatosUsuario from '../components/usuario/contatos-usuario';
import DepoimentosUsuario from '../components/usuario/depoimentos-usuario';
import CursoUsuario from '../components/usuario/curso-usuario';
import ProfissaoUsuario from '../components/usuario/profissao-usuario';
import EgressoUsuario from '../components/usuario/egresso-usuario';

function Usuario(){
    const { id } = useParams();
    
    return(
        <React.Fragment>
            <Header/>
    <div className="pt-5 " style={{"backgroundColor": "#B82601"}}>
        <Container  className="pb-5 "  >

            <EgressoUsuario id_egresso={id}/>
            <DepoimentosUsuario id_egresso={id}/>
            <CursoUsuario id_egresso={id}/>
            <ContatosUsuario id_egresso={id}/>
            <ProfissaoUsuario id_egresso={id}/>
            
        </Container>
    </div>
            <Footer/>
        </React.Fragment>
    )
}
export default Usuario;