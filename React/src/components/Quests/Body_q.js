//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import Logo from "../imagens/quest_logo.png"
import Button from 'react-bootstrap/Button';
import Star from "../imagens/Start_Point.svg"
import axios from 'axios';

//Dependences
import React, { useContext, useEffect, useState } from 'react';


//Endpoints
const urlI = 'https://smdquests.000webhostapp.com/api/user/interesses';


export default function Body_q({quest , auth}) {


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