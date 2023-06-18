import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png"
import Button from 'react-bootstrap/Button';
import Star from "./imagens/Start_Point.svg"

export default function Body_q() {
  return (
    <div>
      <Container className="mb-4 fonte_login">
        <Row className="justify-content-start">
          <Col className="mt-4">
            <p className="font_titulo_q">
              Descrição:
            </p>
          </Col>
        </Row>
        <Row className="pb-3">
            <Col>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            
            </Col>
        </Row>
          <Row>
              <Col>
              <p className="font_titulo_q">
                Postado em:
              </p>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <h5>Interesse</h5>
              </Col>
              <Col>
              <h5>
                  Interesses MATCH
              </h5>
              </Col>
          </Row>
          <Row>
              <Col xs={12}className="">
              <img src={Star} alt="start_points"/>
              <h2>
                  60
              </h2>
              </Col>
          </Row>
          <Button type="button" className="px-5 mb-3 mt-3 botao">
              LINK DO QUESTIONÁRIO
          </Button>
      </Container>
    </div>
  );
}