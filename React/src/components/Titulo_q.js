import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png"


export default function titulo_q() {
  return (
    <div>
      <Container className=" ">
        <Row className="justify-content-start">
          <Col className="mt-4 titulo">
            <h2 className="titulo_login">
              Título do questionário
            </h2>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <p>Pesquisador</p>
          </Col>
          <Col>
            <p>Instituição</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}