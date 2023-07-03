//Styles
import "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png";

//Components
import Footer from "../components/Global/Footer";
import BodyCertificado from "../components/Certificado/BodyCertificado";
import Header_q from "../components/Quests/Header_q";



function Certificado(){
    
    return(
        <div className="background_land">
            <Header_q />
            <BodyCertificado />
            <Footer />        
        </div>
    )
}

export default Certificado;