//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import horas from "../imagens/horas.svg"
import Button from "react-bootstrap/esm/Button";
import Popover from "./CardCertificado";

import Logo from "../imagens/quest_logo.png"
import PdfButton from "./PdfButton";


export default function BodyCertificado() {
  return (
    <div className="background_land">
      <Container className="mb-4 px-4">
        <Row>
          <Col className="mt-4" xs={10}>
           <h3 className="titulo_login ">Certficados de horas de atividades complementares</h3>
           
          </Col>
          <Col xs={2} className="pt-5 ps-1">
          <Popover/>
          </Col>
        </Row>
        <Row>
            <Col>
            <p className="fonte_login pe-4 pt-4"> 
                Olha só o quanto você acumulou de horas complementares ao ajudar 
                a pesquisa acadêmica!
            </p>
            </Col>
        </Row>
        <Row className="div_horas">
          <img src={horas} alt="logo" className="rounded mx-auto d-block horas"/>
            <Col className="texto_horas">
            <p><b>X HORAS TOTAIS</b></p>
            </Col>
        </Row>
        <Row className="mt-5 pb-3">
            <Col xs={12} className="mt-5 pb-3">
            <h6 className="fonte_login alinhamento mt-5">
            <b>Quer resgatar seu certificado? <br/>Não perca tempo!</b>
            </h6>
            </Col>
            <Col>
            <PdfButton/>
            </Col>
        </Row>

      </Container>
    </div>
  );
}
