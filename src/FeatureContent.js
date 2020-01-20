import React from 'react';
import { Button } from 'react-bootstrap';
import picture from './iphone-1.png';

const arr = [
    [
        (
            <iframe                        
              title="video-feature-one" 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/QKm4q6kZK7E" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>                                    
            </iframe>
        ),
        (<>
        <h6>Watch this</h6>
        <h2>Witness the power of Startup.logo in this video</h2>
        <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quisquam id necessitatibus fugit sequi ab nemo illum pariatur! Maiores non modi reiciendis dolores, rerum fugiat obcaecati nulla et repudiandae blanditiis!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quisquam id necessitatibus fugit sequi ab nemo illum pariatur! Maiores non modi reiciendis dolores, rerum fugiat obcaecati nulla et repudiandae blanditiis!</p>
        </>),
        false
    ],
    [
        (<>
            <h6>Incredible feature</h6>
            <h2>Totally random website. At the touch of your finger pads.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque obcaecati quidem earum distinctio temporibus, delectus perferendis porro similique beatae tempora saepe aut omnis quo. Iusto ipsum dolores molestiae voluptates?</p>
            <Button variant="outline-success">Get in on the action</Button>  
        </>),
        (<img src={picture} alt=""/>),
        true
    ]
];

export default arr;