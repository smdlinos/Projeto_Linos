//Styles
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../imagens/logo_oficial.svg";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Responsive from "../Responsive.css"

function NavScrollExample() {
  return (
      <>

          {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className='m-auto py-3'>    
                <img
                  src={logo}
                  className="ps-5"
                  alt="React Bootstrap logo "
                />
              
              </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img
                  src={logo}
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Início</Nav.Link>
                
                <Nav.Link href="#action2">Aventure-se</Nav.Link>
                
                <Nav.Link href="#action3">Origem</Nav.Link>
                
                <Nav.Link href="#action4">Sobre nós</Nav.Link>
                
                <Nav.Link href="#action5">Contato</Nav.Link>    
              
              <Button className="" variant="danger"href="/login">FAZER LOGIN</Button>  
      
              
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </>
      );
    }

export default NavScrollExample;