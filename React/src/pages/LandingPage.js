//Styles
import "../components/Tela.css";
import "../components/Css/LandingPage.css"
import Responsive from "../components/Responsive.css"
import Container from "react-bootstrap/esm/Container";
import Inicio2 from "../components/LandingPage/inicio2";

//Components
import Header_q from "../components/Quests/Header_q";
import Footer from "../components/Global/Footer";
import NavScrollExample from "../components/LandingPage/NavScrollExample";
import Inicio from "../components/LandingPage/Inicio";
import Descricao from "../components/LandingPage/Descricao";
import Passos from "../components/LandingPage/Passos";
import Cliente from "../components/LandingPage/Cliente";
import ImagemDesktop from "../components/LandingPage/ImagemDesktop";

function LandingPage(){
    return(
        <div className="background_land">

            <NavScrollExample/>
            
            <Container fluid>
                <Inicio2/>
            </Container>
            <Footer/>
        </div>
    )

}

export default LandingPage;