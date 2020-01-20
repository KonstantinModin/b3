import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Feature = ({ col1, col2, dark, order, hide}) => {
    const rowLeftClass = 
        [order?"feature-caption d-flex flex-column justify-content-center":"",
        hide&&order?"d-none d-md-block text-sm-center":""].join` `;
    const rowRightClass = 
        [!order?"feature-caption d-flex flex-column justify-content-center":"",
        hide&&!order?"d-none d-md-block text-sm-center":""].join` `;
    return (        
        <div className={dark?"feature-dark":""}>
            <Row className="feature-content">                   
                <Col 
                    lg={6} 
                    className={rowLeftClass}
                    >
                    {order?col1:col2}
                </Col>
                <Col 
                    lg={dark?6:5} 
                    md={{offset:dark?0:1}} 
                    className={rowRightClass}>
                    {order?col2:col1}
                </Col>                   
            </Row>
        </div>        
    )
}

export default Feature;