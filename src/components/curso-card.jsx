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
                <Card.Title>Ciencia da computação</Card.Title>
                <Card.Subtitle  className="mb-2 fw-light">Graduação</Card.Subtitle>
                <Card.Text>
                    {getDataInicio(props.dataInicio)}
                    {getDataConclusao(props.dataConclusao)}
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}


export default CursoCard;