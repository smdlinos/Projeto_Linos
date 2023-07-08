import React from "react"
import Button from "react-bootstrap/esm/Button";
import PlacasMasc from "./PlacasMasc";
import Casas from "./Casas";
import Boneca from "./Boneca";

//vem de fora boneca.id

function PlacasCert({ boneca_id }) {

    // Criar um vetor vazio
    let placasCert = [];

    // Criar objetos   
    let placaC1 = { x: 10, y: 10, id: 1, pos: 6, estado: 'Desbloq' }

    // Adicionar os objetos ao vetor
    placasCert.push(placaC1);

    const exibeCert = (array) => {
        for (let i = 0; i < array.length; i++) {
            let placa = array[i];
            if (placa.estado == 'Bloq') {
                console.log(`A placa ${placa.id} está bloqueada`)
            }
            else{
                console.log(`A placa ${placa.id} está desbloqueada`)
            }
        }
    }


    const desbloqueiaCert = (array) => {
        for (let i = 0; i < array.length; i++) {
            let placa = array[i];
            if (placa.estado == 'Bloq' && boneca_id > placa.id) {
                placa.estado = 'Desbloq'
                return (true)
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


    return (
        <div>
            <p></p>
            <Button onClick={(e) => exibeCert(placasCert)}> Exibe Cert  </Button>
        </div>
    )
}


export default PlacasCert;