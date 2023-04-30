import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h4>login With</h4>
            <Button variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub />Login With Github</Button>
            <div>
                <h4>Find Us On</h4>
                <ListGroup >
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
        </div>
    );
};

export default RightNav;