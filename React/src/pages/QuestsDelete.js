//Styles
import "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png"

//Components
import SessionLogin from "../components/Login/SessionLogin";
import Header from "../components/Global/Header"
import Footer from "../components/Global/Footer";
import Delete from "../components/imagens/Tela_Delete.svg"
import Container from "react-bootstrap/esm/Container";




function QuestsDelete (){
    
    return(
        <div className="body ">
            <Container className="tela_deletar">
            <div className="img_delete">
            <img src={Delete} alt="deleta" className=""/>
                <div className="link_home">
                    <a >aaaaaaaa</a>
                </div>
            </div>

            </Container>

        </div>
    )
}

export default QuestsDelete;