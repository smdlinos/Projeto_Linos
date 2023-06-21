import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png"
import Button from 'react-bootstrap/Button';
import Star from "./imagens/Start_Point.svg"
import axios from 'axios';
const urlI = 'http://localhost/quests/user/interesses'

import React, { useContext, useEffect, useState } from 'react';


export default function Body_q({quest , auth}) {


  const [interesses,setInteresses] = useState();
  const [loading, setLoading] = useState(true);


  const [matches, setMatches] = useState([]);

  if(auth){
        useEffect(() =>{
        const token = localStorage.getItem('token');
         const teste = async () => {
             const response = await axios.get(urlI, {
            }).then(function (response) {
            if(response.data){
                setInteresses(response.data.interesse);
            };
            }).catch(function (error) {

              console.log(error);

            });
         }
         teste();
         setLoading(false);
        },[]);

    }
    
     useEffect((e) => {
        if(interesses != undefined){
        setMatches(match(quest.temas,interesses));
        setLoading(false);
        }
    }, [interesses])
    // console.log(interesses);


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
    <div>
      <Container className="mb-4 fonte_login">
        <Row className="justify-content-start">
          <Col className="mt-4">
            <p className="font_titulo_q">
              Descrição: 
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
                Postado em: {quest.data_inicio}
              </p>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <h5>Tags</h5>
                <ul>
                  {quest.temas.map((e) => (
                    <li key={e.id_tema} className={verifyMatch(e.id_tema, matches)}>
                      {e.tema}
                    </li>
                  ))}
                </ul>
              </Col>

          </Row>
          <Row>
              <Col xs={12}className="">
              <img src={Star} alt="start_points"/>
              <h2>
                  {quest.pontuacao}
              </h2>
              </Col>
          </Row>
          <a href={'https://'+`${quest.link}`}><Button type="button" className="px-5 mb-3 mt-3 botao">
              LINK DO QUESTIONÁRIO
          </Button>
          </a>
      </Container>
    </div>
  );
}