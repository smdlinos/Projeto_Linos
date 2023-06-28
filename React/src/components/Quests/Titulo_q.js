//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import Logo from "../imagens/quest_logo.png"


export default function Titulo_q({quest}) {
  return (
    <div>
      <Container className=" ">
        <Row className="justify-content-start">
          <Col className="mt-4 titulo">
            <h2 className="titulo_login">
             {quest.titulo}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <p>Pesquisador</p>
           {quest.autor}
          </Col>
          <Col>
            <p>Instituição</p>
           {quest.instituicao} 
          </Col>
        </Row>
      </Container>
    </div>
  );
}