import React from "react"
import Button from "react-bootstrap/esm/Button";
import Casas from "./Casa";
import Boneca from "./Boneca";
import PlacasCert from "./PlacasCert";
import { useEffect } from "react";
import { useState } from "react";

//vem de fora boneca.id

function PlacasMasc({ boneca_id, aumentou, setAumentou}) {

    let [bloqeuada, setBloqueada] = useState(false);
    let [desbloqeuada, setDesbloqeuada] = useState(false);

    // Criar um vetor vazio
    let placasMasc = [];

    // Criar objetos   
    let placaKo = { x: 10, y: 20, id: 1, pos: 2, estado: 'Bloq', tipo: 'Koala', escolhido: false }
    let placaUr = { x: 10, y: 40, id: 2, pos: 4, estado: 'Bloq', tipo: 'Urso', escolhido: false }

    // Adicionar os objetos ao vetor
    placasMasc.push(placaKo);
    placasMasc.push(placaUr);

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
            if (placa.estado == 'Bloq' && boneca_id >= placa.pos) {
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

    // if (desbloqueiaMasc == 'Koala') {
    //     console.log('Você desbloqueou o Koala')
    // }


    // if (desbloqueiaMasc == 'Urso') {
    //     console.log('Você desbloqueou o Urso')
    // }

    //estado=='Desbloq'

    //exibe
    //placa_desbloq.svg
    //clica
    //exibir pop D

    useEffect(() => {
        if (aumentou) {
            desbloqueiaMasc(placasMasc);
            setAumentou(false);
        }
    }, [aumentou]);


    return (
        <div>
            {/* aumentou == true */}
            <p></p>
            {/* <Button onClick={(e) => desbloqueiaMasc(placasMasc)}> Desbloqueia Mascotes </Button> */}

            {/* no clique */}
            <p></p>
            <Button onClick={(e) => clicaKoala(placasMasc)}> Clica Placa Koala </Button>
            <p></p>
            <Button onClick={(e) => clicaUrso(placasMasc)}> Clica Placa Urso </Button>
            <p></p>
            <Button onClick={(e) => exibeMasc(placasMasc)}> Exibe Mascote </Button>
        </div>
    )
}


export default PlacasMasc;