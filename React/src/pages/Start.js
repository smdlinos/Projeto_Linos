import "../components/Tela.css"
import Header_q from "../components/Header_q"
import Footer from "../components/Footer";
import Container from "react-bootstrap/esm/Container";
import NavScrollExample from "../components/NavScrollExample";
import LandPage from "../components/LandPage";

function Start(){
    return(
        <div className="background_land">
            <NavScrollExample/>
            <LandPage/>
        </div>
    )

}

export default Start;