//Styles
import "../components/Tela.css";
import Container from "react-bootstrap/esm/Container";

//Components
import Header_q from "../components/Quests/Header_q";
import Footer from "../components/Global/Footer";
import NavScrollExample from "../components/LandingPage/NavScrollExample";
import Inicio from "../components/LandingPage/Inicio";
import Descricao from "../components/LandingPage/Descricao";

function LandingPage(){
    return(
        <div className="background_land">

            <NavScrollExample/>

            <Container fluid>
                <Inicio/>
                <Descricao/>
            </Container>
        </div>
    )

}

export default LandingPage;