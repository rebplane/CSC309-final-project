import {React, useContext, useState, useEffect, useRef} from 'react'
import './Navbar.css'

import AuthContext from '../api/AuthContext'
import SearchContext from "../api/SearchContext"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { getAvatar } from '../api/requests';
import { useLocation, useNavigate } from 'react-router-dom'


// Navbar from https://react-bootstrap.github.io/components/navbar/#offcanvas

// TODO replace hrefs

function Header() {
    const searchBarRef = useRef()

    const location = useLocation()
    const navigate = useNavigate()

    let {token, logout} = useContext(AuthContext)
    let {setSearchString} = useContext(SearchContext)

    let [avatar, setAvatar] = useState()

    useEffect(() => {
        getAvatar(setAvatar, token)
    }, [token])

    const handleSearchButtonClick = (e) => {
        e.preventDefault()
        let searchString = searchBarRef.current.value
        if (searchString !== "") {
            if (location.pathname !== "/") {
                navigate("/")
            }
        }
        setSearchString(searchString)
    }

    return (
        <>
            <Navbar bg="light" expand='lg' className="mb-3 navbar">
                <Container fluid>
                <Navbar.Brand href="/"><img className="logo-image" src="https://www.cs.toronto.edu/~kianoosh/courses/csc309/resources/images/tfc.png"></img></Navbar.Brand>

                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'md'`} />

                <Navbar.Offcanvas id={`offcanvasNavbar-expand-$'md'`} aria-labelledby={`offcanvasNavbarLabel-expand-$'md'`} placement="end">

                    <Offcanvas.Body>

                    <Form className="d-flex" onSubmit={(e) => handleSearchButtonClick(e)}>
                        <Form.Control type="search" placeholder="Search Studios" className="me-2 search-bar" aria-label="Search" ref={searchBarRef}/>
                        <Button variant="secondary" onClick={(e) => handleSearchButtonClick(e)}>Search</Button>
                    </Form>

                    <Nav className="navbar-items flex-grow-1 pe-3">
                        
                        <Nav.Link className="nav-item" href="/">Studios</Nav.Link>
                        <Nav.Link className="nav-item" href="/subscriptions">Subscriptions</Nav.Link>

                        {token && 
                            <NavDropdown className="account-dropdown" title={
                                <img src={avatar} className="avatar" alt="Avatar"></img>
                            }>
                            <NavDropdown.Item href="/accounts/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/myclasses/">My classes</NavDropdown.Item>
                            <NavDropdown.Item href="/accounts/subscriptions">Manage Subscriptions</NavDropdown.Item>
                            <NavDropdown.Item href="/accounts/upcomingPayments">Manage Payments</NavDropdown.Item>
                            <NavDropdown.Item href="/accounts/card">My Card</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        }

                        {! token &&
                            <NavDropdown className="account-dropdown" title={
                                <img src={require("../images/default.png")} className="avatar" alt="Avatar"></img>
                            }>
                            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                            </NavDropdown>
                        }

                    </Nav>

                    </Offcanvas.Body>

                </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;