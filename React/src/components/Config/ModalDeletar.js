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


export default function Modal_Deletar(props) {
    const [modalShow, setModalShow] = React.useState(false);

    const {setAuthenticated, setLoading, setUser} = useContext(Context);
    
    const navigate = useNavigate();
    const [password,  setPassword] = useState('');
    
  async function handleDelete(e) {
    e.preventDefault();

    const token = localStorage.getItem('token').replace(/["]/g, '');
    fetch(deleteUser, {
    method: 'post',
    body: JSON.stringify({
      password,
      token
    })
    }).then(function(response) {
      return response.json();
    }).then(data => {

       if(data){
        console.log('Deletado com sucesso'); 
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = undefined;
        setAuthenticated(false);
        setUser(null);
        navigate('/account/delete');
        setLoading(true);
        props.onHide(false);
       }

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
        <h2 className=" titulo_login">Quer mesmo excluir sua conta?</h2>
        <p className="font_popover">Essa ação é irreversível, insira sua senha para confirmar a decisão.</p>
        <Form className="mb-4 rounded p-3 forms" onSubmit={handleDelete}>
        <Form.Group className="mb-2 pb-3">
                    <Form.Label htmlFor="password1" className="text-muted pt-2">Senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="" 
                    name = "password1"
                    id="passaword" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    </Form.Group>
                    
       
        <Button onClick={props.onHide} className="botao " type="submit">DELETAR CONTA</Button>
        </Form>
        </Modal.Body>
      </div>

      
    </Modal>
    </div>
  );
}