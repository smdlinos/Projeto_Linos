import "../components/Tela.css"
import SessionLogin from "../components/SessionLogin";
import Header from "../components/Header"
import Footer from "../components/Footer";

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