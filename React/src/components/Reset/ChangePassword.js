//Styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Tela.css"

//Dependences
import { useState } from 'react';

export default function ChangePassword (props){

    const [password2, setPassword2] = useState(2);

    const senhasDiferentes = () =>{
        alert('senhas diferentes');
    }


    return <>
        <h1 className="titulo_login">Crie uma nova senha</h1>
        <br/>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="senha" className="text-muted">Escolher nova senha</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Insira aqui" 
          className="" 
          name = "password"
          onChange={props.setPassword}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="px-5 mb-3 mt-3 botao">
        REDEFINIR SENHA
        </Button>
        <br />
        <a href="/login" className="text-muted alinhamento"><p>Ou faça login</p></a>
      </>
}