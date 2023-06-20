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
        setLoading(false);
        }
    }, [interesses])
     console.log(interesses);
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
                    <li key={e.id_tema}>
                      {e.tema}
                    </li>
                  ))}
                </ul>
              </Col>
              <Col>
              <h5>
                  Matchs
              </h5>
              <ul>
              {interesses != undefined &&
              <>
                  {interesses.map((t) => ( 
                    <li key={t.id_tema}>
                      {t.tema}
                    </li>
                  ))}
              </>
              }
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