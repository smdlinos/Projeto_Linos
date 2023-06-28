//Styles
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../imagens/logo_oficial.svg";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Stack from 'react-bootstrap/Stack';

function NavScrollExample() {
  return (
      <>
        <Navbar className='bg-body-tertiary'>
          <Container fluid>
          <Navbar.Brand href="#">
            <img
                  src={logo}
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Nav
              className="font_nav espacamento_nav itens_nav"
              style={{ maxHeight: '70px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Início</Nav.Link>
              <Nav.Link href="#action2">Aventure-se</Nav.Link>
              <Nav.Link href="#action3">Origem</Nav.Link>
              <Nav.Link href="#action4">Sobre nós</Nav.Link>
              <Nav.Link href="#action5">Contato</Nav.Link>
              <Button className="botao" href="/login">FAZER LOGIN</Button>   
            </Nav>
          </Container>
          </Navbar>
      </>
      );
    }

export default NavScrollExample;