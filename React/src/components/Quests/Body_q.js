//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import Logo from "../imagens/quest_logo.png"
import Button from 'react-bootstrap/Button';
import Star from "../imagens/estrela_quest.svg"
import axios from 'axios';
import Clock from "../imagens/relogio.svg"
import User from "../imagens/user.svg";
import House from "../imagens/home.svg"
import Modal from 'react-bootstrap/Modal';
import Modal_Icon from '../imagens/modal_icon.svg';


//Dependences
import React, { useContext, useEffect, useState } from 'react';
import Modal_q from "./Modal_q";


//Endpoints
const urlI = 'https://smdquests.000webhostapp.com/api/user/interesses';


export default function Body_q({quest , auth}) {

  const [modalShow, setModalShow] = React.useState(false);

  const [interesses,setInteresses] = useState();
  const [loading, setLoading] = useState(true);


  const [matches, setMatches] = useState([]);

  if(auth){
        
    useEffect(() => {
      async function getInteresses() { // esse teste possivelmente deu certo

          const token = localStorage.getItem('token').replace(/["]/g, '');

          fetch(urlI, {
            method: 'post',
            body: JSON.stringify({
              token
          })
          }).then(function(response) {
              return response.json();
          }).then(data => {
              setInteresses(data.interesses);
            }).catch(error => {
              // Lidar com erros
              console.error(error);
          });

      }

      getInteresses();
      setLoading(false);
    }, [])

    } else {

      useEffect((e) => {
        if (quest != undefined) {
          setLoading(false);
        }

      }, []);

    }
    
     useEffect((e) => {
        if(interesses != undefined){
          if(quest.temas != undefined){
            setMatches(match(quest.temas,interesses));
          }
        setLoading(false);
        }
    }, [interesses])


  const match = (temas, interesses) => {
     let matches = [];

     for (var i = 0; i < temas.length; i++) {
      for (var j = 0; j < interesses.length; j++) {
        if(temas[i].id_tema == interesses[j].id_tema){
         matches[i] = temas[i].id_tema
        }
      }
    }

     return matches;
  }


  const verifyMatch = ( id ,matches) => {
    for (var i = 0 ; i < matches.length; i++) {
      if (id == matches[i]) {
        return 'alert';
      }
    }
  }


  return (
    <div className="mx-3">
      <Container className=" ">
        <Row className="">
          <Col className="mt-4 titulo">
            <h2 className="titulo_login">
             {quest.titulo}
            </h2>
          </Col>
          <Col className="pontos_quest mt-3">
            <img src={Star} alt="star_points" className="estrela_quest"/>
            <h2 className="estrela_quest pt-2 ps-1">
                {quest.pontuacao}
            </h2>
            </Col>
          
        </Row>
        <Row className="pt-2">
          <Col sm={6}>
          <p className=""><img src={User} alt="user_icon" className="pe-2 pb-1"></img>Pesquisador: {quest.autor}</p>
          </Col>
          <Col>
            <p><img src={House} alt="house_icon" className="pe-2 pb-1"></img>Instituição: {quest.instituicao} </p>
          </Col>
          
        </Row>
      </Container>

      <Container className="mb-4 fonte_login">
        <Row className="justify-content-start">
          <Col className="mt-1">
            <p className="font_titulo_q">
             <b>Descrição: </b> 
            </p>
          </Col>
        </Row>
        <Row className="pb-3">
            <Col>
            <p>
            {quest.descricao}
            </p>
            </Col>
        </Row>
        <Row>
            <Col>
              <p className="font_titulo_q">
                <img src={Clock} alt="relogio_alt" className="pe-2 pb-1"></img>Postado em: {quest.data_inicio}
              </p>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
              <p><b>Interesses relacionados: <Button variant="link" onClick={() => setModalShow(true)} className="botao_modal">
                <img src={Modal_Icon} alt="modal_icon"></img>
              </Button></b></p>

              <Modal_q
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

              <ul>
              {(quest.temas !=undefined || quest.temas !=null) && loading == false  &&
              <>
                {quest.temas.map((e) => (
                  <li key={e.id_tema} className={verifyMatch(e.id_tema, matches)}>
                    {e.tema}
                  </li>
                ))}
                </>
              }
              </ul>
            </Col>
        </Row>
        <Row>
            
        </Row>
        <a href={'https://'+`${quest.link}`}><Button type="button" className="px-5 mb-3 mt-3 botao">
            LINK DO QUESTIONÁRIO
        </Button>
        </a>
      </Container>
    </div>
  );
}