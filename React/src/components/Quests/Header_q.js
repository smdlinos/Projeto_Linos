//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import voltar from "../imagens/voltar.svg"
import Button from 'react-bootstrap/Button';
import Logo from "../imagens/quest_logo.png"
import estrela from "../imagens/estrela2.svg";
import OverlayPerfil from "../Home/OverlayPerfil";
import Stack from 'react-bootstrap/Stack';
import Star from "../imagens/estrela_quest.svg";
import Overlay2 from "../Home/Overlay2";


//Dependences
import {useNavigate} from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/AuthContext';



export default function Header_q() {

  const { authenticated , user} = useContext(Context);
  

  const navigate = useNavigate();

  const redirect = (e) => {
    e.preventDefault();

    if (authenticated) {
      navigate('/home/'+localStorage.getItem('token').replace(/["]/g, ''));
    } else {
      navigate('/home');
    }
    
  }


  return (
    <div className="background_header">
      <Container className="mb-4 alinhamento" >
        <Row className="">
          <Col xs={3}>
            <a onClick={redirect}><img src={voltar} alt="botao_voltar" className="mt-5 botao_voltar"/></a>
          </Col>
          <Col className="mt-4 titulo me-1" xs={5}>
            <a href="/"><img src={Logo} alt="logo" className="mt-4 ms-4 quest_logo_q"/></a>
          </Col>
          <Col xs={3}>
          {authenticated && 
            <Stack direction="horizontal" className="pt-5 ps-3">  
              <img src={estrela} alt="estrela" className="estrela "/>
           {user && <b><p className="font_t">{user.user.pontos}</p></b>}
              <Overlay2 name={"end"}/>
            </Stack>
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}
