//Styles
import "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png"

//Components
import SessionLogin from "../components/Login/SessionLogin";
import Header from "../components/Global/Header"
import Footer from "../components/Global/Footer";
import Delete from "../components/imagens/Tela_Delete.svg"




function QuestsDelete (){
    
    return(
        <div className="body">

            <div className="img_delete">
            <img src={Delete} alt="deleta"/>
                <div className="link_home">
                    <a >aaaaaaaa</a>
                </div>
            </div>
            

        </div>
    )
}

export default QuestsDelete;