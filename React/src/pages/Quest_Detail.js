import "../components/Tela.css"
import SessionLogin from "../components/SessionLogin";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Logo from "../components/imagens/quest_logo.png";
import Titulo_q from "../components/Titulo_q";
import Body_q from "../components/Body_q";
import Header_q from "../components/Header_q";




function Quest_D (){

    return(
        <div className="background">
    <Header_q/>
    <main>
        <Titulo_q/>
        <Body_q/>
    <Footer />
    </main>
           
        </div>
    )
}

export default Quest_D