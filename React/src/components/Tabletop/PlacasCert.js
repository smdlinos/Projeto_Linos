import React from "react"
import Button from "react-bootstrap/esm/Button";
import PlacasMasc from "./PlacasMasc";
import Casas from "./Casa";
import Boneca from "./Boneca";
import { useEffect } from "react";
import { useState } from "react";

//vem de fora boneca.id

function PlacasCert({ boneca_id, aumentou, setAumentou}) {

    let [bloqeuada, setBloqueada] = useState(false);
    let [desbloqeuada, setDesbloqeuada] = useState(false);

    // Criar um vetor vazio
    let placasCert = [];

    // Criar objetos   
    let placaC1 = { x: 10, y: 10, id: 1, pos: 6, estado: 'Bloq' }

    // Adicionar os objetos ao vetor
    placasCert.push(placaC1);

    const clicaCert = (array) => {
        for (let i = 0; i < array.length; i++) {
            let placa = array[i];
            if (placa.estado == 'Bloq') {
                console.log(`A ${placa.id}ª hora complementar está bloqueada`)
            }
            else{
                console.log(`Você já pode gerar o certificado da sua ${placa.id}ª hora complementar`)
            }
        }
    }

    const  desbloqueiaCert = (array) => {
        for (let i = 0; i < array.length; i++) {
            let placa = array[i];
            if (placa.estado == 'Bloq' && boneca_id >= placa.pos) {
                placa.estado = 'Desbloq'
                console.log(`Recolha sua ${placa.id}ª hora complementar`)
            }
        }
    }

    // if (desbloqueiaCert) {
    //     console.log('Você desbloqueou 1 HC')
    // }

    //estado=='Desbloq'

    //exibe
    //placa_desbloq.svg
    //clica
    //exibir pop D

    useEffect(() => {
        if (aumentou) {
            desbloqueiaCert(placasCert);
            setAumentou(false);
        }
    }, [aumentou]);

    return (
        <div>
            {/* aumentou == true */}
            <p></p>
            {/* <Button onClick={(e) => desbloqueiaCert(placasCert)}> Desbloqueia Horas Complementares  </Button> */}
            {/* no clique */}
            <p></p>
            <Button onClick={(e) => clicaCert(placasCert)}> Clica Horas Complementares  </Button>
        </div>
    )
}


export default PlacasCert;