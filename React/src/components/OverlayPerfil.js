import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Perfil from "./imagens/koala.svg";
import perfil_g from "./imagens/koala_p.svg";
import "../components/Tela.css";
import estrela from "../components/imagens/estrela2.svg";



function OverlayPerfil() {
    return (
      <>
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3">
            <Container fluid >
            
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}` } className='ms-auto'>
                <img src={Perfil} alt='perfil' ></img></Navbar.Toggle>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header className='background_header' closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                   
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="background_header">
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <div className='m-auto pontos_p mb-3'>
                    <img src={estrela} alt='estrelinha' className='estrela_p'/>
                    <p className='my-1 mx-1 font_p'>60</p>
                    </div>
                    <img src={perfil_g} alt='perfil_g' className=' mx-5 perfil_g'/>
                    <h3 className='pt-3'><center>@koal_castro</center></h3>
                    <Nav.Link href="#action1">Histórico</Nav.Link>
                    <Nav.Link href="#action2">Recompensas</Nav.Link>
                    <Nav.Link href="#action3" className='pb-5'>Certificados</Nav.Link>
                  </Nav>
                  <Button variant="primary" type="button"  className="px-5 mb-3 mt-3">
                    Logout
                </Button>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
  
  export default OverlayPerfil;