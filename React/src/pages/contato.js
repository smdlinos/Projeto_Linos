import "../componentes/Tela.css"
import Login from "../componentes/section_login";
import Header from "../componentes/Header"
import Footer from "../componentes/footer";

function Contato (){
    return(
        <div className="background">
    <Header />
    <main>
    <Login />
    <Footer />
    </main>
           
        </div>
    )
}

export default Contato