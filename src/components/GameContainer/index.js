import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import CardBoard from "../CardBoard";

const GameContainer = (props) => {
    
    return (
        <Container>
        <Row>
            <Col><h2 className="text-center" style={{padding:"20px"}}>Mermory Token</h2></Col>
          <Col md={{ span: 4, offset: 4 }}>
      
             <CardBoard {...props}>

             </CardBoard>
 
        </Col>
        </Row>
      </Container>
    )

}

export default GameContainer