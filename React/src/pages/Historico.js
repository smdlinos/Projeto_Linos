//Styles
import "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png"

//Components
import SessionLogin from "../components/Login/SessionLogin";
import Header_q from "../components/Quests/Header_q";
import Footer from "../components/Global/Footer";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


function Historico (){
    
    return(
        <div className="background_land">

            <Header_q />
            
            <Row className="alinhamento">
                <Col>
                <p className="quests_todos">Histórico de questionários</p>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                
                    Cards
                
                </Col>
            </Row>
            

        </div>
    )
}

export default Historico;