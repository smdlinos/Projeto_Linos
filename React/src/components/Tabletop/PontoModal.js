//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";

const deleteUser = "https://smdquests.000webhostapp.com/api/user/delete";

import Logo from "../imagens/quest_logo.png"

import {useNavigate} from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/AuthContext';

import axios from 'axios';


export default function Pontos_Modal(props) {
    const [modalShow, setModalShow] = React.useState(false);

    const {setAuthenticated, setLoading, setUser} = useContext(Context);
    
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
        
        
        <Form className="forms font_t">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label className="text-muted ">
        Código do questionário
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" className=""/>
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