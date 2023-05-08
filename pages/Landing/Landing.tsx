import React from "react";
import "./style.scss";
import {Container, Row, Col} from "react-bootstrap";

export default function Landing() {
  return (    
    <div className="landing">
        <Container>
           <Row>
            <Col lg={3}>
                <div className="left-title">
                      <h2>
                      Advanced Medical Skills at your fingertips
                       </h2>  
                </div>
            </Col>
            <Col lg={4}></Col>           
           </Row>
        </Container>
    </div>
  );
}