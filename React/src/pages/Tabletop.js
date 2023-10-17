import { useState } from 'react';
import Casas from '../components/Tabletop/Casas.js';
import '../components/Tabletop/Tabletop.css';
import Footer from '../components/Global/Footer.js'
import Header_q from "../components/Quests/Header_q";
import "../components/Tela.css";
// import Mascotes from './components/Mascotes';

function Tabletop() {
  // Criando uma variável de estado 'pontos' e sua função de atualização 'setPontos' com valor inicial 0.
  const [pontos, setPontos] = useState(0);
  // Criando uma variável de estado 'posicao_boneca' e sua função de atualização 'setPosicao_boneca' com valor inicial 0.
  const [posicao_boneca, setPosicao_boneca] = useState(0);

  // Definindo um objeto STATUS para representar os diferentes estados das casas.
  const STATUS = {
    BLOQUEADO: 0,
    ATIVADO: 1,
    DESATIVADO: 2
  };

  // Criando uma variável de estado 'casas' e sua função de atualização 'setCasas'. 
  // Ela contém um array de objetos representando as casas do jogo.
  const [casas, setCasas] = useState([
    { numero: 6, pos_x: 10, pos_y: 50, status: STATUS.BLOQUEADO, recompensa: 'certificado'},
    { numero: 5, pos_x: 0, pos_y: 40, status: STATUS.BLOQUEADO, recompensa: ''},
    { numero: 4, pos_x: 10, pos_y: 30, status: STATUS.BLOQUEADO, recompensa: 'mascote_urso' },
    { numero: 3, pos_x: 0, pos_y: 20, status: STATUS.BLOQUEADO, recompensa: ''},
    { numero: 2, pos_x: 10, pos_y: 10, status: STATUS.BLOQUEADO, recompensa: 'mascote_koala'  },
    { numero: 1, pos_x: 0, pos_y: 0, status: STATUS.BLOQUEADO, recompensa: '' },
    { numero: 0, pos_x: 0, pos_y: 0, status: STATUS.DESATIVADO, recompensa: '' }
  ]);

  // const [mascote, setMascote] = useState([
  //   { tipo: 'leao', casa: 4, status: STATUS.BLOQUEADO},
  //   { tipo: 'koala', casa: 2, status: STATUS.BLOQUEADO}
  // ]);

  // const [certificado, setCertificado] = useState([
  //   { casa: 2, status: STATUS.BLOQUEADO}
  // ]);

  // Função que adiciona 10 pontos e ativa as casas.
  const add = () => {
    setPontos(pontos + 10);
    ativarCasas();
  };

  // Função que move a boneca de acordo com os pontos e desativa as casas.
  const walk = (casa_clicada) => {
    setPosicao_boneca(casa_clicada);
    setPontos(pontos - (casa_clicada-posicao_boneca)*10);
    desativarCasas(casa_clicada);
    console.log(`Avançou até casa ${casa_clicada}!`);
  };

  // Função que ativa as casas com base nos pontos e na posição da boneca.
  const ativarCasas = () => {
    const casasAtivadas = casas.map(casa => {
      if (casa.status === 0 && (pontos/10 + posicao_boneca)+1 === casa.numero) {
        return { ...casa, status: STATUS.ATIVADO };
      }
      return casa;
    });
    setCasas(casasAtivadas);
  };
  
  const handleCasaClick = (numero) => {
    // Aqui, você pode definir o que acontece quando a casa é clicada
    const casa_clicada = numero
    console.log(`Casa ${casa_clicada} foi clicada!`);
    if (casa_clicada > posicao_boneca + 1){
        const resp = prompt(`Você tem certeza que quer avançar até a casa ${casa_clicada}? Isso vai lhe custar ${(casa_clicada-posicao_boneca)*10} pontos.`)
        if (resp === ''){
            walk(casa_clicada);
        }
        else{
            console.log(`Ação cancelada`);
        }
    }
    else{
      walk(casa_clicada);
    }
  };

  // Função que desativa as casas com base nos pontos e na posição da boneca.
  const desativarCasas = (casa_clicada) => {
    const casasDesativadas = casas.map(casa => {
      if (casa.status === 1 && (pontos/10 + posicao_boneca) >= casa_clicada && casa.numero<= casa_clicada) {
        return { ...casa, status: STATUS.DESATIVADO };
      }
      return casa;
    });
    setCasas(casasDesativadas);
  };

  return (
    <div className="Tabletop">
      <Header_q></Header_q>
      <p className='titulo_login alinhamento'>Quantidade de Pontos: {pontos} </p>
      <p className='titulo_login alinhamento'>Posição da Boneca: {posicao_boneca} </p>
      <button className="titulo_login alinhamento " onClick={add}> Adicionar Pontos </button>
      {casas.map(casa => (
        <Casas
          key={casa.numero}
          numero={casa.numero}
          pos_x={casa.pos_x}
          pos_y={casa.pos_y}
          status={casa.status}
          pontos={pontos}
          posicao_boneca={posicao_boneca}
          recompensa={casa.recompensa}
          onClick={handleCasaClick}
        />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default Tabletop;
