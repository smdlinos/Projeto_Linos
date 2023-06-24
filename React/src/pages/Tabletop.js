import "../components/Tela.css"
import Header_q from "../components/Header_q"
import Footer from "../components/Footer";
import Container from "react-bootstrap/esm/Container";
import FundoTabletop from "../components/imagens/FundoTabletop.png"

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