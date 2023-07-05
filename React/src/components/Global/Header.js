//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import Logo from "../imagens/logo_quest.svg"
import lupa from "../imagens/lupa2.svg";


export default function header() {
  return (
    <div className="background_header">
    <Container className="mb-4 alinhamento" >
      <Row className="">
        <Col xs={3}>
          <a><img src={lupa} alt="botao_voltar" className="mt-5 botao_voltar"/></a>
        </Col>
        <Col className="mt-4 titulo me-1" xs={5}>
          <a href="/"><img src={Logo} alt="logo" className="mt-4 ms-4 quest_logo_q"/></a>
        </Col>
        <Col xs={3}>
        {authenticated && 
          <Stack direction="horizontal" className="pt-5">  
            <img src={estrela} alt="estrela" className="estrela "/>
         {user && <b><p className="font_t">{user.user.pontos}</p></b>}
            <OverlayPerfil/>
          </Stack>
          }
        </Col>
      </Row>
    </Container>
  </div>
  );
}
