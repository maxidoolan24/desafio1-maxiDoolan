import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <> 
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className='titulo'>
          MDmotos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="sub-titulos">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/categoria/motos">
              Motos
            </Nav.Link>
            <Nav.Link as={Link} to="/categoria/cascos">
              Cascos
            </Nav.Link>
            <NavDropdown title="accesorios" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categoria/guantes">
                guantes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/botas">
                botas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/conjuntos">
                conjuntos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar