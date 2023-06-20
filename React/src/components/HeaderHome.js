import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Tela.css"
import Stack from 'react-bootstrap/Stack';
import lupa from "../components/imagens/lupa2.svg";
import perfil from "../components/imagens/noto_lion.png";
import estrela from "../components/imagens/estrela2.svg";
import OverlayPerfil from "./OverlayPerfil";
import logo from "../components/imagens/logo_oficial.svg";

export default function HeaderHome() {
  return (
    <div>
      <Container className="mb-4 background_header">
        <Row className="justify-content-center mt-3">
       
          <Col className="mt-4">
            <img src={lupa}
            alt="lupa" className="pt-2 pe-5"/>
          </Col>
          <Col className=" titulo pe-1">
          <img src={logo} alt="logo" className="mt-4 quest_logo_q"/>
          </Col>
          <Col className="mt-3 itens ">
          <Stack direction="horizontal" gap={1}>
            
            <img src={estrela} alt="estrela" className="estrela"/>
            <p className="pt-1 pontos ">50</p>
            
            <OverlayPerfil/>
          </Stack>
            
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
