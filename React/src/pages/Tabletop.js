//Styles
import "../components/Tela.css"
import Container from "react-bootstrap/esm/Container";
import FundoTabletop from "../components/imagens/FundoTabletop.png"

//Components
import Header_q from "../components/Quests/Header_q"
import Footer from "../components/Global/Footer";


function Tabletop(){
    return(
        <div className="container" >
            <Header_q/>
            <Container className="background_gradient">
            <h1 className='pb-3 titulo_login alinhamento'>Meu tabuleiro!</h1>
            </Container>
            <Footer/>
        </div>
    )
}

export default Tabletop