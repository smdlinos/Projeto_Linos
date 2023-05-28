import "/Users/mickaelcastro/Downloads/React/src/componentes/Tela.css"
import Header from "/Users/mickaelcastro/Downloads/React/src/componentes/Header.js";
import Login from "/Users/mickaelcastro/Downloads/React/src/componentes/section_login.js";
import Footer from "/Users/mickaelcastro/Downloads/React/src/componentes/footer.js";

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