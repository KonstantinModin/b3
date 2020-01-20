import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Feature = ({ col1, col2, dark}) => {
    return (        
        <div className={dark?"feature-dark":""}>
            <Row className="feature-content">                   
                <Col lg={6} className="feature-caption d-flex flex-column justify-content-center">
                    {col1}
                </Col>
                <Col lg={dark?6:5} md={{offset:dark?0:1}}>
                    {col2}
                </Col>                   
            </Row>
        </div>        
    )
}

export default Feature;