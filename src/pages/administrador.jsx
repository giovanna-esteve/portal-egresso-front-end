import React, { useState } from 'react';
import { Container, Button, Row, Col, Form, Table, Nav} from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";

import CursoTable from '../components/administrador/curso-table';
import AdmTable from '../components/administrador/adm-table';
import ContatoTable from '../components/administrador/contato-table';
import CargoTable from '../components/administrador/cargo-table';
import SalarioTable from '../components/administrador/salario-table';

import CursoService from "../CursoService";
import UsuarioService from "../UsuarioService";
import ContatoService from '../ContatoService';
import CargoService from '../CargoService';
import FaixaSalarioService from '../FaixaSalarioService';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Administrador extends React.Component {

  state={
      cursos : [],
      administradores : [],
      contatos: [],
      cargos: [],
      salarios: []
  }

  constructor() {
      super()
      this.serviceCurso = new CursoService()
      this.serviceUsuario = new UsuarioService()
      this.serviceContato = new ContatoService()
      this.serviceCargo = new CargoService()
      this.serviceFaixaSalario = new FaixaSalarioService()
  }

  componentDidMount() { 
      this.serviceCurso.listar()
      .then( response => {
          this.setState( {cursos : response.data} )
      }).catch (erro => {
          console.log(erro.response)
      })
      // listar usuarios administradores
      this.serviceUsuario.listarAdms()
      .then( response => {
          this.setState( {administradores : response.data} )
      }).catch (erro => {
          console.log(erro.response)
      })
      // listar contatos
      this.serviceContato.listar()
      .then( response => {
          this.setState( {contatos : response.data} )
      }).catch (erro => {
          console.log(erro.response)
      })
      // listar cargos
      this.serviceCargo.listar()
      .then( response => {
          this.setState( {cargos : response.data} )
      }).catch (erro => {
          console.log(erro.response)
      })
      // listar faixa salarios
      this.serviceFaixaSalario.listar()
      .then( response => {
          this.setState( {salarios : response.data} )
      }).catch (erro => {
          console.log(erro.response)
      })
      
  }

  render(){
    return(

        <React.Fragment>
          <Header/>
          <section style={{"backgroundColor": "#B82601"}}>
                <Container>
                    <Row>
                        <Col lg={4} md={5} sm={12} className="text-left mt-5 mb-3" >
                            
                        </Col>
                        <Col lg={7} className=" mt-5 mb-3" style={{color: '#ffffff'}}>
                            
                        </Col>
                    </Row>
                </Container>
              </section>
              <section style={{"backgroundColor": "#ffffff"}} className='py-4'>
                <Container>
                  <Tabs>
                    <TabList>
                      <Tab>Curso</Tab>
                      <Tab>Contatos</Tab>
                      <Tab>Cargos</Tab>
                      <Tab>Faixa Salario</Tab>
                      <Tab>Usuarios</Tab>
                    </TabList>

                    <TabPanel>
                      <CursoTable cursos={this.state.cursos}/>
                    </TabPanel>

                    <TabPanel>
                      <ContatoTable contatos={this.state.contatos}/>
                    </TabPanel>

                    <TabPanel>
                      <CargoTable cargos={this.state.cargos}/>
                    </TabPanel>

                    <TabPanel>
                      <SalarioTable salarios={this.state.salarios}/>
                    </TabPanel>

                    <TabPanel>
                      <AdmTable administradores={this.state.administradores}/>
                    </TabPanel>

                  </Tabs> 
                </Container>

              </section>
            
          <Footer/>
        </React.Fragment>
    )
  }

}
export default Administrador;