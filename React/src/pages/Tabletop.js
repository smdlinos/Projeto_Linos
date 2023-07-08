//Styles
import "../components/Tela.css"
import Container from "react-bootstrap/esm/Container";
import FundoTabletop from "../components/imagens/FundoTabletop.png"
import Tabuleiro from "../components/imagens/background_tab_mobile.svg"

//Components
import Header_q from "../components/Quests/Header_q"
import Footer from "../components/Global/Footer";
import Row from "react-bootstrap/esm/Row";
import Casas from "../components/Tabletop/Casas";
import Boneca from "../components/Tabletop/Boneca";
import PlacasCert from "../components/Tabletop/PlacasCert";
import PlacasMasc from "../components/Tabletop/PlacasMasc";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

function Tabletop() {
    let casa_atual = 4;
    let pontos_atual = 0;
    let casa_clicada = 6;
    let aumento = 10;

    let confirmacao = false;
    let [aumentou, setAumentou] = useState(false);
    let [andou, setAndou] = useState(false);

    function aumenta_Pontos() {
        console.log(`Você adicionou ${aumento} pontos`)
        pontos_atual = pontos_atual + aumento
        console.log(`Agora você possui ${pontos_atual} pontos`)
        setAumentou(true);
    }
    //CHAMAR:
    //ativar casas
    //se preciso desbloquear mascote
    //se preciso desbloquear cert

    function verifica_Pop(casa_clicada) {
        if (casa_clicada > casa_atual + 1) {
            if (confirmacao) {
                avanca_Boneca(casa_clicada)
                andou = true;
            }
            else {
                let gasto = (casa_clicada - casa_atual) * 10
                console.log(`Você tem certeza? O avanço até a casa ${casa_clicada} custará ${gasto} pontos`)
            }
        }
        else {
            avanca_Boneca(casa_clicada)
            andou = true;
        }

    }

    function confirma(casa_clicada) {
        confirmacao = true;
        verifica_Pop(casa_clicada)
    }

    function avanca_Boneca(casa_clicada) {
        pontos_atual = pontos_atual - ((casa_clicada - casa_atual) * 10)
        casa_atual = casa_clicada
        console.log(`Você avançou para a casa ${casa_atual}`)
        console.log(`Agora você possui ${pontos_atual} pontos`)
        setAndou(true);
    }
    //CHAMAR:
    //desativar casas

    return (
        <div className="background_gradient" >
            <Header_q />
            <Container className=" container">
                <img src={Tabuleiro} alt="tabuleiro" className="ms-5 ps-4" />
                <p></p>
                <Button onClick={(e) => aumenta_Pontos()}>Aumentar Pontos</Button>
                <p></p>
                <Button onClick={(e) => verifica_Pop(casa_clicada)}>Avançar Boneca</Button>
                <p></p>
                <Button onClick={(e) => confirma(casa_clicada)}>Confirmar Avanço</Button>
                <p></p>
                <Casas boneca_id={casa_atual} boneca_pontos={pontos_atual} aumentou={aumentou} setAumentou={setAumentou} andou={andou} setAndou={setAndou} />
                <Boneca boneca_pontos={pontos_atual} aumentou={aumentou}/>
                <PlacasCert boneca_id={casa_atual} aumentou={aumentou} setAumentou={setAumentou} />
                <PlacasMasc boneca_id={casa_atual} aumentou={aumentou} setAumentou={setAumentou} />
            </Container>
            <Footer />
        </div>
    )
}

export default Tabletop