import React from 'react';
import { Button } from 'react-bootstrap';
import picture from './iphone-1.png';
import elvis from './brad-elvis.png';
import mac from './macbook.png';
import ipad from './ipad.png';

const arr1 = [
    {
        a: (
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
        b: (<>
        <h6>Watch this</h6>
        <h2>Witness the power of Startup.logo in this video</h2>
        <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quisquam id necessitatibus fugit sequi ab nemo illum pariatur! Maiores non modi reiciendis dolores, rerum fugiat obcaecati nulla et repudiandae blanditiis!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quisquam id necessitatibus fugit sequi ab nemo illum pariatur! Maiores non modi reiciendis dolores, rerum fugiat obcaecati nulla et repudiandae blanditiis!</p>
        </>),
        dark:false,
        order:true,
        hide: false
    },
    {
        a:(<img src={picture} alt=""/>),
        b:(<>
            <h6>Incredible feature</h6>
            <h2>Totally random website. At the touch of your finger pads.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque obcaecati quidem earum distinctio temporibus, delectus perferendis porro similique beatae tempora saepe aut omnis quo. Iusto ipsum dolores molestiae voluptates?</p>
            <Button variant="outline-success">Get in on the action</Button>  
        </>),
        dark:true,
        order:false,
        hide: true
    },
    {
        a:(
            <img src={mac} alt="mac" />
        ),
        b:(<>
            <h6>The wow factor</h6>
            <h2>Australians wouldn't give a Stratup.logo for anything else.</h2>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore, fugit, molestiae ipsam ipsa suscipit enim eligendi voluptatibus autem placeat pariatur illo earum. Doloribus ullam veniam, ab officia dignissimos autem?</p>
            <Button variant="outline-primary">Git'r done!</Button>
        </>)
        ,
        dark:false,
        order:true,
        hide:true
    },
    {
        a: (
            <img src={elvis} alt="elvis" />
        ),
        b: (<>
            <h6>Kudos</h6>
            <blockquote className="blockquote">
                &ldquo;No Startup.logo no kiss.&rdquo;
                <footer className="blockquote-footer">
                    Brelvis Hesley, <cite>some guy at a wedding</cite>
                </footer>
            </blockquote>
        </>),
        dark:false,
        order:false,
        hide:true,
        alt:true
    }
];

const arr2 = [
    {
        a:(
            <img src={ipad} alt="ipad" />
        ),
        b:(<>
            <h6>The all-in-one solution</h6>
            <h2>Nobody doesn't like Startup.logo</h2>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt veritatis aliquam exercitationem doloremque cum iure accusantium ipsum, commodi, atque facilis fugit sit ab voluptas deserunt autem error nobis doloribus animi!</p>
            <Button variant="outline-success">Mangos! (or mangoes?)</Button>  
        </>),
        dark:true,
        order:true,
        hide: true
    }
];

export { arr1, arr2 };