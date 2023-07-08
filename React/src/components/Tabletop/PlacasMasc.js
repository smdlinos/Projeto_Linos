import React from "react"
import Button from "react-bootstrap/esm/Button";
import Casas from "./Casas";
import Boneca from "./Boneca";
import PlacasCert from "./PlacasCert";

//vem de fora boneca.id

function PlacasMasc({ boneca_id }) {


    // Criar um vetor vazio
    let placasMasc = [];

    // Criar objetos   
    let placaKo = { x: 10, y: 20, id: 1, pos: 2, estado: 'Bloq', tipo: 'Koala' }
    let placaUr = { x: 10, y: 40, id: 2, pos: 4, estado: 'Bloq', tipo: 'Urso' }

    // Adicionar os objetos ao vetor
    // placasMasc.push(placaM1);
    // placasMasc.push(placaM2);

    const desbloqueiaMasc = (array) => {
        for (let i = 0; i < array.length; i++) {
            let mascote = array[i];
            if (mascote.estado == 'Bloq' && boneca_id > mascote.id) {
                mascote.estado = 'Desbloq'
                return (mascote.tipo)
            }
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


    return (
        <div>
            <p></p>
            <Button > Exibe Koala Bloq </Button>
            <p></p>
            <Button > Exibe Urso Bloq </Button>
            <p></p>
            <Button > Exibe Koala Desbloq </Button>
            <p></p>
            <Button > Exibe Urso Desbloq </Button>
        </div>
    )
}


export default PlacasMasc;