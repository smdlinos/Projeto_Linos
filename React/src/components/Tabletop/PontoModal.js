//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";

import Logo from "../imagens/quest_logo.png"

import {useNavigate} from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/AuthContext';

const urlCode = "https://smdquests.000webhostapp.com/api/verify/response";

import axios from 'axios';


export default function Pontos_Modal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate();
    const {setAuthenticated, setLoading, setUser} = useContext(Context);
    const [code, setCode] = useState('');


    const sendCode = async (e) => { 
    e.preventDefault();

    const token = localStorage.getItem('token').replace(/["]/g, '');
    fetch(urlCode, {
    method: 'post',
    body: JSON.stringify({
      token,
      code
    })
    }).then(function(response) {
      return response.json();
    }).then(data => {
        props.onHide();
        navigate('/tabletop');
    }).catch(error => {
      // Lidar com erros
      console.error(error);
    });
    
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

      <Modal.Body>
        <p className=" modal_titulo">Ganhe Pontos!</p>
        
        
        <Form className="forms font_t" onSubmit={sendCode}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label className="text-muted ">
        Código do questionário
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onChange={(e) => setCode(e.target.value)} placeholder="Código de Resgate" className=""/>
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit" className="px-5 mt-3 botao">
        VALIDAR CÓDIGO
    </Button>
    </Form>

        </Modal.Body>
      </div>

      
    </Modal>
    </div>
  );
}