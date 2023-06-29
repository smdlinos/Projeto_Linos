//Styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cad from "../imagens/cadeado.svg"
import Tela from "../Tela.css"


//Dependences
import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { Context } from '../../context/AuthContext';


export default function SessionLogin() {

  const { authenticated, handleLogin, setPassword, setLogin } = useContext(Context);

  console.log('Login', authenticated);


  return (
    <div>
         <br/>
           
         <Row className="mb-5 agrupar">
          <Col sm="auto" none="">
          <Form className="mb-4 rounded p-5 mx-3" onSubmit={handleLogin} method="Post">
            <h2 className="titulo_login mb-4 alinhamento">Seja bem vindo!</h2>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email" className="fonte_login login_espacamento">Login</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Nome de usuário ou Email" 
              className="email" 
              name = "email"
              onChange={(e)=> setLogin(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label htmlFor="password" className="fonte_login login_espacamento_s">Senha</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Sua senha" 
              name = "password" 
              className="senha"
              onChange={(e)=> setPassword(e.target.value)}
              />
            </Form.Group>
            
                
            <a href="/reset" className="text-muted fonte_login espacamento_esqueci"><small>Esqueci a senha</small></a>
            <br/>
            
            <Button type="submit" className="px-5 mb-3  botao">
              ENTRAR
            </Button>
            <br />
            <Link to="/home" className="fonte_login espacamento_visitante">Ou entre como visitante</Link>
          </Form>
          <div className="pb-5">
      <p className="pt-4 mb-5 fonte_login alinhamento">Não tem uma conta?<a href="/register">Cadastre-se</a></p>
      </div>

        </Col>
      </Row>
      
    </div>
  );
}
