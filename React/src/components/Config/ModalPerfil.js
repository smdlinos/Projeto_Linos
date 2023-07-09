//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import Koala from "../imagens/koala_novo.svg"
import Leao from "../imagens/PerfilLiao.svg"
import Passaro from "../imagens/PerfilPassarin.svg"
import Tigre from "../imagens/PerfilTigre.svg"
import Urso from "../imagens/PerfilUrso.svg"
import Pinguin from "../imagens/PerfilPingao.svg"
import Leao_ from "../imagens/PerfilLiaoMax.svg"
import Passaro_ from "../imagens/PerfilPassarinMax.svg"
import Tigre_ from "../imagens/PerfilTigreMax.svg"
import Urso_ from "../imagens/PerfilUrsoMax.svg"
import Pinguin_ from "../imagens/PerfilPingaoMax.svg"
import Koala_ from "../imagens/PerfilKoala.svg"
import React, { useContext, useEffect, useState } from 'react';



import Logo from "../imagens/quest_logo.png"

export default function Modal_Perfil(props) {
    const [modalShow, setModalShow] = React.useState(false);
    //const [password1, setPassword1] = useState(1);

    const [valor, setValor] = useState(props.value);

    const atualizarEstado = (novoValor) => {
      setValor(novoValor);
      props.custom(novoValor);
    };

    let img;

    const perfil = (x) => {
        switch (x) {
          case '1':
              props.perfil(Koala)
            return  Koala;
            break;
          case '2':
            props.perfil(Urso_)
            return  Urso_;
            break;
          case '3':
            props.perfil(Tigre_)
            return  Tigre_ ;
            break;
          case '4':
            props.perfil(Leao_)
            return  Leao_ ;
            break;
          case '5':
            props.perfil(Passaro_)
            return  Passaro_ ;
            break;
          case '6':
            props.perfil(Pinguin_)
            return  Pinguin_ ;
            break;
          default:
            props.perfil(Koala)
            return  Koala ;
            break;
        }
    }

    
  return (
    <div className="font_t ">
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton>
      </Modal.Header>

      <div className="mx-3">

      <Modal.Body className="mx-3 formatacao">
          <Row>
              <Col className="alinhamento">
              <p className="quests_todos">Editar Perfil</p>
              </Col>
          </Row>
          <Row className="pb-3">
              <Col className="alinhamento">
              <img src={perfil(valor)} alt="p_koala"/>
              </Col>
          </Row>
          <p className="alinhamento">Seleione um dos mascostes</p>
          <Row className="pb-4 ">
              <Col xs={4}>
              <Button variant="link" onClick={() => atualizarEstado("1")}>
              <img src={Koala_} alr="kaola_pequeno" className=""/>
              </Button>
              </Col>
              <Col xs={4}>
              < Button variant="link" onClick={() => atualizarEstado("2")}>
              <img src={Urso} alr="kaola_pequeno" />
                </ Button >
              
              </Col >
              <Col xs={4}>
              < Button variant="link" onClick={() => atualizarEstado("3")}>
              <img src={Tigre} alr="kaola_pequeno" />
                </ Button >
              
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
              < Button variant="link" onClick={() => atualizarEstado("4")}>
              <img src={Leao} alr="kaola_pequeno"/>
                </ Button >
              
              </Col>
              <Col xs={4}>
              < Button variant="link" onClick={() => atualizarEstado("5")}>
              <img src={Passaro} alr="kaola_pequeno"/>
                </ Button >
              
              </Col>
              <Col xs={4}>
              < Button variant="link" onClick={() => atualizarEstado("6")}>
              <img src={Pinguin} alr="kaola_pequeno"/>
                </ Button >

              </Col>
            </Row>
        
        </Modal.Body>
      </div>

      
    </Modal>
    </div>
  );
  
}