//Styles
import "../components/Tela.css"
import Container from "react-bootstrap/esm/Container";
import FundoTabletop from "../components/imagens/FundoTabletop.png"
import Tabuleiro from "../components/imagens/Tab.svg"

//Components
import Header_q from "../components/Quests/Header_q"
import Footer from "../components/Global/Footer";
import Row from "react-bootstrap/esm/Row";


function Tabletop(){
    return(
        <div className="background_gradient" >
            <Header_q/>
            <Container className=" container">
            <img src={Tabuleiro} alt="tabuleiro" className="ms-5 ps-4"/>
            </Container>
            <Footer/>
        </div>
    )
}

export default Tabletop