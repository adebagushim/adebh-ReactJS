import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default class Isi extends React.Component {
    render(){
        return (
            <Container>
                <Row>
                    <Col md={6} bg="dark">
                        <Card style={{ width: '200px auto', height: "100px auto" }}>
                            <Card.Img variant="top" src="/meee.jpg" style={{width: "200px auto" , height: "100px "}}/>
                            <Card.Body>
                                <Card.Title>Its Me</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia.
                    </Col>
                </Row>
            </Container>
        )
    }
}