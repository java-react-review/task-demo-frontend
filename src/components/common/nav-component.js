
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <Nav>
        <Button>Task Manager</Button>
        <Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/new">Add a New Task</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default Header;