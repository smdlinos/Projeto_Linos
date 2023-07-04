//Styles
import "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png"

//Components
import SessionLogin from "../components/Login/SessionLogin";
import Header from "../components/Global/Header"
import Footer from "../components/Global/Footer";




function Login (){
    
    return(
        <div className="background_">

            <Header />
            
            <main>
                <SessionLogin />
                <Footer />
            </main>

        </div>
    )
}

export default Login