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

export default function Modal_Deletar(props) {
    const [modalShow, setModalShow] = React.useState(false);
    //const [password1, setPassword1] = useState(1);


    
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
        <Form.Group className="mb-2 pb-3">
                    <Form.Label htmlFor="password1" className="text-muted pt-2">Senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="" 
                    name = "password1"
                    id="passaword" 
                    onChange={props.password}
                    />
                    </Form.Group>
                    
        
       
        <Button onClick={props.onHide} className="botao " type="" href="/questsdelete" >SALVAR ALTERAÇÕES</Button>
        
        </Modal.Body>
      </div>

      
    </Modal>
    </div>
  );
}