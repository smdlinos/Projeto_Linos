import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Tela.css"
import Stack from 'react-bootstrap/Stack';
import lupa from "/Users/mickaelcastro/Downloads/React/src/componentes/imagens/lupaa.svg";
import perfil from "/Users/mickaelcastro/Downloads/React/src/componentes/imagens/noto_lion.png";
import estrela from "/Users/mickaelcastro/Downloads/React/src/componentes/imagens/estrela.svg";

export default function Header2() {
  return (
    <div>
      <Container className="mb-4">
        <Row className="justify-content-center mt-3">
          <Col className="mt-4">
            <img src={lupa}
alt="lupa" className="lupa"/>
          </Col>
          <Col className="mt-4 titulo">
          <h1 className="text-muted">QUESTS</h1>
          </Col>
          <Col className="mt-4 itens ">
          <Stack direction="horizontal" gap={3}>
            
            <img src={estrela} alt="estrela" className="estrela"/>
            <p className="mt-2">50</p>
            
            <img src={perfil}
alt="perfil" className="perfil"/>
          </Stack>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
