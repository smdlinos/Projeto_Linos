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
        <div className="">

            <Header_q />
            
            <Row className="alinhamento">
                <Col>
                <p className="quests_todos">Histórico de questionários</p>
                </Col>
            </Row>
            {quests == '' && <p className="font_t alinhamento pt-2">Nada por enquanto... <br/> Seus questionários aparecerão aqui</p>}
            <Row className="mb-5 pb-5">
                <Container className="m-auto pb-5">
                <Row className="m-auto">
                <Col className=" mb-2">  
                    {quests && quests.map((quest, id) => (
                            <Card    
                                onClick={(e)=>navigate("/quest_d/"+quest.id_questionario)}
                                id = {quest.id_questionario}
                                style={{ width: '100%' , borderRadius: "2rem" }}
                                className="mb-1 card"
                                key={id}
                            >
                            <Card.Body className="mx-4 ">
                                
                            <Row>
                                        <Col>
                                        <p className="titulo_login_q">{quest.titulo}</p>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col xs={1} className="espaco_card">
                                        <img src={User} alt="icon" className="cor_itens"/>
                                        </Col>
                                        <Col>
                                        <small>{quest.autor}</small>
                                        </Col>
                                    </Row>
                                    <Row className="pb-1">
                                        <Col xs={1}>
                                        <img src={House} alt="icon" className="cor_itens"/>
                                        </Col>
                                        <Col>
                                        <small>{quest.instituicao}</small><br/>
                                        </Col>
                                    </Row>
                                    <Row className="pb-2">
                                        <Col>
                                        <small>{quest.descricao}</small>
                                        </Col>
                                    </Row>
                                    
                                   
                                    <Row className="">
                                       
                                        <Col xs={1}>
                                        <img src={Clock} alt="relogio"/>
                                        </Col>
                                        <Col>
                                        <p className="texto_data">{quest.data_inicio}</p>
                                        </Col>
                                        <Col className="sla" xs={3}>
                                        <img src={Star} alt='pontos'className='estrelinha espaco'/>
                                        <p className="texto_data">{quest.pontuacao}</p>
                                        </Col>
                                    </Row>
                               
                            </Card.Body>

                            </Card>
                        ))}
               </Col>      
            </Row>            
                </Container>
            </Row>
            
            <Footer/>
        </div>
    )
}

export default Historico;