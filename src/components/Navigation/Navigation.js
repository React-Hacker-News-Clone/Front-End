import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = props => {
    const logout = () => {
        localStorage.clear();
        props.history.push('/login');
    };

    if (props.location.pathname === "/login" || props.location.pathname === "/register") {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>hackernews.clone</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/stories">Stories</Nav.Link>
                    <Nav.Link as={NavLink} to="/post-story">Post</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to="/login">Log in</Nav.Link>
                </Nav>
            </Navbar>
        );
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>hackernews.clone</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/stories">Stories</Nav.Link>
                <Nav.Link as={NavLink} to="/post-story">Post</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link onClick={logout}>Log out</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Navigation;