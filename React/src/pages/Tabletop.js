//Styles
import "../components/Tela.css"
import Container from "react-bootstrap/esm/Container";
import FundoTabletop from "../components/imagens/FundoTabletop.png"
import Tabuleiro from "../components/imagens/tabuleiro_.svg"

//Components
import Header_q from "../components/Quests/Header_q"
import Footer from "../components/Global/Footer";
import Row from "react-bootstrap/esm/Row";
import Casas from "../components/Tabletop/Casas";
import Boneca from "../components/Tabletop/Boneca";
import PlacasCert from "../components/Tabletop/PlacasCert";
import PlacasMasc from "../components/Tabletop/PlacasMasc";

function Tabletop(){
    return(
        <div className="background_gradient" >
            <Header_q/>
            <Container className=" container">
            <img src={Tabuleiro} alt="tabuleiro" className="ms-5 ps-4"/>
            <Casas boneca_id={2} boneca_pontos={20} casa_clicada={4}/>
            <Boneca boneca_pontos={20}/>
            <PlacasCert boneca_id={2}/>
            <PlacasMasc boneca_id={2}/>
            </Container>
            <Footer/>
        </div>
    )
}

export default Tabletop