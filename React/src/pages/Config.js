import "../components/Tela.css"
import SessionLogin from "../components/SessionLogin";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Body_c from "../components/body_certificado";
import Logo from "../components/imagens/quest_logo.png"
import Header_q from "../components/Header_q"
import Body_config from "../components/body_config"




function Config (){
    
    return(
        <div>
    <Header_q />
    <Body_config/>
    
    <Footer />        
        </div>
    )
}

export default Config;