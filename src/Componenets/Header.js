import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom';




export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            
                <Navbar.Brand href="#home">Covid - 19</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Link className="nav-link" to="/India" href="#features">India</Link>
                    <Link className="nav-link" to="/World" href="#pricing">World</Link>
                    </Nav>
                </Navbar.Collapse>
            
            </Navbar>       
        </div>
    )
}

