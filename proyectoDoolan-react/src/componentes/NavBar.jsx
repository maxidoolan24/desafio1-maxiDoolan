import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <> 
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className='titulo'>MDmotos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="sub-titulos">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#motos">motos</Nav.Link>
            <Nav.Link href="#accesorios">accesorios</Nav.Link>
            <NavDropdown title="mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar