import React from "react";
import {Card, Button } from "react-bootstrap";
import { BsLinkedin, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

function ContatoCard (props){

    const getIcons = function(type){

        if(type == "instagran"){
            return (<BsInstagram/>)
        }else if(type == "linkedin"){
            return (<BsLinkedin/>)
        }else if(type == "twitter"){
            return (<BsTwitter/>)
        }else{
            return (<BsFacebook/>)
        }
    }

    return (
        <div className="p-1 pb-5">
        <Card style={{ width: '18rem', "backgroundColor": "#f3f3f3" }} >
            <Card.Body>
                <Card.Title>{getIcons(props.contato.icon)} {props.contato.nome}</Card.Title>
                <Card.Subtitle  className="mb-2 fw-light">{props.contato.text}</Card.Subtitle>
            </Card.Body>
        </Card>
        </div>
    )
}


export default ContatoCard;