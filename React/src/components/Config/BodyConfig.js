//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import horas from "../imagens/horas.svg"
import Duvida from "../imagens/duvida.svg"
import Logo from "../imagens/quest_logo.png"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Tela.css";
import Perfil_k from "../imagens/Perfil_k.svg"
import Editar from "../imagens/editar_perfil.svg"
import Form_config from "./FormConfig";





export default function BodyConfig() {
  
  return (
    <div className=""> 
      <Container className="mb-4 px-4 fonte_login">
        <Row>
            <Col>
                <h3 className="titulo_login alinhamento pt-4">Configurações</h3>
            </Col>
        </Row>
        
        <Form_config></Form_config>
      </Container>
    </div>
  );
}