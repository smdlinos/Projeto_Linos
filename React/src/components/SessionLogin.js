import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function SessionLogin() {

  function cadastroUsuário(e){
    e.preventDefault()
    console.log(`Usuário: ${email} Senha: ${password}`)
  }

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  return (
    <div>
         <br/>
           
         <Row className="justify-content-sm-center">
        <Col sm="auto" none="">
          <Form className="mb-4 rounded p-5 mx-3" onSubmit={cadastroUsuário} method="Post">
            <h2>Seja bem vindo</h2>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Login</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="E-mail" 
              className="" 
              name = "email"
              onChange={(e)=> setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label htmlFor="password">Senha</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Sua senha" 
              name = "password" 
              onChange={(e)=> setPassword(e.target.value)}
              />
            </Form.Group>
            
                
            <a href="/reset" className="text-muted"><small>Esqueci a senha</small></a>
            <br/>
            
            <Button variant="primary" type="submit" className="px-5 mb-3 mt-3">
              Login
            </Button>
            <br />
            <Link to="/home">Ou entre como visitante</Link>
          </Form>
          <div>
      <p className="pt-5">Não tem conta?<a href="/register">Cadastre-se</a></p>
      </div>

        </Col>
      </Row>
      
    </div>
  );
}
