import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png"

export default function Header_q() {
  return (
    <div>
      <Container className="mb-4 ">
        <Row className="justify-content-md-center">
          <Col className="mt-4 titulo">
            <a href="/"><img src={Logo} alt="logo" className="mt-4 quest_logo_q"/></a>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
