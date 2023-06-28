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



export default function BodyConfig() {
  return (
    <div className="bg-light">
      <Container className="mb-4 px-4 fonte_login alinhamento">
        <Row>
            <Col>
                <h3 className="titulo_login  pt-4">Configurações</h3>
            </Col>
        </Row>
        <Row>
        <img src={Perfil_k} alt="perfil_koala" className="perfil_koala m-auto pt-3"></img>
        <img src={Editar} alt="editar" className=" m-auto pt-3"></img>
        
            
        </Row>
      </Container>
    </div>
  );
}