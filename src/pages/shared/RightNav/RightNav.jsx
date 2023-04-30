import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h4 className='mb-4'>login With</h4>
            <div>
                <Button variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub />Login With Github</Button>
            </div>
            <div>
                <h4 className='my-4'>Find Us On</h4>
                <ListGroup>
                    <a href="https://www.facebook.com/iamakasdatta/" className='text-decoration-none'>
                        <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item></a>
                    <a href="https://twitter.com/DattaAkas" className='text-decoration-none'>
                        <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    </a>
                    <a href="https://www.instagram.com/_akash_datta/" className='text-decoration-none'>
                        <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    </a>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div style={{backgroundImage: `url(${bg})`, color: 'white'}} className='text-center p-5'>
                <h2>Create an <br /> Amazing <br /> Newspaper</h2>
                <p>Discover thousands of <br /> options, easy to <br /> customize layouts, one- <br /> click to import demo <br /> and much more.</p>
                <Button variant="danger" className='p-3 px-4 rounded-0'>Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;