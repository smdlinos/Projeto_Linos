//Styles
import "../components/Tela.css"
import Container from "react-bootstrap/esm/Container";
import FundoTabletop from "../components/imagens/FundoTabletop.png"
import Pontos_Modal from "../components/Tabletop/PontoModal";
import Tabuleiro from "../components/imagens/background_tab_mobile.svg"
import Botao_Estrela from "../components/imagens/Botao_estrela.svg"

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
import { useEffect } from "react";
import { useBeforeUnload } from "react-router-dom";

function Tabletop() {
    const [modalShow, setModalShow] = useState(false);

    //INICIO DADOS ================================================================================================================
    let casa_atual = 6;
    let pontos_atual = 0;
    let casa_clicada = 7;
    let aumento = 10;

    let confirmacao = false;
    let [aumentou, setAumentou] = useState(false);
    let [andou, setAndou] = useState(false);
    //FINAL DADOS ================================================================================================================


    //INICIO TABLETOP ========================================================
    class tabletop {
        constructor(pos, pontos) {
            this.pos = pos;
            this.pontos = pontos;
        }
    }

    new tabletop(1,1)

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
    //FINAL TABLETOP ========================================================

    
    // INÍCIO CASAS =====================================================================
    // Criar um vetor vazio
    let casas = [];

    class Casa {
        constructor(x, y, id, estado, click) {
            this.x = x;
            this.y = y;
            this.id = id;
            this.estado = estado;
            this.click = click;
        }
    }

    for (let i = 0; i < 6; i++) {
        casas[i] = new Casa(10, 10 * (i + 1), i + 1, 'Trnsp', false);
    }


    const ativaCasas = (array) => {
        for (let i = 0; i < array.length; i++) {
            let casa = array[i];
            if (casa.estado == 'Trnsp' && casa.id <= casa_atual + (pontos_atual / 10)) {
                casa.estado = 'Ativ'
                console.log(`A casa ${casa.id} está ativada`)
                // ativaCasas(casa.id, array)
                // return (true);
            }
        }
    }

    const desativaCasas = (array) => {
        for (let i = 0; i < array.length; i++) {
            let casa = array[i];

            if (casa.id <= casa_atual) {
                casa.estado = 'Desativ'
                console.log(`A casa ${casa.id} está desativada`)
            }
        }
        // return (true);
    }

    useEffect(() => {
        if (aumentou) {
            ativaCasas(casas)
            setAumentou(false);
        }
    }, [aumentou]);

    useEffect(() => {
        if (andou) {
            desativaCasas(casas)
            setAndou(false);
        }
    }, [andou]);
    // FIM CASAS =====================================================================


    // INICIO PLACAS MASC =====================================================================
    // Criar um vetor vazio
    let placasMasc = [];

    class placaMasc {
        constructor(x, y, id, pos, estado, tipo, escolhido) {
            this.x = x;
            this.y = y;
            this.id = id;
            this.pos = pos;
            this.estado = estado;
            this.tipo = tipo;
            this.escolhido = escolhido;
        }
    }

    placasMasc [0] = new placaMasc(10, 20, 1, 2, 'Bloq','Koala', false);
    placasMasc [1] = new placaMasc(10, 40, 2, 4, 'Bloq','Urso', false);


    const clicaKoala = (array) => {
        let placa = array[0];
        if (placa.estado == 'Bloq') {
            console.log(`O mascote Koala está bloqueado`)
        }
        else {
            for (let i = 0; i < array.length; i++) {
                let placa_desbloq = array[i]; {
                    placa_desbloq.escolhido = false
                }
            }
            placa.escolhido = true;
            console.log(`O mascote Koala foi escolhido`)
        }
    }

    const clicaUrso = (array) => {

        let placa = array[1];
        if (placa.estado == 'Bloq') {
            console.log(`O mascote Urso está bloqueado`)
        }
        else {
            for (let i = 0; i < array.length; i++) {
                let placa_desbloq = array[i]; {
                    placa_desbloq.escolhido = false
                }
            }
            placa.escolhido = true;
            console.log(`O mascote Urso foi escolhido`)
        }
    }

    const desbloqueiaMasc = (array) => {
        for (let i = 0; i < array.length; i++) {
            let placa = array[i];
            if (placa.estado == 'Bloq' && casa_atual >= placa.pos) {
                placa.estado = 'Desbloq'
                console.log(`O mascote ${placa.tipo} foi desbloqueado`)
            }
        }
    }

    const exibeMasc = (array) => {
        var normal = true;
        for (let i = 0; i < array.length; i++) {
            let placa = array[i];
            if (placa.escolhido == true) {
                console.log(`O mascote ${placa.tipo} está selecionado`)
                normal = false;
            }
        }
        if (normal) {
            console.log(`Nenhum mascote foi escolhido`)
        }
    }

    useEffect(() => {
        if (aumentou) {
            desbloqueiaMasc(placasMasc);
            setAumentou(false);
        }
    }, [aumentou]);
    // FINAL PLACAS MASC =====================================================================


    // INICIO PLACAS CERT =====================================================================
    let [bloqeuada, setBloqueada] = useState(false);
    let [desbloqeuada, setDesbloqeuada] = useState(false);

    // Criar um vetor vazio
    let placasCert = [];

    class placaCert {
        constructor(x, y, id, pos, estado) {
            this.x = x;
            this.y = y;
            this.id = id;
            this.pos = pos;
            this.estado = estado;
        }
    }

    placasCert [0] = new placaCert(10, 60, 1, 6,'Bloq');


    const clicaCert = (array) => {
        for (let i = 0; i < array.length; i++) {
            let placa = array[i];
            if (placa.estado == 'Bloq') {
                console.log(`A ${placa.id}ª hora complementar está bloqueada`)
            }
            else {
                console.log(`Você já pode gerar o certificado da sua ${placa.id}ª hora complementar`)
            }
        }
    }

    const desbloqueiaCert = (array) => {
        for (let i = 0; i < array.length; i++) {
            let placa = array[i];
            if (placa.estado == 'Bloq' && casa_atual >= placa.pos) {
                placa.estado = 'Desbloq'
                console.log(`Recolha sua ${placa.id}ª hora complementar`)
            }
        }
    }

    useEffect(() => {
        if (aumentou) {
            desbloqueiaCert(placasCert);
            setAumentou(false);
        }
    }, [aumentou]);
    // FINAL PLACAS CERT =====================================================================

    return (
        <div className="background_gradient" >
            <Header_q />
            <Container className=" container">
                <img src={Tabuleiro} alt="tabuleiro" className="ms-5 ps-4" />
                <Button variant="link" onClick={() => setModalShow(true)}>
                    <img src={Botao_Estrela} alt="botao_resgata"/>
                </Button>

                <Pontos_Modal show={modalShow} onHide={() => setModalShow(false)} />

                <p></p>
                <Button onClick={(e) => aumenta_Pontos()}>Aumentar Pontos</Button>
                <p></p>
                <Button onClick={(e) => verifica_Pop(casa_clicada)}>Avançar Boneca</Button>
                <p></p>
                <Button onClick={(e) => confirma(casa_clicada)}>Confirmar Avanço</Button>
                <p></p>
                <p></p>
                <Button onClick={(e) => clicaKoala(placasMasc)}> Clica Placa Koala </Button>
                <p></p>
                <Button onClick={(e) => clicaUrso(placasMasc)}> Clica Placa Urso </Button>
                <p></p>
                <Button onClick={(e) => exibeMasc(placasMasc)}> Exibe Mascote </Button>
                <p></p>
                <Button onClick={(e) => clicaCert(placasCert)}> Clica Horas Complementares  </Button>
                {/* <Casas boneca_id={casa_atual} boneca_pontos={pontos_atual} aumentou={aumentou} setAumentou={setAumentou} andou={andou} setAndou={setAndou} /> */}
                {/* <Boneca boneca_pontos={pontos_atual} aumentou={aumentou} />
                <PlacasCert boneca_id={casa_atual} aumentou={aumentou} setAumentou={setAumentou} /> */}
                {/* <PlacasMasc boneca_id={casa_atual} aumentou={aumentou} setAumentou={setAumentou} /> */}
            </Container>
            <Footer />
        </div>
    )
}

export default Tabletop