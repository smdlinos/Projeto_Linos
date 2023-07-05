//Styles
import "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png";

//Components
import Footer from "../components/Global/Footer";
import Header_q from "../components/Quests/Header_q";
import BodyConfig from "../components/Config/BodyConfig";


function Config (){
    
    return(
        <div className="background_config">
            <Header_q />
            <BodyConfig/>
            <Footer />        
        </div>
    )
}

export default Config;