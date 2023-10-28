import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet} from 'react-router-dom';

function NavMenu() {
  return (
    <>
      <Navbar style={{padding:"0px 15px"}} expand="lg"  bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/forum/public/">Manga Marauders</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="genres">Géneros</Nav.Link>
            <Nav.Link as={Link}  to="categories">Categorías</Nav.Link>
            <Nav.Link as={Link}  to="topics">Foro de Discusiones Actuales</Nav.Link>
            <Nav.Link as={Link} to="posts">Comentarios</Nav.Link>
            {/* Aqui podria poner el usuario */}
            <NavDropdown title="Cuenta" id='basic-nav-dropdown'>
                <NavDropdown.Item href='login'>Iniciar Sesión</NavDropdown.Item>
                <NavDropdown.Item href='logout'>Salir de la sesión</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
         
        </Container>
      </Navbar>
      <section>
        <Container>
            <Outlet>
            </Outlet>
        </Container>
      </section>
    </>
  );
}

export default NavMenu;