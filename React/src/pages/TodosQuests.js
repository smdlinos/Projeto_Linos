//Styles
import "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png"

//Components
import SessionLogin from "../components/Login/SessionLogin";
import Header_q from "../components/Quests/Header_q";
import Footer from "../components/Global/Footer";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Lupa from "../components/imagens/lupaa.svg"




function Todos_Quests(){
    
    return(
        <div className="background_land">

            <Header_q />
            
            <Row className="alinhamento font_quests ">
                <Col>
                <p>Todos os questionários</p>
                </Col>
            </Row>
            <Row className="mx-3 pb-3">
                <Col>
                <Form className="d-flex form_search">
            <Form.Control
                variant="light"
              type="search"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Pesquisar"
            />
            <Button variant=""><img src={Lupa} alt="lupa" className="lupa_todos"/></Button>
          </Form>
                </Col>
            </Row>
            
            

        </div>
    )
}

export default Todos_Quests