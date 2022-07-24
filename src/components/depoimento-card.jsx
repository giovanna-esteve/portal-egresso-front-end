import React from "react";
import {Card, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

function DepoimentoCard (props){

    const dateView = (date) => {
        return `${date[2]}/${date[1]}/${date[0]}`;
    }
    return (
        <div className="p-1 pb-5">

        <Card style={{ width: '100%' }}>
            {/* <Card.Img  variant="top" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" /> */}
            <Card.Body>
                <Card.Title>
                    <div className="d-flex justify-content-start">
                        <Image roundedCircle="true"
                                className="me-2"
                                height={"30px"} 
                                width={"30px"}
                                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        <h3>{props.depoimento.egresso.nome}</h3>
                    </div>
                    <p className="fs-6 fw-light">{dateView(props.depoimento.data)}</p>
                </Card.Title>
                <Card.Text>
                    {props.depoimento.texto}
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}


export default DepoimentoCard;