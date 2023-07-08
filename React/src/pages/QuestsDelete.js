//Styles
import "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png"
import cor from "../components/imagens/coracao.svg"

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
                    <a className="link_home2" href="/">Ir para página inicial</a>
                </div>
            </div>
                   
            </Container>
            <div className="Footer pt-3 fonte_login alinhamento">
                        <p>© 2023 Feito com <img src={cor} alt="coracao"/> pela Linos.</p>
                    </div>
        </div>
    )
}

export default QuestsDelete;