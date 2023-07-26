import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';

function Menu({ fn1 }) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/" className={({isActive}) => isActive ? 'btn btn-success': 'btn'}>Home</NavLink>
            &nbsp;
            <NavLink to="/carrito" className={({isActive}) => isActive ? 'btn btn-success': 'btn'}>Carrito</NavLink>
            &nbsp;
            <button className="btn btn-secondary" onClick={fn1}>Alternar Login</button>
          </Nav>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        </Container>
      </Navbar>
    </>
  )
}

export default Menu