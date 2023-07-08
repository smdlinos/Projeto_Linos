//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import React, { useContext, useEffect, useState } from 'react';


import Logo from "../imagens/quest_logo.png"

export default function Modal_Senha(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [password, setPassword] = useState(0);
    const [password1, setPassword1] = useState(1);

    const change = () => {
      props.password(password);
      props.onHide;
    }

    const invalid = () => {
      alert('senhas diferentes')
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
        <Form.Group className="mb-2">
                    <Form.Label htmlFor="password1" className="text-muted pt-2">Senha atual</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="" 
                    name = "password"
                    id="password" 
                    />
                    </Form.Group>
                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="password1" className="text-muted pt-2">Nova senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="......." 
                    name = "password1"
                    id="nova_passaword1" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group className="mb-4">
                    <Form.Label htmlFor="password1" className="text-muted pt-2">Confirme a senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="......." 
                    name = "password2"
                    id="nova_passaword2" 
                    onChange={(e) => setPassword1(e.target.value)}
                    />
                    </Form.Group>
      
        { password == password1 ? <Button onClick={change} className="botao">SALVAR ALTERAÇÕES</Button> : 
          <Button onClick={invalid} className="botao">SALVAR ALTERAÇÕES</Button>}
  
      </Modal.Body>
    </Modal>
    </div>
  );
}