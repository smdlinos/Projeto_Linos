import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../componentes/Tela.css"
import Footer from "../componentes/footer";
import Header from "../componentes/Header"
import { useState } from "react";


export default function Cadastro() {

  function cadastroUsuário(e){
    e.preventDefault()
    console.log(`Usuário: ${email} Senha: ${password}`)
  }

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  return (
    <div className="background">
        
        <Header/>
      <Row className="justify-content-sm-center">
        <Col sm="auto" none="">
          <Form className="mb-4 rounded p-5 mx-3" onSubmit={cadastroUsuário} method="Post">
            <h2>Realize seu Cadastro</h2>

            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Username</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Seu username" 
              className="" 
              name = "email"
              onChange={(e)=> setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">E-mail</Form.Label>
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

            <Form.Group className="mb-2">
              <Form.Label htmlFor="password">Repita sua senha</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Repita sua senha" 
              name = "password" 
              onChange={(e)=> setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Nome Completo</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="" 
              className="" 
              name = "email"
              onChange={(e)=> setEmail(e.target.value)}
              />
            </Form.Group>


        <Form.Group className="mb-2">
        <Form.Label htmlFor="genero">Gênero:</Form.Label>
        {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
        
          <Form.Check
            inline
            label="Masculino"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Feminino"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Outro"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
      </Form.Group>
            
            
            <Form.Group>
            <Form.Label htmlFor="Escolaridade">Escolaridade</Form.Label>
            <Form.Select aria-label="Floating label select example">
                <option value="1">Sem escolaridade</option>
                <option value="2">Ensino Fundamental</option>
                <option value="3">Ensino Médio</option>
                <option value="4">Ensino Supeior</option>
            </Form.Select>
            </Form.Group>
            <br/>
            <Form.Group>
            <Form.Label htmlfor="data">Data de Nascimento:</Form.Label>
            <Form.Control
            type="date" id="data"  
       name="meeting-time" value=""/>
            </Form.Group>
  
            <br/>
            
            <Button variant="primary" type="submit" className="px-5 mb-3 mt-3">
              Próximo
            </Button>
          </Form>
            <Footer/>
        </Col>
      </Row>
      
    </div>
  );
}