import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Feature = ({ col1, col2, dark, order, hide, alt}) => {
    const leftColClass = hide ? "d-none d-lg-block" : "";    
    const rightColClass = "feature-caption d-flex flex-column justify-content-center align-items-center";
    
    return (        
        <div className={dark?"feature-dark":alt?"feature-alt":""}>
            <Row className="feature-content">                   
                <Col 
                    lg={{span:order?6:5, order:2, offset:order?0:1}} 
                    className={leftColClass}                    
                >
                    {col1}
                </Col>
                <Col 
                    lg={{span:order?5:6, offset:order?1:0,order:order?3:1}}                     
                    className={rightColClass}>
                    {col2}
                </Col>                   
            </Row>
        </div>        
    )
}

export default Feature;