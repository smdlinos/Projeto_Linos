import "../componentes/Tela.css"
import SectionLogin from "../componentes/Section_login";
import Header from "../componentes/Header"
import Footer from "../componentes/footer";

function Login (){
    return(
        <div className="background">
    <Header />
    <main>
    <SectionLogin />
    <Footer />
    </main>
           
        </div>
    )
}

export default Login