import "../componentes/Tela.css"
import SessionLogin from "../componentes/Login";
import Header from "../componentes/Header"
import Footer from "../componentes/Footer";

function Login (){
    return(
        <div className="background">
    <Header />
    <main>
    <SessionLogin />
    <Footer />
    </main>
           
        </div>
    )
}

export default Login