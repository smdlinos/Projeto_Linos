import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../components/Tela.css"
import voltar from "../components/imagens/voltar.svg"
import Button from 'react-bootstrap/Button';
import Logo from "../components/imagens/quest_logo.png"

import {useNavigate} from 'react-router-dom';

import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../context/AuthContext';

export default function Header_q() {

  const { authenticated } = useContext(Context);

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
    <div>
      <Container className="mb-4 alinhamento">
        <Row className="justify-content-md-center">
          <Col>
            <a onClick={redirect}><img src={voltar} alt="botao_voltar" className="mt-5 botao_voltar"/></a>
          </Col>
          <Col className="mt-4 titulo" xs={6}>
            <a href="/"><img src={Logo} alt="logo" className="mt-4 quest_logo_q"/></a>
          </Col>
          <Col>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}
