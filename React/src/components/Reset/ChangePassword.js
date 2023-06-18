import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Tela.css"
import Header from "../Header.js";

import { useState } from 'react';

export default function ChangePassword (props){

    const [password2, setPassword2] = useState(2);

    const senhasDiferentes = () =>{
        alert('senhas diferentes');
    }


    return <>
        <h2 className="text-muted">Crie uma nova senha</h2>
        <br/>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="senha">Escolher nova senha</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Insira aqui" 
          className="" 
          name = "password"
          onChange={props.setPassword}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label htmlFor="password">Confirmar</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Insira aqui" 
          name = "password1" 
          onChange={(e)=> setPassword2(e.target.value)}
          />
        </Form.Group>
        {props.password === password2 ? <Button variant="primary" type="submit" className="px-5 mb-3 mt-3">
        Próximo
        </Button>: 
        <Button variant="primary" type="button"  onClick={senhasDiferentes} className="px-5 mb-3 mt-3">
        Criar nova Senha
        </Button>}
        <br />
      </>
}