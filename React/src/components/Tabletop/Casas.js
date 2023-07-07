import React from "react"
import Button from "react-bootstrap/esm/Button";
import Boneca from "./Boneca";
import PlacasCert from "./PlacasCert";
import PlacasMasc from "./PlacasMasc";
import { useState } from "react";
//de fora vem boneca.id e boneca.pontos

function Casas({ boneca_id, boneca_pontos, casa_clicada }) {
    let pop_conf;
    let nova_pos;

    // Criar um vetor vazio
    let casas = [];

    // Criar objetos
    let casa1 = {
        x: 10,
        y: 10,
        id: 1,
        estado: 'Trnsp',
        click: false,
        pop: false
    };
    let casa2 = { x: 10, y: 20, id: 2, estado: 'Trnsp', click: false, pop: true };
    let casa3 = { x: 10, y: 30, id: 3, estado: 'Trnsp', click: false, pop: true };
    let casa4 = { x: 10, y: 40, id: 4, estado: 'Trnsp', click: false, pop: true };
    let casa5 = { x: 10, y: 50, id: 5, estado: 'Trnsp', click: false, pop: false };
    let casa6 = { x: 10, y: 60, id: 6, estado: 'Trnsp', click: false, pop: false };

    // Adicionar os objetos ao vetor
    casas.push(casa1);
    casas.push(casa2);
    casas.push(casa3);
    casas.push(casa4);
    casas.push(casa5);
    casas.push(casa6);

    //botao 1
    const ativaUltCasa = (array) => {
        for (let i = 0; i < array.length; i++) {
            let casa = array[i];
            if (casa.estado == 'Trnsp' && casa.id >= boneca_id + (boneca_pontos / 10)) {
                casa.estado = 'Ativ'
                ativaCasas(casa.id, array)
                return (true);
            }
        }
    }

    const ativaCasas = (id_casa, array) => {
        for (let i = 0; i < array.length; i++) {
            let casa = array[i];
            if (casa.estado == 'Trnsp' && casa.id < id_casa || casa.id == id_casa) {
                casa.estado = 'Ativ'
                console.log(`A casa ${casa.id} está ativada`)
            }
        }
    }

    //botao 2
    const verificaPop = (array, casa_clicada) => {
        for (let i = 0; i < array.length; i++) {
            let casa = array[i];
            if (casa.id == casa_clicada) {
                casa.click = true;
            }
            // Realize as ações desejadas para cada objeto "casa"
            if (casa.click = true && casa.id > boneca_id + 1) {
                casa.pop = true;
                return (true);
            }
            else {
                pop_conf = 1;
                nova_pos = casa.id;
                return (false);
            }
        }
    }



    const exibePop = (array, casa_clicada) => {
        // Realize as ações desejadas para cada objeto "casa"
        if (casa_clicada > boneca_id + 1) {
            //calculo pop
            let gasto = (casa_clicada - boneca_id) * 10
            //exibe pop
            console.log(`Você vai gastar ${gasto} pontos, quer andar?`);
        }
        else {
            console.log(`Sem pop_up`)
        }
    }


    const desativaUltCasa = (array) => {
        for (let i = 0; i < array.length; i++) {
            let casa = array[i];

            if (casa.estado == 'Ativ') {
                casa.estado = 'Desativ'
                console.log(`A casa ${casa.id} está desativada`)
            }
        }
        return (true);
    }


    // if (verificaPop(casas)) {
    //     nova_pos = exibePop(casas)
    // }

    // if (pop_conf == 1) {
    //     desativaCasa(casas)
    // }

    // if (desativaCasa(casas)) {
    //     console.log('A casa está desativada')
    // }


    return (
        <div>
            <Button onClick={(e) => ativaUltCasa(casas)}>Ativar Casas</Button>
            <p></p>
            <Button onClick={(e) => exibePop(casas, casa_clicada)}>Mostrar PopUP</Button>
            <p></p>
            <Button onClick={(e) => desativaUltCasa(casas)}>Desativar Casas</Button>
        </div>
    )
}

export default Casas;