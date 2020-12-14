import React from 'react'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { signout } from '../../actions';
/**
* @author
* @function Header
**/

const Header = (props) => {
    const auth = useSelector(state =>state.auth);
    const dispatch = useDispatch();

    const logout = ()=>{
        dispatch(signout());
    }

    const renderLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <span className="nav-link" onClick={logout}>Signout</span>
                </li>
                <li className="nav-item" style={{marginRight:"50px"}}>
                    <span className="nav-link">Welcome Saurav</span>
                </li>

            </Nav>)
    }

    const renderNonLoggedInLinks = () => {
        return (
            <Nav>
                {/* <Nav.Link href="#deets">sign in</Nav.Link> */}
                <li className="nav-item">
                    <NavLink to="signin" className="nav-link">Signin</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="signup" className="nav-link">Signup</NavLink>
                </li>

            </Nav>)

    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
            <Container fluid>
                {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
                <Link className="navbar-brand" to="/">Admin Dashboard</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                    </Nav>
                    {auth.authenticate? renderLoggedInLinks(): renderNonLoggedInLinks()}

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )

}

export default Header