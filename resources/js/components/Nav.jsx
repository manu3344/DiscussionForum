import { useContext } from 'react';
import { Button, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet} from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function NavMenu() {
    const { user, logout } = useContext(UserContext)

    return (
        <>
            <Navbar style={{padding:"0px 15px", backgroundColor:"black"}} expand="lg"  data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/forum/public/">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                                src="/forum/public/images/wolverine.png"
                                alt="Logo"
                                style={{ marginRight: "10px", width: "30px", height: "30px" }} // Ajusta el tamaño según sea necesario
                            />
                            Manga Marauders
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="genres">Géneros</Nav.Link>
                            <Nav.Link as={Link}  to="categories">Categorías</Nav.Link>
                            <Nav.Link as={Link}  to="topics">Foro de Discusiones Actuales</Nav.Link>
                            <Nav.Link as={Link} to="posts">Comentarios</Nav.Link>

                            {user == null ? (
                                <NavDropdown title="Cuenta" id='basic-nav-dropdown'>
                                    <NavDropdown.Item as={Link} to='login'>Iniciar Sesión</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='register'>Regístrate</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Button variant="danger" onClick={() => logout()}>
                                    Cerrar sesión
                                </Button>
                            )}
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
