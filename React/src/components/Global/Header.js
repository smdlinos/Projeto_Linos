//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import Logo from "../imagens/quest_logo.png"
import lupa from "../imagens/lupa2.svg";



export default function header() {
  return (
    <div>
    <Container className="mb-4" >
      <Row className="alinhamento">

        <Col className="mt-4 titulo">
          <a href="/"><img src={Logo} alt="logo" className="mt-4 quest_logo"/></a>
        </Col>
        
      </Row>
    </Container>
  </div>
  );
}
