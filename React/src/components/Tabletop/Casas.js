import React, { useState, useEffect } from 'react';
import BloqueadaImp from '../imagens/BImp.svg'
import BloqueadaPar from '../imagens/BPar.svg'
import AtivadaImp from '../imagens/AImp.svg'
import AtivadaPar from '../imagens/APar.svg'
import DesativadaImp from '../imagens/DImp.svg'
import DesativadaPar from '../imagens/DPar.svg'
import DesativadaImpBoneca from '../imagens/DImpB.svg'
import DesativadaParBoneca from '../imagens/DParB.svg'
import DesativadaImpBonecaKoala from '../imagens/DImpBKoala.svg'
import DesativadaParBonecaKoala from '../imagens/DParBKoala.svg'
import DesativadaImpBonecaUrso from '../imagens/DImpBUrso.svg'
import DesativadaParBonecaUrso from '../imagens/DParBUrso.svg'
import KoalaBloqueado from '../imagens/koalaB.svg'
import KoalaDesbloqueado from '../imagens/koalaD.svg'
import UrsoBloqueado from '../imagens/ursoB.svg'
import UrsoDesbloqueado from '../imagens/ursoD.svg'
import CertBloqueado from '../imagens/certB.svg'
import CertDesbloqueado from '../imagens/certD.svg'


function Casas(props) {
    // Desestruturando as props para obter as variáveis necessárias.
    const numero = props.numero;
    const pos_x = props.pos_x;
    const pos_y = props.pos_y;
    const posicao_boneca = props.posicao_boneca;
    const recompensa = props.recompensa;
    // Usando o Hook useState para gerenciar o estado do status da casa.
    const [status, setStatus] = useState(props.status);

    // Usando o Hook useEffect para detectar mudanças no status passado como prop e atualizar o estado local.
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const STATUS = {
        BLOQUEADO: 0,
        ATIVADO: 1,
        DESATIVADO: 2
      };

          // Função para determinar o nome da imagem com base nas condições que você especificou.
    const getBonecaImage = () => {
        if (posicao_boneca >= 4) {
            return numero % 2 === 1 ? DesativadaImpBonecaUrso : DesativadaParBonecaUrso ;
        } else if (posicao_boneca >= 2 && posicao_boneca < 4) {
            return numero % 2 === 1 ? DesativadaImpBonecaKoala : DesativadaParBonecaKoala;
        } else {
            return numero % 2 === 1 ? DesativadaImpBoneca : DesativadaParBoneca;
        }
    };


    // const [mascote, setMascote] = useState([
    //     { tipo: 'leao', casa: 4, status: STATUS.BLOQUEADO},
    //     { tipo: 'koala', casa: 2, status: STATUS.BLOQUEADO}
    //   ]);
    
    // const [certificado, setCertificado] = useState([
    //     { casa: 2, status: STATUS.BLOQUEADO}
    // ]);
    

    return (
        //só pode ser clicada quando o status for ATIVADO
        <div className={`casa ${status === 1 ? 'casa-ativada' : ''}`} 
        onClick={() => {
            if (status === 1) {
                props.onClick(props.numero);
            }
        }}>
            {/* <h1> Casa {numero} </h1>
            <p> status: {status} </p> */}
            {/* <p> recompensa: {recompensa} </p> */}
            <p></p>
            {/* Estrutura condicional em React para mostrar a imagem correta com base no status e no número da casa. */}
            {(status === 0 || status === 1) && recompensa === 'certificado' && <img src={CertBloqueado} alt="Imagem Certificado Bloqueado" />}
            {status === 2 && recompensa === 'certificado' && <img src={CertDesbloqueado} alt="Imagem DesativadaImp Boneca" />}

            {status === 0 && numero%2===1 && <img src={BloqueadaImp} alt="Imagem BloqueadaImp" />}
            {status === 0 && numero%2===0 && <img src={BloqueadaPar} alt="Imagem BloqueadaPar" />}

            {status === 1 && numero%2===1 && <img src={AtivadaImp} alt="Imagem AtivadaImp" />}
            {status === 1 && numero%2===0 && <img src={AtivadaPar} alt="Imagem AtivadaPar" />}

            {status === 2 && numero%2===1 && posicao_boneca!==numero && <img src={DesativadaImp} alt="Imagem DesativadaImp" />}
            {status === 2 && numero%2===0 && posicao_boneca!==numero && <img src={DesativadaPar} alt="Imagem DesativadaPar" />}

            {status === 2 && posicao_boneca===numero && getBonecaImage() === DesativadaImpBonecaKoala && <img src={DesativadaImpBonecaKoala} alt="Imagem DesativadaImp" />}
            {status === 2 && posicao_boneca===numero&& getBonecaImage() === DesativadaParBonecaKoala && <img src={DesativadaParBonecaKoala} alt="Imagem DesativadaPar" />}
            {status === 2 && posicao_boneca===numero&& getBonecaImage() === DesativadaImpBonecaUrso && <img src={DesativadaImpBonecaUrso} alt="Imagem DesativadaImp Boneca Urso" />}
            {status === 2 && posicao_boneca===numero&& getBonecaImage() === DesativadaParBonecaUrso && <img src={DesativadaParBonecaUrso} alt="Imagem DesativadaPar Boneca Urso" />}
            {status === 2 && posicao_boneca===numero&& getBonecaImage() === DesativadaImpBoneca && <img src={DesativadaImpBoneca} alt="Imagem DesativadaImp Boneca" />}
            {status === 2 && posicao_boneca===numero&& getBonecaImage() === DesativadaParBoneca && <img src={DesativadaParBoneca} alt="Imagem DesativadaImp Boneca" />}


            { (status === 0 || status === 1) && recompensa === 'mascote_koala' && <img src={KoalaBloqueado} alt="Imagem Koala Bloqueado" />}
            { (status === 0 || status === 1) && recompensa === 'mascote_urso' && <img src={UrsoBloqueado} alt="Imagem Urso Bloqueado" />}
            
            {status === 2 && recompensa === 'mascote_koala' && <img src={KoalaDesbloqueado} alt="Imagem DesativadaImp Boneca" />}
            {status === 2 && recompensa === 'mascote_urso' && <img src={UrsoDesbloqueado} alt="Imagem DesativadaImp Boneca" />}
            
        </div>
    );
}

export default Casas;
