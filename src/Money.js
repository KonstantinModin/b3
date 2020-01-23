import React from 'react';
import { Row, Col } from 'react-bootstrap';

const MoneyBack = () => {
    return (
        <div>
            <Row className="feature-content">                   
                <Col lg={{span:8, offset:2}}>
                    <h6>100% no-money-back guarantee!</h6>
                    <h2>Put your money where Startup.logo's mouth is.</h2>
                    <p>Starting as low as $379.00/day. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, maxime optio corrupti, tempore voluptates rerum nostrum totam dolorum quidem architecto eius delectus doloremque esse sapiente perferendis facere at quos sed.</p>
                    <button className="btn btn-outline-success">Toss some money our way (please)</button>
                </Col>                                 
            </Row>
        </div>        
    )
}

export default MoneyBack;