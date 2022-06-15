import React from "react";
import {Card, Button } from "react-bootstrap";

function EgressoCard (){
    return (
        <div className="p-1 pb-5">

        <Card style={{ width: '18rem', }}>
            <Card.Img style={{width: '18rem', height: '18rem', objectFit: 'cover'}} variant="top" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            <Card.Body>
                <Card.Title>João </Card.Title>
                <Card.Text>
                Egresso do Curso de Ciencia da computação.
                </Card.Text>
                <div className="d-flex justify-content-center">
                    <Button href="#/egresso" variant="primary">Mais sobre</Button>
                </div>
            </Card.Body>
        </Card>
        </div>
    )
}


export default EgressoCard;