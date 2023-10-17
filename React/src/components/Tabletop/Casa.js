// import React from "react"
// import Button from "react-bootstrap/esm/Button";
// import Boneca from "./Boneca";
// import PlacasCert from "./PlacasCert";
// import PlacasMasc from "./PlacasMasc";
// import { useEffect } from "react";
// import { useState } from "react";

// //de fora vem boneca.id e boneca.pontos

// function Casa({ boneca_id, boneca_pontos, aumentou, setAumentou, andou, setAndou }) {

//     // Criar um vetor vazio
//     let casas = [];

//     function Casa(x, y, id, estado, click) {
//         this.x = x;
//         this.y = y;
//         this.id = id;
//         this.estado = estado;
//         this.click = click;
//       }

//       for( let i = 0; i<6; i++){
//         casa[i] = new Casa(10, 10*(i+1), i+1, 'Trnsp', false);
//       }

//       console.log(casa);

      
//     // // Criar objetos
//     // let casa1 = {
//     //     x: 10,
//     //     y: 10,
//     //     id: 1,
//     //     estado: 'Trnsp',
//     //     click: false,
//     // };
//     // let casa2 = { x: 10, y: 20, id: 2, estado: 'Trnsp', click: false };
//     // let casa3 = { x: 10, y: 30, id: 3, estado: 'Trnsp', click: false };
//     // let casa4 = { x: 10, y: 40, id: 4, estado: 'Trnsp', click: false };
//     // let casa5 = { x: 10, y: 50, id: 5, estado: 'Trnsp', click: false };
//     // let casa6 = { x: 10, y: 60, id: 6, estado: 'Trnsp', click: false };

//     // // Adicionar os objetos ao vetor
//     // casas.push(casa1);
//     // casas.push(casa2);
//     // casas.push(casa3);
//     // casas.push(casa4);
//     // casas.push(casa5);
//     // casas.push(casa6);

//     //botao 1
//     const ativaCasas = (array) => {
//         for (let i = 0; i < array.length; i++) {
//             let casa = array[i];
//             if (casa.estado == 'Trnsp' && casa.id <= boneca_id + (boneca_pontos / 10)) {
//                 casa.estado = 'Ativ'
//                 console.log(`A casa ${casa.id} está ativada`)
//                 // ativaCasas(casa.id, array)
//                 // return (true);
//             }
//         }
//     }

//     const desativaCasas = (array) => {
//         for (let i = 0; i < array.length; i++) {
//             let casa = array[i];

//             if (casa.id <= boneca_id) {
//                 casa.estado = 'Desativ'
//                 console.log(`A casa ${casa.id} está desativada`)
//             }
//         }
//         // return (true);
//     }

//     useEffect(() => {
//         if (aumentou) {
//             ativaCasas(casas)
//             setAumentou(false);
//         }
//     }, [aumentou]);

//     useEffect(() => {
//         if (andou) {
//             desativaCasas(casas)
//             setAndou(false);
//         }
//     }, [andou]);

//     return (
//         <div>
//             {/* aumentou == true */}
//             {/* <Button onClick={(e) => ativaCasas(casas)}> Ativa Casas</Button> */}
//             <p></p>
//             {/* andou == true */}
//             {/* <Button onClick={(e) => desativaCasas(casas)}>Desativar Casas</Button> */}
//         </div>
//     )
// }

// export default Casa;