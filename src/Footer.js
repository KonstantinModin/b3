import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer feature-content">
            <Row>                   
                <Col md={6}>
                    &copy; 2016 Startup.logo is not a real thing. If it is, this site was not meant to be a mockery of it.
                    <br/>
                    Coded by <a href="https://github.com/KonstantinModin">Konstantin Modin</a>
                </Col>
                <Col md={2}>
                    <h6>Our product</h6>
                    <ul>
                        <li>Features</li>
                        <li>Solutions</li>
                        <li>Plans</li>
                        <li>Sign in</li>
                    </ul>
                </Col>
                <Col md={2}>
                <h6>Our team</h6>
                    <ul>
                        <li>About</li>
                        <li>Highlights</li>
                        <li>Investors</li>
                        <li>Partners</li>
                    </ul>
                </Col>
                <Col md={2}>
                <h6>Other things</h6>
                    <ul>
                        <li>Jobs</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                        <li>Legal Information</li>
                    </ul>
                </Col>
            </Row>
        </div>        
    )
}

export default Footer;