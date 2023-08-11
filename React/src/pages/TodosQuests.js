//Styles
import "../components/Tela.css"
import Logo from "../components/imagens/quest_logo.png"

//Components
import SessionLogin from "../components/Login/SessionLogin";
import Header_q from "../components/Quests/Header_q";
import Footer from "../components/Global/Footer";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Lupa from "../components/imagens/lupaa.svg";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import User from "../components/imagens/user2.svg";
import House from "../components/imagens/home2.svg";
import Clock from "../components/imagens/Clock_q.svg"
import Star from "../components/imagens/star_q.svg";
import voltar from "../components/imagens/voltar.svg"

import Forms from "../components/Home/Forms";
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
const urlAllQuests = "https://smdquests.000webhostapp.com/api/quests";
const url = "https://smdquests.000webhostapp.com/api/search/";

import { useNavigate, Navigate} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

function TodosQuests(){

    const navigate = useNavigate();
    const [volta, setVolta] = useState(false);
    const [semResultados, setSemResultados] = useState(false);
    const [allQuests, setAllQuests] = useState();
    const [quests, setQuests] = useState();
    const [busca, setBusca] = useState(undefined);

    useEffect(() =>{

        const token = localStorage.getItem('token');
         const teste = async () => {
             
            fetch(urlAllQuests, {
            method: 'get',
            }).then(function(response) {
                return response.json();
            }).then(data => {
                    setQuests(data);
                    setAllQuests(data);
            }).catch(error => {
                // Lidar com erros
                console.error(error);
            });
        }
         teste();
    },[]);


    function search(e){
        e.preventDefault();
        const token = localStorage.getItem('token');
         const teste = async () => {
             
            fetch(url+busca, {
            method: 'get',
            }).then(function(response) {
                return response.json();
            }).then(data => {
                    setQuests(data.titulo);
                    if (data.titulo == null || data.titulo == undefined || data.titulo == '') {
                        setSemResultados(true);
                    }
                    setVolta(true);
            }).catch(error => {
                // Lidar com erros
                console.error(error);
            });
        }
         teste();
    }

    const redirect = (e) => {
        e.preventDefault();
        setQuests(allQuests);
        setSemResultados(false);
        setVolta(false);
    }

    return(
        <div className="background_land">

            <Header_q />
            
            <Row className="alinhamento">
                <Col>
                <p className="quests_todos">Todos os questionários</p>
                </Col>
            </Row>
            <Row className="mx-3 pb-3">
                <Col>
            <Form className="d-flex form_quests" onSubmit={(e) => search(e)}>
            <Form.Control
              type="search"
              placeholder="Pesquisar"
              className="me-2 form_search"
              aria-label="Pesquisar"
              onChange={(e) => setBusca(e.target.value)}
            />
            <Button type='submit' variant="link"><img src={Lupa} alt="lupa" className="lupa_todos"/></Button>
            </Form>    
            </Col>
            </Row>
            <Row className="my-2"> 
                <Col>
                { semResultados &&
                    <div >
                        <center>
                        <p className="font_t">Sem resultados para sua pesquisa :(</p>
                        </center>
                    </div>
                        
                    }
                </Col>
            </Row>
                <Container className="m-auto">
                <Row className="m-auto">
                <Col className="mb-2">  
                    {quests && quests.map((quest) => (
                            <Card    
                                onClick={(e)=>navigate("/quest_d/"+quest.id_questionario)}
                                id = {quest.id_questionario}
                                style={{ width: '100%' , borderRadius: "2rem"}}
                                className="mb-2 card"
                                key={quest.id_questionario}
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
                                        <Col xs={8}>
                                        <p className="texto_data">{quest.data_inicio}</p>
                                        </Col>
                                        <Col className="sla" xs={1}>
                                        <img src={Star} alt='pontos'className='estrelinha espaco'/>
                                        <p className="texto_data pt-2">{quest.pontuacao}</p>
                                        </Col>
                                    </Row>
                               
                            </Card.Body>

                            </Card>
                        ))}
                    { volta &&     
                    <center><a onClick={redirect}><img src={voltar} alt="botao_voltar" className="ps-3 pb-3"/></a></center>
                }
               </Col>      
            </Row>            
           
                </Container>

                <Footer/>
        </div>
    )
}

export default TodosQuests