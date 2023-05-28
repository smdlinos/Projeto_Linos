import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import "../componentes/Tela.css"
import Header from "../componentes/Header.js";

export default function Redefinir() {

  function cadastroUsuário(e){
    e.preventDefault()
    console.log(`Senha: ${password}`)
  }

  const [password, setPassword] = useState()


  return (
    <div className="background">
        <Header/>
      <Row className="justify-content-sm-center">
        <Col sm="auto" none="">
          <Form className="mb-5 rounded p-5 mx-3" onSubmit={cadastroUsuário} method="Post">
            <h2 className="text-muted">Crie uma nova senha</h2>
            <br/>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="senha">Escolher nova senha</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Insira aqui" 
              className="" 
              name = "password-nova"
              onChange={(e)=> setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label htmlFor="password">Confirmar</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Insira aqui" 
              name = "password" 
              onChange={(e)=> setPassword(e.target.value)}
              />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="px-5 mb-3 mt-3">
              Criar Senha
            </Button>
            <br />
    
          </Form>
          <div className="espaco">
      </div>

        </Col>
      </Row>
    </div>
  );
}
