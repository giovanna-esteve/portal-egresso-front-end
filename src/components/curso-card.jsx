import React from "react";
import {Card, Button } from "react-bootstrap";

function CursoCard (props){

    const getDataInicio = function(data){

        if(data){
            return (<p>Data Inicio: {data} </p>)
        }
        return;
    }
    const getDataConclusao = function(data){

        if(data){
            return (<p>Data Conclusao: {data} </p>)
        }
        return;
    }

    return (
        <div className="p-1 pb-5">
        <Card style={{ width: '18rem', "backgroundColor": "#f3f3f3" }} >
            <Card.Body>
                <Card.Title>{props.curso.nome}</Card.Title>
                <Card.Subtitle  className="mb-2 fw-light">{props.curso.nivel}</Card.Subtitle>
                <Card.Text>
                    {getDataInicio(props.curso.dataInicio)}
                    {getDataConclusao(props.curso.dataConclusao)}
                </Card.Text>
                <div className="d-flex justify-content-center">
                    <Button href={`#/curso/${props.curso.id}`} variant="secondary">Mais sobre</Button>
                </div>
            </Card.Body>
        </Card>
        </div>
    )
}


export default CursoCard;