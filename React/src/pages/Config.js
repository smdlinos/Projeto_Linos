//Styles
import "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png";

//Components
import Footer from "../components/Global/Footer";
import Header_q from "../components/Quests/Header_q";
import BodyConfig from "../components/Config/BodyConfig";


function Config (){
    
    return(
        <div>
            <Header_q />
            <div className="background_config">
            <BodyConfig/>
            <Footer />   
            </div>
                 
        </div>
    )
}

export default Config;