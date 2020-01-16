import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FeatureOne = () => {
    return (        
        <div>
            <Row className="feature-content">                   
                <Col lg={6} >
                    <iframe                        
                        title="video-feature-one" 
                        width="100%" 
                        height="315" 
                        src="https://www.youtube.com/embed/QKm4q6kZK7E" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>                                    
                    </iframe>
                </Col>
                <Col lg={5} md={{offset:1}}>
                    <h6>Watch this</h6>
                    <h2>Witness the power of Startup.logo in this video</h2>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quisquam id necessitatibus fugit sequi ab nemo illum pariatur! Maiores non modi reiciendis dolores, rerum fugiat obcaecati nulla et repudiandae blanditiis!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quisquam id necessitatibus fugit sequi ab nemo illum pariatur! Maiores non modi reiciendis dolores, rerum fugiat obcaecati nulla et repudiandae blanditiis!</p>
                </Col>                   
            </Row>
        </div>        
    )
}

export default FeatureOne;