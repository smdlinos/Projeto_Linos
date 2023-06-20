import "../components/Tela.css"
import SessionLogin from "../components/SessionLogin";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Logo from "../components/imagens/quest_logo.png"




function Login (){
    
    return(
        <div>
    <Header />
    <main>
    <SessionLogin />
    <Footer />
    </main>
           
        </div>
    )
}

export default Login