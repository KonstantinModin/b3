import React from 'react';
import { Row, Col } from 'react-bootstrap';
import mac from './macbook-2.png';

const FeatureFive = () => {
    return (
        <div>
            <Row className="feature-content">                   
                <Col lg={{span:8, offset:2}}>
                    <h6>Powerfully packed action</h6>
                    <h2>When it absolutely, positivly has to be Startup.logo overnight.</h2>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quasi voluptatibus, totam deleniti doloremque similique culpa quam maxime inventore nobis mollitia. Ea nisi consectetur nam provident. Ducimus officia magni optio!</p>
                    <h6>With Startup.logo you can:</h6>
                    <Row>
                        <Col lg={6}>
                            <ul>
                                <li>Put Sriracha on just about anything</li>
                                <li>Use your wallet for everything other than buying</li>
                            </ul>
                        </Col>
                        <Col lg={6}>
                            <ul>
                                <li>Get solid advice from mildy attractive people</li>
                                <li>Win at most things</li>
                            </ul>
                        </Col>
                    </Row>
                    <img src={mac} alt="mac" />
                </Col>                             
            </Row>
        </div>        
    )
}

export default FeatureFive;