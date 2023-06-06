import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Perfil from "./imagens/noto_lion.png";
import perfil_g from "./imagens/perfil_g.svg";
import "../componentes/Tela.css";
import estrela from "../componentes/imagens/estrela.svg";



function OverlayPerfil() {
    return (
      <>
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3">
            <Container fluid >
            
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}` } className='ms-auto'>
                <img src={Perfil} alt='perfil' ></img></Navbar.Toggle>
              <Navbar.Offcanvas
                bg="dark"
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                   
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <div className='m-auto pontos_p'>
                    <img src={estrela} alt='estrelinha' className='estrela_p '/>
                    <p className='my-1 mx-1'><strong>60</strong></p>
                    </div>
                    <img src={perfil_g} alt='perfil_g' className=' mx-5 perfil_g'/>
                    <h3 className='pt-3'><center>@koal_castro</center></h3>
                    <Nav.Link href="#action1">Histórico</Nav.Link>
                    <Nav.Link href="#action2">Recompensas</Nav.Link>
                    <Nav.Link href="#action3" className='pb-5'>Certificados</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Pesquise no Quests"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Buscar</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
  
  export default OverlayPerfil;