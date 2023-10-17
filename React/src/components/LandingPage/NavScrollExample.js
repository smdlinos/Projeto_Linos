//Styles
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../imagens/logo_oficial.svg";
import Logo from "../imagens/quest_logo.png"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Responsive from "../Responsive.css"
import ImagemDesktop from './ImagemDesktop';

function NavScrollExample() {
  return (
      <>

          {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#inicio" className='m-auto py-3 alinhamento'>    
                <img
                  src={Logo}
                  className="ps-2 logo-canvas "
                  alt="React Bootstrap logo "

                />
                <ImagemDesktop/>
              
              </Navbar.Brand>
            {/*<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />*/}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="background-Off-Canvas background_land_"
            >
              <Offcanvas.Header className='' closeButton>
                <Offcanvas.Title  className= "m-auto ps-3"
                id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img
                  src={Logo}
                  className="d-inline-block align-top logo-off-canvas"
                  alt="React Bootstrap logo"
                />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=''>
                
                <Nav className=" flex-grow-1 pe-3 ">
                  <center>
                  <Nav.Link href="#inicio" className='links' closeButton>Início</Nav.Link>
                <div className='linha-off-canvas'></div>
                <Nav.Link href="#aventure-se" className='links'>Aventure-se</Nav.Link>
                <div className='linha-off-canvas'></div>
                <Nav.Link href="#origem" className='links'>Origem</Nav.Link>
                <div className='linha-off-canvas'></div>
                <Nav.Link href="#sobre-nos" className='links'>Sobre nós</Nav.Link>
                <div className='linha-off-canvas'></div>
                <Nav.Link href="#Contato" className='links'>Contato</Nav.Link>  
                <Row className='pt-3'>
                <Button className="" variant="danger"href="/login">Entrar</Button>
                </Row> 
                  </center>
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