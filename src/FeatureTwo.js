import React from 'react';
import picture from './iphone-1.png'
import { Container, Row, Col, Button } from 'react-bootstrap';

const FeatureTwo = () => {
    return (        
        <div className="feature-dark">
            <Row className="feature-content">                   
                <Col lg={6} className="feature-caption">
                   <h6>Incredible feature</h6>
                   <h2>Totally random website. At the touch of your finger pads.</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque obcaecati quidem earum distinctio temporibus, delectus perferendis porro similique beatae tempora saepe aut omnis quo. Iusto ipsum dolores molestiae voluptates?</p>
                   <Button variant="outline-success">Get in on the action</Button>                   
                </Col>
                <Col lg={6} className="d-none d-sm-block text-sm-center">                    
                    <img src={picture} alt=""/>
                </Col>                   
            </Row>
        </div>        
    )
}

export default FeatureTwo;