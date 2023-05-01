import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {

    const {user} = useContext(AuthContext);

    return (
        <Container>
                <Navbar bg="light" expand="lg" className='my-4'>
                    <Container fluid>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="mx-auto my-2 my-lg-0">
                                <Link to="/category/0">Home</Link>
                                <Nav.Link href="#action2">About</Nav.Link>
                                <Nav.Link href="#action3">Career</Nav.Link>
                            </Nav>
                            <Nav>
                                {
                                    user && <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>
                                }
                                {
                                    user ? 
                                    <Button variant="btn btn-secondary">Logout</Button>:
                                    <Link to="/login">
                                        <Button variant="btn btn-secondary">Login</Button>
                                    </Link>
                                }
                            </Nav> 
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </Container>
    );
};

export default NavigationBar;