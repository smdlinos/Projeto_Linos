import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../components/imagens/logo_oficial.svg";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Stack from 'react-bootstrap/Stack';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className='bg-body-tertiary'>
      <Container fluid>
        <Row>
          <Col className='ps-5'>
          <Navbar.Brand href="#">
          <img
                src={logo}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
          </Navbar.Brand>
          </Col>
          <Col xs={6} className='px-4'>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto font_nav espacamento_nav itens_nav"
            style={{ maxHeight: '70px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Início</Nav.Link>
            <Nav.Link href="#action2">Aventure-se</Nav.Link>
            <Nav.Link href="#action3">Origem</Nav.Link>
            <Nav.Link href="#action4">Sobre nós</Nav.Link>
            <Nav.Link href="#action5">Contato</Nav.Link>   
          </Nav>
        </Navbar.Collapse>
        </Col>
        <Col className='pe-4'>
        <Button className="px-1 botao" href="/login">FAZER LOGIN</Button>
        </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;