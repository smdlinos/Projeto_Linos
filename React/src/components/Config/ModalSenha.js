//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import React, { useContext, useEffect, useState } from 'react';

const url = "https://smdquests.000webhostapp.com/api/change/password";


import Logo from "../imagens/quest_logo.png"

export default function Modal_Senha(props) {
    const [modalShow, setModalShow] = React.useState(false);

    const [mod, setMod] = useState(false);
    const [newPassword, setNewPassword] = useState(1);
    const [password2, setPassword2] = useState(2);

    const [password,  setPassword] = useState(0);
    
    const invalid = () => {
      alert('senhas diferentes')
    }

  async function changePassword(e) {
    e.preventDefault();

    const token = localStorage.getItem('token').replace(/["]/g, '');
    fetch(url, {
    method: 'post',
    body: JSON.stringify({
      password,
      newPassword,
      token
    })
    }).then(function(response) {
      return response.json();
    }).then(data => {

       if(data){
        console.log('Senha alterada com sucesso'); 
        setMod(true);
        props.onHide(false);
       }

    }).catch(error => {
      // Lidar com erros
      console.error(error);
    });
  }
    
  return (
    <div className="font_t">
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h4 className="alinhamento titulo_login">Redefinir a Senha</h4>
        <Form className="mb-4 rounded p-3 forms" onSubmit={changePassword}>
        <Form.Group className="mb-2">
                    <Form.Label htmlFor="password1" className="text-muted pt-2">Senha atual</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Senha" 
                    name = "password"
                    id="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="password1" className="text-muted pt-2">Nova senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Insira sua Nova senha" 
                    name = "password1"
                    id="nova_passaword1" 
                    onChange={(e) => setNewPassword(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group className="mb-4">
                    <Form.Label htmlFor="password1" className="text-muted pt-2">Confirme a senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Repita sua senha" 
                    name = "password2"
                    id="nova_passaword2" 
                    onChange={(e) => setPassword2(e.target.value)}
                    />
                    </Form.Group>
      
        { newPassword == password2 ? <Button type="submit" onClick={mod ? props.onHide(false) : console.log('nhee')} className="botao">SALVAR ALTERAÇÕES</Button> : 
          <Button type="button" onClick={invalid} className="botao">SALVAR ALTERAÇÕES</Button>}
        </Form>
      </Modal.Body>
    </Modal>
    </div>
  );
}