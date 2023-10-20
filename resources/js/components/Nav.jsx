import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet} from 'react-router-dom';

function NavMenu() {
  return (
    <>
      <Navbar style={{padding:"0px 15px"}} expand="lg"  bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="">Home</Nav.Link>
            <Nav.Link as={Link} to="login">Iniciar Sesion</Nav.Link>
            <Nav.Link as={Link}  to="categories">Categorias</Nav.Link>
            <Nav.Link as={Link}  to="topics">Foro de Discusiones Actuales</Nav.Link>
            <Nav.Link as={Link} to="posts">Comentarios</Nav.Link>
            
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