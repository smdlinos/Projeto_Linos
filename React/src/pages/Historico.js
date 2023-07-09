//Styles
import "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png"

//Components
import SessionLogin from "../components/Login/SessionLogin";
import Header_q from "../components/Quests/Header_q";
import Footer from "../components/Global/Footer";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import User from "../components/imagens/user2.svg";
import House from "../components/imagens/home2.svg";
import Clock from "../components/imagens/Clock_q.svg"
import Star from "../components/imagens/star_q.svg";
import voltar from "../components/imagens/voltar.svg"

import React, { useContext, useEffect, useState } from 'react';
const getHistoric = 'https://smdquests.000webhostapp.com/api/historico';
import { useNavigate, Navigate} from "react-router-dom";
import { Context } from '../context/AuthContext';



function Historico (){

    const navigate = useNavigate();
    const [quests, setQuests] = useState([]);

    useEffect(() =>{

         const token = localStorage.getItem('token').replace(/["]/g, '');
         const teste = async () => {
          fetch(getHistoric, {
            method: 'post',
            body: JSON.stringify({
              token
          })
          }).then(function(response) {
              return response.json();
          }).then(data => {
               let dados = data.historico.reverse();
               setQuests(dados);
            }).catch(error => {
              // Lidar com erros
                console.error(error);
          });
        }

        teste();

    },[]);

    
    return(
        <div className="background_land">

            <Header_q />
            
            <Row className="alinhamento">
                <Col>
                <p className="quests_todos">Histórico de questionários</p>
                </Col>
            </Row>
            {quests == '' && <p>Seus questionários aparecerão aqui</p>}
            <Row>
                <Container className="m-auto">
                <Row className="m-auto">
                <Col className=" mb-2">  
                    {quests && quests.map((quest, id) => (
                            <Card    
                                onClick={(e)=>navigate("/quest_d/"+quest.id_questionario)}
                                id = {quest.id_questionario}
                                style={{ width: '100%' }}
                                className="mb-2 card"
                                key={id}
                            >
                            <Card.Body className="mx-4 ">
                                
                                <Card.Title > 
                                <p className="font_quests">{quest.titulo}</p>
                                </Card.Title>
                                <div className="font_tesao">
                                    <Row>
                                        <Col xs={1} className="espaco_card">
                                        <img src={User} alt="icon" className="cor_itens"/>
                                        </Col>
                                        <Col>
                                        <small>{quest.autor}</small>
                                        </Col>
                                    </Row>
                                    <Row className="pb-3">
                                        <Col xs={1}>
                                        <img src={House} alt="icon" className="cor_itens"/>
                                        </Col>
                                        <Col>
                                        <small>{quest.instituicao}</small><br/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <small>{quest.descricao}</small>
                                        </Col>
                                    </Row>
                                    
                                    <br/>
                                    <Row className="pb-2">
                                       
                                        <Col xs={1}>
                                        <img src={Clock} alt="relogio"/>
                                        </Col>
                                        <Col>
                                        <small>{quest.data_inicio}</small>
                                        </Col>
                                        <Col>
                                        <img src={Star} alt='pontos'className='estrelinha'/>
                                        <small>{quest.pontuacao}</small>
                                        </Col>
                                    </Row>
                                   
                                    
                                </div>
                               
                            </Card.Body>

                            </Card>
                        ))}
               </Col>      
            </Row>            
                </Container>
            </Row>
        </div>
    )
}

export default Historico;