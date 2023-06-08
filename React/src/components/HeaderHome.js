import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Tela.css"
import Stack from 'react-bootstrap/Stack';
import lupa from "../components/imagens/lupaa.svg";
import perfil from "../components/imagens/noto_lion.png";
import estrela from "../components/imagens/estrela.svg";
import OverlayPerfil from "./OverlayPerfil";

export default function HeaderHome() {
  return (
    <div>
      <Container className="mb-4">
        <Row className="justify-content-center mt-3">
       
          <Col className="mt-4">
            <img src={lupa}
            alt="lupa" className="lupa"/>
          </Col>
          <Col className="mt-4 titulo pe-1">
          <h1 className="text-muted titulo">QUESTS</h1>
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