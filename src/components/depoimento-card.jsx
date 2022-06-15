import React from "react";
import {Card, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

function DepoimentoCard (){
    return (
        <div className="p-1 pb-5">

        <Card style={{ width: '100%' }}>
            {/* <Card.Img  variant="top" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" /> */}
            <Card.Body>
                <Card.Title className="">
                    <div className="d-flex justify-content-start">
                        <Image roundedCircle="true"
                                className="me-2"
                                height={"30px"} 
                                width={"30px"}
                                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        <h3>João</h3>
                    </div>
                    <p className="fs-6 fw-light">Há 37 minutos.</p>
                </Card.Title>
                <Card.Text>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida lorem at magna tristique vestibulum. Integer fringilla sem neque. Vivamus vel felis blandit, gravida lectus et, vestibulum tellus. Aenean in risus at metus varius tincidunt. Duis nec accumsan odio. Proin at egestas ipsum. Integer accumsan laoreet cursus. Ut et hendrerit est. Nullam venenatis, justo ut fermentum finibus, risus nisl eleifend erat, sed interdum elit felis id lorem. Curabitur et euismod ipsum. Vivamus euismod fringilla dui. Nunc a egestas velit. Proin id orci vitae magna semper vehicula. In hac habitasse platea dictumst. Donec semper pellentesque nulla, eu pellentesque ipsum finibus at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <p>
                        Nunc lorem enim, cursus nec posuere id, vulputate a libero. Pellentesque in erat dui. Etiam a dolor nibh. Sed posuere augue in dolor tincidunt eleifend. Vestibulum pellentesque leo ipsum, at blandit enim dignissim nec. Sed ultricies lacinia turpis vitae vehicula. Pellentesque et varius leo, eu malesuada odio. Etiam lectus augue, congue et condimentum vitae, bibendum in orci. Curabitur feugiat faucibus sagittis. Pellentesque consectetur risus ac cursus vulputate. Fusce nec urna ultricies, laoreet lectus aliquam, vehicula sapien. Vivamus vitae tincidunt nunc, at gravida turpis.
                    </p>
                    <p>
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc erat neque, condimentum eu iaculis id, pellentesque eu odio. Praesent gravida, nisl eu placerat eleifend, leo felis vestibulum urna, at blandit enim nunc in est. Nam at justo rhoncus, varius nunc et, molestie purus. Sed ex nulla, scelerisque sed auctor euismod, varius id risus. Cras facilisis ex id sollicitudin suscipit. Nunc laoreet massa in leo ultrices, vel viverra lorem varius. Pellentesque vehicula mollis purus, vitae consectetur arcu condimentum sit amet. Fusce dignissim eget purus sed rutrum.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}


export default DepoimentoCard;