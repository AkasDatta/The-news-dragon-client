import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const {user} = useContext(AuthContext);

    return (
        <Container>
            <div>
                <div className="text-center mt-5">
                    <img src={logo} alt="" />
                    <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                    <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
                <div className='d-flex'>
                    <Button variant="danger">Latest</Button>
                    <Marquee speed={50} pauseOnClick className='text-danger'>
                        I can be a React component, multiple React components, or just some text........   or just some text........
                    </Marquee>
                </div>

                    <Navbar bg="light" expand="lg" className='my-4'>
                        <Container fluid>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="mx-auto my-2 my-lg-0">
                                <Nav.Link href="#action1">
                                    <Link to="/">Home</Link>
                                </Nav.Link>
                                <Nav.Link href="#action2">About</Nav.Link>
                                <Nav.Link href="#action3">Career</Nav.Link>
                            </Nav>
                            <Nav>
                                {user && 
                                    <Nav.Link href="#deets">
                                        <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>
                                    </Nav.Link>
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
            </div>
        </Container>
    );
};

export default Header;