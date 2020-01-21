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
                    lg={{span:order?6:5, order:2, offset:order?0:1}} 
                    className={rowLeftClass}                    
                >
                    {col1}
                </Col>
                <Col 
                    lg={{span:order?5:6, offset:order?1:0,order:order?3:1}}                     
                    className={rowRightClass}>
                    {col2}
                </Col>                   
            </Row>
        </div>        
    )
}

export default Feature;