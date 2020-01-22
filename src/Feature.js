import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Feature = ({ col1, col2, dark, order, hide, alt}) => {
    const rowLeftClass = 
        [order?"feature-caption d-flex flex-column justify-content-center align-items-center":"",
        hide&&order?"d-none d-sm-block text-sm-center":""].join` `;
    
    const rowRightClass = 
        [!order?"feature-caption d-flex flex-column justify-content-center align-items-center":"",
        hide&&!order?"d-none d-cm-block text-sm-center":""].join` `;
    console.log(rowRightClass);
    return (        
        <div className={dark?"feature-dark":alt?"feature-alt":""}>
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